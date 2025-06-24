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

// src/marshmallow/index.ts
var marshmallow_exports = {};
__export(marshmallow_exports, {
  BNLayout: () => BNLayout,
  BitStructure: () => BitStructure,
  Blob: () => Blob,
  Layout: () => Layout,
  OptionLayout: () => OptionLayout,
  Structure: () => Structure2,
  UInt: () => UInt,
  Union: () => Union2,
  WideBits: () => WideBits,
  WrappedLayout: () => WrappedLayout,
  array: () => array,
  bits: () => bits,
  blob: () => blob,
  bool: () => bool,
  cstr: () => cstr,
  decodeBool: () => decodeBool,
  encodeBool: () => encodeBool,
  f32: () => f32,
  f32be: () => f32be,
  f64: () => f64,
  f64be: () => f64be,
  greedy: () => greedy,
  i128: () => i128,
  i64: () => i64,
  i8: () => i8,
  ns64: () => ns64,
  ns64be: () => ns64be,
  nu64: () => nu64,
  nu64be: () => nu64be,
  offset: () => offset,
  option: () => option,
  publicKey: () => publicKey,
  rustEnum: () => rustEnum,
  s16: () => s16,
  s16be: () => s16be,
  s24: () => s24,
  s24be: () => s24be,
  s32: () => s32,
  s32be: () => s32be,
  s40: () => s40,
  s40be: () => s40be,
  s48: () => s48,
  s48be: () => s48be,
  s8: () => s8,
  seq: () => seq2,
  str: () => str,
  struct: () => struct,
  tagged: () => tagged,
  u128: () => u128,
  u16: () => u16,
  u16be: () => u16be,
  u24: () => u24,
  u24be: () => u24be,
  u32: () => u322,
  u32be: () => u32be,
  u40: () => u40,
  u40be: () => u40be,
  u48: () => u48,
  u48be: () => u48be,
  u64: () => u64,
  u8: () => u82,
  union: () => union2,
  unionLayoutDiscriminator: () => unionLayoutDiscriminator,
  utf8: () => utf8,
  vec: () => vec,
  vecU8: () => vecU8,
  zeros: () => zeros
});
module.exports = __toCommonJS(marshmallow_exports);
var import_web3 = require("@solana/web3.js");
var import_bn = __toESM(require("bn.js"));

