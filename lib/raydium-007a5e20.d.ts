import { PublicKey, Commitment, EpochInfo, Connection, Transaction, Signer, TransactionInstruction, Keypair } from '@solana/web3.js';
import { aG as TxBuilder, ay as AddInstructionParam, af as BigNumberish, bt as CreateFarm, aF as MakeTxData, bu as CreateFarmExtInfo, bv as UpdateFarmReward, bw as UpdateFarmRewards, bx as FarmDWParam, $ as FormatFarmInfoOut, bS as ComputeBudgetConfig, bT as TxTipConfig, aE as MakeMultiTxData, q as ApiV3PoolInfoStandardItem, cg as Percent, cc as TokenAmount, x as AmmV4Keys, y as AmmV5Keys, p as ApiV3PoolInfoConcentratedItem, _ as FormatFarmInfoOutV6, D as ClmmKeys, bO as MakeTransaction, bY as ReturnTypeFetchMultipleMintInfos, z as CpmmKeys, r as ApiV3PoolInfoStandardItemCpmm, bW as GetTransferAmountFee, G as PoolKeys, i as ApiV3Token, a2 as OwnerIdoInfo, a3 as IdoKeysData, bU as LoadParams, J as JupTokenType, bI as TokenInfo, bN as SignAllTransactions, a as Api, a0 as AvailabilityCheckAPI3, k as ApiV3TokenRes } from './api-34c9026e.js';
import { API_URL_CONFIG } from './api/url.js';
import { Owner } from './common/owner.js';
import { Cluster } from './solana/type.js';
import { TokenAccount, TokenAccountRaw, GetOrCreateTokenAccountParams, HandleTokenAccountParams } from './raydium/account/types.js';
import { Logger } from './common/logger.js';
import { TxVersion } from './common/txTool/txType.js';
import BN__default from 'bn.js';
import Decimal from 'decimal.js';
import { StableLayout } from './raydium/liquidity/stable.js';
import { AddLiquidityParams, RemoveParams, CreatePoolParam, CreatePoolAddress, CreateMarketAndPoolParam, ComputeAmountOutParam, ComputeAmountInParam, SwapParam, AmmRpcData } from './raydium/liquidity/type.js';
import { ClmmPositionLayout, PositionInfoLayout, PoolInfoLayout } from './raydium/clmm/layout.js';
import { m as CreateConcentratedPool, O as OpenPositionFromBase, p as OpenPositionFromBaseExtInfo, q as OpenPositionFromLiquidity, r as OpenPositionFromLiquidityExtInfo, I as IncreasePositionFromLiquidity, M as ManipulateLiquidityExtInfo, n as IncreasePositionFromBase, D as DecreaseLiquidity, B as ClosePositionExtInfo, L as LockPosition, J as ClmmLockAddress, H as HarvestLockPosition, s as InitRewardParams, E as InitRewardExtInfo, t as InitRewardsParams, u as SetRewardParams, v as SetRewardsParams, w as CollectRewardParams, x as CollectRewardsParams, y as HarvestAllRewardsParams, F as ClmmRpcData, d as ComputeClmmPoolInfo, l as ReturnTypeFetchMultiplePoolTickArrays } from './type-05b0e57b.js';
import { RpcPoolInfoAccounts, CpmmRpcData, CpmmComputeData, CreateCpmmPoolParam, CreateCpmmPoolAddress, AddCpmmLiquidityParams, WithdrawCpmmLiquidityParams, CpmmSwapParams, LockCpmmLpParams, CpmmLockExtInfo, HarvestLockCpmmLpParams, ComputePairAmountParams } from './raydium/cpmm/type.js';
import { ComputeAmountOutLayout, BasicPoolInfo, ReturnTypeGetAllRoute, ComputeRoutePathType, ComputePoolType, ReturnTypeFetchMultipleInfo } from './raydium/tradeV2/type.js';
import { Structure } from './marshmallow/index.js';
import { CreateLaunchPad, LaunchpadPoolInfo, BuyToken, SellToken, CreatePlatform, UpdatePlatform, ClaimPlatformFee, ClaimAllPlatformFee, CreateVesting, ClaimVesting, LaunchpadConfigInfo } from './raydium/launchpad/type.js';

interface ModuleBaseProps {
    scope: Raydium;
    moduleName: string;
}
declare class ModuleBase {
    scope: Raydium;
    private disabled;
    protected logger: Logger;
    constructor({ scope, moduleName }: ModuleBaseProps);
    protected createTxBuilder(feePayer?: PublicKey): TxBuilder;
    logDebug(...args: (string | number | Record<string, any>)[]): void;
    logInfo(...args: (string | number | Record<string, any>)[]): void;
    logAndCreateError(...args: (string | number | Record<string, any>)[]): void;
    checkDisabled(): void;
}

