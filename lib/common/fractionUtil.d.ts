import { ag as Numberish, ce as Fraction } from '../api-34c9026e.js';
import 'axios';
import '../solana/type.js';
import '@solana/web3.js';
import 'bn.js';
import '@solana/spl-token';
import '../api/url.js';
import './owner.js';
import './txTool/lookupTable.js';
import './txTool/txType.js';
import 'decimal.js';
import '../module/token.js';
import './pubKey.js';
import './logger.js';
import '../module/currency.js';
import '../marshmallow/index.js';
import '../marshmallow/buffer-layout.js';

declare function toFraction(value: Numberish): Fraction;
declare function toFractionWithDecimals(value: Numberish): {
    fr: Fraction;
    decimals?: number;
};
declare function lt(a: Numberish | undefined, b: Numberish | undefined): boolean;
declare function gt(a: Numberish | undefined, b: Numberish | undefined): boolean;
declare function lte(a: Numberish | undefined, b: Numberish | undefined): boolean;
declare function gte(a: Numberish | undefined, b: Numberish | undefined): boolean;
declare function eq(a: Numberish | undefined, b: Numberish | undefined): boolean;
declare function div(a: Numberish | undefined, b: Numberish | undefined): Fraction | undefined;
declare function sub(a: Numberish | undefined, b: Numberish | undefined): Fraction | undefined;
declare function isMeaningfulNumber(n: Numberish | undefined): n is Numberish;
declare function getMax(a: Numberish, b: Numberish): Numberish;
declare function mul(a: Numberish | undefined, b: Numberish | undefined): Fraction | undefined;
declare function add(a: Numberish | undefined, b: Numberish | undefined): Fraction | undefined;

export { add, toFraction as default, div, eq, getMax, gt, gte, isMeaningfulNumber, lt, lte, mul, sub, toFractionWithDecimals };
