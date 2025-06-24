// src/common/logger.ts
import { get, set } from "lodash";
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
  let logger = get(moduleLoggers, moduleName);
  if (!logger) {
    const logLevel = get(moduleLevels, moduleName);
    logger = new Logger({ name: moduleName, logLevel });
    set(moduleLoggers, moduleName, logger);
  }
  return logger;
}
function setLoggerLevel(moduleName, level) {
  set(moduleLevels, moduleName, level);
  const logger = get(moduleLoggers, moduleName);
  if (logger)
    logger.level = level;
}
export {
  LogLevel,
  Logger,
  createLogger,
  setLoggerLevel
};
//# sourceMappingURL=logger.mjs.map