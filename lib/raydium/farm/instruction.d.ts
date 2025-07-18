import { PublicKey, TransactionInstruction, Connection } from '@solana/web3.js';
import BN__default from 'bn.js';
import { bR as InstructionReturn, bm as RewardType, U as FormatFarmKeyOut, br as RewardInfoKey, bq as FarmRewardInfoConfig } from '../../api-34c9026e.js';
import 'axios';
import '../../solana/type.js';
import '@solana/spl-token';
import '../../api/url.js';
import '../../common/owner.js';
import '../../common/txTool/lookupTable.js';
import '../../common/txTool/txType.js';
import 'decimal.js';
import '../../module/token.js';
import '../../common/pubKey.js';
import '../../common/logger.js';
import '../../module/currency.js';
import '../../marshmallow/index.js';
import '../../marshmallow/buffer-layout.js';

declare function createAssociatedLedgerAccountInstruction(params: {
    version: number;
    id: PublicKey;
    programId: PublicKey;
    ledger: PublicKey;
    owner: PublicKey;
}): InstructionReturn;
interface CreateFarmInstruction {
    farmId: PublicKey;
    farmAuthority: PublicKey;
    lpVault: PublicKey;
    lpMint: PublicKey;
    lockVault: PublicKey;
    lockMint: PublicKey;
    lockUserAccount?: PublicKey;
    programId: PublicKey;
    owner: PublicKey;
    rewardInfo: RewardInfoKey[];
    rewardInfoConfig: FarmRewardInfoConfig[];
    nonce: number;
}
declare function makeCreateFarmInstruction(params: CreateFarmInstruction): InstructionReturn;
interface CreatorWithdrawFarmRewardInstruction {
    id: PublicKey;
    programId: PublicKey;
    authority: PublicKey;
    lpVault: PublicKey;
    rewardVault: PublicKey;
    userRewardToken: PublicKey;
    owner: PublicKey;
}
declare function makeCreatorWithdrawFarmRewardInstruction(params: CreatorWithdrawFarmRewardInstruction): InstructionReturn;
declare function voterStakeRegistryDeposit(programId: PublicKey, registrar: PublicKey, voter: PublicKey, voterVault: PublicKey, depositToken: PublicKey, depositAuthority: PublicKey, userStakerInfoV2: PublicKey, pool: PublicKey, votingMint: PublicKey, votingMintAuthority: PublicKey, stakeProgramId: PublicKey, depositEntryIndex: number, amount: BN__default): TransactionInstruction;
declare function voterStakeRegistryUpdateVoterWeightRecord(programId: PublicKey, registrar: PublicKey, voter: PublicKey, voterWeightRecord: PublicKey): TransactionInstruction;
declare function voterStakeRegistryWithdraw(programId: PublicKey, registrar: PublicKey, voter: PublicKey, voterAuthority: PublicKey, tokenOwnerRecord: PublicKey, voterWeightRecord: PublicKey, vault: PublicKey, destination: PublicKey, userStakerInfoV2: PublicKey, pool: PublicKey, votingMint: PublicKey, votingMintAuthority: PublicKey, stakeProgramId: PublicKey, depositEntryIndex: number, amount: BN__default): TransactionInstruction;
declare function governanceCreateTokenOwnerRecord(programId: PublicKey, realm: PublicKey, governingTokenOwner: PublicKey, governingTokenMint: PublicKey, payer: PublicKey, tokenOwnerRecordAddress: PublicKey): TransactionInstruction;
declare function voterStakeRegistryCreateVoter(programId: PublicKey, registrar: PublicKey, voter: PublicKey, voterWeightRecord: PublicKey, voterAuthority: PublicKey, payer: PublicKey, voterBump: number, voterWeightRecordBump: number): TransactionInstruction;
declare function voterStakeRegistryCreateDepositEntry(programId: PublicKey, registrar: PublicKey, voter: PublicKey, voterVault: PublicKey, voterAuthority: PublicKey, payer: PublicKey, depositMint: PublicKey, depositEntryIndex: number, kind: number, startTs: BN__default | undefined, periods: number, allowClawback: boolean): TransactionInstruction;
declare function makeDepositTokenInstruction({ connection, programId, governanceProgramId, voteWeightAddinProgramId, realm, communityTokenMint, owner, poolId, tokenProgram, }: {
    connection: Connection;
    programId: PublicKey;
    governanceProgramId: PublicKey;
    voteWeightAddinProgramId: PublicKey;
    realm: PublicKey;
    communityTokenMint: PublicKey;
    owner: PublicKey;
    poolId: PublicKey;
    tokenProgram?: PublicKey;
}): Promise<TransactionInstruction[]>;
declare function makeWithdrawTokenInstruction({ connection, programId, governanceProgramId, voteWeightAddinProgramId, realm, communityTokenMint, owner, poolId, tokenProgram, }: {
    connection: Connection;
    programId: PublicKey;
    governanceProgramId: PublicKey;
    voteWeightAddinProgramId: PublicKey;
    realm: PublicKey;
    communityTokenMint: PublicKey;
    owner: PublicKey;
    poolId: PublicKey;
    tokenProgram?: PublicKey;
}): Promise<TransactionInstruction[]>;
declare function makeRestartRewardInstruction({ payer, rewardVault, userRewardTokenPub, farmKeys, rewardInfo, }: {
    payer: PublicKey;
    rewardVault: PublicKey;
    userRewardTokenPub: PublicKey;
    farmKeys: {
        id: PublicKey;
        programId: PublicKey;
        lpVault: PublicKey;
    };
    rewardInfo: {
        openTime: number;
        endTime: number;
        perSecond: string;
    };
}): TransactionInstruction;
declare function makeAddNewRewardInstruction({ payer, userRewardTokenPub, farmKeys, rewardVault, rewardInfo, }: {
    payer: PublicKey;
    userRewardTokenPub: PublicKey;
    rewardVault: PublicKey;
    farmKeys: {
        id: PublicKey;
        programId: PublicKey;
        authority: PublicKey;
    };
    rewardInfo: {
        mint: PublicKey;
        openTime: number;
        endTime: number;
        perSecond: string;
        rewardType: RewardType;
    };
}): TransactionInstruction;
declare function makeDepositWithdrawInstruction(params: {
    instruction: number;
    amount: BN__default;
    farmInfo: {
        id: string;
        programId: string;
    };
    farmKeys: FormatFarmKeyOut;
    lpAccount: PublicKey;
    owner: PublicKey;
    rewardAccounts: PublicKey[];
    deposit?: boolean;
    version: 3 | 5 | 6;
}): TransactionInstruction;
interface DepositWithdrawParams {
    amount: BN__default;
    farmInfo: {
        id: string;
        programId: string;
    };
    farmKeys: FormatFarmKeyOut;
    lpAccount: PublicKey;
    owner: PublicKey;
    rewardAccounts: PublicKey[];
    userAuxiliaryLedgers?: PublicKey[];
}
declare function makeWithdrawInstructionV6(params: DepositWithdrawParams): TransactionInstruction;
declare function makeWithdrawInstructionV5(params: DepositWithdrawParams): TransactionInstruction;
declare function makeWithdrawInstructionV4(params: DepositWithdrawParams): TransactionInstruction;
declare function makeWithdrawInstructionV3(params: DepositWithdrawParams): TransactionInstruction;
declare function makeDepositInstructionV3(params: DepositWithdrawParams): TransactionInstruction;
declare function makeDepositInstructionV5(params: DepositWithdrawParams): TransactionInstruction;
declare function makeDepositInstructionV6(params: DepositWithdrawParams): TransactionInstruction;

export { createAssociatedLedgerAccountInstruction, governanceCreateTokenOwnerRecord, makeAddNewRewardInstruction, makeCreateFarmInstruction, makeCreatorWithdrawFarmRewardInstruction, makeDepositInstructionV3, makeDepositInstructionV5, makeDepositInstructionV6, makeDepositTokenInstruction, makeDepositWithdrawInstruction, makeRestartRewardInstruction, makeWithdrawInstructionV3, makeWithdrawInstructionV4, makeWithdrawInstructionV5, makeWithdrawInstructionV6, makeWithdrawTokenInstruction, voterStakeRegistryCreateDepositEntry, voterStakeRegistryCreateVoter, voterStakeRegistryDeposit, voterStakeRegistryUpdateVoterWeightRecord, voterStakeRegistryWithdraw };
