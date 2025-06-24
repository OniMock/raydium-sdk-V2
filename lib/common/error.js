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

// src/common/error.ts
var error_exports = {};
__export(error_exports, {
  EMPTY_CONNECTION: () => EMPTY_CONNECTION,
  EMPTY_OWNER: () => EMPTY_OWNER
});
module.exports = __toCommonJS(error_exports);
var EMPTY_OWNER = "please provide owner in load() initialization or you can set by calling raydium.setOwner(owner)";
var EMPTY_CONNECTION = "please provide connection in load() initialization or set it by raydium.setConnection(connection)";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EMPTY_CONNECTION,
  EMPTY_OWNER
});
//# sourceMappingURL=error.js.map