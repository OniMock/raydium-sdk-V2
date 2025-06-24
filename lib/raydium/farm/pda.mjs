// src/common/txTool/txUtils.ts
import {
  ComputeBudgetProgram,
  Keypair,
  PublicKey,
  Transaction,
  TransactionMessage,
  VersionedTransaction
} from "@solana/web3.js";

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

// src/common/txTool/txUtils.ts
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
var logger = createLogger("Raydium_txUtil");
function findProgramAddress(seeds, programId) {
  const [publicKey, nonce] = PublicKey.findProgramAddressSync(seeds, programId);
  return { publicKey, nonce };
}

// src/raydium/farm/pda.ts
function getRegistrarAddress(programId, realm, communityTokenMint) {
  return findProgramAddress([realm.toBuffer(), Buffer.from("registrar", "utf8"), communityTokenMint.toBuffer()], programId);
}
function getVotingTokenMint(programId, poolId) {
  return findProgramAddress([poolId.toBuffer(), Buffer.from("voting_mint_seed", "utf8")], programId);
}
function getVotingMintAuthority(programId, poolId) {
  return findProgramAddress([poolId.toBuffer()], programId);
}
function getVoterAddress(programId, registrar, authority) {
  return findProgramAddress([registrar.toBuffer(), Buffer.from("voter", "utf8"), authority.toBuffer()], programId);
}
function getVoterWeightRecordAddress(programId, registrar, authority) {
  return findProgramAddress([registrar.toBuffer(), Buffer.from("voter-weight-record", "utf8"), authority.toBuffer()], programId);
}
function getTokenOwnerRecordAddress(programId, realm, governingTokenMint, governingTokenOwner) {
  return findProgramAddress([
    Buffer.from("governance", "utf8"),
    realm.toBuffer(),
    governingTokenMint.toBuffer(),
    governingTokenOwner.toBuffer()
  ], programId);
}
export {
  getRegistrarAddress,
  getTokenOwnerRecordAddress,
  getVoterAddress,
  getVoterWeightRecordAddress,
  getVotingMintAuthority,
  getVotingTokenMint
};
//# sourceMappingURL=pda.mjs.map