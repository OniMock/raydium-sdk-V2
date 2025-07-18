import BN__default from 'bn.js';
import { SwapWithoutFeesResult, RoundDirection, TradingTokenResult } from './calculator.js';
import '@solana/web3.js';
import '../../../api-34c9026e.js';
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

declare class ConstantProductCurve {
    static swapWithoutFees(sourceAmount: BN__default, swapSourceAmount: BN__default, swapDestinationAmount: BN__default): SwapWithoutFeesResult;
    static lpTokensToTradingTokens(lpTokenAmount: BN__default, lpTokenSupply: BN__default, swapTokenAmount0: BN__default, swapTokenAmount1: BN__default, roundDirection: RoundDirection): TradingTokenResult;
}

export { ConstantProductCurve };
