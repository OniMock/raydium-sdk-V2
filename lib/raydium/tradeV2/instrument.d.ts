import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import BN__default from 'bn.js';
import { s as ApiV3PoolInfoItem, G as PoolKeys } from '../../api-34c9026e.js';
import { ComputePoolType, MakeSwapInstructionParam, ReturnTypeMakeSwapInstruction } from './type.js';
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
import '../../type-05b0e57b.js';
import '../clmm/layout.js';
import '../liquidity/type.js';
import '../liquidity/layout.js';
import '../cpmm/type.js';
import '../cpmm/curve/calculator.js';
import '../cpmm/layout.js';

declare function route1Instruction(programId: PublicKey, poolInfoA: ApiV3PoolInfoItem, poolKeyA: PoolKeys, poolKeyB: PoolKeys, userSourceToken: PublicKey, userRouteToken: PublicKey, userPdaAccount: PublicKey, ownerWallet: PublicKey, inputMint: PublicKey, amountIn: BN__default, amountOut: BN__default, tickArrayA?: PublicKey[]): TransactionInstruction;
declare function route2Instruction(programId: PublicKey, poolInfoB: ApiV3PoolInfoItem, poolKeyA: PoolKeys, poolKeyB: PoolKeys, userRouteToken: PublicKey, userDestinationToken: PublicKey, userPdaAccount: PublicKey, ownerWallet: PublicKey, routeMint: PublicKey, tickArrayB?: PublicKey[]): TransactionInstruction;
declare function routeInstruction(programId: PublicKey, wallet: PublicKey, userSourceToken: PublicKey, userRouteToken: PublicKey, userDestinationToken: PublicKey, inputMint: string, routeMint: string, outputMint: string, poolInfoA: ComputePoolType, poolInfoB: ComputePoolType, poolKeyA: PoolKeys, poolKeyB: PoolKeys, amountIn: BN__default, amountOut: BN__default, remainingAccounts: (PublicKey[] | undefined)[]): TransactionInstruction;
declare function makeSwapInstruction({ routeProgram, ownerInfo, inputMint, swapInfo, }: MakeSwapInstructionParam): ReturnTypeMakeSwapInstruction;
interface ApiSwapV1Out {
    id: string;
    success: boolean;
    version: "V0" | "V1";
    openTime?: undefined;
    msg: undefined;
    data: {
        swapType: "BaseIn" | "BaseOut";
        inputMint: string;
        inputAmount: string;
        outputMint: string;
        outputAmount: string;
        otherAmountThreshold: string;
        slippageBps: number;
        priceImpactPct: number;
        routePlan: {
            poolId: string;
            inputMint: string;
            outputMint: string;
            feeMint: string;
            feeRate: number;
            feeAmount: string;
            remainingAccounts?: string[];
            lastPoolPriceX64?: string;
        }[];
    };
}
declare function swapBaseInAutoAccount({ programId, wallet, amount, inputAccount, outputAccount, routeInfo, poolKeys, }: {
    programId: PublicKey;
    wallet: PublicKey;
    amount: BN__default;
    inputAccount: PublicKey;
    outputAccount: PublicKey;
    routeInfo: ApiSwapV1Out;
    poolKeys: PoolKeys[];
}): TransactionInstruction;
declare function swapBaseOutAutoAccount({ programId, wallet, inputAccount, outputAccount, routeInfo, poolKeys, }: {
    programId: PublicKey;
    wallet: PublicKey;
    inputAccount: PublicKey;
    outputAccount: PublicKey;
    routeInfo: ApiSwapV1Out;
    poolKeys: PoolKeys[];
}): TransactionInstruction;

export { ApiSwapV1Out, makeSwapInstruction, route1Instruction, route2Instruction, routeInstruction, swapBaseInAutoAccount, swapBaseOutAutoAccount };
