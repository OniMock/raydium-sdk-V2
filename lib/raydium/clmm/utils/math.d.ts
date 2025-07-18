import { EpochInfo, PublicKey } from '@solana/web3.js';
import BN__default from 'bn.js';
import Decimal from 'decimal.js';
import { p as ApiV3PoolInfoConcentratedItem } from '../../../api-34c9026e.js';
import { g as ReturnTypeGetLiquidityAmountOut, W as TickArray, T as TickArrayBitmapExtensionType } from '../../../type-05b0e57b.js';
import 'axios';
import '../../../solana/type.js';
import '@solana/spl-token';
import '../../../api/url.js';
import '../../../common/owner.js';
import '../../../common/txTool/lookupTable.js';
import '../../../common/txTool/txType.js';
import '../../../module/token.js';
import '../../../common/pubKey.js';
import '../../../common/logger.js';
import '../../../module/currency.js';
import '../../../marshmallow/index.js';
import '../../../marshmallow/buffer-layout.js';
import '../layout.js';

declare class MathUtil {
    static mulDivRoundingUp(a: BN__default, b: BN__default, denominator: BN__default): BN__default;
    static mulDivFloor(a: BN__default, b: BN__default, denominator: BN__default): BN__default;
    static mulDivCeil(a: BN__default, b: BN__default, denominator: BN__default): BN__default;
    static x64ToDecimal(num: BN__default, decimalPlaces?: number): Decimal;
    static decimalToX64(num: Decimal): BN__default;
    static wrappingSubU128(n0: BN__default, n1: BN__default): BN__default;
}
declare class SqrtPriceMath {
    static sqrtPriceX64ToPrice(sqrtPriceX64: BN__default, decimalsA: number, decimalsB: number): Decimal;
    static priceToSqrtPriceX64(price: Decimal, decimalsA: number, decimalsB: number): BN__default;
    static getNextSqrtPriceX64FromInput(sqrtPriceX64: BN__default, liquidity: BN__default, amountIn: BN__default, zeroForOne: boolean): BN__default;
    static getNextSqrtPriceX64FromOutput(sqrtPriceX64: BN__default, liquidity: BN__default, amountOut: BN__default, zeroForOne: boolean): BN__default;
    private static getNextSqrtPriceFromTokenAmountARoundingUp;
    private static getNextSqrtPriceFromTokenAmountBRoundingDown;
    static getSqrtPriceX64FromTick(tick: number): BN__default;
    static getTickFromPrice(price: Decimal, decimalsA: number, decimalsB: number): number;
    static getTickFromSqrtPriceX64(sqrtPriceX64: BN__default): number;
}
declare class TickMath {
    static getTickWithPriceAndTickspacing(price: Decimal, tickSpacing: number, mintDecimalsA: number, mintDecimalsB: number): number;
    static roundPriceWithTickspacing(price: Decimal, tickSpacing: number, mintDecimalsA: number, mintDecimalsB: number): Decimal;
}
declare class LiquidityMath {
    static addDelta(x: BN__default, y: BN__default): BN__default;
    static getTokenAmountAFromLiquidity(sqrtPriceX64A: BN__default, sqrtPriceX64B: BN__default, liquidity: BN__default, roundUp: boolean): BN__default;
    static getTokenAmountBFromLiquidity(sqrtPriceX64A: BN__default, sqrtPriceX64B: BN__default, liquidity: BN__default, roundUp: boolean): BN__default;
    static getLiquidityFromTokenAmountA(sqrtPriceX64A: BN__default, sqrtPriceX64B: BN__default, amountA: BN__default, roundUp: boolean): BN__default;
    static getLiquidityFromTokenAmountB(sqrtPriceX64A: BN__default, sqrtPriceX64B: BN__default, amountB: BN__default): BN__default;
    static getLiquidityFromTokenAmounts(sqrtPriceCurrentX64: BN__default, sqrtPriceX64A: BN__default, sqrtPriceX64B: BN__default, amountA: BN__default, amountB: BN__default): BN__default;
    static getAmountsFromLiquidity(sqrtPriceCurrentX64: BN__default, sqrtPriceX64A: BN__default, sqrtPriceX64B: BN__default, liquidity: BN__default, roundUp: boolean): {
        amountA: BN__default;
        amountB: BN__default;
    };
    static getAmountsFromLiquidityWithSlippage(sqrtPriceCurrentX64: BN__default, sqrtPriceX64A: BN__default, sqrtPriceX64B: BN__default, liquidity: BN__default, amountMax: boolean, roundUp: boolean, amountSlippage: number): {
        amountSlippageA: BN__default;
        amountSlippageB: BN__default;
    };
    static getAmountsOutFromLiquidity({ poolInfo, tickLower, tickUpper, liquidity, slippage, add, epochInfo, amountAddFee, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        tickLower: number;
        tickUpper: number;
        liquidity: BN__default;
        slippage: number;
        add: boolean;
        epochInfo: EpochInfo;
        amountAddFee: boolean;
    }): ReturnTypeGetLiquidityAmountOut;
}
interface StepComputations {
    sqrtPriceStartX64: BN__default;
    tickNext: number;
    initialized: boolean;
    sqrtPriceNextX64: BN__default;
    amountIn: BN__default;
    amountOut: BN__default;
    feeAmount: BN__default;
}
declare abstract class SwapMath {
    static swapCompute(programId: PublicKey, poolId: PublicKey, tickArrayCache: {
        [key: string]: TickArray;
    }, tickArrayBitmap: BN__default[], tickarrayBitmapExtension: TickArrayBitmapExtensionType, zeroForOne: boolean, fee: number, liquidity: BN__default, currentTick: number, tickSpacing: number, currentSqrtPriceX64: BN__default, amountSpecified: BN__default, lastSavedTickArrayStartIndex: number, sqrtPriceLimitX64?: BN__default, catchLiquidityInsufficient?: boolean): {
        allTrade: boolean;
        amountSpecifiedRemaining: BN__default;
        amountCalculated: BN__default;
        feeAmount: BN__default;
        sqrtPriceX64: BN__default;
        liquidity: BN__default;
        tickCurrent: number;
        accounts: PublicKey[];
    };
    private static swapStepCompute;
}

export { LiquidityMath, MathUtil, SqrtPriceMath, StepComputations, SwapMath, TickMath };
