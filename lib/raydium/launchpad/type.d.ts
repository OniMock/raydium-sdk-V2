import { PublicKey, Signer } from '@solana/web3.js';
import { bS as ComputeBudgetConfig, bT as TxTipConfig } from '../../api-34c9026e.js';
import BN__default from 'bn.js';
import { TxVersion } from '../../common/txTool/txType.js';
import { LaunchpadPool, LaunchpadConfig, PlatformConfig } from './layout.js';
import 'axios';
import '../../solana/type.js';
import '@solana/spl-token';
import '../../api/url.js';
import '../../common/owner.js';
import '../../common/txTool/lookupTable.js';
import 'decimal.js';
import '../../module/token.js';
import '../../common/pubKey.js';
import '../../common/logger.js';
import '../../module/currency.js';
import '../../marshmallow/index.js';
import '../../marshmallow/buffer-layout.js';

interface CreateLaunchPad<T = TxVersion.LEGACY> {
    mintA: PublicKey;
    name: string;
    symbol: string;
    buyAmount: BN__default;
    platformId?: PublicKey;
    programId?: PublicKey;
    authProgramId?: PublicKey;
    decimals?: number;
    mintBDecimals?: number;
    curType?: number;
    configId: PublicKey;
    configInfo?: LaunchpadConfigInfo;
    minMintAAmount?: BN__default;
    slippage?: BN__default;
    uri: string;
    migrateType: "amm" | "cpmm";
    supply?: BN__default;
    totalSellA?: BN__default;
    totalFundRaisingB?: BN__default;
    totalLockedAmount?: BN__default;
    cliffPeriod?: BN__default;
    unlockPeriod?: BN__default;
    shareFeeRate?: BN__default;
    shareFeeReceiver?: PublicKey;
    platformFeeRate?: BN__default;
    createOnly?: boolean;
    computeBudgetConfig?: ComputeBudgetConfig;
    txTipConfig?: TxTipConfig;
    txVersion?: T;
    feePayer?: PublicKey;
    associatedOnly?: boolean;
    checkCreateATAOwner?: boolean;
    extraSigners?: Signer[];
}
interface BuyToken<T = TxVersion.LEGACY> {
    mintA: PublicKey;
    buyAmount: BN__default;
    programId?: PublicKey;
    authProgramId?: PublicKey;
    mintB?: PublicKey;
    poolInfo?: LaunchpadPoolInfo;
    minMintAAmount?: BN__default;
    slippage?: BN__default;
    shareFeeRate?: BN__default;
    shareFeeReceiver?: PublicKey;
    configInfo?: LaunchpadConfigInfo;
    platformFeeRate?: BN__default;
    computeBudgetConfig?: ComputeBudgetConfig;
    txTipConfig?: TxTipConfig;
    txVersion?: T;
    feePayer?: PublicKey;
    associatedOnly?: boolean;
    checkCreateATAOwner?: boolean;
}
interface SellToken<T = TxVersion.LEGACY> {
    mintA: PublicKey;
    sellAmount: BN__default;
    slippage?: BN__default;
    programId?: PublicKey;
    authProgramId?: PublicKey;
    poolInfo?: LaunchpadPoolInfo;
    mintB?: PublicKey;
    minAmountB?: BN__default;
    shareFeeRate?: BN__default;
    shareFeeReceiver?: PublicKey;
    configInfo?: LaunchpadConfigInfo;
    platformFeeRate?: BN__default;
    computeBudgetConfig?: ComputeBudgetConfig;
    txTipConfig?: TxTipConfig;
    txVersion?: T;
    feePayer?: PublicKey;
    associatedOnly?: boolean;
    checkCreateATAOwner?: boolean;
}
interface CreatePlatform<T = TxVersion.LEGACY> {
    programId?: PublicKey;
    platformAdmin: PublicKey;
    platformClaimFeeWallet: PublicKey;
    platformLockNftWallet: PublicKey;
    cpConfigId: PublicKey;
    migrateCpLockNftScale: {
        platformScale: BN__default;
        creatorScale: BN__default;
        burnScale: BN__default;
    };
    feeRate: BN__default;
    name: string;
    web: string;
    img: string;
    computeBudgetConfig?: ComputeBudgetConfig;
    txTipConfig?: TxTipConfig;
    txVersion?: T;
    feePayer?: PublicKey;
}
interface UpdatePlatform<T = TxVersion.LEGACY> {
    programId?: PublicKey;
    platformAdmin: PublicKey;
    platformId?: PublicKey;
    updateInfo: {
        type: "updateClaimFeeWallet";
        value: PublicKey;
    } | {
        type: "updateFeeRate";
        value: BN__default;
    } | {
        type: "updateName" | "updateImg" | "updateWeb";
        value: string;
    } | {
        type: "migrateCpLockNftScale";
        value: {
            platformScale: BN__default;
            creatorScale: BN__default;
            burnScale: BN__default;
        };
    } | {
        type: 'updateCpConfigId';
        value: PublicKey;
    } | {
        type: 'updateAll';
        value: {
            platformClaimFeeWallet: PublicKey;
            platformLockNftWallet: PublicKey;
            cpConfigId: PublicKey;
            migrateCpLockNftScale: {
                platformScale: BN__default;
                creatorScale: BN__default;
                burnScale: BN__default;
            };
            feeRate: BN__default;
            name: string;
            web: string;
            img: string;
        };
    };
    computeBudgetConfig?: ComputeBudgetConfig;
    txTipConfig?: TxTipConfig;
    txVersion?: T;
    feePayer?: PublicKey;
}
interface ClaimPlatformFee<T = TxVersion.LEGACY> {
    programId?: PublicKey;
    authProgramId?: PublicKey;
    platformId: PublicKey;
    platformClaimFeeWallet: PublicKey;
    poolId: PublicKey;
    mintB?: PublicKey;
    vaultB?: PublicKey;
    mintBProgram?: PublicKey;
    computeBudgetConfig?: ComputeBudgetConfig;
    txTipConfig?: TxTipConfig;
    txVersion?: T;
    feePayer?: PublicKey;
}
interface ClaimAllPlatformFee<T = TxVersion.LEGACY> {
    programId?: PublicKey;
    authProgramId?: PublicKey;
    platformId: PublicKey;
    platformClaimFeeWallet: PublicKey;
    computeBudgetConfig?: ComputeBudgetConfig;
    txTipConfig?: TxTipConfig;
    txVersion?: T;
    feePayer?: PublicKey;
}
interface CreateVesting<T = TxVersion.LEGACY> {
    programId?: PublicKey;
    poolId: PublicKey;
    beneficiary: PublicKey;
    shareAmount: BN__default;
    computeBudgetConfig?: ComputeBudgetConfig;
    txTipConfig?: TxTipConfig;
    txVersion?: T;
    feePayer?: PublicKey;
}
interface ClaimVesting<T = TxVersion.LEGACY> {
    programId?: PublicKey;
    poolId: PublicKey;
    poolInfo?: LaunchpadPoolInfo;
    computeBudgetConfig?: ComputeBudgetConfig;
    txTipConfig?: TxTipConfig;
    txVersion?: T;
    feePayer?: PublicKey;
    associatedOnly?: boolean;
    checkCreateATAOwner?: boolean;
}
declare type LaunchpadPoolInfo = ReturnType<typeof LaunchpadPool.decode>;
declare type LaunchpadConfigInfo = ReturnType<typeof LaunchpadConfig.decode>;
declare type LaunchpadPlatformInfo = ReturnType<typeof PlatformConfig.decode>;

export { BuyToken, ClaimAllPlatformFee, ClaimPlatformFee, ClaimVesting, CreateLaunchPad, CreatePlatform, CreateVesting, LaunchpadConfigInfo, LaunchpadPlatformInfo, LaunchpadPoolInfo, SellToken, UpdatePlatform };
