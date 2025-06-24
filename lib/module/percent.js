var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/module/percent.ts
var percent_exports = {};
__export(percent_exports, {
  Percent: () => Percent,
  _100_PERCENT: () => _100_PERCENT
});
module.exports = __toCommonJS(percent_exports);
var import_bn3 = __toESM(require("bn.js"));

// src/module/fraction.ts
var import_big = __toESM(require("big.js"));
var import_bn2 = __toESM(require("bn.js"));
var import_decimal = __toESM(require("decimal.js-light"));

// src/common/logger.ts
var import_lodash = require("lodash");
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
  let logger2 = (0, import_lodash.get)(moduleLoggers, moduleName);
  if (!logger2) {
    const logLevel = (0, import_lodash.get)(moduleLevels, moduleName);
    logger2 = new Logger({ name: moduleName, logLevel });
    (0, import_lodash.set)(moduleLoggers, moduleName, logger2);
  }
  return logger2;
}

// src/common/constant.ts
var import_bn = __toESM(require("bn.js"));
var MAX_SAFE = 9007199254740991;
function parseBigNumberish(value) {
  const logger2 = createLogger("Raydium_parseBigNumberish");
  if (value instanceof import_bn.default) {
    return value;
  }
  if (typeof value === "string") {
    if (value.match(/^-?[0-9]+$/)) {
      return new import_bn.default(value);
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
    return new import_bn.default(String(value));
  }
  if (typeof value === "bigint") {
    return new import_bn.default(value.toString());
  }
  logger2.error(`invalid BigNumberish value: ${value}`);
  return new import_bn.default(0);
}

// src/module/formatter.ts
var import_toformat = __toESM(require("toformat"));
var toFormat = import_toformat.default;
var formatter_default = toFormat;

// src/module/fraction.ts
var logger = createLogger("module/fraction");
var Big = formatter_default(import_big.default);
var Decimal = formatter_default(import_decimal.default);
var toSignificantRounding = {
  [0 /* ROUND_DOWN */]: Decimal.ROUND_DOWN,
  [1 /* ROUND_HALF_UP */]: Decimal.ROUND_HALF_UP,
  [2 /* ROUND_UP */]: Decimal.ROUND_UP
};
var toFixedRounding = {
  [0 /* ROUND_DOWN */]: import_big.default.roundDown,
  [1 /* ROUND_HALF_UP */]: import_big.default.roundHalfUp,
  [2 /* ROUND_UP */]: import_big.default.roundUp
};
var Fraction = class {
  numerator;
  denominator;
  constructor(numerator, denominator = new import_bn2.default(1)) {
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
var _100_PERCENT = new Fraction(new import_bn3.default(100));
var Percent = class extends Fraction {
  toSignificant(significantDigits = 5, format, rounding) {
    return this.mul(_100_PERCENT).toSignificant(significantDigits, format, rounding);
  }
  toFixed(decimalPlaces = 2, format, rounding) {
    return this.mul(_100_PERCENT).toFixed(decimalPlaces, format, rounding);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Percent,
  _100_PERCENT
});
//# sourceMappingURL=percent.js.map