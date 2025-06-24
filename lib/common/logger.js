var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/common/logger.ts
var logger_exports = {};
__export(logger_exports, {
  LogLevel: () => LogLevel,
  Logger: () => Logger,
  createLogger: () => createLogger,
  setLoggerLevel: () => setLoggerLevel
});
module.exports = __toCommonJS(logger_exports);
var import_lodash = require("lodash");
var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
  LogLevel2[LogLevel2["Error"] = 0] = "Error";
  LogLevel2[LogLevel2["Warning"] = 1] = "Warning";
  LogLevel2[LogLevel2["Info"] = 2] = "Info";
  LogLevel2[LogLevel2["Debug"] = 3] = "Debug";
  return LogLevel2;
})(LogLevel || {});
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
function setLoggerLevel(moduleName, level) {
  (0, import_lodash.set)(moduleLevels, moduleName, level);
  const logger = (0, import_lodash.get)(moduleLoggers, moduleName);
  if (logger)
    logger.level = level;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LogLevel,
  Logger,
  createLogger,
  setLoggerLevel
});
//# sourceMappingURL=logger.js.map