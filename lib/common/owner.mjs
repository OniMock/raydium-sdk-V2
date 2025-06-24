// src/common/owner.ts
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
export {
  Owner
};
//# sourceMappingURL=owner.mjs.map