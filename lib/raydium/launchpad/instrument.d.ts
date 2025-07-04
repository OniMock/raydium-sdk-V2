import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import BN__default from 'bn.js';

declare const anchorDataBuf: {
    initialize: Buffer;
    buyExactIn: Buffer;
    buyExactOut: Buffer;
    sellExactIn: Buffer;
    sellExactOut: Buffer;
    createVestingAccount: Buffer;
    claimVestedToken: Buffer;
    createPlatformConfig: Buffer;
    claimPlatformFee: Buffer;
    updatePlaformConfig: Buffer;
};
declare function initialize(programId: PublicKey, payer: PublicKey, creator: PublicKey, configId: PublicKey, platformId: PublicKey, auth: PublicKey, poolId: PublicKey, mintA: PublicKey, mintB: PublicKey, vaultA: PublicKey, vaultB: PublicKey, metadataId: PublicKey, tokenProgramA: PublicKey, tokenProgramB: PublicKey, decimals: number, name: string, symbol: string, uri: string, curveParam: ({
    type: "ConstantCurve";
    totalSellA: BN__default;
} | {
    type: "FixedCurve";
} | {
    type: "LinearCurve";
}) & {
    migrateType: "amm" | "cpmm";
    supply: BN__default;
    totalFundRaisingB: BN__default;
}, totalLockedAmount: BN__default, cliffPeriod: BN__default, unlockPeriod: BN__default): TransactionInstruction;
declare function buyExactInInstruction(programId: PublicKey, owner: PublicKey, auth: PublicKey, configId: PublicKey, platformId: PublicKey, poolId: PublicKey, userTokenAccountA: PublicKey, userTokenAccountB: PublicKey, vaultA: PublicKey, vaultB: PublicKey, mintA: PublicKey, mintB: PublicKey, tokenProgramA: PublicKey, tokenProgramB: PublicKey, amountB: BN__default, minAmountA: BN__default, shareFeeRate?: BN__default, shareFeeReceiver?: PublicKey): TransactionInstruction;
declare function buyExactOutInstruction(programId: PublicKey, owner: PublicKey, auth: PublicKey, configId: PublicKey, platformId: PublicKey, poolId: PublicKey, userTokenAccountA: PublicKey, userTokenAccountB: PublicKey, vaultA: PublicKey, vaultB: PublicKey, mintA: PublicKey, mintB: PublicKey, tokenProgramA: PublicKey, tokenProgramB: PublicKey, amountA: BN__default, maxAmountB: BN__default, shareFeeRate?: BN__default, shareFeeReceiver?: PublicKey): TransactionInstruction;
declare function sellExactInInstruction(programId: PublicKey, owner: PublicKey, auth: PublicKey, configId: PublicKey, platformId: PublicKey, poolId: PublicKey, userTokenAccountA: PublicKey, userTokenAccountB: PublicKey, vaultA: PublicKey, vaultB: PublicKey, mintA: PublicKey, mintB: PublicKey, tokenProgramA: PublicKey, tokenProgramB: PublicKey, amountA: BN__default, minAmountB: BN__default, shareFeeRate?: BN__default, shareFeeReceiver?: PublicKey): TransactionInstruction;
declare function sellExactOut(programId: PublicKey, owner: PublicKey, auth: PublicKey, configId: PublicKey, platformId: PublicKey, poolId: PublicKey, userTokenAccountA: PublicKey, userTokenAccountB: PublicKey, vaultA: PublicKey, vaultB: PublicKey, mintA: PublicKey, mintB: PublicKey, tokenProgramA: PublicKey, tokenProgramB: PublicKey, amountB: BN__default, maxAmountA: BN__default, shareFeeRate?: BN__default, shareFeeReceiver?: PublicKey): TransactionInstruction;
declare function claimVestedToken(programId: PublicKey, owner: PublicKey, auth: PublicKey, poolId: PublicKey, vestingRecord: PublicKey, userTokenAccountA: PublicKey, vaultA: PublicKey, mintA: PublicKey, tokenProgramA: PublicKey): TransactionInstruction;
declare function createVestingAccount(programId: PublicKey, owner: PublicKey, beneficiary: PublicKey, poolId: PublicKey, vestingRecord: PublicKey, shareAmount: BN__default): TransactionInstruction;
declare function claimPlatformFee(programId: PublicKey, platformClaimFeeWallet: PublicKey, auth: PublicKey, poolId: PublicKey, platformId: PublicKey, vaultB: PublicKey, userTokenAccountB: PublicKey, mintB: PublicKey, tokenProgramB: PublicKey): TransactionInstruction;
declare function createPlatformConfig(programId: PublicKey, platformAdmin: PublicKey, platformClaimFeeWallet: PublicKey, platformLockNftWallet: PublicKey, platformId: PublicKey, cpConfigId: PublicKey, migrateCpLockNftScale: {
    platformScale: BN__default;
    creatorScale: BN__default;
    burnScale: BN__default;
}, feeRate: BN__default, name: string, web: string, img: string): TransactionInstruction;
declare function updatePlatformConfig(programId: PublicKey, platformAdmin: PublicKey, platformId: PublicKey, updateInfo: {
    type: "updateClaimFeeWallet" | "updateLockNftWallet";
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
}): TransactionInstruction;

export { anchorDataBuf, buyExactInInstruction, buyExactOutInstruction, claimPlatformFee, claimVestedToken, createPlatformConfig, createVestingAccount, initialize, sellExactInInstruction, sellExactOut, updatePlatformConfig };