interface TokenAccountDataProp {
    tokenAccounts?: TokenAccount[];
    tokenAccountRawInfos?: TokenAccountRaw[];
    notSubscribeAccountChange?: boolean;
}
declare class Account extends ModuleBase {
    private _tokenAccounts;
    private _tokenAccountRawInfos;
    private _accountChangeListenerId?;
    private _accountListener;
    private _clientOwnedToken;
    private _notSubscribeAccountChange;
    private _accountFetchTime;
    constructor(params: TokenAccountDataProp & ModuleBaseProps);
    get tokenAccounts(): TokenAccount[];
    get tokenAccountRawInfos(): TokenAccountRaw[];
    set notSubscribeAccountChange(subscribe: boolean);
    updateTokenAccount({ tokenAccounts, tokenAccountRawInfos }: TokenAccountDataProp): Account;
    addAccountChangeListener(cbk: (data: TokenAccountDataProp) => void): Account;
    removeAccountChangeListener(cbk: (data: TokenAccountDataProp) => void): Account;
    getAssociatedTokenAccount(mint: PublicKey, programId?: PublicKey): PublicKey;
    resetTokenAccounts(): void;
    fetchWalletTokenAccounts(config?: {
        forceUpdate?: boolean;
        commitment?: Commitment;
    }): Promise<{
        tokenAccounts: TokenAccount[];
        tokenAccountRawInfos: TokenAccountRaw[];
    }>;
    clearAccountChangeCkb(): void;
    getCreatedTokenAccount({ mint, programId, associatedOnly, }: {
        mint: PublicKey;
        programId?: PublicKey;
        associatedOnly?: boolean;
    }): Promise<PublicKey | undefined>;
    getOrCreateTokenAccount(params: GetOrCreateTokenAccountParams): Promise<{
        account?: PublicKey;
        instructionParams?: AddInstructionParam;
    }>;
    checkOrCreateAta({ mint, programId, autoUnwrapWSOLToSOL, }: {
        mint: PublicKey;
        programId?: PublicKey;
        autoUnwrapWSOLToSOL?: boolean;
    }): Promise<{
        pubKey: PublicKey;
        newInstructions: AddInstructionParam;
    }>;
    handleTokenAccount(params: HandleTokenAccountParams): Promise<AddInstructionParam & {
        tokenAccount: PublicKey;
    }>;
    processTokenAccount(props: {
        mint: PublicKey;
        programId?: PublicKey;
        amount?: BigNumberish;
        useSOLBalance?: boolean;
        handleTokenAccount?: boolean;
        feePayer?: PublicKey;
    }): Promise<Promise<AddInstructionParam & {
        tokenAccount?: PublicKey;
    }>>;
}

declare class Farm extends ModuleBase {
    private _getUserRewardInfo;
    create<T extends TxVersion>({ poolInfo: propPoolInfo, rewardInfos, payer, programId, txVersion, feePayer, }: CreateFarm<T>): Promise<MakeTxData<T, CreateFarmExtInfo>>;
    restartReward<T extends TxVersion>({ farmInfo, payer, newRewardInfo, txVersion, feePayer, }: UpdateFarmReward): Promise<MakeTxData<T>>;
    restartRewards<T extends TxVersion>({ farmInfo, payer, newRewardInfos, txVersion, feePayer, }: UpdateFarmRewards<T>): Promise<MakeTxData<T>>;
    addNewRewardToken<T extends TxVersion>(params: UpdateFarmReward): Promise<MakeTxData<T>>;
    addNewRewardsToken<T extends TxVersion>(params: UpdateFarmRewards<T>): Promise<MakeTxData<T>>;
    deposit<T extends TxVersion>(params: FarmDWParam<T>): Promise<MakeTxData<T>>;
    withdraw<T extends TxVersion>(params: FarmDWParam<T>): Promise<MakeTxData<T>>;
    withdrawFarmReward<T extends TxVersion>({ farmInfo, withdrawMint, txVersion, computeBudgetConfig, txTipConfig, feePayer, }: {
        farmInfo: FormatFarmInfoOut;
        withdrawMint: PublicKey;
        payer?: PublicKey;
        computeBudgetConfig?: ComputeBudgetConfig;
        txTipConfig?: TxTipConfig;
        txVersion?: T;
        feePayer?: PublicKey;
    }): Promise<MakeTxData<T>>;
    harvestAllRewards<T extends TxVersion = TxVersion.LEGACY>(params: {
        farmInfoList: Record<string, FormatFarmInfoOut>;
        feePayer?: PublicKey;
        useSOLBalance?: boolean;
        associatedOnly?: boolean;
        checkCreateATAOwner?: boolean;
        userAuxiliaryLedgers?: string[];
        txVersion?: T;
        computeBudgetConfig?: ComputeBudgetConfig;
    }): Promise<MakeMultiTxData<T>>;
}

interface MarketExtInfo {
    address: {
        marketId: PublicKey;
        requestQueue: PublicKey;
        eventQueue: PublicKey;
        bids: PublicKey;
        asks: PublicKey;
        baseVault: PublicKey;
        quoteVault: PublicKey;
        baseMint: PublicKey;
        quoteMint: PublicKey;
    };
}
declare class MarketV2$1 extends ModuleBase {
    create<T extends TxVersion>({ baseInfo, quoteInfo, lotSize, // 1
    tickSize, // 0.01
    dexProgramId, requestQueueSpace, eventQueueSpace, orderbookQueueSpace, lowestFeeMarket, assignSeed, txVersion, computeBudgetConfig, txTipConfig, feePayer, }: {
        baseInfo: {
            mint: PublicKey;
            decimals: number;
        };
        quoteInfo: {
            mint: PublicKey;
            decimals: number;
        };
        lotSize: number;
        tickSize: number;
        dexProgramId: PublicKey;
        eventQueue?: PublicKey;
        requestQueue?: PublicKey;
        requestQueueSpace?: number;
        eventQueueSpace?: number;
        orderbookQueueSpace?: number;
        lowestFeeMarket?: boolean;
        assignSeed?: string;
        txVersion?: T;
        computeBudgetConfig?: ComputeBudgetConfig;
        txTipConfig?: TxTipConfig;
        feePayer?: PublicKey;
    }): Promise<MakeMultiTxData<T, MarketExtInfo>>;
}

