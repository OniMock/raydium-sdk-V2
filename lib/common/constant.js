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

// src/common/constant.ts
var constant_exports = {};
__export(constant_exports, {
  Rounding: () => Rounding,
  parseBigNumberish: () => parseBigNumberish
});
module.exports = __toCommonJS(constant_exports);
var import_bn = __toESM(require("bn.js"));

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
  let logger = (0, import_lodash.get)(moduleLoggers, moduleName);
  if (!logger) {
    const logLevel = (0, import_lodash.get)(moduleLevels, moduleName);
    logger = new Logger({ name: moduleName, logLevel });
    (0, import_lodash.set)(moduleLoggers, moduleName, logger);
  }
  return logger;
}

// src/common/constant.ts
var Rounding = /* @__PURE__ */ ((Rounding2) => {
  Rounding2[Rounding2["ROUND_DOWN"] = 0] = "ROUND_DOWN";
  Rounding2[Rounding2["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
  Rounding2[Rounding2["ROUND_UP"] = 2] = "ROUND_UP";
  return Rounding2;
})(Rounding || {});
var MAX_SAFE = 9007199254740991;
function parseBigNumberish(value) {
  const logger = createLogger("Raydium_parseBigNumberish");
  if (value instanceof import_bn.default) {
    return value;
  }
  if (typeof value === "string") {
    if (value.match(/^-?[0-9]+$/)) {
      return new import_bn.default(value);
    }
    logger.logWithError(`invalid BigNumberish string: ${value}`);
  }
  if (typeof value === "number") {
    if (value % 1) {
      logger.logWithError(`BigNumberish number underflow: ${value}`);
    }
    if (value >= MAX_SAFE || value <= -MAX_SAFE) {
      logger.logWithError(`BigNumberish number overflow: ${value}`);
    }
    return new import_bn.default(String(value));
  }
  if (typeof value === "bigint") {
    return new import_bn.default(value.toString());
  }
  logger.error(`invalid BigNumberish value: ${value}`);
  return new import_bn.default(0);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Rounding,
  parseBigNumberish
});
//# sourceMappingURL=constant.js.map