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

// src/raydium/marketV2/instrument.ts
var instrument_exports = {};
__export(instrument_exports, {
  initializeMarket: () => initializeMarket,
  makeCreateMarketInstruction: () => makeCreateMarketInstruction
});
module.exports = __toCommonJS(instrument_exports);
var import_web32 = require("@solana/web3.js");
var import_spl_token = require("@solana/spl-token");

// src/common/txTool/txType.ts
var InstructionType = {
  CreateAccount: "CreateAccount",
  InitAccount: "InitAccount",
  CreateATA: "CreateATA",
  CloseAccount: "CloseAccount",
  TransferAmount: "TransferAmount",
  InitMint: "InitMint",
  MintTo: "MintTo",
  InitMarket: "InitMarket",
  Util1216OwnerClaim: "Util1216OwnerClaim",
  SetComputeUnitPrice: "SetComputeUnitPrice",
  SetComputeUnitLimit: "SetComputeUnitLimit",
  ClmmCreatePool: "ClmmCreatePool",
  ClmmOpenPosition: "ClmmOpenPosition",
  ClmmIncreasePosition: "ClmmIncreasePosition",
  ClmmDecreasePosition: "ClmmDecreasePosition",
  ClmmClosePosition: "ClmmClosePosition",
  ClmmSwapBaseIn: "ClmmSwapBaseIn",
  ClmmSwapBaseOut: "ClmmSwapBaseOut",
  ClmmInitReward: "ClmmInitReward",
  ClmmSetReward: "ClmmSetReward",
  ClmmCollectReward: "ClmmCollectReward",
  ClmmLockPosition: "ClmmLockPosition",
  ClmmHarvestLockPosition: "ClmmHarvestLockPosition",
  AmmV4Swap: "AmmV4Swap",
  AmmV4AddLiquidity: "AmmV4AddLiquidity",
  AmmV4RemoveLiquidity: "AmmV4RemoveLiquidity",
  AmmV4SimulatePoolInfo: "AmmV4SimulatePoolInfo",
  AmmV4SwapBaseIn: "AmmV4SwapBaseIn",
  AmmV4SwapBaseOut: "AmmV4SwapBaseOut",
  AmmV4CreatePool: "AmmV4CreatePool",
  AmmV4InitPool: "AmmV4InitPool",
  AmmV5AddLiquidity: "AmmV5AddLiquidity",
  AmmV5RemoveLiquidity: "AmmV5RemoveLiquidity",
  AmmV5SimulatePoolInfo: "AmmV5SimulatePoolInfo",
  AmmV5SwapBaseIn: "AmmV5SwapBaseIn",
  AmmV5SwapBaseOut: "AmmV5SwapBaseOut",
  RouteSwap: "RouteSwap",
  RouteSwap1: "RouteSwap1",
  RouteSwap2: "RouteSwap2",
  FarmV3Deposit: "FarmV3Deposit",
  FarmV3Withdraw: "FarmV3Withdraw",
  FarmV3CreateLedger: "FarmV3CreateLedger",
  FarmV4Withdraw: "FarmV4Withdraw",
  FarmV5Deposit: "FarmV5Deposit",
  FarmV5Withdraw: "FarmV5Withdraw",
  FarmV5CreateLedger: "FarmV5CreateLedger",
  FarmV6Deposit: "FarmV6Deposit",
  FarmV6Withdraw: "FarmV6Withdraw",
  FarmV6Create: "FarmV6Create",
  FarmV6Restart: "FarmV6Restart",
  FarmV6CreatorAddReward: "FarmV6CreatorAddReward",
  FarmV6CreatorWithdraw: "FarmV6CreatorWithdraw",
  CpmmCreatePool: "CpmmCreatePool",
  CpmmAddLiquidity: "CpmmAddLiquidity",
  CpmmWithdrawLiquidity: "CpmmWithdrawLiquidity",
  CpmmSwapBaseIn: "CpmmSwapBaseIn",
  CpmmSwapBaseOut: "CpmmSwapBaseOut",
  CpmmLockLp: "CpmmLockLp",
  CpmmCollectLockFee: "CpmmCollectLockFee",
  TransferTip: "TransferTip",
  NonceAccount: "NonceAccount"
};

