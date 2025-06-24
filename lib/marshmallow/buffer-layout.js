var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/marshmallow/buffer-layout.ts
var buffer_layout_exports = {};
__export(buffer_layout_exports, {
  BitStructure: () => BitStructure,
  Blob: () => Blob,
  Layout: () => Layout,
  Structure: () => Structure,
  UInt: () => UInt,
  Union: () => Union,
  bits: () => bits,
  blob: () => blob,
  cstr: () => cstr,
  f32: () => f32,
  f32be: () => f32be,
  f64: () => f64,
  f64be: () => f64be,
  greedy: () => greedy,
  ns64: () => ns64,
  ns64be: () => ns64be,
  nu64: () => nu64,
  nu64be: () => nu64be,
  offset: () => offset,
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
  seq: () => seq,
  struct: () => struct,
  u16: () => u16,
  u16be: () => u16be,
  u24: () => u24,
  u24be: () => u24be,
  u32: () => u32,
  u32be: () => u32be,
  u40: () => u40,
  u40be: () => u40be,
  u48: () => u48,
  u48be: () => u48be,
  u8: () => u8,
  union: () => union,
  unionLayoutDiscriminator: () => unionLayoutDiscriminator,
  utf8: () => utf8
});
module.exports = __toCommonJS(buffer_layout_exports);
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
var struct = import_buffer_layout.struct;
var seq = import_buffer_layout.seq;
var union = import_buffer_layout.union;
var unionLayoutDiscriminator = import_buffer_layout.unionLayoutDiscriminator;
var blob = import_buffer_layout.blob;
var cstr = import_buffer_layout.cstr;
var utf8 = import_buffer_layout.utf8;
var bits = import_buffer_layout.bits;
var offset = import_buffer_layout.offset;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BitStructure,
  Blob,
  Layout,
  Structure,
  UInt,
  Union,
  bits,
  blob,
  cstr,
  f32,
  f32be,
  f64,
  f64be,
  greedy,
  ns64,
  ns64be,
  nu64,
  nu64be,
  offset,
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
  struct,
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
  u8,
  union,
  unionLayoutDiscriminator,
  utf8
});
//# sourceMappingURL=buffer-layout.js.map