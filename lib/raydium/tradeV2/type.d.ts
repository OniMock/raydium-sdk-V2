import { PublicKey, Keypair, Signer, TransactionInstruction, Transaction } from '@solana/web3.js';
import BN__default from 'bn.js';
import Decimal from 'decimal.js';
import { bV as TransferAmountFee, cc as TokenAmount, G as PoolKeys, s as ApiV3PoolInfoItem } from '../../api-34c9026e.js';
import { Token } from '../../module/token.js';
import { d as ComputeClmmPoolInfo } from '../../type-05b0e57b.js';
import { ComputeAmountOutParam } from '../liquidity/type.js';
import { CpmmComputeData } from '../cpmm/type.js';
import 'axios';
import '../../solana/type.js';
import '@solana/spl-token';
import '../../api/url.js';
import '../../common/owner.js';
import '../../common/txTool/lookupTable.js';
import '../../common/txTool/txType.js';
import '../../common/logger.js';
import '../../module/currency.js';
import '../../marshmallow/index.js';
import '../../marshmallow/buffer-layout.js';
import '../../common/pubKey.js';
import '../clmm/layout.js';
import '../liquidity/layout.js';
import '../cpmm/curve/calculator.js';
import '../cpmm/layout.js';

interface ComputeAmountOutAmmLayout {
    amountIn: TransferAmountFee;
    amountOut: TransferAmountFee;
    minAmountOut: TransferAmountFee;
    currentPrice: Decimal | undefined;
    executionPrice: Decimal | null;
    priceImpact: Decimal;
    fee: TokenAmount[];
    routeType: "amm";
    poolInfoList: ComputePoolType[];
    remainingAccounts: PublicKey[][];
    poolReady: boolean;
    poolType: "CLMM" | "CPMM" | "STABLE" | undefined;
    feeConfig?: {
        feeAmount: BN__default;
        feeAccount: PublicKey;
    };
    expirationTime: number | undefined;
    allTrade: boolean;
    slippage: number;
    clmmExPriceX64: (BN__default | undefined)[];
}
interface ComputeAmountOutRouteLayout {
    amountIn: TransferAmountFee;
    amountOut: TransferAmountFee;
    minAmountOut: TransferAmountFee;
    currentPrice: Decimal | undefined;
    executionPrice: Decimal | null;
    priceImpact: Decimal;
    fee: TokenAmount[];
    routeType: "route";
    poolInfoList: ComputePoolType[];
    remainingAccounts: (PublicKey[] | undefined)[];
    minMiddleAmountFee: TokenAmount | undefined;
    middleToken: Token;
    poolReady: boolean;
    poolType: (string | undefined)[];
    feeConfig?: {
        feeAmount: BN__default;
        feeAccount: PublicKey;
    };
    expirationTime: number | undefined;
    allTrade: boolean;
    slippage: number;
    clmmExPriceX64: (BN__default | undefined)[];
}
declare type ComputeAmountOutLayout = ComputeAmountOutAmmLayout | ComputeAmountOutRouteLayout;
declare type MakeSwapInstructionParam = {
    ownerInfo: {
        wallet: PublicKey;
        sourceToken: PublicKey;
        routeToken?: PublicKey;
        destinationToken: PublicKey;
        userPdaAccount?: PublicKey;
    };
    inputMint: PublicKey;
    routeProgram: PublicKey;
    swapInfo: ((Omit<ComputeAmountOutAmmLayout, "poolKey"> & {
        poolKey: PoolKeys[];
        poolInfo: ComputePoolType[];
    }) | (Omit<ComputeAmountOutRouteLayout, "poolKey"> & {
        poolKey: PoolKeys[];
        poolInfo: ComputePoolType[];
    })) & {
        outputMint: PublicKey;
    };
};
interface PoolAccountInfoV4 {
    ammId: string;
    status: BN__default;
    baseDecimals: number;
    quoteDecimals: number;
    lpDecimals: number;
    baseReserve: BN__default;
    quoteReserve: BN__default;
    lpSupply: BN__default;
    startTime: BN__default;
}
interface ReturnTypeFetchMultipleInfo {
    [ammId: string]: ComputeAmountOutParam["poolInfo"];
}
declare type ReturnTypeGetAddLiquidityDefaultPool = ApiV3PoolInfoItem | undefined;
interface ReturnTypeMakeSwapInstruction {
    signers: (Keypair | Signer)[];
    instructions: TransactionInstruction[];
    instructionTypes: string[];
    address: {
        [key: string]: PublicKey;
    };
    lookupTableAddress: string[];
}
interface ReturnTypeMakeSwapTransaction {
    transactions: {
        transaction: Transaction;
        signer: (Keypair | Signer)[];
    }[];
    address: {
        [key: string]: PublicKey;
    };
}
declare type BasicPoolInfo = {
    id: PublicKey;
    version: number;
    mintA: PublicKey;
    mintB: PublicKey;
};
declare type RoutePathType = {
    [routeMint: string]: {
        skipMintCheck?: boolean;
        mintProgram: PublicKey;
        in: BasicPoolInfo[];
        out: BasicPoolInfo[];
        mDecimals: number;
    };
};
interface ReturnTypeGetAllRoute {
    directPath: BasicPoolInfo[];
    addLiquidityPools: BasicPoolInfo[];
    routePathDict: RoutePathType;
    needSimulate: BasicPoolInfo[];
    needTickArray: BasicPoolInfo[];
    cpmmPoolList: BasicPoolInfo[];
}
declare type ComputePoolType = ComputeAmountOutParam["poolInfo"] | ComputeClmmPoolInfo | CpmmComputeData;
declare type ComputeRoutePathType = {
    [routeMint: string]: {
        skipMintCheck?: boolean;
        mintProgram: PublicKey;
        in: ComputePoolType[];
        out: ComputePoolType[];
        mDecimals: number;
    };
};

export { BasicPoolInfo, ComputeAmountOutAmmLayout, ComputeAmountOutLayout, ComputeAmountOutRouteLayout, ComputePoolType, ComputeRoutePathType, MakeSwapInstructionParam, PoolAccountInfoV4, ReturnTypeFetchMultipleInfo, ReturnTypeGetAddLiquidityDefaultPool, ReturnTypeGetAllRoute, ReturnTypeMakeSwapInstruction, ReturnTypeMakeSwapTransaction, RoutePathType };