// src/marshmallow/buffer-layout.ts
var import_buffer_layout = require("@solana/buffer-layout");
var Layout = import_buffer_layout.Layout;
var Structure = import_buffer_layout.Structure;
var Union = import_buffer_layout.Union;
var BitStructure = import_buffer_layout.BitStructure;
var UInt = import_buffer_layout.UInt;
var Blob = import_buffer_layout.Blob;
var greedy = import_buffer_layout.greedy;
var u8 = import_buffer_layout.u8;
var u16 = import_buffer_layout.u16;
var u24 = import_buffer_layout.u24;
var u32 = import_buffer_layout.u32;
var u40 = import_buffer_layout.u40;
var u48 = import_buffer_layout.u48;
var nu64 = import_buffer_layout.nu64;
var u16be = import_buffer_layout.u16be;
var u24be = import_buffer_layout.u24be;
var u32be = import_buffer_layout.u32be;
var u40be = import_buffer_layout.u40be;
var u48be = import_buffer_layout.u48be;
var nu64be = import_buffer_layout.nu64be;
var s8 = import_buffer_layout.s8;
var s16 = import_buffer_layout.s16;
var s24 = import_buffer_layout.s24;
var s32 = import_buffer_layout.s32;
var s40 = import_buffer_layout.s40;
var s48 = import_buffer_layout.s48;
var ns64 = import_buffer_layout.ns64;
var s16be = import_buffer_layout.s16be;
var s24be = import_buffer_layout.s24be;
var s32be = import_buffer_layout.s32be;
var s40be = import_buffer_layout.s40be;
var s48be = import_buffer_layout.s48be;
var ns64be = import_buffer_layout.ns64be;
var f32 = import_buffer_layout.f32;
var f32be = import_buffer_layout.f32be;
var f64 = import_buffer_layout.f64;
var f64be = import_buffer_layout.f64be;
var seq = import_buffer_layout.seq;
var union = import_buffer_layout.union;
var unionLayoutDiscriminator = import_buffer_layout.unionLayoutDiscriminator;
var blob = import_buffer_layout.blob;
var cstr = import_buffer_layout.cstr;
var utf8 = import_buffer_layout.utf8;
var bits = import_buffer_layout.bits;
var offset = import_buffer_layout.offset;

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
function u128(property) {
  return new BNLayout(16, false, property);
}
function i8(property) {
  return new BNLayout(1, true, property);
}
function i64(property) {
  return new BNLayout(8, true, property);
}
function i128(property) {
  return new BNLayout(16, true, property);
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
var OptionLayout = class extends Layout {
  layout;
  discriminator;
  constructor(layout, property) {
    super(-1, property);
    this.layout = layout;
    this.discriminator = u8();
  }
  encode(src, b, offset2 = 0) {
    if (src === null || src === void 0) {
      return this.discriminator.encode(0, b, offset2);
    }
    this.discriminator.encode(1, b, offset2);
    return this.layout.encode(src, b, offset2 + 1) + 1;
  }
  decode(b, offset2 = 0) {
    const discriminator = this.discriminator.decode(b, offset2);
    if (discriminator === 0) {
      return null;
    } else if (discriminator === 1) {
      return this.layout.decode(b, offset2 + 1);
    }
    throw new Error("Invalid option " + this.property);
  }
  getSpan(b, offset2 = 0) {
    const discriminator = this.discriminator.decode(b, offset2);
    if (discriminator === 0) {
      return 1;
    } else if (discriminator === 1) {
      return this.layout.getSpan(b, offset2 + 1) + 1;
    }
    throw new Error("Invalid option " + this.property);
  }
};
function option(layout, property) {
  return new OptionLayout(layout, property);
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
function vec(elementLayout, property) {
  const length = u32("length");
  const layout = struct([
    length,
    seq2(elementLayout, offset(length, -length.span), "values")
  ]);
  return new WrappedLayout(layout, ({ values }) => values, (values) => ({ values }), property);
}
function tagged(tag, layout, property) {
  const wrappedLayout = struct([u64("tag"), layout.replicate("data")]);
  function decodeTag({ tag: receivedTag, data }) {
    if (!receivedTag.eq(tag)) {
      throw new Error("Invalid tag, expected: " + tag.toString("hex") + ", got: " + receivedTag.toString("hex"));
    }
    return data;
  }
  return new WrappedLayout(wrappedLayout, decodeTag, (data) => ({ tag, data }), property);
}
function vecU8(property) {
  const length = u32("length");
  const layout = struct([length, blob(offset(length, -length.span), "data")]);
  return new WrappedLayout(layout, ({ data }) => data, (data) => ({ data }), property);
}
function str(property) {
  return new WrappedLayout(vecU8(), (data) => data.toString("utf-8"), (s) => Buffer.from(s, "utf-8"), property);
}
function rustEnum(variants, property) {
  const unionLayout = union(u8(), property);
  variants.forEach((variant, index) => unionLayout.addVariant(index, variant, variant.property));
  return unionLayout;
}
function array(elementLayout, length, property) {
  const layout = struct([seq2(elementLayout, length, "values")]);
  return new WrappedLayout(layout, ({ values }) => values, (values) => ({ values }), property);
}
var Structure2 = class extends Structure {
  decode(b, offset2) {
    return super.decode(b, offset2);
  }
};
function struct(fields, property, decodePrefixes) {
  return new Structure2(fields, property, decodePrefixes);
}
var Union2 = class extends Union {
  encodeInstruction(instruction) {
    const instructionMaxSpan = Math.max(...Object.values(this.registry).map((r) => r.span));
    const b = Buffer.alloc(instructionMaxSpan);
    return b.slice(0, this.encode(instruction, b));
  }
  decodeInstruction(instruction) {
    return this.decode(instruction);
  }
};
function union2(discr, defaultLayout, property) {
  return new Union2(discr, defaultLayout, property);
}
var Zeros = class extends Blob {
  decode(b, offset2) {
    const slice = super.decode(b, offset2);
    if (!slice.every((v) => v === 0)) {
      throw new Error("nonzero padding bytes");
    }
    return slice;
  }
};
function zeros(length) {
  return new Zeros(length);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BNLayout,
  BitStructure,
  Blob,
  Layout,
  OptionLayout,
  Structure,
  UInt,
  Union,
  WideBits,
  WrappedLayout,
  array,
  bits,
  blob,
  bool,
  cstr,
  decodeBool,
  encodeBool,
  f32,
  f32be,
  f64,
  f64be,
  greedy,
  i128,
  i64,
  i8,
  ns64,
  ns64be,
  nu64,
  nu64be,
  offset,
  option,
  publicKey,
  rustEnum,
  s16,
  s16be,
  s24,
  s24be,
  s32,
  s32be,
  s40,
  s40be,
  s48,
  s48be,
  s8,
  seq,
  str,
  struct,
  tagged,
  u128,
  u16,
  u16be,
  u24,
  u24be,
  u32,
  u32be,
  u40,
  u40be,
  u48,
  u48be,
  u64,
  u8,
  union,
  unionLayoutDiscriminator,
  utf8,
  vec,
  vecU8,
  zeros
});
//# sourceMappingURL=index.js.map