declare class LiquidityModule extends ModuleBase {
    stableLayout: StableLayout;
    constructor(params: ModuleBaseProps);
    initLayout(): Promise<void>;
    load(): Promise<void>;
    computePairAmount({ poolInfo, amount, slippage, baseIn, }: {
        poolInfo: ApiV3PoolInfoStandardItem;
        amount: string | Decimal;
        slippage: Percent;
        baseIn?: boolean;
    }): {
        anotherAmount: TokenAmount;
        maxAnotherAmount: TokenAmount;
        minAnotherAmount: TokenAmount;
        liquidity: BN__default;
    };
    getAmmPoolKeys(poolId: string): Promise<AmmV4Keys | AmmV5Keys>;
    addLiquidity<T extends TxVersion>(params: AddLiquidityParams<T>): Promise<MakeTxData<T>>;
    removeLiquidity<T extends TxVersion>(params: RemoveParams<T>): Promise<Promise<MakeTxData<T>>>;
    removeAllLpAndCreateClmmPosition<T extends TxVersion>({ poolInfo, clmmPoolInfo, removeLpAmount, createPositionInfo, farmInfo, userFarmLpAmount, base, computeBudgetConfig, payer, userAuxiliaryLedgers, tokenProgram, checkCreateATAOwner, getEphemeralSigners, txVersion, feePayer, }: {
        poolInfo: ApiV3PoolInfoStandardItem;
        clmmPoolInfo: ApiV3PoolInfoConcentratedItem;
        removeLpAmount: BN__default;
        createPositionInfo: {
            tickLower: number;
            tickUpper: number;
            baseAmount: BN__default;
            otherAmountMax: BN__default;
        };
        farmInfo?: FormatFarmInfoOutV6;
        userFarmLpAmount?: BN__default;
        userAuxiliaryLedgers?: PublicKey[];
        base: "MintA" | "MintB";
        payer?: PublicKey;
        computeBudgetConfig?: ComputeBudgetConfig;
        tokenProgram?: PublicKey;
        checkCreateATAOwner?: boolean;
        txVersion?: T;
        getEphemeralSigners?: (k: number) => any;
        feePayer?: PublicKey;
    }): Promise<MakeMultiTxData<T>>;
    createPoolV4<T extends TxVersion>({ programId, marketInfo, baseMintInfo, quoteMintInfo, baseAmount, quoteAmount, startTime, ownerInfo, associatedOnly, checkCreateATAOwner, tokenProgram, txVersion, feeDestinationId, computeBudgetConfig, txTipConfig, feePayer, }: CreatePoolParam<T>): Promise<MakeTxData<T, {
        address: CreatePoolAddress;
    }>>;
    createMarketAndPoolV4<T extends TxVersion>({ programId, marketProgram, feeDestinationId, tokenProgram, baseMintInfo, quoteMintInfo, baseAmount, quoteAmount, startTime, ownerInfo, lowestFeeMarket, assignSeed, associatedOnly, checkCreateATAOwner, lotSize, tickSize, txVersion, computeBudgetConfig, txTipConfig, feePayer, }: CreateMarketAndPoolParam<T>): Promise<MakeMultiTxData<T, {
        address: CreatePoolAddress & MarketExtInfo["address"];
    }>>;
    getCreatePoolFee({ programId }: {
        programId: PublicKey;
    }): Promise<BN__default>;
    computeAmountOut({ poolInfo, amountIn, mintIn: propMintIn, mintOut: propMintOut, slippage, }: ComputeAmountOutParam): {
        amountOut: BN__default;
        minAmountOut: BN__default;
        currentPrice: Decimal;
        executionPrice: Decimal;
        priceImpact: Decimal;
        fee: BN__default;
    };
    computeAmountIn({ poolInfo, amountOut, mintIn, mintOut, slippage }: ComputeAmountInParam): {
        amountIn: BN__default;
        maxAmountIn: BN__default;
        currentPrice: Decimal;
        executionPrice: Decimal | null;
        priceImpact: Decimal;
    };
    swap<T extends TxVersion>({ poolInfo, poolKeys: propPoolKeys, amountIn, amountOut, inputMint, fixedSide, txVersion, config, computeBudgetConfig, txTipConfig, feePayer, }: SwapParam<T>): Promise<MakeTxData<T>>;
    getRpcPoolInfo(poolId: string): Promise<AmmRpcData>;
    getRpcPoolInfos(poolIds: (string | PublicKey)[], config?: {
        batchRequest?: boolean;
        chunkCount?: number;
    }): Promise<{
        [poolId: string]: AmmRpcData;
    }>;
    getPoolInfoFromRpc({ poolId }: {
        poolId: string;
    }): Promise<{
        poolRpcData: AmmRpcData;
        poolInfo: ComputeAmountOutParam["poolInfo"];
        poolKeys: AmmV4Keys | AmmV5Keys;
    }>;
}

