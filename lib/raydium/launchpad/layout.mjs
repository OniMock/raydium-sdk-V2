// src/marshmallow/index.ts
import { PublicKey } from "@solana/web3.js";
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
var Layout = _Layout;
var Structure = _Structure;
var UInt = _UInt;
var u16 = _u16;
var seq = _seq;
var blob = _blob;

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
    const num = new BN(this.blob.decode(b, offset2), 10, "le");
    if (this.signed) {
      return num.fromTwos(this.span * 8).clone();
    }
    return num;
  }
  encode(src, b, offset2 = 0) {
    if (typeof src === "number")
      src = new BN(src);
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
  return new WrappedLayout(blob(32), (b) => new PublicKey(b), (key) => key.toBuffer(), property);
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
  const superCount = typeof count === "number" ? count : isBN(count) ? count.toNumber() : new Proxy(count, {
    get(target, property2) {
      if (!parsedCount) {
        const countProperty = Reflect.get(target, "count");
        parsedCount = isBN(countProperty) ? countProperty.toNumber() : countProperty;
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
export {
  LaunchpadConfig,
  LaunchpadPool,
  LaunchpadVesting,
  LaunchpadVestingSchedule,
  PlatformConfig
};
//# sourceMappingURL=layout.mjs.map