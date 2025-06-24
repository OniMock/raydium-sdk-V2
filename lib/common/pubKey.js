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

// src/common/pubKey.ts
var pubKey_exports = {};
__export(pubKey_exports, {
  ANAMint: () => ANAMint,
  CLOCK_PROGRAM_ID: () => CLOCK_PROGRAM_ID,
  ETHMint: () => ETHMint,
  INSTRUCTION_PROGRAM_ID: () => INSTRUCTION_PROGRAM_ID,
  MEMO_PROGRAM_ID: () => MEMO_PROGRAM_ID,
  MEMO_PROGRAM_ID2: () => MEMO_PROGRAM_ID2,
  METADATA_PROGRAM_ID: () => METADATA_PROGRAM_ID,
  NRVMint: () => NRVMint,
  PAIMint: () => PAIMint,
  RAYMint: () => RAYMint,
  RENT_PROGRAM_ID: () => RENT_PROGRAM_ID,
  SOLMint: () => SOLMint,
  SRMMint: () => SRMMint,
  SYSTEM_PROGRAM_ID: () => SYSTEM_PROGRAM_ID,
  USDCMint: () => USDCMint,
  USDHMint: () => USDHMint,
  USDTMint: () => USDTMint,
  WSOLMint: () => WSOLMint,
  accountMeta: () => accountMeta,
  commonSystemAccountMeta: () => commonSystemAccountMeta,
  mSOLMint: () => mSOLMint,
  solToWSol: () => solToWSol,
  stSOLMint: () => stSOLMint,
  tryParsePublicKey: () => tryParsePublicKey,
  validateAndParsePublicKey: () => validateAndParsePublicKey
});
module.exports = __toCommonJS(pubKey_exports);
var import_web3 = require("@solana/web3.js");
var import_spl_token = require("@solana/spl-token");
function accountMeta({ pubkey, isSigner = false, isWritable = true }) {
  return {
    pubkey,
    isWritable,
    isSigner
  };
}
var commonSystemAccountMeta = [
  accountMeta({ pubkey: import_spl_token.TOKEN_PROGRAM_ID, isWritable: false }),
  accountMeta({ pubkey: import_web3.SystemProgram.programId, isWritable: false }),
  accountMeta({ pubkey: import_web3.SYSVAR_RENT_PUBKEY, isWritable: false })
];
function validateAndParsePublicKey({
  publicKey: orgPubKey,
  transformSol
}) {
  const publicKey = tryParsePublicKey(orgPubKey.toString());
  if (publicKey instanceof import_web3.PublicKey) {
    if (transformSol && publicKey.equals(SOLMint))
      return WSOLMint;
    return publicKey;
  }
  if (transformSol && publicKey.toString() === SOLMint.toBase58())
    return WSOLMint;
  if (typeof publicKey === "string") {
    if (publicKey === import_web3.PublicKey.default.toBase58())
      return import_web3.PublicKey.default;
    try {
      const key = new import_web3.PublicKey(publicKey);
      return key;
    } catch {
      throw new Error("invalid public key");
    }
  }
  throw new Error("invalid public key");
}
function tryParsePublicKey(v) {
  try {
    return new import_web3.PublicKey(v);
  } catch (e) {
    return v;
  }
}
var MEMO_PROGRAM_ID = new import_web3.PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
var MEMO_PROGRAM_ID2 = new import_web3.PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
var RENT_PROGRAM_ID = new import_web3.PublicKey("SysvarRent111111111111111111111111111111111");
var CLOCK_PROGRAM_ID = new import_web3.PublicKey("SysvarC1ock11111111111111111111111111111111");
var METADATA_PROGRAM_ID = new import_web3.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
var INSTRUCTION_PROGRAM_ID = new import_web3.PublicKey("Sysvar1nstructions1111111111111111111111111");
var SYSTEM_PROGRAM_ID = import_web3.SystemProgram.programId;
var RAYMint = new import_web3.PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R");
var PAIMint = new import_web3.PublicKey("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS");
var SRMMint = new import_web3.PublicKey("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt");
var USDCMint = new import_web3.PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");
var USDTMint = new import_web3.PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB");
var mSOLMint = new import_web3.PublicKey("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So");
var stSOLMint = new import_web3.PublicKey("7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj");
var USDHMint = new import_web3.PublicKey("USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX");
var NRVMint = new import_web3.PublicKey("NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa");
var ANAMint = new import_web3.PublicKey("ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo");
var ETHMint = new import_web3.PublicKey("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs");
var WSOLMint = new import_web3.PublicKey("So11111111111111111111111111111111111111112");
var SOLMint = import_web3.PublicKey.default;
function solToWSol(mint) {
  return validateAndParsePublicKey({ publicKey: mint, transformSol: true });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ANAMint,
  CLOCK_PROGRAM_ID,
  ETHMint,
  INSTRUCTION_PROGRAM_ID,
  MEMO_PROGRAM_ID,
  MEMO_PROGRAM_ID2,
  METADATA_PROGRAM_ID,
  NRVMint,
  PAIMint,
  RAYMint,
  RENT_PROGRAM_ID,
  SOLMint,
  SRMMint,
  SYSTEM_PROGRAM_ID,
  USDCMint,
  USDHMint,
  USDTMint,
  WSOLMint,
  accountMeta,
  commonSystemAccountMeta,
  mSOLMint,
  solToWSol,
  stSOLMint,
  tryParsePublicKey,
  validateAndParsePublicKey
});
//# sourceMappingURL=pubKey.js.map