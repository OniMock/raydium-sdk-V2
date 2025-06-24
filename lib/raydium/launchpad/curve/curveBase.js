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

// src/raydium/launchpad/curve/curveBase.ts
var curveBase_exports = {};
__export(curveBase_exports, {
  CurveBase: () => CurveBase
});
module.exports = __toCommonJS(curveBase_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CurveBase
});
//# sourceMappingURL=curveBase.js.map