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

// src/common/owner.ts
var owner_exports = {};
__export(owner_exports, {
  Owner: () => Owner
});
module.exports = __toCommonJS(owner_exports);
var Owner = class {
  _owner;
  constructor(owner) {
    this._owner = owner;
  }
  get publicKey() {
    if (Owner.isKeyPair(this._owner)) {
      return this._owner.publicKey;
    }
    return this._owner;
  }
  get signer() {
    return Owner.isKeyPair(this._owner) ? this._owner : void 0;
  }
  get isKeyPair() {
    return Owner.isKeyPair(this._owner);
  }
  get isPublicKey() {
    return Owner.isPublicKey(this._owner);
  }
  static isKeyPair(owner) {
    return owner.secretKey !== void 0;
  }
  static isPublicKey(owner) {
    return !Owner.isKeyPair(owner);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Owner
});
//# sourceMappingURL=owner.js.map