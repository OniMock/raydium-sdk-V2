// src/common/pubKey.ts
import { PublicKey, SystemProgram, SYSVAR_RENT_PUBKEY } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
function accountMeta({ pubkey, isSigner = false, isWritable = true }) {
  return {
    pubkey,
    isWritable,
    isSigner
  };
}
var commonSystemAccountMeta = [
  accountMeta({ pubkey: TOKEN_PROGRAM_ID, isWritable: false }),
  accountMeta({ pubkey: SystemProgram.programId, isWritable: false }),
  accountMeta({ pubkey: SYSVAR_RENT_PUBKEY, isWritable: false })
];
function validateAndParsePublicKey({
  publicKey: orgPubKey,
  transformSol
}) {
  const publicKey = tryParsePublicKey(orgPubKey.toString());
  if (publicKey instanceof PublicKey) {
    if (transformSol && publicKey.equals(SOLMint))
      return WSOLMint;
    return publicKey;
  }
  if (transformSol && publicKey.toString() === SOLMint.toBase58())
    return WSOLMint;
  if (typeof publicKey === "string") {
    if (publicKey === PublicKey.default.toBase58())
      return PublicKey.default;
    try {
      const key = new PublicKey(publicKey);
      return key;
    } catch {
      throw new Error("invalid public key");
    }
  }
  throw new Error("invalid public key");
}
function tryParsePublicKey(v) {
  try {
    return new PublicKey(v);
  } catch (e) {
    return v;
  }
}
var MEMO_PROGRAM_ID = new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
var MEMO_PROGRAM_ID2 = new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
var RENT_PROGRAM_ID = new PublicKey("SysvarRent111111111111111111111111111111111");
var CLOCK_PROGRAM_ID = new PublicKey("SysvarC1ock11111111111111111111111111111111");
var METADATA_PROGRAM_ID = new PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
var INSTRUCTION_PROGRAM_ID = new PublicKey("Sysvar1nstructions1111111111111111111111111");
var SYSTEM_PROGRAM_ID = SystemProgram.programId;
var RAYMint = new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R");
var PAIMint = new PublicKey("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS");
var SRMMint = new PublicKey("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt");
var USDCMint = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");
var USDTMint = new PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB");
var mSOLMint = new PublicKey("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So");
var stSOLMint = new PublicKey("7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj");
var USDHMint = new PublicKey("USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX");
var NRVMint = new PublicKey("NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa");
var ANAMint = new PublicKey("ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo");
var ETHMint = new PublicKey("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs");
var WSOLMint = new PublicKey("So11111111111111111111111111111111111111112");
var SOLMint = PublicKey.default;
function solToWSol(mint) {
  return validateAndParsePublicKey({ publicKey: mint, transformSol: true });
}
export {
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
};
//# sourceMappingURL=pubKey.mjs.map