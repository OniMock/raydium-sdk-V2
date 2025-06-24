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

// src/raydium/clmm/utils/util.ts
var util_exports = {};
__export(util_exports, {
  i16ToBytes: () => i16ToBytes,
  i32ToBytes: () => i32ToBytes,
  isZero: () => isZero,
  leadingZeros: () => leadingZeros,
  leastSignificantBit: () => leastSignificantBit,
  mostSignificantBit: () => mostSignificantBit,
  trailingZeros: () => trailingZeros,
  u16ToBytes: () => u16ToBytes,
  u32ToBytes: () => u32ToBytes
});
module.exports = __toCommonJS(util_exports);
function u16ToBytes(num) {
  const arr = new ArrayBuffer(2);
  const view = new DataView(arr);
  view.setUint16(0, num, false);
  return new Uint8Array(arr);
}
function i16ToBytes(num) {
  const arr = new ArrayBuffer(2);
  const view = new DataView(arr);
  view.setInt16(0, num, false);
  return new Uint8Array(arr);
}
function u32ToBytes(num) {
  const arr = new ArrayBuffer(4);
  const view = new DataView(arr);
  view.setUint32(0, num, false);
  return new Uint8Array(arr);
}
function i32ToBytes(num) {
  const arr = new ArrayBuffer(4);
  const view = new DataView(arr);
  view.setInt32(0, num, false);
  return new Uint8Array(arr);
}
function leadingZeros(bitNum, data) {
  let i = 0;
  for (let j = bitNum - 1; j >= 0; j--) {
    if (!data.testn(j)) {
      i++;
    } else {
      break;
    }
  }
  return i;
}
function trailingZeros(bitNum, data) {
  let i = 0;
  for (let j = 0; j < bitNum; j++) {
    if (!data.testn(j)) {
      i++;
    } else {
      break;
    }
  }
  return i;
}
function isZero(bitNum, data) {
  for (let i = 0; i < bitNum; i++) {
    if (data.testn(i))
      return false;
  }
  return true;
}
function mostSignificantBit(bitNum, data) {
  if (isZero(bitNum, data))
    return null;
  else
    return leadingZeros(bitNum, data);
}
function leastSignificantBit(bitNum, data) {
  if (isZero(bitNum, data))
    return null;
  else
    return trailingZeros(bitNum, data);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  i16ToBytes,
  i32ToBytes,
  isZero,
  leadingZeros,
  leastSignificantBit,
  mostSignificantBit,
  trailingZeros,
  u16ToBytes,
  u32ToBytes
});
//# sourceMappingURL=util.js.map