// src/raydium/liquidity/serum.ts
import { PublicKey } from "@solana/web3.js";

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

// src/raydium/liquidity/constant.ts
import BN from "bn.js";
var LIQUIDITY_FEES_NUMERATOR = new BN(25);
var LIQUIDITY_FEES_DENOMINATOR = new BN(1e4);
var LIQUIDITY_VERSION_TO_SERUM_VERSION = {
  4: 3,
  5: 3
};

// src/raydium/liquidity/serum.ts
var logger = createLogger("Raydium_liquidity_serum");
function getSerumVersion(version) {
  const serumVersion = LIQUIDITY_VERSION_TO_SERUM_VERSION[version];
  if (!serumVersion)
    logger.logWithError("invalid version", "version", version);
  return serumVersion;
}
function getSerumAssociatedAuthority({ programId, marketId }) {
  const seeds = [marketId.toBuffer()];
  let nonce = 0;
  let publicKey;
  while (nonce < 100) {
    try {
      const seedsWithNonce = seeds.concat(Buffer.from([nonce]), Buffer.alloc(7));
      publicKey = PublicKey.createProgramAddressSync(seedsWithNonce, programId);
    } catch (err) {
      if (err instanceof TypeError) {
        throw err;
      }
      nonce++;
      continue;
    }
    return { publicKey, nonce };
  }
  logger.logWithError("unable to find a viable program address nonce", "params", {
    programId,
    marketId
  });
  throw new Error("unable to find a viable program address nonce");
}
export {
  getSerumAssociatedAuthority,
  getSerumVersion
};
//# sourceMappingURL=serum.mjs.map