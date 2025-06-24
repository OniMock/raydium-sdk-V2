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

// src/raydium/clmm/utils/constants.ts
var constants_exports = {};
__export(constants_exports, {
  BIT_PRECISION: () => BIT_PRECISION,
  FEE_RATE_DENOMINATOR: () => FEE_RATE_DENOMINATOR,
  Fee: () => Fee,
  LOG_B_2_X32: () => LOG_B_2_X32,
  LOG_B_P_ERR_MARGIN_LOWER_X64: () => LOG_B_P_ERR_MARGIN_LOWER_X64,
  LOG_B_P_ERR_MARGIN_UPPER_X64: () => LOG_B_P_ERR_MARGIN_UPPER_X64,
  MAX_SQRT_PRICE_X64: () => MAX_SQRT_PRICE_X64,
  MAX_SQRT_PRICE_X64_SUB_ONE: () => MAX_SQRT_PRICE_X64_SUB_ONE,
  MAX_TICK: () => MAX_TICK,
  MIN_SQRT_PRICE_X64: () => MIN_SQRT_PRICE_X64,
  MIN_SQRT_PRICE_X64_ADD_ONE: () => MIN_SQRT_PRICE_X64_ADD_ONE,
  MIN_TICK: () => MIN_TICK,
  MaxU64: () => MaxU64,
  MaxUint128: () => MaxUint128,
  NEGATIVE_ONE: () => NEGATIVE_ONE,
  ONE: () => ONE,
  Q128: () => Q128,
  Q64: () => Q64,
  TICK_SPACINGS: () => TICK_SPACINGS,
  U64Resolution: () => U64Resolution,
  U64_IGNORE_RANGE: () => U64_IGNORE_RANGE,
  ZERO: () => ZERO,
  mockCreatePoolInfo: () => mockCreatePoolInfo,
  mockV3CreatePoolInfo: () => mockV3CreatePoolInfo
});
module.exports = __toCommonJS(constants_exports);
var import_bn = __toESM(require("bn.js"));
var ZERO = new import_bn.default(0);
var ONE = new import_bn.default(1);
var NEGATIVE_ONE = new import_bn.default(-1);
var Q64 = new import_bn.default(1).shln(64);
var Q128 = new import_bn.default(1).shln(128);
var MaxU64 = Q64.sub(ONE);
var U64Resolution = 64;
var MaxUint128 = Q128.subn(1);
var MIN_TICK = -443636;
var MAX_TICK = -MIN_TICK;
var MIN_SQRT_PRICE_X64 = new import_bn.default("4295048016");
var MAX_SQRT_PRICE_X64 = new import_bn.default("79226673521066979257578248091");
var MIN_SQRT_PRICE_X64_ADD_ONE = new import_bn.default("4295048017");
var MAX_SQRT_PRICE_X64_SUB_ONE = new import_bn.default("79226673521066979257578248090");
var BIT_PRECISION = 16;
var LOG_B_2_X32 = "59543866431248";
var LOG_B_P_ERR_MARGIN_LOWER_X64 = "184467440737095516";
var LOG_B_P_ERR_MARGIN_UPPER_X64 = "15793534762490258745";
var FEE_RATE_DENOMINATOR = new import_bn.default(10).pow(new import_bn.default(6));
var Fee = /* @__PURE__ */ ((Fee2) => {
  Fee2[Fee2["rate_500"] = 500] = "rate_500";
  Fee2[Fee2["rate_3000"] = 3e3] = "rate_3000";
  Fee2[Fee2["rate_10000"] = 1e4] = "rate_10000";
  return Fee2;
})(Fee || {});
var TICK_SPACINGS = {
  [500 /* rate_500 */]: 10,
  [3e3 /* rate_3000 */]: 60,
  [1e4 /* rate_10000 */]: 200
};
var mockCreatePoolInfo = {
  version: 6,
  liquidity: ZERO,
  tickCurrent: 0,
  feeGrowthGlobalX64A: ZERO,
  feeGrowthGlobalX64B: ZERO,
  protocolFeesTokenA: ZERO,
  protocolFeesTokenB: ZERO,
  swapInAmountTokenA: ZERO,
  swapOutAmountTokenB: ZERO,
  swapInAmountTokenB: ZERO,
  swapOutAmountTokenA: ZERO,
  tickArrayBitmap: [],
  rewardInfos: [],
  day: {
    volume: 0,
    volumeFee: 0,
    feeA: 0,
    feeB: 0,
    feeApr: 0,
    rewardApr: { A: 0, B: 0, C: 0 },
    apr: 0,
    priceMax: 0,
    priceMin: 0
  },
  week: {
    volume: 0,
    volumeFee: 0,
    feeA: 0,
    feeB: 0,
    feeApr: 0,
    rewardApr: { A: 0, B: 0, C: 0 },
    apr: 0,
    priceMax: 0,
    priceMin: 0
  },
  month: {
    volume: 0,
    volumeFee: 0,
    feeA: 0,
    feeB: 0,
    feeApr: 0,
    rewardApr: { A: 0, B: 0, C: 0 },
    apr: 0,
    priceMax: 0,
    priceMin: 0
  },
  tvl: 0
};
var mockV3CreatePoolInfo = {
  tvl: 0,
  volumeQuote: 0,
  mintAmountA: 0,
  mintAmountB: 0,
  rewardDefaultInfos: [],
  farmUpcomingCount: 0,
  farmOngoingCount: 0,
  farmFinishedCount: 0,
  day: {
    volume: 0,
    volumeQuote: 0,
    volumeFee: 0,
    apr: 0,
    feeApr: 0,
    priceMin: 0,
    priceMax: 0,
    rewardApr: [0]
  },
  week: {
    volume: 0,
    volumeQuote: 0,
    volumeFee: 0,
    apr: 0,
    feeApr: 0,
    priceMin: 0,
    priceMax: 0,
    rewardApr: [0]
  },
  month: {
    volume: 0,
    volumeQuote: 0,
    volumeFee: 0,
    apr: 0,
    feeApr: 0,
    priceMin: 0,
    priceMax: 0,
    rewardApr: [0]
  },
  pooltype: []
};
var U64_IGNORE_RANGE = new import_bn.default("18446744073700000000");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BIT_PRECISION,
  FEE_RATE_DENOMINATOR,
  Fee,
  LOG_B_2_X32,
  LOG_B_P_ERR_MARGIN_LOWER_X64,
  LOG_B_P_ERR_MARGIN_UPPER_X64,
  MAX_SQRT_PRICE_X64,
  MAX_SQRT_PRICE_X64_SUB_ONE,
  MAX_TICK,
  MIN_SQRT_PRICE_X64,
  MIN_SQRT_PRICE_X64_ADD_ONE,
  MIN_TICK,
  MaxU64,
  MaxUint128,
  NEGATIVE_ONE,
  ONE,
  Q128,
  Q64,
  TICK_SPACINGS,
  U64Resolution,
  U64_IGNORE_RANGE,
  ZERO,
  mockCreatePoolInfo,
  mockV3CreatePoolInfo
});
//# sourceMappingURL=constants.js.map