declare class Clmm extends ModuleBase {
    constructor(params: ModuleBaseProps);
    getClmmPoolKeys(poolId: string): Promise<ClmmKeys>;
    createPool<T extends TxVersion>(props: CreateConcentratedPool<T>): Promise<MakeTxData<T, {
        mockPoolInfo: ApiV3PoolInfoConcentratedItem;
        address: ClmmKeys;
    }>>;
    openPositionFromBase<T extends TxVersion>({ poolInfo, poolKeys: propPoolKeys, ownerInfo, tickLower, tickUpper, base, baseAmount, otherAmountMax, nft2022, associatedOnly, checkCreateATAOwner, withMetadata, getEphemeralSigners, computeBudgetConfig, txTipConfig, txVersion, feePayer, }: OpenPositionFromBase<T>): Promise<MakeTxData<T, OpenPositionFromBaseExtInfo>>;
    openPositionFromLiquidity<T extends TxVersion>({ poolInfo, poolKeys: propPoolKeys, ownerInfo, amountMaxA, amountMaxB, tickLower, tickUpper, liquidity, associatedOnly, checkCreateATAOwner, withMetadata, txVersion, computeBudgetConfig, txTipConfig, getEphemeralSigners, nft2022, feePayer, }: OpenPositionFromLiquidity<T>): Promise<MakeTxData<T, OpenPositionFromLiquidityExtInfo>>;
    increasePositionFromLiquidity<T extends TxVersion>(props: IncreasePositionFromLiquidity<T>): Promise<MakeTxData<T, ManipulateLiquidityExtInfo>>;
    increasePositionFromBase<T extends TxVersion>(props: IncreasePositionFromBase<T>): Promise<MakeTxData<T, ManipulateLiquidityExtInfo>>;
    decreaseLiquidity<T extends TxVersion>(props: DecreaseLiquidity<T>): Promise<MakeTxData<T, ManipulateLiquidityExtInfo & Partial<ClosePositionExtInfo>>>;
    lockPosition<T extends TxVersion>(props: LockPosition<T>): Promise<MakeTxData<ClmmLockAddress>>;
    harvestLockPosition<T extends TxVersion>(props: HarvestLockPosition<T>): Promise<MakeTxData<T>>;
    closePosition<T extends TxVersion>({ poolInfo, poolKeys: propPoolKeys, ownerPosition, txVersion, computeBudgetConfig, txTipConfig, feePayer, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys?: ClmmKeys;
        ownerPosition: ClmmPositionLayout;
        computeBudgetConfig?: ComputeBudgetConfig;
        txTipConfig?: TxTipConfig;
        txVersion: T;
        feePayer?: PublicKey;
    }): Promise<MakeTxData<T, ClosePositionExtInfo>>;
    initReward<T extends TxVersion>({ poolInfo, ownerInfo, rewardInfo, associatedOnly, checkCreateATAOwner, computeBudgetConfig, txVersion, feePayer, }: InitRewardParams<T>): Promise<MakeTxData<T, InitRewardExtInfo>>;
    initRewards<T extends TxVersion>({ poolInfo, poolKeys: propPoolKeys, ownerInfo, rewardInfos, associatedOnly, checkCreateATAOwner, computeBudgetConfig, txTipConfig, txVersion, feePayer, }: InitRewardsParams<T>): Promise<MakeTxData<T, {
        address: Record<string, PublicKey>;
    }>>;
    setReward<T extends TxVersion>({ poolInfo, ownerInfo, rewardInfo, associatedOnly, checkCreateATAOwner, computeBudgetConfig, txTipConfig, txVersion, feePayer, }: SetRewardParams<T>): Promise<MakeTxData<T, {
        address: Record<string, PublicKey>;
    }>>;
    setRewards<T extends TxVersion>({ poolInfo, poolKeys: propPoolKeys, ownerInfo, rewardInfos, associatedOnly, checkCreateATAOwner, computeBudgetConfig, txTipConfig, txVersion, feePayer, }: SetRewardsParams<T>): Promise<MakeTxData<T, {
        address: Record<string, PublicKey>;
    }>>;
    collectReward<T extends TxVersion>({ poolInfo, ownerInfo, rewardMint, associatedOnly, checkCreateATAOwner, computeBudgetConfig, txTipConfig, txVersion, feePayer, }: CollectRewardParams<T>): Promise<MakeTxData<{
        address: Record<string, PublicKey>;
    }>>;
    collectRewards({ poolInfo, ownerInfo, rewardMints, associatedOnly, checkCreateATAOwner, computeBudgetConfig, txTipConfig, feePayer, }: CollectRewardsParams): Promise<MakeTransaction>;
    swap<T extends TxVersion>({ poolInfo, poolKeys: propPoolKeys, inputMint, amountIn, amountOutMin, priceLimit, observationId, ownerInfo, remainingAccounts, associatedOnly, checkCreateATAOwner, txVersion, computeBudgetConfig, txTipConfig, feePayer, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys?: ClmmKeys;
        inputMint: string | PublicKey;
        amountIn: BN__default;
        amountOutMin: BN__default;
        priceLimit?: Decimal;
        observationId: PublicKey;
        ownerInfo: {
            useSOLBalance?: boolean;
            feePayer?: PublicKey;
        };
        remainingAccounts: PublicKey[];
        associatedOnly?: boolean;
        checkCreateATAOwner?: boolean;
        txVersion?: T;
        computeBudgetConfig?: ComputeBudgetConfig;
        txTipConfig?: TxTipConfig;
        feePayer?: PublicKey;
    }): Promise<MakeTxData<T>>;
    swapBaseOut<T extends TxVersion>({ poolInfo, poolKeys: propPoolKeys, outputMint, amountOut, amountInMax, priceLimit, observationId, ownerInfo, remainingAccounts, associatedOnly, checkCreateATAOwner, txVersion, computeBudgetConfig, txTipConfig, feePayer, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys?: ClmmKeys;
        outputMint: string | PublicKey;
        amountOut: BN__default;
        amountInMax: BN__default;
        priceLimit?: Decimal;
        observationId: PublicKey;
        ownerInfo: {
            useSOLBalance?: boolean;
            feePayer?: PublicKey;
        };
        remainingAccounts: PublicKey[];
        associatedOnly?: boolean;
        checkCreateATAOwner?: boolean;
        txVersion?: T;
        computeBudgetConfig?: ComputeBudgetConfig;
        txTipConfig?: TxTipConfig;
        feePayer?: PublicKey;
    }): Promise<MakeTxData<T>>;
    harvestAllRewards<T extends TxVersion = TxVersion.LEGACY>({ allPoolInfo, allPositions, lockInfo, ownerInfo, associatedOnly, checkCreateATAOwner, programId, txVersion, computeBudgetConfig, feePayer, }: HarvestAllRewardsParams<T>): Promise<MakeMultiTxData<T>>;
    getWhiteListMint({ programId }: {
        programId: PublicKey;
    }): Promise<PublicKey[]>;
    getOwnerPositionInfo({ programId, }: {
        programId: string | PublicKey;
    }): Promise<ReturnType<typeof PositionInfoLayout.decode>[]>;
    getRpcClmmPoolInfo({ poolId }: {
        poolId: string | PublicKey;
    }): Promise<ClmmRpcData>;
    getRpcClmmPoolInfos({ poolIds, config, }: {
        poolIds: (string | PublicKey)[];
        config?: {
            batchRequest?: boolean;
            chunkCount?: number;
        };
    }): Promise<{
        [poolId: string]: ClmmRpcData;
    }>;
    getComputeClmmPoolInfos({ clmmPoolsRpcInfo, mintInfos, }: {
        clmmPoolsRpcInfo: Record<string, ReturnType<typeof PoolInfoLayout.decode> & {
            currentPrice: number;
            programId: PublicKey;
        }>;
        mintInfos: ReturnTypeFetchMultipleMintInfos;
    }): Promise<{
        computeClmmPoolInfo: Record<string, ComputeClmmPoolInfo>;
        computePoolTickData: ReturnTypeFetchMultiplePoolTickArrays;
    }>;
    getPoolInfoFromRpc(poolId: string): Promise<{
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys: ClmmKeys;
        computePoolInfo: ComputeClmmPoolInfo;
        tickData: ReturnTypeFetchMultiplePoolTickArrays;
    }>;
}

