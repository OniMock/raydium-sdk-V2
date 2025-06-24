var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/module/token.ts
var token_exports = {};
__export(token_exports, {
  Token: () => Token
});
module.exports = __toCommonJS(token_exports);
var import_web33 = require("@solana/web3.js");

// src/common/pubKey.ts
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

// src/raydium/token/constant.ts
var import_web32 = require("@solana/web3.js");
var import_spl_token2 = require("@solana/spl-token");
var SOL_INFO = {
  chainId: 101,
  address: import_web32.PublicKey.default.toBase58(),
  programId: import_spl_token2.TOKEN_PROGRAM_ID.toBase58(),
  decimals: 9,
  symbol: "SOL",
  name: "solana",
  logoURI: `https://img-v1.raydium.io/icon/So11111111111111111111111111111111111111112.png`,
  tags: [],
  priority: 2,
  type: "raydium",
  extensions: {
    coingeckoId: "solana"
  }
};
var TOKEN_WSOL = {
  chainId: 101,
  address: "So11111111111111111111111111111111111111112",
  programId: import_spl_token2.TOKEN_PROGRAM_ID.toBase58(),
  decimals: 9,
  symbol: "WSOL",
  name: "Wrapped SOL",
  logoURI: `https://img-v1.raydium.io/icon/So11111111111111111111111111111111111111112.png`,
  tags: [],
  priority: 2,
  type: "raydium",
  extensions: {
    coingeckoId: "solana"
  }
};

// src/module/token.ts
var _Token = class {
  symbol;
  name;
  decimals;
  isToken2022;
  mint;
  constructor({ mint, decimals, symbol, name, skipMint = false, isToken2022 = false }) {
    if (mint === SOLMint.toBase58() || mint instanceof import_web33.PublicKey && SOLMint.equals(mint)) {
      this.decimals = TOKEN_WSOL.decimals;
      this.symbol = TOKEN_WSOL.symbol;
      this.name = TOKEN_WSOL.name;
      this.mint = new import_web33.PublicKey(TOKEN_WSOL.address);
      this.isToken2022 = false;
      return;
    }
    this.decimals = decimals;
    this.symbol = symbol || mint.toString().substring(0, 6);
    this.name = name || mint.toString().substring(0, 6);
    this.mint = skipMint ? import_web33.PublicKey.default : validateAndParsePublicKey({ publicKey: mint });
    this.isToken2022 = isToken2022;
  }
  equals(other) {
    if (this === other) {
      return true;
    }
    return this.mint.equals(other.mint);
  }
};
var Token = _Token;
__publicField(Token, "WSOL", new _Token({
  ...TOKEN_WSOL,
  mint: TOKEN_WSOL.address
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Token
});
//# sourceMappingURL=token.js.map