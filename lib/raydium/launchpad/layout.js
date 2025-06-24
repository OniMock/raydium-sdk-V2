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

// src/raydium/launchpad/layout.ts
var layout_exports = {};
__export(layout_exports, {
  LaunchpadConfig: () => LaunchpadConfig,
  LaunchpadPool: () => LaunchpadPool,
  LaunchpadVesting: () => LaunchpadVesting,
  LaunchpadVestingSchedule: () => LaunchpadVestingSchedule,
  PlatformConfig: () => PlatformConfig
});
module.exports = __toCommonJS(layout_exports);

// src/marshmallow/index.ts
var import_web3 = require("@solana/web3.js");
var import_bn = __toESM(require("bn.js"));

// src/marshmallow/buffer-layout.ts
var import_buffer_layout = require("@solana/buffer-layout");
var Layout = import_buffer_layout.Layout;
var Structure = import_buffer_layout.Structure;
var UInt = import_buffer_layout.UInt;
var u16 = import_buffer_layout.u16;
var seq = import_buffer_layout.seq;
var blob = import_buffer_layout.blob;

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
function u82(property) {
  return new UInt(1, property);
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
function seq2(elementLayout, count, property) {
  let parsedCount;
  const superCount = typeof count === "number" ? count : (0, import_bn.isBN)(count) ? count.toNumber() : new Proxy(count, {
    get(target, property2) {
      if (!parsedCount) {
        const countProperty = Reflect.get(target, "count");
        parsedCount = (0, import_bn.isBN)(countProperty) ? countProperty.toNumber() : countProperty;
        Reflect.set(target, "count", parsedCount);
      }
      return Reflect.get(target, property2);
    },
    set(target, property2, value) {
      if (property2 === "count") {
        parsedCount = value;
      }
      return Reflect.set(target, property2, value);
    }
  });
  return seq(elementLayout, superCount, property);
}

// src/raydium/launchpad/layout.ts
var LaunchpadConfig = struct([
  u64(),
  u64("epoch"),
  u82("curveType"),
  u16("index"),
  u64("migrateFee"),
  u64("tradeFeeRate"),
  u64("maxShareFeeRate"),
  u64("minSupplyA"),
  u64("maxLockRate"),
  u64("minSellRateA"),
  u64("minMigrateRateA"),
  u64("minFundRaisingB"),
  publicKey("mintB"),
  publicKey("protocolFeeOwner"),
  publicKey("migrateFeeOwner"),
  publicKey("migrateToAmmWallet"),
  publicKey("migrateToCpmmWallet"),
  seq2(u64(), 16)
]);
var LaunchpadVestingSchedule = struct([
  u64("totalLockedAmount"),
  u64("cliffPeriod"),
  u64("unlockPeriod"),
  u64("startTime"),
  u64("totalAllocatedShare")
]);
var LaunchpadPool = struct([
  u64(),
  u64("epoch"),
  u82("bump"),
  u82("status"),
  u82("mintDecimalsA"),
  u82("mintDecimalsB"),
  u82("migrateType"),
  u64("supply"),
  u64("totalSellA"),
  u64("virtualA"),
  u64("virtualB"),
  u64("realA"),
  u64("realB"),
  u64("totalFundRaisingB"),
  u64("protocolFee"),
  u64("platformFee"),
  u64("migrateFee"),
  LaunchpadVestingSchedule.replicate("vestingSchedule"),
  publicKey("configId"),
  publicKey("platformId"),
  publicKey("mintA"),
  publicKey("mintB"),
  publicKey("vaultA"),
  publicKey("vaultB"),
  publicKey("creator"),
  seq2(u64(), 8)
]);
var LaunchpadVesting = struct([
  u64(),
  u64("epoch"),
  publicKey("poolId"),
  publicKey("beneficiary"),
  u64("claimedAmount"),
  u64("tokenShareAmount"),
  seq2(u64(), 8)
]);
var PlatformConfig = struct([
  u64(),
  u64("epoch"),
  publicKey("platformClaimFeeWallet"),
  publicKey("platformLockNftWallet"),
  u64("platformScale"),
  u64("creatorScale"),
  u64("burnScale"),
  u64("feeRate"),
  seq2(u82(), 64, "name"),
  seq2(u82(), 256, "web"),
  seq2(u82(), 256, "img"),
  publicKey("cpConfigId"),
  seq2(u82(), 224)
]);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LaunchpadConfig,
  LaunchpadPool,
  LaunchpadVesting,
  LaunchpadVestingSchedule,
  PlatformConfig
});
//# sourceMappingURL=layout.js.map