// src/marshmallow/index.ts
var import_web3 = require("@solana/web3.js");
var import_bn = __toESM(require("bn.js"));

// src/marshmallow/buffer-layout.ts
var import_buffer_layout = require("@solana/buffer-layout");
var Layout = import_buffer_layout.Layout;
var Structure = import_buffer_layout.Structure;
var UInt = import_buffer_layout.UInt;
var u16 = import_buffer_layout.u16;
var u32 = import_buffer_layout.u32;
var blob = import_buffer_layout.blob;
var bits = import_buffer_layout.bits;

// src/marshmallow/index.ts
var BNLayout = class extends Layout {
  blob;
  signed;
  constructor(span, signed, property) {
    super(span, property);
    this.blob = blob(span);
    this.signed = signed;
  }
  decode(b, offset2 = 0) {
    const num = new import_bn.default(this.blob.decode(b, offset2), 10, "le");
    if (this.signed) {
      return num.fromTwos(this.span * 8).clone();
    }
    return num;
  }
  encode(src, b, offset2 = 0) {
    if (typeof src === "number")
      src = new import_bn.default(src);
    if (this.signed) {
      src = src.toTwos(this.span * 8);
    }
    return this.blob.encode(src.toArrayLike(Buffer, "le", this.span), b, offset2);
  }
};
var WideBits = class extends Layout {
  _lower;
  _upper;
  constructor(property) {
    super(8, property);
    this._lower = bits(u32(), false);
    this._upper = bits(u32(), false);
  }
  addBoolean(property) {
    if (this._lower.fields.length < 32) {
      this._lower.addBoolean(property);
    } else {
      this._upper.addBoolean(property);
    }
  }
  decode(b, offset2 = 0) {
    const lowerDecoded = this._lower.decode(b, offset2);
    const upperDecoded = this._upper.decode(b, offset2 + this._lower.span);
    return { ...lowerDecoded, ...upperDecoded };
  }
  encode(src, b, offset2 = 0) {
    return this._lower.encode(src, b, offset2) + this._upper.encode(src, b, offset2 + this._lower.span);
  }
};
function u82(property) {
  return new UInt(1, property);
}
function u322(property) {
  return new UInt(4, property);
}
function u64(property) {
  return new BNLayout(8, false, property);
}
var WrappedLayout = class extends Layout {
  layout;
  decoder;
  encoder;
  constructor(layout, decoder, encoder, property) {
    super(layout.span, property);
    this.layout = layout;
    this.decoder = decoder;
    this.encoder = encoder;
  }
  decode(b, offset2) {
    return this.decoder(this.layout.decode(b, offset2));
  }
  encode(src, b, offset2) {
    return this.layout.encode(this.encoder(src), b, offset2);
  }
  getSpan(b, offset2) {
    return this.layout.getSpan(b, offset2);
  }
};
function publicKey(property) {
  return new WrappedLayout(blob(32), (b) => new import_web3.PublicKey(b), (key) => key.toBuffer(), property);
}
var Structure2 = class extends Structure {
  decode(b, offset2) {
    return super.decode(b, offset2);
  }
};
function struct(fields, property, decodePrefixes) {
  return new Structure2(fields, property, decodePrefixes);
}

// src/raydium/marketV2/layout.ts
function accountFlagsLayout(property = "accountFlags") {
  const ACCOUNT_FLAGS_LAYOUT = new WideBits(property);
  ACCOUNT_FLAGS_LAYOUT.addBoolean("initialized");
  ACCOUNT_FLAGS_LAYOUT.addBoolean("market");
  ACCOUNT_FLAGS_LAYOUT.addBoolean("openOrders");
  ACCOUNT_FLAGS_LAYOUT.addBoolean("requestQueue");
  ACCOUNT_FLAGS_LAYOUT.addBoolean("eventQueue");
  ACCOUNT_FLAGS_LAYOUT.addBoolean("bids");
  ACCOUNT_FLAGS_LAYOUT.addBoolean("asks");
  return ACCOUNT_FLAGS_LAYOUT;
}
var MARKET_STATE_LAYOUT_V2 = struct([
  blob(5),
  accountFlagsLayout("accountFlags"),
  publicKey("ownAddress"),
  u64("vaultSignerNonce"),
  publicKey("baseMint"),
  publicKey("quoteMint"),
  publicKey("baseVault"),
  u64("baseDepositsTotal"),
  u64("baseFeesAccrued"),
  publicKey("quoteVault"),
  u64("quoteDepositsTotal"),
  u64("quoteFeesAccrued"),
  u64("quoteDustThreshold"),
  publicKey("requestQueue"),
  publicKey("eventQueue"),
  publicKey("bids"),
  publicKey("asks"),
  u64("baseLotSize"),
  u64("quoteLotSize"),
  u64("feeRateBps"),
  u64("referrerRebatesAccrued"),
  blob(7)
]);

