var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/raydium/token/constant.ts
import { PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
var SOL_INFO = {
  chainId: 101,
  address: PublicKey.default.toBase58(),
  programId: TOKEN_PROGRAM_ID.toBase58(),
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
  programId: TOKEN_PROGRAM_ID.toBase58(),
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
import { PublicKey as PublicKey3 } from "@solana/web3.js";

// src/common/pubKey.ts
import { PublicKey as PublicKey2, SystemProgram, SYSVAR_RENT_PUBKEY } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID as TOKEN_PROGRAM_ID2 } from "@solana/spl-token";
function accountMeta({ pubkey, isSigner = false, isWritable = true }) {
  return {
    pubkey,
    isWritable,
    isSigner
  };
}
var commonSystemAccountMeta = [
  accountMeta({ pubkey: TOKEN_PROGRAM_ID2, isWritable: false }),
  accountMeta({ pubkey: SystemProgram.programId, isWritable: false }),
  accountMeta({ pubkey: SYSVAR_RENT_PUBKEY, isWritable: false })
];
function validateAndParsePublicKey({
  publicKey: orgPubKey,
  transformSol
}) {
  const publicKey = tryParsePublicKey(orgPubKey.toString());
  if (publicKey instanceof PublicKey2) {
    if (transformSol && publicKey.equals(SOLMint))
      return WSOLMint;
    return publicKey;
  }
  if (transformSol && publicKey.toString() === SOLMint.toBase58())
    return WSOLMint;
  if (typeof publicKey === "string") {
    if (publicKey === PublicKey2.default.toBase58())
      return PublicKey2.default;
    try {
      const key = new PublicKey2(publicKey);
      return key;
    } catch {
      throw new Error("invalid public key");
    }
  }
  throw new Error("invalid public key");
}
function tryParsePublicKey(v) {
  try {
    return new PublicKey2(v);
  } catch (e) {
    return v;
  }
}
var MEMO_PROGRAM_ID = new PublicKey2("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
var MEMO_PROGRAM_ID2 = new PublicKey2("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
var RENT_PROGRAM_ID = new PublicKey2("SysvarRent111111111111111111111111111111111");
var CLOCK_PROGRAM_ID = new PublicKey2("SysvarC1ock11111111111111111111111111111111");
var METADATA_PROGRAM_ID = new PublicKey2("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
var INSTRUCTION_PROGRAM_ID = new PublicKey2("Sysvar1nstructions1111111111111111111111111");
var SYSTEM_PROGRAM_ID = SystemProgram.programId;
var RAYMint = new PublicKey2("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R");
var PAIMint = new PublicKey2("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS");
var SRMMint = new PublicKey2("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt");
var USDCMint = new PublicKey2("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");
var USDTMint = new PublicKey2("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB");
var mSOLMint = new PublicKey2("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So");
var stSOLMint = new PublicKey2("7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj");
var USDHMint = new PublicKey2("USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX");
var NRVMint = new PublicKey2("NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa");
var ANAMint = new PublicKey2("ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo");
var ETHMint = new PublicKey2("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs");
var WSOLMint = new PublicKey2("So11111111111111111111111111111111111111112");
var SOLMint = PublicKey2.default;

// src/module/token.ts
var _Token = class {
  symbol;
  name;
  decimals;
  isToken2022;
  mint;
  constructor({ mint, decimals, symbol, name, skipMint = false, isToken2022 = false }) {
    if (mint === SOLMint.toBase58() || mint instanceof PublicKey3 && SOLMint.equals(mint)) {
      this.decimals = TOKEN_WSOL.decimals;
      this.symbol = TOKEN_WSOL.symbol;
      this.name = TOKEN_WSOL.name;
      this.mint = new PublicKey3(TOKEN_WSOL.address);
      this.isToken2022 = false;
      return;
    }
    this.decimals = decimals;
    this.symbol = symbol || mint.toString().substring(0, 6);
    this.name = name || mint.toString().substring(0, 6);
    this.mint = skipMint ? PublicKey3.default : validateAndParsePublicKey({ publicKey: mint });
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

// src/module/currency.ts
var _Currency = class {
  symbol;
  name;
  decimals;
  constructor({ decimals, symbol = "UNKNOWN", name = "UNKNOWN" }) {
    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
  }
  equals(other) {
    return this === other;
  }
};
var Currency = _Currency;
__publicField(Currency, "SOL", new _Currency(SOL_INFO));
function currencyEquals(currencyA, currencyB) {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB);
  } else if (currencyA instanceof Token || currencyB instanceof Token) {
    return false;
  } else {
    return currencyA === currencyB;
  }
}
export {
  Currency,
  currencyEquals
};
//# sourceMappingURL=currency.mjs.map