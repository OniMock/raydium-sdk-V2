// src/common/transfer.ts
import BN from "bn.js";
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
  const maxFee = new BN(nowFeeConfig.maximumFee.toString());
  const expirationTime = epochInfo.epoch < feeConfig.newerTransferFee.epoch ? (Number(feeConfig.newerTransferFee.epoch) * epochInfo.slotsInEpoch - epochInfo.absoluteSlot) * 400 / 1e3 : void 0;
  if (addFee) {
    if (nowFeeConfig.transferFeeBasisPoints === POINT) {
      const nowMaxFee = new BN(nowFeeConfig.maximumFee.toString());
      return {
        amount: amount.add(nowMaxFee),
        fee: nowMaxFee,
        expirationTime
      };
    } else {
      const _TAmount = BNDivCeil(amount.mul(new BN(POINT)), new BN(POINT - nowFeeConfig.transferFeeBasisPoints));
      const nowMaxFee = new BN(nowFeeConfig.maximumFee.toString());
      const TAmount = _TAmount.sub(amount).gt(nowMaxFee) ? amount.add(nowMaxFee) : _TAmount;
      const _fee = BNDivCeil(TAmount.mul(new BN(nowFeeConfig.transferFeeBasisPoints)), new BN(POINT));
      const fee = _fee.gt(maxFee) ? maxFee : _fee;
      return {
        amount: TAmount,
        fee,
        expirationTime
      };
    }
  } else {
    const _fee = BNDivCeil(amount.mul(new BN(nowFeeConfig.transferFeeBasisPoints)), new BN(POINT));
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
  const maxFee = new BN(nowFeeConfig.maximumFee.toString());
  const expirationTime = epochInfo.epoch < feeConfig.newerTransferFee.epoch ? (Number(feeConfig.newerTransferFee.epoch) * epochInfo.slotsInEpoch - epochInfo.absoluteSlot) * 400 / 1e3 : void 0;
  if (addFee) {
    if (nowFeeConfig.transferFeeBasisPoints === POINT) {
      const nowMaxFee = new BN(nowFeeConfig.maximumFee.toString());
      return {
        amount: amount.add(nowMaxFee),
        fee: nowMaxFee,
        expirationTime
      };
    } else {
      const _TAmount = BNDivCeil(amount.mul(new BN(POINT)), new BN(POINT - nowFeeConfig.transferFeeBasisPoints));
      const nowMaxFee = new BN(nowFeeConfig.maximumFee.toString());
      const TAmount = _TAmount.sub(amount).gt(nowMaxFee) ? amount.add(nowMaxFee) : _TAmount;
      const _fee = BNDivCeil(TAmount.mul(new BN(nowFeeConfig.transferFeeBasisPoints)), new BN(POINT));
      const fee = _fee.gt(maxFee) ? maxFee : _fee;
      return {
        amount: TAmount,
        fee,
        expirationTime
      };
    }
  } else {
    const _fee = BNDivCeil(amount.mul(new BN(nowFeeConfig.transferFeeBasisPoints)), new BN(POINT));
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
  if (mod.gt(new BN(0))) {
    return div.add(new BN(1));
  } else {
    return div;
  }
}
function ceilDivBN(amountA, amountB) {
  if (amountA.isZero())
    return new BN(0);
  const quotient = amountA.div(amountB);
  if (quotient.isZero())
    return new BN(1);
  const remainder = amountA.mod(amountB);
  if (remainder.gt(new BN(0))) {
    return quotient.add(new BN(1));
  }
  return quotient;
}
export {
  BNDivCeil,
  ceilDivBN,
  getTransferAmountFee,
  getTransferAmountFeeV2,
  minExpirationTime
};
//# sourceMappingURL=transfer.mjs.map