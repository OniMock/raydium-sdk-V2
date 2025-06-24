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

// src/common/transfer.ts
var transfer_exports = {};
__export(transfer_exports, {
  BNDivCeil: () => BNDivCeil,
  ceilDivBN: () => ceilDivBN,
  getTransferAmountFee: () => getTransferAmountFee,
  getTransferAmountFeeV2: () => getTransferAmountFeeV2,
  minExpirationTime: () => minExpirationTime
});
module.exports = __toCommonJS(transfer_exports);
var import_bn = __toESM(require("bn.js"));
var POINT = 1e4;
function getTransferAmountFee(amount, feeConfig, epochInfo, addFee) {
  if (feeConfig === void 0) {
    return {
      amount,
      fee: void 0,
      expirationTime: void 0
    };
  }
  const nowFeeConfig = epochInfo.epoch < feeConfig.newerTransferFee.epoch ? feeConfig.olderTransferFee : feeConfig.newerTransferFee;
  const maxFee = new import_bn.default(nowFeeConfig.maximumFee.toString());
  const expirationTime = epochInfo.epoch < feeConfig.newerTransferFee.epoch ? (Number(feeConfig.newerTransferFee.epoch) * epochInfo.slotsInEpoch - epochInfo.absoluteSlot) * 400 / 1e3 : void 0;
  if (addFee) {
    if (nowFeeConfig.transferFeeBasisPoints === POINT) {
      const nowMaxFee = new import_bn.default(nowFeeConfig.maximumFee.toString());
      return {
        amount: amount.add(nowMaxFee),
        fee: nowMaxFee,
        expirationTime
      };
    } else {
      const _TAmount = BNDivCeil(amount.mul(new import_bn.default(POINT)), new import_bn.default(POINT - nowFeeConfig.transferFeeBasisPoints));
      const nowMaxFee = new import_bn.default(nowFeeConfig.maximumFee.toString());
      const TAmount = _TAmount.sub(amount).gt(nowMaxFee) ? amount.add(nowMaxFee) : _TAmount;
      const _fee = BNDivCeil(TAmount.mul(new import_bn.default(nowFeeConfig.transferFeeBasisPoints)), new import_bn.default(POINT));
      const fee = _fee.gt(maxFee) ? maxFee : _fee;
      return {
        amount: TAmount,
        fee,
        expirationTime
      };
    }
  } else {
    const _fee = BNDivCeil(amount.mul(new import_bn.default(nowFeeConfig.transferFeeBasisPoints)), new import_bn.default(POINT));
    const fee = _fee.gt(maxFee) ? maxFee : _fee;
    return {
      amount,
      fee,
      expirationTime
    };
  }
}
function getTransferAmountFeeV2(amount, _feeConfig, epochInfo, addFee) {
  if (_feeConfig === void 0) {
    return {
      amount,
      fee: void 0,
      expirationTime: void 0
    };
  }
  const feeConfig = {
    ..._feeConfig,
    olderTransferFee: {
      epoch: BigInt(_feeConfig.olderTransferFee.epoch),
      maximumFee: BigInt(_feeConfig.olderTransferFee.maximumFee),
      transferFeeBasisPoints: _feeConfig.olderTransferFee.transferFeeBasisPoints
    },
    newerTransferFee: {
      epoch: BigInt(_feeConfig.newerTransferFee.epoch),
      maximumFee: BigInt(_feeConfig.newerTransferFee.maximumFee),
      transferFeeBasisPoints: _feeConfig.newerTransferFee.transferFeeBasisPoints
    }
  };
  const nowFeeConfig = epochInfo.epoch < feeConfig.newerTransferFee.epoch ? feeConfig.olderTransferFee : feeConfig.newerTransferFee;
  const maxFee = new import_bn.default(nowFeeConfig.maximumFee.toString());
  const expirationTime = epochInfo.epoch < feeConfig.newerTransferFee.epoch ? (Number(feeConfig.newerTransferFee.epoch) * epochInfo.slotsInEpoch - epochInfo.absoluteSlot) * 400 / 1e3 : void 0;
  if (addFee) {
    if (nowFeeConfig.transferFeeBasisPoints === POINT) {
      const nowMaxFee = new import_bn.default(nowFeeConfig.maximumFee.toString());
      return {
        amount: amount.add(nowMaxFee),
        fee: nowMaxFee,
        expirationTime
      };
    } else {
      const _TAmount = BNDivCeil(amount.mul(new import_bn.default(POINT)), new import_bn.default(POINT - nowFeeConfig.transferFeeBasisPoints));
      const nowMaxFee = new import_bn.default(nowFeeConfig.maximumFee.toString());
      const TAmount = _TAmount.sub(amount).gt(nowMaxFee) ? amount.add(nowMaxFee) : _TAmount;
      const _fee = BNDivCeil(TAmount.mul(new import_bn.default(nowFeeConfig.transferFeeBasisPoints)), new import_bn.default(POINT));
      const fee = _fee.gt(maxFee) ? maxFee : _fee;
      return {
        amount: TAmount,
        fee,
        expirationTime
      };
    }
  } else {
    const _fee = BNDivCeil(amount.mul(new import_bn.default(nowFeeConfig.transferFeeBasisPoints)), new import_bn.default(POINT));
    const fee = _fee.gt(maxFee) ? maxFee : _fee;
    return {
      amount,
      fee,
      expirationTime
    };
  }
}
function minExpirationTime(expirationTime1, expirationTime2) {
  if (expirationTime1 === void 0)
    return expirationTime2;
  if (expirationTime2 === void 0)
    return expirationTime1;
  return Math.min(expirationTime1, expirationTime2);
}
function BNDivCeil(bn1, bn2) {
  const { div, mod } = bn1.divmod(bn2);
  if (mod.gt(new import_bn.default(0))) {
    return div.add(new import_bn.default(1));
  } else {
    return div;
  }
}
function ceilDivBN(amountA, amountB) {
  if (amountA.isZero())
    return new import_bn.default(0);
  const quotient = amountA.div(amountB);
  if (quotient.isZero())
    return new import_bn.default(1);
  const remainder = amountA.mod(amountB);
  if (remainder.gt(new import_bn.default(0))) {
    return quotient.add(new import_bn.default(1));
  }
  return quotient;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BNDivCeil,
  ceilDivBN,
  getTransferAmountFee,
  getTransferAmountFeeV2,
  minExpirationTime
});
//# sourceMappingURL=transfer.js.map