declare class CpmmModule extends ModuleBase {
    constructor(params: ModuleBaseProps);
    load(): Promise<void>;
    getCpmmPoolKeys(poolId: string): Promise<CpmmKeys>;
    getRpcPoolInfo(poolId?: string, accountInfos?: RpcPoolInfoAccounts, fetchConfigInfo?: boolean): Promise<CpmmRpcData>;
    getRpcPoolInfos(poolIds: string[], fetchConfigInfo?: boolean): Promise<{
        [poolId: string]: CpmmRpcData;
    }>;
    toComputePoolInfos({ pools, mintInfos, }: {
        pools: Record<string, CpmmRpcData>;
        mintInfos: ReturnTypeFetchMultipleMintInfos;
    }): Record<string, CpmmComputeData>;
    getPoolInfoFromRpc(poolId: string, rpcData?: CpmmRpcData, mintInfos?: ReturnTypeFetchMultipleMintInfos): Promise<{
        poolInfo: ApiV3PoolInfoStandardItemCpmm;
        poolKeys: CpmmKeys;
        rpcData: CpmmRpcData;
    }>;
    createPool<T extends TxVersion>({ poolId, programId, poolFeeAccount, startTime, ownerInfo, associatedOnly, checkCreateATAOwner, txVersion, feeConfig, computeBudgetConfig, txTipConfig, feePayer, ...params }: CreateCpmmPoolParam<T>): Promise<MakeTxData<T, {
        address: CreateCpmmPoolAddress;
    }>>;
    addLiquidity<T extends TxVersion>(params: AddCpmmLiquidityParams<T>): Promise<MakeTxData<T>>;
    withdrawLiquidity<T extends TxVersion>(params: WithdrawCpmmLiquidityParams<T>): Promise<MakeTxData<T>>;
    swap<T extends TxVersion>(params: CpmmSwapParams<T>): Promise<MakeTxData<T>>;
    lockLp<T extends TxVersion>(params: LockCpmmLpParams<T>): Promise<MakeTxData<CpmmLockExtInfo>>;
    harvestLockLp<T extends TxVersion>(params: HarvestLockCpmmLpParams<T>): Promise<MakeTxData>;
    computeSwapAmount({ pool, amountIn, outputMint, slippage, }: {
        pool: CpmmComputeData;
        amountIn: BN__default;
        outputMint: string | PublicKey;
        slippage: number;
    }): {
        allTrade: boolean;
        amountIn: BN__default;
        amountOut: BN__default;
        minAmountOut: BN__default;
        fee: BN__default;
        executionPrice: Decimal;
        priceImpact: any;
    };
    computePairAmount({ poolInfo, baseReserve, quoteReserve, amount, slippage, epochInfo, baseIn, }: ComputePairAmountParams): {
        inputAmountFee: GetTransferAmountFee;
        anotherAmount: GetTransferAmountFee;
        maxAnotherAmount: GetTransferAmountFee;
        minAnotherAmount: GetTransferAmountFee;
        liquidity: BN__default;
    };
}

