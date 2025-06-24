// src/module/percent.ts
import BN3 from "bn.js";

// src/module/fraction.ts
import _Big from "big.js";
import BN2 from "bn.js";
import _Decimal from "decimal.js-light";

// src/common/logger.ts
import { get, set } from "lodash";
var Logger = class {
  logLevel;
  name;
  constructor(params) {
    this.logLevel = params.logLevel !== void 0 ? params.logLevel : 0 /* Error */;
    this.name = params.name;
  }
  set level(logLevel) {
    this.logLevel = logLevel;
  }
  get time() {
    return Date.now().toString();
  }
  get moduleName() {
    return this.name;
  }
  isLogLevel(level) {
    return level <= this.logLevel;
  }
  error(...props) {
    if (!this.isLogLevel(0 /* Error */))
      return this;
    console.error(this.time, this.name, "sdk logger error", ...props);
    return this;
  }
  logWithError(...props) {
    const msg = props.map((arg) => typeof arg === "object" ? JSON.stringify(arg) : arg).join(", ");
    throw new Error(msg);
  }
  warning(...props) {
    if (!this.isLogLevel(1 /* Warning */))
      return this;
    console.warn(this.time, this.name, "sdk logger warning", ...props);
    return this;
  }
  info(...props) {
    if (!this.isLogLevel(2 /* Info */))
      return this;
    console.info(this.time, this.name, "sdk logger info", ...props);
    return this;
  }
  debug(...props) {
    if (!this.isLogLevel(3 /* Debug */))
      return this;
    console.debug(this.time, this.name, "sdk logger debug", ...props);
    return this;
  }
};
var moduleLoggers = {};
var moduleLevels = {};
function createLogger(moduleName) {
  let logger2 = get(moduleLoggers, moduleName);
  if (!logger2) {
    const logLevel = get(moduleLevels, moduleName);
    logger2 = new Logger({ name: moduleName, logLevel });
    set(moduleLoggers, moduleName, logger2);
  }
  return logger2;
}

// src/common/constant.ts
import BN from "bn.js";
var MAX_SAFE = 9007199254740991;
function parseBigNumberish(value) {
  const logger2 = createLogger("Raydium_parseBigNumberish");
  if (value instanceof BN) {
    return value;
  }
  if (typeof value === "string") {
    if (value.match(/^-?[0-9]+$/)) {
      return new BN(value);
    }
    logger2.logWithError(`invalid BigNumberish string: ${value}`);
  }
  if (typeof value === "number") {
    if (value % 1) {
      logger2.logWithError(`BigNumberish number underflow: ${value}`);
    }
    if (value >= MAX_SAFE || value <= -MAX_SAFE) {
      logger2.logWithError(`BigNumberish number overflow: ${value}`);
    }
    return new BN(String(value));
  }
  if (typeof value === "bigint") {
    return new BN(value.toString());
  }
  logger2.error(`invalid BigNumberish value: ${value}`);
  return new BN(0);
}

// src/module/formatter.ts
import _toFarmat from "toformat";
var toFormat = _toFarmat;
var formatter_default = toFormat;

// src/module/fraction.ts
var logger = createLogger("module/fraction");
var Big = formatter_default(_Big);
var Decimal = formatter_default(_Decimal);
var toSignificantRounding = {
  [0 /* ROUND_DOWN */]: Decimal.ROUND_DOWN,
  [1 /* ROUND_HALF_UP */]: Decimal.ROUND_HALF_UP,
  [2 /* ROUND_UP */]: Decimal.ROUND_UP
};
var toFixedRounding = {
  [0 /* ROUND_DOWN */]: _Big.roundDown,
  [1 /* ROUND_HALF_UP */]: _Big.roundHalfUp,
  [2 /* ROUND_UP */]: _Big.roundUp
};
var Fraction = class {
  numerator;
  denominator;
  constructor(numerator, denominator = new BN2(1)) {
    this.numerator = parseBigNumberish(numerator);
    this.denominator = parseBigNumberish(denominator);
  }
  get quotient() {
    return this.numerator.div(this.denominator);
  }
  invert() {
    return new Fraction(this.denominator, this.numerator);
  }
  add(other) {
    const otherParsed = other instanceof Fraction ? other : new Fraction(parseBigNumberish(other));
    if (this.denominator.eq(otherParsed.denominator)) {
      return new Fraction(this.numerator.add(otherParsed.numerator), this.denominator);
    }
    return new Fraction(this.numerator.mul(otherParsed.denominator).add(otherParsed.numerator.mul(this.denominator)), this.denominator.mul(otherParsed.denominator));
  }
  sub(other) {
    const otherParsed = other instanceof Fraction ? other : new Fraction(parseBigNumberish(other));
    if (this.denominator.eq(otherParsed.denominator)) {
      return new Fraction(this.numerator.sub(otherParsed.numerator), this.denominator);
    }
    return new Fraction(this.numerator.mul(otherParsed.denominator).sub(otherParsed.numerator.mul(this.denominator)), this.denominator.mul(otherParsed.denominator));
  }
  mul(other) {
    const otherParsed = other instanceof Fraction ? other : new Fraction(parseBigNumberish(other));
    return new Fraction(this.numerator.mul(otherParsed.numerator), this.denominator.mul(otherParsed.denominator));
  }
  div(other) {
    const otherParsed = other instanceof Fraction ? other : new Fraction(parseBigNumberish(other));
    return new Fraction(this.numerator.mul(otherParsed.denominator), this.denominator.mul(otherParsed.numerator));
  }
  toSignificant(significantDigits, format = { groupSeparator: "" }, rounding = 1 /* ROUND_HALF_UP */) {
    if (!Number.isInteger(significantDigits))
      logger.logWithError(`${significantDigits} is not an integer.`);
    if (significantDigits <= 0)
      logger.logWithError(`${significantDigits} is not positive.`);
    Decimal.set({ precision: significantDigits + 1, rounding: toSignificantRounding[rounding] });
    const quotient = new Decimal(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
  }
  toFixed(decimalPlaces, format = { groupSeparator: "" }, rounding = 1 /* ROUND_HALF_UP */) {
    if (!Number.isInteger(decimalPlaces))
      logger.logWithError(`${decimalPlaces} is not an integer.`);
    if (decimalPlaces < 0)
      logger.logWithError(`${decimalPlaces} is negative.`);
    Big.DP = decimalPlaces;
    Big.RM = toFixedRounding[rounding] || 1;
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format);
  }
  isZero() {
    return this.numerator.isZero();
  }
};

// src/module/percent.ts
var _100_PERCENT = new Fraction(new BN3(100));
var Percent = class extends Fraction {
  toSignificant(significantDigits = 5, format, rounding) {
    return this.mul(_100_PERCENT).toSignificant(significantDigits, format, rounding);
  }
  toFixed(decimalPlaces = 2, format, rounding) {
    return this.mul(_100_PERCENT).toFixed(decimalPlaces, format, rounding);
  }
};
export {
  Percent,
  _100_PERCENT
};
//# sourceMappingURL=percent.mjs.map