// src/common/constant.ts
import BN from "bn.js";

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
  let logger = get(moduleLoggers, moduleName);
  if (!logger) {
    const logLevel = get(moduleLevels, moduleName);
    logger = new Logger({ name: moduleName, logLevel });
    set(moduleLoggers, moduleName, logger);
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
  if (value instanceof BN) {
    return value;
  }
  if (typeof value === "string") {
    if (value.match(/^-?[0-9]+$/)) {
      return new BN(value);
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
    return new BN(String(value));
  }
  if (typeof value === "bigint") {
    return new BN(value.toString());
  }
  logger.error(`invalid BigNumberish value: ${value}`);
  return new BN(0);
}
export {
  Rounding,
  parseBigNumberish
};
//# sourceMappingURL=constant.mjs.map