declare class TradeV2 extends ModuleBase {
    constructor(params: ModuleBaseProps);
    private getWSolAccounts;
    unWrapWSol<T extends TxVersion>(props: {
        amount: BigNumberish;
        computeBudgetConfig?: ComputeBudgetConfig;
        tokenProgram?: PublicKey;
        txVersion?: T;
        feePayer?: PublicKey;
    }): Promise<MakeTxData<T>>;
    wrapWSol<T extends TxVersion>(amount: BigNumberish, tokenProgram?: PublicKey, txVersion?: T, feePayer?: PublicKey): Promise<MakeTxData<T>>;
    swap<T extends TxVersion>({ swapInfo, swapPoolKeys, ownerInfo, computeBudgetConfig, routeProgram, txVersion, feePayer, }: {
        txVersion: T;
        swapInfo: ComputeAmountOutLayout;
        swapPoolKeys?: PoolKeys[];
        ownerInfo: {
            associatedOnly: boolean;
            checkCreateATAOwner: boolean;
        };
        routeProgram: PublicKey;
        computeBudgetConfig?: ComputeBudgetConfig;
        feePayer?: PublicKey;
    }): Promise<MakeMultiTxData<T>>;
    fetchRoutePoolBasicInfo(programIds?: {
        amm: PublicKey;
        clmm: PublicKey;
        cpmm: PublicKey;
    }): Promise<{
        ammPools: BasicPoolInfo[];
        clmmPools: BasicPoolInfo[];
        cpmmPools: BasicPoolInfo[];
    }>;
    getAllRoute({ inputMint, outputMint, clmmPools, ammPools, cpmmPools, }: {
        inputMint: PublicKey;
        outputMint: PublicKey;
        clmmPools: BasicPoolInfo[];
        ammPools: BasicPoolInfo[];
        cpmmPools: BasicPoolInfo[];
    }): ReturnTypeGetAllRoute;
    fetchSwapRoutesData({ routes, inputMint, outputMint, }: {
        inputMint: string | PublicKey;
        outputMint: string | PublicKey;
        routes: ReturnTypeGetAllRoute;
    }): Promise<{
        mintInfos: ReturnTypeFetchMultipleMintInfos;
        ammPoolsRpcInfo: Record<string, AmmRpcData>;
        ammSimulateCache: Record<string, ComputeAmountOutParam["poolInfo"]>;
        clmmPoolsRpcInfo: Record<string, ClmmRpcData>;
        computeClmmPoolInfo: Record<string, ComputeClmmPoolInfo>;
        computePoolTickData: ReturnTypeFetchMultiplePoolTickArrays;
        computeCpmmData: Record<string, CpmmComputeData>;
        routePathDict: ComputeRoutePathType;
    }>;
    getAllRouteComputeAmountOut({ inputTokenAmount, outputToken: propOutputToken, directPath, routePathDict, simulateCache, tickCache, slippage, chainTime, epochInfo, feeConfig, }: {
        directPath: ComputePoolType[];
        routePathDict: ComputeRoutePathType;
        simulateCache: ReturnTypeFetchMultipleInfo;
        tickCache: ReturnTypeFetchMultiplePoolTickArrays;
        mintInfos: ReturnTypeFetchMultipleMintInfos;
        inputTokenAmount: TokenAmount;
        outputToken: ApiV3Token;
        slippage: number;
        chainTime: number;
        epochInfo: EpochInfo;
        feeConfig?: {
            feeBps: BN__default;
            feeAccount: PublicKey;
        };
    }): ComputeAmountOutLayout[];
    /** trade related utils */
    private computeAmountOut;
    computePoolToPoolKeys({ pools, clmmRpcData, ammRpcData, }: {
        pools: ComputePoolType[];
        clmmRpcData?: Record<string, ClmmRpcData>;
        ammRpcData?: Record<string, AmmRpcData>;
    }): Promise<PoolKeys[]>;
}

interface SHOW_INFO {
    programId: PublicKey;
    poolId: PublicKey;
    ammId: PublicKey;
    ownerAccountId: PublicKey;
    snapshotLpAmount: BN__default;
    openTime: number;
    endTime: number;
    project: typeof Utils1216.VERSION_PROJECT[number];
    canClaim: boolean;
    canClaimErrorType: canClaimErrorType;
    tokenInfo: {
        mintAddress: PublicKey;
        mintVault: PublicKey;
        mintDecimals: number;
        perLpLoss: BN__default;
        debtAmount: BN__default;
    }[];
}
declare type canClaimErrorType = "outOfOperationalTime" | "alreadyClaimIt" | undefined;
declare class Utils1216 extends ModuleBase {
    static CLAIMED_NUM: number;
    static POOL_LAYOUT: Structure<number | PublicKey | Buffer | BN__default | BN__default[] | {
        mintDecimals: number;
        mintAddress: PublicKey;
        mintVault: PublicKey;
        perLpLoss: BN__default;
        totalClaimedAmount: BN__default;
    }[], "", {
        padding: BN__default[];
        bump: number;
        endTime: BN__default;
        openTime: BN__default;
        status: number;
        ammId: PublicKey;
        tokenInfo: {
            mintDecimals: number;
            mintAddress: PublicKey;
            mintVault: PublicKey;
            perLpLoss: BN__default;
            totalClaimedAmount: BN__default;
        }[];
    }>;
    static OWNER_LAYOUT: Structure<number | PublicKey | Buffer | BN__default | BN__default[] | {
        mintAddress: PublicKey;
        debtAmount: BN__default;
        claimedAmount: BN__default;
    }[], "", {
        padding: BN__default[];
        owner: PublicKey;
        version: number;
        bump: number;
        poolId: PublicKey;
        lpAmount: BN__default;
        tokenInfo: {
            mintAddress: PublicKey;
            debtAmount: BN__default;
            claimedAmount: BN__default;
        }[];
    }>;
    static DEFAULT_POOL_ID: PublicKey[];
    static SEED_CONFIG: {
        pool: {
            id: Buffer;
        };
        owner: {
            id: Buffer;
        };
    };
    static VERSION_PROJECT: readonly [undefined, "Francium", "Tulip", "Larix"];
    static getPdaPoolId(programId: PublicKey, ammId: PublicKey): {
        publicKey: PublicKey;
        nonce: number;
    };
    static getPdaOwnerId(programId: PublicKey, poolId: PublicKey, owner: PublicKey, version: number): {
        publicKey: PublicKey;
        nonce: number;
    };
    static getAllInfo({ connection, programId, poolIds, wallet, chainTime, }: {
        connection: Connection;
        programId: PublicKey;
        poolIds: PublicKey[];
        wallet: PublicKey;
        chainTime: number;
    }): Promise<SHOW_INFO[]>;
    makeClaimTransaction({ poolInfo, ownerInfo, feePayer, }: {
        connection: Connection;
        poolInfo: SHOW_INFO;
        ownerInfo: {
            wallet?: PublicKey;
            associatedOnly: boolean;
        };
        feePayer?: PublicKey;
    }): Promise<{
        transaction: Transaction;
        signer: Signer[];
    }[]>;
    makeClaimAllTransaction({ poolInfos, ownerInfo, feePayer, }: {
        poolInfos: SHOW_INFO[];
        ownerInfo: {
            wallet?: PublicKey;
            associatedOnly: boolean;
        };
        feePayer?: PublicKey;
    }): Promise<{
        transaction: Transaction;
        signer: Signer[];
    }[]>;
    static makeClaimInstruction({ programId, poolInfo, ownerInfo, }: {
        programId: PublicKey;
        poolInfo: SHOW_INFO;
        ownerInfo: {
            wallet: PublicKey;
            ownerPda: PublicKey;
            claimAddress: PublicKey[];
        };
    }): TransactionInstruction;
}

