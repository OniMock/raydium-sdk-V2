import BN__default from 'bn.js';
import Decimal from 'decimal.js';
import { CurveBase, PoolBaseAmount } from './curveBase.js';
import { LaunchpadPoolInfo } from '../type.js';
export { Q64 } from '../../clmm/utils/constants.js';
import '@solana/web3.js';
import '../../../api-34c9026e.js';
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

declare class LaunchPadConstantProductCurve extends CurveBase {
    static getPoolInitPriceByPool({ poolInfo, decimalA, decimalB, }: {
        poolInfo: LaunchpadPoolInfo | PoolBaseAmount;
        decimalA: number;
        decimalB: number;
    }): Decimal;
    static getPoolInitPriceByInit({ a, b, decimalA, decimalB, }: {
        a: BN__default;
        b: BN__default;
        decimalA: number;
        decimalB: number;
    }): Decimal;
    static getPoolPrice({ poolInfo, decimalA, decimalB, }: {
        poolInfo: LaunchpadPoolInfo | PoolBaseAmount;
        decimalA: number;
        decimalB: number;
    }): Decimal;
    static getPoolEndPrice({ supply, totalSell, totalLockedAmount, totalFundRaising, migrateFee, decimalA, decimalB, }: {
        supply: BN__default;
        totalSell: BN__default;
        totalLockedAmount: BN__default;
        totalFundRaising: BN__default;
        migrateFee: BN__default;
        decimalA: number;
        decimalB: number;
    }): Decimal;
    static getPoolEndPriceReal({ poolInfo, decimalA, decimalB, }: {
        poolInfo: LaunchpadPoolInfo;
        decimalA: number;
        decimalB: number;
    }): Decimal;
    static getInitParam({ supply, totalFundRaising, totalSell, totalLockedAmount, migrateFee, }: {
        supply: BN__default;
        totalSell: BN__default;
        totalLockedAmount: BN__default;
        totalFundRaising: BN__default;
        migrateFee: BN__default;
    }): {
        a: BN__default;
        b: BN__default;
        c: BN__default;
    };
    static buyExactIn({ poolInfo, amount }: {
        poolInfo: LaunchpadPoolInfo | PoolBaseAmount;
        amount: BN__default;
    }): BN__default;
    static buyExactOut({ poolInfo, amount }: {
        poolInfo: LaunchpadPoolInfo | PoolBaseAmount;
        amount: BN__default;
    }): BN__default;
    static sellExactIn({ poolInfo, amount }: {
        poolInfo: LaunchpadPoolInfo | PoolBaseAmount;
        amount: BN__default;
    }): BN__default;
    static sellExactOut({ poolInfo, amount }: {
        poolInfo: LaunchpadPoolInfo | PoolBaseAmount;
        amount: BN__default;
    }): BN__default;
    static getAmountOut({ amountIn, inputReserve, outputReserve, }: {
        amountIn: BN__default;
        inputReserve: BN__default;
        outputReserve: BN__default;
    }): BN__default;
    static getAmountIn({ amountOut, inputReserve, outputReserve, }: {
        amountOut: BN__default;
        inputReserve: BN__default;
        outputReserve: BN__default;
    }): BN__default;
}

export { LaunchPadConstantProductCurve };
