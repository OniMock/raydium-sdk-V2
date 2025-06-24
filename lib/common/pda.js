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

// src/common/pda.ts
var pda_exports = {};
__export(pda_exports, {
  getATAAddress: () => getATAAddress
});
module.exports = __toCommonJS(pda_exports);
var import_web32 = require("@solana/web3.js");
var import_spl_token2 = require("@solana/spl-token");

// src/common/txTool/txUtils.ts
var import_web3 = require("@solana/web3.js");

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

// src/common/txTool/txUtils.ts
var import_spl_token = require("@solana/spl-token");
var logger = createLogger("Raydium_txUtil");
function findProgramAddress(seeds, programId) {
  const [publicKey, nonce] = import_web3.PublicKey.findProgramAddressSync(seeds, programId);
  return { publicKey, nonce };
}

// src/common/pda.ts
function getATAAddress(owner, mint, programId) {
  return findProgramAddress([owner.toBuffer(), (programId ?? import_spl_token2.TOKEN_PROGRAM_ID).toBuffer(), mint.toBuffer()], new import_web32.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getATAAddress
});
//# sourceMappingURL=pda.js.map