import { AccountInfo, PublicKey } from "@solana/web3.js";
import { ApiV3PoolInfoStandardItemCpmm, CpmmKeys } from "../../api/type";
import {
  AccountLayout,
  createAssociatedTokenAccountIdempotentInstruction,
  getAssociatedTokenAddressSync,
  NATIVE_MINT,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { BN_ZERO } from "@/common/bignumber";
import { getATAAddress } from "@/common/pda";
import { WSOLMint } from "@/common/pubKey";
import { MakeTxData } from "@/common/txTool/txTool";
import { InstructionType, TxVersion } from "@/common/txTool/txType";
import { Percent } from "../../module";
import { CurveCalculator } from "./curve/calculator";

import BN from "bn.js";
import Decimal from "decimal.js";
import {
  addComputeBudget,
  fetchMultipleMintInfos,
  getMultipleAccountsInfoWithCustomFlags,
  getTransferAmountFeeV2,
  LOCK_CPMM_AUTH,
  LOCK_CPMM_PROGRAM,
} from "@/common";
import { GetTransferAmountFee, ReturnTypeFetchMultipleMintInfos } from "../../raydium/type";
import ModuleBase, { ModuleBaseProps } from "../moduleBase";
import { toApiV3Token, toFeeConfig } from "../token";
import {
  makeCreateCpmmPoolInInstruction,
  makeDepositCpmmInInstruction,
  makeSwapCpmmBaseInInstruction,
  makeSwapCpmmBaseOutInstruction,
  makeWithdrawCpmmInInstruction,
  makeCpmmLockInstruction,
  collectCpFeeInstruction,
} from "./instruction";
import { CpmmConfigInfoLayout, CpmmPoolInfoLayout } from "./layout";
import { getCreatePoolKeys, getPdaObservationId, getPdaPoolAuthority } from "./pda";
import {
  AddCpmmLiquidityParams,
  ComputePairAmountParams,
  CpmmComputeData,
  CpmmLockExtInfo,
  CpmmRpcData,
  CpmmSwapParams,
  CreateCpmmPoolAddress,
  CreateCpmmPoolParam,
  LockCpmmLpParams,
  HarvestLockCpmmLpParams,
  WithdrawCpmmLiquidityParams,
  RpcPoolInfoAccounts,
} from "./type";
import { getCpLockPda } from "./pda";

export default class CpmmModule extends ModuleBase {
  constructor(params: ModuleBaseProps) {
    super(params);
  }

  public async load(): Promise<void> {
    this.checkDisabled();
  }

  public async getCpmmPoolKeys(poolId: string): Promise<CpmmKeys> {
    return ((await this.scope.api.fetchPoolKeysById({ idList: [poolId] })) as CpmmKeys[])[0];
  }

  async getRpcPoolInfo(
    poolId?: string,
    accountInfos?: RpcPoolInfoAccounts,
    fetchConfigInfo?: boolean,
  ): Promise<CpmmRpcData> {
    // 1. Validação prévia e preparação dos dados
    if (!poolId && !accountInfos?.marketAccount) {
      throw new Error("Either poolId or accountInfos.marketAccount must be provided");
    }

    // 2. Fetch pool account
    const poolAccount = poolId
      ? (await getMultipleAccountsInfoWithCustomFlags(this.scope.connection, [{ pubkey: new PublicKey(poolId) }]))[0]
      : accountInfos!.marketAccount;

    if (!poolAccount?.accountInfo) {
      const identifier = poolId || accountInfos?.marketAccount?.pubkey?.toBase58() || "unknown";
      throw new Error(`Pool account not found: ${identifier}`);
    }

    // 3. Decode pool info uma única vez
    const poolInfo = {
      ...CpmmPoolInfoLayout.decode(poolAccount.accountInfo.data),
      programId: poolAccount.accountInfo.owner,
    };

    // 4. Preparar todas as chaves públicas necessárias de uma vez
    const accountsToFetch: { pubkey: PublicKey }[] = [];
    const vaultKeys = [poolInfo.vaultA, poolInfo.vaultB];

    if (poolId) {
      // Adicionar vaults
      accountsToFetch.push(...vaultKeys.map((key) => ({ pubkey: new PublicKey(key) })));

      // Adicionar config se necessário
      if (fetchConfigInfo) {
        accountsToFetch.push({ pubkey: new PublicKey(poolInfo.configId) });
      }
    }

    // 5. Fetch único para todas as contas necessárias (quando usando poolId)
    let fetchedAccounts: any[] = [];
    if (poolId && accountsToFetch.length > 0) {
      fetchedAccounts = await getMultipleAccountsInfoWithCustomFlags(this.scope.connection, accountsToFetch);
    }

    // 6. Processar config info
    let configInfo: ReturnType<typeof CpmmConfigInfoLayout.decode> | undefined;
    if (fetchConfigInfo) {
      const configAccount = poolId
        ? fetchedAccounts[fetchedAccounts.length - 1] // Config é sempre o último quando fetchConfigInfo=true
        : accountInfos?.configState;

      if (!configAccount?.accountInfo) {
        throw new Error(`Config account not found: ${poolInfo.configId}`);
      }
      configInfo = CpmmConfigInfoLayout.decode(configAccount.accountInfo.data);
    }

    // 7. Processar vault accounts
    const vaultAInfo = poolId ? fetchedAccounts[0]?.accountInfo : accountInfos?.vaultAInfo?.accountInfo;

    const vaultBInfo = poolId ? fetchedAccounts[1]?.accountInfo : accountInfos?.vaultBInfo?.accountInfo;

    if (!vaultAInfo || !vaultBInfo) {
      throw new Error(`Vault accounts not found: A=${poolInfo.vaultA}, B=${poolInfo.vaultB}`);
    }

    // 8. Decodificar vault amounts (pode ser otimizado com cache se necessário)
    const vaultAAmount = new BN(AccountLayout.decode(vaultAInfo.data).amount.toString());
    const vaultBAmount = new BN(AccountLayout.decode(vaultBInfo.data).amount.toString());

    // 9. Calcular reserves
    const baseReserve = vaultAAmount.sub(poolInfo.protocolFeesMintA).sub(poolInfo.fundFeesMintA);

    const quoteReserve = vaultBAmount.sub(poolInfo.protocolFeesMintB).sub(poolInfo.fundFeesMintB);

    // 10. Calcular preço de forma mais eficiente
    const baseDecimalFactor = new Decimal(10).pow(poolInfo.mintDecimalA);
    const quoteDecimalFactor = new Decimal(10).pow(poolInfo.mintDecimalB);

    const normalizedBase = new Decimal(baseReserve.toString()).div(baseDecimalFactor);
    const normalizedQuote = new Decimal(quoteReserve.toString()).div(quoteDecimalFactor);

    const poolPrice = normalizedBase.isZero() ? new Decimal(0) : normalizedQuote.div(normalizedBase);

    return {
      ...poolInfo,
      baseReserve,
      quoteReserve,
      vaultAAmount,
      vaultBAmount,
      configInfo,
      poolPrice,
    };
  }

  public async getRpcPoolInfos(
    poolIds: string[],
    fetchConfigInfo?: boolean,
  ): Promise<{
    [poolId: string]: CpmmRpcData;
  }> {
    const accounts = await getMultipleAccountsInfoWithCustomFlags(
      this.scope.connection,
      poolIds.map((i) => ({ pubkey: new PublicKey(i) })),
    );
    const poolInfos: { [poolId: string]: ReturnType<typeof CpmmPoolInfoLayout.decode> & { programId: PublicKey } } = {};

    const needFetchConfigId = new Set<string>();
    const needFetchVaults: PublicKey[] = [];

    for (let i = 0; i < poolIds.length; i++) {
      const item = accounts[i];
      if (item.accountInfo === null) throw Error("fetch pool info error: " + String(poolIds[i]));
      const rpc = CpmmPoolInfoLayout.decode(item.accountInfo.data);
      poolInfos[String(poolIds[i])] = {
        ...rpc,
        programId: item.accountInfo.owner,
      };
      needFetchConfigId.add(String(rpc.configId));

      needFetchVaults.push(rpc.vaultA, rpc.vaultB);
    }

    const configInfo: { [configId: string]: ReturnType<typeof CpmmConfigInfoLayout.decode> } = {};

    if (fetchConfigInfo) {
      const configIds = [...needFetchConfigId];
      const configState = await getMultipleAccountsInfoWithCustomFlags(
        this.scope.connection,
        configIds.map((i) => ({ pubkey: new PublicKey(i) })),
      );

      for (let i = 0; i < configIds.length; i++) {
        const configItemInfo = configState[i].accountInfo;
        if (configItemInfo === null) throw Error("fetch pool config error: " + configIds[i]);
        configInfo[configIds[i]] = CpmmConfigInfoLayout.decode(configItemInfo.data);
      }
    }

    const vaultInfo: { [vaultId: string]: BN } = {};

    const vaultAccountInfo = await getMultipleAccountsInfoWithCustomFlags(
      this.scope.connection,
      needFetchVaults.map((i) => ({ pubkey: new PublicKey(i) })),
    );

    for (let i = 0; i < needFetchVaults.length; i++) {
      const vaultItemInfo = vaultAccountInfo[i].accountInfo;
      if (vaultItemInfo === null) throw Error("fetch vault info error: " + needFetchVaults[i]);

      vaultInfo[String(needFetchVaults[i])] = new BN(AccountLayout.decode(vaultItemInfo.data).amount.toString());
    }

    const returnData: { [poolId: string]: CpmmRpcData } = {};

    for (const [id, info] of Object.entries(poolInfos)) {
      const baseReserve = vaultInfo[info.vaultA.toString()].sub(info.protocolFeesMintA).sub(info.fundFeesMintA);
      const quoteReserve = vaultInfo[info.vaultB.toString()].sub(info.protocolFeesMintB).sub(info.fundFeesMintB);
      returnData[id] = {
        ...info,
        baseReserve,
        quoteReserve,
        vaultAAmount: vaultInfo[info.vaultA.toString()],
        vaultBAmount: vaultInfo[info.vaultB.toString()],
        configInfo: configInfo[info.configId.toString()],
        poolPrice: new Decimal(quoteReserve.toString())
          .div(new Decimal(10).pow(info.mintDecimalB))
          .div(new Decimal(baseReserve.toString()).div(new Decimal(10).pow(info.mintDecimalA))),
      };
    }

    return returnData;
  }

  public toComputePoolInfos({
    pools,
    mintInfos,
  }: {
    pools: Record<string, CpmmRpcData>;
    mintInfos: ReturnTypeFetchMultipleMintInfos;
  }): Record<string, CpmmComputeData> {
    return Object.keys(pools).reduce((acc, cur) => {
      const pool = pools[cur];
      const [mintA, mintB] = [pool.mintA.toBase58(), pool.mintB.toBase58()];

      return {
        ...acc,
        [cur]: {
          ...pool,
          id: new PublicKey(cur),
          configInfo: pool.configInfo!,
          version: 7 as const,
          authority: getPdaPoolAuthority(pool.programId).publicKey,
          mintA: toApiV3Token({
            address: mintA,
            decimals: pool.mintDecimalA,
            programId: pool.mintProgramA.toBase58(),
            extensions: {
              feeConfig: mintInfos[mintA]?.feeConfig ? toFeeConfig(mintInfos[mintA]?.feeConfig) : undefined,
            },
          }),
          mintB: toApiV3Token({
            address: mintB,
            decimals: pool.mintDecimalB,
            programId: pool.mintProgramB.toBase58(),
            extensions: {
              feeConfig: mintInfos[mintB]?.feeConfig ? toFeeConfig(mintInfos[mintB]?.feeConfig) : undefined,
            },
          }),
        },
      };
    }, {} as Record<string, CpmmComputeData>);
  }

  public async getPoolInfoFromRpc(
    poolId: string,
    rpcData?: CpmmRpcData,
    mintInfos?: ReturnTypeFetchMultipleMintInfos,
  ): Promise<{
    poolInfo: ApiV3PoolInfoStandardItemCpmm;
    poolKeys: CpmmKeys;
    rpcData: CpmmRpcData;
  }> {
    rpcData = rpcData || (await this.getRpcPoolInfo(poolId, undefined, true));
    mintInfos =
      mintInfos ||
      (await fetchMultipleMintInfos({
        connection: this.scope.connection,
        mints: [rpcData.mintA, rpcData.mintB],
      }));

    const mintA = toApiV3Token({
      address: rpcData.mintA.toBase58(),
      decimals: rpcData.mintDecimalA,
      programId: rpcData.mintProgramA.toBase58(),
      extensions: {
        feeConfig: mintInfos[rpcData.mintA.toBase58()].feeConfig
          ? toFeeConfig(mintInfos[rpcData.mintA.toBase58()].feeConfig)
          : undefined,
      },
    });
    const mintB = toApiV3Token({
      address: rpcData.mintB.toBase58(),
      decimals: rpcData.mintDecimalB,
      programId: rpcData.mintProgramB.toBase58(),
      extensions: {
        feeConfig: mintInfos[rpcData.mintB.toBase58()].feeConfig
          ? toFeeConfig(mintInfos[rpcData.mintB.toBase58()].feeConfig)
          : undefined,
      },
    });

    const lpMint = toApiV3Token({
      address: rpcData.mintLp.toBase58(),
      decimals: rpcData.lpDecimals,
      programId: TOKEN_PROGRAM_ID.toBase58(),
    });

    const configInfo = {
      id: rpcData.configId.toBase58(),
      index: rpcData.configInfo!.index,
      protocolFeeRate: rpcData.configInfo!.protocolFeeRate.toNumber(),
      tradeFeeRate: rpcData.configInfo!.tradeFeeRate.toNumber(),
      fundFeeRate: rpcData.configInfo!.fundFeeRate.toNumber(),
      createPoolFee: rpcData.configInfo!.createPoolFee.toString(),
    };

    const mockRewardData = {
      volume: 0,
      volumeQuote: 0,
      volumeFee: 0,
      apr: 0,
      feeApr: 0,
      priceMin: 0,
      priceMax: 0,
      rewardApr: [],
    };

    return {
      poolInfo: {
        programId: rpcData.programId.toBase58(),
        id: poolId,
        type: "Standard",
        lpMint,
        lpPrice: 0,
        lpAmount: rpcData.lpAmount.toNumber(),
        config: configInfo,
        mintA,
        mintB,
        rewardDefaultInfos: [],
        rewardDefaultPoolInfos: "Ecosystem",
        price: rpcData.poolPrice.toNumber(),
        mintAmountA: new Decimal(rpcData.vaultAAmount.toString()).div(10 ** mintA.decimals).toNumber(),
        mintAmountB: new Decimal(rpcData.vaultBAmount.toString()).div(10 ** mintB.decimals).toNumber(),
        feeRate: rpcData.configInfo!.tradeFeeRate.toNumber(),
        openTime: rpcData.openTime.toString(),
        tvl: 0,
        burnPercent: 0,

        day: mockRewardData,
        week: mockRewardData,
        month: mockRewardData,
        pooltype: [],

        farmUpcomingCount: 0,
        farmOngoingCount: 0,
        farmFinishedCount: 0,
      },
      poolKeys: {
        programId: rpcData.programId.toBase58(),
        id: poolId,
        mintA,
        mintB,
        openTime: rpcData.openTime.toString(),
        vault: { A: rpcData.vaultA.toBase58(), B: rpcData.vaultB.toBase58() },
        authority: getPdaPoolAuthority(rpcData.programId).publicKey.toBase58(),
        mintLp: lpMint,
        config: configInfo,
        observationId: getPdaObservationId(rpcData.programId, new PublicKey(poolId)).publicKey.toBase58(),
      },
      rpcData,
    };
  }

  public async createPool<T extends TxVersion>({
    poolId,
    programId,
    poolFeeAccount,
    startTime,
    ownerInfo,
    associatedOnly = false,
    checkCreateATAOwner = false,
    txVersion,
    feeConfig,
    computeBudgetConfig,
    txTipConfig,
    feePayer,
    ...params
  }: CreateCpmmPoolParam<T>): Promise<MakeTxData<T, { address: CreateCpmmPoolAddress }>> {
    const payer = ownerInfo.feePayer || this.scope.owner?.publicKey;
    const isFront = new BN(new PublicKey(params.mintA.address).toBuffer()).lte(
      new BN(new PublicKey(params.mintB.address).toBuffer()),
    );

    const [mintA, mintB] = isFront ? [params.mintA, params.mintB] : [params.mintB, params.mintA];
    const [mintAAmount, mintBAmount] = isFront
      ? [params.mintAAmount, params.mintBAmount]
      : [params.mintBAmount, params.mintAAmount];

    const mintAUseSOLBalance = ownerInfo.useSOLBalance && mintA.address === NATIVE_MINT.toBase58();
    const mintBUseSOLBalance = ownerInfo.useSOLBalance && mintB.address === NATIVE_MINT.toBase58();
    const [mintAPubkey, mintBPubkey] = [new PublicKey(mintA.address), new PublicKey(mintB.address)];
    const txBuilder = this.createTxBuilder(feePayer);

    const { account: userVaultA, instructionParams: userVaultAInstruction } =
      await this.scope.account.getOrCreateTokenAccount({
        mint: mintAPubkey,
        tokenProgram: mintA.programId,
        owner: this.scope.ownerPubKey,
        createInfo: mintAUseSOLBalance
          ? {
              payer: payer!,
              amount: mintAAmount,
            }
          : undefined,
        notUseTokenAccount: mintAUseSOLBalance,
        skipCloseAccount: !mintAUseSOLBalance,
        associatedOnly: mintAUseSOLBalance ? false : associatedOnly,
        checkCreateATAOwner,
      });
    txBuilder.addInstruction(userVaultAInstruction || {});
    const { account: userVaultB, instructionParams: userVaultBInstruction } =
      await this.scope.account.getOrCreateTokenAccount({
        mint: new PublicKey(mintB.address),
        tokenProgram: mintB.programId,
        owner: this.scope.ownerPubKey,
        createInfo: mintBUseSOLBalance
          ? {
              payer: payer!,
              amount: mintBAmount,
            }
          : undefined,

        notUseTokenAccount: mintBUseSOLBalance,
        skipCloseAccount: !mintBUseSOLBalance,
        associatedOnly: mintBUseSOLBalance ? false : associatedOnly,
        checkCreateATAOwner,
      });
    txBuilder.addInstruction(userVaultBInstruction || {});

    if (userVaultA === undefined || userVaultB === undefined) throw Error("you don't has some token account");

    const poolKeys = getCreatePoolKeys({
      poolId,
      programId,
      configId: new PublicKey(feeConfig.id),
      mintA: mintAPubkey,
      mintB: mintBPubkey,
    });

    txBuilder.addInstruction({
      instructions: [
        makeCreateCpmmPoolInInstruction(
          programId,
          this.scope.ownerPubKey,
          new PublicKey(feeConfig.id),
          poolKeys.authority,
          poolKeys.poolId,
          mintAPubkey,
          mintBPubkey,
          poolKeys.lpMint,
          userVaultA,
          userVaultB,
          getATAAddress(this.scope.ownerPubKey, poolKeys.lpMint).publicKey,
          poolKeys.vaultA,
          poolKeys.vaultB,
          poolFeeAccount,
          new PublicKey(mintA.programId ?? TOKEN_PROGRAM_ID),
          new PublicKey(mintB.programId ?? TOKEN_PROGRAM_ID),
          poolKeys.observationId,
          mintAAmount,
          mintBAmount,
          startTime,
        ),
      ],
      instructionTypes: [InstructionType.CpmmCreatePool],
    });

    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion,
      extInfo: {
        address: { ...poolKeys, mintA, mintB, programId, poolFeeAccount, feeConfig },
      },
    }) as Promise<MakeTxData<T, { address: CreateCpmmPoolAddress }>>;
  }

  public async addLiquidity<T extends TxVersion>(params: AddCpmmLiquidityParams<T>): Promise<MakeTxData<T>> {
    const {
      poolInfo,
      poolKeys: propPoolKeys,
      inputAmount,
      baseIn,
      slippage,
      computeResult,
      computeBudgetConfig,
      txTipConfig,
      config,
      txVersion,
      feePayer,
    } = params;

    if (this.scope.availability.addStandardPosition === false)
      this.logAndCreateError("add liquidity feature disabled in your region");

    if (inputAmount.isZero())
      this.logAndCreateError("amounts must greater than zero", "amountInA", {
        amountInA: inputAmount.toString(),
      });
    const { account } = this.scope;
    const { bypassAssociatedCheck, checkCreateATAOwner } = {
      // default
      ...{ bypassAssociatedCheck: false, checkCreateATAOwner: false },
      // custom
      ...config,
    };
    const rpcPoolData = computeResult ? undefined : await this.getRpcPoolInfo(poolInfo.id);

    const {
      liquidity,
      inputAmountFee,
      anotherAmount: _anotherAmount,
    } = computeResult ||
    this.computePairAmount({
      poolInfo: {
        ...poolInfo,
        lpAmount: new Decimal(rpcPoolData!.lpAmount.toString()).div(10 ** poolInfo.lpMint.decimals).toNumber(),
      },
      baseReserve: rpcPoolData!.baseReserve,
      quoteReserve: rpcPoolData!.quoteReserve,
      slippage: new Percent(0),
      baseIn,
      epochInfo: await this.scope.fetchEpochInfo(),
      amount: new Decimal(inputAmount.toString()).div(
        10 ** (baseIn ? poolInfo.mintA.decimals : poolInfo.mintB.decimals),
      ),
    });

    const anotherAmount = _anotherAmount.amount;
    const mintAUseSOLBalance = poolInfo.mintA.address === NATIVE_MINT.toString();
    const mintBUseSOLBalance = poolInfo.mintB.address === NATIVE_MINT.toString();

    const txBuilder = this.createTxBuilder(feePayer);
    const [mintA, mintB] = [new PublicKey(poolInfo.mintA.address), new PublicKey(poolInfo.mintB.address)];

    const { account: tokenAccountA, instructionParams: _tokenAccountAInstruction } =
      await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: poolInfo.mintA.programId,
        mint: new PublicKey(poolInfo.mintA.address),
        owner: this.scope.ownerPubKey,

        createInfo:
          mintAUseSOLBalance || (baseIn ? inputAmount : anotherAmount).isZero()
            ? {
                payer: this.scope.ownerPubKey,
                amount: baseIn ? inputAmount : anotherAmount,
              }
            : undefined,
        skipCloseAccount: !mintAUseSOLBalance,
        notUseTokenAccount: mintAUseSOLBalance,
        associatedOnly: false,
        checkCreateATAOwner,
      });

    txBuilder.addInstruction(_tokenAccountAInstruction || {});

    const { account: tokenAccountB, instructionParams: _tokenAccountBInstruction } =
      await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: poolInfo.mintB.programId,
        mint: new PublicKey(poolInfo.mintB.address),
        owner: this.scope.ownerPubKey,

        createInfo:
          mintBUseSOLBalance || (baseIn ? anotherAmount : inputAmount).isZero()
            ? {
                payer: this.scope.ownerPubKey,
                amount: baseIn ? anotherAmount : inputAmount,
              }
            : undefined,
        skipCloseAccount: !mintBUseSOLBalance,
        notUseTokenAccount: mintBUseSOLBalance,
        associatedOnly: false,
        checkCreateATAOwner,
      });

    txBuilder.addInstruction(_tokenAccountBInstruction || {});

    if (!tokenAccountA && !tokenAccountB)
      this.logAndCreateError("cannot found target token accounts", "tokenAccounts", account.tokenAccounts);
    const lpTokenAccount = await account.getCreatedTokenAccount({
      mint: new PublicKey(poolInfo.lpMint.address),
    });
    const { tokenAccount: _lpTokenAccount, ...lpInstruction } = await account.handleTokenAccount({
      side: "out",
      amount: 0,
      mint: new PublicKey(poolInfo.lpMint.address),
      tokenAccount: lpTokenAccount,
      bypassAssociatedCheck,
      checkCreateATAOwner,
    });
    txBuilder.addInstruction(lpInstruction);
    const poolKeys = propPoolKeys ?? (await this.getCpmmPoolKeys(poolInfo.id));
    const _slippage = new Percent(new BN(1)).sub(slippage);

    txBuilder.addInstruction({
      instructions: [
        makeDepositCpmmInInstruction(
          new PublicKey(poolInfo.programId),
          this.scope.ownerPubKey,
          new PublicKey(poolKeys.authority),
          new PublicKey(poolInfo.id),
          _lpTokenAccount!,
          tokenAccountA!,
          tokenAccountB!,
          new PublicKey(poolKeys.vault.A),
          new PublicKey(poolKeys.vault.B),
          mintA,
          mintB,
          new PublicKey(poolInfo.lpMint.address),

          computeResult ? computeResult?.liquidity : _slippage.mul(liquidity).quotient,
          baseIn ? inputAmountFee.amount : anotherAmount,
          baseIn ? anotherAmount : inputAmountFee.amount,
        ),
      ],
      instructionTypes: [InstructionType.CpmmAddLiquidity],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : [],
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({ txVersion }) as Promise<MakeTxData<T>>;
  }

  public async withdrawLiquidity<T extends TxVersion>(params: WithdrawCpmmLiquidityParams<T>): Promise<MakeTxData<T>> {
    const {
      poolInfo,
      poolKeys: propPoolKeys,
      lpAmount,
      slippage,
      computeBudgetConfig,
      txTipConfig,
      txVersion,
      feePayer,
      closeWsol = true,
    } = params;

    if (this.scope.availability.addStandardPosition === false)
      this.logAndCreateError("add liquidity feature disabled in your region");

    const _slippage = new Percent(new BN(1)).sub(slippage);

    const rpcPoolData = await this.getRpcPoolInfo(poolInfo.id);
    const [amountMintA, amountMintB] = [
      _slippage.mul(lpAmount.mul(rpcPoolData.baseReserve).div(rpcPoolData.lpAmount)).quotient,
      _slippage.mul(lpAmount.mul(rpcPoolData.quoteReserve).div(rpcPoolData.lpAmount)).quotient,
    ];

    const epochInfo = await this.scope.fetchEpochInfo();
    const [mintAAmountFee, mintBAmountFee] = [
      getTransferAmountFeeV2(amountMintA, poolInfo.mintA.extensions.feeConfig, epochInfo, false),
      getTransferAmountFeeV2(amountMintB, poolInfo.mintB.extensions.feeConfig, epochInfo, false),
    ];

    const { account } = this.scope;
    const txBuilder = this.createTxBuilder(feePayer);
    const [mintA, mintB] = [new PublicKey(poolInfo.mintA.address), new PublicKey(poolInfo.mintB.address)];

    const mintAUseSOLBalance = mintA.equals(WSOLMint);
    const mintBUseSOLBalance = mintB.equals(WSOLMint);

    let tokenAccountA: PublicKey | undefined = undefined;
    let tokenAccountB: PublicKey | undefined = undefined;
    const { account: _ownerTokenAccountA, instructionParams: accountAInstructions } =
      await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: poolInfo.mintA.programId,
        mint: new PublicKey(poolInfo.mintA.address),
        notUseTokenAccount: mintAUseSOLBalance,
        owner: this.scope.ownerPubKey,
        createInfo: {
          payer: this.scope.ownerPubKey,
          amount: 0,
        },
        skipCloseAccount: !(mintAUseSOLBalance && closeWsol),
        associatedOnly: mintAUseSOLBalance ? false : true,
        checkCreateATAOwner: false,
      });
    tokenAccountA = _ownerTokenAccountA;
    accountAInstructions && txBuilder.addInstruction(accountAInstructions);

    const { account: _ownerTokenAccountB, instructionParams: accountBInstructions } =
      await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: poolInfo.mintB.programId,
        mint: new PublicKey(poolInfo.mintB.address),
        notUseTokenAccount: mintBUseSOLBalance,
        owner: this.scope.ownerPubKey,
        createInfo: {
          payer: this.scope.ownerPubKey,
          amount: 0,
        },
        skipCloseAccount: !(mintBUseSOLBalance && closeWsol),
        associatedOnly: mintBUseSOLBalance ? false : true,
        checkCreateATAOwner: false,
      });
    tokenAccountB = _ownerTokenAccountB;
    accountBInstructions && txBuilder.addInstruction(accountBInstructions);

    if (!tokenAccountA || !tokenAccountB)
      this.logAndCreateError("cannot found target token accounts", "tokenAccounts", account.tokenAccounts);

    const lpTokenAccount = await account.getCreatedTokenAccount({
      mint: new PublicKey(poolInfo.lpMint.address),
    });

    if (!lpTokenAccount)
      this.logAndCreateError("cannot found lp token account", "tokenAccounts", account.tokenAccounts);
    const poolKeys = propPoolKeys ?? (await this.getCpmmPoolKeys(poolInfo.id));
    txBuilder.addInstruction({
      instructions: [
        makeWithdrawCpmmInInstruction(
          new PublicKey(poolInfo.programId),
          this.scope.ownerPubKey,
          new PublicKey(poolKeys.authority),
          new PublicKey(poolInfo.id),
          lpTokenAccount!,
          tokenAccountA!,
          tokenAccountB!,
          new PublicKey(poolKeys.vault.A),
          new PublicKey(poolKeys.vault.B),
          mintA,
          mintB,
          new PublicKey(poolInfo.lpMint.address),

          lpAmount,
          amountMintA.sub(mintAAmountFee.fee ?? new BN(0)),
          amountMintB.sub(mintBAmountFee.fee ?? new BN(0)),
        ),
      ],
      instructionTypes: [InstructionType.CpmmWithdrawLiquidity],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : [],
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({ txVersion }) as Promise<MakeTxData<T>>;
  }

  public async swap<T extends TxVersion>(params: CpmmSwapParams<T>): Promise<MakeTxData<T>> {
    await new Promise((r) => setImmediate(r));
    const {
      poolInfo,
      poolKeys: propPoolKeys,
      baseIn,
      fixedOut,
      inputAmount,
      swapResult,
      slippage = 0,
      config,
      computeBudgetConfig,
      txTipConfig,
      txVersion,
      feePayer,
      nonce,
    } = params;

    const {
      bypassAssociatedCheck,
      checkCreateATAOwner,
      associatedOnly,
      useIdempotent = false,
    } = {
      // defaults
      bypassAssociatedCheck: false,
      checkCreateATAOwner: false,
      associatedOnly: true,
      useIdempotent: false,
      // custom overrides
      ...config,
    };
    const txBuilder = this.createTxBuilder(feePayer);

    if (nonce && nonce?.instruction) {
      txBuilder.addInstruction({
        instructions: [nonce.instruction],
        instructionTypes: [nonce.instruction].map(() => InstructionType.NonceAccount), // Ajuste o tipo conforme necessário
      });
    }

    if (computeBudgetConfig) {
      const { instructions, instructionTypes } = addComputeBudget(computeBudgetConfig);
      txBuilder.addInstruction({
        instructions,
        instructionTypes,
      });
    }

    // Apply slippage to swap results
    if (!fixedOut) {
      swapResult.destinationAmountSwapped = swapResult.destinationAmountSwapped
        .mul(new BN((1 - slippage) * 10000))
        .div(new BN(10000));
    } else {
      swapResult.sourceAmountSwapped = swapResult.sourceAmountSwapped
        .mul(new BN((1 + slippage) * 10000))
        .div(new BN(10000));
    }

    const [mintA, mintB] = [new PublicKey(poolInfo.mintA.address), new PublicKey(poolInfo.mintB.address)];
    let mintATokenAcc: PublicKey | undefined;
    let mintBTokenAcc: PublicKey | undefined;

    if (useIdempotent) {
      // Use native Solana libraries for idempotent ATA creation
      const tokenProgramA = new PublicKey(poolInfo.mintA.programId ?? TOKEN_PROGRAM_ID);
      const tokenProgramB = new PublicKey(poolInfo.mintB.programId ?? TOKEN_PROGRAM_ID);

      const mintAIsSOL = mintA.equals(NATIVE_MINT);
      const mintBIsSOL = mintB.equals(NATIVE_MINT);
      mintATokenAcc = getAssociatedTokenAddressSync(mintA, this.scope.ownerPubKey, false, tokenProgramA);
      mintBTokenAcc = getAssociatedTokenAddressSync(mintB, this.scope.ownerPubKey, false, tokenProgramB);

      // Add idempotent ATA creation instructions
      if (!mintAIsSOL) {
        txBuilder.addInstruction({
          instructions: [
            createAssociatedTokenAccountIdempotentInstruction(
              this.scope.ownerPubKey,
              mintATokenAcc,
              this.scope.ownerPubKey,
              mintA,
              tokenProgramA,
            ),
          ],
          instructionTypes: [InstructionType.CreateATA],
        });
      }

      if (!mintBIsSOL) {
        txBuilder.addInstruction({
          instructions: [
            createAssociatedTokenAccountIdempotentInstruction(
              this.scope.ownerPubKey,
              mintBTokenAcc,
              this.scope.ownerPubKey,
              mintB,
              tokenProgramB,
            ),
          ],
          instructionTypes: [InstructionType.CreateATA],
        });
      }
    } else {
      // Use legacy approach with custom token account management
      const mintAUseSOLBalance = poolInfo.mintA.address === WSOLMint.toBase58();
      const mintBUseSOLBalance = poolInfo.mintB.address === WSOLMint.toBase58();

      const { account: mintATokenAccResult, instructionParams: mintATokenAccInstruction } =
        await this.scope.account.getOrCreateTokenAccount({
          mint: mintA,
          tokenProgram: new PublicKey(poolInfo.mintA.programId ?? TOKEN_PROGRAM_ID),
          owner: this.scope.ownerPubKey,
          createInfo:
            mintAUseSOLBalance || !baseIn
              ? {
                  payer: this.scope.ownerPubKey,
                  amount: baseIn ? swapResult.sourceAmountSwapped : 0,
                }
              : undefined,
          notUseTokenAccount: mintAUseSOLBalance,
          skipCloseAccount: !mintAUseSOLBalance,
          associatedOnly: mintAUseSOLBalance ? false : associatedOnly,
          checkCreateATAOwner,
        });
      mintATokenAccInstruction && txBuilder.addInstruction(mintATokenAccInstruction);
      mintATokenAcc = mintATokenAccResult;

      const { account: mintBTokenAccResult, instructionParams: mintBTokenAccInstruction } =
        await this.scope.account.getOrCreateTokenAccount({
          mint: mintB,
          tokenProgram: new PublicKey(poolInfo.mintB.programId ?? TOKEN_PROGRAM_ID),
          owner: this.scope.ownerPubKey,
          createInfo:
            mintBUseSOLBalance || baseIn
              ? {
                  payer: this.scope.ownerPubKey,
                  amount: baseIn ? 0 : swapResult.sourceAmountSwapped,
                }
              : undefined,
          notUseTokenAccount: mintBUseSOLBalance,
          skipCloseAccount: !mintBUseSOLBalance,
          associatedOnly: mintBUseSOLBalance ? false : associatedOnly,
          checkCreateATAOwner,
        });
      mintBTokenAccInstruction && txBuilder.addInstruction(mintBTokenAccInstruction);
      mintBTokenAcc = mintBTokenAccResult;

      if (!mintATokenAcc || !mintBTokenAcc)
        this.logAndCreateError("user do not have token account", {
          mintA: poolInfo.mintA.symbol || poolInfo.mintA.address,
          mintB: poolInfo.mintB.symbol || poolInfo.mintB.address,
          mintATokenAcc,
          mintBTokenAcc,
          mintAUseSOLBalance,
          mintBUseSOLBalance,
          associatedOnly,
        });
    }

    // Get pool keys if not provided
    const poolKeys = propPoolKeys ?? (await this.getCpmmPoolKeys(poolInfo.id));
    // Configure swap instruction based on baseIn direction
    const sourceTokenAccount = baseIn ? mintATokenAcc! : mintBTokenAcc!;
    const destinationTokenAccount = baseIn ? mintBTokenAcc! : mintATokenAcc!;
    const sourceMint = baseIn ? mintA : mintB;
    const destinationMint = baseIn ? mintB : mintA;
    const sourceVault = baseIn ? poolKeys.vault.A : poolKeys.vault.B;
    const destinationVault = baseIn ? poolKeys.vault.B : poolKeys.vault.A;
    const sourceTokenProgram = baseIn
      ? new PublicKey(poolInfo.mintA.programId ?? TOKEN_PROGRAM_ID)
      : new PublicKey(poolInfo.mintB.programId ?? TOKEN_PROGRAM_ID);
    const destinationTokenProgram = baseIn
      ? new PublicKey(poolInfo.mintB.programId ?? TOKEN_PROGRAM_ID)
      : new PublicKey(poolInfo.mintA.programId ?? TOKEN_PROGRAM_ID);
    // Adicionar instrução de swap
    txBuilder.addInstruction({
      instructions: [
        !fixedOut
          ? makeSwapCpmmBaseInInstruction(
              new PublicKey(poolInfo.programId),
              this.scope.ownerPubKey,
              new PublicKey(poolKeys.authority),
              new PublicKey(poolKeys.config.id),
              new PublicKey(poolInfo.id),
              sourceTokenAccount,
              destinationTokenAccount,
              new PublicKey(sourceVault),
              new PublicKey(destinationVault),
              sourceTokenProgram,
              destinationTokenProgram,
              sourceMint,
              destinationMint,
              getPdaObservationId(new PublicKey(poolInfo.programId), new PublicKey(poolInfo.id)).publicKey,
              inputAmount,
              swapResult.destinationAmountSwapped,
            )
          : makeSwapCpmmBaseOutInstruction(
              new PublicKey(poolInfo.programId),
              this.scope.ownerPubKey,
              new PublicKey(poolKeys.authority),
              new PublicKey(poolKeys.config.id),
              new PublicKey(poolInfo.id),
              sourceTokenAccount,
              destinationTokenAccount,
              new PublicKey(sourceVault),
              new PublicKey(destinationVault),
              sourceTokenProgram,
              destinationTokenProgram,
              sourceMint,
              destinationMint,
              getPdaObservationId(new PublicKey(poolInfo.programId), new PublicKey(poolInfo.id)).publicKey,
              swapResult.sourceAmountSwapped,
              swapResult.destinationAmountSwapped,
            ),
      ],
      instructionTypes: [fixedOut ? InstructionType.CpmmSwapBaseOut : InstructionType.CpmmSwapBaseIn],
    });

    txBuilder.addTipInstruction(txTipConfig);

    return txBuilder.versionBuild({ txVersion }, nonce?.nonce) as Promise<MakeTxData<T>>;
  }

  public async lockLp<T extends TxVersion>(params: LockCpmmLpParams<T>): Promise<MakeTxData<CpmmLockExtInfo>> {
    const { poolInfo, lpAmount, computeBudgetConfig, txTipConfig, txVersion, feePayer, feeNftOwner } = params;

    if (lpAmount.isZero())
      this.logAndCreateError("lpAmount must greater than zero", {
        lpAmount: lpAmount.toString(),
      });

    const txBuilder = this.createTxBuilder(feePayer);

    const poolKeys = params.poolKeys ?? (await this.getCpmmPoolKeys(poolInfo.id));

    const insData = await makeCpmmLockInstruction({
      poolInfo,
      poolKeys,
      ownerInfo: {
        wallet: this.scope.ownerPubKey,
        feePayer: params.feePayer ?? this.scope.ownerPubKey,
      },
      feeNftOwner: feeNftOwner ?? this.scope.ownerPubKey,
      lockProgram: params.programId ?? LOCK_CPMM_PROGRAM,
      lockAuthProgram: params.authProgram ?? LOCK_CPMM_AUTH,
      lpAmount,
      withMetadata: params.withMetadata ?? true,
      getEphemeralSigners: params.getEphemeralSigners,
    });

    txBuilder.addInstruction(insData);
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({ txVersion, extInfo: insData.address }) as Promise<MakeTxData<CpmmLockExtInfo>>;
  }

  public async harvestLockLp<T extends TxVersion>(params: HarvestLockCpmmLpParams<T>): Promise<MakeTxData> {
    const {
      poolInfo,
      lpFeeAmount,
      nftMint,
      programId = LOCK_CPMM_PROGRAM,
      authProgram = LOCK_CPMM_AUTH,
      cpmmProgram,
      computeBudgetConfig,
      txTipConfig,
      txVersion,
      closeWsol = true,
    } = params;

    if (lpFeeAmount.isZero())
      this.logAndCreateError("lpFeeAmount must greater than zero", {
        lpAmount: lpFeeAmount.toString(),
      });

    const feePayer = params.feePayer || this.scope.ownerPubKey;

    const txBuilder = this.createTxBuilder(feePayer);

    const [mintA, mintB] = [new PublicKey(poolInfo.mintA.address), new PublicKey(poolInfo.mintB.address)];

    const mintAUseSOLBalance = mintA.equals(WSOLMint);
    const mintBUseSOLBalance = mintB.equals(WSOLMint);

    let tokenAccountA: PublicKey | undefined = undefined;
    let tokenAccountB: PublicKey | undefined = undefined;
    const { account: _ownerTokenAccountA, instructionParams: accountAInstructions } =
      await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: poolInfo.mintA.programId,
        mint: new PublicKey(poolInfo.mintA.address),
        notUseTokenAccount: mintAUseSOLBalance,
        owner: this.scope.ownerPubKey,
        createInfo: {
          payer: this.scope.ownerPubKey,
          amount: 0,
        },
        skipCloseAccount: !(mintAUseSOLBalance && closeWsol),
        associatedOnly: mintAUseSOLBalance ? false : true,
        checkCreateATAOwner: false,
      });
    tokenAccountA = _ownerTokenAccountA;
    accountAInstructions && txBuilder.addInstruction(accountAInstructions);

    const { account: _ownerTokenAccountB, instructionParams: accountBInstructions } =
      await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: poolInfo.mintB.programId,
        mint: new PublicKey(poolInfo.mintB.address),
        notUseTokenAccount: mintBUseSOLBalance,
        owner: this.scope.ownerPubKey,
        createInfo: {
          payer: this.scope.ownerPubKey,
          amount: 0,
        },
        skipCloseAccount: !(mintBUseSOLBalance && closeWsol),
        associatedOnly: mintBUseSOLBalance ? false : true,
        checkCreateATAOwner: false,
      });
    tokenAccountB = _ownerTokenAccountB;
    accountBInstructions && txBuilder.addInstruction(accountBInstructions);

    if (!tokenAccountA || !tokenAccountB)
      this.logAndCreateError("cannot found target token accounts", { tokenAccountA, tokenAccountB });

    const poolKeys = params.poolKeys ?? (await this.getCpmmPoolKeys(poolInfo.id));

    const { publicKey: nftAccount } = getATAAddress(feePayer, nftMint, TOKEN_PROGRAM_ID);
    const { publicKey: lockPda } = getCpLockPda(programId, nftMint);
    const { publicKey: lockLpVault } = getATAAddress(
      authProgram,
      new PublicKey(poolInfo.lpMint.address),
      TOKEN_PROGRAM_ID,
    );

    txBuilder.addInstruction({
      instructions: [
        collectCpFeeInstruction({
          programId: programId ?? LOCK_CPMM_PROGRAM,
          nftOwner: this.scope.ownerPubKey,
          auth: authProgram ?? LOCK_CPMM_AUTH,

          nftMint,
          nftAccount,

          lockPda,
          poolId: new PublicKey(poolInfo.id),
          mintLp: new PublicKey(poolKeys.mintLp.address),

          userVaultA: tokenAccountA!,
          userVaultB: tokenAccountB!,
          poolVaultA: new PublicKey(poolKeys.vault.A),
          poolVaultB: new PublicKey(poolKeys.vault.B),

          mintA,
          mintB,
          lockLpVault,
          lpFeeAmount,

          cpmmProgram: cpmmProgram?.programId,
          cpmmAuthProgram: cpmmProgram?.authProgram,
        }),
      ],
      instructionTypes: [InstructionType.CpmmCollectLockFee],
    });

    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({ txVersion }) as Promise<MakeTxData>;
  }

  public computeSwapAmount({
    pool,
    amountIn,
    outputMint,
    slippage,
  }: {
    pool: CpmmComputeData;
    amountIn: BN;
    outputMint: string | PublicKey;
    slippage: number;
  }): {
    allTrade: boolean;
    amountIn: BN;
    amountOut: BN;
    minAmountOut: BN;
    fee: BN;
    executionPrice: Decimal;
    priceImpact: any;
  } {
    const isBaseIn = outputMint.toString() === pool.mintB.address;

    const swapResult = CurveCalculator.swap(
      amountIn,
      isBaseIn ? pool.baseReserve : pool.quoteReserve,
      isBaseIn ? pool.quoteReserve : pool.baseReserve,
      pool.configInfo.tradeFeeRate,
    );

    const executionPrice = new Decimal(swapResult.destinationAmountSwapped.toString()).div(
      swapResult.sourceAmountSwapped.toString(),
    );

    const minAmountOut = swapResult.destinationAmountSwapped.mul(new BN((1 - slippage) * 10000)).div(new BN(10000));

    return {
      allTrade: swapResult.sourceAmountSwapped.eq(amountIn),
      amountIn,
      amountOut: swapResult.destinationAmountSwapped,
      minAmountOut,
      executionPrice,
      fee: swapResult.tradeFee,
      priceImpact: pool.poolPrice.sub(executionPrice).div(pool.poolPrice),
    };
  }

  public computePairAmount({
    poolInfo,
    baseReserve,
    quoteReserve,
    amount,
    slippage,
    epochInfo,
    baseIn,
  }: ComputePairAmountParams): {
    inputAmountFee: GetTransferAmountFee;
    anotherAmount: GetTransferAmountFee;
    maxAnotherAmount: GetTransferAmountFee;
    minAnotherAmount: GetTransferAmountFee;
    liquidity: BN;
  } {
    const coefficient = 1 - Number(slippage.toSignificant()) / 100;
    const inputAmount = new BN(
      new Decimal(amount)
        .mul(10 ** poolInfo[baseIn ? "mintA" : "mintB"].decimals)
        .mul(coefficient)
        .toFixed(0),
    );
    const inputAmountFee = getTransferAmountFeeV2(
      inputAmount,
      poolInfo[baseIn ? "mintA" : "mintB"].extensions.feeConfig,
      epochInfo,
      false,
    );
    const _inputAmountWithoutFee = inputAmount.sub(inputAmountFee.fee ?? new BN(0));

    const lpAmount = new BN(
      new Decimal(poolInfo.lpAmount).mul(10 ** poolInfo.lpMint.decimals).toFixed(0, Decimal.ROUND_DOWN),
    );
    this.logDebug("baseReserve:", baseReserve.toString(), "quoteReserve:", quoteReserve.toString());

    this.logDebug(
      "tokenIn:",
      baseIn ? poolInfo.mintA.symbol : poolInfo.mintB.symbol,
      "amountIn:",
      inputAmount.toString(),
      "amountInFee:",
      inputAmountFee.fee?.toString() ?? 0,
      "anotherToken:",
      baseIn ? poolInfo.mintB.symbol : poolInfo.mintA.symbol,
      "slippage:",
      `${slippage.toSignificant()}%`,
    );

    // input is fixed
    const input = baseIn ? "base" : "quote";
    this.logDebug("input side:", input);

    const liquidity = _inputAmountWithoutFee.mul(lpAmount).div(input === "base" ? baseReserve : quoteReserve);
    let anotherAmountFee: GetTransferAmountFee = {
      amount: BN_ZERO,
      fee: undefined,
      expirationTime: undefined,
    };
    if (!_inputAmountWithoutFee.isZero()) {
      const lpAmountData = lpToAmount(liquidity, baseReserve, quoteReserve, lpAmount);
      this.logDebug("lpAmountData:", {
        amountA: lpAmountData.amountA.toString(),
        amountB: lpAmountData.amountB.toString(),
      });
      anotherAmountFee = getTransferAmountFeeV2(
        lpAmountData[baseIn ? "amountB" : "amountA"],
        poolInfo[baseIn ? "mintB" : "mintA"].extensions.feeConfig,
        epochInfo,
        true,
      );
    }

    const _slippage = new Percent(new BN(1)).add(slippage);
    const _slippageMin = new Percent(new BN(1)).sub(slippage);
    const slippageAdjustedAmount = getTransferAmountFeeV2(
      _slippage.mul(anotherAmountFee.amount.sub(anotherAmountFee.fee ?? new BN(0))).quotient,
      poolInfo[baseIn ? "mintB" : "mintA"].extensions.feeConfig,
      epochInfo,
      true,
    );
    const slippageAdjustedMinAmount = getTransferAmountFeeV2(
      _slippageMin.mul(anotherAmountFee.amount.sub(anotherAmountFee.fee ?? new BN(0))).quotient,
      poolInfo[baseIn ? "mintB" : "mintA"].extensions.feeConfig,
      epochInfo,
      true,
    );

    this.logDebug(
      "anotherAmount:",
      anotherAmountFee.amount.toString(),
      "anotherAmountFee:",
      anotherAmountFee.fee?.toString() ?? 0,
      "maxAnotherAmount:",
      slippageAdjustedAmount.amount.toString(),
      "maxAnotherAmountFee:",
      slippageAdjustedAmount.fee?.toString() ?? 0,
    );

    return {
      inputAmountFee,
      anotherAmount: anotherAmountFee,
      maxAnotherAmount: slippageAdjustedAmount,
      minAnotherAmount: slippageAdjustedMinAmount,
      liquidity,
    };
  }
}

function lpToAmount(lp: BN, poolAmountA: BN, poolAmountB: BN, supply: BN): { amountA: BN; amountB: BN } {
  let amountA = lp.mul(poolAmountA).div(supply);
  if (!amountA.isZero() && !lp.mul(poolAmountA).mod(supply).isZero()) amountA = amountA.add(new BN(1));
  let amountB = lp.mul(poolAmountB).div(supply);
  if (!amountB.isZero() && !lp.mul(poolAmountB).mod(supply).isZero()) amountB = amountB.add(new BN(1));

  return {
    amountA,
    amountB,
  };
}
