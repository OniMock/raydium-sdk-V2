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

// src/common/txTool/txType.ts
var txType_exports = {};
__export(txType_exports, {
  InstructionType: () => InstructionType,
  TxVersion: () => TxVersion
});
module.exports = __toCommonJS(txType_exports);
var TxVersion = /* @__PURE__ */ ((TxVersion2) => {
  TxVersion2[TxVersion2["V0"] = 0] = "V0";
  TxVersion2[TxVersion2["LEGACY"] = 1] = "LEGACY";
  return TxVersion2;
})(TxVersion || {});
var InstructionType = {
  CreateAccount: "CreateAccount",
  InitAccount: "InitAccount",
  CreateATA: "CreateATA",
  CloseAccount: "CloseAccount",
  TransferAmount: "TransferAmount",
  InitMint: "InitMint",
  MintTo: "MintTo",
  InitMarket: "InitMarket",
  Util1216OwnerClaim: "Util1216OwnerClaim",
  SetComputeUnitPrice: "SetComputeUnitPrice",
  SetComputeUnitLimit: "SetComputeUnitLimit",
  ClmmCreatePool: "ClmmCreatePool",
  ClmmOpenPosition: "ClmmOpenPosition",
  ClmmIncreasePosition: "ClmmIncreasePosition",
  ClmmDecreasePosition: "ClmmDecreasePosition",
  ClmmClosePosition: "ClmmClosePosition",
  ClmmSwapBaseIn: "ClmmSwapBaseIn",
  ClmmSwapBaseOut: "ClmmSwapBaseOut",
  ClmmInitReward: "ClmmInitReward",
  ClmmSetReward: "ClmmSetReward",
  ClmmCollectReward: "ClmmCollectReward",
  ClmmLockPosition: "ClmmLockPosition",
  ClmmHarvestLockPosition: "ClmmHarvestLockPosition",
  AmmV4Swap: "AmmV4Swap",
  AmmV4AddLiquidity: "AmmV4AddLiquidity",
  AmmV4RemoveLiquidity: "AmmV4RemoveLiquidity",
  AmmV4SimulatePoolInfo: "AmmV4SimulatePoolInfo",
  AmmV4SwapBaseIn: "AmmV4SwapBaseIn",
  AmmV4SwapBaseOut: "AmmV4SwapBaseOut",
  AmmV4CreatePool: "AmmV4CreatePool",
  AmmV4InitPool: "AmmV4InitPool",
  AmmV5AddLiquidity: "AmmV5AddLiquidity",
  AmmV5RemoveLiquidity: "AmmV5RemoveLiquidity",
  AmmV5SimulatePoolInfo: "AmmV5SimulatePoolInfo",
  AmmV5SwapBaseIn: "AmmV5SwapBaseIn",
  AmmV5SwapBaseOut: "AmmV5SwapBaseOut",
  RouteSwap: "RouteSwap",
  RouteSwap1: "RouteSwap1",
  RouteSwap2: "RouteSwap2",
  FarmV3Deposit: "FarmV3Deposit",
  FarmV3Withdraw: "FarmV3Withdraw",
  FarmV3CreateLedger: "FarmV3CreateLedger",
  FarmV4Withdraw: "FarmV4Withdraw",
  FarmV5Deposit: "FarmV5Deposit",
  FarmV5Withdraw: "FarmV5Withdraw",
  FarmV5CreateLedger: "FarmV5CreateLedger",
  FarmV6Deposit: "FarmV6Deposit",
  FarmV6Withdraw: "FarmV6Withdraw",
  FarmV6Create: "FarmV6Create",
  FarmV6Restart: "FarmV6Restart",
  FarmV6CreatorAddReward: "FarmV6CreatorAddReward",
  FarmV6CreatorWithdraw: "FarmV6CreatorWithdraw",
  CpmmCreatePool: "CpmmCreatePool",
  CpmmAddLiquidity: "CpmmAddLiquidity",
  CpmmWithdrawLiquidity: "CpmmWithdrawLiquidity",
  CpmmSwapBaseIn: "CpmmSwapBaseIn",
  CpmmSwapBaseOut: "CpmmSwapBaseOut",
  CpmmLockLp: "CpmmLockLp",
  CpmmCollectLockFee: "CpmmCollectLockFee",
  TransferTip: "TransferTip",
  NonceAccount: "NonceAccount"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InstructionType,
  TxVersion
});
//# sourceMappingURL=txType.js.map