// src/raydium/launchpad/curve/curveBase.ts
var CurveBase = class {
  static getPoolInitPriceByPool({
    poolInfo,
    decimalA,
    decimalB
  }) {
    throw Error();
  }
  static getPoolInitPriceByInit({
    a,
    b,
    decimalA,
    decimalB
  }) {
    throw Error();
  }
  static getPoolPrice({
    poolInfo,
    decimalA,
    decimalB
  }) {
    throw Error();
  }
  static getPoolEndPrice({
    supply,
    totalSell,
    totalLockedAmount,
    totalFundRaising,
    migrateFee,
    decimalA,
    decimalB
  }) {
    throw Error();
  }
  static getPoolEndPriceReal({
    poolInfo,
    decimalA,
    decimalB
  }) {
    throw Error();
  }
  static getInitParam({
    supply,
    totalFundRaising,
    totalSell,
    totalLockedAmount,
    migrateFee
  }) {
    throw Error();
  }
  static buyExactIn({ poolInfo, amount }) {
    throw Error();
  }
  static buyExactOut({ poolInfo, amount }) {
    throw Error();
  }
  static sellExactIn({ poolInfo, amount }) {
    throw Error();
  }
  static sellExactOut({ poolInfo, amount }) {
    throw Error();
  }
};
export {
  CurveBase
};
//# sourceMappingURL=curveBase.mjs.map