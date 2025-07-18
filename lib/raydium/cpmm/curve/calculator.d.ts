import { PublicKey } from '@solana/web3.js';
import BN__default from 'bn.js';
import { i as ApiV3Token } from '../../../api-34c9026e.js';
import 'axios';
import '../../../solana/type.js';
import '@solana/spl-token';
import '../../../api/url.js';
import '../../../common/owner.js';
import '../../../common/txTool/lookupTable.js';
import '../../../common/txTool/txType.js';
import 'decimal.js';
import '../../../module/token.js';
import '../../../common/pubKey.js';
import '../../../common/logger.js';
import '../../../module/currency.js';
import '../../../marshmallow/index.js';
import '../../../marshmallow/buffer-layout.js';

declare enum RoundDirection {
    Floor = 0,
    Ceiling = 1
}
declare type SwapWithoutFeesResult = {
    destinationAmountSwapped: BN__default;
};
declare type TradingTokenResult = {
    tokenAmount0: BN__default;
    tokenAmount1: BN__default;
};
declare type SwapResult = {
    newSwapDestinationAmount: BN__default;
    sourceAmountSwapped: BN__default;
    destinationAmountSwapped: BN__default;
    tradeFee: BN__default;
};
declare class CurveCalculator {
    static validate_supply(tokenAmount0: BN__default, tokenAmount1: BN__default): void;
    static swap(sourceAmount: BN__default, swapSourceAmount: BN__default, swapDestinationAmount: BN__default, tradeFeeRate: BN__default): SwapResult;
    static swapBaseOut({ poolMintA, poolMintB, tradeFeeRate, baseReserve, quoteReserve, outputMint, outputAmount, }: {
        poolMintA: ApiV3Token;
        poolMintB: ApiV3Token;
        tradeFeeRate: BN__default;
        baseReserve: BN__default;
        quoteReserve: BN__default;
        outputMint: string | PublicKey;
        outputAmount: BN__default;
    }): {
        amountRealOut: BN__default;
        amountIn: BN__default;
        amountInWithoutFee: BN__default;
        tradeFee: BN__default;
        priceImpact: number;
    };
}

export { CurveCalculator, RoundDirection, SwapResult, SwapWithoutFeesResult, TradingTokenResult };