declare class MarketV2 extends ModuleBase {
    claim<T extends TxVersion>({ ownerInfo, idoKeys, associatedOnly, checkCreateATAOwner, txVersion, feePayer, }: {
        ownerInfo: OwnerIdoInfo[keyof OwnerIdoInfo] & {
            userIdoInfo: string;
        };
        idoKeys: IdoKeysData;
        associatedOnly?: boolean;
        checkCreateATAOwner?: boolean;
        txVersion?: T;
        feePayer?: PublicKey;
    }): Promise<MakeTxData>;
}

declare const LaunchpadPoolInitParam: {
    initPriceX64: BN__default;
    supply: BN__default;
    totalSellA: BN__default;
    totalFundRaisingB: BN__default;
    totalLockedAmount: BN__default;
    cliffPeriod: BN__default;
    unlockPeriod: BN__default;
    decimals: number;
    virtualA: BN__default;
    virtualB: BN__default;
    realA: BN__default;
    realB: BN__default;
    protocolFee: BN__default;
    platformId: PublicKey;
    vestingSchedule: {
        totalLockedAmount: BN__default;
        cliffPeriod: BN__default;
        unlockPeriod: BN__default;
        startTime: BN__default;
        totalAllocatedShare: BN__default;
    };
};
declare class LaunchpadModule extends ModuleBase {
    constructor(params: ModuleBaseProps);
    createLaunchpad<T extends TxVersion>({ programId, authProgramId, platformId, mintA, decimals, mintBDecimals, name, symbol, uri, migrateType, configId, configInfo: propConfigInfo, platformFeeRate, txVersion, computeBudgetConfig, txTipConfig, feePayer, buyAmount, minMintAAmount, slippage, associatedOnly, checkCreateATAOwner, extraSigners, ...extraConfigs }: CreateLaunchPad<T>): Promise<MakeMultiTxData<T, {
        address: LaunchpadPoolInfo & {
            poolId: PublicKey;
        };
        outAmount: BN__default;
    }>>;
    buyToken<T extends TxVersion>({ programId, authProgramId, mintA, mintB, poolInfo: propPoolInfo, configInfo: propConfigInfo, platformFeeRate, txVersion, computeBudgetConfig, txTipConfig, feePayer, buyAmount, minMintAAmount: propMinMintAAmount, slippage, shareFeeRate, shareFeeReceiver, associatedOnly, checkCreateATAOwner, }: BuyToken<T>): Promise<MakeTxData<T, {
        outAmount: BN__default;
    }>>;
    sellToken<T extends TxVersion>({ programId, authProgramId, mintA, mintB, poolInfo: propPoolInfo, configInfo: propConfigInfo, platformFeeRate, txVersion, computeBudgetConfig, txTipConfig, feePayer, sellAmount, minAmountB: propMinAmountB, slippage, shareFeeRate, shareFeeReceiver, associatedOnly, checkCreateATAOwner, }: SellToken<T>): Promise<MakeTxData<T, {
        outAmount: BN__default;
    }>>;
    createPlatformConfig<T extends TxVersion>({ programId, platformAdmin, platformClaimFeeWallet, platformLockNftWallet, cpConfigId, migrateCpLockNftScale, feeRate, name, web, img, txVersion, computeBudgetConfig, txTipConfig, feePayer, }: CreatePlatform<T>): Promise<MakeTxData<T, {
        platformId: PublicKey;
    }>>;
    updatePlatformConfig<T extends TxVersion>({ programId, platformAdmin, platformId: propsPlatformId, updateInfo, txVersion, computeBudgetConfig, txTipConfig, feePayer, }: UpdatePlatform<T>): Promise<MakeTxData>;
    claimPlatformFee<T extends TxVersion>({ programId, authProgramId, platformId, poolId, platformClaimFeeWallet, mintB: propsMintB, vaultB: propsVaultB, mintBProgram, txVersion, computeBudgetConfig, txTipConfig, feePayer, }: ClaimPlatformFee<T>): Promise<MakeTxData>;
    claimAllPlatformFee<T extends TxVersion>({ programId, authProgramId, platformId, platformClaimFeeWallet, txVersion, computeBudgetConfig, txTipConfig, feePayer, }: ClaimAllPlatformFee<T>): Promise<MakeMultiTxData<T>>;
    createVesting<T extends TxVersion>({ programId, poolId, beneficiary, shareAmount, txVersion, computeBudgetConfig, txTipConfig, feePayer, }: CreateVesting<T>): Promise<MakeTxData>;
    claimVesting<T extends TxVersion>({ programId, poolId, poolInfo: propsPoolInfo, txVersion, computeBudgetConfig, txTipConfig, feePayer, associatedOnly, checkCreateATAOwner, }: ClaimVesting<T>): Promise<MakeTxData>;
    getRpcPoolInfo({ poolId, }: {
        poolId: PublicKey;
    }): Promise<LaunchpadPoolInfo & {
        configInfo: LaunchpadConfigInfo;
    }>;
    getRpcPoolsInfo({ poolIdList, config, }: {
        poolIdList: PublicKey[];
        config?: {
            batchRequest?: boolean;
            chunkCount?: number;
        };
    }): Promise<{
        poolInfoMap: Record<string, LaunchpadPoolInfo & {
            poolId: PublicKey;
            configInfo: LaunchpadConfigInfo;
        }>;
    }>;
}

