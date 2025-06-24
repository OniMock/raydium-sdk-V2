// src/raydium/ido/instruction.ts
import { SYSVAR_CLOCK_PUBKEY, TransactionInstruction } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID as TOKEN_PROGRAM_ID2 } from "@solana/spl-token";

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

// src/marshmallow/index.ts
import { PublicKey as PublicKey2 } from "@solana/web3.js";
import BN, { isBN } from "bn.js";

// src/marshmallow/buffer-layout.ts
import {
  bits as _bits,
  BitStructure as _BitStructure,
  blob as _blob,
  Blob as _Blob,
  cstr as _cstr,
  f32 as _f32,
  f32be as _f32be,
  f64 as _f64,
  f64be as _f64be,
  greedy as _greedy,
  Layout as _Layout,
  ns64 as _ns64,
  ns64be as _ns64be,
  nu64 as _nu64,
  nu64be as _nu64be,
  offset as _offset,
  s16 as _s16,
  s16be as _s16be,
  s24 as _s24,
  s24be as _s24be,
  s32 as _s32,
  s32be as _s32be,
  s40 as _s40,
  s40be as _s40be,
  s48 as _s48,
  s48be as _s48be,
  s8 as _s8,
  seq as _seq,
  struct as _struct,
  Structure as _Structure,
  u16 as _u16,
  u16be as _u16be,
  u24 as _u24,
  u24be as _u24be,
  u32 as _u32,
  u32be as _u32be,
  u40 as _u40,
  u40be as _u40be,
  u48 as _u48,
  u48be as _u48be,
  u8 as _u8,
  UInt as _UInt,
  union as _union,
  Union as _Union,
  unionLayoutDiscriminator as _unionLayoutDiscriminator,
  utf8 as _utf8
} from "@solana/buffer-layout";
var Structure = _Structure;
var UInt = _UInt;
var nu64 = _nu64;

// src/marshmallow/index.ts
function u82(property) {
  return new UInt(1, property);
}
var Structure2 = class extends Structure {
  decode(b, offset2) {
    return super.decode(b, offset2);
  }
};
function struct(fields, property, decodePrefixes) {
  return new Structure2(fields, property, decodePrefixes);
}

// src/raydium/ido/layout.ts
var purchaseLayout = struct([u82("instruction"), nu64("amount")]);
var claimLayout = struct([u82("instruction")]);

// src/raydium/ido/instruction.ts
function makePurchaseInstruction({
  programId,
  amount,
  instructionKeys
}) {
  const keys = [
    { pubkey: SYSTEM_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: TOKEN_PROGRAM_ID2, isSigner: false, isWritable: false },
    { pubkey: RENT_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: CLOCK_PROGRAM_ID, isSigner: false, isWritable: false },
    ...Object.entries(instructionKeys).map(([name, pubkey]) => ({
      pubkey,
      isSigner: name === "userOwner",
      isWritable: !["authority", "userOwner", "userIdoCheck", "userStakeInfo"].includes(name)
    }))
  ];
  const data = Buffer.alloc(purchaseLayout.span);
  purchaseLayout.encode({ instruction: 1, amount: Number(amount) }, data);
  return new TransactionInstruction({ keys, programId, data });
}
function makeClaimInstruction({ programId }, instructionKeys) {
  const keys = [
    { pubkey: TOKEN_PROGRAM_ID2, isSigner: false, isWritable: false },
    { pubkey: CLOCK_PROGRAM_ID, isSigner: false, isWritable: false },
    ...Object.entries(instructionKeys).map(([name, pubkey]) => ({
      pubkey,
      isSigner: name === "userOwner",
      isWritable: !["authority", "userOwner"].includes(name)
    }))
  ];
  const data = Buffer.alloc(claimLayout.span);
  claimLayout.encode({ instruction: 2 }, data);
  return new TransactionInstruction({ keys, programId, data });
}
function makeClaimInstructionV4(params) {
  const { poolConfig, userKeys, side } = params;
  const tokenAccount = side === "base" ? userKeys.baseTokenAccount : userKeys.quoteTokenAccount;
  const vault = side === "base" ? poolConfig.baseVault : poolConfig.quoteVault;
  const data = Buffer.alloc(claimLayout.span);
  claimLayout.encode({
    instruction: 2
  }, data);
  const keys = [
    {
      pubkey: TOKEN_PROGRAM_ID2,
      isWritable: false,
      isSigner: false
    },
    {
      pubkey: SYSVAR_CLOCK_PUBKEY,
      isWritable: false,
      isSigner: false
    },
    {
      pubkey: poolConfig.id,
      isWritable: true,
      isSigner: false
    },
    {
      pubkey: poolConfig.authority,
      isWritable: false,
      isSigner: false
    },
    {
      pubkey: vault,
      isWritable: true,
      isSigner: false
    },
    {
      pubkey: tokenAccount,
      isWritable: true,
      isSigner: false
    },
    {
      pubkey: userKeys.ledgerAccount,
      isWritable: true,
      isSigner: false
    },
    {
      pubkey: userKeys.owner,
      isWritable: false,
      isSigner: true
    }
  ];
  return new TransactionInstruction({
    programId: poolConfig.programId,
    keys,
    data
  });
}
export {
  makeClaimInstruction,
  makeClaimInstructionV4,
  makePurchaseInstruction
};
//# sourceMappingURL=instruction.mjs.map