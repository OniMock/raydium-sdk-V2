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

// src/common/fee.ts
var fee_exports = {};
__export(fee_exports, {
  FEE_RATE_DENOMINATOR_VALUE: () => FEE_RATE_DENOMINATOR_VALUE
});
module.exports = __toCommonJS(fee_exports);
var import_bn = __toESM(require("bn.js"));
var FEE_RATE_DENOMINATOR_VALUE = new import_bn.default(1e6);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FEE_RATE_DENOMINATOR_VALUE
});
//# sourceMappingURL=fee.js.map