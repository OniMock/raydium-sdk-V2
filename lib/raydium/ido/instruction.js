var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/raydium/ido/instruction.ts
var instruction_exports = {};
__export(instruction_exports, {
  makeClaimInstruction: () => makeClaimInstruction,
  makeClaimInstructionV4: () => makeClaimInstructionV4,
  makePurchaseInstruction: () => makePurchaseInstruction
});
module.exports = __toCommonJS(instruction_exports);
var import_web33 = require("@solana/web3.js");
var import_spl_token2 = require("@solana/spl-token");

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

// src/marshmallow/index.ts
var import_web32 = require("@solana/web3.js");
var import_bn = __toESM(require("bn.js"));

// src/marshmallow/buffer-layout.ts
var import_buffer_layout = require("@solana/buffer-layout");
var Structure = import_buffer_layout.Structure;
var UInt = import_buffer_layout.UInt;
var nu64 = import_buffer_layout.nu64;

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
    { pubkey: import_spl_token2.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
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
  return new import_web33.TransactionInstruction({ keys, programId, data });
}
function makeClaimInstruction({ programId }, instructionKeys) {
  const keys = [
    { pubkey: import_spl_token2.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: CLOCK_PROGRAM_ID, isSigner: false, isWritable: false },
    ...Object.entries(instructionKeys).map(([name, pubkey]) => ({
      pubkey,
      isSigner: name === "userOwner",
      isWritable: !["authority", "userOwner"].includes(name)
    }))
  ];
  const data = Buffer.alloc(claimLayout.span);
  claimLayout.encode({ instruction: 2 }, data);
  return new import_web33.TransactionInstruction({ keys, programId, data });
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
      pubkey: import_spl_token2.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false
    },
    {
      pubkey: import_web33.SYSVAR_CLOCK_PUBKEY,
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
  return new import_web33.TransactionInstruction({
    programId: poolConfig.programId,
    keys,
    data
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  makeClaimInstruction,
  makeClaimInstructionV4,
  makePurchaseInstruction
});
//# sourceMappingURL=instruction.js.map