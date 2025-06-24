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

// src/raydium/cpmm/layout.ts
var layout_exports = {};
__export(layout_exports, {
  CpmmConfigInfoLayout: () => CpmmConfigInfoLayout,
  CpmmPoolInfoLayout: () => CpmmPoolInfoLayout
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
var u8 = import_buffer_layout.u8;
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
function bool(property) {
  return new WrappedLayout(u8(), decodeBool, encodeBool, property);
}
function decodeBool(value) {
  if (value === 0) {
    return false;
  } else if (value === 1) {
    return true;
  }
  throw new Error("Invalid bool: " + value);
}
function encodeBool(value) {
  return value ? 1 : 0;
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

// src/raydium/cpmm/layout.ts
var CpmmConfigInfoLayout = struct([
  blob(8),
  u82("bump"),
  bool("disableCreatePool"),
  u16("index"),
  u64("tradeFeeRate"),
  u64("protocolFeeRate"),
  u64("fundFeeRate"),
  u64("createPoolFee"),
  publicKey("protocolOwner"),
  publicKey("fundOwner"),
  seq2(u64(), 16)
]);
var CpmmPoolInfoLayout = struct([
  blob(8),
  publicKey("configId"),
  publicKey("poolCreator"),
  publicKey("vaultA"),
  publicKey("vaultB"),
  publicKey("mintLp"),
  publicKey("mintA"),
  publicKey("mintB"),
  publicKey("mintProgramA"),
  publicKey("mintProgramB"),
  publicKey("observationId"),
  u82("bump"),
  u82("status"),
  u82("lpDecimals"),
  u82("mintDecimalA"),
  u82("mintDecimalB"),
  u64("lpAmount"),
  u64("protocolFeesMintA"),
  u64("protocolFeesMintB"),
  u64("fundFeesMintA"),
  u64("fundFeesMintB"),
  u64("openTime"),
  seq2(u64(), 32)
]);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CpmmConfigInfoLayout,
  CpmmPoolInfoLayout
});
//# sourceMappingURL=layout.js.map