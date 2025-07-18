import BN__default from 'bn.js';
import { PoolBaseAmount, CurveBase } from './curveBase.js';
import { LaunchpadPoolInfo, LaunchpadConfigInfo } from '../type.js';
import Decimal from 'decimal.js';
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

declare class Curve {
    static getPoolCurvePointByPoolInfo({ curveType, pointCount, poolInfo, }: {
        curveType: number;
        poolInfo: LaunchpadPoolInfo;
        pointCount: number;
    }): {
        price: Decimal;
        totalSellSupply: number;
    }[];
    static getPoolCurvePointByInit({ curveType, pointCount, supply, totalFundRaising, totalSell, totalLockedAmount, migrateFee, decimalA, decimalB, }: {
        curveType: number;
        supply: BN__default;
        totalSell: BN__default;
        totalLockedAmount: BN__default;
        totalFundRaising: BN__default;
        migrateFee: BN__default;
        decimalA: number;
        decimalB: number;
        pointCount: number;
    }): {
        price: Decimal;
        totalSellSupply: number;
    }[];
    static getPoolInitPriceByPool({ poolInfo, decimalA, decimalB, curveType, }: {
        poolInfo: LaunchpadPoolInfo | PoolBaseAmount;
        decimalA: number;
        decimalB: number;
        curveType: number;
    }): Decimal;
    static getPoolInitPriceByInit({ a, b, decimalA, decimalB, curveType, }: {
        a: BN__default;
        b: BN__default;
        decimalA: number;
        decimalB: number;
        curveType: number;
    }): Decimal;
    static getPrice({ poolInfo, curveType, decimalA, decimalB, }: {
        poolInfo: LaunchpadPoolInfo | PoolBaseAmount;
        curveType: number;
        decimalA: number;
        decimalB: number;
    }): Decimal;
    static getEndPrice({ poolInfo, curveType, decimalA, decimalB, }: {
        poolInfo: LaunchpadPoolInfo;
        curveType: number;
        decimalA: number;
        decimalB: number;
    }): Decimal;
    static getPoolEndPriceReal({ poolInfo, curveType, decimalA, decimalB, }: {
        poolInfo: LaunchpadPoolInfo;
        curveType: number;
        decimalA: number;
        decimalB: number;
    }): Decimal;
    static checkParam({ supply, totalFundRaising, totalSell, totalLockedAmount, decimals, config, migrateType, }: {
        supply: BN__default;
        totalSell: BN__default;
        totalLockedAmount: BN__default;
        totalFundRaising: BN__default;
        decimals: number;
        config: LaunchpadConfigInfo;
        migrateType: "amm" | "cpmm";
    }): void;
    /**
     * @returns Please note that amountA/B is subject to change
     */
    static buyExactIn({ poolInfo, amountB, protocolFeeRate, platformFeeRate, curveType, shareFeeRate, }: {
        poolInfo: LaunchpadPoolInfo | (PoolBaseAmount & {
            totalSellA: BN__default;
            totalFundRaisingB: BN__default;
        });
        amountB: BN__default;
        protocolFeeRate: BN__default;
        platformFeeRate: BN__default;
        curveType: number;
        shareFeeRate: BN__default;
    }): {
        amountA: BN__default;
        amountB: BN__default;
        splitFee: {
            platformFee: BN__default;
            shareFee: BN__default;
            protocolFee: BN__default;
        };
    };
    /**
     * @returns Please note that amountA/B is subject to change
     */
    static buyExactOut({ poolInfo, amountA, protocolFeeRate, platformFeeRate, curveType, shareFeeRate, }: {
        poolInfo: LaunchpadPoolInfo | (PoolBaseAmount & {
            totalSellA: BN__default;
            totalFundRaisingB: BN__default;
        });
        amountA: BN__default;
        protocolFeeRate: BN__default;
        platformFeeRate: BN__default;
        curveType: number;
        shareFeeRate: BN__default;
    }): {
        amountA: BN__default;
        amountB: BN__default;
        splitFee: {
            platformFee: BN__default;
            shareFee: BN__default;
            protocolFee: BN__default;
        };
    };
    static sellExactIn({ poolInfo, amountA, protocolFeeRate, platformFeeRate, curveType, shareFeeRate, }: {
        poolInfo: LaunchpadPoolInfo | PoolBaseAmount;
        amountA: BN__default;
        protocolFeeRate: BN__default;
        platformFeeRate: BN__default;
        curveType: number;
        shareFeeRate: BN__default;
    }): {
        amountA: BN__default;
        amountB: BN__default;
        splitFee: {
            platformFee: BN__default;
            shareFee: BN__default;
            protocolFee: BN__default;
        };
    };
    static sellExactOut({ poolInfo, amountB, protocolFeeRate, platformFeeRate, curveType, shareFeeRate, }: {
        poolInfo: LaunchpadPoolInfo | PoolBaseAmount;
        amountB: BN__default;
        protocolFeeRate: BN__default;
        platformFeeRate: BN__default;
        curveType: number;
        shareFeeRate: BN__default;
    }): {
        amountA: BN__default;
        amountB: BN__default;
        splitFee: {
            platformFee: BN__default;
            shareFee: BN__default;
            protocolFee: BN__default;
        };
    };
    static splitFee({ totalFee, protocolFeeRate, platformFeeRate, shareFeeRate, }: {
        totalFee: BN__default;
        protocolFeeRate: BN__default;
        platformFeeRate: BN__default;
        shareFeeRate: BN__default;
    }): {
        platformFee: BN__default;
        shareFee: BN__default;
        protocolFee: BN__default;
    };
    static calculateFee({ amount, feeRate }: {
        amount: BN__default;
        feeRate: BN__default;
    }): BN__default;
    static calculatePreFee({ postFeeAmount, feeRate }: {
        postFeeAmount: BN__default;
        feeRate: BN__default;
    }): BN__default;
    static getCurve(curveType: number): typeof CurveBase;
}

export { Curve };
