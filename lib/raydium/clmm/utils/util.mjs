// src/raydium/clmm/utils/util.ts
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
export {
  i16ToBytes,
  i32ToBytes,
  isZero,
  leadingZeros,
  leastSignificantBit,
  mostSignificantBit,
  trailingZeros,
  u16ToBytes,
  u32ToBytes
};
//# sourceMappingURL=util.mjs.map