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
var Union = _Union;
var BitStructure = _BitStructure;
var UInt = _UInt;
var Blob = _Blob;
var greedy = _greedy;
var u8 = _u8;
var u16 = _u16;
var u24 = _u24;
var u32 = _u32;
var u40 = _u40;
var u48 = _u48;
var nu64 = _nu64;
var u16be = _u16be;
var u24be = _u24be;
var u32be = _u32be;
var u40be = _u40be;
var u48be = _u48be;
var nu64be = _nu64be;
var s8 = _s8;
var s16 = _s16;
var s24 = _s24;
var s32 = _s32;
var s40 = _s40;
var s48 = _s48;
var ns64 = _ns64;
var s16be = _s16be;
var s24be = _s24be;
var s32be = _s32be;
var s40be = _s40be;
var s48be = _s48be;
var ns64be = _ns64be;
var f32 = _f32;
var f32be = _f32be;
var f64 = _f64;
var f64be = _f64be;
var seq = _seq;
var union = _union;
var unionLayoutDiscriminator = _unionLayoutDiscriminator;
var blob = _blob;
var cstr = _cstr;
var utf8 = _utf8;
var bits = _bits;
var offset = _offset;

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
  return new WrappedLayout(blob(32), (b) => new PublicKey(b), (key) => key.toBuffer(), property);
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
export {
  BNLayout,
  BitStructure,
  Blob,
  Layout,
  OptionLayout,
  Structure2 as Structure,
  UInt,
  Union2 as Union,
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
  seq2 as seq,
  str,
  struct,
  tagged,
  u128,
  u16,
  u16be,
  u24,
  u24be,
  u322 as u32,
  u32be,
  u40,
  u40be,
  u48,
  u48be,
  u64,
  u82 as u8,
  union2 as union,
  unionLayoutDiscriminator,
  utf8,
  vec,
  vecU8,
  zeros
};
//# sourceMappingURL=index.mjs.map