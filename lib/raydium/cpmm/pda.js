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

// src/raydium/cpmm/pda.ts
var pda_exports = {};
__export(pda_exports, {
  LOCK_LIQUIDITY_SEED: () => LOCK_LIQUIDITY_SEED,
  getCpLockPda: () => getCpLockPda,
  getCpmmPdaAmmConfigId: () => getCpmmPdaAmmConfigId,
  getCpmmPdaPoolId: () => getCpmmPdaPoolId,
  getCreatePoolKeys: () => getCreatePoolKeys,
  getPdaLpMint: () => getPdaLpMint,
  getPdaObservationId: () => getPdaObservationId,
  getPdaPoolAuthority: () => getPdaPoolAuthority,
  getPdaVault: () => getPdaVault
});
module.exports = __toCommonJS(pda_exports);

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

// src/raydium/cpmm/pda.ts
var AUTH_SEED = Buffer.from("vault_and_lp_mint_auth_seed", "utf8");
var AMM_CONFIG_SEED = Buffer.from("amm_config", "utf8");
var POOL_SEED = Buffer.from("pool", "utf8");
var POOL_LP_MINT_SEED = Buffer.from("pool_lp_mint", "utf8");
var POOL_VAULT_SEED = Buffer.from("pool_vault", "utf8");
var OBSERVATION_SEED = Buffer.from("observation", "utf8");
function getPdaPoolAuthority(programId) {
  return findProgramAddress([AUTH_SEED], programId);
}
function getCpmmPdaAmmConfigId(programId, index) {
  return findProgramAddress([AMM_CONFIG_SEED, u16ToBytes(index)], programId);
}
function getCpmmPdaPoolId(programId, ammConfigId, mintA, mintB) {
  return findProgramAddress([POOL_SEED, ammConfigId.toBuffer(), mintA.toBuffer(), mintB.toBuffer()], programId);
}
function getPdaLpMint(programId, poolId) {
  return findProgramAddress([POOL_LP_MINT_SEED, poolId.toBuffer()], programId);
}
function getPdaVault(programId, poolId, mint) {
  return findProgramAddress([POOL_VAULT_SEED, poolId.toBuffer(), mint.toBuffer()], programId);
}
function getPdaObservationId(programId, poolId) {
  return findProgramAddress([OBSERVATION_SEED, poolId.toBuffer()], programId);
}
function u16ToBytes(num) {
  const arr = new ArrayBuffer(2);
  const view = new DataView(arr);
  view.setUint16(0, num, false);
  return new Uint8Array(arr);
}
function getCreatePoolKeys({
  poolId: propPoolId,
  programId,
  configId,
  mintA,
  mintB
}) {
  const authority = getPdaPoolAuthority(programId).publicKey;
  const poolId = propPoolId || getCpmmPdaPoolId(programId, configId, mintA, mintB).publicKey;
  const lpMint = getPdaLpMint(programId, poolId).publicKey;
  const vaultA = getPdaVault(programId, poolId, mintA).publicKey;
  const vaultB = getPdaVault(programId, poolId, mintB).publicKey;
  const observationId = getPdaObservationId(programId, poolId).publicKey;
  return {
    poolId,
    configId,
    authority,
    lpMint,
    vaultA,
    vaultB,
    observationId
  };
}
var LOCK_LIQUIDITY_SEED = Buffer.from("locked_liquidity", "utf8");
function getCpLockPda(programId, mint) {
  return findProgramAddress([LOCK_LIQUIDITY_SEED, mint.toBuffer()], programId);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LOCK_LIQUIDITY_SEED,
  getCpLockPda,
  getCpmmPdaAmmConfigId,
  getCpmmPdaPoolId,
  getCreatePoolKeys,
  getPdaLpMint,
  getPdaObservationId,
  getPdaPoolAuthority,
  getPdaVault
});
//# sourceMappingURL=pda.js.map