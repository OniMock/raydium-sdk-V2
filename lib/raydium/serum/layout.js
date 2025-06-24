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

// src/raydium/serum/layout.ts
var layout_exports = {};
__export(layout_exports, {
  MARKET_STATE_LAYOUT_V3: () => MARKET_STATE_LAYOUT_V3,
  MARKET_VERSION_TO_STATE_LAYOUT: () => MARKET_VERSION_TO_STATE_LAYOUT
});
module.exports = __toCommonJS(layout_exports);

// src/marshmallow/index.ts
var import_web3 = require("@solana/web3.js");
var import_bn = __toESM(require("bn.js"));

// src/marshmallow/buffer-layout.ts
var import_buffer_layout = require("@solana/buffer-layout");
var Layout = import_buffer_layout.Layout;
var Structure = import_buffer_layout.Structure;
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

// src/raydium/serum/layout.ts
var MARKET_STATE_LAYOUT_V3 = struct([
  blob(5),
  blob(8),
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
var MARKET_VERSION_TO_STATE_LAYOUT = {
  3: MARKET_STATE_LAYOUT_V3
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MARKET_STATE_LAYOUT_V3,
  MARKET_VERSION_TO_STATE_LAYOUT
});
//# sourceMappingURL=layout.js.map