// src/raydium/marketV2/instrument.ts
function initializeMarket({
  programId,
  marketInfo
}) {
  const dataLayout = struct([
    u82("version"),
    u322("instruction"),
    u64("baseLotSize"),
    u64("quoteLotSize"),
    u16("feeRateBps"),
    u64("vaultSignerNonce"),
    u64("quoteDustThreshold")
  ]);
  const keys = [
    { pubkey: marketInfo.id, isSigner: false, isWritable: true },
    { pubkey: marketInfo.requestQueue, isSigner: false, isWritable: true },
    { pubkey: marketInfo.eventQueue, isSigner: false, isWritable: true },
    { pubkey: marketInfo.bids, isSigner: false, isWritable: true },
    { pubkey: marketInfo.asks, isSigner: false, isWritable: true },
    { pubkey: marketInfo.baseVault, isSigner: false, isWritable: true },
    { pubkey: marketInfo.quoteVault, isSigner: false, isWritable: true },
    { pubkey: marketInfo.baseMint, isSigner: false, isWritable: false },
    { pubkey: marketInfo.quoteMint, isSigner: false, isWritable: false },
    {
      pubkey: marketInfo.authority ? marketInfo.quoteMint : import_web32.SYSVAR_RENT_PUBKEY,
      isSigner: false,
      isWritable: false
    }
  ].concat(marketInfo.authority ? { pubkey: marketInfo.authority, isSigner: false, isWritable: false } : []).concat(marketInfo.authority && marketInfo.pruneAuthority ? { pubkey: marketInfo.pruneAuthority, isSigner: false, isWritable: false } : []);
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    version: 0,
    instruction: 0,
    baseLotSize: marketInfo.baseLotSize,
    quoteLotSize: marketInfo.quoteLotSize,
    feeRateBps: marketInfo.feeRateBps,
    vaultSignerNonce: marketInfo.vaultSignerNonce,
    quoteDustThreshold: marketInfo.quoteDustThreshold
  }, data);
  return new import_web32.TransactionInstruction({
    keys,
    programId,
    data
  });
}
async function makeCreateMarketInstruction({
  connection,
  wallet,
  marketInfo
}) {
  const tx1 = new import_web32.Transaction();
  const accountLamports = await connection.getMinimumBalanceForRentExemption(165);
  tx1.add(import_web32.SystemProgram.createAccountWithSeed({
    fromPubkey: wallet,
    basePubkey: wallet,
    seed: marketInfo.baseVault.seed,
    newAccountPubkey: marketInfo.baseVault.publicKey,
    lamports: accountLamports,
    space: 165,
    programId: import_spl_token.TOKEN_PROGRAM_ID
  }), import_web32.SystemProgram.createAccountWithSeed({
    fromPubkey: wallet,
    basePubkey: wallet,
    seed: marketInfo.quoteVault.seed,
    newAccountPubkey: marketInfo.quoteVault.publicKey,
    lamports: accountLamports,
    space: 165,
    programId: import_spl_token.TOKEN_PROGRAM_ID
  }), (0, import_spl_token.createInitializeAccountInstruction)(marketInfo.baseVault.publicKey, marketInfo.baseMint, marketInfo.vaultOwner), (0, import_spl_token.createInitializeAccountInstruction)(marketInfo.quoteVault.publicKey, marketInfo.quoteMint, marketInfo.vaultOwner), import_web32.SystemProgram.createAccountWithSeed({
    fromPubkey: wallet,
    basePubkey: wallet,
    seed: marketInfo.id.seed,
    newAccountPubkey: marketInfo.id.publicKey,
    lamports: await connection.getMinimumBalanceForRentExemption(MARKET_STATE_LAYOUT_V2.span),
    space: MARKET_STATE_LAYOUT_V2.span,
    programId: marketInfo.programId
  }));
  const tx2 = new import_web32.Transaction();
  tx2.add(import_web32.SystemProgram.createAccountWithSeed({
    fromPubkey: wallet,
    basePubkey: wallet,
    seed: marketInfo.requestQueue.seed,
    newAccountPubkey: marketInfo.requestQueue.publicKey,
    lamports: marketInfo.lowestFeeMarket ? 6208320 : await connection.getMinimumBalanceForRentExemption(marketInfo.requestQueueSpace ?? 5120 + 12),
    space: marketInfo.lowestFeeMarket ? 764 : marketInfo.requestQueueSpace ?? 5120 + 12,
    programId: marketInfo.programId
  }), import_web32.SystemProgram.createAccountWithSeed({
    fromPubkey: wallet,
    basePubkey: wallet,
    seed: marketInfo.eventQueue.seed,
    newAccountPubkey: marketInfo.eventQueue.publicKey,
    lamports: marketInfo.lowestFeeMarket ? 79594560 : await connection.getMinimumBalanceForRentExemption(marketInfo.eventQueueSpace ?? 262144 + 12),
    space: marketInfo.lowestFeeMarket ? 11308 : marketInfo.eventQueueSpace ?? 262144 + 12,
    programId: marketInfo.programId
  }), import_web32.SystemProgram.createAccountWithSeed({
    fromPubkey: wallet,
    basePubkey: wallet,
    seed: marketInfo.bids.seed,
    newAccountPubkey: marketInfo.bids.publicKey,
    lamports: marketInfo.lowestFeeMarket ? 101977920 : await connection.getMinimumBalanceForRentExemption(marketInfo.orderbookQueueSpace ?? 65536 + 12),
    space: marketInfo.lowestFeeMarket ? 14524 : marketInfo.orderbookQueueSpace ?? 65536 + 12,
    programId: marketInfo.programId
  }), import_web32.SystemProgram.createAccountWithSeed({
    fromPubkey: wallet,
    basePubkey: wallet,
    seed: marketInfo.asks.seed,
    newAccountPubkey: marketInfo.asks.publicKey,
    lamports: marketInfo.lowestFeeMarket ? 101977920 : await connection.getMinimumBalanceForRentExemption(marketInfo.orderbookQueueSpace ?? 65536 + 12),
    space: marketInfo.lowestFeeMarket ? 14524 : marketInfo.orderbookQueueSpace ?? 65536 + 12,
    programId: marketInfo.programId
  }), initializeMarket({
    programId: marketInfo.programId,
    marketInfo: {
      id: marketInfo.id.publicKey,
      requestQueue: marketInfo.requestQueue.publicKey,
      eventQueue: marketInfo.eventQueue.publicKey,
      bids: marketInfo.bids.publicKey,
      asks: marketInfo.asks.publicKey,
      baseVault: marketInfo.baseVault.publicKey,
      quoteVault: marketInfo.quoteVault.publicKey,
      baseMint: marketInfo.baseMint,
      quoteMint: marketInfo.quoteMint,
      baseLotSize: marketInfo.baseLotSize,
      quoteLotSize: marketInfo.quoteLotSize,
      feeRateBps: marketInfo.feeRateBps,
      vaultSignerNonce: marketInfo.vaultSignerNonce,
      quoteDustThreshold: marketInfo.quoteDustThreshold
    }
  }));
  return [
    {
      transaction: tx1,
      signer: [],
      instructionTypes: [
        InstructionType.CreateAccount,
        InstructionType.CreateAccount,
        InstructionType.InitAccount,
        InstructionType.InitAccount
      ]
    },
    {
      transaction: tx2,
      signer: [],
      instructionTypes: [
        InstructionType.CreateAccount,
        InstructionType.CreateAccount,
        InstructionType.CreateAccount,
        InstructionType.CreateAccount,
        InstructionType.CreateAccount,
        InstructionType.InitMarket
      ]
    }
  ];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  initializeMarket,
  makeCreateMarketInstruction
});
//# sourceMappingURL=instrument.js.map