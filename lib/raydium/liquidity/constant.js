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

// src/raydium/liquidity/constant.ts
var constant_exports = {};
__export(constant_exports, {
  LIQUIDITY_FEES_DENOMINATOR: () => LIQUIDITY_FEES_DENOMINATOR,
  LIQUIDITY_FEES_NUMERATOR: () => LIQUIDITY_FEES_NUMERATOR,
  LIQUIDITY_VERSION_TO_SERUM_VERSION: () => LIQUIDITY_VERSION_TO_SERUM_VERSION
});
module.exports = __toCommonJS(constant_exports);
var import_bn = __toESM(require("bn.js"));
var LIQUIDITY_FEES_NUMERATOR = new import_bn.default(25);
var LIQUIDITY_FEES_DENOMINATOR = new import_bn.default(1e4);
var LIQUIDITY_VERSION_TO_SERUM_VERSION = {
  4: 3,
  5: 3
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LIQUIDITY_FEES_DENOMINATOR,
  LIQUIDITY_FEES_NUMERATOR,
  LIQUIDITY_VERSION_TO_SERUM_VERSION
});
//# sourceMappingURL=constant.js.map