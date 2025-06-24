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

// src/api/type.ts
var type_exports = {};
__export(type_exports, {
  JupTokenType: () => JupTokenType,
  PoolFetchType: () => PoolFetchType
});
module.exports = __toCommonJS(type_exports);
var JupTokenType = /* @__PURE__ */ ((JupTokenType2) => {
  JupTokenType2["ALL"] = "all";
  JupTokenType2["Strict"] = "strict";
  return JupTokenType2;
})(JupTokenType || {});
var PoolFetchType = /* @__PURE__ */ ((PoolFetchType2) => {
  PoolFetchType2["All"] = "all";
  PoolFetchType2["Standard"] = "standard";
  PoolFetchType2["Concentrated"] = "concentrated";
  PoolFetchType2["AllFarm"] = "allFarm";
  PoolFetchType2["StandardFarm"] = "standardFarm";
  PoolFetchType2["ConcentratedFarm"] = "concentratedFarm";
  return PoolFetchType2;
})(PoolFetchType || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  JupTokenType,
  PoolFetchType
});
//# sourceMappingURL=type.js.map