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

// src/common/lodash.ts
var lodash_exports = {};
__export(lodash_exports, {
  chunkArray: () => chunkArray,
  intersection: () => intersection,
  uniq: () => uniq,
  xor: () => xor
});
module.exports = __toCommonJS(lodash_exports);
function chunkArray(arr, chunkSize = 1, cache = []) {
  const tmp = [...arr];
  if (chunkSize <= 0)
    return cache;
  while (tmp.length)
    cache.push(tmp.splice(0, chunkSize));
  return cache;
}
function intersection(arr, ...args) {
  return arr.filter((item) => args.every((arr2) => arr2.includes(item)));
}
function xor(arr, ...args) {
  return arr.filter((item) => args.every((arr2) => !arr2.includes(item)));
}
function uniq(arr) {
  return [...new Set(arr)];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  chunkArray,
  intersection,
  uniq,
  xor
});
//# sourceMappingURL=lodash.js.map