declare class TokenModule extends ModuleBase {
    private _tokenList;
    private _tokenMap;
    private _blackTokenMap;
    private _mintGroup;
    private _whiteMap;
    private _extraTokenList;
    constructor(params: ModuleBaseProps);
    load(params?: LoadParams & {
        type?: JupTokenType;
    }): Promise<void>;
    get tokenList(): TokenInfo[];
    get tokenMap(): Map<string, TokenInfo>;
    get blackTokenMap(): Set<string>;
    get mintGroup(): {
        official: Set<string>;
        jup: Set<string>;
    };
    get whiteListMap(): Set<string>;
    /** === util functions === */
    getTokenInfo(mint: string | PublicKey): Promise<ApiV3Token>;
}

interface RaydiumLoadParams extends TokenAccountDataProp, Omit<RaydiumApiBatchRequestParams, "api"> {
    connection: Connection;
    cluster?: Cluster;
    owner?: PublicKey | Keypair;
    apiRequestInterval?: number;
    apiRequestTimeout?: number;
    apiCacheTime?: number;
    signAllTransactions?: SignAllTransactions;
    urlConfigs?: API_URL_CONFIG;
    logRequests?: boolean;
    logCount?: number;
    jupTokenType?: JupTokenType;
    disableFeatureCheck?: boolean;
    disableLoadToken?: boolean;
    blockhashCommitment?: Commitment;
    loopMultiTxStatus?: boolean;
}
interface RaydiumApiBatchRequestParams {
    api: Api;
    defaultChainTimeOffset?: number;
    defaultChainTime?: number;
}
declare type RaydiumConstructorParams = Required<RaydiumLoadParams> & RaydiumApiBatchRequestParams;
interface DataBase<T> {
    fetched: number;
    data: T;
    extInfo?: Record<string, any>;
}
interface ApiData {
    tokens?: DataBase<ApiV3Token[]>;
    tokenList?: DataBase<ApiV3TokenRes>;
    jupTokenList?: DataBase<ApiV3Token[]>;
}
declare class Raydium {
    cluster: Cluster;
    farm: Farm;
    account: Account;
    liquidity: LiquidityModule;
    clmm: Clmm;
    cpmm: CpmmModule;
    tradeV2: TradeV2;
    utils1216: Utils1216;
    marketV2: MarketV2$1;
    ido: MarketV2;
    token: TokenModule;
    launchpad: LaunchpadModule;
    rawBalances: Map<string, string>;
    apiData: ApiData;
    availability: Partial<AvailabilityCheckAPI3>;
    blockhashCommitment: Commitment;
    loopMultiTxStatus?: boolean;
    private _connection;
    private _owner;
    api: Api;
    private _apiCacheTime;
    private _signAllTransactions?;
    private logger;
    private _chainTime?;
    private _epochInfo?;
    constructor(config: RaydiumConstructorParams);
    static load(config: RaydiumLoadParams): Promise<Raydium>;
    get owner(): Owner | undefined;
    get ownerPubKey(): PublicKey;
    setOwner(owner?: PublicKey | Keypair): Raydium;
    get connection(): Connection;
    setConnection(connection: Connection): Raydium;
    get signAllTransactions(): SignAllTransactions | undefined;
    setSignAllTransactions(signAllTransactions?: SignAllTransactions): Raydium;
    checkOwner(): void;
    private isCacheInvalidate;
    fetchChainTime(): Promise<void>;
    fetchV3TokenList(forceUpdate?: boolean): Promise<ApiV3TokenRes>;
    fetchJupTokenList(forceUpdate?: boolean): Promise<ApiV3Token[]>;
    get chainTimeData(): {
        offset: number;
        chainTime: number;
    } | undefined;
    chainTimeOffset(): Promise<number>;
    currentBlockChainTime(): Promise<number>;
    fetchEpochInfo(): Promise<EpochInfo>;
    fetchAvailabilityStatus(skipCheck?: boolean): Promise<Partial<AvailabilityCheckAPI3>>;
}

export { Account as A, Clmm as C, Farm as F, LaunchpadPoolInitParam as L, MarketExtInfo as M, RaydiumLoadParams as R, SHOW_INFO as S, TokenAccountDataProp as T, Utils1216 as U, RaydiumApiBatchRequestParams as a, RaydiumConstructorParams as b, Raydium as c, canClaimErrorType as d, MarketV2 as e, MarketV2$1 as f, ModuleBase as g, ModuleBaseProps as h, LiquidityModule as i, CpmmModule as j, TradeV2 as k, LaunchpadModule as l, TokenModule as m };
