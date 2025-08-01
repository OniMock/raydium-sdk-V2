import { PublicKey, TransactionInstruction, EpochInfo, AccountInfo } from '@solana/web3.js';
import BN__default from 'bn.js';
import Decimal from 'decimal.js';
import { i as ApiV3Token, f as ApiCpmmConfigInfo, bS as ComputeBudgetConfig, bT as TxTipConfig, r as ApiV3PoolInfoStandardItemCpmm, z as CpmmKeys, cg as Percent, bW as GetTransferAmountFee } from '../../api-34c9026e.js';
import { TxVersion } from '../../common/txTool/txType.js';
import { SwapResult } from './curve/calculator.js';
import { CpmmPoolInfoLayout } from './layout.js';
import 'axios';
import '../../solana/type.js';
import '@solana/spl-token';
import '../../api/url.js';
import '../../common/owner.js';
import '../../common/txTool/lookupTable.js';
import '../../module/token.js';
import '../../common/pubKey.js';
import '../../common/logger.js';
import '../../module/currency.js';
import '../../marshmallow/index.js';
import '../../marshmallow/buffer-layout.js';

interface CpmmConfigInfoInterface {
    bump: number;
    disableCreatePool: boolean;
    index: number;
    tradeFeeRate: BN__default;
    protocolFeeRate: BN__default;
    fundFeeRate: BN__default;
    createPoolFee: BN__default;
    protocolOwner: PublicKey;
    fundOwner: PublicKey;
}
interface CpmmPoolInfoInterface {
    configId: PublicKey;
    poolCreator: PublicKey;
    vaultA: PublicKey;
    vaultB: PublicKey;
    mintLp: PublicKey;
    mintA: PublicKey;
    mintB: PublicKey;
    mintProgramA: PublicKey;
    mintProgramB: PublicKey;
    observationId: PublicKey;
    bump: number;
    status: number;
    lpDecimals: number;
    mintDecimalA: number;
    mintDecimalB: number;
    lpAmount: BN__default;
    protocolFeesMintA: BN__default;
    protocolFeesMintB: BN__default;
    fundFeesMintA: BN__default;
    fundFeesMintB: BN__default;
    openTime: BN__default;
}
interface CreateCpmmPoolParam<T> {
    poolId?: PublicKey;
    programId: PublicKey;
    poolFeeAccount: PublicKey;
    mintA: Pick<ApiV3Token, "address" | "decimals" | "programId">;
    mintB: Pick<ApiV3Token, "address" | "decimals" | "programId">;
    mintAAmount: BN__default;
    mintBAmount: BN__default;
    startTime: BN__default;
    feeConfig: ApiCpmmConfigInfo;
    associatedOnly: boolean;
    checkCreateATAOwner?: boolean;
    ownerInfo: {
        feePayer?: PublicKey;
        useSOLBalance?: boolean;
    };
    computeBudgetConfig?: ComputeBudgetConfig;
    txVersion?: T;
    txTipConfig?: TxTipConfig;
    feePayer?: PublicKey;
}
interface CreateCpmmPoolAddress {
    poolId: PublicKey;
    configId: PublicKey;
    authority: PublicKey;
    lpMint: PublicKey;
    vaultA: PublicKey;
    vaultB: PublicKey;
    observationId: PublicKey;
    mintA: ApiV3Token;
    mintB: ApiV3Token;
    programId: PublicKey;
    poolFeeAccount: PublicKey;
    feeConfig: ApiCpmmConfigInfo;
}
interface AddCpmmLiquidityParams<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoStandardItemCpmm;
    poolKeys?: CpmmKeys;
    payer?: PublicKey;
    inputAmount: BN__default;
    baseIn: boolean;
    slippage: Percent;
    config?: {
        bypassAssociatedCheck?: boolean;
        checkCreateATAOwner?: boolean;
    };
    computeBudgetConfig?: ComputeBudgetConfig;
    txTipConfig?: TxTipConfig;
    txVersion?: T;
    computeResult?: {
        inputAmountFee: GetTransferAmountFee;
        anotherAmount: GetTransferAmountFee;
        maxAnotherAmount: GetTransferAmountFee;
        liquidity: BN__default;
    };
    feePayer?: PublicKey;
}
interface WithdrawCpmmLiquidityParams<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoStandardItemCpmm;
    poolKeys?: CpmmKeys;
    payer?: PublicKey;
    lpAmount: BN__default;
    slippage: Percent;
    computeBudgetConfig?: ComputeBudgetConfig;
    txTipConfig?: TxTipConfig;
    txVersion?: T;
    feePayer?: PublicKey;
    closeWsol?: boolean;
}
interface CpmmSwapParams<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoStandardItemCpmm;
    poolKeys?: CpmmKeys;
    payer?: PublicKey;
    baseIn: boolean;
    fixedOut?: boolean;
    slippage?: number;
    swapResult: Pick<SwapResult, "sourceAmountSwapped" | "destinationAmountSwapped">;
    inputAmount: BN__default;
    config?: {
        bypassAssociatedCheck?: boolean;
        checkCreateATAOwner?: boolean;
        associatedOnly?: boolean;
        useIdempotent?: boolean;
    };
    computeBudgetConfig?: ComputeBudgetConfig;
    txTipConfig?: TxTipConfig;
    txVersion?: T;
    feePayer?: PublicKey;
    nonce?: {
        nonce: string;
        instruction: TransactionInstruction;
    };
}
interface ComputePairAmountParams {
    poolInfo: ApiV3PoolInfoStandardItemCpmm;
    baseReserve: BN__default;
    quoteReserve: BN__default;
    amount: string | Decimal;
    slippage: Percent;
    epochInfo: EpochInfo;
    baseIn?: boolean;
}
declare type CpmmRpcData = ReturnType<typeof CpmmPoolInfoLayout.decode> & {
    baseReserve: BN__default;
    quoteReserve: BN__default;
    vaultAAmount: BN__default;
    vaultBAmount: BN__default;
    configInfo?: CpmmConfigInfoInterface;
    poolPrice: Decimal;
    programId: PublicKey;
};
declare type CpmmComputeData = {
    id: PublicKey;
    version: 7;
    configInfo: CpmmConfigInfoInterface;
    mintA: ApiV3Token;
    mintB: ApiV3Token;
    authority: PublicKey;
} & Omit<CpmmRpcData, "configInfo" | "mintA" | "mintB">;
declare type CpmmLockExtInfo = {
    nftMint: PublicKey;
    nftAccount: PublicKey;
    metadataAccount: PublicKey;
    lockPda: PublicKey;
    userLpVault: PublicKey;
    lockLpVault: PublicKey;
};
interface LockCpmmLpParams<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoStandardItemCpmm;
    poolKeys?: CpmmKeys;
    lpAmount: BN__default;
    programId?: PublicKey;
    authProgram?: PublicKey;
    feePayer?: PublicKey;
    feeNftOwner?: PublicKey;
    withMetadata?: boolean;
    getEphemeralSigners?: (k: number) => any;
    computeBudgetConfig?: ComputeBudgetConfig;
    txTipConfig?: TxTipConfig;
    txVersion?: T;
}
interface HarvestLockCpmmLpParams<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoStandardItemCpmm;
    poolKeys?: CpmmKeys;
    nftMint: PublicKey;
    lpFeeAmount: BN__default;
    programId?: PublicKey;
    authProgram?: PublicKey;
    clmmProgram?: PublicKey;
    cpmmProgram?: {
        programId?: PublicKey;
        authProgram?: PublicKey;
    };
    feePayer?: PublicKey;
    withMetadata?: boolean;
    getEphemeralSigners?: (k: number) => any;
    computeBudgetConfig?: ComputeBudgetConfig;
    txTipConfig?: TxTipConfig;
    txVersion?: T;
    closeWsol?: boolean;
}
interface CpmmLockNftBasicInfo {
    name: string;
    symbol: string;
    description: string;
    external_url: string;
    collection: {
        name: string;
        family: string;
    };
    image: string;
}
interface CpmmLockNftInfo extends CpmmLockNftBasicInfo {
    poolInfo: ApiV3PoolInfoStandardItemCpmm;
    positionInfo: {
        percentage: number;
        usdValue: number;
        unclaimedFee: {
            lp: number;
            amountA: number;
            amountB: number;
            useValue: number;
        };
    };
}
declare type RpcPoolInfoAccounts = {
    marketAccount: {
        accountInfo: AccountInfo<Buffer> | null;
    } & {
        pubkey: PublicKey;
    };
    configState: {
        accountInfo: AccountInfo<Buffer> | null;
    } & {
        pubkey: PublicKey;
    };
    vaultAInfo: {
        accountInfo: AccountInfo<Buffer> | null;
    } & {
        pubkey: PublicKey;
    };
    vaultBInfo: {
        accountInfo: AccountInfo<Buffer> | null;
    } & {
        pubkey: PublicKey;
    };
};

export { AddCpmmLiquidityParams, ComputePairAmountParams, CpmmComputeData, CpmmConfigInfoInterface, CpmmLockExtInfo, CpmmLockNftBasicInfo, CpmmLockNftInfo, CpmmPoolInfoInterface, CpmmRpcData, CpmmSwapParams, CreateCpmmPoolAddress, CreateCpmmPoolParam, HarvestLockCpmmLpParams, LockCpmmLpParams, RpcPoolInfoAccounts, WithdrawCpmmLiquidityParams };
