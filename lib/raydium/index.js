var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target, mod2));
var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/raydium/index.ts
var raydium_exports = {};
__export(raydium_exports, {
  AMM_CONFIG_SEED: () => AMM_CONFIG_SEED,
  BIT_PRECISION: () => BIT_PRECISION,
  Clmm: () => Clmm,
  ClmmConfigLayout: () => ClmmConfigLayout,
  ClmmInstrument: () => ClmmInstrument,
  ConstantProductCurve: () => ConstantProductCurve,
  CpmmConfigInfoLayout: () => CpmmConfigInfoLayout,
  CpmmFee: () => CpmmFee,
  CpmmPoolInfoLayout: () => CpmmPoolInfoLayout,
  Curve: () => Curve,
  CurveBase: () => CurveBase,
  CurveCalculator: () => CurveCalculator,
  DataElement: () => DataElement,
  EXTENSION_TICKARRAY_BITMAP_SIZE: () => EXTENSION_TICKARRAY_BITMAP_SIZE,
  FARM_LOCK_MINT: () => FARM_LOCK_MINT,
  FARM_LOCK_VAULT: () => FARM_LOCK_VAULT,
  FARM_PROGRAM_TO_VERSION: () => FARM_PROGRAM_TO_VERSION,
  FARM_VERSION_TO_LEDGER_LAYOUT: () => FARM_VERSION_TO_LEDGER_LAYOUT,
  FARM_VERSION_TO_STATE_LAYOUT: () => FARM_VERSION_TO_STATE_LAYOUT,
  FEE_RATE_DENOMINATOR: () => FEE_RATE_DENOMINATOR,
  FETCH_TICKARRAY_COUNT: () => FETCH_TICKARRAY_COUNT,
  Fee: () => Fee,
  FixedPriceCurve: () => FixedPriceCurve,
  LAUNCHPAD_AUTH_SEED: () => LAUNCHPAD_AUTH_SEED,
  LAUNCHPAD_CONFIG_SEED: () => LAUNCHPAD_CONFIG_SEED,
  LAUNCHPAD_POOL_PLATFORM_SEED: () => LAUNCHPAD_POOL_PLATFORM_SEED,
  LAUNCHPAD_POOL_SEED: () => LAUNCHPAD_POOL_SEED,
  LAUNCHPAD_POOL_VAULT_SEED: () => LAUNCHPAD_POOL_VAULT_SEED,
  LAUNCHPAD_POOL_VESTING_SEED: () => LAUNCHPAD_POOL_VESTING_SEED,
  LIQUIDITY_FEES_DENOMINATOR: () => LIQUIDITY_FEES_DENOMINATOR,
  LIQUIDITY_FEES_NUMERATOR: () => LIQUIDITY_FEES_NUMERATOR,
  LIQUIDITY_VERSION_TO_SERUM_VERSION: () => LIQUIDITY_VERSION_TO_SERUM_VERSION,
  LIQUIDITY_VERSION_TO_STATE_LAYOUT: () => LIQUIDITY_VERSION_TO_STATE_LAYOUT,
  LOCK_LIQUIDITY_SEED: () => LOCK_LIQUIDITY_SEED,
  LOG_B_2_X32: () => LOG_B_2_X32,
  LOG_B_P_ERR_MARGIN_LOWER_X64: () => LOG_B_P_ERR_MARGIN_LOWER_X64,
  LOG_B_P_ERR_MARGIN_UPPER_X64: () => LOG_B_P_ERR_MARGIN_UPPER_X64,
  LaunchPadConstantProductCurve: () => LaunchPadConstantProductCurve,
  LaunchpadConfig: () => LaunchpadConfig,
  LaunchpadPool: () => LaunchpadPool,
  LaunchpadPoolInitParam: () => LaunchpadPoolInitParam,
  LaunchpadVesting: () => LaunchpadVesting,
  LaunchpadVestingSchedule: () => LaunchpadVestingSchedule,
  LinearPriceCurve: () => LinearPriceCurve,
  LiquidityMath: () => LiquidityMath,
  LockClPositionLayoutV2: () => LockClPositionLayoutV2,
  LockPositionLayout: () => LockPositionLayout,
  MARKET_STATE_LAYOUT_V2: () => MARKET_STATE_LAYOUT_V2,
  MARKET_STATE_LAYOUT_V3: () => MARKET_STATE_LAYOUT_V3,
  MARKET_VERSION_TO_STATE_LAYOUT: () => MARKET_VERSION_TO_STATE_LAYOUT,
  MAX_SQRT_PRICE_X64: () => MAX_SQRT_PRICE_X64,
  MAX_SQRT_PRICE_X64_SUB_ONE: () => MAX_SQRT_PRICE_X64_SUB_ONE,
  MAX_TICK: () => MAX_TICK,
  MIN_SQRT_PRICE_X64: () => MIN_SQRT_PRICE_X64,
  MIN_SQRT_PRICE_X64_ADD_ONE: () => MIN_SQRT_PRICE_X64_ADD_ONE,
  MIN_TICK: () => MIN_TICK,
  MODEL_DATA_PUBKEY: () => MODEL_DATA_PUBKEY,
  Market: () => Market,
  MathLaunch: () => MathLaunch,
  MathUtil: () => MathUtil,
  MaxU64: () => MaxU64,
  MaxUint128: () => MaxUint128,
  NEGATIVE_ONE: () => NEGATIVE_ONE,
  OBSERVATION_SEED: () => OBSERVATION_SEED,
  ONE: () => ONE,
  OPERATION_SEED: () => OPERATION_SEED,
  ObservationInfoLayout: () => ObservationInfoLayout,
  ObservationLayout: () => ObservationLayout,
  OperationLayout: () => OperationLayout,
  POOL_LOCK_ID_SEED: () => POOL_LOCK_ID_SEED,
  POOL_REWARD_VAULT_SEED: () => POOL_REWARD_VAULT_SEED,
  POOL_SEED: () => POOL_SEED,
  POOL_TICK_ARRAY_BITMAP_SEED: () => POOL_TICK_ARRAY_BITMAP_SEED,
  POOL_VAULT_SEED: () => POOL_VAULT_SEED,
  POSITION_SEED: () => POSITION_SEED,
  PlatformConfig: () => PlatformConfig,
  PoolInfoLayout: () => PoolInfoLayout,
  PoolUtils: () => PoolUtils,
  PositionInfoLayout: () => PositionInfoLayout,
  PositionRewardInfoLayout: () => PositionRewardInfoLayout,
  PositionUtils: () => PositionUtils,
  ProtocolPositionLayout: () => ProtocolPositionLayout,
  Q128: () => Q128,
  Q64: () => Q64,
  Raydium: () => Raydium,
  RewardInfo: () => RewardInfo,
  RoundDirection: () => RoundDirection,
  SERUM_PROGRAMID_TO_VERSION: () => SERUM_PROGRAMID_TO_VERSION,
  SERUM_VERSION_TO_PROGRAMID: () => SERUM_VERSION_TO_PROGRAMID,
  SOL_INFO: () => SOL_INFO,
  SPL_MINT_LAYOUT: () => SPL_MINT_LAYOUT,
  SUPPORT_MINT_SEED: () => SUPPORT_MINT_SEED,
  SqrtPriceMath: () => SqrtPriceMath,
  StableLayout: () => StableLayout,
  SwapMath: () => SwapMath,
  TICK_ARRAY_BITMAP_SIZE: () => TICK_ARRAY_BITMAP_SIZE,
  TICK_ARRAY_SEED: () => TICK_ARRAY_SEED,
  TICK_ARRAY_SIZE: () => TICK_ARRAY_SIZE,
  TICK_SPACINGS: () => TICK_SPACINGS,
  TOKEN_WSOL: () => TOKEN_WSOL,
  TickArrayBitmap: () => TickArrayBitmap,
  TickArrayBitmapExtensionLayout: () => TickArrayBitmapExtensionLayout,
  TickArrayBitmapExtensionUtils: () => TickArrayBitmapExtensionUtils,
  TickArrayLayout: () => TickArrayLayout,
  TickLayout: () => TickLayout,
  TickMath: () => TickMath,
  TickQuery: () => TickQuery,
  TickUtils: () => TickUtils,
  U64Resolution: () => U64Resolution,
  U64_IGNORE_RANGE: () => U64_IGNORE_RANGE,
  Voter: () => Voter,
  VoterDepositEntry: () => VoterDepositEntry,
  VoterLockup: () => VoterLockup,
  VoterRegistrar: () => VoterRegistrar,
  VoterVotingMintConfig: () => VoterVotingMintConfig,
  ZERO: () => ZERO,
  addLiquidityLayout: () => addLiquidityLayout,
  anchorDataBuf: () => anchorDataBuf4,
  associatedLedgerAccountLayout: () => associatedLedgerAccountLayout,
  buyExactInInstruction: () => buyExactInInstruction,
  buyExactOutInstruction: () => buyExactOutInstruction,
  calFarmRewardAmount: () => calFarmRewardAmount,
  checkPoolToAmm: () => checkPoolToAmm,
  claimLayout: () => claimLayout,
  claimPlatformFee: () => claimPlatformFee,
  claimVestedToken: () => claimVestedToken,
  clmmComputeInfoToApiInfo: () => clmmComputeInfoToApiInfo,
  closeAccountInstruction: () => closeAccountInstruction,
  collectCpFeeInstruction: () => collectCpFeeInstruction,
  cpmmLockPositionInstruction: () => cpmmLockPositionInstruction,
  createAssociatedLedgerAccountInstruction: () => createAssociatedLedgerAccountInstruction,
  createPlatformConfig: () => createPlatformConfig,
  createPoolFeeLayout: () => createPoolFeeLayout,
  createPoolV4InstructionV2: () => createPoolV4InstructionV2,
  createPoolV4Layout: () => createPoolV4Layout,
  createVestingAccount: () => createVestingAccount,
  createWSolAccountInstructions: () => createWSolAccountInstructions,
  dwLayout: () => dwLayout,
  farmAddRewardLayout: () => farmAddRewardLayout,
  farmLedgerLayoutV3_1: () => farmLedgerLayoutV3_1,
  farmLedgerLayoutV3_2: () => farmLedgerLayoutV3_2,
  farmLedgerLayoutV5_1: () => farmLedgerLayoutV5_1,
  farmLedgerLayoutV5_2: () => farmLedgerLayoutV5_2,
  farmLedgerLayoutV6_1: () => farmLedgerLayoutV6_1,
  farmRewardInfoToConfig: () => farmRewardInfoToConfig,
  farmRewardLayout: () => farmRewardLayout,
  farmRewardRestartLayout: () => farmRewardRestartLayout,
  farmRewardTimeInfoLayout: () => farmRewardTimeInfoLayout,
  farmStateV3Layout: () => farmStateV3Layout,
  farmStateV5Layout: () => farmStateV5Layout,
  farmStateV6Layout: () => farmStateV6Layout,
  fetchMultipleFarmInfoAndUpdate: () => fetchMultipleFarmInfoAndUpdate,
  fetchMultipleInfo: () => fetchMultipleInfo,
  fixedSwapInLayout: () => fixedSwapInLayout,
  fixedSwapOutLayout: () => fixedSwapOutLayout,
  formatLayout: () => formatLayout,
  generatePubKey: () => generatePubKey,
  getAssociatedAuthority: () => getAssociatedAuthority,
  getAssociatedConfigId: () => getAssociatedConfigId,
  getAssociatedLedgerAccount: () => getAssociatedLedgerAccount,
  getAssociatedLedgerPoolAccount: () => getAssociatedLedgerPoolAccount,
  getAssociatedOpenOrders: () => getAssociatedOpenOrders,
  getAssociatedPoolKeys: () => getAssociatedPoolKeys,
  getCpLockPda: () => getCpLockPda,
  getCpmmPdaAmmConfigId: () => getCpmmPdaAmmConfigId,
  getCpmmPdaPoolId: () => getCpmmPdaPoolId,
  getCreatePoolKeys: () => getCreatePoolKeys,
  getDepositEntryIndex: () => getDepositEntryIndex,
  getDxByDyBaseIn: () => getDxByDyBaseIn,
  getDyByDxBaseIn: () => getDyByDxBaseIn,
  getFarmLedgerLayout: () => getFarmLedgerLayout,
  getFarmStateLayout: () => getFarmStateLayout,
  getLiquidityAssociatedAuthority: () => getLiquidityAssociatedAuthority,
  getLiquidityAssociatedId: () => getLiquidityAssociatedId,
  getLiquidityFromAmounts: () => getLiquidityFromAmounts,
  getPdaAmmConfigId: () => getPdaAmmConfigId,
  getPdaCpiEvent: () => getPdaCpiEvent,
  getPdaExBitmapAccount: () => getPdaExBitmapAccount,
  getPdaLaunchpadAuth: () => getPdaLaunchpadAuth,
  getPdaLaunchpadConfigId: () => getPdaLaunchpadConfigId,
  getPdaLaunchpadPoolId: () => getPdaLaunchpadPoolId,
  getPdaLaunchpadVaultId: () => getPdaLaunchpadVaultId,
  getPdaLockClPositionIdV2: () => getPdaLockClPositionIdV2,
  getPdaLockPositionId: () => getPdaLockPositionId,
  getPdaLpMint: () => getPdaLpMint,
  getPdaMetadataKey: () => getPdaMetadataKey,
  getPdaMintExAccount: () => getPdaMintExAccount,
  getPdaObservationAccount: () => getPdaObservationAccount,
  getPdaObservationId: () => getPdaObservationId,
  getPdaOperationAccount: () => getPdaOperationAccount,
  getPdaPersonalPositionAddress: () => getPdaPersonalPositionAddress,
  getPdaPlatformId: () => getPdaPlatformId,
  getPdaPoolAuthority: () => getPdaPoolAuthority,
  getPdaPoolId: () => getPdaPoolId,
  getPdaPoolRewardVaulId: () => getPdaPoolRewardVaulId,
  getPdaPoolVaultId: () => getPdaPoolVaultId,
  getPdaProtocolPositionAddress: () => getPdaProtocolPositionAddress,
  getPdaTickArrayAddress: () => getPdaTickArrayAddress,
  getPdaVault: () => getPdaVault,
  getPdaVestId: () => getPdaVestId,
  getRegistrarAddress: () => getRegistrarAddress,
  getStablePrice: () => getStablePrice,
  getTokenOwnerRecordAddress: () => getTokenOwnerRecordAddress,
  getVoterAddress: () => getVoterAddress,
  getVoterWeightRecordAddress: () => getVoterWeightRecordAddress,
  getVotingMintAuthority: () => getVotingMintAuthority,
  getVotingTokenMint: () => getVotingTokenMint,
  governanceCreateTokenOwnerRecord: () => governanceCreateTokenOwnerRecord,
  i16ToBytes: () => i16ToBytes,
  i32ToBytes: () => i32ToBytes,
  initPoolLayout: () => initPoolLayout,
  initTokenAccountInstruction: () => initTokenAccountInstruction,
  initialize: () => initialize,
  initializeMarket: () => initializeMarket,
  isValidFarmVersion: () => isValidFarmVersion,
  isZero: () => isZero,
  judgeFarmType: () => judgeFarmType,
  leadingZeros: () => leadingZeros,
  leastSignificantBit: () => leastSignificantBit,
  liquidityStateV4Layout: () => liquidityStateV4Layout,
  liquidityStateV5Layout: () => liquidityStateV5Layout,
  makeAMMSwapInstruction: () => makeAMMSwapInstruction,
  makeAddLiquidityInstruction: () => makeAddLiquidityInstruction,
  makeAddNewRewardInstruction: () => makeAddNewRewardInstruction,
  makeClaimInstruction: () => makeClaimInstruction,
  makeClaimInstructionV4: () => makeClaimInstructionV4,
  makeCpmmLockInstruction: () => makeCpmmLockInstruction,
  makeCreateCpmmPoolInInstruction: () => makeCreateCpmmPoolInInstruction,
  makeCreateFarmInstruction: () => makeCreateFarmInstruction,
  makeCreateMarketInstruction: () => makeCreateMarketInstruction,
  makeCreatorWithdrawFarmRewardInstruction: () => makeCreatorWithdrawFarmRewardInstruction,
  makeDepositCpmmInInstruction: () => makeDepositCpmmInInstruction,
  makeDepositInstructionV3: () => makeDepositInstructionV3,
  makeDepositInstructionV5: () => makeDepositInstructionV5,
  makeDepositInstructionV6: () => makeDepositInstructionV6,
  makeDepositTokenInstruction: () => makeDepositTokenInstruction,
  makeDepositWithdrawInstruction: () => makeDepositWithdrawInstruction,
  makeInitPoolInstructionV4: () => makeInitPoolInstructionV4,
  makePurchaseInstruction: () => makePurchaseInstruction,
  makeRestartRewardInstruction: () => makeRestartRewardInstruction,
  makeSimulatePoolInfoInstruction: () => makeSimulatePoolInfoInstruction,
  makeSwapCpmmBaseInInstruction: () => makeSwapCpmmBaseInInstruction,
  makeSwapCpmmBaseOutInstruction: () => makeSwapCpmmBaseOutInstruction,
  makeSwapFixedInInstruction: () => makeSwapFixedInInstruction,
  makeSwapFixedOutInstruction: () => makeSwapFixedOutInstruction,
  makeSwapInstruction: () => makeSwapInstruction,
  makeTransferInstruction: () => makeTransferInstruction,
  makeWithdrawCpmmInInstruction: () => makeWithdrawCpmmInInstruction,
  makeWithdrawInstructionV3: () => makeWithdrawInstructionV3,
  makeWithdrawInstructionV4: () => makeWithdrawInstructionV4,
  makeWithdrawInstructionV5: () => makeWithdrawInstructionV5,
  makeWithdrawInstructionV6: () => makeWithdrawInstructionV6,
  makeWithdrawTokenInstruction: () => makeWithdrawTokenInstruction,
  mockCreatePoolInfo: () => mockCreatePoolInfo,
  mockV3CreatePoolInfo: () => mockV3CreatePoolInfo,
  modelDataInfoLayout: () => modelDataInfoLayout,
  mostSignificantBit: () => mostSignificantBit,
  parseTokenAccountResp: () => parseTokenAccountResp,
  parseTokenInfo: () => parseTokenInfo,
  poolTypeV6: () => poolTypeV6,
  purchaseLayout: () => purchaseLayout,
  realFarmStateV3Layout: () => realFarmStateV3Layout,
  realFarmStateV5Layout: () => realFarmStateV5Layout,
  realFarmV6Layout: () => realFarmV6Layout,
  removeLiquidityInstruction: () => removeLiquidityInstruction,
  removeLiquidityLayout: () => removeLiquidityLayout,
  route1Instruction: () => route1Instruction,
  route2Instruction: () => route2Instruction,
  routeInstruction: () => routeInstruction,
  sellExactInInstruction: () => sellExactInInstruction,
  sellExactOut: () => sellExactOut,
  simulatePoolInfoInstruction: () => simulatePoolInfoInstruction,
  solToWSolToken: () => solToWSolToken,
  splAccountLayout: () => splAccountLayout,
  swapBaseInAutoAccount: () => swapBaseInAutoAccount,
  swapBaseOutAutoAccount: () => swapBaseOutAutoAccount,
  toAmmComputePoolInfo: () => toAmmComputePoolInfo,
  toApiV3Token: () => toApiV3Token,
  toFeeConfig: () => toFeeConfig,
  toToken: () => toToken,
  toTokenAmount: () => toTokenAmount,
  toTokenInfo: () => toTokenInfo,
  trailingZeros: () => trailingZeros,
  u16ToBytes: () => u16ToBytes,
  u32ToBytes: () => u32ToBytes,
  u8ToBytes: () => u8ToBytes,
  unionArr: () => unionArr,
  updateFarmPoolInfo: () => updateFarmPoolInfo,
  updatePlatformConfig: () => updatePlatformConfig,
  validateFarmRewards: () => validateFarmRewards,
  voterStakeRegistryCreateDepositEntry: () => voterStakeRegistryCreateDepositEntry,
  voterStakeRegistryCreateVoter: () => voterStakeRegistryCreateVoter,
  voterStakeRegistryDeposit: () => voterStakeRegistryDeposit,
  voterStakeRegistryUpdateVoterWeightRecord: () => voterStakeRegistryUpdateVoterWeightRecord,
  voterStakeRegistryWithdraw: () => voterStakeRegistryWithdraw,
  wSolToSolToken: () => wSolToSolToken,
  withdrawRewardLayout: () => withdrawRewardLayout
});
module.exports = __toCommonJS(raydium_exports);

// src/raydium/raydium.ts
var import_lodash2 = require("lodash");

// src/api/api.ts
var import_axios2 = __toESM(require("axios"));

// src/common/accountInfo.ts
var import_web3 = require("@solana/web3.js");

// src/common/logger.ts
var import_lodash = require("lodash");
var Logger = class {
  logLevel;
  name;
  constructor(params) {
    this.logLevel = params.logLevel !== void 0 ? params.logLevel : 0 /* Error */;
    this.name = params.name;
  }
  set level(logLevel) {
    this.logLevel = logLevel;
  }
  get time() {
    return Date.now().toString();
  }
  get moduleName() {
    return this.name;
  }
  isLogLevel(level) {
    return level <= this.logLevel;
  }
  error(...props) {
    if (!this.isLogLevel(0 /* Error */))
      return this;
    console.error(this.time, this.name, "sdk logger error", ...props);
    return this;
  }
  logWithError(...props) {
    const msg = props.map((arg) => typeof arg === "object" ? JSON.stringify(arg) : arg).join(", ");
    throw new Error(msg);
  }
  warning(...props) {
    if (!this.isLogLevel(1 /* Warning */))
      return this;
    console.warn(this.time, this.name, "sdk logger warning", ...props);
    return this;
  }
  info(...props) {
    if (!this.isLogLevel(2 /* Info */))
      return this;
    console.info(this.time, this.name, "sdk logger info", ...props);
    return this;
  }
  debug(...props) {
    if (!this.isLogLevel(3 /* Debug */))
      return this;
    console.debug(this.time, this.name, "sdk logger debug", ...props);
    return this;
  }
};
var moduleLoggers = {};
var moduleLevels = {};
function createLogger(moduleName) {
  let logger16 = (0, import_lodash.get)(moduleLoggers, moduleName);
  if (!logger16) {
    const logLevel = (0, import_lodash.get)(moduleLevels, moduleName);
    logger16 = new Logger({ name: moduleName, logLevel });
    (0, import_lodash.set)(moduleLoggers, moduleName, logger16);
  }
  return logger16;
}

// src/common/accountInfo.ts
var import_spl_token = require("@solana/spl-token");
var logger = createLogger("Raydium_accountInfo_util");
async function getMultipleAccountsInfo(connection, publicKeys, config2) {
  const {
    batchRequest,
    commitment = "confirmed",
    chunkCount = 100
  } = {
    batchRequest: false,
    ...config2
  };
  const chunkedKeys = chunkArray(publicKeys, chunkCount);
  let results = new Array(chunkedKeys.length).fill([]);
  if (batchRequest) {
    const batch = chunkedKeys.map((keys) => {
      const args = connection._buildArgs([keys.map((key) => key.toBase58())], commitment, "base64");
      return {
        methodName: "getMultipleAccounts",
        args
      };
    });
    const _batch = chunkArray(batch, 10);
    const unsafeResponse = await (await Promise.all(_batch.map(async (i) => await connection._rpcBatchRequest(i)))).flat();
    results = unsafeResponse.map((unsafeRes) => {
      if (unsafeRes.error)
        logger.logWithError(`failed to get info for multiple accounts, RPC_ERROR, ${unsafeRes.error.message}`);
      return unsafeRes.result.value.map((accountInfo) => {
        if (accountInfo) {
          const { data, executable, lamports, owner, rentEpoch } = accountInfo;
          if (data.length !== 2 && data[1] !== "base64")
            logger.logWithError(`info must be base64 encoded, RPC_ERROR`);
          return {
            data: Buffer.from(data[0], "base64"),
            executable,
            lamports,
            owner: new import_web3.PublicKey(owner),
            rentEpoch
          };
        }
        return null;
      });
    });
  } else {
    try {
      results = await Promise.all(chunkedKeys.map((keys) => connection.getMultipleAccountsInfo(keys, commitment)));
    } catch (error) {
      if (error instanceof Error) {
        logger.logWithError(`failed to get info for multiple accounts, RPC_ERROR, ${error.message}`);
      }
    }
  }
  return results.flat();
}
async function getMultipleAccountsInfoWithCustomFlags(connection, publicKeysWithCustomFlag, config2) {
  const multipleAccountsInfo = await getMultipleAccountsInfo(connection, publicKeysWithCustomFlag.map((o) => o.pubkey), config2);
  return publicKeysWithCustomFlag.map((o, idx) => ({ ...o, accountInfo: multipleAccountsInfo[idx] }));
}
async function fetchMultipleMintInfos({
  connection,
  mints,
  config: config2
}) {
  if (mints.length === 0)
    return {};
  const mintInfos = await getMultipleAccountsInfoWithCustomFlags(connection, mints.map((i) => ({ pubkey: solToWSol(i) })), config2);
  const mintK = {};
  for (const i of mintInfos) {
    if (!i.accountInfo || i.accountInfo.data.length < import_spl_token.MINT_SIZE) {
      console.log("invalid mint account", i.pubkey.toBase58());
      continue;
    }
    const t = (0, import_spl_token.unpackMint)(i.pubkey, i.accountInfo, i.accountInfo?.owner);
    mintK[i.pubkey.toString()] = {
      ...t,
      programId: i.accountInfo?.owner || import_spl_token.TOKEN_PROGRAM_ID,
      feeConfig: (0, import_spl_token.getTransferFeeConfig)(t) ?? void 0
    };
  }
  mintK[import_web3.PublicKey.default.toBase58()] = mintK[WSOLMint.toBase58()];
  return mintK;
}

// src/common/bignumber.ts
var import_bn6 = __toESM(require("bn.js"));

// node_modules/decimal.js/decimal.mjs
var EXP_LIMIT = 9e15;
var MAX_DIGITS = 1e9;
var NUMERALS = "0123456789abcdef";
var LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
var PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
var DEFAULTS = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -EXP_LIMIT,
  maxE: EXP_LIMIT,
  crypto: false
};
var inexact;
var quadrant;
var external = true;
var decimalError = "[DecimalError] ";
var invalidArgument = decimalError + "Invalid argument: ";
var precisionLimitExceeded = decimalError + "Precision limit exceeded";
var cryptoUnavailable = decimalError + "crypto unavailable";
var tag = "[object Decimal]";
var mathfloor = Math.floor;
var mathpow = Math.pow;
var isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
var isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
var isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
var isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
var BASE = 1e7;
var LOG_BASE = 7;
var MAX_SAFE_INTEGER = 9007199254740991;
var LN10_PRECISION = LN10.length - 1;
var PI_PRECISION = PI.length - 1;
var P = { toStringTag: tag };
P.absoluteValue = P.abs = function() {
  var x = new this.constructor(this);
  if (x.s < 0)
    x.s = 1;
  return finalise(x);
};
P.ceil = function() {
  return finalise(new this.constructor(this), this.e + 1, 2);
};
P.clampedTo = P.clamp = function(min2, max2) {
  var k, x = this, Ctor = x.constructor;
  min2 = new Ctor(min2);
  max2 = new Ctor(max2);
  if (!min2.s || !max2.s)
    return new Ctor(NaN);
  if (min2.gt(max2))
    throw Error(invalidArgument + max2);
  k = x.cmp(min2);
  return k < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
};
P.comparedTo = P.cmp = function(y) {
  var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
  if (!xd || !yd) {
    return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
  }
  if (!xd[0] || !yd[0])
    return xd[0] ? xs : yd[0] ? -ys : 0;
  if (xs !== ys)
    return xs;
  if (x.e !== y.e)
    return x.e > y.e ^ xs < 0 ? 1 : -1;
  xdL = xd.length;
  ydL = yd.length;
  for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
    if (xd[i] !== yd[i])
      return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
  }
  return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
};
P.cosine = P.cos = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.d)
    return new Ctor(NaN);
  if (!x.d[0])
    return new Ctor(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
};
P.cubeRoot = P.cbrt = function() {
  var e, m, n, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  external = false;
  s = x.s * mathpow(x.s * x, 1 / 3);
  if (!s || Math.abs(s) == 1 / 0) {
    n = digitsToString(x.d);
    e = x.e;
    if (s = (e - n.length + 1) % 3)
      n += s == 1 || s == -2 ? "0" : "00";
    s = mathpow(n, 1 / 3);
    e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
    r.s = x.s;
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t = r;
    t3 = t.times(t).times(t);
    t3plusx = t3.plus(x);
    r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.decimalPlaces = P.dp = function() {
  var w, d = this.d, n = NaN;
  if (d) {
    w = d.length - 1;
    n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
    w = d[w];
    if (w)
      for (; w % 10 == 0; w /= 10)
        n--;
    if (n < 0)
      n = 0;
  }
  return n;
};
P.dividedBy = P.div = function(y) {
  return divide(this, new this.constructor(y));
};
P.dividedToIntegerBy = P.divToInt = function(y) {
  var x = this, Ctor = x.constructor;
  return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
};
P.equals = P.eq = function(y) {
  return this.cmp(y) === 0;
};
P.floor = function() {
  return finalise(new this.constructor(this), this.e + 1, 3);
};
P.greaterThan = P.gt = function(y) {
  return this.cmp(y) > 0;
};
P.greaterThanOrEqualTo = P.gte = function(y) {
  var k = this.cmp(y);
  return k == 1 || k === 0;
};
P.hyperbolicCosine = P.cosh = function() {
  var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
  if (!x.isFinite())
    return new Ctor(x.s ? 1 / 0 : NaN);
  if (x.isZero())
    return one;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    n = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    n = "2.3283064365386962890625e-10";
  }
  x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
  var cosh2_x, i = k, d8 = new Ctor(8);
  for (; i--; ) {
    cosh2_x = x.times(x);
    x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
  }
  return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.hyperbolicSine = P.sinh = function() {
  var k, pr, rm, len, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 3) {
    x = taylorSeries(Ctor, 2, x, x, true);
  } else {
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;
    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x, true);
    var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
    for (; k--; ) {
      sinh2_x = x.times(x);
      x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
    }
  }
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(x, pr, rm, true);
};
P.hyperbolicTangent = P.tanh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(x.s);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 7;
  Ctor.rounding = 1;
  return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
};
P.inverseCosine = P.acos = function() {
  var halfPi, x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
  if (k !== -1) {
    return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
  }
  if (x.isZero())
    return getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.asin();
  halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return halfPi.minus(x);
};
P.inverseHyperbolicCosine = P.acosh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (x.lte(1))
    return new Ctor(x.eq(1) ? 0 : NaN);
  if (!x.isFinite())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).minus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicSine = P.asinh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).plus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicTangent = P.atanh = function() {
  var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.e >= 0)
    return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  xsd = x.sd();
  if (Math.max(xsd, pr) < 2 * -x.e - 1)
    return finalise(new Ctor(x), pr, rm, true);
  Ctor.precision = wpr = xsd - x.e;
  x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
  Ctor.precision = pr + 4;
  Ctor.rounding = 1;
  x = x.ln();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(0.5);
};
P.inverseSine = P.asin = function() {
  var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
  if (x.isZero())
    return new Ctor(x);
  k = x.abs().cmp(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (k !== -1) {
    if (k === 0) {
      halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
      halfPi.s = x.s;
      return halfPi;
    }
    return new Ctor(NaN);
  }
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(2);
};
P.inverseTangent = P.atan = function() {
  var i, j, k, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
  if (!x.isFinite()) {
    if (!x.s)
      return new Ctor(NaN);
    if (pr + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr + 4, rm).times(0.5);
      r.s = x.s;
      return r;
    }
  } else if (x.isZero()) {
    return new Ctor(x);
  } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
    r = getPi(Ctor, pr + 4, rm).times(0.25);
    r.s = x.s;
    return r;
  }
  Ctor.precision = wpr = pr + 10;
  Ctor.rounding = 1;
  k = Math.min(28, wpr / LOG_BASE + 2 | 0);
  for (i = k; i; --i)
    x = x.div(x.times(x).plus(1).sqrt().plus(1));
  external = false;
  j = Math.ceil(wpr / LOG_BASE);
  n = 1;
  x2 = x.times(x);
  r = new Ctor(x);
  px = x;
  for (; i !== -1; ) {
    px = px.times(x2);
    t = r.minus(px.div(n += 2));
    px = px.times(x2);
    r = t.plus(px.div(n += 2));
    if (r.d[j] !== void 0)
      for (i = j; r.d[i] === t.d[i] && i--; )
        ;
  }
  if (k)
    r = r.times(2 << k - 1);
  external = true;
  return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.isFinite = function() {
  return !!this.d;
};
P.isInteger = P.isInt = function() {
  return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
};
P.isNaN = function() {
  return !this.s;
};
P.isNegative = P.isNeg = function() {
  return this.s < 0;
};
P.isPositive = P.isPos = function() {
  return this.s > 0;
};
P.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
P.lessThan = P.lt = function(y) {
  return this.cmp(y) < 0;
};
P.lessThanOrEqualTo = P.lte = function(y) {
  return this.cmp(y) < 1;
};
P.logarithm = P.log = function(base) {
  var isBase10, d, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
  if (base == null) {
    base = new Ctor(10);
    isBase10 = true;
  } else {
    base = new Ctor(base);
    d = base.d;
    if (base.s < 0 || !d || !d[0] || base.eq(1))
      return new Ctor(NaN);
    isBase10 = base.eq(10);
  }
  d = arg.d;
  if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
    return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
  }
  if (isBase10) {
    if (d.length > 1) {
      inf = true;
    } else {
      for (k = d[0]; k % 10 === 0; )
        k /= 10;
      inf = k !== 1;
    }
  }
  external = false;
  sd = pr + guard;
  num = naturalLogarithm(arg, sd);
  denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
  r = divide(num, denominator, sd, 1);
  if (checkRoundingDigits(r.d, k = pr, rm)) {
    do {
      sd += 10;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
      r = divide(num, denominator, sd, 1);
      if (!inf) {
        if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
          r = finalise(r, pr + 1, 0);
        }
        break;
      }
    } while (checkRoundingDigits(r.d, k += 10, rm));
  }
  external = true;
  return finalise(r, pr, rm);
};
P.minus = P.sub = function(y) {
  var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s)
      y = new Ctor(NaN);
    else if (x.d)
      y.s = -y.s;
    else
      y = new Ctor(y.d || x.s !== y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.plus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (yd[0])
      y.s = -y.s;
    else if (xd[0])
      y = new Ctor(x);
    else
      return new Ctor(rm === 3 ? -0 : 0);
    return external ? finalise(y, pr, rm) : y;
  }
  e = mathfloor(y.e / LOG_BASE);
  xe = mathfloor(x.e / LOG_BASE);
  xd = xd.slice();
  k = xe - e;
  if (k) {
    xLTy = k < 0;
    if (xLTy) {
      d = xd;
      k = -k;
      len = yd.length;
    } else {
      d = yd;
      e = xe;
      len = xd.length;
    }
    i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
    if (k > i) {
      k = i;
      d.length = 1;
    }
    d.reverse();
    for (i = k; i--; )
      d.push(0);
    d.reverse();
  } else {
    i = xd.length;
    len = yd.length;
    xLTy = i < len;
    if (xLTy)
      len = i;
    for (i = 0; i < len; i++) {
      if (xd[i] != yd[i]) {
        xLTy = xd[i] < yd[i];
        break;
      }
    }
    k = 0;
  }
  if (xLTy) {
    d = xd;
    xd = yd;
    yd = d;
    y.s = -y.s;
  }
  len = xd.length;
  for (i = yd.length - len; i > 0; --i)
    xd[len++] = 0;
  for (i = yd.length; i > k; ) {
    if (xd[--i] < yd[i]) {
      for (j = i; j && xd[--j] === 0; )
        xd[j] = BASE - 1;
      --xd[j];
      xd[i] += BASE;
    }
    xd[i] -= yd[i];
  }
  for (; xd[--len] === 0; )
    xd.pop();
  for (; xd[0] === 0; xd.shift())
    --e;
  if (!xd[0])
    return new Ctor(rm === 3 ? -0 : 0);
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.modulo = P.mod = function(y) {
  var q, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.s || y.d && !y.d[0])
    return new Ctor(NaN);
  if (!y.d || x.d && !x.d[0]) {
    return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
  }
  external = false;
  if (Ctor.modulo == 9) {
    q = divide(x, y.abs(), 0, 3, 1);
    q.s *= y.s;
  } else {
    q = divide(x, y, 0, Ctor.modulo, 1);
  }
  q = q.times(y);
  external = true;
  return x.minus(q);
};
P.naturalExponential = P.exp = function() {
  return naturalExponential(this);
};
P.naturalLogarithm = P.ln = function() {
  return naturalLogarithm(this);
};
P.negated = P.neg = function() {
  var x = new this.constructor(this);
  x.s = -x.s;
  return finalise(x);
};
P.plus = P.add = function(y) {
  var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s)
      y = new Ctor(NaN);
    else if (!x.d)
      y = new Ctor(y.d || x.s === y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (!yd[0])
      y = new Ctor(x);
    return external ? finalise(y, pr, rm) : y;
  }
  k = mathfloor(x.e / LOG_BASE);
  e = mathfloor(y.e / LOG_BASE);
  xd = xd.slice();
  i = k - e;
  if (i) {
    if (i < 0) {
      d = xd;
      i = -i;
      len = yd.length;
    } else {
      d = yd;
      e = k;
      len = xd.length;
    }
    k = Math.ceil(pr / LOG_BASE);
    len = k > len ? k + 1 : len + 1;
    if (i > len) {
      i = len;
      d.length = 1;
    }
    d.reverse();
    for (; i--; )
      d.push(0);
    d.reverse();
  }
  len = xd.length;
  i = yd.length;
  if (len - i < 0) {
    i = len;
    d = yd;
    yd = xd;
    xd = d;
  }
  for (carry = 0; i; ) {
    carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
    xd[i] %= BASE;
  }
  if (carry) {
    xd.unshift(carry);
    ++e;
  }
  for (len = xd.length; xd[--len] == 0; )
    xd.pop();
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.precision = P.sd = function(z) {
  var k, x = this;
  if (z !== void 0 && z !== !!z && z !== 1 && z !== 0)
    throw Error(invalidArgument + z);
  if (x.d) {
    k = getPrecision(x.d);
    if (z && x.e + 1 > k)
      k = x.e + 1;
  } else {
    k = NaN;
  }
  return k;
};
P.round = function() {
  var x = this, Ctor = x.constructor;
  return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
};
P.sine = P.sin = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = sine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
};
P.squareRoot = P.sqrt = function() {
  var m, n, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
  if (s !== 1 || !d || !d[0]) {
    return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
  }
  external = false;
  s = Math.sqrt(+x);
  if (s == 0 || s == 1 / 0) {
    n = digitsToString(d);
    if ((n.length + e) % 2 == 0)
      n += "0";
    s = Math.sqrt(n);
    e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t = r;
    r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.tangent = P.tan = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 10;
  Ctor.rounding = 1;
  x = x.sin();
  x.s = 1;
  x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
};
P.times = P.mul = function(y) {
  var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
  y.s *= x.s;
  if (!xd || !xd[0] || !yd || !yd[0]) {
    return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
  }
  e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
  xdL = xd.length;
  ydL = yd.length;
  if (xdL < ydL) {
    r = xd;
    xd = yd;
    yd = r;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }
  r = [];
  rL = xdL + ydL;
  for (i = rL; i--; )
    r.push(0);
  for (i = ydL; --i >= 0; ) {
    carry = 0;
    for (k = xdL + i; k > i; ) {
      t = r[k] + yd[i] * xd[k - i - 1] + carry;
      r[k--] = t % BASE | 0;
      carry = t / BASE | 0;
    }
    r[k] = (r[k] + carry) % BASE | 0;
  }
  for (; !r[--rL]; )
    r.pop();
  if (carry)
    ++e;
  else
    r.shift();
  y.d = r;
  y.e = getBase10Exponent(r, e);
  return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
};
P.toBinary = function(sd, rm) {
  return toStringBinary(this, 2, sd, rm);
};
P.toDecimalPlaces = P.toDP = function(dp, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (dp === void 0)
    return x;
  checkInt32(dp, 0, MAX_DIGITS);
  if (rm === void 0)
    rm = Ctor.rounding;
  else
    checkInt32(rm, 0, 8);
  return finalise(x, dp + x.e + 1, rm);
};
P.toExponential = function(dp, rm) {
  var str2, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str2 = finiteToString(x, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), dp + 1, rm);
    str2 = finiteToString(x, true, dp + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str2 : str2;
};
P.toFixed = function(dp, rm) {
  var str2, y, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str2 = finiteToString(x);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    y = finalise(new Ctor(x), dp + x.e + 1, rm);
    str2 = finiteToString(y, false, dp + y.e + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str2 : str2;
};
P.toFraction = function(maxD) {
  var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
  if (!xd)
    return new Ctor(x);
  n1 = d0 = new Ctor(1);
  d1 = n0 = new Ctor(0);
  d = new Ctor(d1);
  e = d.e = getPrecision(xd) - x.e - 1;
  k = e % LOG_BASE;
  d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
  if (maxD == null) {
    maxD = e > 0 ? d : n1;
  } else {
    n = new Ctor(maxD);
    if (!n.isInt() || n.lt(n1))
      throw Error(invalidArgument + n);
    maxD = n.gt(d) ? e > 0 ? d : n1 : n;
  }
  external = false;
  n = new Ctor(digitsToString(xd));
  pr = Ctor.precision;
  Ctor.precision = e = xd.length * LOG_BASE * 2;
  for (; ; ) {
    q = divide(n, d, 0, 1, 1);
    d2 = d0.plus(q.times(d1));
    if (d2.cmp(maxD) == 1)
      break;
    d0 = d1;
    d1 = d2;
    d2 = n1;
    n1 = n0.plus(q.times(d2));
    n0 = d2;
    d2 = d;
    d = n.minus(q.times(d2));
    n = d2;
  }
  d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
  n0 = n0.plus(d2.times(n1));
  d0 = d0.plus(d2.times(d1));
  n0.s = n1.s = x.s;
  r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
  Ctor.precision = pr;
  external = true;
  return r;
};
P.toHexadecimal = P.toHex = function(sd, rm) {
  return toStringBinary(this, 16, sd, rm);
};
P.toNearest = function(y, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (y == null) {
    if (!x.d)
      return x;
    y = new Ctor(1);
    rm = Ctor.rounding;
  } else {
    y = new Ctor(y);
    if (rm === void 0) {
      rm = Ctor.rounding;
    } else {
      checkInt32(rm, 0, 8);
    }
    if (!x.d)
      return y.s ? x : y;
    if (!y.d) {
      if (y.s)
        y.s = x.s;
      return y;
    }
  }
  if (y.d[0]) {
    external = false;
    x = divide(x, y, 0, rm, 1).times(y);
    external = true;
    finalise(x);
  } else {
    y.s = x.s;
    x = y;
  }
  return x;
};
P.toNumber = function() {
  return +this;
};
P.toOctal = function(sd, rm) {
  return toStringBinary(this, 8, sd, rm);
};
P.toPower = P.pow = function(y) {
  var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
  if (!x.d || !y.d || !x.d[0] || !y.d[0])
    return new Ctor(mathpow(+x, yn));
  x = new Ctor(x);
  if (x.eq(1))
    return x;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (y.eq(1))
    return finalise(x, pr, rm);
  e = mathfloor(y.e / LOG_BASE);
  if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
    r = intPow(Ctor, x, k, pr);
    return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
  }
  s = x.s;
  if (s < 0) {
    if (e < y.d.length - 1)
      return new Ctor(NaN);
    if ((y.d[e] & 1) == 0)
      s = 1;
    if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
      x.s = s;
      return x;
    }
  }
  k = mathpow(+x, yn);
  e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + "").e;
  if (e > Ctor.maxE + 1 || e < Ctor.minE - 1)
    return new Ctor(e > 0 ? s / 0 : 0);
  external = false;
  Ctor.rounding = x.s = 1;
  k = Math.min(12, (e + "").length);
  r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
  if (r.d) {
    r = finalise(r, pr + 5, 1);
    if (checkRoundingDigits(r.d, pr, rm)) {
      e = pr + 10;
      r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
      if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
        r = finalise(r, pr + 1, 0);
      }
    }
  }
  r.s = s;
  external = true;
  Ctor.rounding = rm;
  return finalise(r, pr, rm);
};
P.toPrecision = function(sd, rm) {
  var str2, x = this, Ctor = x.constructor;
  if (sd === void 0) {
    str2 = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), sd, rm);
    str2 = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
  }
  return x.isNeg() && !x.isZero() ? "-" + str2 : str2;
};
P.toSignificantDigits = P.toSD = function(sd, rm) {
  var x = this, Ctor = x.constructor;
  if (sd === void 0) {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
  }
  return finalise(new Ctor(x), sd, rm);
};
P.toString = function() {
  var x = this, Ctor = x.constructor, str2 = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() && !x.isZero() ? "-" + str2 : str2;
};
P.truncated = P.trunc = function() {
  return finalise(new this.constructor(this), this.e + 1, 1);
};
P.valueOf = P.toJSON = function() {
  var x = this, Ctor = x.constructor, str2 = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() ? "-" + str2 : str2;
};
function digitsToString(d) {
  var i, k, ws, indexOfLastWord = d.length - 1, str2 = "", w = d[0];
  if (indexOfLastWord > 0) {
    str2 += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws = d[i] + "";
      k = LOG_BASE - ws.length;
      if (k)
        str2 += getZeroString(k);
      str2 += ws;
    }
    w = d[i];
    ws = w + "";
    k = LOG_BASE - ws.length;
    if (k)
      str2 += getZeroString(k);
  } else if (w === 0) {
    return "0";
  }
  for (; w % 10 === 0; )
    w /= 10;
  return str2 + w;
}
function checkInt32(i, min2, max2) {
  if (i !== ~~i || i < min2 || i > max2) {
    throw Error(invalidArgument + i);
  }
}
function checkRoundingDigits(d, i, rm, repeating) {
  var di, k, r, rd;
  for (k = d[0]; k >= 10; k /= 10)
    --i;
  if (--i < 0) {
    i += LOG_BASE;
    di = 0;
  } else {
    di = Math.ceil((i + 1) / LOG_BASE);
    i %= LOG_BASE;
  }
  k = mathpow(10, LOG_BASE - i);
  rd = d[di] % k | 0;
  if (repeating == null) {
    if (i < 3) {
      if (i == 0)
        rd = rd / 100 | 0;
      else if (i == 1)
        rd = rd / 10 | 0;
      r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
    } else {
      r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
    }
  } else {
    if (i < 4) {
      if (i == 0)
        rd = rd / 1e3 | 0;
      else if (i == 1)
        rd = rd / 100 | 0;
      else if (i == 2)
        rd = rd / 10 | 0;
      r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
    } else {
      r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1;
    }
  }
  return r;
}
function convertBase(str2, baseIn, baseOut) {
  var j, arr = [0], arrL, i = 0, strL = str2.length;
  for (; i < strL; ) {
    for (arrL = arr.length; arrL--; )
      arr[arrL] *= baseIn;
    arr[0] += NUMERALS.indexOf(str2.charAt(i++));
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > baseOut - 1) {
        if (arr[j + 1] === void 0)
          arr[j + 1] = 0;
        arr[j + 1] += arr[j] / baseOut | 0;
        arr[j] %= baseOut;
      }
    }
  }
  return arr.reverse();
}
function cosine(Ctor, x) {
  var k, len, y;
  if (x.isZero())
    return x;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    y = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    y = "2.3283064365386962890625e-10";
  }
  Ctor.precision += k;
  x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
  for (var i = k; i--; ) {
    var cos2x = x.times(x);
    x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
  }
  Ctor.precision -= k;
  return x;
}
var divide = function() {
  function multiplyInteger(x, k, base) {
    var temp, carry = 0, i = x.length;
    for (x = x.slice(); i--; ) {
      temp = x[i] * k + carry;
      x[i] = temp % base | 0;
      carry = temp / base | 0;
    }
    if (carry)
      x.unshift(carry);
    return x;
  }
  function compare(a, b, aL, bL) {
    var i, r;
    if (aL != bL) {
      r = aL > bL ? 1 : -1;
    } else {
      for (i = r = 0; i < aL; i++) {
        if (a[i] != b[i]) {
          r = a[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }
    return r;
  }
  function subtract(a, b, aL, base) {
    var i = 0;
    for (; aL--; ) {
      a[aL] -= i;
      i = a[aL] < b[aL] ? 1 : 0;
      a[aL] = i * base + a[aL] - b[aL];
    }
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(x, y, pr, rm, dp, base) {
    var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign2 = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
    if (!xd || !xd[0] || !yd || !yd[0]) {
      return new Ctor(!x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0);
    }
    if (base) {
      logBase = 1;
      e = x.e - y.e;
    } else {
      base = BASE;
      logBase = LOG_BASE;
      e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
    }
    yL = yd.length;
    xL = xd.length;
    q = new Ctor(sign2);
    qd = q.d = [];
    for (i = 0; yd[i] == (xd[i] || 0); i++)
      ;
    if (yd[i] > (xd[i] || 0))
      e--;
    if (pr == null) {
      sd = pr = Ctor.precision;
      rm = Ctor.rounding;
    } else if (dp) {
      sd = pr + (x.e - y.e) + 1;
    } else {
      sd = pr;
    }
    if (sd < 0) {
      qd.push(1);
      more = true;
    } else {
      sd = sd / logBase + 2 | 0;
      i = 0;
      if (yL == 1) {
        k = 0;
        yd = yd[0];
        sd++;
        for (; (i < xL || k) && sd--; i++) {
          t = k * base + (xd[i] || 0);
          qd[i] = t / yd | 0;
          k = t % yd | 0;
        }
        more = k || i < xL;
      } else {
        k = base / (yd[0] + 1) | 0;
        if (k > 1) {
          yd = multiplyInteger(yd, k, base);
          xd = multiplyInteger(xd, k, base);
          yL = yd.length;
          xL = xd.length;
        }
        xi = yL;
        rem = xd.slice(0, yL);
        remL = rem.length;
        for (; remL < yL; )
          rem[remL++] = 0;
        yz = yd.slice();
        yz.unshift(0);
        yd0 = yd[0];
        if (yd[1] >= base / 2)
          ++yd0;
        do {
          k = 0;
          cmp = compare(yd, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL)
              rem0 = rem0 * base + (rem[1] || 0);
            k = rem0 / yd0 | 0;
            if (k > 1) {
              if (k >= base)
                k = base - 1;
              prod = multiplyInteger(yd, k, base);
              prodL = prod.length;
              remL = rem.length;
              cmp = compare(prod, rem, prodL, remL);
              if (cmp == 1) {
                k--;
                subtract(prod, yL < prodL ? yz : yd, prodL, base);
              }
            } else {
              if (k == 0)
                cmp = k = 1;
              prod = yd.slice();
            }
            prodL = prod.length;
            if (prodL < remL)
              prod.unshift(0);
            subtract(rem, prod, remL, base);
            if (cmp == -1) {
              remL = rem.length;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 1) {
                k++;
                subtract(rem, yL < remL ? yz : yd, remL, base);
              }
            }
            remL = rem.length;
          } else if (cmp === 0) {
            k++;
            rem = [0];
          }
          qd[i++] = k;
          if (cmp && rem[0]) {
            rem[remL++] = xd[xi] || 0;
          } else {
            rem = [xd[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] !== void 0) && sd--);
        more = rem[0] !== void 0;
      }
      if (!qd[0])
        qd.shift();
    }
    if (logBase == 1) {
      q.e = e;
      inexact = more;
    } else {
      for (i = 1, k = qd[0]; k >= 10; k /= 10)
        i++;
      q.e = i + e * logBase - 1;
      finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
    }
    return q;
  };
}();
function finalise(x, sd, rm, isTruncated) {
  var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
  out:
    if (sd != null) {
      xd = x.d;
      if (!xd)
        return x;
      for (digits = 1, k = xd[0]; k >= 10; k /= 10)
        digits++;
      i = sd - digits;
      if (i < 0) {
        i += LOG_BASE;
        j = sd;
        w = xd[xdi = 0];
        rd = w / mathpow(10, digits - j - 1) % 10 | 0;
      } else {
        xdi = Math.ceil((i + 1) / LOG_BASE);
        k = xd.length;
        if (xdi >= k) {
          if (isTruncated) {
            for (; k++ <= xdi; )
              xd.push(0);
            w = rd = 0;
            digits = 1;
            i %= LOG_BASE;
            j = i - LOG_BASE + 1;
          } else {
            break out;
          }
        } else {
          w = k = xd[xdi];
          for (digits = 1; k >= 10; k /= 10)
            digits++;
          i %= LOG_BASE;
          j = i - LOG_BASE + digits;
          rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
        }
      }
      isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
      roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
      if (sd < 1 || !xd[0]) {
        xd.length = 0;
        if (roundUp) {
          sd -= x.e + 1;
          xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
          x.e = -sd || 0;
        } else {
          xd[0] = x.e = 0;
        }
        return x;
      }
      if (i == 0) {
        xd.length = xdi;
        k = 1;
        xdi--;
      } else {
        xd.length = xdi + 1;
        k = mathpow(10, LOG_BASE - i);
        xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
      }
      if (roundUp) {
        for (; ; ) {
          if (xdi == 0) {
            for (i = 1, j = xd[0]; j >= 10; j /= 10)
              i++;
            j = xd[0] += k;
            for (k = 1; j >= 10; j /= 10)
              k++;
            if (i != k) {
              x.e++;
              if (xd[0] == BASE)
                xd[0] = 1;
            }
            break;
          } else {
            xd[xdi] += k;
            if (xd[xdi] != BASE)
              break;
            xd[xdi--] = 0;
            k = 1;
          }
        }
      }
      for (i = xd.length; xd[--i] === 0; )
        xd.pop();
    }
  if (external) {
    if (x.e > Ctor.maxE) {
      x.d = null;
      x.e = NaN;
    } else if (x.e < Ctor.minE) {
      x.e = 0;
      x.d = [0];
    }
  }
  return x;
}
function finiteToString(x, isExp, sd) {
  if (!x.isFinite())
    return nonFiniteToString(x);
  var k, e = x.e, str2 = digitsToString(x.d), len = str2.length;
  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str2 = str2.charAt(0) + "." + str2.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str2 = str2.charAt(0) + "." + str2.slice(1);
    }
    str2 = str2 + (x.e < 0 ? "e" : "e+") + x.e;
  } else if (e < 0) {
    str2 = "0." + getZeroString(-e - 1) + str2;
    if (sd && (k = sd - len) > 0)
      str2 += getZeroString(k);
  } else if (e >= len) {
    str2 += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0)
      str2 = str2 + "." + getZeroString(k);
  } else {
    if ((k = e + 1) < len)
      str2 = str2.slice(0, k) + "." + str2.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len)
        str2 += ".";
      str2 += getZeroString(k);
    }
  }
  return str2;
}
function getBase10Exponent(digits, e) {
  var w = digits[0];
  for (e *= LOG_BASE; w >= 10; w /= 10)
    e++;
  return e;
}
function getLn10(Ctor, sd, pr) {
  if (sd > LN10_PRECISION) {
    external = true;
    if (pr)
      Ctor.precision = pr;
    throw Error(precisionLimitExceeded);
  }
  return finalise(new Ctor(LN10), sd, 1, true);
}
function getPi(Ctor, sd, rm) {
  if (sd > PI_PRECISION)
    throw Error(precisionLimitExceeded);
  return finalise(new Ctor(PI), sd, rm, true);
}
function getPrecision(digits) {
  var w = digits.length - 1, len = w * LOG_BASE + 1;
  w = digits[w];
  if (w) {
    for (; w % 10 == 0; w /= 10)
      len--;
    for (w = digits[0]; w >= 10; w /= 10)
      len++;
  }
  return len;
}
function getZeroString(k) {
  var zs = "";
  for (; k--; )
    zs += "0";
  return zs;
}
function intPow(Ctor, x, n, pr) {
  var isTruncated, r = new Ctor(1), k = Math.ceil(pr / LOG_BASE + 4);
  external = false;
  for (; ; ) {
    if (n % 2) {
      r = r.times(x);
      if (truncate(r.d, k))
        isTruncated = true;
    }
    n = mathfloor(n / 2);
    if (n === 0) {
      n = r.d.length - 1;
      if (isTruncated && r.d[n] === 0)
        ++r.d[n];
      break;
    }
    x = x.times(x);
    truncate(x.d, k);
  }
  external = true;
  return r;
}
function isOdd(n) {
  return n.d[n.d.length - 1] & 1;
}
function maxOrMin(Ctor, args, ltgt) {
  var y, x = new Ctor(args[0]), i = 0;
  for (; ++i < args.length; ) {
    y = new Ctor(args[i]);
    if (!y.s) {
      x = y;
      break;
    } else if (x[ltgt](y)) {
      x = y;
    }
  }
  return x;
}
function naturalExponential(x, sd) {
  var denominator, guard, j, pow2, sum2, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (!x.d || !x.d[0] || x.e > 17) {
    return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  t = new Ctor(0.03125);
  while (x.e > -2) {
    x = x.times(t);
    k += 5;
  }
  guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow2 = sum2 = new Ctor(1);
  Ctor.precision = wpr;
  for (; ; ) {
    pow2 = finalise(pow2.times(x), wpr, 1);
    denominator = denominator.times(++i);
    t = sum2.plus(divide(pow2, denominator, wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      j = k;
      while (j--)
        sum2 = finalise(sum2.times(sum2), wpr, 1);
      if (sd == null) {
        if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += 10;
          denominator = pow2 = t = new Ctor(1);
          i = 0;
          rep++;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
  }
}
function naturalLogarithm(y, sd) {
  var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
    return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  Ctor.precision = wpr += guard;
  c = digitsToString(xd);
  c0 = c.charAt(0);
  if (Math.abs(e = x.e) < 15e14) {
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n++;
    }
    e = x.e;
    if (c0 > 1) {
      x = new Ctor("0." + c);
      e++;
    } else {
      x = new Ctor(c0 + "." + c.slice(1));
    }
  } else {
    t = getLn10(Ctor, wpr + 2, pr).times(e + "");
    x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
    Ctor.precision = pr;
    return sd == null ? finalise(x, pr, rm, external = true) : x;
  }
  x1 = x;
  sum2 = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
  x2 = finalise(x.times(x), wpr, 1);
  denominator = 3;
  for (; ; ) {
    numerator = finalise(numerator.times(x2), wpr, 1);
    t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      sum2 = sum2.times(2);
      if (e !== 0)
        sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
      sum2 = divide(sum2, new Ctor(n), wpr, 1);
      if (sd == null) {
        if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += guard;
          t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
          x2 = finalise(x.times(x), wpr, 1);
          denominator = rep = 1;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
    denominator += 2;
  }
}
function nonFiniteToString(x) {
  return String(x.s * x.s / 0);
}
function parseDecimal(x, str2) {
  var e, i, len;
  if ((e = str2.indexOf(".")) > -1)
    str2 = str2.replace(".", "");
  if ((i = str2.search(/e/i)) > 0) {
    if (e < 0)
      e = i;
    e += +str2.slice(i + 1);
    str2 = str2.substring(0, i);
  } else if (e < 0) {
    e = str2.length;
  }
  for (i = 0; str2.charCodeAt(i) === 48; i++)
    ;
  for (len = str2.length; str2.charCodeAt(len - 1) === 48; --len)
    ;
  str2 = str2.slice(i, len);
  if (str2) {
    len -= i;
    x.e = e = e - i - 1;
    x.d = [];
    i = (e + 1) % LOG_BASE;
    if (e < 0)
      i += LOG_BASE;
    if (i < len) {
      if (i)
        x.d.push(+str2.slice(0, i));
      for (len -= LOG_BASE; i < len; )
        x.d.push(+str2.slice(i, i += LOG_BASE));
      str2 = str2.slice(i);
      i = LOG_BASE - str2.length;
    } else {
      i -= len;
    }
    for (; i--; )
      str2 += "0";
    x.d.push(+str2);
    if (external) {
      if (x.e > x.constructor.maxE) {
        x.d = null;
        x.e = NaN;
      } else if (x.e < x.constructor.minE) {
        x.e = 0;
        x.d = [0];
      }
    }
  } else {
    x.e = 0;
    x.d = [0];
  }
  return x;
}
function parseOther(x, str2) {
  var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
  if (str2.indexOf("_") > -1) {
    str2 = str2.replace(/(\d)_(?=\d)/g, "$1");
    if (isDecimal.test(str2))
      return parseDecimal(x, str2);
  } else if (str2 === "Infinity" || str2 === "NaN") {
    if (!+str2)
      x.s = NaN;
    x.e = NaN;
    x.d = null;
    return x;
  }
  if (isHex.test(str2)) {
    base = 16;
    str2 = str2.toLowerCase();
  } else if (isBinary.test(str2)) {
    base = 2;
  } else if (isOctal.test(str2)) {
    base = 8;
  } else {
    throw Error(invalidArgument + str2);
  }
  i = str2.search(/p/i);
  if (i > 0) {
    p = +str2.slice(i + 1);
    str2 = str2.substring(2, i);
  } else {
    str2 = str2.slice(2);
  }
  i = str2.indexOf(".");
  isFloat = i >= 0;
  Ctor = x.constructor;
  if (isFloat) {
    str2 = str2.replace(".", "");
    len = str2.length;
    i = len - i;
    divisor = intPow(Ctor, new Ctor(base), i, i * 2);
  }
  xd = convertBase(str2, base, BASE);
  xe = xd.length - 1;
  for (i = xe; xd[i] === 0; --i)
    xd.pop();
  if (i < 0)
    return new Ctor(x.s * 0);
  x.e = getBase10Exponent(xd, xe);
  x.d = xd;
  external = false;
  if (isFloat)
    x = divide(x, divisor, len * 4);
  if (p)
    x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
  external = true;
  return x;
}
function sine(Ctor, x) {
  var k, len = x.d.length;
  if (len < 3) {
    return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
  }
  k = 1.4 * Math.sqrt(len);
  k = k > 16 ? 16 : k | 0;
  x = x.times(1 / tinyPow(5, k));
  x = taylorSeries(Ctor, 2, x, x);
  var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
  for (; k--; ) {
    sin2_x = x.times(x);
    x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
  }
  return x;
}
function taylorSeries(Ctor, n, x, y, isHyperbolic) {
  var j, t, u, x2, i = 1, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
  external = false;
  x2 = x.times(x);
  u = new Ctor(y);
  for (; ; ) {
    t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
    u = isHyperbolic ? y.plus(t) : y.minus(t);
    y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
    t = u.plus(y);
    if (t.d[k] !== void 0) {
      for (j = k; t.d[j] === u.d[j] && j--; )
        ;
      if (j == -1)
        break;
    }
    j = u;
    u = y;
    y = t;
    t = j;
    i++;
  }
  external = true;
  t.d.length = k + 1;
  return t;
}
function tinyPow(b, e) {
  var n = b;
  while (--e)
    n *= b;
  return n;
}
function toLessThanHalfPi(Ctor, x) {
  var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
  x = x.abs();
  if (x.lte(halfPi)) {
    quadrant = isNeg ? 4 : 1;
    return x;
  }
  t = x.divToInt(pi);
  if (t.isZero()) {
    quadrant = isNeg ? 3 : 2;
  } else {
    x = x.minus(t.times(pi));
    if (x.lte(halfPi)) {
      quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
      return x;
    }
    quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
  }
  return x.minus(pi).abs();
}
function toStringBinary(x, baseOut, sd, rm) {
  var base, e, i, k, len, roundUp, str2, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
  if (isExp) {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
  } else {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  }
  if (!x.isFinite()) {
    str2 = nonFiniteToString(x);
  } else {
    str2 = finiteToString(x);
    i = str2.indexOf(".");
    if (isExp) {
      base = 2;
      if (baseOut == 16) {
        sd = sd * 4 - 3;
      } else if (baseOut == 8) {
        sd = sd * 3 - 2;
      }
    } else {
      base = baseOut;
    }
    if (i >= 0) {
      str2 = str2.replace(".", "");
      y = new Ctor(1);
      y.e = str2.length - i;
      y.d = convertBase(finiteToString(y), 10, base);
      y.e = y.d.length;
    }
    xd = convertBase(str2, 10, base);
    e = len = xd.length;
    for (; xd[--len] == 0; )
      xd.pop();
    if (!xd[0]) {
      str2 = isExp ? "0p+0" : "0";
    } else {
      if (i < 0) {
        e--;
      } else {
        x = new Ctor(x);
        x.d = xd;
        x.e = e;
        x = divide(x, y, sd, rm, 0, base);
        xd = x.d;
        e = x.e;
        roundUp = inexact;
      }
      i = xd[sd];
      k = base / 2;
      roundUp = roundUp || xd[sd + 1] !== void 0;
      roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
      xd.length = sd;
      if (roundUp) {
        for (; ++xd[--sd] > base - 1; ) {
          xd[sd] = 0;
          if (!sd) {
            ++e;
            xd.unshift(1);
          }
        }
      }
      for (len = xd.length; !xd[len - 1]; --len)
        ;
      for (i = 0, str2 = ""; i < len; i++)
        str2 += NUMERALS.charAt(xd[i]);
      if (isExp) {
        if (len > 1) {
          if (baseOut == 16 || baseOut == 8) {
            i = baseOut == 16 ? 4 : 3;
            for (--len; len % i; len++)
              str2 += "0";
            xd = convertBase(str2, base, baseOut);
            for (len = xd.length; !xd[len - 1]; --len)
              ;
            for (i = 1, str2 = "1."; i < len; i++)
              str2 += NUMERALS.charAt(xd[i]);
          } else {
            str2 = str2.charAt(0) + "." + str2.slice(1);
          }
        }
        str2 = str2 + (e < 0 ? "p" : "p+") + e;
      } else if (e < 0) {
        for (; ++e; )
          str2 = "0" + str2;
        str2 = "0." + str2;
      } else {
        if (++e > len)
          for (e -= len; e--; )
            str2 += "0";
        else if (e < len)
          str2 = str2.slice(0, e) + "." + str2.slice(e);
      }
    }
    str2 = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str2;
  }
  return x.s < 0 ? "-" + str2 : str2;
}
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}
function abs(x) {
  return new this(x).abs();
}
function acos(x) {
  return new this(x).acos();
}
function acosh(x) {
  return new this(x).acosh();
}
function add(x, y) {
  return new this(x).plus(y);
}
function asin(x) {
  return new this(x).asin();
}
function asinh(x) {
  return new this(x).asinh();
}
function atan(x) {
  return new this(x).atan();
}
function atanh(x) {
  return new this(x).atanh();
}
function atan2(y, x) {
  y = new this(y);
  x = new this(x);
  var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
  if (!y.s || !x.s) {
    r = new this(NaN);
  } else if (!y.d && !x.d) {
    r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
    r.s = y.s;
  } else if (!x.d || y.isZero()) {
    r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
    r.s = y.s;
  } else if (!y.d || x.isZero()) {
    r = getPi(this, wpr, 1).times(0.5);
    r.s = y.s;
  } else if (x.s < 0) {
    this.precision = wpr;
    this.rounding = 1;
    r = this.atan(divide(y, x, wpr, 1));
    x = getPi(this, wpr, 1);
    this.precision = pr;
    this.rounding = rm;
    r = y.s < 0 ? r.minus(x) : r.plus(x);
  } else {
    r = this.atan(divide(y, x, wpr, 1));
  }
  return r;
}
function cbrt(x) {
  return new this(x).cbrt();
}
function ceil(x) {
  return finalise(x = new this(x), x.e + 1, 2);
}
function clamp(x, min2, max2) {
  return new this(x).clamp(min2, max2);
}
function config(obj) {
  if (!obj || typeof obj !== "object")
    throw Error(decimalError + "Object expected");
  var i, p, v, useDefaults = obj.defaults === true, ps = [
    "precision",
    1,
    MAX_DIGITS,
    "rounding",
    0,
    8,
    "toExpNeg",
    -EXP_LIMIT,
    0,
    "toExpPos",
    0,
    EXP_LIMIT,
    "maxE",
    0,
    EXP_LIMIT,
    "minE",
    -EXP_LIMIT,
    0,
    "modulo",
    0,
    9
  ];
  for (i = 0; i < ps.length; i += 3) {
    if (p = ps[i], useDefaults)
      this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
      if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2])
        this[p] = v;
      else
        throw Error(invalidArgument + p + ": " + v);
    }
  }
  if (p = "crypto", useDefaults)
    this[p] = DEFAULTS[p];
  if ((v = obj[p]) !== void 0) {
    if (v === true || v === false || v === 0 || v === 1) {
      if (v) {
        if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
          this[p] = true;
        } else {
          throw Error(cryptoUnavailable);
        }
      } else {
        this[p] = false;
      }
    } else {
      throw Error(invalidArgument + p + ": " + v);
    }
  }
  return this;
}
function cos(x) {
  return new this(x).cos();
}
function cosh(x) {
  return new this(x).cosh();
}
function clone(obj) {
  var i, p, ps;
  function Decimal4(v) {
    var e, i2, t, x = this;
    if (!(x instanceof Decimal4))
      return new Decimal4(v);
    x.constructor = Decimal4;
    if (isDecimalInstance(v)) {
      x.s = v.s;
      if (external) {
        if (!v.d || v.e > Decimal4.maxE) {
          x.e = NaN;
          x.d = null;
        } else if (v.e < Decimal4.minE) {
          x.e = 0;
          x.d = [0];
        } else {
          x.e = v.e;
          x.d = v.d.slice();
        }
      } else {
        x.e = v.e;
        x.d = v.d ? v.d.slice() : v.d;
      }
      return;
    }
    t = typeof v;
    if (t === "number") {
      if (v === 0) {
        x.s = 1 / v < 0 ? -1 : 1;
        x.e = 0;
        x.d = [0];
        return;
      }
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      if (v === ~~v && v < 1e7) {
        for (e = 0, i2 = v; i2 >= 10; i2 /= 10)
          e++;
        if (external) {
          if (e > Decimal4.maxE) {
            x.e = NaN;
            x.d = null;
          } else if (e < Decimal4.minE) {
            x.e = 0;
            x.d = [0];
          } else {
            x.e = e;
            x.d = [v];
          }
        } else {
          x.e = e;
          x.d = [v];
        }
        return;
      } else if (v * 0 !== 0) {
        if (!v)
          x.s = NaN;
        x.e = NaN;
        x.d = null;
        return;
      }
      return parseDecimal(x, v.toString());
    } else if (t !== "string") {
      throw Error(invalidArgument + v);
    }
    if ((i2 = v.charCodeAt(0)) === 45) {
      v = v.slice(1);
      x.s = -1;
    } else {
      if (i2 === 43)
        v = v.slice(1);
      x.s = 1;
    }
    return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
  }
  Decimal4.prototype = P;
  Decimal4.ROUND_UP = 0;
  Decimal4.ROUND_DOWN = 1;
  Decimal4.ROUND_CEIL = 2;
  Decimal4.ROUND_FLOOR = 3;
  Decimal4.ROUND_HALF_UP = 4;
  Decimal4.ROUND_HALF_DOWN = 5;
  Decimal4.ROUND_HALF_EVEN = 6;
  Decimal4.ROUND_HALF_CEIL = 7;
  Decimal4.ROUND_HALF_FLOOR = 8;
  Decimal4.EUCLID = 9;
  Decimal4.config = Decimal4.set = config;
  Decimal4.clone = clone;
  Decimal4.isDecimal = isDecimalInstance;
  Decimal4.abs = abs;
  Decimal4.acos = acos;
  Decimal4.acosh = acosh;
  Decimal4.add = add;
  Decimal4.asin = asin;
  Decimal4.asinh = asinh;
  Decimal4.atan = atan;
  Decimal4.atanh = atanh;
  Decimal4.atan2 = atan2;
  Decimal4.cbrt = cbrt;
  Decimal4.ceil = ceil;
  Decimal4.clamp = clamp;
  Decimal4.cos = cos;
  Decimal4.cosh = cosh;
  Decimal4.div = div;
  Decimal4.exp = exp;
  Decimal4.floor = floor;
  Decimal4.hypot = hypot;
  Decimal4.ln = ln;
  Decimal4.log = log;
  Decimal4.log10 = log10;
  Decimal4.log2 = log2;
  Decimal4.max = max;
  Decimal4.min = min;
  Decimal4.mod = mod;
  Decimal4.mul = mul;
  Decimal4.pow = pow;
  Decimal4.random = random;
  Decimal4.round = round;
  Decimal4.sign = sign;
  Decimal4.sin = sin;
  Decimal4.sinh = sinh;
  Decimal4.sqrt = sqrt;
  Decimal4.sub = sub;
  Decimal4.sum = sum;
  Decimal4.tan = tan;
  Decimal4.tanh = tanh;
  Decimal4.trunc = trunc;
  if (obj === void 0)
    obj = {};
  if (obj) {
    if (obj.defaults !== true) {
      ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
      for (i = 0; i < ps.length; )
        if (!obj.hasOwnProperty(p = ps[i++]))
          obj[p] = this[p];
    }
  }
  Decimal4.config(obj);
  return Decimal4;
}
function div(x, y) {
  return new this(x).div(y);
}
function exp(x) {
  return new this(x).exp();
}
function floor(x) {
  return finalise(x = new this(x), x.e + 1, 3);
}
function hypot() {
  var i, n, t = new this(0);
  external = false;
  for (i = 0; i < arguments.length; ) {
    n = new this(arguments[i++]);
    if (!n.d) {
      if (n.s) {
        external = true;
        return new this(1 / 0);
      }
      t = n;
    } else if (t.d) {
      t = t.plus(n.times(n));
    }
  }
  external = true;
  return t.sqrt();
}
function isDecimalInstance(obj) {
  return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
}
function ln(x) {
  return new this(x).ln();
}
function log(x, y) {
  return new this(x).log(y);
}
function log2(x) {
  return new this(x).log(2);
}
function log10(x) {
  return new this(x).log(10);
}
function max() {
  return maxOrMin(this, arguments, "lt");
}
function min() {
  return maxOrMin(this, arguments, "gt");
}
function mod(x, y) {
  return new this(x).mod(y);
}
function mul(x, y) {
  return new this(x).mul(y);
}
function pow(x, y) {
  return new this(x).pow(y);
}
function random(sd) {
  var d, e, k, n, i = 0, r = new this(1), rd = [];
  if (sd === void 0)
    sd = this.precision;
  else
    checkInt32(sd, 1, MAX_DIGITS);
  k = Math.ceil(sd / LOG_BASE);
  if (!this.crypto) {
    for (; i < k; )
      rd[i++] = Math.random() * 1e7 | 0;
  } else if (crypto.getRandomValues) {
    d = crypto.getRandomValues(new Uint32Array(k));
    for (; i < k; ) {
      n = d[i];
      if (n >= 429e7) {
        d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
      } else {
        rd[i++] = n % 1e7;
      }
    }
  } else if (crypto.randomBytes) {
    d = crypto.randomBytes(k *= 4);
    for (; i < k; ) {
      n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
      if (n >= 214e7) {
        crypto.randomBytes(4).copy(d, i);
      } else {
        rd.push(n % 1e7);
        i += 4;
      }
    }
    i = k / 4;
  } else {
    throw Error(cryptoUnavailable);
  }
  k = rd[--i];
  sd %= LOG_BASE;
  if (k && sd) {
    n = mathpow(10, LOG_BASE - sd);
    rd[i] = (k / n | 0) * n;
  }
  for (; rd[i] === 0; i--)
    rd.pop();
  if (i < 0) {
    e = 0;
    rd = [0];
  } else {
    e = -1;
    for (; rd[0] === 0; e -= LOG_BASE)
      rd.shift();
    for (k = 1, n = rd[0]; n >= 10; n /= 10)
      k++;
    if (k < LOG_BASE)
      e -= LOG_BASE - k;
  }
  r.e = e;
  r.d = rd;
  return r;
}
function round(x) {
  return finalise(x = new this(x), x.e + 1, this.rounding);
}
function sign(x) {
  x = new this(x);
  return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
}
function sin(x) {
  return new this(x).sin();
}
function sinh(x) {
  return new this(x).sinh();
}
function sqrt(x) {
  return new this(x).sqrt();
}
function sub(x, y) {
  return new this(x).sub(y);
}
function sum() {
  var i = 0, args = arguments, x = new this(args[i]);
  external = false;
  for (; x.s && ++i < args.length; )
    x = x.plus(args[i]);
  external = true;
  return finalise(x, this.precision, this.rounding);
}
function tan(x) {
  return new this(x).tan();
}
function tanh(x) {
  return new this(x).tanh();
}
function trunc(x) {
  return finalise(x = new this(x), x.e + 1, 1);
}
P[Symbol.for("nodejs.util.inspect.custom")] = P.toString;
P[Symbol.toStringTag] = "Decimal";
var Decimal = P.constructor = clone(DEFAULTS);
LN10 = new Decimal(LN10);
PI = new Decimal(PI);
var decimal_default = Decimal;

// src/module/amount.ts
var import_big2 = __toESM(require("big.js"));
var import_bn3 = __toESM(require("bn.js"));

// src/module/formatter.ts
var import_toformat = __toESM(require("toformat"));
var toFormat = import_toformat.default;
var formatter_default = toFormat;

// src/module/fraction.ts
var import_big = __toESM(require("big.js"));
var import_bn2 = __toESM(require("bn.js"));
var import_decimal = __toESM(require("decimal.js-light"));

// src/common/constant.ts
var import_bn = __toESM(require("bn.js"));
var MAX_SAFE = 9007199254740991;
function parseBigNumberish(value) {
  const logger16 = createLogger("Raydium_parseBigNumberish");
  if (value instanceof import_bn.default) {
    return value;
  }
  if (typeof value === "string") {
    if (value.match(/^-?[0-9]+$/)) {
      return new import_bn.default(value);
    }
    logger16.logWithError(`invalid BigNumberish string: ${value}`);
  }
  if (typeof value === "number") {
    if (value % 1) {
      logger16.logWithError(`BigNumberish number underflow: ${value}`);
    }
    if (value >= MAX_SAFE || value <= -MAX_SAFE) {
      logger16.logWithError(`BigNumberish number overflow: ${value}`);
    }
    return new import_bn.default(String(value));
  }
  if (typeof value === "bigint") {
    return new import_bn.default(value.toString());
  }
  logger16.error(`invalid BigNumberish value: ${value}`);
  return new import_bn.default(0);
}

// src/module/fraction.ts
var logger2 = createLogger("module/fraction");
var Big = formatter_default(import_big.default);
var Decimal2 = formatter_default(import_decimal.default);
var toSignificantRounding = {
  [0 /* ROUND_DOWN */]: Decimal2.ROUND_DOWN,
  [1 /* ROUND_HALF_UP */]: Decimal2.ROUND_HALF_UP,
  [2 /* ROUND_UP */]: Decimal2.ROUND_UP
};
var toFixedRounding = {
  [0 /* ROUND_DOWN */]: import_big.default.roundDown,
  [1 /* ROUND_HALF_UP */]: import_big.default.roundHalfUp,
  [2 /* ROUND_UP */]: import_big.default.roundUp
};
var Fraction = class {
  numerator;
  denominator;
  constructor(numerator, denominator = new import_bn2.default(1)) {
    this.numerator = parseBigNumberish(numerator);
    this.denominator = parseBigNumberish(denominator);
  }
  get quotient() {
    return this.numerator.div(this.denominator);
  }
  invert() {
    return new Fraction(this.denominator, this.numerator);
  }
  add(other) {
    const otherParsed = other instanceof Fraction ? other : new Fraction(parseBigNumberish(other));
    if (this.denominator.eq(otherParsed.denominator)) {
      return new Fraction(this.numerator.add(otherParsed.numerator), this.denominator);
    }
    return new Fraction(this.numerator.mul(otherParsed.denominator).add(otherParsed.numerator.mul(this.denominator)), this.denominator.mul(otherParsed.denominator));
  }
  sub(other) {
    const otherParsed = other instanceof Fraction ? other : new Fraction(parseBigNumberish(other));
    if (this.denominator.eq(otherParsed.denominator)) {
      return new Fraction(this.numerator.sub(otherParsed.numerator), this.denominator);
    }
    return new Fraction(this.numerator.mul(otherParsed.denominator).sub(otherParsed.numerator.mul(this.denominator)), this.denominator.mul(otherParsed.denominator));
  }
  mul(other) {
    const otherParsed = other instanceof Fraction ? other : new Fraction(parseBigNumberish(other));
    return new Fraction(this.numerator.mul(otherParsed.numerator), this.denominator.mul(otherParsed.denominator));
  }
  div(other) {
    const otherParsed = other instanceof Fraction ? other : new Fraction(parseBigNumberish(other));
    return new Fraction(this.numerator.mul(otherParsed.denominator), this.denominator.mul(otherParsed.numerator));
  }
  toSignificant(significantDigits, format = { groupSeparator: "" }, rounding = 1 /* ROUND_HALF_UP */) {
    if (!Number.isInteger(significantDigits))
      logger2.logWithError(`${significantDigits} is not an integer.`);
    if (significantDigits <= 0)
      logger2.logWithError(`${significantDigits} is not positive.`);
    Decimal2.set({ precision: significantDigits + 1, rounding: toSignificantRounding[rounding] });
    const quotient = new Decimal2(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
  }
  toFixed(decimalPlaces, format = { groupSeparator: "" }, rounding = 1 /* ROUND_HALF_UP */) {
    if (!Number.isInteger(decimalPlaces))
      logger2.logWithError(`${decimalPlaces} is not an integer.`);
    if (decimalPlaces < 0)
      logger2.logWithError(`${decimalPlaces} is negative.`);
    Big.DP = decimalPlaces;
    Big.RM = toFixedRounding[rounding] || 1;
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format);
  }
  isZero() {
    return this.numerator.isZero();
  }
};

// src/module/amount.ts
var logger3 = createLogger("Raydium_amount");
var Big2 = formatter_default(import_big2.default);
function splitNumber(num, decimals) {
  let integral = "0";
  let fractional = "0";
  if (num.includes(".")) {
    const splited = num.split(".");
    if (splited.length === 2) {
      [integral, fractional] = splited;
      fractional = fractional.padEnd(decimals, "0");
    } else {
      logger3.logWithError(`invalid number string, num: ${num}`);
    }
  } else {
    integral = num;
  }
  return [integral, fractional.slice(0, decimals) || fractional];
}
var TokenAmount = class extends Fraction {
  token;
  logger;
  constructor(token, amount, isRaw = true, name) {
    let parsedAmount = new import_bn3.default(0);
    const multiplier = BN_TEN.pow(new import_bn3.default(token.decimals));
    if (isRaw) {
      parsedAmount = parseBigNumberish(amount);
    } else {
      let integralAmount = new import_bn3.default(0);
      let fractionalAmount = new import_bn3.default(0);
      if (typeof amount === "string" || typeof amount === "number" || typeof amount === "bigint") {
        const [integral, fractional] = splitNumber(amount.toString(), token.decimals);
        integralAmount = parseBigNumberish(integral);
        fractionalAmount = parseBigNumberish(fractional);
      }
      integralAmount = integralAmount.mul(multiplier);
      parsedAmount = integralAmount.add(fractionalAmount);
    }
    super(parsedAmount, multiplier);
    this.logger = createLogger(name || "TokenAmount");
    this.token = token;
  }
  get raw() {
    return this.numerator;
  }
  isZero() {
    return this.raw.isZero();
  }
  gt(other) {
    if (!this.token.equals(other.token))
      this.logger.logWithError("gt token not equals");
    return this.raw.gt(other.raw);
  }
  lt(other) {
    if (!this.token.equals(other.token))
      this.logger.logWithError("lt token not equals");
    return this.raw.lt(other.raw);
  }
  add(other) {
    if (!this.token.equals(other.token))
      this.logger.logWithError("add token not equals");
    return new TokenAmount(this.token, this.raw.add(other.raw));
  }
  subtract(other) {
    if (!this.token.equals(other.token))
      this.logger.logWithError("sub token not equals");
    return new TokenAmount(this.token, this.raw.sub(other.raw));
  }
  toSignificant(significantDigits = this.token.decimals, format, rounding = 0 /* ROUND_DOWN */) {
    return super.toSignificant(significantDigits, format, rounding);
  }
  toFixed(decimalPlaces = this.token.decimals, format, rounding = 0 /* ROUND_DOWN */) {
    if (decimalPlaces > this.token.decimals)
      this.logger.logWithError("decimals overflow");
    return super.toFixed(decimalPlaces, format, rounding);
  }
  toExact(format = { groupSeparator: "" }) {
    Big2.DP = this.token.decimals;
    return new Big2(this.numerator.toString()).div(this.denominator.toString()).toFormat(format);
  }
};

// src/raydium/token/constant.ts
var import_web32 = require("@solana/web3.js");
var import_spl_token2 = require("@solana/spl-token");
var SOL_INFO = {
  chainId: 101,
  address: import_web32.PublicKey.default.toBase58(),
  programId: import_spl_token2.TOKEN_PROGRAM_ID.toBase58(),
  decimals: 9,
  symbol: "SOL",
  name: "solana",
  logoURI: `https://img-v1.raydium.io/icon/So11111111111111111111111111111111111111112.png`,
  tags: [],
  priority: 2,
  type: "raydium",
  extensions: {
    coingeckoId: "solana"
  }
};
var TOKEN_WSOL = {
  chainId: 101,
  address: "So11111111111111111111111111111111111111112",
  programId: import_spl_token2.TOKEN_PROGRAM_ID.toBase58(),
  decimals: 9,
  symbol: "WSOL",
  name: "Wrapped SOL",
  logoURI: `https://img-v1.raydium.io/icon/So11111111111111111111111111111111111111112.png`,
  tags: [],
  priority: 2,
  type: "raydium",
  extensions: {
    coingeckoId: "solana"
  }
};

// src/module/token.ts
var import_web34 = require("@solana/web3.js");

// src/common/pubKey.ts
var import_web33 = require("@solana/web3.js");
var import_spl_token3 = require("@solana/spl-token");
function accountMeta({ pubkey, isSigner = false, isWritable = true }) {
  return {
    pubkey,
    isWritable,
    isSigner
  };
}
var commonSystemAccountMeta = [
  accountMeta({ pubkey: import_spl_token3.TOKEN_PROGRAM_ID, isWritable: false }),
  accountMeta({ pubkey: import_web33.SystemProgram.programId, isWritable: false }),
  accountMeta({ pubkey: import_web33.SYSVAR_RENT_PUBKEY, isWritable: false })
];
function validateAndParsePublicKey({
  publicKey: orgPubKey,
  transformSol
}) {
  const publicKey2 = tryParsePublicKey(orgPubKey.toString());
  if (publicKey2 instanceof import_web33.PublicKey) {
    if (transformSol && publicKey2.equals(SOLMint))
      return WSOLMint;
    return publicKey2;
  }
  if (transformSol && publicKey2.toString() === SOLMint.toBase58())
    return WSOLMint;
  if (typeof publicKey2 === "string") {
    if (publicKey2 === import_web33.PublicKey.default.toBase58())
      return import_web33.PublicKey.default;
    try {
      const key = new import_web33.PublicKey(publicKey2);
      return key;
    } catch {
      throw new Error("invalid public key");
    }
  }
  throw new Error("invalid public key");
}
function tryParsePublicKey(v) {
  try {
    return new import_web33.PublicKey(v);
  } catch (e) {
    return v;
  }
}
var MEMO_PROGRAM_ID = new import_web33.PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
var MEMO_PROGRAM_ID2 = new import_web33.PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
var RENT_PROGRAM_ID = new import_web33.PublicKey("SysvarRent111111111111111111111111111111111");
var CLOCK_PROGRAM_ID = new import_web33.PublicKey("SysvarC1ock11111111111111111111111111111111");
var METADATA_PROGRAM_ID = new import_web33.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
var INSTRUCTION_PROGRAM_ID = new import_web33.PublicKey("Sysvar1nstructions1111111111111111111111111");
var SYSTEM_PROGRAM_ID = import_web33.SystemProgram.programId;
var RAYMint = new import_web33.PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R");
var PAIMint = new import_web33.PublicKey("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS");
var SRMMint = new import_web33.PublicKey("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt");
var USDCMint = new import_web33.PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");
var USDTMint = new import_web33.PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB");
var mSOLMint = new import_web33.PublicKey("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So");
var stSOLMint = new import_web33.PublicKey("7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj");
var USDHMint = new import_web33.PublicKey("USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX");
var NRVMint = new import_web33.PublicKey("NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa");
var ANAMint = new import_web33.PublicKey("ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo");
var ETHMint = new import_web33.PublicKey("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs");
var WSOLMint = new import_web33.PublicKey("So11111111111111111111111111111111111111112");
var SOLMint = import_web33.PublicKey.default;
function solToWSol(mint) {
  return validateAndParsePublicKey({ publicKey: mint, transformSol: true });
}

// src/module/token.ts
var _Token = class {
  symbol;
  name;
  decimals;
  isToken2022;
  mint;
  constructor({ mint, decimals, symbol, name, skipMint = false, isToken2022 = false }) {
    if (mint === SOLMint.toBase58() || mint instanceof import_web34.PublicKey && SOLMint.equals(mint)) {
      this.decimals = TOKEN_WSOL.decimals;
      this.symbol = TOKEN_WSOL.symbol;
      this.name = TOKEN_WSOL.name;
      this.mint = new import_web34.PublicKey(TOKEN_WSOL.address);
      this.isToken2022 = false;
      return;
    }
    this.decimals = decimals;
    this.symbol = symbol || mint.toString().substring(0, 6);
    this.name = name || mint.toString().substring(0, 6);
    this.mint = skipMint ? import_web34.PublicKey.default : validateAndParsePublicKey({ publicKey: mint });
    this.isToken2022 = isToken2022;
  }
  equals(other) {
    if (this === other) {
      return true;
    }
    return this.mint.equals(other.mint);
  }
};
var Token = _Token;
__publicField(Token, "WSOL", new _Token({
  ...TOKEN_WSOL,
  mint: TOKEN_WSOL.address
}));

// src/module/currency.ts
var _Currency = class {
  symbol;
  name;
  decimals;
  constructor({ decimals, symbol = "UNKNOWN", name = "UNKNOWN" }) {
    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
  }
  equals(other) {
    return this === other;
  }
};
var Currency = _Currency;
__publicField(Currency, "SOL", new _Currency(SOL_INFO));

// src/module/percent.ts
var import_bn4 = __toESM(require("bn.js"));
var _100_PERCENT = new Fraction(new import_bn4.default(100));
var Percent = class extends Fraction {
  toSignificant(significantDigits = 5, format, rounding) {
    return this.mul(_100_PERCENT).toSignificant(significantDigits, format, rounding);
  }
  toFixed(decimalPlaces = 2, format, rounding) {
    return this.mul(_100_PERCENT).toFixed(decimalPlaces, format, rounding);
  }
};

// src/module/price.ts
var logger4 = createLogger("Raydium_price");
var Price = class extends Fraction {
  baseToken;
  quoteToken;
  scalar;
  constructor(params) {
    const { baseToken, quoteToken, numerator, denominator } = params;
    super(numerator, denominator);
    this.baseToken = baseToken;
    this.quoteToken = quoteToken;
    this.scalar = new Fraction(tenExponential(baseToken.decimals), tenExponential(quoteToken.decimals));
  }
  get raw() {
    return new Fraction(this.numerator, this.denominator);
  }
  get adjusted() {
    return super.mul(this.scalar);
  }
  invert() {
    return new Price({
      baseToken: this.quoteToken,
      quoteToken: this.baseToken,
      denominator: this.numerator,
      numerator: this.denominator
    });
  }
  mul(other) {
    if (this.quoteToken !== other.baseToken)
      logger4.logWithError("mul token not equals");
    const fraction = super.mul(other);
    return new Price({
      baseToken: this.baseToken,
      quoteToken: other.quoteToken,
      denominator: fraction.denominator,
      numerator: fraction.numerator
    });
  }
  toSignificant(significantDigits = this.quoteToken.decimals, format, rounding) {
    return this.adjusted.toSignificant(significantDigits, format, rounding);
  }
  toFixed(decimalPlaces = this.quoteToken.decimals, format, rounding) {
    return this.adjusted.toFixed(decimalPlaces, format, rounding);
  }
};

// src/common/utility.ts
var import_web35 = require("@solana/web3.js");
var import_bn5 = __toESM(require("bn.js"));
function notInnerObject(v) {
  return typeof v === "object" && v !== null && ![Token, TokenAmount, import_web35.PublicKey, Fraction, import_bn5.default, Price, Percent].some((o) => typeof o === "object" && v instanceof o);
}
function jsonInfo2PoolKeys(jsonInfo) {
  return typeof jsonInfo === "string" ? tryParsePublicKey(jsonInfo) : Array.isArray(jsonInfo) ? jsonInfo.map((k) => jsonInfo2PoolKeys(k)) : notInnerObject(jsonInfo) ? Object.fromEntries(Object.entries(jsonInfo).map(([k, v]) => [k, jsonInfo2PoolKeys(v)])) : jsonInfo;
}

// src/common/bignumber.ts
var BN_ZERO = new import_bn6.default(0);
var BN_ONE = new import_bn6.default(1);
var BN_TWO = new import_bn6.default(2);
var BN_THREE = new import_bn6.default(3);
var BN_FIVE = new import_bn6.default(5);
var BN_TEN = new import_bn6.default(10);
var BN_100 = new import_bn6.default(100);
var BN_1000 = new import_bn6.default(1e3);
var BN_10000 = new import_bn6.default(1e4);
function tenExponential(shift) {
  return BN_TEN.pow(parseBigNumberish(shift));
}
function divCeil(a, b) {
  const dm = a.divmod(b);
  if (dm.mod.isZero())
    return dm.div;
  return dm.div.isNeg() ? dm.div.isubn(1) : dm.div.iaddn(1);
}
function ceilDiv(tokenAmount, feeNumerator, feeDenominator) {
  return tokenAmount.mul(feeNumerator).add(feeDenominator).sub(new import_bn6.default(1)).div(feeDenominator);
}
function floorDiv(tokenAmount, feeNumerator, feeDenominator) {
  return tokenAmount.mul(feeNumerator).div(feeDenominator);
}

// src/common/date.ts
var isNumber = (val) => typeof val === "number";
function isDateBefore(timestampA, timestampB, options) {
  const realTimestampB = isNumber(timestampB) ? timestampB * (options?.unit === "s" ? 1e3 : 1) : timestampB;
  return new Date(timestampA).getTime() <= realTimestampB;
}
function isDateAfter(timestampA, timestampB, options) {
  const realTimestampB = isNumber(timestampB) ? timestampB * (options?.unit === "s" ? 1e3 : 1) : timestampB;
  return new Date(timestampA).getTime() > realTimestampB;
}

// src/common/lodash.ts
function chunkArray(arr, chunkSize = 1, cache = []) {
  const tmp = [...arr];
  if (chunkSize <= 0)
    return cache;
  while (tmp.length)
    cache.push(tmp.splice(0, chunkSize));
  return cache;
}

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

// src/common/pda.ts
var import_web37 = require("@solana/web3.js");
var import_spl_token5 = require("@solana/spl-token");

// src/common/txTool/txUtils.ts
var import_web36 = require("@solana/web3.js");

// src/common/txTool/txType.ts
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

// src/common/txTool/txUtils.ts
var import_spl_token4 = require("@solana/spl-token");
var logger5 = createLogger("Raydium_txUtil");
var MAX_BASE64_SIZE = 1644;
function addComputeBudget(config2) {
  const ins = [];
  const insTypes = [];
  if (config2.microLamports) {
    ins.push(import_web36.ComputeBudgetProgram.setComputeUnitPrice({ microLamports: config2.microLamports }));
    insTypes.push(InstructionType.SetComputeUnitPrice);
  }
  if (config2.units) {
    ins.push(import_web36.ComputeBudgetProgram.setComputeUnitLimit({ units: config2.units }));
    insTypes.push(InstructionType.SetComputeUnitLimit);
  }
  return {
    instructions: ins,
    instructionTypes: insTypes
  };
}
async function getRecentBlockHash(connection, propsCommitment) {
  const commitment = propsCommitment ?? "confirmed";
  return (await connection.getLatestBlockhash?.({ commitment }))?.blockhash;
}
async function confirmTransaction(connection, txId) {
  connection.getSignatureStatuses([txId]);
  return new Promise((resolve, reject) => {
    const id = setTimeout(reject, 60 * 1e3);
    connection.onSignature(txId, (signatureResult) => {
      clearTimeout(id);
      if (!signatureResult.err) {
        resolve("");
        return;
      }
      reject(Object.assign(signatureResult.err, { txId }));
    }, "confirmed");
  });
}
function forecastTransactionSize(instructions, signers) {
  if (instructions.length < 1)
    logger5.logWithError(`no instructions provided: ${instructions.toString()}`);
  if (signers.length < 1)
    logger5.logWithError(`no signers provided:, ${signers.toString()}`);
  const transaction = new import_web36.Transaction();
  transaction.recentBlockhash = "11111111111111111111111111111111";
  transaction.feePayer = signers[0];
  transaction.add(...instructions);
  try {
    return Buffer.from(transaction.serialize({ verifySignatures: false })).toString("base64").length < MAX_BASE64_SIZE;
  } catch (error) {
    return false;
  }
}
async function simulateMultipleInstruction(connection, instructions, keyword, batchRequest = true) {
  const feePayer = new import_web36.PublicKey("RaydiumSimuLateTransaction11111111111111111");
  const transactions = [];
  let transaction = new import_web36.Transaction();
  transaction.feePayer = feePayer;
  for (const instruction of instructions) {
    if (!forecastTransactionSize([...transaction.instructions, instruction], [feePayer])) {
      transactions.push(transaction);
      transaction = new import_web36.Transaction();
      transaction.feePayer = feePayer;
    }
    transaction.add(instruction);
  }
  if (transaction.instructions.length > 0) {
    transactions.push(transaction);
  }
  let results = [];
  try {
    results = await simulateTransaction(connection, transactions, batchRequest);
    if (results.find((i) => i.err !== null))
      throw Error("rpc simulateTransaction error");
  } catch (error) {
    if (error instanceof Error) {
      logger5.logWithError("failed to simulate for instructions", "RPC_ERROR", {
        message: error.message
      });
    }
  }
  const logs = [];
  for (const result of results) {
    logger5.debug("simulate result:", result);
    if (result.logs) {
      const filteredLog = result.logs.filter((log3) => log3 && log3.includes(keyword));
      logger5.debug("filteredLog:", logs);
      if (!filteredLog.length)
        logger5.logWithError("simulate log not match keyword", "keyword", keyword);
      logs.push(...filteredLog);
    }
  }
  return logs;
}
function parseSimulateLogToJson(log3, keyword) {
  const results = log3.match(/{["\w:,]+}/g);
  if (!results || results.length !== 1) {
    return logger5.logWithError(`simulate log fail to match json, keyword: ${keyword}`);
  }
  return results[0];
}
function parseSimulateValue(log3, key) {
  const reg = new RegExp(`"${key}":(\\d+)`, "g");
  const results = reg.exec(log3);
  if (!results || results.length !== 2) {
    return logger5.logWithError(`simulate log fail to match key", key: ${key}`);
  }
  return results[1];
}
function findProgramAddress(seeds, programId) {
  const [publicKey2, nonce] = import_web36.PublicKey.findProgramAddressSync(seeds, programId);
  return { publicKey: publicKey2, nonce };
}
async function simulateTransaction(connection, transactions, batchRequest) {
  let results = [];
  if (batchRequest) {
    const getLatestBlockhash = await connection.getLatestBlockhash();
    const encodedTransactions = [];
    for (const transaction of transactions) {
      transaction.recentBlockhash = getLatestBlockhash.blockhash;
      transaction.lastValidBlockHeight = getLatestBlockhash.lastValidBlockHeight;
      const message = transaction._compile();
      const signData = message.serialize();
      const wireTransaction = transaction._serialize(signData);
      const encodedTransaction = wireTransaction.toString("base64");
      encodedTransactions.push(encodedTransaction);
    }
    const batch = encodedTransactions.map((keys) => {
      const args = connection._buildArgs([keys], void 0, "base64");
      return {
        methodName: "simulateTransaction",
        args
      };
    });
    const reqData = [];
    const itemReqIndex = 20;
    for (let i = 0; i < Math.ceil(batch.length / itemReqIndex); i++) {
      reqData.push(batch.slice(i * itemReqIndex, (i + 1) * itemReqIndex));
    }
    results = await (await Promise.all(reqData.map(async (i) => (await connection._rpcBatchRequest(i)).map((ii) => ii.result.value)))).flat();
  } else {
    try {
      results = await Promise.all(transactions.map(async (transaction) => await (await connection.simulateTransaction(transaction)).value));
    } catch (error) {
      if (error instanceof Error) {
        logger5.logWithError("failed to get info for multiple accounts", "RPC_ERROR", {
          message: error.message
        });
      }
    }
  }
  return results;
}
function checkLegacyTxSize({
  instructions,
  payer,
  signers
}) {
  return forecastTransactionSize(instructions, [payer, ...signers]);
}
function checkV0TxSize({
  instructions,
  payer,
  lookupTableAddressAccount,
  recentBlockhash = import_web36.Keypair.generate().publicKey.toString()
}) {
  const transactionMessage = new import_web36.TransactionMessage({
    payerKey: payer,
    recentBlockhash,
    instructions
  });
  const messageV0 = transactionMessage.compileToV0Message(Object.values(lookupTableAddressAccount ?? {}));
  try {
    const buildLength = Buffer.from(new import_web36.VersionedTransaction(messageV0).serialize()).toString("base64").length;
    return buildLength < MAX_BASE64_SIZE;
  } catch (error) {
    return false;
  }
}
var toBuffer = (arr) => {
  if (Buffer.isBuffer(arr)) {
    return arr;
  } else if (arr instanceof Uint8Array) {
    return Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength);
  } else {
    return Buffer.from(arr);
  }
};
var txToBase64 = (transaction) => {
  let serialized = transaction.serialize({ requireAllSignatures: false, verifySignatures: false });
  if (transaction instanceof import_web36.VersionedTransaction)
    serialized = toBuffer(serialized);
  try {
    return serialized instanceof Buffer ? serialized.toString("base64") : Buffer.from(serialized).toString("base64");
  } catch {
    return serialized.toString("base64");
  }
};
function printSimulate(transactions) {
  const allBase64 = [];
  transactions.forEach((transaction) => {
    if (transaction instanceof import_web36.Transaction) {
      if (!transaction.recentBlockhash)
        transaction.recentBlockhash = import_spl_token4.TOKEN_PROGRAM_ID.toBase58();
      if (!transaction.feePayer)
        transaction.feePayer = import_web36.Keypair.generate().publicKey;
    }
    allBase64.push(txToBase64(transaction));
  });
  console.log("simulate tx string:", allBase64);
  return allBase64;
}

// src/common/pda.ts
function getATAAddress(owner, mint, programId) {
  return findProgramAddress([owner.toBuffer(), (programId ?? import_spl_token5.TOKEN_PROGRAM_ID).toBuffer(), mint.toBuffer()], new import_web37.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"));
}

// src/common/programId.ts
var import_web38 = require("@solana/web3.js");
var FARM_PROGRAM_ID_V3 = new import_web38.PublicKey("EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q");
var FARM_PROGRAM_ID_V4 = new import_web38.PublicKey("CBuCnLe26faBpcBP2fktp4rp8abpcAnTWft6ZrP5Q4T");
var FARM_PROGRAM_ID_V5 = new import_web38.PublicKey("9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z");
var FARM_PROGRAM_ID_V6 = new import_web38.PublicKey("FarmqiPv5eAj3j1GMdMCMUGXqPUvmquZtMy86QH6rzhG");
var UTIL1216 = new import_web38.PublicKey("CLaimxFqjHzgTJtAGHU47NPhg6qrc5sCnpC4tBLyABQS");
var OPEN_BOOK_PROGRAM = new import_web38.PublicKey("srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX");
var SERUM_PROGRAM_ID_V3 = new import_web38.PublicKey("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin");
var AMM_V4 = new import_web38.PublicKey("675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8");
var AMM_STABLE = new import_web38.PublicKey("5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h");
var LIQUIDITY_POOL_PROGRAM_ID_V5_MODEL = new import_web38.PublicKey("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo");
var CLMM_PROGRAM_ID = new import_web38.PublicKey("CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK");
var CLMM_LOCK_PROGRAM_ID = new import_web38.PublicKey("LockrWmn6K5twhz3y9w1dQERbmgSaRkfnTeTKbpofwE");
var CLMM_LOCK_AUTH_ID = new import_web38.PublicKey("kN1kEznaF5Xbd8LYuqtEFcxzWSBk5Fv6ygX6SqEGJVy");
var Router = new import_web38.PublicKey("routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS");
var FEE_DESTINATION_ID = new import_web38.PublicKey("7YttLkHDoNj9wyDur5pM1ejNaAvT9X4eqaYcHQqtj2G5");
var IDO_PROGRAM_ID_V1 = new import_web38.PublicKey("6FJon3QE27qgPVggARueB22hLvoh22VzJpXv4rBEoSLF");
var IDO_PROGRAM_ID_V2 = new import_web38.PublicKey("CC12se5To1CdEuw7fDS27B7Geo5jJyL7t5UK2B44NgiH");
var IDO_PROGRAM_ID_V3 = new import_web38.PublicKey("9HzJyW1qZsEiSfMUf6L2jo3CcTKAyBmSyKdwQeYisHrC");
var IDO_PROGRAM_ID_V4 = new import_web38.PublicKey("DropEU8AvevN3UrXWXTMuz3rqnMczQVNjq3kcSdW2SQi");
var CREATE_CPMM_POOL_PROGRAM = new import_web38.PublicKey("CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C");
var CREATE_CPMM_POOL_AUTH = new import_web38.PublicKey("GpMZbSM2GgvTKHJirzeGfMFoaZ8UR2X7F4v8vHTvxFbL");
var CREATE_CPMM_POOL_FEE_ACC = new import_web38.PublicKey("DNXgeM9EiiaAbaWvwjHj9fQQLAX5ZsfHyvmYUNRAdNC8");
var DEV_CREATE_CPMM_POOL_PROGRAM = new import_web38.PublicKey("CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW");
var DEV_CREATE_CPMM_POOL_AUTH = new import_web38.PublicKey("7rQ1QFNosMkUCuh7Z7fPbTHvh73b68sQYdirycEzJVuw");
var DEV_CREATE_CPMM_POOL_FEE_ACC = new import_web38.PublicKey("G11FKBRaAkHAKuLCgLM6K6NUc9rTjPAznRCjZifrTQe2");
var LOCK_CPMM_PROGRAM = new import_web38.PublicKey("LockrWmn6K5twhz3y9w1dQERbmgSaRkfnTeTKbpofwE");
var DEV_LOCK_CPMM_PROGRAM = new import_web38.PublicKey("DLockwT7X7sxtLmGH9g5kmfcjaBtncdbUmi738m5bvQC");
var LOCK_CPMM_AUTH = new import_web38.PublicKey("3f7GcQFG397GAaEnv51zR6tsTVihYRydnydDD1cXekxH");
var DEV_LOCK_CPMM_AUTH = new import_web38.PublicKey("7AFUeLVRjBfzqK3tTGw8hN48KLQWSk6DTE8xprWdPqix");
var LAUNCHPAD_PROGRAM = new import_web38.PublicKey("LanMV9sAd7wArD4vJFi2qDdfnVhFxYSUg6eADduJ3uj");
var LAUNCHPAD_AUTH = new import_web38.PublicKey("WLHv2UAZm6z4KyaaELi5pjdbJh6RESMva1Rnn8pJVVh");
var DEV_LAUNCHPAD_PROGRAM = new import_web38.PublicKey("LanD8FpTBBvzZFXjTxsAoipkFsxPUCDB4qAqKxYDiNP");
var DEV_LAUNCHPAD_AUTH = new import_web38.PublicKey("HYNHiyKJ3gGVFvyxJAurK7qr7P2o5J9THmvCGMdULtpW");
var IDO_ALL_PROGRAM = {
  IDO_PROGRAM_ID_V1,
  IDO_PROGRAM_ID_V2,
  IDO_PROGRAM_ID_V3,
  IDO_PROGRAM_ID_V4
};
var ALL_PROGRAM_ID = {
  AMM_V4,
  AMM_STABLE,
  CLMM_PROGRAM_ID,
  CLMM_LOCK_PROGRAM_ID,
  CLMM_LOCK_AUTH_ID,
  FARM_PROGRAM_ID_V3,
  FARM_PROGRAM_ID_V5,
  FARM_PROGRAM_ID_V6,
  OPEN_BOOK_PROGRAM,
  SERUM_PROGRAM_ID_V3,
  UTIL1216,
  Router,
  CREATE_CPMM_POOL_PROGRAM,
  CREATE_CPMM_POOL_AUTH,
  CREATE_CPMM_POOL_FEE_ACC,
  LOCK_CPMM_PROGRAM,
  LOCK_CPMM_AUTH,
  LAUNCHPAD_PROGRAM,
  LAUNCHPAD_AUTH
};
var DEVNET_PROGRAM_ID = {
  SERUM_MARKET: import_web38.PublicKey.default,
  OPENBOOK_MARKET: new import_web38.PublicKey("EoTcMgcDRTJVZDMZWBoU6rhYHZfkNTVEAfz3uUJRcYGj"),
  UTIL1216: import_web38.PublicKey.default,
  FarmV3: new import_web38.PublicKey("85BFyr98MbCUU9MVTEgzx1nbhWACbJqLzho6zd6DZcWL"),
  FarmV5: new import_web38.PublicKey("EcLzTrNg9V7qhcdyXDe2qjtPkiGzDM2UbdRaeaadU5r2"),
  FarmV6: new import_web38.PublicKey("Farm2hJLcqPtPg8M4rR6DMrsRNc5TPm5Cs4bVQrMe2T7"),
  AmmV4: new import_web38.PublicKey("HWy1jotHpo6UqeQxx49dpYYdQB8wj9Qk9MdxwjLvDHB8"),
  AmmStable: new import_web38.PublicKey("DDg4VmQaJV9ogWce7LpcjBA9bv22wRp5uaTPa5pGjijF"),
  CLMM: new import_web38.PublicKey("devi51mZmdwUJGU9hjN27vEz64Gps7uUefqxg27EAtH"),
  CLMM_LOCK_PROGRAM_ID: new import_web38.PublicKey("DLockwT7X7sxtLmGH9g5kmfcjaBtncdbUmi738m5bvQC"),
  CLMM_LOCK_AUTH_ID: new import_web38.PublicKey("8qmHNvu2Kr2C7U8mJL4Vz1vTDxMhVuXKREwU7TNoaVEo"),
  Router: new import_web38.PublicKey("BVChZ3XFEwTMUk1o9i3HAf91H6mFxSwa5X2wFAWhYPhU"),
  CREATE_CPMM_POOL_PROGRAM: DEV_CREATE_CPMM_POOL_PROGRAM,
  CREATE_CPMM_POOL_AUTH: DEV_CREATE_CPMM_POOL_AUTH,
  CREATE_CPMM_POOL_FEE_ACC: DEV_CREATE_CPMM_POOL_FEE_ACC,
  FEE_DESTINATION_ID: new import_web38.PublicKey("3XMrhbv989VxAMi3DErLV9eJht1pHppW5LbKxe9fkEFR"),
  LOCK_CPMM_PROGRAM: DEV_LOCK_CPMM_PROGRAM,
  LCOK_CPMM_AUTH: DEV_LOCK_CPMM_AUTH,
  LAUNCHPAD_PROGRAM: DEV_LAUNCHPAD_PROGRAM,
  LAUNCHPAD_AUTH: DEV_LAUNCHPAD_AUTH
};

// src/common/transfer.ts
var import_bn7 = __toESM(require("bn.js"));
var POINT = 1e4;
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
  const maxFee = new import_bn7.default(nowFeeConfig.maximumFee.toString());
  const expirationTime = epochInfo.epoch < feeConfig.newerTransferFee.epoch ? (Number(feeConfig.newerTransferFee.epoch) * epochInfo.slotsInEpoch - epochInfo.absoluteSlot) * 400 / 1e3 : void 0;
  if (addFee) {
    if (nowFeeConfig.transferFeeBasisPoints === POINT) {
      const nowMaxFee = new import_bn7.default(nowFeeConfig.maximumFee.toString());
      return {
        amount: amount.add(nowMaxFee),
        fee: nowMaxFee,
        expirationTime
      };
    } else {
      const _TAmount = BNDivCeil(amount.mul(new import_bn7.default(POINT)), new import_bn7.default(POINT - nowFeeConfig.transferFeeBasisPoints));
      const nowMaxFee = new import_bn7.default(nowFeeConfig.maximumFee.toString());
      const TAmount = _TAmount.sub(amount).gt(nowMaxFee) ? amount.add(nowMaxFee) : _TAmount;
      const _fee = BNDivCeil(TAmount.mul(new import_bn7.default(nowFeeConfig.transferFeeBasisPoints)), new import_bn7.default(POINT));
      const fee = _fee.gt(maxFee) ? maxFee : _fee;
      return {
        amount: TAmount,
        fee,
        expirationTime
      };
    }
  } else {
    const _fee = BNDivCeil(amount.mul(new import_bn7.default(nowFeeConfig.transferFeeBasisPoints)), new import_bn7.default(POINT));
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
  const { div: div2, mod: mod2 } = bn1.divmod(bn2);
  if (mod2.gt(new import_bn7.default(0))) {
    return div2.add(new import_bn7.default(1));
  } else {
    return div2;
  }
}
function ceilDivBN(amountA, amountB) {
  if (amountA.isZero())
    return new import_bn7.default(0);
  const quotient = amountA.div(amountB);
  if (quotient.isZero())
    return new import_bn7.default(1);
  const remainder = amountA.mod(amountB);
  if (remainder.gt(new import_bn7.default(0))) {
    return quotient.add(new import_bn7.default(1));
  }
  return quotient;
}

// src/common/txTool/lookupTable.ts
var import_web39 = require("@solana/web3.js");
async function getMultipleLookupTableInfo({
  connection,
  address
}) {
  const dataInfos = await getMultipleAccountsInfo(connection, [...new Set(address.map((i) => i.toString()))].map((i) => new import_web39.PublicKey(i)));
  const outDict = {};
  for (let i = 0; i < address.length; i++) {
    const info = dataInfos[i];
    const key = address[i];
    if (!info)
      continue;
    const lookupAccount = new import_web39.AddressLookupTableAccount({
      key,
      state: import_web39.AddressLookupTableAccount.deserialize(info.data)
    });
    outDict[key.toString()] = lookupAccount;
    LOOKUP_TABLE_CACHE[key.toString()] = lookupAccount;
  }
  return outDict;
}
var LOOKUP_TABLE_CACHE = {
  "AcL1Vo8oy1ULiavEcjSUcwfBSForXMudcZvDZy5nzJkU": new import_web39.AddressLookupTableAccount({
    key: new import_web39.PublicKey("AcL1Vo8oy1ULiavEcjSUcwfBSForXMudcZvDZy5nzJkU"),
    state: import_web39.AddressLookupTableAccount.deserialize(Buffer.from("AQAAAP//////////I1rcEwAAAAAvAQYwun9CU6c5Ikm2pAj+D9IEnCOR45nK+SFTGSdpd6J6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbd9uHXZaGT2cvhRs7reawctIXtX1s3kTqM9YV+/wCpBt324e51j94YQl285GzN2rYa/E2DuQ0n/r35KNihi/wFSlNQ+F3IgtYUpVZyeIopbd8eq6vQpgZ4iEky9O72oAVKU1qZKSEGTSTocWDaOHx8NbXdvJK7geQfqEBBBUSNBqfVFxksXFEhjMlMPUrxf1ja7gibof1E49vZigAAAAAGp9UXGMd0yShWY5hpHV62i164o5tLbVxzVVshAAAAAIyXJY9OJInxuz0QKRSODYMLWhOZ2v8QhASOe9jb6fhZC3BlsePRfEU4nVJ/awTDzVi4bHMaoP21SbbRvAP4KUbIScv+6Yw2LHF/6K0ZjUPibbSWXCirYPGuuVl7zT789IUPLW4CpHr4JNCatp3ELXDLKMv6JJ+37le50lbBJ2LvBkX2T9y7AHdNGviJAqQNtlDUDCnauQRWybsLji6nPM8Qkw5asQRvCdB3MbX6IEBwytOrpM32l4jQygKG9TKgR0vZScQ2AsM/IHeQ7RajUkyhuZdc8SGiqQz/7H34torNR/Wir3sl0ruUrVxJWEZfUg+QLNAxxODdBi53/OP7Ioil1cqeBM9dtZC3FLov4yyxWRM/wcGStyJX/QfTnLBAHqkqWotPKVlShCVQqpP9W5W1rOao65IMk5QuQ2kMIOxzDMKAy2vjGSxQODgBz0QwGA+eP4ZjIjrIAQaXENv31QfLlOdXSRCkaybRniDHF4C8YcwhcvsqrOVuTP4B2Na+9wLdtrB31uz2rtlFI5kahdsnp/d1SrASDInYCtTYtdoke4kX+hoKWcEWM4Tle8pTUkUVv4BxS6fje/EzKBE4Qu/YsA/yfEEFGcr8Z57VKDw8uQzpiru7g4lvjnfapW62W030syevD8k07SGoxUHiuT/ai7gAHWWhDsVmg/C63ajgpkH7Sn3GdutArDTfyqOkdqv4/IPC/EFFy7mGkfDd2C57N5a/4jC+BbmJy7wQaSEZr0CQU88lPtUxIVvzGjC95b8Ooss2TqmkrayGKofkPMGQn7Ux+9lfwBSNfxwH8NgbpqC/7LNlV4I7nCvsXf3p+ohQk9NrAJb2KAFpUqEIJ9ZBV7BYDzHF/ORKYlgtvPnXjudZQ6CEo5OzUDaNIomTCCsvhD16TxJjsbgne1kGnQPCFSoaxUbq2V1bPMFQ3VYP6wDZ9bKStCFKx9A3tNbwZFC5ZGAN83MFK7XoTy+OmmcFEr6rLOjfSuTfPvHJkSVxW6Qllwkl67XcBi5v00u2gQsbu+38sp+rd5pA/LvyWj4P94ZGZwc1tE2P88xekCLcAwZGb+UhFzL/7K26csOb57yM5bvF9xJrLEObOkAAAAAn+HWRkdcPKyFFMnVwEoD7vnD0jCKFIU1sImubYCxNTSVzsKpaQX+fzNxrLAI3L14JQnJx/D6Uk2LADIHGqnGELzjEbkBDAlaM77NkXMPfqXNLSveCkWI7UEgNs31WEWB6XHSYI/v5DklHOb4QTtDOR804PVbi3fjloZeLR2F8d4FuZmMMO7ck3Fnkn2zEMG5gOmqsygb6PjTitArVl52NhcSznTxVnguaIJxiZkAnurDmn3MWR0PC2GLghp2KJqHCc6QQ85odeIjFHKOlRlJyeSXVJmL8vb1UgOzsbJPVP8p6zM4M3C1Sd7uWIHP33G42AP2Zg8ucn/n6meQjjD266JgCWdxZD6PXs9CsnIeL7SSG0/6lGb9xfP0ZcWkCXB/3hjxHYVXjra/GPOeXGk0fLLKjCbk+mgs2w6d2oCwimBipTzuoZ30GiI8ij8VRzD5CzMWtu2m21eDBIfjGAEo4pQeNNonKcqzV/cleX8ySZLOHsz8PtBCrLqF+VkLm9hOzIT+6i/nIf6keR4GWKMOD4AvqfpjHoD4DuhBpz8P28+DxkGrDXXr/nr20x291VPvcTU/b+b+o2kC9G0kcXeTlLjU6a2TQXWlZ4gBUdBl1jgT7mObSTpLblNiXZsLkbmVXZwvFKXua5cUKlWed/w30skmEUraTuQqtqr5fHZPW9n57EmeTif6LjHL2YJFZkQU+TrJmFzqzmF4/b8OwrPQAprl8mX3q4LUIdAS/a+11B6DWD1Xk2++Sn94dLC4xjkO4Wtlw8c4XuzciVbepHOmnoWzVu/0y3KCrLCSfQxQ3br8DJCoVzhgtPsS2nZZjsBGIZgnU0QpMv+2MnRsnKwdp1VsrCX84j/qvaZn4WhKunippgTbN2EUs0tPTP55Qfgj+nKmjtWW5IYs72FrEwJKYoNfsmqaF4o5pf4v9zgPwVwY/5I4XJKUL2L25m9kAQcW/K+H1RTFEUoj8Z4ajpOmAB/dG0COmCphVMW2CCMvnxhcGiSgPnpDuWu6qiJ7NG7ye5kvHgefgqPLeicspNJ5EpL3XiRNLM2tmJLI1awAwOyd6iHv0dCkMYRKaa6rcaZeYwmKCkckm0kM2JNmnmmAaBQQ7mwmIM0IMxX4f5W6j9PqZWcJxF7r17T/lQBAmcjoupRiJifbnXCNUv9GhpRF19WcBdeKbivRJVlGop6I2RS6lGImJ9udcI1S/0aGlEXX1ZwF14puK9ElWUainojZFYVHLHD6dIP2ESjqBzg3ol1/wB7+/ylGwd9LS7wSZ2A630CJSVKwH47K9P4bB8PEQP8BwjMFa7xQHOqZFP1XqaQ==", "base64"))
  })
};

// src/common/txTool/txTool.ts
var import_web310 = require("@solana/web3.js");
var import_axios = __toESM(require("axios"));
var LOOP_INTERVAL = 2e3;
var TxBuilder = class {
  connection;
  owner;
  instructions = [];
  endInstructions = [];
  lookupTableAddress = [];
  signers = [];
  instructionTypes = [];
  endInstructionTypes = [];
  feePayer;
  cluster;
  signAllTransactions;
  blockhashCommitment;
  loopMultiTxStatus;
  constructor(params) {
    this.connection = params.connection;
    this.feePayer = params.feePayer;
    this.signAllTransactions = params.signAllTransactions;
    this.owner = params.owner;
    this.cluster = params.cluster;
    this.blockhashCommitment = params.blockhashCommitment;
    this.loopMultiTxStatus = !!params.loopMultiTxStatus;
  }
  get AllTxData() {
    return {
      instructions: this.instructions,
      endInstructions: this.endInstructions,
      signers: this.signers,
      instructionTypes: this.instructionTypes,
      endInstructionTypes: this.endInstructionTypes,
      lookupTableAddress: this.lookupTableAddress
    };
  }
  get allInstructions() {
    return [...this.instructions, ...this.endInstructions];
  }
  async getComputeBudgetConfig() {
    const json = (await import_axios.default.get(`https://solanacompass.com/api/fees?cacheFreshTime=${5 * 60 * 1e3}`)).data;
    const { avg } = json?.[15] ?? {};
    if (!avg)
      return void 0;
    return {
      units: 6e5,
      microLamports: Math.min(Math.ceil(avg * 1e6 / 6e5), 25e3)
    };
  }
  addCustomComputeBudget(config2) {
    if (config2) {
      const { instructions, instructionTypes } = addComputeBudget(config2);
      this.instructions.unshift(...instructions);
      this.instructionTypes.unshift(...instructionTypes);
      return true;
    }
    return false;
  }
  addTipInstruction(tipConfig) {
    if (tipConfig) {
      this.endInstructions.push(import_web310.SystemProgram.transfer({
        fromPubkey: tipConfig.feePayer ?? this.feePayer,
        toPubkey: new import_web310.PublicKey(tipConfig.address),
        lamports: BigInt(tipConfig.amount.toString())
      }));
      this.endInstructionTypes.push(InstructionType.TransferTip);
      return true;
    }
    return false;
  }
  async calComputeBudget({
    config: propConfig,
    defaultIns
  }) {
    try {
      const config2 = propConfig || await this.getComputeBudgetConfig();
      if (this.addCustomComputeBudget(config2))
        return;
      defaultIns && this.instructions.unshift(...defaultIns);
    } catch {
      defaultIns && this.instructions.unshift(...defaultIns);
    }
  }
  addInstruction({
    instructions = [],
    endInstructions = [],
    signers = [],
    instructionTypes = [],
    endInstructionTypes = [],
    lookupTableAddress = []
  }) {
    this.instructions.push(...instructions);
    this.endInstructions.push(...endInstructions);
    this.signers.push(...signers);
    this.instructionTypes.push(...instructionTypes);
    this.endInstructionTypes.push(...endInstructionTypes);
    this.lookupTableAddress.push(...lookupTableAddress.filter((address) => address !== import_web310.PublicKey.default.toString()));
    return this;
  }
  async versionBuild({
    txVersion,
    extInfo
  }, nonce) {
    if (txVersion === 0 /* V0 */)
      return await this.buildV0({ ...extInfo || {} }, nonce);
    return this.build(extInfo, nonce);
  }
  build(extInfo, nonce) {
    const transaction = new import_web310.Transaction();
    if (this.allInstructions.length)
      transaction.add(...this.allInstructions);
    transaction.feePayer = this.feePayer;
    if (this.owner?.signer && !this.signers.some((s) => s.publicKey.equals(this.owner.publicKey)))
      this.signers.push(this.owner.signer);
    return {
      builder: this,
      transaction,
      signers: this.signers,
      instructionTypes: [...this.instructionTypes, ...this.endInstructionTypes],
      execute: async (params) => {
        const { recentBlockHash: propBlockHash, skipPreflight = true, sendAndConfirm, notSendToRpc } = params || {};
        const recentBlockHash = propBlockHash ?? nonce ?? await getRecentBlockHash(this.connection, this.blockhashCommitment);
        transaction.recentBlockhash = recentBlockHash;
        if (this.signers.length)
          transaction.sign(...this.signers);
        printSimulate([transaction]);
        if (this.owner?.isKeyPair) {
          const txId = sendAndConfirm ? await (0, import_web310.sendAndConfirmTransaction)(this.connection, transaction, this.signers.find((s) => s.publicKey.equals(this.owner.publicKey)) ? this.signers : [...this.signers, this.owner.signer], { skipPreflight }) : await this.connection.sendRawTransaction(transaction.serialize(), { skipPreflight });
          return {
            txId,
            signedTx: transaction
          };
        }
        if (this.signAllTransactions) {
          const txs = await this.signAllTransactions([transaction]);
          if (this.signers.length) {
            for (const item of txs) {
              try {
                item.sign(...this.signers);
              } catch (e) {
              }
            }
          }
          return {
            txId: notSendToRpc ? "" : await this.connection.sendRawTransaction(txs[0].serialize(), { skipPreflight }),
            signedTx: txs[0]
          };
        }
        throw new Error("please provide owner in keypair format or signAllTransactions function");
      },
      extInfo: extInfo || {}
    };
  }
  buildMultiTx(params) {
    const { extraPreBuildData = [], extInfo } = params;
    const { transaction } = this.build(extInfo);
    const filterExtraBuildData = extraPreBuildData.filter((data) => data.transaction.instructions.length > 0);
    const allTransactions = [transaction, ...filterExtraBuildData.map((data) => data.transaction)];
    const allSigners = [this.signers, ...filterExtraBuildData.map((data) => data.signers)];
    const allInstructionTypes = [
      ...this.instructionTypes,
      ...filterExtraBuildData.map((data) => data.instructionTypes).flat()
    ];
    if (this.owner?.signer) {
      allSigners.forEach((signers) => {
        if (!signers.some((s) => s.publicKey.equals(this.owner.publicKey)))
          this.signers.push(this.owner.signer);
      });
    }
    return {
      builder: this,
      transactions: allTransactions,
      signers: allSigners,
      instructionTypes: allInstructionTypes,
      execute: async (executeParams) => {
        const {
          sequentially,
          onTxUpdate,
          skipTxCount = 0,
          recentBlockHash: propBlockHash,
          skipPreflight = true
        } = executeParams || {};
        const recentBlockHash = propBlockHash ?? await getRecentBlockHash(this.connection, this.blockhashCommitment);
        if (this.owner?.isKeyPair) {
          if (sequentially) {
            const txIds = [];
            let i = 0;
            for (const tx of allTransactions) {
              ++i;
              if (i <= skipTxCount)
                continue;
              const txId = await (0, import_web310.sendAndConfirmTransaction)(this.connection, tx, this.signers.find((s) => s.publicKey.equals(this.owner.publicKey)) ? this.signers : [...this.signers, this.owner.signer], { skipPreflight });
              txIds.push(txId);
            }
            return {
              txIds,
              signedTxs: allTransactions
            };
          }
          return {
            txIds: await await Promise.all(allTransactions.map(async (tx) => {
              tx.recentBlockhash = recentBlockHash;
              return await this.connection.sendRawTransaction(tx.serialize(), { skipPreflight });
            })),
            signedTxs: allTransactions
          };
        }
        if (this.signAllTransactions) {
          const partialSignedTxs = allTransactions.map((tx, idx) => {
            tx.recentBlockhash = recentBlockHash;
            if (allSigners[idx].length)
              tx.sign(...allSigners[idx]);
            return tx;
          });
          printSimulate(partialSignedTxs);
          const signedTxs = await this.signAllTransactions(partialSignedTxs);
          if (sequentially) {
            let i = 0;
            const processedTxs = [];
            const checkSendTx = async () => {
              if (!signedTxs[i])
                return;
              const txId = await this.connection.sendRawTransaction(signedTxs[i].serialize(), { skipPreflight });
              processedTxs.push({ txId, status: "sent", signedTx: signedTxs[i] });
              onTxUpdate?.([...processedTxs]);
              i++;
              let confirmed = false;
              let intervalId = null, subSignatureId = null;
              const cbk = (signatureResult) => {
                intervalId !== null && clearInterval(intervalId);
                subSignatureId !== null && this.connection.removeSignatureListener(subSignatureId);
                const targetTxIdx = processedTxs.findIndex((tx) => tx.txId === txId);
                if (targetTxIdx > -1) {
                  if (processedTxs[targetTxIdx].status === "error" || processedTxs[targetTxIdx].status === "success")
                    return;
                  processedTxs[targetTxIdx].status = signatureResult.err ? "error" : "success";
                }
                onTxUpdate?.([...processedTxs]);
                if (!signatureResult.err)
                  checkSendTx();
              };
              if (this.loopMultiTxStatus)
                intervalId = setInterval(async () => {
                  if (confirmed) {
                    clearInterval(intervalId);
                    return;
                  }
                  try {
                    const r = await this.connection.getTransaction(txId, {
                      commitment: "confirmed",
                      maxSupportedTransactionVersion: 0 /* V0 */
                    });
                    if (r) {
                      confirmed = true;
                      clearInterval(intervalId);
                      cbk({ err: r.meta?.err || null });
                      console.log("tx status from getTransaction:", txId);
                    }
                  } catch (e) {
                    confirmed = true;
                    clearInterval(intervalId);
                    console.error("getTransaction timeout:", e, txId);
                  }
                }, LOOP_INTERVAL);
              subSignatureId = this.connection.onSignature(txId, (result) => {
                if (confirmed) {
                  this.connection.removeSignatureListener(subSignatureId);
                  return;
                }
                confirmed = true;
                cbk(result);
              }, "confirmed");
              this.connection.getSignatureStatus(txId);
            };
            await checkSendTx();
            return {
              txIds: processedTxs.map((d) => d.txId),
              signedTxs
            };
          } else {
            const txIds = [];
            for (let i = 0; i < signedTxs.length; i += 1) {
              const txId = await this.connection.sendRawTransaction(signedTxs[i].serialize(), { skipPreflight });
              txIds.push(txId);
            }
            return {
              txIds,
              signedTxs
            };
          }
        }
        throw new Error("please provide owner in keypair format or signAllTransactions function");
      },
      extInfo: extInfo || {}
    };
  }
  async versionMultiBuild({
    extraPreBuildData,
    txVersion,
    extInfo
  }) {
    if (txVersion === 0 /* V0 */)
      return await this.buildV0MultiTx({
        extraPreBuildData,
        buildProps: extInfo || {}
      });
    return this.buildMultiTx({
      extraPreBuildData,
      extInfo
    });
  }
  async buildV0(props, nonce) {
    const {
      lookupTableCache = {},
      lookupTableAddress = [],
      forerunCreate,
      recentBlockhash: propRecentBlockhash,
      ...extInfo
    } = props || {};
    const lookupTableAddressAccount = {
      ...this.cluster === "devnet" ? {} : LOOKUP_TABLE_CACHE,
      ...lookupTableCache
    };
    const allLTA = Array.from(/* @__PURE__ */ new Set([...lookupTableAddress, ...this.lookupTableAddress]));
    const needCacheLTA = [];
    for (const item of allLTA) {
      if (lookupTableAddressAccount[item] === void 0)
        needCacheLTA.push(new import_web310.PublicKey(item));
    }
    if (needCacheLTA.length > 0) {
      const newCacheLTA = await getMultipleLookupTableInfo({ connection: this.connection, address: needCacheLTA });
      for (const [key, value] of Object.entries(newCacheLTA))
        lookupTableAddressAccount[key] = value;
    }
    const recentBlockhash = nonce ?? (forerunCreate ? import_web310.PublicKey.default.toBase58() : propRecentBlockhash ?? await getRecentBlockHash(this.connection, this.blockhashCommitment));
    const messageV0 = new import_web310.TransactionMessage({
      payerKey: this.feePayer,
      recentBlockhash,
      instructions: [...this.allInstructions]
    }).compileToV0Message(Object.values(lookupTableAddressAccount));
    if (this.owner?.signer && !this.signers.some((s) => s.publicKey.equals(this.owner.publicKey)))
      this.signers.push(this.owner.signer);
    const transaction = new import_web310.VersionedTransaction(messageV0);
    transaction.sign(this.signers);
    return {
      builder: this,
      transaction,
      signers: this.signers,
      instructionTypes: [...this.instructionTypes, ...this.endInstructionTypes],
      execute: async (params) => {
        const { skipPreflight = true, sendAndConfirm, notSendToRpc } = params || {};
        printSimulate([transaction]);
        if (this.owner?.isKeyPair) {
          const txId = await this.connection.sendTransaction(transaction, { skipPreflight });
          if (sendAndConfirm) {
            await confirmTransaction(this.connection, txId);
          }
          return {
            txId,
            signedTx: transaction
          };
        }
        if (this.signAllTransactions) {
          const txs = await this.signAllTransactions([transaction]);
          if (this.signers.length) {
            for (const item of txs) {
              try {
                item.sign(this.signers);
              } catch (e) {
              }
            }
          }
          return {
            txId: notSendToRpc ? "" : await this.connection.sendTransaction(txs[0], { skipPreflight }),
            signedTx: txs[0]
          };
        }
        throw new Error("please provide owner in keypair format or signAllTransactions function");
      },
      extInfo: extInfo || {}
    };
  }
  async buildV0MultiTx(params) {
    const { extraPreBuildData = [], buildProps } = params;
    const { transaction } = await this.buildV0(buildProps);
    const filterExtraBuildData = extraPreBuildData.filter((data) => data.builder.instructions.length > 0);
    const allTransactions = [
      transaction,
      ...filterExtraBuildData.map((data) => data.transaction)
    ];
    const allSigners = [this.signers, ...filterExtraBuildData.map((data) => data.signers)];
    const allInstructionTypes = [
      ...this.instructionTypes,
      ...filterExtraBuildData.map((data) => data.instructionTypes).flat()
    ];
    if (this.owner?.signer) {
      allSigners.forEach((signers) => {
        if (!signers.some((s) => s.publicKey.equals(this.owner.publicKey)))
          this.signers.push(this.owner.signer);
      });
    }
    allTransactions.forEach(async (tx, idx) => {
      tx.sign(allSigners[idx]);
    });
    return {
      builder: this,
      transactions: allTransactions,
      signers: allSigners,
      instructionTypes: allInstructionTypes,
      buildProps,
      execute: async (executeParams) => {
        const { sequentially, onTxUpdate, recentBlockHash: propBlockHash, skipPreflight = true } = executeParams || {};
        if (propBlockHash)
          allTransactions.forEach((tx) => tx.message.recentBlockhash = propBlockHash);
        printSimulate(allTransactions);
        if (this.owner?.isKeyPair) {
          if (sequentially) {
            const txIds = [];
            for (const tx of allTransactions) {
              const txId = await this.connection.sendTransaction(tx, { skipPreflight });
              await confirmTransaction(this.connection, txId);
              txIds.push(txId);
            }
            return { txIds, signedTxs: allTransactions };
          }
          return {
            txIds: await Promise.all(allTransactions.map(async (tx) => {
              return await this.connection.sendTransaction(tx, { skipPreflight });
            })),
            signedTxs: allTransactions
          };
        }
        if (this.signAllTransactions) {
          const signedTxs = await this.signAllTransactions(allTransactions);
          if (sequentially) {
            let i = 0;
            const processedTxs = [];
            const checkSendTx = async () => {
              if (!signedTxs[i])
                return;
              const txId = await this.connection.sendTransaction(signedTxs[i], { skipPreflight });
              processedTxs.push({ txId, status: "sent", signedTx: signedTxs[i] });
              onTxUpdate?.([...processedTxs]);
              i++;
              let confirmed = false;
              let intervalId = null, subSignatureId = null;
              const cbk = (signatureResult) => {
                intervalId !== null && clearInterval(intervalId);
                subSignatureId !== null && this.connection.removeSignatureListener(subSignatureId);
                const targetTxIdx = processedTxs.findIndex((tx) => tx.txId === txId);
                if (targetTxIdx > -1) {
                  if (processedTxs[targetTxIdx].status === "error" || processedTxs[targetTxIdx].status === "success")
                    return;
                  processedTxs[targetTxIdx].status = signatureResult.err ? "error" : "success";
                }
                onTxUpdate?.([...processedTxs]);
                if (!signatureResult.err)
                  checkSendTx();
              };
              if (this.loopMultiTxStatus)
                intervalId = setInterval(async () => {
                  if (confirmed) {
                    clearInterval(intervalId);
                    return;
                  }
                  try {
                    const r = await this.connection.getTransaction(txId, {
                      commitment: "confirmed",
                      maxSupportedTransactionVersion: 0 /* V0 */
                    });
                    if (r) {
                      confirmed = true;
                      clearInterval(intervalId);
                      cbk({ err: r.meta?.err || null });
                      console.log("tx status from getTransaction:", txId);
                    }
                  } catch (e) {
                    confirmed = true;
                    clearInterval(intervalId);
                    console.error("getTransaction timeout:", e, txId);
                  }
                }, LOOP_INTERVAL);
              subSignatureId = this.connection.onSignature(txId, (result) => {
                if (confirmed) {
                  this.connection.removeSignatureListener(subSignatureId);
                  return;
                }
                confirmed = true;
                cbk(result);
              }, "confirmed");
              this.connection.getSignatureStatus(txId);
            };
            checkSendTx();
            return {
              txIds: [],
              signedTxs
            };
          } else {
            const txIds = [];
            for (let i = 0; i < signedTxs.length; i += 1) {
              const txId = await this.connection.sendTransaction(signedTxs[i], { skipPreflight });
              txIds.push(txId);
            }
            return { txIds, signedTxs };
          }
        }
        throw new Error("please provide owner in keypair format or signAllTransactions function");
      },
      extInfo: buildProps || {}
    };
  }
  async sizeCheckBuild(props) {
    const { splitIns = [], computeBudgetConfig, ...extInfo } = props || {};
    const computeBudgetData = computeBudgetConfig ? addComputeBudget(computeBudgetConfig) : {
      instructions: [],
      instructionTypes: []
    };
    const signerKey = this.signers.reduce((acc, cur) => ({ ...acc, [cur.publicKey.toBase58()]: cur }), {});
    const allTransactions = [];
    const allSigners = [];
    let instructionQueue = [];
    let splitInsIdx = 0;
    this.allInstructions.forEach((item) => {
      const _itemIns = [...instructionQueue, item];
      const _itemInsWithCompute = computeBudgetConfig ? [...computeBudgetData.instructions, ..._itemIns] : _itemIns;
      const _signerStrs = new Set(_itemIns.map((i) => i.keys.filter((ii) => ii.isSigner).map((ii) => ii.pubkey.toString())).flat());
      const _signer = [..._signerStrs.values()].map((i) => new import_web310.PublicKey(i));
      if (item !== splitIns[splitInsIdx] && instructionQueue.length < 12 && (checkLegacyTxSize({ instructions: _itemInsWithCompute, payer: this.feePayer, signers: _signer }) || checkLegacyTxSize({ instructions: _itemIns, payer: this.feePayer, signers: _signer }))) {
        instructionQueue.push(item);
      } else {
        if (instructionQueue.length === 0)
          throw Error("item ins too big");
        splitInsIdx += item === splitIns[splitInsIdx] ? 1 : 0;
        if (checkLegacyTxSize({
          instructions: computeBudgetConfig ? [...computeBudgetData.instructions, ...instructionQueue] : [...instructionQueue],
          payer: this.feePayer,
          signers: _signer
        })) {
          allTransactions.push(new import_web310.Transaction().add(...computeBudgetData.instructions, ...instructionQueue));
        } else {
          allTransactions.push(new import_web310.Transaction().add(...instructionQueue));
        }
        allSigners.push(Array.from(new Set(instructionQueue.map((i) => i.keys.filter((ii) => ii.isSigner).map((ii) => ii.pubkey.toString())).flat())).map((i) => signerKey[i]).filter((i) => i !== void 0));
        instructionQueue = [item];
      }
    });
    if (instructionQueue.length > 0) {
      const _signerStrs = new Set(instructionQueue.map((i) => i.keys.filter((ii) => ii.isSigner).map((ii) => ii.pubkey.toString())).flat());
      const _signers = [..._signerStrs.values()].map((i) => signerKey[i]).filter((i) => i !== void 0);
      if (checkLegacyTxSize({
        instructions: computeBudgetConfig ? [...computeBudgetData.instructions, ...instructionQueue] : [...instructionQueue],
        payer: this.feePayer,
        signers: _signers.map((s) => s.publicKey)
      })) {
        allTransactions.push(new import_web310.Transaction().add(...computeBudgetData.instructions, ...instructionQueue));
      } else {
        allTransactions.push(new import_web310.Transaction().add(...instructionQueue));
      }
      allSigners.push(_signers);
    }
    allTransactions.forEach((tx) => tx.feePayer = this.feePayer);
    if (this.owner?.signer) {
      allSigners.forEach((signers) => {
        if (!signers.some((s) => s.publicKey.equals(this.owner.publicKey)))
          signers.push(this.owner.signer);
      });
    }
    return {
      builder: this,
      transactions: allTransactions,
      signers: allSigners,
      instructionTypes: this.instructionTypes,
      execute: async (executeParams) => {
        const {
          sequentially,
          onTxUpdate,
          skipTxCount = 0,
          recentBlockHash: propBlockHash,
          skipPreflight = true
        } = executeParams || {};
        const recentBlockHash = propBlockHash ?? await getRecentBlockHash(this.connection, this.blockhashCommitment);
        allTransactions.forEach(async (tx, idx) => {
          tx.recentBlockhash = recentBlockHash;
          if (allSigners[idx].length)
            tx.sign(...allSigners[idx]);
        });
        printSimulate(allTransactions);
        if (this.owner?.isKeyPair) {
          if (sequentially) {
            let i = 0;
            const txIds = [];
            for (const tx of allTransactions) {
              ++i;
              if (i <= skipTxCount) {
                txIds.push("tx skipped");
                continue;
              }
              const txId = await (0, import_web310.sendAndConfirmTransaction)(this.connection, tx, this.signers.find((s) => s.publicKey.equals(this.owner.publicKey)) ? this.signers : [...this.signers, this.owner.signer], { skipPreflight });
              txIds.push(txId);
            }
            return {
              txIds,
              signedTxs: allTransactions
            };
          }
          return {
            txIds: await Promise.all(allTransactions.map(async (tx) => {
              return await this.connection.sendRawTransaction(tx.serialize(), { skipPreflight });
            })),
            signedTxs: allTransactions
          };
        }
        if (this.signAllTransactions) {
          const needSignedTx = await this.signAllTransactions(allTransactions.slice(skipTxCount, allTransactions.length));
          const signedTxs = [...allTransactions.slice(0, skipTxCount), ...needSignedTx];
          if (sequentially) {
            let i = 0;
            const processedTxs = [];
            const checkSendTx = async () => {
              if (!signedTxs[i])
                return;
              if (i < skipTxCount) {
                processedTxs.push({ txId: "", status: "success", signedTx: signedTxs[i] });
                onTxUpdate?.([...processedTxs]);
                i++;
                checkSendTx();
              }
              const txId = await this.connection.sendRawTransaction(signedTxs[i].serialize(), { skipPreflight });
              processedTxs.push({ txId, status: "sent", signedTx: signedTxs[i] });
              onTxUpdate?.([...processedTxs]);
              i++;
              let confirmed = false;
              let intervalId = null, subSignatureId = null;
              const cbk = (signatureResult) => {
                intervalId !== null && clearInterval(intervalId);
                subSignatureId !== null && this.connection.removeSignatureListener(subSignatureId);
                const targetTxIdx = processedTxs.findIndex((tx) => tx.txId === txId);
                if (targetTxIdx > -1) {
                  if (processedTxs[targetTxIdx].status === "error" || processedTxs[targetTxIdx].status === "success")
                    return;
                  processedTxs[targetTxIdx].status = signatureResult.err ? "error" : "success";
                }
                onTxUpdate?.([...processedTxs]);
                if (!signatureResult.err)
                  checkSendTx();
              };
              if (this.loopMultiTxStatus)
                intervalId = setInterval(async () => {
                  if (confirmed) {
                    clearInterval(intervalId);
                    return;
                  }
                  try {
                    const r = await this.connection.getTransaction(txId, {
                      commitment: "confirmed",
                      maxSupportedTransactionVersion: 0 /* V0 */
                    });
                    if (r) {
                      confirmed = true;
                      clearInterval(intervalId);
                      cbk({ err: r.meta?.err || null });
                      console.log("tx status from getTransaction:", txId);
                    }
                  } catch (e) {
                    confirmed = true;
                    clearInterval(intervalId);
                    console.error("getTransaction timeout:", e, txId);
                  }
                }, LOOP_INTERVAL);
              subSignatureId = this.connection.onSignature(txId, (result) => {
                if (confirmed) {
                  this.connection.removeSignatureListener(subSignatureId);
                  return;
                }
                confirmed = true;
                cbk(result);
              }, "confirmed");
              this.connection.getSignatureStatus(txId);
            };
            await checkSendTx();
            return {
              txIds: processedTxs.map((d) => d.txId),
              signedTxs
            };
          } else {
            const txIds = [];
            for (let i = 0; i < signedTxs.length; i += 1) {
              const txId = await this.connection.sendRawTransaction(signedTxs[i].serialize(), { skipPreflight });
              txIds.push(txId);
            }
            return { txIds, signedTxs };
          }
        }
        throw new Error("please provide owner in keypair format or signAllTransactions function");
      },
      extInfo: extInfo || {}
    };
  }
  async sizeCheckBuildV0(props) {
    const {
      computeBudgetConfig,
      splitIns = [],
      lookupTableCache = {},
      lookupTableAddress = [],
      ...extInfo
    } = props || {};
    const lookupTableAddressAccount = {
      ...this.cluster === "devnet" ? {} : LOOKUP_TABLE_CACHE,
      ...lookupTableCache
    };
    const allLTA = Array.from(/* @__PURE__ */ new Set([...this.lookupTableAddress, ...lookupTableAddress]));
    const needCacheLTA = [];
    for (const item of allLTA) {
      if (lookupTableAddressAccount[item] === void 0)
        needCacheLTA.push(new import_web310.PublicKey(item));
    }
    const newCacheLTA = await getMultipleLookupTableInfo({ connection: this.connection, address: needCacheLTA });
    for (const [key, value] of Object.entries(newCacheLTA))
      lookupTableAddressAccount[key] = value;
    const computeBudgetData = computeBudgetConfig ? addComputeBudget(computeBudgetConfig) : {
      instructions: [],
      instructionTypes: []
    };
    const blockHash = await getRecentBlockHash(this.connection, this.blockhashCommitment);
    const signerKey = this.signers.reduce((acc, cur) => ({ ...acc, [cur.publicKey.toBase58()]: cur }), {});
    const allTransactions = [];
    const allSigners = [];
    let instructionQueue = [];
    let splitInsIdx = 0;
    this.allInstructions.forEach((item) => {
      const _itemIns = [...instructionQueue, item];
      const _itemInsWithCompute = computeBudgetConfig ? [...computeBudgetData.instructions, ..._itemIns] : _itemIns;
      if (item !== splitIns[splitInsIdx] && instructionQueue.length < 12 && (checkV0TxSize({ instructions: _itemInsWithCompute, payer: this.feePayer, lookupTableAddressAccount }) || checkV0TxSize({ instructions: _itemIns, payer: this.feePayer, lookupTableAddressAccount }))) {
        instructionQueue.push(item);
      } else {
        if (instructionQueue.length === 0)
          throw Error("item ins too big");
        splitInsIdx += item === splitIns[splitInsIdx] ? 1 : 0;
        const lookupTableAddress2 = {};
        for (const item2 of [...new Set(allLTA)]) {
          if (lookupTableAddressAccount[item2] !== void 0)
            lookupTableAddress2[item2] = lookupTableAddressAccount[item2];
        }
        if (computeBudgetConfig && checkV0TxSize({
          instructions: [...computeBudgetData.instructions, ...instructionQueue],
          payer: this.feePayer,
          lookupTableAddressAccount,
          recentBlockhash: blockHash
        })) {
          const messageV0 = new import_web310.TransactionMessage({
            payerKey: this.feePayer,
            recentBlockhash: blockHash,
            instructions: [...computeBudgetData.instructions, ...instructionQueue]
          }).compileToV0Message(Object.values(lookupTableAddressAccount));
          allTransactions.push(new import_web310.VersionedTransaction(messageV0));
        } else {
          const messageV0 = new import_web310.TransactionMessage({
            payerKey: this.feePayer,
            recentBlockhash: blockHash,
            instructions: [...instructionQueue]
          }).compileToV0Message(Object.values(lookupTableAddressAccount));
          allTransactions.push(new import_web310.VersionedTransaction(messageV0));
        }
        allSigners.push(Array.from(new Set(instructionQueue.map((i) => i.keys.filter((ii) => ii.isSigner).map((ii) => ii.pubkey.toString())).flat())).map((i) => signerKey[i]).filter((i) => i !== void 0));
        instructionQueue = [item];
      }
    });
    if (instructionQueue.length > 0) {
      const _signerStrs = new Set(instructionQueue.map((i) => i.keys.filter((ii) => ii.isSigner).map((ii) => ii.pubkey.toString())).flat());
      const _signers = [..._signerStrs.values()].map((i) => signerKey[i]).filter((i) => i !== void 0);
      if (computeBudgetConfig && checkV0TxSize({
        instructions: [...computeBudgetData.instructions, ...instructionQueue],
        payer: this.feePayer,
        lookupTableAddressAccount,
        recentBlockhash: blockHash
      })) {
        const messageV0 = new import_web310.TransactionMessage({
          payerKey: this.feePayer,
          recentBlockhash: blockHash,
          instructions: [...computeBudgetData.instructions, ...instructionQueue]
        }).compileToV0Message(Object.values(lookupTableAddressAccount));
        allTransactions.push(new import_web310.VersionedTransaction(messageV0));
      } else {
        const messageV0 = new import_web310.TransactionMessage({
          payerKey: this.feePayer,
          recentBlockhash: blockHash,
          instructions: [...instructionQueue]
        }).compileToV0Message(Object.values(lookupTableAddressAccount));
        allTransactions.push(new import_web310.VersionedTransaction(messageV0));
      }
      allSigners.push(_signers);
    }
    if (this.owner?.signer) {
      allSigners.forEach((signers) => {
        if (!signers.some((s) => s.publicKey.equals(this.owner.publicKey)))
          signers.push(this.owner.signer);
      });
    }
    allTransactions.forEach((tx, idx) => {
      tx.sign(allSigners[idx]);
    });
    return {
      builder: this,
      transactions: allTransactions,
      buildProps: props,
      signers: allSigners,
      instructionTypes: this.instructionTypes,
      execute: async (executeParams) => {
        const {
          sequentially,
          onTxUpdate,
          skipTxCount = 0,
          recentBlockHash: propBlockHash,
          skipPreflight = true
        } = executeParams || {};
        allTransactions.map(async (tx, idx) => {
          if (allSigners[idx].length)
            tx.sign(allSigners[idx]);
          if (propBlockHash)
            tx.message.recentBlockhash = propBlockHash;
        });
        printSimulate(allTransactions);
        if (this.owner?.isKeyPair) {
          if (sequentially) {
            let i = 0;
            const txIds = [];
            for (const tx of allTransactions) {
              ++i;
              if (i <= skipTxCount) {
                console.log("skip tx: ", i);
                txIds.push("tx skipped");
                continue;
              }
              const txId = await this.connection.sendTransaction(tx, { skipPreflight });
              await confirmTransaction(this.connection, txId);
              txIds.push(txId);
            }
            return { txIds, signedTxs: allTransactions };
          }
          return {
            txIds: await Promise.all(allTransactions.map(async (tx) => {
              return await this.connection.sendTransaction(tx, { skipPreflight });
            })),
            signedTxs: allTransactions
          };
        }
        if (this.signAllTransactions) {
          const needSignedTx = await this.signAllTransactions(allTransactions.slice(skipTxCount, allTransactions.length));
          const signedTxs = [...allTransactions.slice(0, skipTxCount), ...needSignedTx];
          if (sequentially) {
            let i = 0;
            const processedTxs = [];
            const checkSendTx = async () => {
              if (!signedTxs[i])
                return;
              if (i < skipTxCount) {
                processedTxs.push({ txId: "", status: "success", signedTx: signedTxs[i] });
                onTxUpdate?.([...processedTxs]);
                i++;
                checkSendTx();
                return;
              }
              const txId = await this.connection.sendTransaction(signedTxs[i], { skipPreflight });
              processedTxs.push({ txId, status: "sent", signedTx: signedTxs[i] });
              onTxUpdate?.([...processedTxs]);
              i++;
              let confirmed = false;
              let intervalId = null, subSignatureId = null;
              const cbk = (signatureResult) => {
                intervalId !== null && clearInterval(intervalId);
                subSignatureId !== null && this.connection.removeSignatureListener(subSignatureId);
                const targetTxIdx = processedTxs.findIndex((tx) => tx.txId === txId);
                if (targetTxIdx > -1) {
                  if (processedTxs[targetTxIdx].status === "error" || processedTxs[targetTxIdx].status === "success")
                    return;
                  processedTxs[targetTxIdx].status = signatureResult.err ? "error" : "success";
                }
                onTxUpdate?.([...processedTxs]);
                if (!signatureResult.err)
                  checkSendTx();
              };
              if (this.loopMultiTxStatus)
                intervalId = setInterval(async () => {
                  if (confirmed) {
                    clearInterval(intervalId);
                    return;
                  }
                  try {
                    const r = await this.connection.getTransaction(txId, {
                      commitment: "confirmed",
                      maxSupportedTransactionVersion: 0 /* V0 */
                    });
                    if (r) {
                      confirmed = true;
                      clearInterval(intervalId);
                      cbk({ err: r.meta?.err || null });
                      console.log("tx status from getTransaction:", txId);
                    }
                  } catch (e) {
                    confirmed = true;
                    clearInterval(intervalId);
                    console.error("getTransaction timeout:", e, txId);
                  }
                }, LOOP_INTERVAL);
              subSignatureId = this.connection.onSignature(txId, (result) => {
                if (confirmed) {
                  this.connection.removeSignatureListener(subSignatureId);
                  return;
                }
                confirmed = true;
                cbk(result);
              }, "confirmed");
              this.connection.getSignatureStatus(txId);
            };
            checkSendTx();
            return {
              txIds: [],
              signedTxs
            };
          } else {
            const txIds = [];
            for (let i = 0; i < signedTxs.length; i += 1) {
              const txId = await this.connection.sendTransaction(signedTxs[i], { skipPreflight });
              txIds.push(txId);
            }
            return { txIds, signedTxs };
          }
        }
        throw new Error("please provide owner in keypair format or signAllTransactions function");
      },
      extInfo: extInfo || {}
    };
  }
};

// src/common/fee.ts
var import_bn8 = __toESM(require("bn.js"));
var FEE_RATE_DENOMINATOR_VALUE = new import_bn8.default(1e6);

// src/api/url.ts
var API_URLS = {
  BASE_HOST: "https://api-v3.raydium.io",
  OWNER_BASE_HOST: "https://owner-v1.raydium.io",
  SERVICE_BASE_HOST: "https://service.raydium.io",
  MONITOR_BASE_HOST: "https://monitor.raydium.io",
  SERVICE_1_BASE_HOST: "https://service-v1.raydium.io",
  SEND_TRANSACTION: "/send-transaction",
  FARM_ARP: "/main/farm/info",
  FARM_ARP_LINE: "/main/farm-apr-tv",
  CLMM_CONFIG: "/main/clmm-config",
  CPMM_CONFIG: "/main/cpmm-config",
  VERSION: "/main/version",
  CHECK_AVAILABILITY: "/v3/main/AvailabilityCheckAPI",
  RPCS: "/main/rpcs",
  INFO: "/main/info",
  STAKE_POOLS: "/main/stake-pools",
  CHAIN_TIME: "/main/chain-time",
  TOKEN_LIST: "/mint/list",
  MINT_INFO_ID: "/mint/ids",
  JUP_TOKEN_LIST: "https://lite-api.jup.ag/tokens/v1/tagged/verified",
  POOL_LIST: "/pools/info/list",
  POOL_SEARCH_BY_ID: "/pools/info/ids",
  POOL_SEARCH_MINT: "/pools/info/mint",
  POOL_SEARCH_LP: "/pools/info/lps",
  POOL_KEY_BY_ID: "/pools/key/ids",
  POOL_LIQUIDITY_LINE: "/pools/line/liquidity",
  POOL_POSITION_LINE: "/pools/line/position",
  FARM_INFO: "/farms/info/ids",
  FARM_LP_INFO: "/farms/info/lp",
  FARM_KEYS: "/farms/key/ids",
  OWNER_CREATED_FARM: "/create-pool/{owner}",
  OWNER_IDO: "/main/ido/{owner}",
  OWNER_STAKE_FARMS: "/position/stake/{owner}",
  OWNER_LOCK_POSITION: "/position/clmm-lock/{owner}",
  IDO_KEYS: "/ido/key/ids",
  SWAP_HOST: "https://transaction-v1.raydium.io",
  SWAP_COMPUTE: "/compute/",
  SWAP_TX: "/transaction/",
  MINT_PRICE: "/mint/price",
  MIGRATE_CONFIG: "/main/migrate-lp",
  PRIORITY_FEE: "/main/auto-fee",
  CPMM_LOCK: "https://dynamic-ipfs.raydium.io/lock/cpmm/position"
};
var DEV_API_URLS = {
  ...API_URLS
};

// src/api/utils.ts
var SESSION_KEY = "ray_tab_hash";
var STORAGE_KEY = "ray_req_hash";
var getSessionKey = () => {
  if (typeof window === void 0)
    return "";
  let key = sessionStorage.getItem(SESSION_KEY);
  if (!key) {
    key = `ray-${Date.now()}`;
    sessionStorage.setItem(SESSION_KEY, key);
  }
  return key;
};
var updateReqHistory = async ({
  logCount = 1e3,
  removeLastLog,
  ...resData
}) => {
  if (typeof window === void 0)
    return new Promise((resolve) => resolve());
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]").slice(0, logCount - 1);
  if (removeLastLog)
    data.pop();
  if (new Blob([JSON.stringify(resData.data)]).size > 1024)
    resData.data = JSON.stringify(resData.data).substring(0, 200) + "...";
  data.unshift({ ...resData, time: Date.now(), session: getSessionKey() });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    if (removeLastLog) {
      let success = false;
      const resStr = JSON.stringify(resData.data).substring(0, 100);
      data[0].data = resStr + (resStr.length > 100 ? "..." : "");
      while (!success) {
        data.pop();
        const resStr2 = JSON.stringify(resData.data).substring(0, 100);
        data[0].data = resStr2 + (resStr2.length > 100 ? "..." : "");
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
          success = true;
        } catch {
          success = false;
        }
      }
      return new Promise((resolve) => resolve());
    }
    return updateReqHistory({
      ...resData,
      logCount,
      removeLastLog: true
    });
  }
};

// src/api/api.ts
var import_spl_token6 = require("@solana/spl-token");
var logger6 = createLogger("Raydium_Api");
var poolKeysCache = /* @__PURE__ */ new Map();
var Api = class {
  cluster;
  api;
  logCount;
  urlConfigs;
  constructor({ cluster, timeout, logRequests, logCount, urlConfigs }) {
    this.cluster = cluster;
    this.urlConfigs = urlConfigs || {};
    this.logCount = logCount || 1e3;
    this.api = import_axios2.default.create({ baseURL: this.urlConfigs.BASE_HOST || API_URLS.BASE_HOST, timeout });
    this.api.interceptors.request.use((config2) => {
      const { method, baseURL, url } = config2;
      logger6.debug(`${method?.toUpperCase()} ${baseURL}${url}`);
      return config2;
    }, (error) => {
      logger6.error(`Request failed`);
      return Promise.reject(error);
    });
    this.api.interceptors.response.use((response) => {
      const { config: config2, data, status } = response;
      const { method, baseURL, url } = config2;
      if (logRequests) {
        updateReqHistory({
          status,
          url: `${baseURL}${url}`,
          params: config2.params,
          data,
          logCount: this.logCount
        });
      }
      logger6.debug(`${method?.toUpperCase()} ${baseURL}${url}  ${status}`);
      return data;
    }, (error) => {
      const { config: config2, response = {} } = error;
      const { status } = response;
      const { method, baseURL, url } = config2;
      if (logRequests) {
        updateReqHistory({
          status,
          url: `${baseURL}${url}`,
          params: config2.params,
          data: error.message,
          logCount: this.logCount
        });
      }
      logger6.error(`${method.toUpperCase()} ${baseURL}${url} ${status || error.message}`);
      return Promise.reject(error);
    });
  }
  async getClmmConfigs() {
    const res = await this.api.get(this.urlConfigs.CLMM_CONFIG || API_URLS.CLMM_CONFIG);
    return res.data;
  }
  async getCpmmConfigs() {
    const res = await this.api.get(this.urlConfigs.CPMM_CONFIG || API_URLS.CPMM_CONFIG);
    return res.data;
  }
  async getClmmPoolLines(poolId) {
    const res = await this.api.get(`${this.urlConfigs.POOL_LIQUIDITY_LINE || API_URLS.POOL_LIQUIDITY_LINE}?pool_id=${poolId}`);
    return res.data;
  }
  async getBlockSlotCountForSecond(endpointUrl) {
    if (!endpointUrl)
      return 2;
    const res = await import_axios2.default.post(endpointUrl, {
      id: "getRecentPerformanceSamples",
      jsonrpc: "2.0",
      method: "getRecentPerformanceSamples",
      params: [4]
    });
    const slotList = res.result.map((data) => data.numSlots);
    return slotList.reduce((a, b) => a + b, 0) / slotList.length / 60;
  }
  async getChainTimeOffset() {
    const res = await this.api.get(this.urlConfigs.CHAIN_TIME || API_URLS.CHAIN_TIME);
    return res.data;
  }
  async getRpcs() {
    return this.api.get(this.urlConfigs.RPCS || API_URLS.RPCS);
  }
  async getTokenList() {
    const res = await this.api.get(this.urlConfigs.TOKEN_LIST || API_URLS.TOKEN_LIST);
    return res.data;
  }
  async getJupTokenList() {
    const r = await this.api.get("", {
      baseURL: this.urlConfigs.JUP_TOKEN_LIST || API_URLS.JUP_TOKEN_LIST
    });
    return r.map((t) => ({
      ...t,
      chainId: 101,
      programId: t.tags.includes("token-2022") ? import_spl_token6.TOKEN_2022_PROGRAM_ID.toBase58() : import_spl_token6.TOKEN_PROGRAM_ID.toBase58()
    }));
  }
  async getTokenInfo(mint) {
    const res = await this.api.get((this.urlConfigs.MINT_INFO_ID || API_URLS.MINT_INFO_ID) + `?mints=${mint.map((m) => m.toString()).join(",")}`);
    return res.data;
  }
  async getPoolList(props = {}) {
    const { type = "all", sort = "liquidity", order = "desc", page = 0, pageSize = 100 } = props;
    const res = await this.api.get((this.urlConfigs.POOL_LIST || API_URLS.POOL_LIST) + `?poolType=${type}&poolSortField=${sort}&sortType=${order}&page=${page}&pageSize=${pageSize}`);
    return res.data;
  }
  async fetchPoolById(props) {
    const { ids } = props;
    const res = await this.api.get((this.urlConfigs.POOL_SEARCH_BY_ID || API_URLS.POOL_SEARCH_BY_ID) + `?ids=${ids}`);
    return res.data;
  }
  async fetchPoolKeysById(props) {
    const { idList } = props;
    const cacheList = [];
    const readyList = idList.filter((poolId) => {
      if (poolKeysCache.has(poolId)) {
        cacheList.push(poolKeysCache.get(poolId));
        return false;
      }
      return true;
    });
    let data = [];
    if (readyList.length) {
      const res = await this.api.get((this.urlConfigs.POOL_KEY_BY_ID || API_URLS.POOL_KEY_BY_ID) + `?ids=${readyList.join(",")}`);
      data = res.data.filter(Boolean);
      data.forEach((poolKey) => {
        poolKeysCache.set(poolKey.id, poolKey);
      });
    }
    return cacheList.concat(data);
  }
  async fetchPoolByMints(props) {
    const {
      mint1: propMint1,
      mint2: propMint2,
      type = "all" /* All */,
      sort = "default",
      order = "desc",
      page = 1
    } = props;
    const [mint1, mint2] = [
      propMint1 ? solToWSol(propMint1).toBase58() : propMint1,
      propMint2 && propMint2 !== "undefined" ? solToWSol(propMint2).toBase58() : ""
    ];
    const [baseMint, quoteMint] = mint2 && mint1 > mint2 ? [mint2, mint1] : [mint1, mint2];
    const res = await this.api.get((this.urlConfigs.POOL_SEARCH_MINT || API_URLS.POOL_SEARCH_MINT) + `?mint1=${baseMint}&mint2=${quoteMint}&poolType=${type}&poolSortField=${sort}&sortType=${order}&pageSize=100&page=${page}`);
    return res.data;
  }
  async fetchFarmInfoById(props) {
    const { ids } = props;
    const res = await this.api.get((this.urlConfigs.FARM_INFO || API_URLS.FARM_INFO) + `?ids=${ids}`);
    return res.data;
  }
  async fetchFarmKeysById(props) {
    const { ids } = props;
    const res = await this.api.get((this.urlConfigs.FARM_KEYS || API_URLS.FARM_KEYS) + `?ids=${ids}`);
    return res.data;
  }
  async fetchAvailabilityStatus() {
    const res = await this.api.get(this.urlConfigs.CHECK_AVAILABILITY || API_URLS.CHECK_AVAILABILITY);
    return res.data;
  }
};

// src/common/error.ts
var EMPTY_OWNER = "please provide owner in load() initialization or you can set by calling raydium.setOwner(owner)";
var EMPTY_CONNECTION = "please provide connection in load() initialization or set it by raydium.setConnection(connection)";

// src/raydium/account/account.ts
var import_web314 = require("@solana/web3.js");
var import_spl_token9 = require("@solana/spl-token");

// src/raydium/moduleBase.ts
var joinMsg = (...args) => args.map((arg) => {
  try {
    return typeof arg === "object" ? JSON.stringify(arg) : arg;
  } catch {
    return arg;
  }
}).join(", ");
var ModuleBase = class {
  scope;
  disabled = false;
  logger;
  constructor({ scope, moduleName }) {
    this.scope = scope;
    this.logger = createLogger(moduleName);
  }
  createTxBuilder(feePayer) {
    this.scope.checkOwner();
    return new TxBuilder({
      connection: this.scope.connection,
      feePayer: feePayer || this.scope.ownerPubKey,
      cluster: this.scope.cluster,
      owner: this.scope.owner,
      blockhashCommitment: this.scope.blockhashCommitment,
      loopMultiTxStatus: this.scope.loopMultiTxStatus,
      api: this.scope.api,
      signAllTransactions: this.scope.signAllTransactions
    });
  }
  logDebug(...args) {
    this.logger.debug(joinMsg(args));
  }
  logInfo(...args) {
    this.logger.info(joinMsg(args));
  }
  logAndCreateError(...args) {
    const message = joinMsg(args);
    throw new Error(message);
  }
  checkDisabled() {
    if (this.disabled || !this.scope)
      this.logAndCreateError("module not working");
  }
};

// src/raydium/account/instruction.ts
var import_web313 = require("@solana/web3.js");
var import_bn11 = __toESM(require("bn.js"));
var import_spl_token8 = require("@solana/spl-token");

// src/raydium/account/util.ts
var import_web312 = require("@solana/web3.js");
var import_bn10 = __toESM(require("bn.js"));
var import_spl_token7 = require("@solana/spl-token");

// node_modules/@noble/hashes/esm/_assert.js
function isBytes(a) {
  return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
}
function bytes(b, ...lengths) {
  if (!isBytes(b))
    throw new Error("Uint8Array expected");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new Error(`Uint8Array expected of length ${lengths}, not of length=${b.length}`);
}
function exists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function output(out, instance) {
  bytes(out);
  const min2 = instance.outputLen;
  if (out.length < min2) {
    throw new Error(`digestInto() expects output buffer of length at least ${min2}`);
  }
}

// node_modules/@noble/hashes/esm/utils.js
var createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
var rotr = (word, shift) => word << 32 - shift | word >>> shift;
var isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function utf8ToBytes(str2) {
  if (typeof str2 !== "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof str2}`);
  return new Uint8Array(new TextEncoder().encode(str2));
}
function toBytes(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  bytes(data);
  return data;
}
var Hash = class {
  clone() {
    return this._cloneInto();
  }
};
var toStr = {}.toString;
function wrapConstructor(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}

// node_modules/@noble/hashes/esm/_md.js
function setBigUint64(view, byteOffset, value, isLE2) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE2);
  const _32n = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n & _u32_max);
  const wl = Number(value & _u32_max);
  const h = isLE2 ? 4 : 0;
  const l = isLE2 ? 0 : 4;
  view.setUint32(byteOffset + h, wh, isLE2);
  view.setUint32(byteOffset + l, wl, isLE2);
}
var Chi = (a, b, c) => a & b ^ ~a & c;
var Maj = (a, b, c) => a & b ^ a & c ^ b & c;
var HashMD = class extends Hash {
  constructor(blockLen, outputLen, padOffset, isLE2) {
    super();
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE2;
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView(this.buffer);
  }
  update(data) {
    exists(this);
    const { view, buffer, blockLen } = this;
    data = toBytes(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    exists(this);
    output(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE: isLE2 } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    this.buffer.subarray(pos).fill(0);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i = pos; i < blockLen; i++)
      buffer[i] = 0;
    setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
    this.process(view, 0);
    const oview = createView(out);
    const len = this.outputLen;
    if (len % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const outLen = len / 4;
    const state = this.get();
    if (outLen > state.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let i = 0; i < outLen; i++)
      oview.setUint32(4 * i, state[i], isLE2);
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to) {
    to || (to = new this.constructor());
    to.set(...this.get());
    const { blockLen, buffer, length, finished, destroyed, pos } = this;
    to.length = length;
    to.pos = pos;
    to.finished = finished;
    to.destroyed = destroyed;
    if (length % blockLen)
      to.buffer.set(buffer);
    return to;
  }
};

// node_modules/@noble/hashes/esm/sha256.js
var SHA256_K = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
var SHA256_IV = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
var SHA256 = class extends HashMD {
  constructor() {
    super(64, 32, 8, false);
    this.A = SHA256_IV[0] | 0;
    this.B = SHA256_IV[1] | 0;
    this.C = SHA256_IV[2] | 0;
    this.D = SHA256_IV[3] | 0;
    this.E = SHA256_IV[4] | 0;
    this.F = SHA256_IV[5] | 0;
    this.G = SHA256_IV[6] | 0;
    this.H = SHA256_IV[7] | 0;
  }
  get() {
    const { A, B, C, D, E, F, G, H } = this;
    return [A, B, C, D, E, F, G, H];
  }
  set(A, B, C, D, E, F, G, H) {
    this.A = A | 0;
    this.B = B | 0;
    this.C = C | 0;
    this.D = D | 0;
    this.E = E | 0;
    this.F = F | 0;
    this.G = G | 0;
    this.H = H | 0;
  }
  process(view, offset2) {
    for (let i = 0; i < 16; i++, offset2 += 4)
      SHA256_W[i] = view.getUint32(offset2, false);
    for (let i = 16; i < 64; i++) {
      const W15 = SHA256_W[i - 15];
      const W2 = SHA256_W[i - 2];
      const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
      const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
      SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
    }
    let { A, B, C, D, E, F, G, H } = this;
    for (let i = 0; i < 64; i++) {
      const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
      const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
      const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
      const T2 = sigma0 + Maj(A, B, C) | 0;
      H = G;
      G = F;
      F = E;
      E = D + T1 | 0;
      D = C;
      C = B;
      B = A;
      A = T1 + T2 | 0;
    }
    A = A + this.A | 0;
    B = B + this.B | 0;
    C = C + this.C | 0;
    D = D + this.D | 0;
    E = E + this.E | 0;
    F = F + this.F | 0;
    G = G + this.G | 0;
    H = H + this.H | 0;
    this.set(A, B, C, D, E, F, G, H);
  }
  roundClean() {
    SHA256_W.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    this.buffer.fill(0);
  }
};
var sha256 = /* @__PURE__ */ wrapConstructor(() => new SHA256());

// src/marshmallow/index.ts
var import_web311 = require("@solana/web3.js");
var import_bn9 = __toESM(require("bn.js"));

// src/marshmallow/buffer-layout.ts
var import_buffer_layout = require("@solana/buffer-layout");
var Layout = import_buffer_layout.Layout;
var Structure = import_buffer_layout.Structure;
var UInt = import_buffer_layout.UInt;
var u8 = import_buffer_layout.u8;
var u16 = import_buffer_layout.u16;
var u32 = import_buffer_layout.u32;
var nu64 = import_buffer_layout.nu64;
var s32 = import_buffer_layout.s32;
var seq = import_buffer_layout.seq;
var blob = import_buffer_layout.blob;
var bits = import_buffer_layout.bits;
var offset = import_buffer_layout.offset;

// src/marshmallow/index.ts
var BNLayout = class extends Layout {
  blob;
  signed;
  constructor(span, signed, property) {
    super(span, property);
    this.blob = blob(span);
    this.signed = signed;
  }
  decode(b, offset2 = 0) {
    const num = new import_bn9.default(this.blob.decode(b, offset2), 10, "le");
    if (this.signed) {
      return num.fromTwos(this.span * 8).clone();
    }
    return num;
  }
  encode(src, b, offset2 = 0) {
    if (typeof src === "number")
      src = new import_bn9.default(src);
    if (this.signed) {
      src = src.toTwos(this.span * 8);
    }
    return this.blob.encode(src.toArrayLike(Buffer, "le", this.span), b, offset2);
  }
};
var WideBits = class extends Layout {
  _lower;
  _upper;
  constructor(property) {
    super(8, property);
    this._lower = bits(u32(), false);
    this._upper = bits(u32(), false);
  }
  addBoolean(property) {
    if (this._lower.fields.length < 32) {
      this._lower.addBoolean(property);
    } else {
      this._upper.addBoolean(property);
    }
  }
  decode(b, offset2 = 0) {
    const lowerDecoded = this._lower.decode(b, offset2);
    const upperDecoded = this._upper.decode(b, offset2 + this._lower.span);
    return { ...lowerDecoded, ...upperDecoded };
  }
  encode(src, b, offset2 = 0) {
    return this._lower.encode(src, b, offset2) + this._upper.encode(src, b, offset2 + this._lower.span);
  }
};
function u82(property) {
  return new UInt(1, property);
}
function u322(property) {
  return new UInt(4, property);
}
function u64(property) {
  return new BNLayout(8, false, property);
}
function u128(property) {
  return new BNLayout(16, false, property);
}
function i8(property) {
  return new BNLayout(1, true, property);
}
function i64(property) {
  return new BNLayout(8, true, property);
}
function i128(property) {
  return new BNLayout(16, true, property);
}
var WrappedLayout = class extends Layout {
  layout;
  decoder;
  encoder;
  constructor(layout, decoder, encoder, property) {
    super(layout.span, property);
    this.layout = layout;
    this.decoder = decoder;
    this.encoder = encoder;
  }
  decode(b, offset2) {
    return this.decoder(this.layout.decode(b, offset2));
  }
  encode(src, b, offset2) {
    return this.layout.encode(this.encoder(src), b, offset2);
  }
  getSpan(b, offset2) {
    return this.layout.getSpan(b, offset2);
  }
};
function publicKey(property) {
  return new WrappedLayout(blob(32), (b) => new import_web311.PublicKey(b), (key) => key.toBuffer(), property);
}
function bool(property) {
  return new WrappedLayout(u8(), decodeBool, encodeBool, property);
}
function decodeBool(value) {
  if (value === 0) {
    return false;
  } else if (value === 1) {
    return true;
  }
  throw new Error("Invalid bool: " + value);
}
function encodeBool(value) {
  return value ? 1 : 0;
}
function vecU8(property) {
  const length = u32("length");
  const layout = struct([length, blob(offset(length, -length.span), "data")]);
  return new WrappedLayout(layout, ({ data }) => data, (data) => ({ data }), property);
}
function str(property) {
  return new WrappedLayout(vecU8(), (data) => data.toString("utf-8"), (s) => Buffer.from(s, "utf-8"), property);
}
var Structure2 = class extends Structure {
  decode(b, offset2) {
    return super.decode(b, offset2);
  }
};
function struct(fields, property, decodePrefixes) {
  return new Structure2(fields, property, decodePrefixes);
}
function seq2(elementLayout, count, property) {
  let parsedCount;
  const superCount = typeof count === "number" ? count : (0, import_bn9.isBN)(count) ? count.toNumber() : new Proxy(count, {
    get(target, property2) {
      if (!parsedCount) {
        const countProperty = Reflect.get(target, "count");
        parsedCount = (0, import_bn9.isBN)(countProperty) ? countProperty.toNumber() : countProperty;
        Reflect.set(target, "count", parsedCount);
      }
      return Reflect.get(target, property2);
    },
    set(target, property2, value) {
      if (property2 === "count") {
        parsedCount = value;
      }
      return Reflect.set(target, property2, value);
    }
  });
  return seq(elementLayout, superCount, property);
}

// src/raydium/account/layout.ts
var splAccountLayout = struct([
  publicKey("mint"),
  publicKey("owner"),
  u64("amount"),
  u322("delegateOption"),
  publicKey("delegate"),
  u82("state"),
  u322("isNativeOption"),
  u64("isNative"),
  u64("delegatedAmount"),
  u322("closeAuthorityOption"),
  publicKey("closeAuthority")
]);

// src/raydium/account/util.ts
var logger7 = createLogger("Raydium_Util");
function parseTokenAccountResp({ owner, solAccountResp, tokenAccountResp }) {
  const tokenAccounts = [];
  const tokenAccountRawInfos = [];
  for (const { pubkey, account } of tokenAccountResp.value) {
    const accountInfo = splAccountLayout.decode(account.data);
    const { mint, amount } = accountInfo;
    tokenAccounts.push({
      publicKey: pubkey,
      mint,
      amount,
      isAssociated: getATAAddress(owner, mint, account.owner).publicKey.equals(pubkey),
      isNative: false,
      programId: account.owner
    });
    tokenAccountRawInfos.push({ pubkey, accountInfo, programId: account.owner });
  }
  if (solAccountResp) {
    tokenAccounts.push({
      mint: import_web312.PublicKey.default,
      amount: new import_bn10.default(String(solAccountResp.lamports)),
      isNative: true,
      programId: solAccountResp.owner
    });
  }
  return {
    tokenAccounts,
    tokenAccountRawInfos
  };
}
function generatePubKey({
  fromPublicKey,
  programId = import_spl_token7.TOKEN_PROGRAM_ID,
  assignSeed
}) {
  const seed = assignSeed ? btoa(assignSeed).slice(0, 32) : import_web312.Keypair.generate().publicKey.toBase58().slice(0, 32);
  const publicKey2 = createWithSeed(fromPublicKey, seed, programId);
  return { publicKey: publicKey2, seed };
}
function createWithSeed(fromPublicKey, seed, programId) {
  const buffer = Buffer.concat([fromPublicKey.toBuffer(), Buffer.from(seed), programId.toBuffer()]);
  const publicKeyBytes = sha256(buffer);
  return new import_web312.PublicKey(publicKeyBytes);
}

// src/raydium/account/instruction.ts
function initTokenAccountInstruction(params) {
  const { mint, tokenAccount, owner, programId = import_spl_token8.TOKEN_PROGRAM_ID } = params;
  return (0, import_spl_token8.createInitializeAccountInstruction)(tokenAccount, mint, owner, programId);
}
function closeAccountInstruction(params) {
  const { tokenAccount, payer, multiSigners = [], owner, programId = import_spl_token8.TOKEN_PROGRAM_ID } = params;
  return (0, import_spl_token8.createCloseAccountInstruction)(tokenAccount, payer, owner, multiSigners, programId);
}
async function createWSolAccountInstructions(params) {
  const { connection, amount, commitment, payer, owner, skipCloseAccount } = params;
  const balanceNeeded = await connection.getMinimumBalanceForRentExemption(splAccountLayout.span, commitment);
  const lamports = parseBigNumberish(amount).add(new import_bn11.default(balanceNeeded));
  const newAccount = generatePubKey({ fromPublicKey: payer, programId: import_spl_token8.TOKEN_PROGRAM_ID });
  return {
    addresses: { newAccount: newAccount.publicKey },
    signers: [],
    instructions: [
      import_web313.SystemProgram.createAccountWithSeed({
        fromPubkey: payer,
        basePubkey: payer,
        seed: newAccount.seed,
        newAccountPubkey: newAccount.publicKey,
        lamports: lamports.toNumber(),
        space: splAccountLayout.span,
        programId: import_spl_token8.TOKEN_PROGRAM_ID
      }),
      initTokenAccountInstruction({
        mint: new import_web313.PublicKey(TOKEN_WSOL.address),
        tokenAccount: newAccount.publicKey,
        owner,
        programId: import_spl_token8.TOKEN_PROGRAM_ID
      })
    ],
    instructionTypes: [InstructionType.CreateAccount, InstructionType.InitAccount],
    endInstructionTypes: skipCloseAccount ? [] : [InstructionType.CloseAccount],
    endInstructions: skipCloseAccount ? [] : [
      closeAccountInstruction({
        tokenAccount: newAccount.publicKey,
        payer,
        owner
      })
    ]
  };
}
function makeTransferInstruction({
  source,
  destination,
  owner,
  amount,
  multiSigners = [],
  tokenProgram = import_spl_token8.TOKEN_PROGRAM_ID
}) {
  return (0, import_spl_token8.createTransferInstruction)(source, destination, owner, BigInt(String(amount)), multiSigners, tokenProgram);
}

// src/raydium/account/account.ts
var Account = class extends ModuleBase {
  _tokenAccounts = [];
  _tokenAccountRawInfos = [];
  _accountChangeListenerId;
  _accountListener = [];
  _clientOwnedToken = false;
  _notSubscribeAccountChange = false;
  _accountFetchTime = 0;
  constructor(params) {
    super(params);
    const { tokenAccounts, tokenAccountRawInfos, notSubscribeAccountChange } = params;
    this._tokenAccounts = tokenAccounts || [];
    this._tokenAccountRawInfos = tokenAccountRawInfos || [];
    this._notSubscribeAccountChange = notSubscribeAccountChange ?? true;
    this._clientOwnedToken = !!(tokenAccounts || tokenAccountRawInfos);
  }
  get tokenAccounts() {
    return this._tokenAccounts;
  }
  get tokenAccountRawInfos() {
    return this._tokenAccountRawInfos;
  }
  set notSubscribeAccountChange(subscribe) {
    this._notSubscribeAccountChange = subscribe;
  }
  updateTokenAccount({ tokenAccounts, tokenAccountRawInfos }) {
    if (tokenAccounts)
      this._tokenAccounts = tokenAccounts;
    if (tokenAccountRawInfos)
      this._tokenAccountRawInfos = tokenAccountRawInfos;
    this._accountChangeListenerId && this.scope.connection.removeAccountChangeListener(this._accountChangeListenerId);
    this._accountChangeListenerId = void 0;
    this._clientOwnedToken = true;
    return this;
  }
  addAccountChangeListener(cbk) {
    this._accountListener.push(cbk);
    return this;
  }
  removeAccountChangeListener(cbk) {
    this._accountListener = this._accountListener.filter((listener) => listener !== cbk);
    return this;
  }
  getAssociatedTokenAccount(mint, programId) {
    return getATAAddress(this.scope.ownerPubKey, mint, programId).publicKey;
  }
  resetTokenAccounts() {
    if (this._clientOwnedToken)
      return;
    this._tokenAccounts = [];
    this._tokenAccountRawInfos = [];
  }
  async fetchWalletTokenAccounts(config2) {
    if (this._clientOwnedToken || !config2?.forceUpdate && this._tokenAccounts.length && Date.now() - this._accountFetchTime < (this._notSubscribeAccountChange ? 1e3 * 5 : 1e3 * 60 * 3)) {
      return {
        tokenAccounts: this._tokenAccounts,
        tokenAccountRawInfos: this._tokenAccountRawInfos
      };
    }
    this.scope.checkOwner();
    const defaultConfig = {};
    const customConfig = { ...defaultConfig, ...config2 };
    const [solAccountResp, ownerTokenAccountResp, ownerToken2022AccountResp] = await Promise.all([
      this.scope.connection.getAccountInfo(this.scope.ownerPubKey, customConfig.commitment),
      this.scope.connection.getTokenAccountsByOwner(this.scope.ownerPubKey, { programId: import_spl_token9.TOKEN_PROGRAM_ID }, customConfig.commitment),
      this.scope.connection.getTokenAccountsByOwner(this.scope.ownerPubKey, { programId: import_spl_token9.TOKEN_2022_PROGRAM_ID }, customConfig.commitment)
    ]);
    const { tokenAccounts, tokenAccountRawInfos } = parseTokenAccountResp({
      owner: this.scope.ownerPubKey,
      solAccountResp,
      tokenAccountResp: {
        context: ownerTokenAccountResp.context,
        value: [...ownerTokenAccountResp.value, ...ownerToken2022AccountResp.value]
      }
    });
    this._tokenAccounts = tokenAccounts;
    this._tokenAccountRawInfos = tokenAccountRawInfos;
    this._accountFetchTime = Date.now();
    if (!this._notSubscribeAccountChange) {
      this._accountChangeListenerId && this.scope.connection.removeAccountChangeListener(this._accountChangeListenerId);
      this._accountChangeListenerId = this.scope.connection.onAccountChange(this.scope.ownerPubKey, () => {
        this.fetchWalletTokenAccounts({ forceUpdate: true });
        this._accountListener.forEach((cb) => cb({ tokenAccounts: this._tokenAccounts, tokenAccountRawInfos: this._tokenAccountRawInfos }));
      }, { commitment: config2?.commitment });
    }
    return { tokenAccounts, tokenAccountRawInfos };
  }
  clearAccountChangeCkb() {
    if (this._accountChangeListenerId !== void 0)
      this.scope.connection.removeAccountChangeListener(this._accountChangeListenerId);
  }
  async getCreatedTokenAccount({
    mint,
    programId = import_spl_token9.TOKEN_PROGRAM_ID,
    associatedOnly = true
  }) {
    await this.fetchWalletTokenAccounts();
    const tokenAccounts = this._tokenAccounts.filter(({ mint: accountMint }) => accountMint?.equals(mint)).sort((a, b) => a.amount.lt(b.amount) ? 1 : -1);
    const ata = this.getAssociatedTokenAccount(mint, programId);
    for (const tokenAccount of tokenAccounts) {
      const { publicKey: publicKey2 } = tokenAccount;
      if (publicKey2) {
        if (!associatedOnly || associatedOnly && ata.equals(publicKey2))
          return publicKey2;
      }
    }
  }
  async getOrCreateTokenAccount(params) {
    await this.fetchWalletTokenAccounts();
    const {
      mint,
      createInfo,
      associatedOnly,
      owner,
      notUseTokenAccount = false,
      skipCloseAccount = false,
      checkCreateATAOwner = false,
      assignSeed
    } = params;
    const tokenProgram = new import_web314.PublicKey(params.tokenProgram || import_spl_token9.TOKEN_PROGRAM_ID);
    const ata = this.getAssociatedTokenAccount(mint, new import_web314.PublicKey(tokenProgram));
    const accounts = (notUseTokenAccount ? [] : this.tokenAccountRawInfos).filter((i) => i.accountInfo.mint.equals(mint) && (!associatedOnly || i.pubkey.equals(ata))).sort((a, b) => a.accountInfo.amount.lt(b.accountInfo.amount) ? 1 : -1);
    if (createInfo === void 0 || accounts.length > 0) {
    }
    const newTxInstructions = {
      instructions: [],
      endInstructions: [],
      signers: [],
      instructionTypes: [],
      endInstructionTypes: []
    };
    if (associatedOnly) {
      const _createATAIns = (0, import_spl_token9.createAssociatedTokenAccountInstruction)(owner, ata, owner, mint, tokenProgram);
      const _ataInTokenAcc = this.tokenAccountRawInfos.find((i) => i.pubkey.equals(ata));
      if (checkCreateATAOwner) {
        const ataInfo = await this.scope.connection.getAccountInfo(ata);
        if (ataInfo === null) {
          newTxInstructions.instructions?.push(_createATAIns);
          newTxInstructions.instructionTypes.push(InstructionType.CreateATA);
        } else if (ataInfo.owner.equals(tokenProgram) && import_spl_token9.AccountLayout.decode(ataInfo.data).mint.equals(mint) && import_spl_token9.AccountLayout.decode(ataInfo.data).owner.equals(owner)) {
        } else {
          throw Error(`create ata check error -> mint: ${mint.toString()}, ata: ${ata.toString()}`);
        }
      } else if (_ataInTokenAcc === void 0) {
        newTxInstructions.instructions.push(_createATAIns);
        newTxInstructions.instructionTypes.push(InstructionType.CreateATA);
      }
      if (mint.equals(WSOLMint) && createInfo?.amount) {
        const txInstruction = await createWSolAccountInstructions({
          connection: this.scope.connection,
          owner: this.scope.ownerPubKey,
          payer: createInfo.payer || this.scope.ownerPubKey,
          amount: createInfo.amount ?? 0,
          skipCloseAccount
        });
        newTxInstructions.instructions.push(...txInstruction.instructions || []);
        newTxInstructions.endInstructions.push(...txInstruction.endInstructions || []);
        newTxInstructions.instructionTypes.push(...txInstruction.instructionTypes || []);
        newTxInstructions.endInstructionTypes.push(...txInstruction.endInstructionTypes || []);
        if (createInfo.amount) {
          newTxInstructions.instructions.push(makeTransferInstruction({
            source: txInstruction.addresses.newAccount,
            destination: ata,
            owner: this.scope.ownerPubKey,
            amount: createInfo.amount,
            tokenProgram: import_spl_token9.TOKEN_PROGRAM_ID
          }));
          newTxInstructions.instructionTypes.push(InstructionType.TransferAmount);
        }
      }
      if (!skipCloseAccount && _ataInTokenAcc === void 0) {
        newTxInstructions.endInstructions.push(closeAccountInstruction({
          owner,
          payer: createInfo?.payer || owner,
          tokenAccount: ata,
          programId: tokenProgram
        }));
        newTxInstructions.endInstructionTypes.push(InstructionType.CloseAccount);
      }
      return { account: ata, instructionParams: newTxInstructions };
    } else {
      const newTokenAccount = generatePubKey({ fromPublicKey: owner, programId: tokenProgram, assignSeed });
      const balanceNeeded = await this.scope.connection.getMinimumBalanceForRentExemption(import_spl_token9.AccountLayout.span);
      const createAccountIns = import_web314.SystemProgram.createAccountWithSeed({
        fromPubkey: owner,
        basePubkey: owner,
        seed: newTokenAccount.seed,
        newAccountPubkey: newTokenAccount.publicKey,
        lamports: balanceNeeded + Number(createInfo?.amount?.toString() ?? 0),
        space: import_spl_token9.AccountLayout.span,
        programId: tokenProgram
      });
      newTxInstructions.instructions.push(createAccountIns, initTokenAccountInstruction({
        mint,
        tokenAccount: newTokenAccount.publicKey,
        owner: this.scope.ownerPubKey,
        programId: tokenProgram
      }));
      newTxInstructions.instructionTypes.push(InstructionType.CreateAccount);
      newTxInstructions.instructionTypes.push(InstructionType.InitAccount);
      if (!skipCloseAccount) {
        newTxInstructions.endInstructions.push(closeAccountInstruction({
          owner,
          payer: createInfo?.payer || owner,
          tokenAccount: newTokenAccount.publicKey,
          programId: tokenProgram
        }));
        newTxInstructions.endInstructionTypes.push(InstructionType.CloseAccount);
      }
      return { account: newTokenAccount.publicKey, instructionParams: newTxInstructions };
    }
  }
  async checkOrCreateAta({
    mint,
    programId = import_spl_token9.TOKEN_PROGRAM_ID,
    autoUnwrapWSOLToSOL
  }) {
    await this.fetchWalletTokenAccounts();
    let tokenAccountAddress = this.scope.account.tokenAccounts.find(({ mint: accountTokenMint }) => accountTokenMint?.toBase58() === mint.toBase58())?.publicKey;
    const owner = this.scope.ownerPubKey;
    const newTxInstructions = {};
    if (!tokenAccountAddress) {
      const ataAddress = this.getAssociatedTokenAccount(mint, programId);
      const instruction = await (0, import_spl_token9.createAssociatedTokenAccountInstruction)(owner, ataAddress, owner, mint, programId);
      newTxInstructions.instructions = [instruction];
      newTxInstructions.instructionTypes = [InstructionType.CreateATA];
      tokenAccountAddress = ataAddress;
    }
    if (autoUnwrapWSOLToSOL && WSOLMint.toBase58() === mint.toBase58()) {
      newTxInstructions.endInstructions = [
        closeAccountInstruction({ owner, payer: owner, tokenAccount: tokenAccountAddress, programId })
      ];
      newTxInstructions.endInstructionTypes = [InstructionType.CloseAccount];
    }
    return {
      pubKey: tokenAccountAddress,
      newInstructions: newTxInstructions
    };
  }
  async handleTokenAccount(params) {
    const {
      side,
      amount,
      mint,
      programId = import_spl_token9.TOKEN_PROGRAM_ID,
      tokenAccount,
      payer = this.scope.ownerPubKey,
      bypassAssociatedCheck,
      skipCloseAccount,
      checkCreateATAOwner
    } = params;
    const ata = this.getAssociatedTokenAccount(mint, programId);
    if (new import_web314.PublicKey(WSOLMint).equals(mint)) {
      const txInstruction = await createWSolAccountInstructions({
        connection: this.scope.connection,
        owner: this.scope.ownerPubKey,
        payer,
        amount,
        skipCloseAccount
      });
      return { tokenAccount: txInstruction.addresses.newAccount, ...txInstruction };
    } else if (!tokenAccount || side === "out" && !ata.equals(tokenAccount) && !bypassAssociatedCheck) {
      const instructions = [];
      const _createATAIns = (0, import_spl_token9.createAssociatedTokenAccountInstruction)(this.scope.ownerPubKey, ata, this.scope.ownerPubKey, mint, programId);
      if (checkCreateATAOwner) {
        const ataInfo = await this.scope.connection.getAccountInfo(ata);
        if (ataInfo === null) {
          instructions.push(_createATAIns);
        } else if (ataInfo.owner.equals(import_spl_token9.TOKEN_PROGRAM_ID) && import_spl_token9.AccountLayout.decode(ataInfo.data).mint.equals(mint) && import_spl_token9.AccountLayout.decode(ataInfo.data).owner.equals(this.scope.ownerPubKey)) {
        } else {
          throw Error(`create ata check error -> mint: ${mint.toString()}, ata: ${ata.toString()}`);
        }
      } else {
        instructions.push(_createATAIns);
      }
      return {
        tokenAccount: ata,
        instructions,
        instructionTypes: [InstructionType.CreateATA]
      };
    }
    return { tokenAccount };
  }
  async processTokenAccount(props) {
    const { mint, programId = import_spl_token9.TOKEN_PROGRAM_ID, amount, useSOLBalance, handleTokenAccount, feePayer } = props;
    let tokenAccount;
    const txBuilder = this.createTxBuilder(feePayer);
    if (mint.equals(new import_web314.PublicKey(WSOLMint)) && useSOLBalance) {
      const { tokenAccount: _tokenAccount, ...instructions } = await this.handleTokenAccount({
        side: "in",
        amount: amount || 0,
        mint,
        bypassAssociatedCheck: true,
        programId
      });
      tokenAccount = _tokenAccount;
      txBuilder.addInstruction(instructions);
    } else {
      tokenAccount = await this.getCreatedTokenAccount({
        mint,
        associatedOnly: false,
        programId
      });
      if (!tokenAccount && handleTokenAccount) {
        const { tokenAccount: _tokenAccount, ...instructions } = await this.scope.account.handleTokenAccount({
          side: "in",
          amount: 0,
          mint,
          bypassAssociatedCheck: true,
          programId
        });
        tokenAccount = _tokenAccount;
        txBuilder.addInstruction(instructions);
      }
    }
    return { tokenAccount, ...txBuilder.AllTxData };
  }
};

// src/raydium/farm/farm.ts
var import_web317 = require("@solana/web3.js");
var import_spl_token11 = require("@solana/spl-token");

// src/raydium/farm/config.ts
var import_web315 = require("@solana/web3.js");

// src/raydium/farm/layout.ts
var associatedLedgerAccountLayout = struct([u82("instruction")]);
var withdrawRewardLayout = struct([u82("instruction")]);
var farmStateRewardInfoV6Layout = struct([
  u64("rewardState"),
  u64("rewardOpenTime"),
  u64("rewardEndTime"),
  u64("rewardLastUpdateTime"),
  u64("totalReward"),
  u64("totalRewardEmissioned"),
  u64("rewardClaimed"),
  u64("rewardPerSecond"),
  u128("accRewardPerShare"),
  publicKey("rewardVault"),
  publicKey("rewardMint"),
  publicKey("rewardSender"),
  u64("rewardType"),
  seq2(u64(), 15, "padding")
]);
var realFarmStateV3Layout = struct([
  u64("state"),
  u64("nonce"),
  publicKey("lpVault"),
  publicKey("rewardVault"),
  publicKey(),
  publicKey(),
  u64(),
  u64(),
  u64("totalReward"),
  u128("perShareReward"),
  u64("lastSlot"),
  u64("perSlotReward")
]);
var realFarmStateV5Layout = struct([
  u64("state"),
  u64("nonce"),
  publicKey("lpVault"),
  publicKey("rewardVaultA"),
  u64("totalRewardA"),
  u128("perShareRewardA"),
  u64("perSlotRewardA"),
  u82("option"),
  publicKey("rewardVaultB"),
  blob(7),
  u64("totalRewardB"),
  u128("perShareRewardB"),
  u64("perSlotRewardB"),
  u64("lastSlot"),
  publicKey()
]);
var realFarmV6Layout = struct([
  u64(),
  u64("state"),
  u64("nonce"),
  u64("validRewardTokenNum"),
  u128("rewardMultiplier"),
  u64("rewardPeriodMax"),
  u64("rewardPeriodMin"),
  u64("rewardPeriodExtend"),
  publicKey("lpMint"),
  publicKey("lpVault"),
  seq2(farmStateRewardInfoV6Layout, 5, "rewardInfos"),
  publicKey("creator"),
  publicKey(),
  seq2(u64(), 32, "padding")
]);
var farmStateV3Layout = new Proxy(realFarmStateV3Layout, {
  get(target, p, receiver) {
    if (p === "decode")
      return (...decodeParams) => {
        const originalResult = target.decode(...decodeParams);
        return {
          ...originalResult,
          version: 3,
          rewardInfos: [
            {
              rewardVault: originalResult.rewardVault,
              totalReward: originalResult.totalReward,
              perSlotReward: originalResult.perSlotReward,
              perShareReward: originalResult.perShareReward
            }
          ]
        };
      };
    else
      return Reflect.get(target, p, receiver);
  }
});
var farmStateV5Layout = new Proxy(realFarmStateV5Layout, {
  get(target, p, receiver) {
    if (p === "decode")
      return (...decodeParams) => {
        const originalResult = target.decode(...decodeParams);
        return {
          ...originalResult,
          version: 5,
          rewardInfos: [
            {
              rewardVault: originalResult.rewardVaultA,
              totalReward: originalResult.totalRewardA,
              perSlotReward: originalResult.perSlotRewardA,
              perShareReward: originalResult.perShareRewardA
            },
            {
              rewardVault: originalResult.rewardVaultB,
              totalReward: originalResult.totalRewardB,
              perSlotReward: originalResult.perSlotRewardB,
              perShareReward: originalResult.perShareRewardB
            }
          ]
        };
      };
    else
      return Reflect.get(target, p, receiver);
  }
});
var farmStateV6Layout = new Proxy(realFarmV6Layout, {
  get(target, p, receiver) {
    if (p === "decode")
      return (...decodeParams) => {
        const originalResult = target.decode(...decodeParams);
        return {
          ...originalResult,
          version: 6,
          rewardInfos: originalResult.rewardInfos.map((item) => ({
            ...item,
            rewardType: (Object.entries(poolTypeV6).find((i) => String(i[1]) === item.rewardType.toString()) ?? [
              "Standard SPL"
            ])[0]
          }))
        };
      };
    else
      return Reflect.get(target, p, receiver);
  }
});
var farmRewardTimeInfoLayout = struct([
  u64("isSet"),
  u64("rewardPerSecond"),
  u64("rewardOpenTime"),
  u64("rewardEndTime"),
  u64("rewardType")
]);
var farmRewardLayout = struct([
  u82("instruction"),
  u64("nonce"),
  seq2(farmRewardTimeInfoLayout, 5, "rewardTimeInfo")
]);
var farmRewardRestartLayout = struct([
  u82("instruction"),
  u64("rewardReopenTime"),
  u64("rewardEndTime"),
  u64("rewardPerSecond")
]);
var farmAddRewardLayout = struct([
  u82("instruction"),
  u64("isSet"),
  u64("rewardPerSecond"),
  u64("rewardOpenTime"),
  u64("rewardEndTime"),
  u64("rewardType")
]);
var farmLedgerLayoutV3_1 = struct([
  u64("state"),
  publicKey("id"),
  publicKey("owner"),
  u64("deposited"),
  seq2(u64(), 1, "rewardDebts")
]);
var farmLedgerLayoutV3_2 = struct([
  u64("state"),
  publicKey("id"),
  publicKey("owner"),
  u64("deposited"),
  seq2(u128(), 1, "rewardDebts"),
  u64(""),
  u64("voteLockedBalance"),
  seq2(u64(), 15)
]);
var farmLedgerLayoutV5_1 = struct([
  u64("state"),
  publicKey("id"),
  publicKey("owner"),
  u64("deposited"),
  seq2(u64(), 2, "rewardDebts")
]);
var farmLedgerLayoutV5_2 = struct([
  u64("state"),
  publicKey("id"),
  publicKey("owner"),
  u64("deposited"),
  seq2(u128(), 2, "rewardDebts"),
  seq2(u64(), 17)
]);
var farmLedgerLayoutV6_1 = struct([
  u64(),
  u64("state"),
  publicKey("id"),
  publicKey("owner"),
  u64("deposited"),
  seq2(u128(), 5, "rewardDebts"),
  seq2(u64(), 16)
]);
var dwLayout = struct([u82("instruction"), u64("amount")]);
var VoterVotingMintConfig = struct([
  publicKey("mint"),
  publicKey("grantAuthority"),
  u64("baselineVoteWeightScaledFactor"),
  u64("maxExtraLockupVoteWeightScaledFactor"),
  u64("lockupSaturationSecs"),
  i8("digitShift"),
  seq2(u82(), 7, "reserved1"),
  seq2(u64(), 7, "reserved2")
]);
var VoterRegistrar = struct([
  blob(8),
  publicKey("governanceProgramId"),
  publicKey("realm"),
  publicKey("realmGoverningTokenMint"),
  publicKey("realmAuthority"),
  seq2(u82(), 32, "reserved1"),
  seq2(VoterVotingMintConfig, 4, "votingMints"),
  i64("timeOffset"),
  u82("bump"),
  seq2(u82(), 7, "reserved2"),
  seq2(u64(), 11, "reserved3")
]);
var VoterLockup = struct([i64("startTime"), i64("endTime"), u82("kind"), seq2(u82(), 15, "reserved")]);
var VoterDepositEntry = struct([
  seq2(VoterLockup, 1, "lockup"),
  u64("amountDeposited_native"),
  u64("amountInitiallyLockedNative"),
  bool("isUsed"),
  bool("allowClawback"),
  u82("votingMintConfigIdx"),
  seq2(u82(), 29, "reserved")
]);
var Voter = struct([
  blob(8),
  publicKey("voterAuthority"),
  publicKey("registrar"),
  seq2(VoterDepositEntry, 32, "deposits"),
  u82("voterBump"),
  u82("voterWweightRecordBump"),
  seq2(u82(), 94, "reserved")
]);

// src/raydium/farm/config.ts
var logger8 = createLogger("Raydium_farm_config");
var FARM_LOCK_MINT = new import_web315.PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R");
var FARM_LOCK_VAULT = new import_web315.PublicKey("FrspKwj8i3pNmKwXreTveC4fu7KL5ZbGeXdZBe2XViu1");
var FARM_VERSION_TO_STATE_LAYOUT = {
  3: farmStateV3Layout,
  5: farmStateV5Layout,
  6: farmStateV6Layout
};
var FARM_VERSION_TO_LEDGER_LAYOUT = {
  3: farmLedgerLayoutV3_2,
  5: farmLedgerLayoutV5_2,
  6: farmLedgerLayoutV6_1
};
var isValidFarmVersion = (version) => [3, 4, 5, 6].indexOf(version) !== -1;
var validateFarmRewards = (params) => {
  const { version, rewardInfos, rewardTokenAccountsPublicKeys } = params;
  const infoMsg = `rewardInfo:${JSON.stringify(rewardInfos)}, rewardAccount:${JSON.stringify(rewardTokenAccountsPublicKeys)}`;
  const validator = {
    3: () => {
      if (rewardInfos.length !== 1 || rewardTokenAccountsPublicKeys.length !== 1) {
        return `rewardInfos or rewardTokenAccounts lengths not equal 1: ${infoMsg}`;
      }
    },
    5: () => {
      if (rewardInfos.length !== rewardTokenAccountsPublicKeys.length) {
        return `rewardInfos and rewardTokenAccounts lengths not equal: ${infoMsg}`;
      }
    },
    6: () => {
      if (!rewardTokenAccountsPublicKeys.length || rewardInfos.length !== rewardTokenAccountsPublicKeys.length) {
        return `no rewardTokenAccounts or rewardInfos and rewardTokenAccounts lengths not equal: ${infoMsg}`;
      }
    }
  };
  return validator[version]?.();
};
var poolTypeV6 = { "Standard SPL": 0, "Option tokens": 1 };
var FARM_PROGRAM_TO_VERSION = {
  [FARM_PROGRAM_ID_V3.toString()]: 3,
  [FARM_PROGRAM_ID_V4.toString()]: 4,
  [FARM_PROGRAM_ID_V5.toString()]: 5,
  [FARM_PROGRAM_ID_V6.toString()]: 6
};

// src/raydium/farm/instruction.ts
var import_web316 = require("@solana/web3.js");
var import_bn13 = __toESM(require("bn.js"));
var import_spl_token10 = require("@solana/spl-token");

// src/raydium/farm/pda.ts
function getRegistrarAddress(programId, realm, communityTokenMint) {
  return findProgramAddress([realm.toBuffer(), Buffer.from("registrar", "utf8"), communityTokenMint.toBuffer()], programId);
}
function getVotingTokenMint(programId, poolId) {
  return findProgramAddress([poolId.toBuffer(), Buffer.from("voting_mint_seed", "utf8")], programId);
}
function getVotingMintAuthority(programId, poolId) {
  return findProgramAddress([poolId.toBuffer()], programId);
}
function getVoterAddress(programId, registrar, authority) {
  return findProgramAddress([registrar.toBuffer(), Buffer.from("voter", "utf8"), authority.toBuffer()], programId);
}
function getVoterWeightRecordAddress(programId, registrar, authority) {
  return findProgramAddress([registrar.toBuffer(), Buffer.from("voter-weight-record", "utf8"), authority.toBuffer()], programId);
}
function getTokenOwnerRecordAddress(programId, realm, governingTokenMint, governingTokenOwner) {
  return findProgramAddress([
    Buffer.from("governance", "utf8"),
    realm.toBuffer(),
    governingTokenMint.toBuffer(),
    governingTokenOwner.toBuffer()
  ], programId);
}

// src/raydium/farm/util.ts
var import_bn12 = __toESM(require("bn.js"));
var logger9 = createLogger("Raydium.farm.util");
function getAssociatedLedgerPoolAccount({
  programId,
  poolId,
  mint,
  type
}) {
  const { publicKey: publicKey2 } = findProgramAddress([
    poolId.toBuffer(),
    mint.toBuffer(),
    Buffer.from(type === "lpVault" ? "lp_vault_associated_seed" : type === "rewardVault" ? "reward_vault_associated_seed" : "", "utf-8")
  ], programId);
  return publicKey2;
}
function getAssociatedLedgerAccount({
  programId,
  poolId,
  owner,
  version
}) {
  const { publicKey: publicKey2 } = findProgramAddress([
    poolId.toBuffer(),
    owner.toBuffer(),
    Buffer.from(version === 6 ? "farmer_info_associated_seed" : "staker_info_v2_associated_seed", "utf-8")
  ], programId);
  return publicKey2;
}
var getAssociatedAuthority = ({
  programId,
  poolId
}) => findProgramAddress([poolId.toBuffer()], programId);
function farmRewardInfoToConfig(data) {
  return {
    isSet: new import_bn12.default(1),
    rewardPerSecond: parseBigNumberish(data.perSecond),
    rewardOpenTime: parseBigNumberish(data.openTime),
    rewardEndTime: parseBigNumberish(data.endTime),
    rewardType: parseBigNumberish(poolTypeV6[data.rewardType])
  };
}
function calFarmRewardAmount(data) {
  return parseBigNumberish(data.endTime).sub(parseBigNumberish(data.openTime)).mul(parseBigNumberish(data.perSecond));
}
function getFarmLedgerLayout(version) {
  const ledgerLayout = FARM_VERSION_TO_LEDGER_LAYOUT[version];
  if (!ledgerLayout)
    logger9.logWithError("invalid version", version);
  return ledgerLayout;
}
function getFarmStateLayout(version) {
  const stateLayout = FARM_VERSION_TO_STATE_LAYOUT[version];
  if (!stateLayout)
    logger9.logWithError("invalid version", version);
  return stateLayout;
}
function updateFarmPoolInfo(poolInfo, lpVault, slot, chainTime) {
  if (poolInfo.version === 3 || poolInfo.version === 5) {
    if (poolInfo.lastSlot.gte(new import_bn12.default(slot)))
      return poolInfo;
    const spread = new import_bn12.default(slot).sub(poolInfo.lastSlot);
    poolInfo.lastSlot = new import_bn12.default(slot);
    for (const itemRewardInfo of poolInfo.rewardInfos) {
      if (lpVault.amount.eq(new import_bn12.default(0)))
        continue;
      const reward = itemRewardInfo.perSlotReward.mul(spread);
      itemRewardInfo.perShareReward = itemRewardInfo.perShareReward.add(reward.mul(new import_bn12.default(10).pow(new import_bn12.default(poolInfo.version === 3 ? 9 : 15))).div(lpVault.amount));
      itemRewardInfo.totalReward = itemRewardInfo.totalReward.add(reward);
    }
  } else if (poolInfo.version === 6) {
    for (const itemRewardInfo of poolInfo.rewardInfos) {
      if (itemRewardInfo.rewardState.eq(new import_bn12.default(0)))
        continue;
      const updateTime = import_bn12.default.min(new import_bn12.default(chainTime), itemRewardInfo.rewardEndTime);
      if (itemRewardInfo.rewardOpenTime.gte(updateTime))
        continue;
      const spread = updateTime.sub(itemRewardInfo.rewardLastUpdateTime);
      let reward = spread.mul(itemRewardInfo.rewardPerSecond);
      const leftReward = itemRewardInfo.totalReward.sub(itemRewardInfo.totalRewardEmissioned);
      if (leftReward.lt(reward)) {
        reward = leftReward;
        itemRewardInfo.rewardLastUpdateTime = itemRewardInfo.rewardLastUpdateTime.add(leftReward.div(itemRewardInfo.rewardPerSecond));
      } else {
        itemRewardInfo.rewardLastUpdateTime = updateTime;
      }
      if (lpVault.amount.eq(new import_bn12.default(0)))
        continue;
      itemRewardInfo.accRewardPerShare = itemRewardInfo.accRewardPerShare.add(reward.mul(poolInfo.rewardMultiplier).div(lpVault.amount));
      itemRewardInfo.totalRewardEmissioned = itemRewardInfo.totalRewardEmissioned.add(reward);
    }
  }
  return poolInfo;
}
async function fetchMultipleFarmInfoAndUpdate({
  connection,
  farmPools,
  owner,
  config: config2,
  chainTime
}) {
  let hasNotV6Pool = false;
  let hasV6Pool = false;
  const tenBN = new import_bn12.default(10);
  const publicKeys = [];
  for (const poolInfo of farmPools) {
    const pool = jsonInfo2PoolKeys(poolInfo);
    if (pool.version === 6)
      hasV6Pool = true;
    else
      hasNotV6Pool = true;
    publicKeys.push({
      pubkey: pool.id,
      version: pool.version,
      key: "state",
      poolId: pool.id
    }, {
      pubkey: pool.lpVault,
      version: pool.version,
      key: "lpVault",
      poolId: pool.id
    });
    if (owner) {
      publicKeys.push({
        pubkey: getAssociatedLedgerAccount({
          programId: pool.programId,
          poolId: pool.id,
          owner,
          version: poolInfo.version
        }),
        version: pool.version,
        key: "ledger",
        poolId: pool.id
      });
    }
  }
  const poolsInfo = {};
  const accountsInfo = await getMultipleAccountsInfoWithCustomFlags(connection, publicKeys, config2);
  for (const { pubkey, version, key, poolId, accountInfo } of accountsInfo) {
    const _poolId = poolId.toBase58();
    poolsInfo[_poolId] = { ...poolsInfo[_poolId] };
    if (key === "state") {
      const stateLayout = getFarmStateLayout(version);
      if (!accountInfo || !accountInfo.data || accountInfo.data.length !== stateLayout.span)
        logger9.logWithError(`invalid farm state account info, pools.id, ${pubkey}`);
      poolsInfo[_poolId].state = stateLayout.decode(accountInfo.data);
    } else if (key === "lpVault") {
      if (!accountInfo || !accountInfo.data || accountInfo.data.length !== splAccountLayout.span)
        logger9.logWithError(`invalid farm lp vault account info, pools.lpVault, ${pubkey}`);
      poolsInfo[_poolId].lpVault = splAccountLayout.decode(accountInfo.data);
    } else if (key === "ledger") {
      const legerLayout = getFarmLedgerLayout(version);
      if (accountInfo && accountInfo.data) {
        if (accountInfo.data.length !== legerLayout.span)
          logger9.logWithError(`invalid farm ledger account info, ledger, ${pubkey}`);
        poolsInfo[_poolId].ledger = legerLayout.decode(accountInfo.data);
      }
    }
  }
  const slot = hasV6Pool || hasNotV6Pool ? await connection.getSlot() : 0;
  for (const poolId of Object.keys(poolsInfo)) {
    if (poolsInfo[poolId] === void 0)
      continue;
    poolsInfo[poolId].state = updateFarmPoolInfo(poolsInfo[poolId].state, poolsInfo[poolId].lpVault, slot, chainTime);
  }
  for (const [poolId, { state, ledger }] of Object.entries(poolsInfo)) {
    if (ledger) {
      const multiplier = state.version === 6 ? state.rewardMultiplier : state.rewardInfos.length === 1 ? tenBN.pow(new import_bn12.default(9)) : tenBN.pow(new import_bn12.default(15));
      const pendingRewards = state.rewardInfos.map((rewardInfo, index) => {
        const rewardDebt = ledger.rewardDebts[index];
        const pendingReward = ledger.deposited.mul(state.version === 6 ? rewardInfo.accRewardPerShare : rewardInfo.perShareReward).div(multiplier).sub(rewardDebt);
        return pendingReward;
      });
      poolsInfo[poolId].wrapped = {
        ...poolsInfo[poolId].wrapped,
        pendingRewards
      };
    }
  }
  return poolsInfo;
}
function judgeFarmType(info, currentTime = Date.now()) {
  if (info.version === 6) {
    const rewardInfos = info.state.rewardInfos;
    if (rewardInfos.every(({ rewardOpenTime }) => isDateBefore(currentTime, rewardOpenTime.toNumber(), { unit: "s" })))
      return "upcoming pool";
    if (rewardInfos.every(({ rewardEndTime }) => isDateAfter(currentTime, rewardEndTime.toNumber(), { unit: "s" })))
      return "closed pool";
  } else {
    const perSlotRewards = info.state.rewardInfos.map(({ perSlotReward }) => perSlotReward);
    if (perSlotRewards.length === 2) {
      if (String(perSlotRewards[0]) === "0" && String(perSlotRewards[1]) !== "0") {
        return "normal fusion pool";
      }
      if (String(perSlotRewards[0]) !== "0" && String(perSlotRewards[1]) !== "0") {
        return "dual fusion pool";
      }
      if (String(perSlotRewards[0]) === "0" && String(perSlotRewards[1]) === "0") {
        return "closed pool";
      }
    } else if (perSlotRewards.length === 1) {
      if (String(perSlotRewards[0]) === "0") {
        return "closed pool";
      }
    }
  }
}
async function getDepositEntryIndex(connection, registrar, voter, voterMint) {
  const registrarAccountData = await connection.getAccountInfo(registrar);
  if (registrarAccountData === null)
    throw Error("registrar info check error");
  const registrarData = VoterRegistrar.decode(registrarAccountData.data);
  const votingMintConfigIndex = registrarData.votingMints.findIndex((i) => i.mint.equals(voterMint));
  if (votingMintConfigIndex === -1)
    throw Error("find voter mint error");
  const voterAccountData = await connection.getAccountInfo(voter);
  if (voterAccountData === null)
    return { index: votingMintConfigIndex, isInit: false };
  const voterData = Voter.decode(voterAccountData.data);
  const depositEntryIndex = voterData.deposits.findIndex((i) => i.isUsed && i.votingMintConfigIdx === votingMintConfigIndex);
  if (depositEntryIndex === -1)
    return { index: votingMintConfigIndex, isInit: false };
  else
    return { index: depositEntryIndex, isInit: true };
}

// src/raydium/farm/instruction.ts
var logger10 = createLogger("Raydium_farm_instruction");
var anchorDataBuf = {
  voterStakeRegistryCreateVoter: Buffer.from([6, 24, 245, 52, 243, 255, 148, 25]),
  voterStakeRegistryCreateDepositEntry: Buffer.from([185, 131, 167, 186, 159, 125, 19, 67]),
  voterStakeRegistryDeposit: Buffer.from([242, 35, 198, 137, 82, 225, 242, 182]),
  voterStakeRegistryWithdraw: Buffer.from([183, 18, 70, 156, 148, 109, 161, 34]),
  voterStakeRegistryUpdateVoterWeightRecord: Buffer.from([45, 185, 3, 36, 109, 190, 115, 169])
};
function createAssociatedLedgerAccountInstruction(params) {
  const { version, id, ledger, programId, owner } = params;
  const instruction = { 3: 9, 5: 10 }[version];
  if (!instruction)
    logger10.logWithError(`invalid farm pool version: ${version}`);
  const data = Buffer.alloc(associatedLedgerAccountLayout.span);
  associatedLedgerAccountLayout.encode({
    instruction
  }, data);
  const keys = [
    accountMeta({ pubkey: id }),
    accountMeta({ pubkey: ledger }),
    accountMeta({ pubkey: owner, isWritable: false }),
    accountMeta({ pubkey: import_web316.SystemProgram.programId, isWritable: false }),
    accountMeta({ pubkey: import_web316.SYSVAR_RENT_PUBKEY, isWritable: false })
  ];
  return {
    instruction: new import_web316.TransactionInstruction({
      programId,
      keys,
      data
    }),
    instructionType: InstructionType.FarmV3CreateLedger
  };
}
function makeCreateFarmInstruction(params) {
  const data = Buffer.alloc(farmRewardLayout.span);
  farmRewardLayout.encode({
    instruction: 0,
    nonce: new import_bn13.default(params.nonce),
    rewardTimeInfo: params.rewardInfoConfig
  }, data);
  const keys = [
    ...commonSystemAccountMeta,
    accountMeta({ pubkey: params.farmId }),
    accountMeta({ pubkey: params.farmAuthority, isWritable: false }),
    accountMeta({ pubkey: params.lpVault }),
    accountMeta({ pubkey: params.lpMint, isWritable: false }),
    accountMeta({ pubkey: params.lockVault }),
    accountMeta({ pubkey: params.lockMint, isWritable: false }),
    accountMeta({ pubkey: params.lockUserAccount ?? SOLMint }),
    accountMeta({ pubkey: params.owner, isWritable: false, isSigner: true })
  ];
  for (const item of params.rewardInfo) {
    keys.push(...[
      accountMeta({ pubkey: item.rewardMint, isWritable: false }),
      accountMeta({ pubkey: item.rewardVault }),
      accountMeta({ pubkey: item.userRewardToken })
    ]);
  }
  return {
    instruction: new import_web316.TransactionInstruction({ programId: params.programId, keys, data }),
    instructionType: InstructionType.FarmV6Create
  };
}
function makeCreatorWithdrawFarmRewardInstruction(params) {
  const data = Buffer.alloc(withdrawRewardLayout.span);
  withdrawRewardLayout.encode({ instruction: 5 }, data);
  const keys = [
    accountMeta({ pubkey: import_spl_token10.TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: params.id }),
    accountMeta({ pubkey: params.authority, isWritable: false }),
    accountMeta({ pubkey: params.lpVault, isWritable: false }),
    accountMeta({ pubkey: params.rewardVault }),
    accountMeta({ pubkey: params.userRewardToken }),
    accountMeta({ pubkey: params.owner, isWritable: false, isSigner: true })
  ];
  return {
    instruction: new import_web316.TransactionInstruction({ programId: params.programId, keys, data }),
    instructionType: InstructionType.FarmV6CreatorWithdraw
  };
}
function voterStakeRegistryDeposit(programId, registrar, voter, voterVault, depositToken, depositAuthority, userStakerInfoV2, pool, votingMint, votingMintAuthority, stakeProgramId, depositEntryIndex, amount) {
  const dataLayout = struct([u82("depositEntryIndex"), u64("amount")]);
  const keys = [
    { pubkey: registrar, isSigner: false, isWritable: false },
    { pubkey: voter, isSigner: false, isWritable: true },
    { pubkey: voterVault, isSigner: false, isWritable: true },
    { pubkey: depositToken, isSigner: false, isWritable: true },
    { pubkey: depositAuthority, isSigner: false, isWritable: false },
    { pubkey: import_spl_token10.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: userStakerInfoV2, isSigner: false, isWritable: true },
    { pubkey: pool, isSigner: false, isWritable: false },
    { pubkey: votingMint, isSigner: false, isWritable: true },
    { pubkey: votingMintAuthority, isSigner: false, isWritable: false },
    { pubkey: stakeProgramId, isSigner: false, isWritable: false },
    { pubkey: INSTRUCTION_PROGRAM_ID, isSigner: false, isWritable: false }
  ];
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    depositEntryIndex,
    amount
  }, data);
  const aData = Buffer.from([...anchorDataBuf.voterStakeRegistryDeposit, ...data]);
  return new import_web316.TransactionInstruction({
    keys,
    programId,
    data: aData
  });
}
function voterStakeRegistryUpdateVoterWeightRecord(programId, registrar, voter, voterWeightRecord) {
  const dataLayout = struct([]);
  const keys = [
    { pubkey: registrar, isSigner: false, isWritable: false },
    { pubkey: voter, isSigner: false, isWritable: false },
    { pubkey: voterWeightRecord, isSigner: false, isWritable: true },
    { pubkey: import_web316.SystemProgram.programId, isSigner: false, isWritable: false }
  ];
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({}, data);
  const aData = Buffer.from([...anchorDataBuf.voterStakeRegistryUpdateVoterWeightRecord, ...data]);
  return new import_web316.TransactionInstruction({
    keys,
    programId,
    data: aData
  });
}
function voterStakeRegistryWithdraw(programId, registrar, voter, voterAuthority, tokenOwnerRecord, voterWeightRecord, vault, destination, userStakerInfoV2, pool, votingMint, votingMintAuthority, stakeProgramId, depositEntryIndex, amount) {
  const dataLayout = struct([u82("depositEntryIndex"), u64("amount")]);
  const keys = [
    { pubkey: registrar, isSigner: false, isWritable: false },
    { pubkey: voter, isSigner: false, isWritable: true },
    { pubkey: voterAuthority, isSigner: true, isWritable: false },
    { pubkey: tokenOwnerRecord, isSigner: false, isWritable: false },
    { pubkey: voterWeightRecord, isSigner: false, isWritable: true },
    { pubkey: vault, isSigner: false, isWritable: true },
    { pubkey: destination, isSigner: false, isWritable: true },
    { pubkey: import_spl_token10.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: userStakerInfoV2, isSigner: false, isWritable: true },
    { pubkey: pool, isSigner: false, isWritable: false },
    { pubkey: votingMint, isSigner: false, isWritable: true },
    { pubkey: votingMintAuthority, isSigner: false, isWritable: false },
    { pubkey: stakeProgramId, isSigner: false, isWritable: false },
    { pubkey: INSTRUCTION_PROGRAM_ID, isSigner: false, isWritable: false }
  ];
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    depositEntryIndex,
    amount
  }, data);
  const aData = Buffer.from([...anchorDataBuf.voterStakeRegistryWithdraw, ...data]);
  return new import_web316.TransactionInstruction({
    keys,
    programId,
    data: aData
  });
}
function governanceCreateTokenOwnerRecord(programId, realm, governingTokenOwner, governingTokenMint, payer, tokenOwnerRecordAddress) {
  const dataLayout = struct([u82("ins")]);
  const keys = [
    { pubkey: realm, isSigner: false, isWritable: false },
    { pubkey: governingTokenOwner, isSigner: false, isWritable: false },
    { pubkey: tokenOwnerRecordAddress, isSigner: false, isWritable: true },
    { pubkey: governingTokenMint, isSigner: false, isWritable: false },
    { pubkey: payer, isSigner: true, isWritable: true },
    { pubkey: import_web316.SystemProgram.programId, isSigner: false, isWritable: false }
  ];
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({ ins: 23 }, data);
  return new import_web316.TransactionInstruction({
    keys,
    programId,
    data
  });
}
function voterStakeRegistryCreateVoter(programId, registrar, voter, voterWeightRecord, voterAuthority, payer, voterBump, voterWeightRecordBump) {
  const dataLayout = struct([u82("voterBump"), u82("voterWeightRecordBump")]);
  const keys = [
    { pubkey: registrar, isSigner: false, isWritable: false },
    { pubkey: voter, isSigner: false, isWritable: true },
    { pubkey: voterAuthority, isSigner: true, isWritable: false },
    { pubkey: voterWeightRecord, isSigner: false, isWritable: true },
    { pubkey: payer, isSigner: true, isWritable: true },
    { pubkey: import_web316.SystemProgram.programId, isSigner: false, isWritable: false },
    { pubkey: RENT_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: INSTRUCTION_PROGRAM_ID, isSigner: false, isWritable: false }
  ];
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({ voterBump, voterWeightRecordBump }, data);
  const aData = Buffer.from([...anchorDataBuf.voterStakeRegistryCreateVoter, ...data]);
  return new import_web316.TransactionInstruction({
    keys,
    programId,
    data: aData
  });
}
function voterStakeRegistryCreateDepositEntry(programId, registrar, voter, voterVault, voterAuthority, payer, depositMint, depositEntryIndex, kind, startTs, periods, allowClawback) {
  const dataLayout = struct([
    u82("depositEntryIndex"),
    u82("kind"),
    u82("option"),
    u64("startTs"),
    u322("periods"),
    bool("allowClawback")
  ]);
  const keys = [
    { pubkey: registrar, isSigner: false, isWritable: false },
    { pubkey: voter, isSigner: false, isWritable: true },
    { pubkey: voterVault, isSigner: false, isWritable: true },
    { pubkey: voterAuthority, isSigner: true, isWritable: false },
    { pubkey: payer, isSigner: true, isWritable: true },
    { pubkey: depositMint, isSigner: false, isWritable: false },
    { pubkey: import_web316.SystemProgram.programId, isSigner: false, isWritable: false },
    { pubkey: import_spl_token10.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: import_spl_token10.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: RENT_PROGRAM_ID, isSigner: false, isWritable: false }
  ];
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    depositEntryIndex,
    kind,
    option: startTs === void 0 ? 0 : 1,
    startTs,
    periods,
    allowClawback
  }, data);
  const aData = Buffer.from([...anchorDataBuf.voterStakeRegistryCreateDepositEntry, ...data]);
  return new import_web316.TransactionInstruction({
    keys,
    programId,
    data: aData
  });
}
async function makeDepositTokenInstruction({
  connection,
  programId,
  governanceProgramId,
  voteWeightAddinProgramId,
  realm,
  communityTokenMint,
  owner,
  poolId,
  tokenProgram
}) {
  const registrar = getRegistrarAddress(voteWeightAddinProgramId, realm, communityTokenMint).publicKey;
  const ownerPda = getAssociatedLedgerAccount({ programId, poolId, owner, version: 3 });
  const ownerAccountInfo = await connection.getAccountInfo(ownerPda);
  if (ownerAccountInfo === null) {
    throw Error("user is not staker");
  }
  const ownerInfo = farmLedgerLayoutV3_2.decode(ownerAccountInfo.data);
  const mintAmount = ownerInfo.deposited.sub(ownerInfo.voteLockedBalance);
  console.log("amount", mintAmount.toString());
  if (mintAmount.eq(new import_bn13.default(0))) {
    throw Error("user do not has new stake amount");
  }
  const votingMint = getVotingTokenMint(programId, poolId).publicKey;
  const votingMintAuthority = getVotingMintAuthority(programId, poolId).publicKey;
  const { publicKey: voter, nonce: voterBump } = getVoterAddress(voteWeightAddinProgramId, registrar, owner);
  const voterVault = getATAAddress(voter, votingMint, tokenProgram).publicKey;
  const { publicKey: voterWeightRecord, nonce: voterWeightRecordBump } = getVoterWeightRecordAddress(voteWeightAddinProgramId, registrar, owner);
  const tokenOwnerRecordAddress = getTokenOwnerRecordAddress(governanceProgramId, realm, communityTokenMint, owner).publicKey;
  const instructions = [];
  const depositToken = getATAAddress(owner, votingMint, tokenProgram).publicKey;
  const depositTokenAccountInfo = await connection.getAccountInfo(depositToken);
  if (depositTokenAccountInfo === null) {
    instructions.push((0, import_spl_token10.createAssociatedTokenAccountInstruction)(owner, depositToken, owner, votingMint));
  }
  const voterAccountInfo = await connection.getAccountInfo(voter);
  if (voterAccountInfo === null) {
    const createTokenOwnerRecodeIns = governanceCreateTokenOwnerRecord(governanceProgramId, realm, owner, communityTokenMint, owner, tokenOwnerRecordAddress);
    instructions.push(createTokenOwnerRecodeIns, voterStakeRegistryCreateVoter(voteWeightAddinProgramId, registrar, voter, voterWeightRecord, owner, owner, voterBump, voterWeightRecordBump));
  }
  const { index: depositEntryIndex, isInit: depositEntryInit } = await getDepositEntryIndex(connection, registrar, voter, votingMint);
  if (!depositEntryInit) {
    instructions.push(voterStakeRegistryCreateDepositEntry(voteWeightAddinProgramId, registrar, voter, voterVault, owner, owner, votingMint, depositEntryIndex, 0, void 0, 0, false));
  }
  instructions.push(voterStakeRegistryDeposit(voteWeightAddinProgramId, registrar, voter, voterVault, depositToken, owner, ownerPda, poolId, votingMint, votingMintAuthority, programId, depositEntryIndex, mintAmount), voterStakeRegistryUpdateVoterWeightRecord(voteWeightAddinProgramId, registrar, voter, voterWeightRecord));
  return instructions;
}
async function makeWithdrawTokenInstruction({
  connection,
  programId,
  governanceProgramId,
  voteWeightAddinProgramId,
  realm,
  communityTokenMint,
  owner,
  poolId,
  tokenProgram
}) {
  const registrar = getRegistrarAddress(voteWeightAddinProgramId, realm, communityTokenMint).publicKey;
  const ownerPda = getAssociatedLedgerAccount({ programId, poolId, owner, version: 3 });
  const ownerAccountInfo = await connection.getAccountInfo(ownerPda);
  if (ownerAccountInfo === null) {
    throw Error("user is not staker");
  }
  const ownerInfo = farmLedgerLayoutV3_2.decode(ownerAccountInfo.data);
  if (ownerInfo.voteLockedBalance.eq(new import_bn13.default(0))) {
    throw Error("user has vote locked balance = 0");
  }
  const votingMint = getVotingTokenMint(programId, poolId).publicKey;
  const votingMintAuthority = getVotingMintAuthority(programId, poolId).publicKey;
  const { publicKey: voter } = getVoterAddress(voteWeightAddinProgramId, registrar, owner);
  const voterVault = getATAAddress(voter, votingMint, tokenProgram).publicKey;
  const { publicKey: voterWeightRecord } = getVoterWeightRecordAddress(voteWeightAddinProgramId, registrar, owner);
  const tokenOwnerRecordAddress = getTokenOwnerRecordAddress(governanceProgramId, realm, communityTokenMint, owner).publicKey;
  const instructions = [];
  const { index: depositEntryIndex, isInit: depositEntryInit } = await getDepositEntryIndex(connection, registrar, voter, votingMint);
  if (!depositEntryInit)
    throw Error("deposit entry index check error");
  instructions.push(voterStakeRegistryWithdraw(voteWeightAddinProgramId, registrar, voter, owner, tokenOwnerRecordAddress, voterWeightRecord, voterVault, getATAAddress(owner, votingMint, tokenProgram).publicKey, ownerPda, poolId, votingMint, votingMintAuthority, programId, depositEntryIndex, ownerInfo.voteLockedBalance));
  return instructions;
}
function makeRestartRewardInstruction({
  payer,
  rewardVault,
  userRewardTokenPub,
  farmKeys,
  rewardInfo
}) {
  const data = Buffer.alloc(farmRewardRestartLayout.span);
  farmRewardRestartLayout.encode({
    instruction: 3,
    rewardReopenTime: parseBigNumberish(rewardInfo.openTime),
    rewardEndTime: parseBigNumberish(rewardInfo.endTime),
    rewardPerSecond: parseBigNumberish(rewardInfo.perSecond)
  }, data);
  const keys = [
    accountMeta({ pubkey: import_spl_token10.TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: farmKeys.id }),
    accountMeta({ pubkey: farmKeys.lpVault, isWritable: false }),
    accountMeta({ pubkey: rewardVault }),
    accountMeta({ pubkey: userRewardTokenPub }),
    accountMeta({ pubkey: payer, isWritable: false, isSigner: true })
  ];
  return new import_web316.TransactionInstruction({ programId: farmKeys.programId, keys, data });
}
function makeAddNewRewardInstruction({
  payer,
  userRewardTokenPub,
  farmKeys,
  rewardVault,
  rewardInfo
}) {
  const data = Buffer.alloc(farmAddRewardLayout.span);
  farmAddRewardLayout.encode({
    instruction: 4,
    isSet: new import_bn13.default(1),
    rewardPerSecond: parseBigNumberish(rewardInfo.perSecond),
    rewardOpenTime: parseBigNumberish(rewardInfo.openTime),
    rewardEndTime: parseBigNumberish(rewardInfo.endTime),
    rewardType: parseBigNumberish(poolTypeV6[rewardInfo.rewardType])
  }, data);
  const keys = [
    ...commonSystemAccountMeta,
    accountMeta({ pubkey: farmKeys.id }),
    accountMeta({ pubkey: farmKeys.authority, isWritable: false }),
    accountMeta({ pubkey: rewardInfo.mint, isWritable: false }),
    accountMeta({ pubkey: rewardVault }),
    accountMeta({ pubkey: userRewardTokenPub }),
    accountMeta({ pubkey: payer, isWritable: false, isSigner: true })
  ];
  return new import_web316.TransactionInstruction({ programId: farmKeys.programId, keys, data });
}
function makeDepositWithdrawInstruction(params) {
  const { farmInfo, farmKeys, version, lpAccount, rewardAccounts, owner, instruction, amount, deposit } = params;
  const [programId, id] = [new import_web316.PublicKey(farmInfo.programId), new import_web316.PublicKey(farmInfo.id)];
  const ledgerAddress = getAssociatedLedgerAccount({
    programId,
    poolId: id,
    owner,
    version
  });
  const data = Buffer.alloc(dwLayout.span);
  dwLayout.encode({
    instruction,
    amount
  }, data);
  const keys = version === 6 ? [
    accountMeta({ pubkey: import_spl_token10.TOKEN_PROGRAM_ID, isWritable: false }),
    ...deposit ? [accountMeta({ pubkey: import_web316.SystemProgram.programId, isWritable: false })] : [],
    accountMeta({ pubkey: id }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.authority), isWritable: false }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.lpVault) }),
    accountMeta({ pubkey: ledgerAddress }),
    accountMeta({ pubkey: owner, isWritable: false, isSigner: true }),
    accountMeta({ pubkey: lpAccount })
  ] : [
    accountMeta({ pubkey: id }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.authority), isWritable: false }),
    accountMeta({ pubkey: ledgerAddress }),
    accountMeta({ pubkey: owner, isWritable: false, isSigner: true }),
    accountMeta({ pubkey: lpAccount }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.lpVault) }),
    accountMeta({ pubkey: rewardAccounts[0] }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.rewardInfos[0].vault) }),
    accountMeta({ pubkey: import_web316.SYSVAR_CLOCK_PUBKEY, isWritable: false }),
    accountMeta({ pubkey: import_spl_token10.TOKEN_PROGRAM_ID, isWritable: false })
  ];
  if (version === 5) {
    for (let index = 1; index < farmKeys.rewardInfos.length; index++) {
      keys.push(accountMeta({ pubkey: rewardAccounts[index] }));
      keys.push(accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.rewardInfos[index].vault) }));
    }
  }
  if (version === 6) {
    for (let index = 0; index < farmKeys.rewardInfos.length; index++) {
      keys.push(accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.rewardInfos[index].vault) }));
      keys.push(accountMeta({ pubkey: rewardAccounts[index] }));
    }
  }
  return new import_web316.TransactionInstruction({ programId, keys, data });
}
function makeWithdrawInstructionV6(params) {
  const { farmInfo, farmKeys, lpAccount, rewardAccounts, owner, amount } = params;
  const [programId, id] = [new import_web316.PublicKey(farmInfo.programId), new import_web316.PublicKey(farmInfo.id)];
  const ledgerAddress = getAssociatedLedgerAccount({
    programId,
    poolId: id,
    owner,
    version: 6
  });
  const data = Buffer.alloc(dwLayout.span);
  dwLayout.encode({
    instruction: 2,
    amount: parseBigNumberish(amount)
  }, data);
  const keys = [
    accountMeta({ pubkey: import_spl_token10.TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: id }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.authority), isWritable: false }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.lpVault) }),
    accountMeta({ pubkey: ledgerAddress }),
    accountMeta({ pubkey: owner, isWritable: false, isSigner: true }),
    accountMeta({ pubkey: lpAccount })
  ];
  for (let index = 0; index < farmKeys.rewardInfos.length; index++) {
    keys.push(accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.rewardInfos[index].vault) }));
    keys.push(accountMeta({ pubkey: rewardAccounts[index] }));
  }
  return new import_web316.TransactionInstruction({ programId, keys, data });
}
function makeWithdrawInstructionV5(params) {
  const { farmInfo, farmKeys, lpAccount, rewardAccounts, owner, amount, userAuxiliaryLedgers } = params;
  const [programId, id] = [new import_web316.PublicKey(farmInfo.programId), new import_web316.PublicKey(farmInfo.id)];
  const ledgerAddress = getAssociatedLedgerAccount({
    programId,
    poolId: id,
    owner,
    version: 5
  });
  const data = Buffer.alloc(dwLayout.span);
  dwLayout.encode({
    instruction: 12,
    amount: parseBigNumberish(amount)
  }, data);
  const keys = [
    accountMeta({ pubkey: id }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.authority), isWritable: false }),
    accountMeta({ pubkey: ledgerAddress }),
    accountMeta({ pubkey: owner, isWritable: false, isSigner: true }),
    accountMeta({ pubkey: lpAccount }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.lpVault) }),
    accountMeta({ pubkey: rewardAccounts[0] }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.rewardInfos[0].vault) }),
    accountMeta({ pubkey: import_web316.SYSVAR_CLOCK_PUBKEY, isWritable: false }),
    accountMeta({ pubkey: import_spl_token10.TOKEN_PROGRAM_ID, isWritable: false })
  ];
  for (let index = 1; index < farmKeys.rewardInfos.length; index++) {
    keys.push(accountMeta({ pubkey: rewardAccounts[index] }));
    keys.push(accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.rewardInfos[index].vault) }));
  }
  if (userAuxiliaryLedgers) {
    for (const auxiliaryLedger of userAuxiliaryLedgers) {
      keys.push(accountMeta({ pubkey: auxiliaryLedger }));
    }
  }
  return new import_web316.TransactionInstruction({ programId, keys, data });
}
function makeWithdrawInstructionV4(params) {
  const { farmInfo, farmKeys, lpAccount, rewardAccounts, owner, amount, userAuxiliaryLedgers } = params;
  const [programId, id] = [new import_web316.PublicKey(farmInfo.programId), new import_web316.PublicKey(farmInfo.id)];
  const dataLayout = struct([u82("instruction"), u64("amount")]);
  const keys = [
    accountMeta({ pubkey: id }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.authority), isWritable: false }),
    accountMeta({ pubkey: userAuxiliaryLedgers[0] }),
    accountMeta({ pubkey: owner, isSigner: true, isWritable: false }),
    accountMeta({ pubkey: lpAccount }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.lpVault) }),
    accountMeta({ pubkey: rewardAccounts[0] }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.rewardInfos[0].vault) }),
    accountMeta({ pubkey: import_web316.SYSVAR_CLOCK_PUBKEY, isWritable: false }),
    accountMeta({ pubkey: import_spl_token10.TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: rewardAccounts[1] }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.rewardInfos[1].vault) })
  ];
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    instruction: 2,
    amount
  }, data);
  return new import_web316.TransactionInstruction({
    keys,
    programId,
    data
  });
}
function makeWithdrawInstructionV3(params) {
  const { farmInfo, farmKeys, lpAccount, rewardAccounts, owner, amount, userAuxiliaryLedgers } = params;
  const [programId, id] = [new import_web316.PublicKey(farmInfo.programId), new import_web316.PublicKey(farmInfo.id)];
  const ledgerAddress = getAssociatedLedgerAccount({
    programId,
    poolId: id,
    owner,
    version: 3
  });
  const data = Buffer.alloc(dwLayout.span);
  dwLayout.encode({
    instruction: 11,
    amount: parseBigNumberish(amount)
  }, data);
  const keys = [
    accountMeta({ pubkey: id }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.authority), isWritable: false }),
    accountMeta({ pubkey: ledgerAddress }),
    accountMeta({ pubkey: owner, isWritable: false, isSigner: true }),
    accountMeta({ pubkey: lpAccount }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.lpVault) }),
    accountMeta({ pubkey: rewardAccounts[0] }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.rewardInfos[0].vault) }),
    accountMeta({ pubkey: import_web316.SYSVAR_CLOCK_PUBKEY, isWritable: false }),
    accountMeta({ pubkey: import_spl_token10.TOKEN_PROGRAM_ID, isWritable: false })
  ];
  if (userAuxiliaryLedgers) {
    for (const auxiliaryLedger of userAuxiliaryLedgers) {
      keys.push(accountMeta({ pubkey: auxiliaryLedger }));
    }
  }
  return new import_web316.TransactionInstruction({ programId, keys, data });
}
function makeDepositInstructionV3(params) {
  const { farmInfo, farmKeys, lpAccount, rewardAccounts, owner, amount, userAuxiliaryLedgers } = params;
  const [programId, id] = [new import_web316.PublicKey(farmInfo.programId), new import_web316.PublicKey(farmInfo.id)];
  const ledgerAddress = getAssociatedLedgerAccount({
    programId,
    poolId: id,
    owner,
    version: 3
  });
  const data = Buffer.alloc(dwLayout.span);
  dwLayout.encode({
    instruction: 10,
    amount: parseBigNumberish(amount)
  }, data);
  const keys = [
    accountMeta({ pubkey: id }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.authority), isWritable: false }),
    accountMeta({ pubkey: ledgerAddress }),
    accountMeta({ pubkey: owner, isWritable: false, isSigner: true }),
    accountMeta({ pubkey: lpAccount }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.lpVault) }),
    accountMeta({ pubkey: rewardAccounts[0] }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.rewardInfos[0].vault) }),
    accountMeta({ pubkey: import_web316.SYSVAR_CLOCK_PUBKEY, isWritable: false }),
    accountMeta({ pubkey: import_spl_token10.TOKEN_PROGRAM_ID, isWritable: false })
  ];
  if (userAuxiliaryLedgers) {
    for (const auxiliaryLedger of userAuxiliaryLedgers) {
      keys.push(accountMeta({ pubkey: auxiliaryLedger }));
    }
  }
  return new import_web316.TransactionInstruction({ programId, keys, data });
}
function makeDepositInstructionV5(params) {
  const { farmInfo, farmKeys, lpAccount, rewardAccounts, owner, amount, userAuxiliaryLedgers } = params;
  const [programId, id] = [new import_web316.PublicKey(farmInfo.programId), new import_web316.PublicKey(farmInfo.id)];
  const ledgerAddress = getAssociatedLedgerAccount({
    programId,
    poolId: id,
    owner,
    version: 5
  });
  const data = Buffer.alloc(dwLayout.span);
  dwLayout.encode({
    instruction: 11,
    amount: parseBigNumberish(amount)
  }, data);
  const keys = [
    accountMeta({ pubkey: id }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.authority), isWritable: false }),
    accountMeta({ pubkey: ledgerAddress }),
    accountMeta({ pubkey: owner, isWritable: false, isSigner: true }),
    accountMeta({ pubkey: lpAccount }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.lpVault) }),
    accountMeta({ pubkey: rewardAccounts[0] }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.rewardInfos[0].vault) }),
    accountMeta({ pubkey: import_web316.SYSVAR_CLOCK_PUBKEY, isWritable: false }),
    accountMeta({ pubkey: import_spl_token10.TOKEN_PROGRAM_ID, isWritable: false })
  ];
  for (let index = 1; index < farmKeys.rewardInfos.length; index++) {
    keys.push(accountMeta({ pubkey: rewardAccounts[index] }));
    keys.push(accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.rewardInfos[index].vault) }));
  }
  if (userAuxiliaryLedgers) {
    for (const auxiliaryLedger of userAuxiliaryLedgers) {
      keys.push(accountMeta({ pubkey: auxiliaryLedger }));
    }
  }
  return new import_web316.TransactionInstruction({ programId, keys, data });
}
function makeDepositInstructionV6(params) {
  const { farmInfo, farmKeys, lpAccount, rewardAccounts, owner, amount } = params;
  const [programId, id] = [new import_web316.PublicKey(farmInfo.programId), new import_web316.PublicKey(farmInfo.id)];
  const ledgerAddress = getAssociatedLedgerAccount({
    programId,
    poolId: id,
    owner,
    version: 6
  });
  const data = Buffer.alloc(dwLayout.span);
  dwLayout.encode({
    instruction: 1,
    amount: parseBigNumberish(amount)
  }, data);
  const keys = [
    accountMeta({ pubkey: import_spl_token10.TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_web316.SystemProgram.programId, isWritable: false }),
    accountMeta({ pubkey: id }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.authority), isWritable: false }),
    accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.lpVault) }),
    accountMeta({ pubkey: ledgerAddress }),
    accountMeta({ pubkey: owner, isWritable: false, isSigner: true }),
    accountMeta({ pubkey: lpAccount })
  ];
  for (let index = 0; index < farmKeys.rewardInfos.length; index++) {
    keys.push(accountMeta({ pubkey: new import_web316.PublicKey(farmKeys.rewardInfos[index].vault) }));
    keys.push(accountMeta({ pubkey: rewardAccounts[index] }));
  }
  return new import_web316.TransactionInstruction({ programId, keys, data });
}

// src/raydium/farm/farm.ts
var Farm = class extends ModuleBase {
  async _getUserRewardInfo({ payer, rewardInfo }) {
    if (rewardInfo.mint.equals(SOLMint)) {
      const txInstructions = await createWSolAccountInstructions({
        connection: this.scope.connection,
        owner: this.scope.ownerPubKey,
        payer,
        amount: calFarmRewardAmount({
          ...rewardInfo,
          openTime: rewardInfo.openTime.toString(),
          endTime: rewardInfo.endTime.toString()
        })
      });
      return {
        rewardPubKey: txInstructions.addresses.newAccount,
        newInstruction: txInstructions
      };
    }
    return {
      rewardPubKey: await this.scope.account.getCreatedTokenAccount({
        mint: rewardInfo.mint,
        associatedOnly: false
      })
    };
  }
  async create({
    poolInfo: propPoolInfo,
    rewardInfos,
    payer,
    programId = FARM_PROGRAM_ID_V6,
    txVersion,
    feePayer
  }) {
    this.checkDisabled();
    this.scope.checkOwner();
    const lpMint = new import_web317.PublicKey(propPoolInfo.lpMint.address);
    const poolInfo = {
      lpMint,
      lockInfo: { lockMint: FARM_LOCK_MINT, lockVault: FARM_LOCK_VAULT },
      version: 6,
      rewardInfos,
      programId
    };
    const txBuilder = this.createTxBuilder(feePayer);
    const payerPubKey = payer ?? this.scope.ownerPubKey;
    const farmKeyPair = generatePubKey({ fromPublicKey: payerPubKey, programId: poolInfo.programId });
    const lamports = await this.scope.connection.getMinimumBalanceForRentExemption(farmStateV6Layout.span);
    txBuilder.addInstruction({
      instructions: [
        import_web317.SystemProgram.createAccountWithSeed({
          fromPubkey: payerPubKey,
          basePubkey: payerPubKey,
          seed: farmKeyPair.seed,
          newAccountPubkey: farmKeyPair.publicKey,
          lamports,
          space: farmStateV6Layout.span,
          programId: poolInfo.programId
        })
      ]
    });
    const { publicKey: authority, nonce } = getAssociatedAuthority({
      programId: new import_web317.PublicKey(poolInfo.programId),
      poolId: farmKeyPair.publicKey
    });
    const lpVault = getAssociatedLedgerPoolAccount({
      programId: poolInfo.programId,
      poolId: farmKeyPair.publicKey,
      mint: poolInfo.lpMint,
      type: "lpVault"
    });
    const rewardInfoConfig = [];
    const rewardInfoKey = [];
    for (const rewardInfo of poolInfo.rewardInfos) {
      if (rewardInfo.openTime >= rewardInfo.endTime)
        this.logAndCreateError("start time error", "rewardInfo.rewardOpenTime", rewardInfo.openTime.toString());
      if (isNaN(poolTypeV6[rewardInfo.rewardType]))
        this.logAndCreateError("rewardType error", rewardInfo.rewardType);
      if (Number(rewardInfo.perSecond) <= 0)
        this.logAndCreateError("rewardPerSecond error", rewardInfo.perSecond);
      rewardInfoConfig.push(farmRewardInfoToConfig(rewardInfo));
      const { rewardPubKey, newInstruction } = await this._getUserRewardInfo({
        rewardInfo,
        payer: payerPubKey
      });
      if (newInstruction)
        txBuilder.addInstruction(newInstruction);
      if (!rewardPubKey)
        this.logAndCreateError("cannot found target token accounts", this.scope.account.tokenAccounts);
      const rewardMint = rewardInfo.mint.equals(SOLMint) ? new import_web317.PublicKey(TOKEN_WSOL.address) : rewardInfo.mint;
      rewardInfoKey.push({
        rewardMint,
        rewardVault: getAssociatedLedgerPoolAccount({
          programId: poolInfo.programId,
          poolId: farmKeyPair.publicKey,
          mint: rewardMint,
          type: "rewardVault"
        }),
        userRewardToken: rewardPubKey
      });
    }
    const { account: lockUserAccount, instructionParams } = await this.scope.account.getOrCreateTokenAccount({
      mint: new import_web317.PublicKey(poolInfo.lockInfo.lockMint),
      owner: this.scope.ownerPubKey,
      skipCloseAccount: false,
      createInfo: {
        payer: this.scope.ownerPubKey,
        amount: 0
      },
      associatedOnly: false
    });
    instructionParams && txBuilder.addInstruction(instructionParams);
    if (!lockUserAccount)
      this.logAndCreateError("cannot found lock vault", "tokenAccounts", this.scope.account.tokenAccounts);
    const { instruction, instructionType } = makeCreateFarmInstruction({
      farmId: farmKeyPair.publicKey,
      owner: this.scope.ownerPubKey,
      farmAuthority: authority,
      lpVault,
      lpMint: poolInfo.lpMint,
      lockVault: poolInfo.lockInfo.lockVault,
      lockMint: poolInfo.lockInfo.lockMint,
      lockUserAccount,
      programId: poolInfo.programId,
      rewardInfo: rewardInfoKey,
      rewardInfoConfig,
      nonce
    });
    return txBuilder.addInstruction({
      instructions: [instruction],
      instructionTypes: [instructionType]
    }).versionBuild({
      txVersion,
      extInfo: {
        farmId: farmKeyPair.publicKey,
        farmAuthority: authority,
        lpVault,
        lockUserAccount,
        nonce
      }
    });
  }
  async restartReward({
    farmInfo,
    payer,
    newRewardInfo,
    txVersion,
    feePayer
  }) {
    const version = FARM_PROGRAM_TO_VERSION[farmInfo.programId];
    if (version !== 6)
      this.logAndCreateError("invalid farm version ", version);
    const farmInfoKeys = jsonInfo2PoolKeys((await this.scope.api.fetchFarmKeysById({ ids: farmInfo.id }))[0]);
    const farmKeys = {
      id: farmInfoKeys.id,
      rewardInfos: farmInfo.rewardInfos,
      lpVault: farmInfoKeys.lpVault,
      programId: farmInfoKeys.programId
    };
    if (newRewardInfo.openTime >= newRewardInfo.endTime)
      this.logAndCreateError("start time error", "newRewardInfo", newRewardInfo);
    const payerPubKey = payer || this.scope.ownerPubKey;
    const rewardMint = newRewardInfo.mint.equals(SOLMint) ? new import_web317.PublicKey(TOKEN_WSOL.address) : newRewardInfo.mint;
    const rewardInfoIndex = farmKeys.rewardInfos.findIndex((item) => new import_web317.PublicKey(item.mint.address).equals(rewardMint));
    const rewardInfo = farmInfoKeys.rewardInfos[rewardInfoIndex];
    if (!rewardInfo)
      this.logAndCreateError("configuration does not exist", "rewardMint", rewardMint);
    const rewardVault = rewardInfo.vault ?? SOLMint;
    const txBuilder = this.createTxBuilder(feePayer);
    const { rewardPubKey: userRewardTokenPub, newInstruction } = await this._getUserRewardInfo({
      rewardInfo: newRewardInfo,
      payer: payerPubKey
    });
    if (newInstruction)
      txBuilder.addInstruction(newInstruction);
    if (!userRewardTokenPub)
      this.logAndCreateError("cannot found target token accounts", this.scope.account.tokenAccounts);
    return txBuilder.addInstruction({
      instructions: [
        makeRestartRewardInstruction({
          payer: this.scope.ownerPubKey,
          rewardVault,
          userRewardTokenPub,
          farmKeys,
          rewardInfo: newRewardInfo
        })
      ],
      instructionTypes: [InstructionType.FarmV6Restart]
    }).versionBuild({ txVersion });
  }
  async restartRewards({
    farmInfo,
    payer,
    newRewardInfos,
    txVersion,
    feePayer
  }) {
    const version = FARM_PROGRAM_TO_VERSION[farmInfo.programId];
    if (version !== 6)
      this.logAndCreateError("invalid farm version ", version);
    const farmInfoKeys = jsonInfo2PoolKeys((await this.scope.api.fetchFarmKeysById({ ids: farmInfo.id }))[0]);
    const farmKeys = {
      id: farmInfoKeys.id,
      rewardInfos: farmInfo.rewardInfos,
      lpVault: farmInfoKeys.lpVault,
      programId: farmInfoKeys.programId
    };
    newRewardInfos.forEach((reward) => {
      if (reward.openTime >= reward.endTime)
        this.logAndCreateError("start time error", "newRewardInfo", reward);
    });
    const payerPubKey = payer || this.scope.ownerPubKey;
    const txBuilder = this.createTxBuilder(feePayer);
    for (const itemReward of newRewardInfos) {
      const rewardMint = itemReward.mint.equals(SOLMint) ? new import_web317.PublicKey(TOKEN_WSOL.address) : itemReward.mint;
      const rewardInfoIndex = farmKeys.rewardInfos.findIndex((item) => new import_web317.PublicKey(item.mint.address).equals(rewardMint));
      const rewardInfo = farmInfoKeys.rewardInfos[rewardInfoIndex];
      if (!rewardInfo)
        this.logAndCreateError("configuration does not exist", "rewardMint", rewardMint);
      const rewardVault = rewardInfo.vault ?? SOLMint;
      const { rewardPubKey: userRewardTokenPub, newInstruction } = await this._getUserRewardInfo({
        rewardInfo: itemReward,
        payer: payerPubKey
      });
      if (newInstruction)
        txBuilder.addInstruction(newInstruction);
      if (!userRewardTokenPub)
        this.logAndCreateError("cannot found target token accounts", this.scope.account.tokenAccounts);
      const ins = makeRestartRewardInstruction({
        payer: this.scope.ownerPubKey,
        rewardVault,
        userRewardTokenPub,
        farmKeys,
        rewardInfo: itemReward
      });
      txBuilder.addInstruction({
        instructions: [ins],
        instructionTypes: [InstructionType.FarmV6Restart]
      });
    }
    return txBuilder.versionBuild({ txVersion });
  }
  async addNewRewardToken(params) {
    const { txVersion, farmInfo, newRewardInfo, payer, feePayer } = params;
    const version = FARM_PROGRAM_TO_VERSION[farmInfo.programId];
    if (version !== 6)
      this.logAndCreateError("invalid farm version ", version);
    const farmKeys = jsonInfo2PoolKeys((await this.scope.api.fetchFarmKeysById({ ids: farmInfo.id }))[0]);
    const payerPubKey = payer ?? this.scope.ownerPubKey;
    const txBuilder = this.createTxBuilder(feePayer);
    const rewardMint = newRewardInfo.mint.equals(SOLMint) ? new import_web317.PublicKey(TOKEN_WSOL.address) : newRewardInfo.mint;
    const rewardVault = getAssociatedLedgerPoolAccount({
      programId: new import_web317.PublicKey(farmInfo.programId),
      poolId: new import_web317.PublicKey(farmInfo.id),
      mint: rewardMint,
      type: "rewardVault"
    });
    const { rewardPubKey: userRewardTokenPub, newInstruction } = await this._getUserRewardInfo({
      rewardInfo: newRewardInfo,
      payer: payerPubKey
    });
    if (newInstruction)
      txBuilder.addInstruction(newInstruction);
    if (!userRewardTokenPub)
      this.logAndCreateError("annot found target token accounts", this.scope.account.tokenAccounts);
    newRewardInfo.mint = rewardMint;
    return txBuilder.addInstruction({
      instructions: [
        makeAddNewRewardInstruction({
          payer: this.scope.ownerPubKey,
          userRewardTokenPub,
          farmKeys,
          rewardVault,
          rewardInfo: newRewardInfo
        })
      ],
      instructionTypes: [InstructionType.FarmV6CreatorAddReward]
    }).versionBuild({ txVersion });
  }
  async addNewRewardsToken(params) {
    const { txVersion, farmInfo, newRewardInfos, payer, feePayer } = params;
    const version = FARM_PROGRAM_TO_VERSION[farmInfo.programId];
    if (version !== 6)
      this.logAndCreateError("invalid farm version ", version);
    const farmKeys = jsonInfo2PoolKeys((await this.scope.api.fetchFarmKeysById({ ids: farmInfo.id }))[0]);
    const payerPubKey = payer ?? this.scope.ownerPubKey;
    const txBuilder = this.createTxBuilder(feePayer);
    for (const itemReward of newRewardInfos) {
      const rewardMint = itemReward.mint.equals(SOLMint) ? new import_web317.PublicKey(TOKEN_WSOL.address) : itemReward.mint;
      const rewardVault = getAssociatedLedgerPoolAccount({
        programId: new import_web317.PublicKey(farmInfo.programId),
        poolId: new import_web317.PublicKey(farmInfo.id),
        mint: rewardMint,
        type: "rewardVault"
      });
      const { rewardPubKey: userRewardTokenPub, newInstruction } = await this._getUserRewardInfo({
        rewardInfo: itemReward,
        payer: payerPubKey
      });
      if (newInstruction)
        txBuilder.addInstruction(newInstruction);
      if (!userRewardTokenPub)
        this.logAndCreateError("cannot found target token accounts", this.scope.account.tokenAccounts);
      const ins = makeAddNewRewardInstruction({
        payer: this.scope.ownerPubKey,
        userRewardTokenPub,
        farmKeys,
        rewardVault,
        rewardInfo: { ...itemReward, mint: rewardMint }
      });
      txBuilder.addInstruction({
        instructions: [ins],
        instructionTypes: [InstructionType.FarmV6CreatorAddReward]
      });
    }
    return txBuilder.versionBuild({ txVersion });
  }
  async deposit(params) {
    const {
      txVersion,
      farmInfo,
      amount,
      feePayer,
      useSOLBalance,
      associatedOnly = true,
      checkCreateATAOwner = false,
      userAuxiliaryLedgers,
      computeBudgetConfig,
      txTipConfig
    } = params;
    if (this.scope.availability.addFarm === false)
      this.logAndCreateError("farm deposit feature disabled in your region");
    const { rewardInfos, programId } = farmInfo;
    const version = FARM_PROGRAM_TO_VERSION[programId];
    if (version === 4)
      this.logAndCreateError("V4 has suspended deposits:", farmInfo.programId);
    if (!isValidFarmVersion(version))
      this.logAndCreateError("invalid farm program:", farmInfo.programId);
    const [farmProgramId, farmId] = [new import_web317.PublicKey(farmInfo.programId), new import_web317.PublicKey(farmInfo.id)];
    const farmKeys = (await this.scope.api.fetchFarmKeysById({ ids: farmInfo.id }))[0];
    const ledger = getAssociatedLedgerAccount({
      programId: farmProgramId,
      poolId: farmId,
      owner: this.scope.ownerPubKey,
      version
    });
    const txBuilder = this.createTxBuilder(feePayer);
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    const ownerMintToAccount = {};
    for (const item of this.scope.account.tokenAccounts) {
      if (associatedOnly) {
        const ata = getATAAddress(this.scope.ownerPubKey, item.mint, item.programId).publicKey;
        if (item.publicKey && ata.equals(item.publicKey))
          ownerMintToAccount[item.mint.toString()] = item.publicKey;
      } else {
        ownerMintToAccount[item.mint.toString()] = item.publicKey;
      }
    }
    const lpMint = farmKeys.lpMint;
    const ownerLpTokenAccount = ownerMintToAccount[lpMint.address];
    if (!ownerLpTokenAccount)
      this.logAndCreateError("you don't have any lp", "lp zero", ownerMintToAccount);
    const rewardAccounts = [];
    for (const itemReward of rewardInfos) {
      const rewardUseSOLBalance = useSOLBalance && itemReward.mint.address === WSOLMint.toString();
      let ownerRewardAccount = ownerMintToAccount[itemReward.mint.address];
      if (!ownerRewardAccount) {
        const { account: _ownerRewardAccount, instructionParams } = await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: itemReward.mint.programId,
          mint: new import_web317.PublicKey(itemReward.mint.address),
          notUseTokenAccount: rewardUseSOLBalance,
          createInfo: {
            payer: feePayer || this.scope.ownerPubKey,
            amount: 0
          },
          owner: this.scope.ownerPubKey,
          skipCloseAccount: !rewardUseSOLBalance,
          associatedOnly: rewardUseSOLBalance ? false : associatedOnly,
          checkCreateATAOwner
        });
        ownerRewardAccount = _ownerRewardAccount;
        instructionParams && txBuilder.addInstruction(instructionParams);
      }
      ownerMintToAccount[itemReward.mint.address] = ownerRewardAccount;
      rewardAccounts.push(ownerRewardAccount);
    }
    let ledgerInfo = void 0;
    const ledgerData = await this.scope.connection.getAccountInfo(ledger);
    if (ledgerData) {
      const ledgerLayout = getFarmLedgerLayout(version);
      ledgerInfo = ledgerLayout.decode(ledgerData.data);
    }
    if (farmInfo.programId !== FARM_PROGRAM_ID_V6.toString() && !ledgerInfo) {
      const { instruction, instructionType } = createAssociatedLedgerAccountInstruction({
        id: farmId,
        programId: farmProgramId,
        version,
        ledger,
        owner: this.scope.ownerPubKey
      });
      txBuilder.addInstruction({ instructions: [instruction], instructionTypes: [instructionType] });
    }
    const errorMsg = validateFarmRewards({
      version,
      rewardInfos,
      rewardTokenAccountsPublicKeys: rewardAccounts
    });
    if (errorMsg)
      this.logAndCreateError(errorMsg);
    const insParams = {
      amount: parseBigNumberish(amount),
      owner: this.scope.ownerPubKey,
      farmInfo,
      farmKeys,
      lpAccount: ownerLpTokenAccount,
      rewardAccounts,
      userAuxiliaryLedgers: userAuxiliaryLedgers?.map((key) => new import_web317.PublicKey(key))
    };
    const newInstruction = version === 6 ? makeDepositInstructionV6(insParams) : version === 5 ? makeDepositInstructionV5(insParams) : makeDepositInstructionV3(insParams);
    const insType = {
      3: InstructionType.FarmV3Deposit,
      5: InstructionType.FarmV5Deposit,
      6: InstructionType.FarmV6Deposit
    };
    return txBuilder.addInstruction({
      instructions: [newInstruction],
      instructionTypes: [insType[version]]
    }).versionBuild({ txVersion });
  }
  async withdraw(params) {
    const {
      txVersion,
      farmInfo,
      amount,
      deposited,
      useSOLBalance,
      feePayer,
      associatedOnly = true,
      checkCreateATAOwner = false,
      userAuxiliaryLedgers,
      computeBudgetConfig,
      txTipConfig
    } = params;
    const { rewardInfos } = farmInfo;
    if (this.scope.availability.removeFarm === false)
      this.logAndCreateError("farm withdraw feature disabled in your region");
    const version = FARM_PROGRAM_TO_VERSION[farmInfo.programId];
    if (!isValidFarmVersion(version))
      this.logAndCreateError("invalid farm program:", farmInfo.programId);
    const farmKeys = (await this.scope.api.fetchFarmKeysById({ ids: farmInfo.id }))[0];
    const txBuilder = this.createTxBuilder(feePayer);
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    const ownerMintToAccount = {};
    for (const item of this.scope.account.tokenAccounts) {
      if (associatedOnly) {
        const ata = getATAAddress(this.scope.ownerPubKey, item.mint).publicKey;
        if (item.publicKey && ata.equals(item.publicKey))
          ownerMintToAccount[item.mint.toString()] = item.publicKey;
      } else {
        ownerMintToAccount[item.mint.toString()] = item.publicKey;
      }
    }
    if (version !== 4) {
      const ledger = getAssociatedLedgerAccount({
        programId: new import_web317.PublicKey(farmInfo.programId),
        poolId: new import_web317.PublicKey(farmInfo.id),
        owner: this.scope.ownerPubKey,
        version
      });
      const ledgerData = await this.scope.connection.getAccountInfo(ledger);
      if (!ledgerData) {
        if (version !== 6) {
          const { instruction, instructionType } = createAssociatedLedgerAccountInstruction({
            id: new import_web317.PublicKey(farmKeys.id),
            programId: new import_web317.PublicKey(farmKeys.programId),
            version,
            ledger,
            owner: this.scope.ownerPubKey
          });
          txBuilder.addInstruction({ instructions: [instruction], instructionTypes: [instructionType] });
        }
      } else {
        const ledgerLayout = getFarmLedgerLayout(version);
        const ledgerInfo = ledgerLayout.decode(ledgerData.data);
        if (ledgerInfo.deposited.isZero())
          this.logAndCreateError("no deposited lp", { farmId: farmInfo.id });
      }
    }
    if (deposited && deposited.isZero() && !(userAuxiliaryLedgers || []).length)
      this.logAndCreateError("no deposited lp", { farmId: farmInfo.id });
    const lpMint = farmKeys.lpMint.address;
    const lpMintUseSOLBalance = useSOLBalance && lpMint === WSOLMint.toString();
    let ownerLpTokenAccount = ownerMintToAccount[lpMint.toString()];
    if (!ownerLpTokenAccount) {
      const { account: _ownerRewardAccount, instructionParams } = await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: farmKeys.lpMint.programId,
        mint: new import_web317.PublicKey(lpMint),
        notUseTokenAccount: lpMintUseSOLBalance,
        createInfo: {
          payer: feePayer || this.scope.ownerPubKey,
          amount: 0
        },
        owner: this.scope.ownerPubKey,
        skipCloseAccount: true,
        associatedOnly: lpMintUseSOLBalance ? false : associatedOnly,
        checkCreateATAOwner
      });
      ownerLpTokenAccount = _ownerRewardAccount;
      instructionParams && txBuilder.addInstruction(instructionParams);
    }
    ownerMintToAccount[lpMint.toString()] = ownerLpTokenAccount;
    const rewardAccounts = [];
    for (const itemReward of rewardInfos) {
      const rewardUseSOLBalance = useSOLBalance && itemReward.mint.address === WSOLMint.toString();
      let ownerRewardAccount = ownerMintToAccount[itemReward.mint.address];
      if (!ownerRewardAccount) {
        const { account: _ownerRewardAccount, instructionParams } = await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: itemReward.mint.programId,
          mint: new import_web317.PublicKey(itemReward.mint.address),
          notUseTokenAccount: rewardUseSOLBalance,
          createInfo: {
            payer: feePayer || this.scope.ownerPubKey,
            amount: 0
          },
          owner: this.scope.ownerPubKey,
          skipCloseAccount: !rewardUseSOLBalance,
          associatedOnly: rewardUseSOLBalance ? false : associatedOnly,
          checkCreateATAOwner
        });
        ownerRewardAccount = _ownerRewardAccount;
        instructionParams && txBuilder.addInstruction(instructionParams);
      }
      ownerMintToAccount[itemReward.mint.address] = ownerRewardAccount;
      rewardAccounts.push(ownerRewardAccount);
    }
    const errorMsg = validateFarmRewards({
      version,
      rewardInfos,
      rewardTokenAccountsPublicKeys: rewardAccounts
    });
    if (errorMsg)
      this.logAndCreateError(errorMsg);
    const insParams = {
      amount: parseBigNumberish(amount),
      owner: this.scope.ownerPubKey,
      farmInfo,
      farmKeys,
      lpAccount: ownerLpTokenAccount,
      rewardAccounts,
      userAuxiliaryLedgers: userAuxiliaryLedgers?.map((key) => new import_web317.PublicKey(key))
    };
    const newInstruction = version === 6 ? makeWithdrawInstructionV6(insParams) : version === 5 ? makeWithdrawInstructionV5(insParams) : version === 4 ? makeWithdrawInstructionV4(insParams) : makeWithdrawInstructionV3(insParams);
    const insType = {
      3: InstructionType.FarmV3Withdraw,
      4: InstructionType.FarmV4Withdraw,
      5: InstructionType.FarmV5Withdraw,
      6: InstructionType.FarmV6Withdraw
    };
    return txBuilder.addInstruction({
      instructions: [newInstruction],
      instructionTypes: [insType[version]]
    }).versionBuild({ txVersion });
  }
  async withdrawFarmReward({
    farmInfo,
    withdrawMint,
    txVersion,
    computeBudgetConfig,
    txTipConfig,
    feePayer
  }) {
    this.scope.checkOwner();
    const farmKeys = jsonInfo2PoolKeys((await this.scope.api.fetchFarmKeysById({ ids: farmInfo.id }))[0]);
    const version = FARM_PROGRAM_TO_VERSION[farmInfo.programId];
    if (version !== 6)
      this.logAndCreateError("invalid farm version", version);
    const rewardInfo = farmKeys.rewardInfos.find((r) => solToWSol(r.mint.address).equals(solToWSol(withdrawMint)));
    if (!rewardInfo)
      this.logAndCreateError("withdraw mint error", "rewardInfos", farmInfo);
    const rewardVault = rewardInfo?.vault ?? SOLMint;
    const txBuilder = this.createTxBuilder(feePayer);
    let userRewardToken;
    if (withdrawMint.equals(SOLMint) || withdrawMint.equals(import_web317.PublicKey.default)) {
      const txInstruction = await createWSolAccountInstructions({
        connection: this.scope.connection,
        owner: this.scope.ownerPubKey,
        payer: this.scope.ownerPubKey,
        amount: calFarmRewardAmount({
          ...rewardInfo,
          openTime: rewardInfo.openTime,
          endTime: rewardInfo.endTime,
          perSecond: new decimal_default(rewardInfo.perSecond).mul(10 ** rewardInfo.mint.decimals).toString()
        })
      });
      userRewardToken = txInstruction.addresses.newAccount;
      txBuilder.addInstruction(txInstruction);
    } else {
      const selectUserRewardToken = await this.scope.account.getCreatedTokenAccount({
        mint: withdrawMint
      });
      if (selectUserRewardToken === null) {
        userRewardToken = await this.scope.account.getAssociatedTokenAccount(withdrawMint);
        txBuilder.addInstruction({
          instructions: [
            (0, import_spl_token11.createAssociatedTokenAccountInstruction)(this.scope.ownerPubKey, userRewardToken, this.scope.ownerPubKey, withdrawMint)
          ],
          instructionTypes: [InstructionType.CreateATA]
        });
      } else {
        userRewardToken = selectUserRewardToken;
      }
    }
    const { instruction, instructionType } = makeCreatorWithdrawFarmRewardInstruction({
      programId: farmKeys.programId,
      id: farmKeys.id,
      authority: farmKeys.authority,
      lpVault: farmKeys.lpVault,
      rewardVault,
      userRewardToken,
      owner: this.scope.ownerPubKey
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.addInstruction({
      instructions: [instruction],
      instructionTypes: [instructionType]
    }).versionBuild({ txVersion });
  }
  async harvestAllRewards(params) {
    const {
      farmInfoList,
      useSOLBalance,
      feePayer,
      associatedOnly = true,
      checkCreateATAOwner = false,
      userAuxiliaryLedgers,
      txVersion,
      computeBudgetConfig
    } = params;
    const txBuilder = this.createTxBuilder(feePayer);
    const ownerMintToAccount = {};
    for (const item of this.scope.account.tokenAccounts) {
      if (associatedOnly) {
        const ata = getATAAddress(this.scope.ownerPubKey, item.mint).publicKey;
        if (item.publicKey && ata.equals(item.publicKey))
          ownerMintToAccount[item.mint.toString()] = item.publicKey;
      } else {
        ownerMintToAccount[item.mint.toString()] = item.publicKey;
      }
    }
    const allFarmKeys = await this.scope.api.fetchFarmKeysById({
      ids: Object.values(farmInfoList).map((f) => f.id).join(",")
    });
    const farmKeyMap = allFarmKeys.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {});
    for (const farmInfo of Object.values(farmInfoList)) {
      const { programId, lpMint: farmLpMint, rewardInfos, id } = farmInfo;
      const version = FARM_PROGRAM_TO_VERSION[programId];
      const lpMint = farmLpMint.address;
      const lpMintUseSOLBalance = useSOLBalance && lpMint === WSOLMint.toString();
      let ownerLpTokenAccount = ownerMintToAccount[lpMint];
      if (!ownerLpTokenAccount) {
        const { account: _ownerLpAccount, instructionParams } = await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: farmLpMint.programId,
          mint: new import_web317.PublicKey(lpMint),
          notUseTokenAccount: lpMintUseSOLBalance,
          createInfo: {
            payer: feePayer || this.scope.ownerPubKey,
            amount: 0
          },
          owner: this.scope.ownerPubKey,
          skipCloseAccount: true,
          associatedOnly: lpMintUseSOLBalance ? false : associatedOnly,
          checkCreateATAOwner
        });
        ownerLpTokenAccount = _ownerLpAccount;
        instructionParams && txBuilder.addInstruction(instructionParams);
      }
      ownerMintToAccount[lpMint.toString()] = ownerLpTokenAccount;
      const rewardAccounts = [];
      for (const itemReward of rewardInfos) {
        const rewardUseSOLBalance = useSOLBalance && itemReward.mint.address === WSOLMint.toString();
        let ownerRewardAccount = ownerMintToAccount[itemReward.mint.address];
        if (!ownerRewardAccount) {
          const { account: _ownerRewardAccount, instructionParams } = await this.scope.account.getOrCreateTokenAccount({
            tokenProgram: itemReward.mint.programId,
            mint: new import_web317.PublicKey(itemReward.mint.address),
            notUseTokenAccount: rewardUseSOLBalance,
            createInfo: {
              payer: feePayer || this.scope.ownerPubKey,
              amount: 0
            },
            owner: this.scope.ownerPubKey,
            skipCloseAccount: !rewardUseSOLBalance,
            associatedOnly: rewardUseSOLBalance ? false : associatedOnly,
            checkCreateATAOwner
          });
          ownerRewardAccount = _ownerRewardAccount;
          instructionParams && txBuilder.addInstruction(instructionParams);
        }
        ownerMintToAccount[itemReward.mint.address] = ownerRewardAccount;
        rewardAccounts.push(ownerRewardAccount);
      }
      const farmKeys = farmKeyMap[id];
      const insParams = {
        amount: BN_ZERO,
        owner: this.scope.ownerPubKey,
        farmInfo,
        farmKeys,
        lpAccount: ownerLpTokenAccount,
        rewardAccounts,
        userAuxiliaryLedgers: userAuxiliaryLedgers?.map((key) => new import_web317.PublicKey(key))
      };
      const withdrawInstruction = version === 6 ? makeWithdrawInstructionV6(insParams) : version === 5 ? makeWithdrawInstructionV5(insParams) : makeWithdrawInstructionV3(insParams);
      const insType = {
        3: InstructionType.FarmV3Withdraw,
        5: InstructionType.FarmV5Withdraw,
        6: InstructionType.FarmV6Withdraw
      };
      txBuilder.addInstruction({
        instructions: [withdrawInstruction],
        instructionTypes: [insType[version]]
      });
    }
    if (txVersion === 1 /* LEGACY */)
      return txBuilder.sizeCheckBuild({ computeBudgetConfig });
    return txBuilder.sizeCheckBuildV0({ computeBudgetConfig });
  }
};

// src/raydium/liquidity/liquidity.ts
var import_web327 = require("@solana/web3.js");
var import_spl_token19 = require("@solana/spl-token");

// src/raydium/clmm/instrument.ts
var import_web319 = require("@solana/web3.js");
var import_bn19 = __toESM(require("bn.js"));
var import_spl_token13 = require("@solana/spl-token");

// src/raydium/clmm/utils/tick.ts
var import_bn18 = __toESM(require("bn.js"));

// src/raydium/clmm/utils/constants.ts
var import_bn14 = __toESM(require("bn.js"));
var ZERO = new import_bn14.default(0);
var ONE = new import_bn14.default(1);
var NEGATIVE_ONE = new import_bn14.default(-1);
var Q64 = new import_bn14.default(1).shln(64);
var Q128 = new import_bn14.default(1).shln(128);
var MaxU64 = Q64.sub(ONE);
var U64Resolution = 64;
var MaxUint128 = Q128.subn(1);
var MIN_TICK = -443636;
var MAX_TICK = -MIN_TICK;
var MIN_SQRT_PRICE_X64 = new import_bn14.default("4295048016");
var MAX_SQRT_PRICE_X64 = new import_bn14.default("79226673521066979257578248091");
var MIN_SQRT_PRICE_X64_ADD_ONE = new import_bn14.default("4295048017");
var MAX_SQRT_PRICE_X64_SUB_ONE = new import_bn14.default("79226673521066979257578248090");
var BIT_PRECISION = 16;
var LOG_B_2_X32 = "59543866431248";
var LOG_B_P_ERR_MARGIN_LOWER_X64 = "184467440737095516";
var LOG_B_P_ERR_MARGIN_UPPER_X64 = "15793534762490258745";
var FEE_RATE_DENOMINATOR = new import_bn14.default(10).pow(new import_bn14.default(6));
var Fee = /* @__PURE__ */ ((Fee3) => {
  Fee3[Fee3["rate_500"] = 500] = "rate_500";
  Fee3[Fee3["rate_3000"] = 3e3] = "rate_3000";
  Fee3[Fee3["rate_10000"] = 1e4] = "rate_10000";
  return Fee3;
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
var U64_IGNORE_RANGE = new import_bn14.default("18446744073700000000");

// src/raydium/clmm/utils/math.ts
var import_bn17 = __toESM(require("bn.js"));

// src/raydium/clmm/utils/util.ts
function u16ToBytes(num) {
  const arr = new ArrayBuffer(2);
  const view = new DataView(arr);
  view.setUint16(0, num, false);
  return new Uint8Array(arr);
}
function i16ToBytes(num) {
  const arr = new ArrayBuffer(2);
  const view = new DataView(arr);
  view.setInt16(0, num, false);
  return new Uint8Array(arr);
}
function u32ToBytes(num) {
  const arr = new ArrayBuffer(4);
  const view = new DataView(arr);
  view.setUint32(0, num, false);
  return new Uint8Array(arr);
}
function i32ToBytes(num) {
  const arr = new ArrayBuffer(4);
  const view = new DataView(arr);
  view.setInt32(0, num, false);
  return new Uint8Array(arr);
}
function leadingZeros(bitNum, data) {
  let i = 0;
  for (let j = bitNum - 1; j >= 0; j--) {
    if (!data.testn(j)) {
      i++;
    } else {
      break;
    }
  }
  return i;
}
function trailingZeros(bitNum, data) {
  let i = 0;
  for (let j = 0; j < bitNum; j++) {
    if (!data.testn(j)) {
      i++;
    } else {
      break;
    }
  }
  return i;
}
function isZero(bitNum, data) {
  for (let i = 0; i < bitNum; i++) {
    if (data.testn(i))
      return false;
  }
  return true;
}
function mostSignificantBit(bitNum, data) {
  if (isZero(bitNum, data))
    return null;
  else
    return leadingZeros(bitNum, data);
}
function leastSignificantBit(bitNum, data) {
  if (isZero(bitNum, data))
    return null;
  else
    return trailingZeros(bitNum, data);
}

// src/raydium/clmm/utils/pda.ts
var AMM_CONFIG_SEED = Buffer.from("amm_config", "utf8");
var POOL_SEED = Buffer.from("pool", "utf8");
var POOL_VAULT_SEED = Buffer.from("pool_vault", "utf8");
var POOL_REWARD_VAULT_SEED = Buffer.from("pool_reward_vault", "utf8");
var POSITION_SEED = Buffer.from("position", "utf8");
var TICK_ARRAY_SEED = Buffer.from("tick_array", "utf8");
var OPERATION_SEED = Buffer.from("operation", "utf8");
var POOL_TICK_ARRAY_BITMAP_SEED = Buffer.from("pool_tick_array_bitmap_extension", "utf8");
var OBSERVATION_SEED = Buffer.from("observation", "utf8");
function getPdaAmmConfigId(programId, index) {
  return findProgramAddress([AMM_CONFIG_SEED, u16ToBytes(index)], programId);
}
function getPdaPoolId(programId, ammConfigId, mintA, mintB) {
  return findProgramAddress([POOL_SEED, ammConfigId.toBuffer(), mintA.toBuffer(), mintB.toBuffer()], programId);
}
function getPdaPoolVaultId(programId, poolId, vaultMint) {
  return findProgramAddress([POOL_VAULT_SEED, poolId.toBuffer(), vaultMint.toBuffer()], programId);
}
function getPdaPoolRewardVaulId(programId, poolId, rewardMint) {
  return findProgramAddress([POOL_REWARD_VAULT_SEED, poolId.toBuffer(), rewardMint.toBuffer()], programId);
}
function getPdaTickArrayAddress(programId, poolId, startIndex) {
  return findProgramAddress([TICK_ARRAY_SEED, poolId.toBuffer(), i32ToBytes(startIndex)], programId);
}
function getPdaProtocolPositionAddress(programId, poolId, tickLower, tickUpper) {
  return findProgramAddress([POSITION_SEED, poolId.toBuffer(), i32ToBytes(tickLower), i32ToBytes(tickUpper)], programId);
}
function getPdaPersonalPositionAddress(programId, nftMint) {
  return findProgramAddress([POSITION_SEED, nftMint.toBuffer()], programId);
}
function getPdaMetadataKey(mint) {
  return findProgramAddress([Buffer.from("metadata", "utf8"), METADATA_PROGRAM_ID.toBuffer(), mint.toBuffer()], METADATA_PROGRAM_ID);
}
function getPdaOperationAccount(programId) {
  return findProgramAddress([OPERATION_SEED], programId);
}
function getPdaExBitmapAccount(programId, poolId) {
  return findProgramAddress([POOL_TICK_ARRAY_BITMAP_SEED, poolId.toBuffer()], programId);
}
function getPdaObservationAccount(programId, poolId) {
  return findProgramAddress([OBSERVATION_SEED, poolId.toBuffer()], programId);
}
var POOL_LOCK_ID_SEED = Buffer.from("locked_position", "utf8");
function getPdaLockPositionId(programId, positionId) {
  return findProgramAddress([POOL_LOCK_ID_SEED, positionId.toBuffer()], programId);
}
function getPdaLockClPositionIdV2(programId, lockNftMint) {
  return findProgramAddress([POOL_LOCK_ID_SEED, lockNftMint.toBuffer()], programId);
}
var SUPPORT_MINT_SEED = Buffer.from("support_mint", "utf8");
function getPdaMintExAccount(programId, mintAddress) {
  return findProgramAddress([SUPPORT_MINT_SEED, mintAddress.toBuffer()], programId);
}

// src/raydium/clmm/utils/pool.ts
var import_web318 = require("@solana/web3.js");
var import_spl_token12 = require("@solana/spl-token");
var import_bn16 = __toESM(require("bn.js"));

// src/raydium/clmm/utils/position.ts
var import_bn15 = __toESM(require("bn.js"));
var PositionUtils = class {
  static getfeeGrowthInside(poolState, tickLowerState, tickUpperState) {
    let feeGrowthBelowX64A = new import_bn15.default(0);
    let feeGrowthBelowX64B = new import_bn15.default(0);
    if (poolState.tickCurrent >= tickLowerState.tick) {
      feeGrowthBelowX64A = tickLowerState.feeGrowthOutsideX64A;
      feeGrowthBelowX64B = tickLowerState.feeGrowthOutsideX64B;
    } else {
      feeGrowthBelowX64A = poolState.feeGrowthGlobalX64A.sub(tickLowerState.feeGrowthOutsideX64A);
      feeGrowthBelowX64B = poolState.feeGrowthGlobalX64B.sub(tickLowerState.feeGrowthOutsideX64B);
    }
    let feeGrowthAboveX64A = new import_bn15.default(0);
    let feeGrowthAboveX64B = new import_bn15.default(0);
    if (poolState.tickCurrent < tickUpperState.tick) {
      feeGrowthAboveX64A = tickUpperState.feeGrowthOutsideX64A;
      feeGrowthAboveX64B = tickUpperState.feeGrowthOutsideX64B;
    } else {
      feeGrowthAboveX64A = poolState.feeGrowthGlobalX64A.sub(tickUpperState.feeGrowthOutsideX64A);
      feeGrowthAboveX64B = poolState.feeGrowthGlobalX64B.sub(tickUpperState.feeGrowthOutsideX64B);
    }
    const feeGrowthInsideX64A = MathUtil.wrappingSubU128(MathUtil.wrappingSubU128(poolState.feeGrowthGlobalX64A, feeGrowthBelowX64A), feeGrowthAboveX64A);
    const feeGrowthInsideBX64 = MathUtil.wrappingSubU128(MathUtil.wrappingSubU128(poolState.feeGrowthGlobalX64B, feeGrowthBelowX64B), feeGrowthAboveX64B);
    return { feeGrowthInsideX64A, feeGrowthInsideBX64 };
  }
  static GetPositionFees(ammPool, positionState, tickLowerState, tickUpperState) {
    const { feeGrowthInsideX64A, feeGrowthInsideBX64 } = this.getfeeGrowthInside(ammPool, tickLowerState, tickUpperState);
    const feeGrowthdeltaA = MathUtil.mulDivFloor(MathUtil.wrappingSubU128(feeGrowthInsideX64A, positionState.feeGrowthInsideLastX64A), positionState.liquidity, Q64);
    const tokenFeeAmountA = positionState.tokenFeesOwedA.add(feeGrowthdeltaA);
    const feeGrowthdelta1 = MathUtil.mulDivFloor(MathUtil.wrappingSubU128(feeGrowthInsideBX64, positionState.feeGrowthInsideLastX64B), positionState.liquidity, Q64);
    const tokenFeeAmountB = positionState.tokenFeesOwedB.add(feeGrowthdelta1);
    return { tokenFeeAmountA, tokenFeeAmountB };
  }
  static GetPositionFeesV2(ammPool, positionState, tickLowerState, tickUpperState) {
    const { feeGrowthInsideX64A, feeGrowthInsideBX64 } = this.getfeeGrowthInside(ammPool, tickLowerState, tickUpperState);
    const feeGrowthdeltaA = MathUtil.mulDivFloor(MathUtil.wrappingSubU128(feeGrowthInsideX64A, positionState.feeGrowthInsideLastX64A), positionState.liquidity, Q64);
    const tokenFeeAmountA = positionState.tokenFeesOwedA.add(feeGrowthdeltaA);
    const feeGrowthdelta1 = MathUtil.mulDivFloor(MathUtil.wrappingSubU128(feeGrowthInsideBX64, positionState.feeGrowthInsideLastX64B), positionState.liquidity, Q64);
    const tokenFeeAmountB = positionState.tokenFeesOwedB.add(feeGrowthdelta1);
    return { tokenFeeAmountA, tokenFeeAmountB };
  }
  static GetPositionRewardsV2(ammPool, positionState, tickLowerState, tickUpperState) {
    const rewards = [];
    const rewardGrowthsInside = this.getRewardGrowthInsideV2(ammPool.tickCurrent, tickLowerState, tickUpperState, ammPool.rewardInfos);
    for (let i = 0; i < rewardGrowthsInside.length; i++) {
      const rewardGrowthInside = rewardGrowthsInside[i];
      const currRewardInfo = positionState.rewardInfos[i];
      const rewardGrowthDelta = MathUtil.wrappingSubU128(rewardGrowthInside, currRewardInfo.growthInsideLastX64);
      const amountOwedDelta = MathUtil.mulDivFloor(rewardGrowthDelta, positionState.liquidity, Q64);
      const rewardAmountOwed = currRewardInfo.rewardAmountOwed.add(amountOwedDelta);
      rewards.push(rewardAmountOwed);
    }
    return rewards;
  }
  static GetPositionRewards(ammPool, positionState, tickLowerState, tickUpperState) {
    const rewards = [];
    const rewardGrowthsInside = this.getRewardGrowthInside(ammPool.tickCurrent, tickLowerState, tickUpperState, ammPool.rewardInfos);
    for (let i = 0; i < rewardGrowthsInside.length; i++) {
      const rewardGrowthInside = rewardGrowthsInside[i];
      const currRewardInfo = positionState.rewardInfos[i];
      const rewardGrowthDelta = MathUtil.wrappingSubU128(rewardGrowthInside, currRewardInfo.growthInsideLastX64);
      const amountOwedDelta = MathUtil.mulDivFloor(rewardGrowthDelta, positionState.liquidity, Q64);
      const rewardAmountOwed = currRewardInfo.rewardAmountOwed.add(amountOwedDelta);
      rewards.push(rewardAmountOwed);
    }
    return rewards;
  }
  static getRewardGrowthInside(tickCurrentIndex, tickLowerState, tickUpperState, rewardInfos) {
    const rewardGrowthsInside = [];
    for (let i = 0; i < rewardInfos.length; i++) {
      let rewardGrowthsBelow = new import_bn15.default(0);
      if (tickLowerState.liquidityGross.eqn(0)) {
        rewardGrowthsBelow = rewardInfos[i].rewardGrowthGlobalX64;
      } else if (tickCurrentIndex < tickLowerState.tick) {
        rewardGrowthsBelow = rewardInfos[i].rewardGrowthGlobalX64.sub(tickLowerState.rewardGrowthsOutsideX64[i]);
      } else {
        rewardGrowthsBelow = tickLowerState.rewardGrowthsOutsideX64[i];
      }
      let rewardGrowthsAbove = new import_bn15.default(0);
      if (tickUpperState.liquidityGross.eqn(0)) {
      } else if (tickCurrentIndex < tickUpperState.tick) {
        rewardGrowthsAbove = tickUpperState.rewardGrowthsOutsideX64[i];
      } else {
        rewardGrowthsAbove = rewardInfos[i].rewardGrowthGlobalX64.sub(tickUpperState.rewardGrowthsOutsideX64[i]);
      }
      rewardGrowthsInside.push(MathUtil.wrappingSubU128(MathUtil.wrappingSubU128(rewardInfos[i].rewardGrowthGlobalX64, rewardGrowthsBelow), rewardGrowthsAbove));
    }
    return rewardGrowthsInside;
  }
  static getRewardGrowthInsideV2(tickCurrentIndex, tickLowerState, tickUpperState, rewardInfos) {
    const rewardGrowthsInside = [];
    for (let i = 0; i < rewardInfos.length; i++) {
      let rewardGrowthsBelow = new import_bn15.default(0);
      if (tickLowerState.liquidityGross.eqn(0)) {
        rewardGrowthsBelow = rewardInfos[i].rewardGrowthGlobalX64;
      } else if (tickCurrentIndex < tickLowerState.tick) {
        rewardGrowthsBelow = rewardInfos[i].rewardGrowthGlobalX64.sub(tickLowerState.rewardGrowthsOutsideX64[i]);
      } else {
        rewardGrowthsBelow = tickLowerState.rewardGrowthsOutsideX64[i];
      }
      let rewardGrowthsAbove = new import_bn15.default(0);
      if (tickUpperState.liquidityGross.eqn(0)) {
      } else if (tickCurrentIndex < tickUpperState.tick) {
        rewardGrowthsAbove = tickUpperState.rewardGrowthsOutsideX64[i];
      } else {
        rewardGrowthsAbove = rewardInfos[i].rewardGrowthGlobalX64.sub(tickUpperState.rewardGrowthsOutsideX64[i]);
      }
      rewardGrowthsInside.push(MathUtil.wrappingSubU128(MathUtil.wrappingSubU128(rewardInfos[i].rewardGrowthGlobalX64, rewardGrowthsBelow), rewardGrowthsAbove));
    }
    return rewardGrowthsInside;
  }
  static getAmountsFromLiquidity({
    poolInfo,
    ownerPosition,
    liquidity,
    slippage,
    add: add2,
    epochInfo
  }) {
    const sqrtPriceX64 = SqrtPriceMath.priceToSqrtPriceX64(new decimal_default(poolInfo.price), poolInfo.mintA.decimals, poolInfo.mintB.decimals);
    const sqrtPriceX64A = SqrtPriceMath.getSqrtPriceX64FromTick(ownerPosition.tickLower);
    const sqrtPriceX64B = SqrtPriceMath.getSqrtPriceX64FromTick(ownerPosition.tickUpper);
    const coefficientRe = add2 ? 1 + slippage : 1 - slippage;
    const amounts = LiquidityMath.getAmountsFromLiquidity(sqrtPriceX64, sqrtPriceX64A, sqrtPriceX64B, liquidity, add2);
    const [amountA, amountB] = [
      getTransferAmountFeeV2(amounts.amountA, poolInfo.mintA.extensions?.feeConfig, epochInfo, true),
      getTransferAmountFeeV2(amounts.amountB, poolInfo.mintB.extensions?.feeConfig, epochInfo, true)
    ];
    const [amountSlippageA, amountSlippageB] = [
      getTransferAmountFeeV2(new import_bn15.default(new decimal_default(amounts.amountA.toString()).mul(coefficientRe).toFixed(0)), poolInfo.mintA.extensions?.feeConfig, epochInfo, true),
      getTransferAmountFeeV2(new import_bn15.default(new decimal_default(amounts.amountB.toString()).mul(coefficientRe).toFixed(0)), poolInfo.mintB.extensions?.feeConfig, epochInfo, true)
    ];
    return {
      liquidity,
      amountA,
      amountB,
      amountSlippageA,
      amountSlippageB,
      expirationTime: minExpirationTime(amountA.expirationTime, amountB.expirationTime)
    };
  }
};

// src/raydium/clmm/utils/tickQuery.ts
var FETCH_TICKARRAY_COUNT = 15;
var TickQuery = class {
  static async getTickArrays(connection, programId, poolId, tickCurrent, tickSpacing, tickArrayBitmapArray, exTickArrayBitmap) {
    const tickArraysToFetch = [];
    const currentTickArrayStartIndex = TickUtils.getTickArrayStartIndexByTick(tickCurrent, tickSpacing);
    const startIndexArray = TickUtils.getInitializedTickArrayInRange(tickArrayBitmapArray, exTickArrayBitmap, tickSpacing, currentTickArrayStartIndex, Math.floor(FETCH_TICKARRAY_COUNT / 2));
    for (let i = 0; i < startIndexArray.length; i++) {
      const { publicKey: tickArrayAddress } = getPdaTickArrayAddress(programId, poolId, startIndexArray[i]);
      tickArraysToFetch.push(tickArrayAddress);
    }
    const fetchedTickArrays = (await getMultipleAccountsInfo(connection, tickArraysToFetch)).map((i) => i !== null ? TickArrayLayout.decode(i.data) : null);
    const tickArrayCache = {};
    for (let i = 0; i < tickArraysToFetch.length; i++) {
      const _info = fetchedTickArrays[i];
      if (_info === null)
        continue;
      tickArrayCache[_info.startTickIndex] = {
        ..._info,
        address: tickArraysToFetch[i]
      };
    }
    return tickArrayCache;
  }
  static nextInitializedTick(programId, poolId, tickArrayCache, tickIndex, tickSpacing, zeroForOne) {
    let {
      initializedTick: nextTick,
      tickArrayAddress,
      tickArrayStartTickIndex
    } = this.nextInitializedTickInOneArray(programId, poolId, tickArrayCache, tickIndex, tickSpacing, zeroForOne);
    while (nextTick == void 0 || nextTick.liquidityGross.lten(0)) {
      tickArrayStartTickIndex = TickUtils.getNextTickArrayStartIndex(tickArrayStartTickIndex, tickSpacing, zeroForOne);
      if (this.checkIsValidStartIndex(tickArrayStartTickIndex, tickSpacing)) {
        throw new Error("No enough initialized tickArray");
      }
      const cachedTickArray = tickArrayCache[tickArrayStartTickIndex];
      if (cachedTickArray === void 0)
        continue;
      const {
        nextTick: _nextTick,
        tickArrayAddress: _tickArrayAddress,
        tickArrayStartTickIndex: _tickArrayStartTickIndex
      } = this.firstInitializedTickInOneArray(programId, poolId, cachedTickArray, zeroForOne);
      [nextTick, tickArrayAddress, tickArrayStartTickIndex] = [_nextTick, _tickArrayAddress, _tickArrayStartTickIndex];
    }
    if (nextTick == void 0) {
      throw new Error("No invaild tickArray cache");
    }
    return { nextTick, tickArrayAddress, tickArrayStartTickIndex };
  }
  static nextInitializedTickArray(tickIndex, tickSpacing, zeroForOne, tickArrayBitmap, exBitmapInfo) {
    const currentOffset = Math.floor(tickIndex / TickQuery.tickCount(tickSpacing));
    const result = zeroForOne ? TickUtils.searchLowBitFromStart(tickArrayBitmap, exBitmapInfo, currentOffset - 1, 1, tickSpacing) : TickUtils.searchHightBitFromStart(tickArrayBitmap, exBitmapInfo, currentOffset + 1, 1, tickSpacing);
    return result.length > 0 ? { isExist: true, nextStartIndex: result[0] } : { isExist: false, nextStartIndex: 0 };
  }
  static firstInitializedTickInOneArray(programId, poolId, tickArray, zeroForOne) {
    let nextInitializedTick = void 0;
    if (zeroForOne) {
      let i = TICK_ARRAY_SIZE - 1;
      while (i >= 0) {
        const tickInArray = tickArray.ticks[i];
        if (tickInArray.liquidityGross.gtn(0)) {
          nextInitializedTick = tickInArray;
          break;
        }
        i = i - 1;
      }
    } else {
      let i = 0;
      while (i < TICK_ARRAY_SIZE) {
        const tickInArray = tickArray.ticks[i];
        if (tickInArray.liquidityGross.gtn(0)) {
          nextInitializedTick = tickInArray;
          break;
        }
        i = i + 1;
      }
    }
    const { publicKey: tickArrayAddress } = getPdaTickArrayAddress(programId, poolId, tickArray.startTickIndex);
    return { nextTick: nextInitializedTick, tickArrayAddress, tickArrayStartTickIndex: tickArray.startTickIndex };
  }
  static nextInitializedTickInOneArray(programId, poolId, tickArrayCache, tickIndex, tickSpacing, zeroForOne) {
    const startIndex = TickUtils.getTickArrayStartIndexByTick(tickIndex, tickSpacing);
    let tickPositionInArray = Math.floor((tickIndex - startIndex) / tickSpacing);
    const cachedTickArray = tickArrayCache[startIndex];
    if (cachedTickArray == void 0) {
      return {
        initializedTick: void 0,
        tickArrayAddress: void 0,
        tickArrayStartTickIndex: startIndex
      };
    }
    let nextInitializedTick = void 0;
    if (zeroForOne) {
      while (tickPositionInArray >= 0) {
        const tickInArray = cachedTickArray.ticks[tickPositionInArray];
        if (tickInArray.liquidityGross.gtn(0)) {
          nextInitializedTick = tickInArray;
          break;
        }
        tickPositionInArray = tickPositionInArray - 1;
      }
    } else {
      tickPositionInArray = tickPositionInArray + 1;
      while (tickPositionInArray < TICK_ARRAY_SIZE) {
        const tickInArray = cachedTickArray.ticks[tickPositionInArray];
        if (tickInArray.liquidityGross.gtn(0)) {
          nextInitializedTick = tickInArray;
          break;
        }
        tickPositionInArray = tickPositionInArray + 1;
      }
    }
    const { publicKey: tickArrayAddress } = getPdaTickArrayAddress(programId, poolId, startIndex);
    return {
      initializedTick: nextInitializedTick,
      tickArrayAddress,
      tickArrayStartTickIndex: cachedTickArray.startTickIndex
    };
  }
  static getArrayStartIndex(tickIndex, tickSpacing) {
    const ticksInArray = this.tickCount(tickSpacing);
    const start = Math.floor(tickIndex / ticksInArray);
    return start * ticksInArray;
  }
  static checkIsValidStartIndex(tickIndex, tickSpacing) {
    if (TickUtils.checkIsOutOfBoundary(tickIndex)) {
      if (tickIndex > MAX_TICK) {
        return false;
      }
      const minStartIndex = TickUtils.getTickArrayStartIndexByTick(MIN_TICK, tickSpacing);
      return tickIndex == minStartIndex;
    }
    return tickIndex % this.tickCount(tickSpacing) == 0;
  }
  static tickCount(tickSpacing) {
    return TICK_ARRAY_SIZE * tickSpacing;
  }
};

// src/raydium/clmm/utils/tickarrayBitmap.ts
var EXTENSION_TICKARRAY_BITMAP_SIZE = 14;
var TickArrayBitmap = class {
  static maxTickInTickarrayBitmap(tickSpacing) {
    return tickSpacing * TICK_ARRAY_SIZE * TICK_ARRAY_BITMAP_SIZE;
  }
  static getBitmapTickBoundary(tickarrayStartIndex, tickSpacing) {
    const ticksInOneBitmap = this.maxTickInTickarrayBitmap(tickSpacing);
    let m = Math.floor(Math.abs(tickarrayStartIndex) / ticksInOneBitmap);
    if (tickarrayStartIndex < 0 && Math.abs(tickarrayStartIndex) % ticksInOneBitmap != 0)
      m += 1;
    const minValue = ticksInOneBitmap * m;
    return tickarrayStartIndex < 0 ? { minValue: -minValue, maxValue: -minValue + ticksInOneBitmap } : { minValue, maxValue: minValue + ticksInOneBitmap };
  }
  static nextInitializedTickArrayStartIndex(bitMap, lastTickArrayStartIndex, tickSpacing, zeroForOne) {
    if (!TickQuery.checkIsValidStartIndex(lastTickArrayStartIndex, tickSpacing))
      throw Error("nextInitializedTickArrayStartIndex check error");
    const tickBoundary = this.maxTickInTickarrayBitmap(tickSpacing);
    const nextTickArrayStartIndex = zeroForOne ? lastTickArrayStartIndex - TickQuery.tickCount(tickSpacing) : lastTickArrayStartIndex + TickQuery.tickCount(tickSpacing);
    if (nextTickArrayStartIndex < -tickBoundary || nextTickArrayStartIndex >= tickBoundary) {
      return { isInit: false, tickIndex: lastTickArrayStartIndex };
    }
    const multiplier = tickSpacing * TICK_ARRAY_SIZE;
    let compressed = nextTickArrayStartIndex / multiplier + 512;
    if (nextTickArrayStartIndex < 0 && nextTickArrayStartIndex % multiplier != 0) {
      compressed--;
    }
    const bitPos = Math.abs(compressed);
    if (zeroForOne) {
      const offsetBitMap = bitMap.shln(1024 - bitPos - 1);
      const nextBit = mostSignificantBit(1024, offsetBitMap);
      if (nextBit !== null) {
        const nextArrayStartIndex = (bitPos - nextBit - 512) * multiplier;
        return { isInit: true, tickIndex: nextArrayStartIndex };
      } else {
        return { isInit: false, tickIndex: -tickBoundary };
      }
    } else {
      const offsetBitMap = bitMap.shrn(bitPos);
      const nextBit = leastSignificantBit(1024, offsetBitMap);
      if (nextBit !== null) {
        const nextArrayStartIndex = (bitPos + nextBit - 512) * multiplier;
        return { isInit: true, tickIndex: nextArrayStartIndex };
      } else {
        return { isInit: false, tickIndex: tickBoundary - TickQuery.tickCount(tickSpacing) };
      }
    }
  }
};
var TickArrayBitmapExtensionUtils = class {
  static getBitmapOffset(tickIndex, tickSpacing) {
    if (!TickQuery.checkIsValidStartIndex(tickIndex, tickSpacing)) {
      throw new Error("No enough initialized tickArray");
    }
    this.checkExtensionBoundary(tickIndex, tickSpacing);
    const ticksInOneBitmap = TickArrayBitmap.maxTickInTickarrayBitmap(tickSpacing);
    let offset2 = Math.floor(Math.abs(tickIndex) / ticksInOneBitmap) - 1;
    if (tickIndex < 0 && Math.abs(tickIndex) % ticksInOneBitmap === 0)
      offset2--;
    return offset2;
  }
  static getBitmap(tickIndex, tickSpacing, tickArrayBitmapExtension) {
    const offset2 = this.getBitmapOffset(tickIndex, tickSpacing);
    if (tickIndex < 0) {
      return { offset: offset2, tickarrayBitmap: tickArrayBitmapExtension.negativeTickArrayBitmap[offset2] };
    } else {
      return { offset: offset2, tickarrayBitmap: tickArrayBitmapExtension.positiveTickArrayBitmap[offset2] };
    }
  }
  static checkExtensionBoundary(tickIndex, tickSpacing) {
    const { positiveTickBoundary, negativeTickBoundary } = this.extensionTickBoundary(tickSpacing);
    if (tickIndex >= negativeTickBoundary && tickIndex < positiveTickBoundary) {
      throw Error("checkExtensionBoundary -> InvalidTickArrayBoundary");
    }
  }
  static extensionTickBoundary(tickSpacing) {
    const positiveTickBoundary = TickArrayBitmap.maxTickInTickarrayBitmap(tickSpacing);
    const negativeTickBoundary = -positiveTickBoundary;
    if (MAX_TICK <= positiveTickBoundary)
      throw Error(`extensionTickBoundary check error: ${MAX_TICK}, ${positiveTickBoundary}`);
    if (negativeTickBoundary <= MIN_TICK)
      throw Error(`extensionTickBoundary check error: ${negativeTickBoundary}, ${MIN_TICK}`);
    return { positiveTickBoundary, negativeTickBoundary };
  }
  static checkTickArrayIsInit(tickArrayStartIndex, tickSpacing, tickArrayBitmapExtension) {
    const { tickarrayBitmap } = this.getBitmap(tickArrayStartIndex, tickSpacing, tickArrayBitmapExtension);
    const tickArrayOffsetInBitmap = this.tickArrayOffsetInBitmap(tickArrayStartIndex, tickSpacing);
    return {
      isInitialized: TickUtils.mergeTickArrayBitmap(tickarrayBitmap).testn(tickArrayOffsetInBitmap),
      startIndex: tickArrayStartIndex
    };
  }
  static nextInitializedTickArrayFromOneBitmap(lastTickArrayStartIndex, tickSpacing, zeroForOne, tickArrayBitmapExtension) {
    const multiplier = TickQuery.tickCount(tickSpacing);
    const nextTickArrayStartIndex = zeroForOne ? lastTickArrayStartIndex - multiplier : lastTickArrayStartIndex + multiplier;
    const { tickarrayBitmap } = this.getBitmap(nextTickArrayStartIndex, tickSpacing, tickArrayBitmapExtension);
    return this.nextInitializedTickArrayInBitmap(tickarrayBitmap, nextTickArrayStartIndex, tickSpacing, zeroForOne);
  }
  static nextInitializedTickArrayInBitmap(tickarrayBitmap, nextTickArrayStartIndex, tickSpacing, zeroForOne) {
    const { minValue: bitmapMinTickBoundary, maxValue: bitmapMaxTickBoundary } = TickArrayBitmap.getBitmapTickBoundary(nextTickArrayStartIndex, tickSpacing);
    const tickArrayOffsetInBitmap = this.tickArrayOffsetInBitmap(nextTickArrayStartIndex, tickSpacing);
    if (zeroForOne) {
      const offsetBitMap = TickUtils.mergeTickArrayBitmap(tickarrayBitmap).shln(TICK_ARRAY_BITMAP_SIZE - 1 - tickArrayOffsetInBitmap);
      const nextBit = isZero(512, offsetBitMap) ? null : leadingZeros(512, offsetBitMap);
      if (nextBit !== null) {
        const nextArrayStartIndex = nextTickArrayStartIndex - nextBit * TickQuery.tickCount(tickSpacing);
        return { isInit: true, tickIndex: nextArrayStartIndex };
      } else {
        return { isInit: false, tickIndex: bitmapMinTickBoundary };
      }
    } else {
      const offsetBitMap = TickUtils.mergeTickArrayBitmap(tickarrayBitmap).shrn(tickArrayOffsetInBitmap);
      const nextBit = isZero(512, offsetBitMap) ? null : trailingZeros(512, offsetBitMap);
      if (nextBit !== null) {
        const nextArrayStartIndex = nextTickArrayStartIndex + nextBit * TickQuery.tickCount(tickSpacing);
        return { isInit: true, tickIndex: nextArrayStartIndex };
      } else {
        return { isInit: false, tickIndex: bitmapMaxTickBoundary - TickQuery.tickCount(tickSpacing) };
      }
    }
  }
  static tickArrayOffsetInBitmap(tickArrayStartIndex, tickSpacing) {
    const m = Math.abs(tickArrayStartIndex) % TickArrayBitmap.maxTickInTickarrayBitmap(tickSpacing);
    let tickArrayOffsetInBitmap = Math.floor(m / TickQuery.tickCount(tickSpacing));
    if (tickArrayStartIndex < 0 && m != 0) {
      tickArrayOffsetInBitmap = TICK_ARRAY_BITMAP_SIZE - tickArrayOffsetInBitmap;
    }
    return tickArrayOffsetInBitmap;
  }
};

// src/raydium/clmm/utils/pool.ts
var PoolUtils = class {
  static getOutputAmountAndRemainAccounts(poolInfo, tickArrayCache, inputTokenMint, inputAmount, sqrtPriceLimitX64, catchLiquidityInsufficient = false) {
    const zeroForOne = inputTokenMint.toBase58() === poolInfo.mintA.address;
    const allNeededAccounts = [];
    const {
      isExist,
      startIndex: firstTickArrayStartIndex,
      nextAccountMeta
    } = this.getFirstInitializedTickArray(poolInfo, zeroForOne);
    if (!isExist || firstTickArrayStartIndex === void 0 || !nextAccountMeta)
      throw new Error("Invalid tick array");
    allNeededAccounts.push(nextAccountMeta);
    const {
      allTrade,
      amountCalculated: outputAmount,
      accounts: reaminAccounts,
      sqrtPriceX64: executionPrice,
      feeAmount
    } = SwapMath.swapCompute(poolInfo.programId, poolInfo.id, tickArrayCache, poolInfo.tickArrayBitmap, poolInfo.exBitmapInfo, zeroForOne, poolInfo.ammConfig.tradeFeeRate, poolInfo.liquidity, poolInfo.tickCurrent, poolInfo.tickSpacing, poolInfo.sqrtPriceX64, inputAmount, firstTickArrayStartIndex, sqrtPriceLimitX64, catchLiquidityInsufficient);
    allNeededAccounts.push(...reaminAccounts);
    return {
      allTrade,
      expectedAmountOut: outputAmount.mul(NEGATIVE_ONE),
      remainingAccounts: allNeededAccounts,
      executionPrice,
      feeAmount
    };
  }
  static getInputAmountAndRemainAccounts(poolInfo, tickArrayCache, outputTokenMint, outputAmount, sqrtPriceLimitX64) {
    const zeroForOne = outputTokenMint.toBase58() === poolInfo.mintB.address;
    const allNeededAccounts = [];
    const {
      isExist,
      startIndex: firstTickArrayStartIndex,
      nextAccountMeta
    } = this.getFirstInitializedTickArray(poolInfo, zeroForOne);
    if (!isExist || firstTickArrayStartIndex === void 0 || !nextAccountMeta)
      throw new Error("Invalid tick array");
    try {
      const preTick = this.preInitializedTickArrayStartIndex(poolInfo, zeroForOne);
      if (preTick.isExist) {
        const { publicKey: address } = getPdaTickArrayAddress(poolInfo.programId, poolInfo.id, preTick.nextStartIndex);
        allNeededAccounts.push(address);
      }
    } catch (e) {
    }
    allNeededAccounts.push(nextAccountMeta);
    const {
      amountCalculated: inputAmount,
      accounts: reaminAccounts,
      sqrtPriceX64: executionPrice,
      feeAmount
    } = SwapMath.swapCompute(poolInfo.programId, poolInfo.id, tickArrayCache, poolInfo.tickArrayBitmap, poolInfo.exBitmapInfo, zeroForOne, poolInfo.ammConfig.tradeFeeRate, poolInfo.liquidity, poolInfo.tickCurrent, poolInfo.tickSpacing, poolInfo.sqrtPriceX64, outputAmount.mul(NEGATIVE_ONE), firstTickArrayStartIndex, sqrtPriceLimitX64);
    allNeededAccounts.push(...reaminAccounts);
    return { expectedAmountIn: inputAmount, remainingAccounts: allNeededAccounts, executionPrice, feeAmount };
  }
  static getFirstInitializedTickArray(poolInfo, zeroForOne) {
    const { isInitialized, startIndex } = PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.tickSpacing, [
      poolInfo.tickCurrent
    ]) ? TickArrayBitmapExtensionUtils.checkTickArrayIsInit(TickQuery.getArrayStartIndex(poolInfo.tickCurrent, poolInfo.tickSpacing), poolInfo.tickSpacing, poolInfo.exBitmapInfo) : TickUtils.checkTickArrayIsInitialized(TickUtils.mergeTickArrayBitmap(poolInfo.tickArrayBitmap), poolInfo.tickCurrent, poolInfo.tickSpacing);
    if (isInitialized) {
      const { publicKey: address } = getPdaTickArrayAddress(poolInfo.programId, poolInfo.id, startIndex);
      return {
        isExist: true,
        startIndex,
        nextAccountMeta: address
      };
    }
    const { isExist, nextStartIndex } = this.nextInitializedTickArrayStartIndex(poolInfo, TickQuery.getArrayStartIndex(poolInfo.tickCurrent, poolInfo.tickSpacing), zeroForOne);
    if (isExist) {
      const { publicKey: address } = getPdaTickArrayAddress(poolInfo.programId, poolInfo.id, nextStartIndex);
      return {
        isExist: true,
        startIndex: nextStartIndex,
        nextAccountMeta: address
      };
    }
    return { isExist: false, nextAccountMeta: void 0, startIndex: void 0 };
  }
  static preInitializedTickArrayStartIndex(poolInfo, zeroForOne) {
    const currentOffset = Math.floor(poolInfo.tickCurrent / TickQuery.tickCount(poolInfo.tickSpacing));
    const result = !zeroForOne ? TickUtils.searchLowBitFromStart(poolInfo.tickArrayBitmap, poolInfo.exBitmapInfo, currentOffset - 1, 1, poolInfo.tickSpacing) : TickUtils.searchHightBitFromStart(poolInfo.tickArrayBitmap, poolInfo.exBitmapInfo, currentOffset + 1, 1, poolInfo.tickSpacing);
    return result.length > 0 ? { isExist: true, nextStartIndex: result[0] } : { isExist: false, nextStartIndex: 0 };
  }
  static nextInitializedTickArrayStartIndex(poolInfo, lastTickArrayStartIndex, zeroForOne) {
    lastTickArrayStartIndex = TickQuery.getArrayStartIndex(poolInfo.tickCurrent, poolInfo.tickSpacing);
    while (true) {
      const { isInit: startIsInit, tickIndex: startIndex } = TickArrayBitmap.nextInitializedTickArrayStartIndex(TickUtils.mergeTickArrayBitmap(poolInfo.tickArrayBitmap), lastTickArrayStartIndex, poolInfo.tickSpacing, zeroForOne);
      if (startIsInit) {
        return { isExist: true, nextStartIndex: startIndex };
      }
      lastTickArrayStartIndex = startIndex;
      const { isInit, tickIndex } = TickArrayBitmapExtensionUtils.nextInitializedTickArrayFromOneBitmap(lastTickArrayStartIndex, poolInfo.tickSpacing, zeroForOne, poolInfo.exBitmapInfo);
      if (isInit)
        return { isExist: true, nextStartIndex: tickIndex };
      lastTickArrayStartIndex = tickIndex;
      if (lastTickArrayStartIndex < MIN_TICK || lastTickArrayStartIndex > MAX_TICK)
        return { isExist: false, nextStartIndex: 0 };
    }
  }
  static async updatePoolRewardInfos({
    connection,
    apiPoolInfo,
    chainTime,
    poolLiquidity,
    rewardInfos
  }) {
    const nRewardInfo = [];
    for (let i = 0; i < rewardInfos.length; i++) {
      const _itemReward = rewardInfos[i];
      const apiRewardProgram = apiPoolInfo.rewardDefaultInfos[i]?.mint.programId ?? (await connection.getAccountInfo(_itemReward.tokenMint))?.owner;
      if (apiRewardProgram === void 0)
        throw Error("get new reward mint info error");
      const itemReward = {
        ..._itemReward,
        perSecond: MathUtil.x64ToDecimal(_itemReward.emissionsPerSecondX64),
        remainingRewards: void 0,
        tokenProgramId: new import_web318.PublicKey(apiRewardProgram)
      };
      if (itemReward.tokenMint.equals(import_web318.PublicKey.default))
        continue;
      if (chainTime <= itemReward.openTime.toNumber() || poolLiquidity.eq(ZERO)) {
        nRewardInfo.push(itemReward);
        continue;
      }
      const latestUpdateTime = new import_bn16.default(Math.min(itemReward.endTime.toNumber(), chainTime));
      const timeDelta = latestUpdateTime.sub(itemReward.lastUpdateTime);
      const rewardGrowthDeltaX64 = MathUtil.mulDivFloor(timeDelta, itemReward.emissionsPerSecondX64, poolLiquidity);
      const rewardGrowthGlobalX64 = itemReward.rewardGrowthGlobalX64.add(rewardGrowthDeltaX64);
      const rewardEmissionedDelta = MathUtil.mulDivFloor(timeDelta, itemReward.emissionsPerSecondX64, Q64);
      const rewardTotalEmissioned = itemReward.rewardTotalEmissioned.add(rewardEmissionedDelta);
      nRewardInfo.push({
        ...itemReward,
        rewardGrowthGlobalX64,
        rewardTotalEmissioned,
        lastUpdateTime: latestUpdateTime
      });
    }
    return nRewardInfo;
  }
  static isOverflowDefaultTickarrayBitmap(tickSpacing, tickarrayStartIndexs) {
    const { maxTickBoundary, minTickBoundary } = this.tickRange(tickSpacing);
    for (const tickIndex of tickarrayStartIndexs) {
      const tickarrayStartIndex = TickUtils.getTickArrayStartIndexByTick(tickIndex, tickSpacing);
      if (tickarrayStartIndex >= maxTickBoundary || tickarrayStartIndex < minTickBoundary) {
        return true;
      }
    }
    return false;
  }
  static tickRange(tickSpacing) {
    let maxTickBoundary = TickArrayBitmap.maxTickInTickarrayBitmap(tickSpacing);
    let minTickBoundary = -maxTickBoundary;
    if (maxTickBoundary > MAX_TICK) {
      maxTickBoundary = TickQuery.getArrayStartIndex(MAX_TICK, tickSpacing) + TickQuery.tickCount(tickSpacing);
    }
    if (minTickBoundary < MIN_TICK) {
      minTickBoundary = TickQuery.getArrayStartIndex(MIN_TICK, tickSpacing);
    }
    return { maxTickBoundary, minTickBoundary };
  }
  static get_tick_array_offset(tickarrayStartIndex, tickSpacing) {
    if (!TickQuery.checkIsValidStartIndex(tickarrayStartIndex, tickSpacing)) {
      throw new Error("No enough initialized tickArray");
    }
    return tickarrayStartIndex / TickQuery.tickCount(tickSpacing) * TICK_ARRAY_BITMAP_SIZE;
  }
  static async fetchExBitmaps({
    connection,
    exBitmapAddress,
    batchRequest
  }) {
    const fetchedBitmapAccount = await getMultipleAccountsInfoWithCustomFlags(connection, exBitmapAddress.map((i) => ({ pubkey: i })), { batchRequest });
    const returnTypeFetchExBitmaps = {};
    for (const item of fetchedBitmapAccount) {
      if (item.accountInfo === null)
        continue;
      returnTypeFetchExBitmaps[item.pubkey.toString()] = TickArrayBitmapExtensionLayout.decode(item.accountInfo.data);
    }
    return returnTypeFetchExBitmaps;
  }
  static async fetchMultiplePoolTickArrays({
    connection,
    poolKeys,
    batchRequest
  }) {
    const tickArraysToPoolId = {};
    const tickArrays = [];
    for (const itemPoolInfo of poolKeys) {
      const currentTickArrayStartIndex = TickUtils.getTickArrayStartIndexByTick(itemPoolInfo.tickCurrent, itemPoolInfo.tickSpacing);
      const startIndexArray = TickUtils.getInitializedTickArrayInRange(itemPoolInfo.tickArrayBitmap, itemPoolInfo.exBitmapInfo, itemPoolInfo.tickSpacing, currentTickArrayStartIndex, 7);
      for (const itemIndex of startIndexArray) {
        const { publicKey: tickArrayAddress } = getPdaTickArrayAddress(itemPoolInfo.programId, itemPoolInfo.id, itemIndex);
        tickArrays.push({ pubkey: tickArrayAddress });
        tickArraysToPoolId[tickArrayAddress.toString()] = itemPoolInfo.id;
      }
    }
    const fetchedTickArrays = await getMultipleAccountsInfoWithCustomFlags(connection, tickArrays, { batchRequest });
    const tickArrayCache = {};
    for (const itemAccountInfo of fetchedTickArrays) {
      if (!itemAccountInfo.accountInfo)
        continue;
      const poolId = tickArraysToPoolId[itemAccountInfo.pubkey.toString()];
      if (!poolId)
        continue;
      if (tickArrayCache[poolId.toString()] === void 0)
        tickArrayCache[poolId.toString()] = {};
      const accountLayoutData = TickArrayLayout.decode(itemAccountInfo.accountInfo.data);
      tickArrayCache[poolId.toString()][accountLayoutData.startTickIndex] = {
        ...accountLayoutData,
        address: itemAccountInfo.pubkey
      };
    }
    return tickArrayCache;
  }
  static async fetchPoolsAccountPosition({
    pools,
    connection,
    ownerInfo,
    batchRequest = false,
    updateOwnerRewardAndFee = true
  }) {
    const programIds = [];
    for (let index = 0; index < pools.length; index++) {
      const accountInfo = pools[index];
      if (accountInfo === null)
        continue;
      if (!programIds.find((i) => i.equals(accountInfo.state.programId)))
        programIds.push(accountInfo.state.programId);
    }
    if (ownerInfo) {
      const allMint = ownerInfo.tokenAccounts.map((i) => i.accountInfo.mint);
      const allPositionKey = [];
      for (const itemMint of allMint) {
        for (const itemProgramId of programIds) {
          allPositionKey.push(getPdaPersonalPositionAddress(itemProgramId, itemMint).publicKey);
        }
      }
      const positionAccountInfos = await getMultipleAccountsInfo(connection, allPositionKey, { batchRequest });
      const keyToTickArrayAddress = {};
      for (const itemAccountInfo of positionAccountInfos) {
        if (itemAccountInfo === null)
          continue;
        const position = PositionInfoLayout.decode(itemAccountInfo.data);
        const itemPoolId = position.poolId.toString();
        const poolInfoA = pools.find((pool) => pool.state.id.toBase58() === itemPoolId);
        if (poolInfoA === void 0)
          continue;
        const poolInfo = poolInfoA.state;
        const priceLower = TickUtils._getTickPriceLegacy({
          poolInfo,
          tick: position.tickLower,
          baseIn: true
        });
        const priceUpper = TickUtils._getTickPriceLegacy({
          poolInfo,
          tick: position.tickUpper,
          baseIn: true
        });
        const { amountA, amountB } = LiquidityMath.getAmountsFromLiquidity(poolInfo.sqrtPriceX64, priceLower.tickSqrtPriceX64, priceUpper.tickSqrtPriceX64, position.liquidity, false);
        const leverage = 1 / (1 - Math.sqrt(Math.sqrt(priceLower.price.div(priceUpper.price).toNumber())));
        poolInfoA.positionAccount = [
          ...poolInfoA.positionAccount ?? [],
          {
            poolId: position.poolId,
            nftMint: position.nftMint,
            priceLower: priceLower.price,
            priceUpper: priceUpper.price,
            amountA,
            amountB,
            tickLower: position.tickLower,
            tickUpper: position.tickUpper,
            liquidity: position.liquidity,
            feeGrowthInsideLastX64A: position.feeGrowthInsideLastX64A,
            feeGrowthInsideLastX64B: position.feeGrowthInsideLastX64B,
            tokenFeesOwedA: position.tokenFeesOwedA,
            tokenFeesOwedB: position.tokenFeesOwedB,
            rewardInfos: position.rewardInfos.map((i) => ({
              ...i,
              pendingReward: new import_bn16.default(0)
            })),
            leverage,
            tokenFeeAmountA: new import_bn16.default(0),
            tokenFeeAmountB: new import_bn16.default(0)
          }
        ];
        const tickArrayLowerAddress = await TickUtils.getTickArrayAddressByTick(poolInfoA.state.programId, position.poolId, position.tickLower, poolInfoA.state.tickSpacing);
        const tickArrayUpperAddress = await TickUtils.getTickArrayAddressByTick(poolInfoA.state.programId, position.poolId, position.tickUpper, poolInfoA.state.tickSpacing);
        keyToTickArrayAddress[`${poolInfoA.state.programId.toString()}-${position.poolId.toString()}-${position.tickLower}`] = tickArrayLowerAddress;
        keyToTickArrayAddress[`${poolInfoA.state.programId.toString()}-${position.poolId.toString()}-${position.tickUpper}`] = tickArrayUpperAddress;
      }
      if (updateOwnerRewardAndFee) {
        const tickArrayKeys = Object.values(keyToTickArrayAddress);
        const tickArrayDatas = await getMultipleAccountsInfo(connection, tickArrayKeys, { batchRequest });
        const tickArrayLayout = {};
        for (let index = 0; index < tickArrayKeys.length; index++) {
          const tickArrayData = tickArrayDatas[index];
          if (tickArrayData === null)
            continue;
          const key = tickArrayKeys[index].toString();
          tickArrayLayout[key] = TickArrayLayout.decode(tickArrayData.data);
        }
        for (const { state, positionAccount } of pools) {
          if (!positionAccount)
            continue;
          for (const itemPA of positionAccount) {
            const keyLower = `${state.programId.toString()}-${state.id.toString()}-${itemPA.tickLower}`;
            const keyUpper = `${state.programId.toString()}-${state.id.toString()}-${itemPA.tickUpper}`;
            const tickArrayLower = tickArrayLayout[keyToTickArrayAddress[keyLower].toString()];
            const tickArrayUpper = tickArrayLayout[keyToTickArrayAddress[keyUpper].toString()];
            const tickLowerState = tickArrayLower.ticks[TickUtils.getTickOffsetInArray(itemPA.tickLower, state.tickSpacing)];
            const tickUpperState = tickArrayUpper.ticks[TickUtils.getTickOffsetInArray(itemPA.tickUpper, state.tickSpacing)];
            const { tokenFeeAmountA, tokenFeeAmountB } = await PositionUtils.GetPositionFees(state, itemPA, tickLowerState, tickUpperState);
            const rewardInfos = await PositionUtils.GetPositionRewards(state, itemPA, tickLowerState, tickUpperState);
            itemPA.tokenFeeAmountA = tokenFeeAmountA.gte(new import_bn16.default(0)) ? tokenFeeAmountA : new import_bn16.default(0);
            itemPA.tokenFeeAmountB = tokenFeeAmountB.gte(new import_bn16.default(0)) ? tokenFeeAmountB : new import_bn16.default(0);
            for (let i = 0; i < rewardInfos.length; i++) {
              itemPA.rewardInfos[i].pendingReward = rewardInfos[i].gte(new import_bn16.default(0)) ? rewardInfos[i] : new import_bn16.default(0);
            }
          }
        }
      }
    }
    return pools;
  }
  static computeAmountOut({
    poolInfo,
    tickArrayCache,
    baseMint,
    epochInfo,
    amountIn,
    slippage,
    priceLimit = new decimal_default(0),
    catchLiquidityInsufficient = false
  }) {
    let sqrtPriceLimitX64;
    const isBaseIn = baseMint.toBase58() === poolInfo.mintA.address;
    const [baseFeeConfig, outFeeConfig] = isBaseIn ? [poolInfo.mintA.extensions.feeConfig, poolInfo.mintB.extensions.feeConfig] : [poolInfo.mintB.extensions.feeConfig, poolInfo.mintA.extensions.feeConfig];
    if (priceLimit.equals(new decimal_default(0))) {
      sqrtPriceLimitX64 = isBaseIn ? MIN_SQRT_PRICE_X64.add(new import_bn16.default(1)) : MAX_SQRT_PRICE_X64.sub(new import_bn16.default(1));
    } else {
      sqrtPriceLimitX64 = SqrtPriceMath.priceToSqrtPriceX64(priceLimit, poolInfo.mintA.decimals, poolInfo.mintB.decimals);
    }
    const realAmountIn = getTransferAmountFeeV2(amountIn, baseFeeConfig, epochInfo, false);
    const {
      allTrade,
      expectedAmountOut: _expectedAmountOut,
      remainingAccounts,
      executionPrice: _executionPriceX64,
      feeAmount
    } = PoolUtils.getOutputAmountAndRemainAccounts(poolInfo, tickArrayCache, baseMint, realAmountIn.amount.sub(realAmountIn.fee ?? ZERO), sqrtPriceLimitX64, catchLiquidityInsufficient);
    const amountOut = getTransferAmountFeeV2(_expectedAmountOut, outFeeConfig, epochInfo, false);
    const _executionPrice = SqrtPriceMath.sqrtPriceX64ToPrice(_executionPriceX64, poolInfo.mintA.decimals, poolInfo.mintB.decimals);
    const executionPrice = isBaseIn ? _executionPrice : new decimal_default(1).div(_executionPrice);
    const _minAmountOut = _expectedAmountOut.mul(new import_bn16.default(Math.floor((1 - slippage) * 1e10))).div(new import_bn16.default(1e10));
    const minAmountOut = getTransferAmountFeeV2(_minAmountOut, outFeeConfig, epochInfo, false);
    const poolPrice = isBaseIn ? poolInfo.currentPrice : new decimal_default(1).div(poolInfo.currentPrice);
    const _numerator = new decimal_default(executionPrice).sub(poolPrice).abs();
    const _denominator = poolPrice;
    const priceImpact = new Percent(new decimal_default(_numerator).mul(10 ** 15).toFixed(0), new decimal_default(_denominator).mul(10 ** 15).toFixed(0));
    return {
      allTrade,
      realAmountIn,
      amountOut,
      minAmountOut,
      expirationTime: minExpirationTime(realAmountIn.expirationTime, amountOut.expirationTime),
      currentPrice: poolInfo.currentPrice,
      executionPrice,
      priceImpact,
      fee: feeAmount,
      remainingAccounts,
      executionPriceX64: _executionPriceX64
    };
  }
  static computeAmountOutFormat({
    poolInfo,
    tickArrayCache,
    amountIn,
    tokenOut: _tokenOut,
    slippage,
    epochInfo,
    catchLiquidityInsufficient = false
  }) {
    const baseIn = _tokenOut.address === poolInfo.mintB.address;
    const [inputMint, outMint] = baseIn ? [poolInfo.mintA, poolInfo.mintB] : [poolInfo.mintB, poolInfo.mintA];
    const [baseToken, outToken] = [
      new Token({
        ...inputMint,
        mint: inputMint.address,
        isToken2022: inputMint.programId === import_spl_token12.TOKEN_2022_PROGRAM_ID.toBase58()
      }),
      new Token({
        ...outMint,
        mint: outMint.address,
        isToken2022: outMint.programId === import_spl_token12.TOKEN_2022_PROGRAM_ID.toBase58()
      })
    ];
    const {
      allTrade,
      realAmountIn: _realAmountIn,
      amountOut: _amountOut,
      minAmountOut: _minAmountOut,
      expirationTime,
      currentPrice,
      executionPrice,
      priceImpact,
      fee,
      remainingAccounts,
      executionPriceX64
    } = PoolUtils.computeAmountOut({
      poolInfo,
      tickArrayCache,
      baseMint: new import_web318.PublicKey(inputMint.address),
      amountIn,
      slippage,
      epochInfo,
      catchLiquidityInsufficient
    });
    const realAmountIn = {
      ..._realAmountIn,
      amount: new TokenAmount(baseToken, _realAmountIn.amount),
      fee: _realAmountIn.fee === void 0 ? void 0 : new TokenAmount(baseToken, _realAmountIn.fee)
    };
    const amountOut = {
      ..._amountOut,
      amount: new TokenAmount(outToken, _amountOut.amount),
      fee: _amountOut.fee === void 0 ? void 0 : new TokenAmount(outToken, _amountOut.fee)
    };
    const minAmountOut = {
      ..._minAmountOut,
      amount: new TokenAmount(outToken, _minAmountOut.amount),
      fee: _minAmountOut.fee === void 0 ? void 0 : new TokenAmount(outToken, _minAmountOut.fee)
    };
    const _currentPrice = new Price({
      baseToken,
      denominator: new import_bn16.default(10).pow(new import_bn16.default(20 + baseToken.decimals)),
      quoteToken: outToken,
      numerator: currentPrice.mul(new decimal_default(10 ** (20 + outToken.decimals))).toFixed(0)
    });
    const _executionPrice = new Price({
      baseToken,
      denominator: new import_bn16.default(10).pow(new import_bn16.default(20 + baseToken.decimals)),
      quoteToken: outToken,
      numerator: executionPrice.mul(new decimal_default(10 ** (20 + outToken.decimals))).toFixed(0)
    });
    const _fee = new TokenAmount(baseToken, fee);
    return {
      allTrade,
      realAmountIn,
      amountOut,
      minAmountOut,
      expirationTime,
      currentPrice: _currentPrice,
      executionPrice: _executionPrice,
      priceImpact,
      fee: _fee,
      remainingAccounts,
      executionPriceX64
    };
  }
  static computeAmountIn({
    poolInfo,
    tickArrayCache,
    baseMint,
    epochInfo,
    amountOut,
    slippage,
    priceLimit = new decimal_default(0)
  }) {
    const isBaseIn = baseMint.toBase58() === poolInfo.mintA.address;
    const feeConfigs = {
      [poolInfo.mintA.address]: poolInfo.mintA.extensions.feeConfig,
      [poolInfo.mintB.address]: poolInfo.mintB.extensions.feeConfig
    };
    let sqrtPriceLimitX64;
    if (priceLimit.equals(new decimal_default(0))) {
      sqrtPriceLimitX64 = !isBaseIn ? MIN_SQRT_PRICE_X64.add(new import_bn16.default(1)) : MAX_SQRT_PRICE_X64.sub(new import_bn16.default(1));
    } else {
      sqrtPriceLimitX64 = SqrtPriceMath.priceToSqrtPriceX64(priceLimit, poolInfo.mintA.decimals, poolInfo.mintB.decimals);
    }
    const realAmountOut = getTransferAmountFeeV2(amountOut, feeConfigs[baseMint.toString()], epochInfo, true);
    const {
      expectedAmountIn: _expectedAmountIn,
      remainingAccounts,
      executionPrice: _executionPriceX64,
      feeAmount
    } = PoolUtils.getInputAmountAndRemainAccounts(poolInfo, tickArrayCache, baseMint, realAmountOut.amount.sub(realAmountOut.fee ?? ZERO), sqrtPriceLimitX64);
    const inMint = isBaseIn ? poolInfo.mintB.address : poolInfo.mintA.address;
    const amountIn = getTransferAmountFeeV2(_expectedAmountIn, feeConfigs[inMint], epochInfo, false);
    const _executionPrice = SqrtPriceMath.sqrtPriceX64ToPrice(_executionPriceX64, poolInfo.mintA.decimals, poolInfo.mintB.decimals);
    const executionPrice = isBaseIn ? _executionPrice : new decimal_default(1).div(_executionPrice);
    const _maxAmountIn = _expectedAmountIn.mul(new import_bn16.default(Math.floor((1 + slippage) * 1e10))).div(new import_bn16.default(1e10));
    const maxAmountIn = getTransferAmountFeeV2(_maxAmountIn, feeConfigs[inMint], epochInfo, true);
    const poolPrice = isBaseIn ? poolInfo.currentPrice : new decimal_default(1).div(poolInfo.currentPrice);
    const _numerator = new decimal_default(executionPrice).sub(poolPrice).abs();
    const _denominator = poolPrice;
    const priceImpact = new Percent(new decimal_default(_numerator).mul(10 ** 15).toFixed(0), new decimal_default(_denominator).mul(10 ** 15).toFixed(0));
    return {
      amountIn,
      maxAmountIn,
      realAmountOut,
      expirationTime: minExpirationTime(amountIn.expirationTime, realAmountOut.expirationTime),
      currentPrice: poolInfo.currentPrice,
      executionPrice,
      priceImpact,
      fee: feeAmount,
      remainingAccounts
    };
  }
  static estimateAprsForPriceRangeMultiplier({
    poolInfo,
    aprType,
    positionTickLowerIndex,
    positionTickUpperIndex
  }) {
    const aprInfo = poolInfo[aprType];
    const priceLower = TickUtils.getTickPrice({
      poolInfo,
      tick: positionTickLowerIndex,
      baseIn: true
    }).price.toNumber();
    const priceUpper = TickUtils.getTickPrice({
      poolInfo,
      tick: positionTickUpperIndex,
      baseIn: true
    }).price.toNumber();
    const _minPrice = Math.max(priceLower, aprInfo.priceMin);
    const _maxPrice = Math.min(priceUpper, aprInfo.priceMax);
    const sub2 = _maxPrice - _minPrice;
    const userRange = priceUpper - priceLower;
    const tradeRange = aprInfo.priceMax - aprInfo.priceMin;
    let p;
    if (sub2 <= 0)
      p = 0;
    else if (userRange === sub2)
      p = tradeRange / sub2;
    else if (tradeRange === sub2)
      p = sub2 / userRange;
    else
      p = sub2 / tradeRange * (sub2 / userRange);
    return {
      feeApr: aprInfo.feeApr * p,
      rewardsApr: [(aprInfo.rewardApr[0] ?? 0) * p, (aprInfo.rewardApr[1] ?? 0) * p, (aprInfo.rewardApr[2] ?? 0) * p],
      apr: aprInfo.apr * p
    };
  }
  static estimateAprsForPriceRangeDelta({
    poolInfo,
    poolLiquidity,
    aprType,
    mintPrice,
    liquidity,
    positionTickLowerIndex,
    positionTickUpperIndex,
    chainTime
  }) {
    const aprTypeDay = aprType === "day" ? 1 : aprType === "week" ? 7 : aprType === "month" ? 30 : 0;
    const aprInfo = poolInfo[aprType];
    const mintPriceA = mintPrice[solToWSol(poolInfo.mintA.address).toString()];
    const mintPriceB = mintPrice[solToWSol(poolInfo.mintB.address).toString()];
    const mintDecimalsA = poolInfo.mintA.decimals;
    const mintDecimalsB = poolInfo.mintB.decimals;
    if (!aprInfo || !mintPriceA || !mintPriceB)
      return { feeApr: 0, rewardsApr: [0, 0, 0], apr: 0 };
    const sqrtPriceX64 = SqrtPriceMath.priceToSqrtPriceX64(new decimal_default(poolInfo.price), poolInfo.mintA.decimals, poolInfo.mintB.decimals);
    const sqrtPriceX64A = SqrtPriceMath.getSqrtPriceX64FromTick(positionTickLowerIndex);
    const sqrtPriceX64B = SqrtPriceMath.getSqrtPriceX64FromTick(positionTickUpperIndex);
    const { amountSlippageA: poolLiquidityA, amountSlippageB: poolLiquidityB } = LiquidityMath.getAmountsFromLiquidityWithSlippage(sqrtPriceX64, sqrtPriceX64A, sqrtPriceX64B, poolLiquidity, false, false, 0);
    const { amountSlippageA: userLiquidityA, amountSlippageB: userLiquidityB } = LiquidityMath.getAmountsFromLiquidityWithSlippage(sqrtPriceX64, sqrtPriceX64A, sqrtPriceX64B, liquidity, false, false, 0);
    const poolTvl = new decimal_default(poolLiquidityA.toString()).div(new decimal_default(10).pow(mintDecimalsA)).mul(mintPriceA.value).add(new decimal_default(poolLiquidityB.toString()).div(new decimal_default(10).pow(mintDecimalsB)).mul(mintPriceB.value));
    const userTvl = new decimal_default(userLiquidityA.toString()).div(new decimal_default(10).pow(mintDecimalsA)).mul(mintPriceA.value).add(new decimal_default(userLiquidityB.toString()).div(new decimal_default(10).pow(mintDecimalsB)).mul(mintPriceB.value));
    const p = new decimal_default(1).div(poolTvl.add(userTvl));
    const feesPerYear = new decimal_default(aprInfo.volumeFee).mul(365).div(aprTypeDay);
    const feeApr = feesPerYear.mul(p).mul(100).toNumber();
    const SECONDS_PER_YEAR = 3600 * 24 * 365;
    const rewardsApr = poolInfo.rewardDefaultInfos.map((i) => {
      const iDecimal = i.mint.decimals;
      const iPrice = mintPrice[i.mint.address];
      if (chainTime < (i.startTime ?? 0) || chainTime > (i.endTime ?? 0) || !i.perSecond || !iPrice || iDecimal === void 0)
        return 0;
      return new decimal_default(iPrice.value).mul(new decimal_default(i.perSecond).mul(SECONDS_PER_YEAR)).div(new decimal_default(10).pow(iDecimal)).mul(p).mul(100).toNumber();
    });
    return {
      feeApr,
      rewardsApr,
      apr: feeApr + rewardsApr.reduce((a, b) => a + b, 0)
    };
  }
  static async getLiquidityAmountOutFromAmountIn({
    poolInfo,
    inputA,
    tickLower,
    tickUpper,
    amount,
    slippage,
    add: add2,
    epochInfo,
    amountHasFee
  }) {
    const sqrtPriceX64 = SqrtPriceMath.priceToSqrtPriceX64(new decimal_default(poolInfo.price), poolInfo.mintA.decimals, poolInfo.mintB.decimals);
    const sqrtPriceX64A = SqrtPriceMath.getSqrtPriceX64FromTick(tickLower);
    const sqrtPriceX64B = SqrtPriceMath.getSqrtPriceX64FromTick(tickUpper);
    const addFeeAmount = getTransferAmountFeeV2(amount, poolInfo[inputA ? "mintA" : "mintB"].extensions?.feeConfig, epochInfo, !amountHasFee);
    const _amount = new import_bn16.default(new decimal_default(addFeeAmount.amount.sub(addFeeAmount.fee ?? ZERO).toString()).toFixed(0));
    let liquidity;
    if (sqrtPriceX64.lte(sqrtPriceX64A)) {
      liquidity = inputA ? LiquidityMath.getLiquidityFromTokenAmountA(sqrtPriceX64A, sqrtPriceX64B, _amount, !add2) : new import_bn16.default(0);
    } else if (sqrtPriceX64.lte(sqrtPriceX64B)) {
      const liquidity0 = LiquidityMath.getLiquidityFromTokenAmountA(sqrtPriceX64, sqrtPriceX64B, _amount, !add2);
      const liquidity1 = LiquidityMath.getLiquidityFromTokenAmountB(sqrtPriceX64A, sqrtPriceX64, _amount);
      liquidity = inputA ? liquidity0 : liquidity1;
    } else {
      liquidity = inputA ? new import_bn16.default(0) : LiquidityMath.getLiquidityFromTokenAmountB(sqrtPriceX64A, sqrtPriceX64B, _amount);
    }
    const amountFromLiquidity = await PoolUtils.getAmountsFromLiquidity({
      epochInfo,
      poolInfo,
      tickLower,
      tickUpper,
      liquidity,
      slippage,
      add: add2
    });
    return {
      liquidity,
      amountA: inputA ? addFeeAmount : amountFromLiquidity.amountA,
      amountB: inputA ? amountFromLiquidity.amountB : addFeeAmount,
      amountSlippageA: inputA ? addFeeAmount : amountFromLiquidity.amountSlippageA,
      amountSlippageB: inputA ? amountFromLiquidity.amountSlippageB : addFeeAmount,
      expirationTime: amountFromLiquidity.expirationTime
    };
  }
  static async getAmountsFromLiquidity({
    epochInfo,
    poolInfo,
    tickLower,
    tickUpper,
    liquidity,
    slippage,
    add: add2
  }) {
    const sqrtPriceX64A = SqrtPriceMath.getSqrtPriceX64FromTick(tickLower);
    const sqrtPriceX64B = SqrtPriceMath.getSqrtPriceX64FromTick(tickUpper);
    const coefficientRe = add2 ? 1 + slippage : 1 - slippage;
    const amounts = LiquidityMath.getAmountsFromLiquidity(SqrtPriceMath.priceToSqrtPriceX64(new decimal_default(poolInfo.price), poolInfo.mintA.decimals, poolInfo.mintB.decimals), sqrtPriceX64A, sqrtPriceX64B, liquidity, add2);
    const [amountA, amountB] = [
      getTransferAmountFeeV2(amounts.amountA, poolInfo.mintA.extensions?.feeConfig, epochInfo, true),
      getTransferAmountFeeV2(amounts.amountB, poolInfo.mintB.extensions?.feeConfig, epochInfo, true)
    ];
    const [amountSlippageA, amountSlippageB] = [
      getTransferAmountFeeV2(amounts.amountA.muln(coefficientRe), poolInfo.mintA.extensions?.feeConfig, epochInfo, true),
      getTransferAmountFeeV2(amounts.amountB.muln(coefficientRe), poolInfo.mintB.extensions?.feeConfig, epochInfo, true)
    ];
    return {
      liquidity,
      amountA,
      amountB,
      amountSlippageA,
      amountSlippageB,
      expirationTime: minExpirationTime(amountA.expirationTime, amountB.expirationTime)
    };
  }
  static async fetchComputeMultipleClmmInfo({
    connection,
    poolList,
    rpcDataMap = {}
  }) {
    const fetchRpcList = poolList.filter((p) => !rpcDataMap[p.id]).map((p) => new import_web318.PublicKey(p.id));
    const rpcRes = await getMultipleAccountsInfo(connection, fetchRpcList);
    rpcRes.forEach((r, idx) => {
      if (!r)
        return;
      rpcDataMap[fetchRpcList[idx].toBase58()] = PoolInfoLayout.decode(r.data);
    });
    const pdaList = poolList.map((poolInfo) => getPdaExBitmapAccount(new import_web318.PublicKey(poolInfo.programId), new import_web318.PublicKey(poolInfo.id)).publicKey);
    const exBitData = await PoolUtils.fetchExBitmaps({
      connection,
      exBitmapAddress: pdaList,
      batchRequest: false
    });
    return poolList.reduce((acc, cur) => ({
      ...acc,
      [cur.id]: {
        ...rpcDataMap[cur.id],
        id: new import_web318.PublicKey(cur.id),
        version: 6,
        programId: new import_web318.PublicKey(cur.programId),
        mintA: cur.mintA,
        mintB: cur.mintB,
        ammConfig: {
          ...cur.config,
          id: new import_web318.PublicKey(cur.config.id),
          fundOwner: ""
        },
        currentPrice: new decimal_default(cur.price),
        exBitmapAccount: getPdaExBitmapAccount(new import_web318.PublicKey(cur.programId), new import_web318.PublicKey(cur.id)).publicKey,
        exBitmapInfo: exBitData[getPdaExBitmapAccount(new import_web318.PublicKey(cur.programId), new import_web318.PublicKey(cur.id)).publicKey.toBase58()],
        startTime: rpcDataMap[cur.id].startTime.toNumber(),
        rewardInfos: rpcDataMap[cur.id].rewardInfos
      }
    }), {});
  }
  static async fetchComputeClmmInfo({
    connection,
    poolInfo,
    rpcData
  }) {
    return (await this.fetchComputeMultipleClmmInfo({
      connection,
      rpcDataMap: rpcData ? { [poolInfo.id]: rpcData } : void 0,
      poolList: [poolInfo]
    }))[poolInfo.id];
  }
};
function getLiquidityFromAmounts({
  poolInfo,
  tickLower,
  tickUpper,
  amountA,
  amountB,
  slippage,
  add: add2,
  epochInfo,
  amountHasFee
}) {
  const [_tickLower, _tickUpper, _amountA, _amountB] = tickLower < tickUpper ? [tickLower, tickUpper, amountA, amountB] : [tickUpper, tickLower, amountB, amountA];
  const sqrtPriceX64 = SqrtPriceMath.priceToSqrtPriceX64(new decimal_default(poolInfo.price), poolInfo.mintA.decimals, poolInfo.mintB.decimals);
  const sqrtPriceX64A = SqrtPriceMath.getSqrtPriceX64FromTick(_tickLower);
  const sqrtPriceX64B = SqrtPriceMath.getSqrtPriceX64FromTick(_tickUpper);
  const [amountFeeA, amountFeeB] = [
    getTransferAmountFeeV2(_amountA, poolInfo.mintA.extensions?.feeConfig, epochInfo, !amountHasFee),
    getTransferAmountFeeV2(_amountB, poolInfo.mintB.extensions?.feeConfig, epochInfo, !amountHasFee)
  ];
  const liquidity = LiquidityMath.getLiquidityFromTokenAmounts(sqrtPriceX64, sqrtPriceX64A, sqrtPriceX64B, amountFeeA.amount.sub(amountFeeA.fee ?? ZERO), amountFeeB.amount.sub(amountFeeB.fee ?? ZERO));
  return LiquidityMath.getAmountsOutFromLiquidity({
    poolInfo,
    tickLower,
    tickUpper,
    liquidity,
    slippage,
    add: add2,
    epochInfo,
    amountAddFee: !amountHasFee
  });
}
var mockRewardData = {
  volume: 0,
  volumeQuote: 0,
  volumeFee: 0,
  apr: 0,
  feeApr: 0,
  priceMin: 0,
  priceMax: 0,
  rewardApr: []
};
function clmmComputeInfoToApiInfo(pool) {
  return {
    ...pool,
    type: "Concentrated",
    programId: pool.programId.toString(),
    id: pool.id.toString(),
    rewardDefaultInfos: [],
    rewardDefaultPoolInfos: "Clmm",
    price: pool.currentPrice.toNumber(),
    mintAmountA: 0,
    mintAmountB: 0,
    feeRate: pool.ammConfig.tradeFeeRate,
    openTime: pool.startTime.toString(),
    tvl: 0,
    day: mockRewardData,
    week: mockRewardData,
    month: mockRewardData,
    pooltype: [],
    farmUpcomingCount: 0,
    farmOngoingCount: 0,
    farmFinishedCount: 0,
    burnPercent: 0,
    config: {
      ...pool.ammConfig,
      id: pool.ammConfig.id.toString(),
      defaultRange: 0,
      defaultRangePoint: []
    }
  };
}

// src/raydium/clmm/utils/math.ts
var MathUtil = class {
  static mulDivRoundingUp(a, b, denominator) {
    const numerator = a.mul(b);
    let result = numerator.div(denominator);
    if (!numerator.mod(denominator).eq(ZERO)) {
      result = result.add(ONE);
    }
    return result;
  }
  static mulDivFloor(a, b, denominator) {
    if (denominator.eq(ZERO)) {
      throw new Error("division by 0");
    }
    return a.mul(b).div(denominator);
  }
  static mulDivCeil(a, b, denominator) {
    if (denominator.eq(ZERO)) {
      throw new Error("division by 0");
    }
    const numerator = a.mul(b).add(denominator.sub(ONE));
    return numerator.div(denominator);
  }
  static x64ToDecimal(num, decimalPlaces) {
    return new decimal_default(num.toString()).div(decimal_default.pow(2, 64)).toDecimalPlaces(decimalPlaces);
  }
  static decimalToX64(num) {
    return new import_bn17.default(num.mul(decimal_default.pow(2, 64)).floor().toFixed());
  }
  static wrappingSubU128(n0, n1) {
    return n0.add(Q128).sub(n1).mod(Q128);
  }
};
function mulRightShift(val, mulBy) {
  return signedRightShift(val.mul(mulBy), 64, 256);
}
function signedLeftShift(n0, shiftBy, bitWidth) {
  const twosN0 = n0.toTwos(bitWidth).shln(shiftBy);
  twosN0.imaskn(bitWidth + 1);
  return twosN0.fromTwos(bitWidth);
}
function signedRightShift(n0, shiftBy, bitWidth) {
  const twoN0 = n0.toTwos(bitWidth).shrn(shiftBy);
  twoN0.imaskn(bitWidth - shiftBy + 1);
  return twoN0.fromTwos(bitWidth - shiftBy);
}
var SqrtPriceMath = class {
  static sqrtPriceX64ToPrice(sqrtPriceX64, decimalsA, decimalsB) {
    return MathUtil.x64ToDecimal(sqrtPriceX64).pow(2).mul(decimal_default.pow(10, decimalsA - decimalsB));
  }
  static priceToSqrtPriceX64(price, decimalsA, decimalsB) {
    return MathUtil.decimalToX64(price.mul(decimal_default.pow(10, decimalsB - decimalsA)).sqrt());
  }
  static getNextSqrtPriceX64FromInput(sqrtPriceX64, liquidity, amountIn, zeroForOne) {
    if (!sqrtPriceX64.gt(ZERO)) {
      throw new Error("sqrtPriceX64 must greater than 0");
    }
    if (!liquidity.gt(ZERO)) {
      throw new Error("liquidity must greater than 0");
    }
    return zeroForOne ? this.getNextSqrtPriceFromTokenAmountARoundingUp(sqrtPriceX64, liquidity, amountIn, true) : this.getNextSqrtPriceFromTokenAmountBRoundingDown(sqrtPriceX64, liquidity, amountIn, true);
  }
  static getNextSqrtPriceX64FromOutput(sqrtPriceX64, liquidity, amountOut, zeroForOne) {
    if (!sqrtPriceX64.gt(ZERO)) {
      throw new Error("sqrtPriceX64 must greater than 0");
    }
    if (!liquidity.gt(ZERO)) {
      throw new Error("liquidity must greater than 0");
    }
    return zeroForOne ? this.getNextSqrtPriceFromTokenAmountBRoundingDown(sqrtPriceX64, liquidity, amountOut, false) : this.getNextSqrtPriceFromTokenAmountARoundingUp(sqrtPriceX64, liquidity, amountOut, false);
  }
  static getNextSqrtPriceFromTokenAmountARoundingUp(sqrtPriceX64, liquidity, amount, add2) {
    if (amount.eq(ZERO))
      return sqrtPriceX64;
    const liquidityLeftShift = liquidity.shln(U64Resolution);
    if (add2) {
      const numerator1 = liquidityLeftShift;
      const denominator = liquidityLeftShift.add(amount.mul(sqrtPriceX64));
      if (denominator.gte(numerator1)) {
        return MathUtil.mulDivCeil(numerator1, sqrtPriceX64, denominator);
      }
      return MathUtil.mulDivRoundingUp(numerator1, ONE, numerator1.div(sqrtPriceX64).add(amount));
    } else {
      const amountMulSqrtPrice = amount.mul(sqrtPriceX64);
      if (!liquidityLeftShift.gt(amountMulSqrtPrice)) {
        throw new Error("getNextSqrtPriceFromTokenAmountARoundingUp,liquidityLeftShift must gt amountMulSqrtPrice");
      }
      const denominator = liquidityLeftShift.sub(amountMulSqrtPrice);
      return MathUtil.mulDivCeil(liquidityLeftShift, sqrtPriceX64, denominator);
    }
  }
  static getNextSqrtPriceFromTokenAmountBRoundingDown(sqrtPriceX64, liquidity, amount, add2) {
    const deltaY = amount.shln(U64Resolution);
    if (add2) {
      return sqrtPriceX64.add(deltaY.div(liquidity));
    } else {
      const amountDivLiquidity = MathUtil.mulDivRoundingUp(deltaY, ONE, liquidity);
      if (!sqrtPriceX64.gt(amountDivLiquidity)) {
        throw new Error("getNextSqrtPriceFromTokenAmountBRoundingDown sqrtPriceX64 must gt amountDivLiquidity");
      }
      return sqrtPriceX64.sub(amountDivLiquidity);
    }
  }
  static getSqrtPriceX64FromTick(tick) {
    if (!Number.isInteger(tick)) {
      throw new Error("tick must be integer");
    }
    if (tick < MIN_TICK || tick > MAX_TICK) {
      throw new Error("tick must be in MIN_TICK and MAX_TICK");
    }
    const tickAbs = tick < 0 ? tick * -1 : tick;
    let ratio = (tickAbs & 1) != 0 ? new import_bn17.default("18445821805675395072") : new import_bn17.default("18446744073709551616");
    if ((tickAbs & 2) != 0)
      ratio = mulRightShift(ratio, new import_bn17.default("18444899583751176192"));
    if ((tickAbs & 4) != 0)
      ratio = mulRightShift(ratio, new import_bn17.default("18443055278223355904"));
    if ((tickAbs & 8) != 0)
      ratio = mulRightShift(ratio, new import_bn17.default("18439367220385607680"));
    if ((tickAbs & 16) != 0)
      ratio = mulRightShift(ratio, new import_bn17.default("18431993317065453568"));
    if ((tickAbs & 32) != 0)
      ratio = mulRightShift(ratio, new import_bn17.default("18417254355718170624"));
    if ((tickAbs & 64) != 0)
      ratio = mulRightShift(ratio, new import_bn17.default("18387811781193609216"));
    if ((tickAbs & 128) != 0)
      ratio = mulRightShift(ratio, new import_bn17.default("18329067761203558400"));
    if ((tickAbs & 256) != 0)
      ratio = mulRightShift(ratio, new import_bn17.default("18212142134806163456"));
    if ((tickAbs & 512) != 0)
      ratio = mulRightShift(ratio, new import_bn17.default("17980523815641700352"));
    if ((tickAbs & 1024) != 0)
      ratio = mulRightShift(ratio, new import_bn17.default("17526086738831433728"));
    if ((tickAbs & 2048) != 0)
      ratio = mulRightShift(ratio, new import_bn17.default("16651378430235570176"));
    if ((tickAbs & 4096) != 0)
      ratio = mulRightShift(ratio, new import_bn17.default("15030750278694412288"));
    if ((tickAbs & 8192) != 0)
      ratio = mulRightShift(ratio, new import_bn17.default("12247334978884435968"));
    if ((tickAbs & 16384) != 0)
      ratio = mulRightShift(ratio, new import_bn17.default("8131365268886854656"));
    if ((tickAbs & 32768) != 0)
      ratio = mulRightShift(ratio, new import_bn17.default("3584323654725218816"));
    if ((tickAbs & 65536) != 0)
      ratio = mulRightShift(ratio, new import_bn17.default("696457651848324352"));
    if ((tickAbs & 131072) != 0)
      ratio = mulRightShift(ratio, new import_bn17.default("26294789957507116"));
    if ((tickAbs & 262144) != 0)
      ratio = mulRightShift(ratio, new import_bn17.default("37481735321082"));
    if (tick > 0)
      ratio = MaxUint128.div(ratio);
    return ratio;
  }
  static getTickFromPrice(price, decimalsA, decimalsB) {
    return SqrtPriceMath.getTickFromSqrtPriceX64(SqrtPriceMath.priceToSqrtPriceX64(price, decimalsA, decimalsB));
  }
  static getTickFromSqrtPriceX64(sqrtPriceX64) {
    if (sqrtPriceX64.gt(MAX_SQRT_PRICE_X64) || sqrtPriceX64.lt(MIN_SQRT_PRICE_X64)) {
      throw new Error("Provided sqrtPrice is not within the supported sqrtPrice range.");
    }
    const msb = sqrtPriceX64.bitLength() - 1;
    const adjustedMsb = new import_bn17.default(msb - 64);
    const log2pIntegerX32 = signedLeftShift(adjustedMsb, 32, 128);
    let bit = new import_bn17.default("8000000000000000", "hex");
    let precision = 0;
    let log2pFractionX64 = new import_bn17.default(0);
    let r = msb >= 64 ? sqrtPriceX64.shrn(msb - 63) : sqrtPriceX64.shln(63 - msb);
    while (bit.gt(new import_bn17.default(0)) && precision < BIT_PRECISION) {
      r = r.mul(r);
      const rMoreThanTwo = r.shrn(127);
      r = r.shrn(63 + rMoreThanTwo.toNumber());
      log2pFractionX64 = log2pFractionX64.add(bit.mul(rMoreThanTwo));
      bit = bit.shrn(1);
      precision += 1;
    }
    const log2pFractionX32 = log2pFractionX64.shrn(32);
    const log2pX32 = log2pIntegerX32.add(log2pFractionX32);
    const logbpX64 = log2pX32.mul(new import_bn17.default(LOG_B_2_X32));
    const tickLow = signedRightShift(logbpX64.sub(new import_bn17.default(LOG_B_P_ERR_MARGIN_LOWER_X64)), 64, 128).toNumber();
    const tickHigh = signedRightShift(logbpX64.add(new import_bn17.default(LOG_B_P_ERR_MARGIN_UPPER_X64)), 64, 128).toNumber();
    if (tickLow == tickHigh) {
      return tickLow;
    } else {
      const derivedTickHighSqrtPriceX64 = SqrtPriceMath.getSqrtPriceX64FromTick(tickHigh);
      return derivedTickHighSqrtPriceX64.lte(sqrtPriceX64) ? tickHigh : tickLow;
    }
  }
};
var TickMath = class {
  static getTickWithPriceAndTickspacing(price, tickSpacing, mintDecimalsA, mintDecimalsB) {
    const tick = SqrtPriceMath.getTickFromSqrtPriceX64(SqrtPriceMath.priceToSqrtPriceX64(price, mintDecimalsA, mintDecimalsB));
    let result = tick / tickSpacing;
    if (result < 0) {
      result = Math.floor(result);
    } else {
      result = Math.ceil(result);
    }
    return result * tickSpacing;
  }
  static roundPriceWithTickspacing(price, tickSpacing, mintDecimalsA, mintDecimalsB) {
    const tick = TickMath.getTickWithPriceAndTickspacing(price, tickSpacing, mintDecimalsA, mintDecimalsB);
    const sqrtPriceX64 = SqrtPriceMath.getSqrtPriceX64FromTick(tick);
    return SqrtPriceMath.sqrtPriceX64ToPrice(sqrtPriceX64, mintDecimalsA, mintDecimalsB);
  }
};
var LiquidityMath = class {
  static addDelta(x, y) {
    return x.add(y);
  }
  static getTokenAmountAFromLiquidity(sqrtPriceX64A, sqrtPriceX64B, liquidity, roundUp) {
    if (sqrtPriceX64A.gt(sqrtPriceX64B)) {
      [sqrtPriceX64A, sqrtPriceX64B] = [sqrtPriceX64B, sqrtPriceX64A];
    }
    if (!sqrtPriceX64A.gt(ZERO)) {
      throw new Error("sqrtPriceX64A must greater than 0");
    }
    const numerator1 = liquidity.ushln(U64Resolution);
    const numerator2 = sqrtPriceX64B.sub(sqrtPriceX64A);
    return roundUp ? MathUtil.mulDivRoundingUp(MathUtil.mulDivCeil(numerator1, numerator2, sqrtPriceX64B), ONE, sqrtPriceX64A) : MathUtil.mulDivFloor(numerator1, numerator2, sqrtPriceX64B).div(sqrtPriceX64A);
  }
  static getTokenAmountBFromLiquidity(sqrtPriceX64A, sqrtPriceX64B, liquidity, roundUp) {
    if (sqrtPriceX64A.gt(sqrtPriceX64B)) {
      [sqrtPriceX64A, sqrtPriceX64B] = [sqrtPriceX64B, sqrtPriceX64A];
    }
    if (!sqrtPriceX64A.gt(ZERO)) {
      throw new Error("sqrtPriceX64A must greater than 0");
    }
    return roundUp ? MathUtil.mulDivCeil(liquidity, sqrtPriceX64B.sub(sqrtPriceX64A), Q64) : MathUtil.mulDivFloor(liquidity, sqrtPriceX64B.sub(sqrtPriceX64A), Q64);
  }
  static getLiquidityFromTokenAmountA(sqrtPriceX64A, sqrtPriceX64B, amountA, roundUp) {
    if (sqrtPriceX64A.gt(sqrtPriceX64B)) {
      [sqrtPriceX64A, sqrtPriceX64B] = [sqrtPriceX64B, sqrtPriceX64A];
    }
    const numerator = amountA.mul(sqrtPriceX64A).mul(sqrtPriceX64B);
    const denominator = sqrtPriceX64B.sub(sqrtPriceX64A);
    const result = numerator.div(denominator);
    if (roundUp) {
      return MathUtil.mulDivRoundingUp(result, ONE, MaxU64);
    } else {
      return result.shrn(U64Resolution);
    }
  }
  static getLiquidityFromTokenAmountB(sqrtPriceX64A, sqrtPriceX64B, amountB) {
    if (sqrtPriceX64A.gt(sqrtPriceX64B)) {
      [sqrtPriceX64A, sqrtPriceX64B] = [sqrtPriceX64B, sqrtPriceX64A];
    }
    return MathUtil.mulDivFloor(amountB, MaxU64, sqrtPriceX64B.sub(sqrtPriceX64A));
  }
  static getLiquidityFromTokenAmounts(sqrtPriceCurrentX64, sqrtPriceX64A, sqrtPriceX64B, amountA, amountB) {
    if (sqrtPriceX64A.gt(sqrtPriceX64B)) {
      [sqrtPriceX64A, sqrtPriceX64B] = [sqrtPriceX64B, sqrtPriceX64A];
    }
    if (sqrtPriceCurrentX64.lte(sqrtPriceX64A)) {
      return LiquidityMath.getLiquidityFromTokenAmountA(sqrtPriceX64A, sqrtPriceX64B, amountA, false);
    } else if (sqrtPriceCurrentX64.lt(sqrtPriceX64B)) {
      const liquidity0 = LiquidityMath.getLiquidityFromTokenAmountA(sqrtPriceCurrentX64, sqrtPriceX64B, amountA, false);
      const liquidity1 = LiquidityMath.getLiquidityFromTokenAmountB(sqrtPriceX64A, sqrtPriceCurrentX64, amountB);
      return liquidity0.lt(liquidity1) ? liquidity0 : liquidity1;
    } else {
      return LiquidityMath.getLiquidityFromTokenAmountB(sqrtPriceX64A, sqrtPriceX64B, amountB);
    }
  }
  static getAmountsFromLiquidity(sqrtPriceCurrentX64, sqrtPriceX64A, sqrtPriceX64B, liquidity, roundUp) {
    if (sqrtPriceX64A.gt(sqrtPriceX64B)) {
      [sqrtPriceX64A, sqrtPriceX64B] = [sqrtPriceX64B, sqrtPriceX64A];
    }
    if (sqrtPriceCurrentX64.lte(sqrtPriceX64A)) {
      return {
        amountA: LiquidityMath.getTokenAmountAFromLiquidity(sqrtPriceX64A, sqrtPriceX64B, liquidity, roundUp),
        amountB: new import_bn17.default(0)
      };
    } else if (sqrtPriceCurrentX64.lt(sqrtPriceX64B)) {
      const amountA = LiquidityMath.getTokenAmountAFromLiquidity(sqrtPriceCurrentX64, sqrtPriceX64B, liquidity, roundUp);
      const amountB = LiquidityMath.getTokenAmountBFromLiquidity(sqrtPriceX64A, sqrtPriceCurrentX64, liquidity, roundUp);
      return { amountA, amountB };
    } else {
      return {
        amountA: new import_bn17.default(0),
        amountB: LiquidityMath.getTokenAmountBFromLiquidity(sqrtPriceX64A, sqrtPriceX64B, liquidity, roundUp)
      };
    }
  }
  static getAmountsFromLiquidityWithSlippage(sqrtPriceCurrentX64, sqrtPriceX64A, sqrtPriceX64B, liquidity, amountMax, roundUp, amountSlippage) {
    const { amountA, amountB } = LiquidityMath.getAmountsFromLiquidity(sqrtPriceCurrentX64, sqrtPriceX64A, sqrtPriceX64B, liquidity, roundUp);
    const coefficient = amountMax ? 1 + amountSlippage : 1 - amountSlippage;
    const amount0Slippage = new import_bn17.default(new decimal_default(amountA.toString()).mul(coefficient).toFixed(0));
    const amount1Slippage = new import_bn17.default(new decimal_default(amountB.toString()).mul(coefficient).toFixed(0));
    return {
      amountSlippageA: amount0Slippage,
      amountSlippageB: amount1Slippage
    };
  }
  static getAmountsOutFromLiquidity({
    poolInfo,
    tickLower,
    tickUpper,
    liquidity,
    slippage,
    add: add2,
    epochInfo,
    amountAddFee
  }) {
    const sqrtPriceX64 = SqrtPriceMath.priceToSqrtPriceX64(new decimal_default(poolInfo.price), poolInfo.mintA.decimals, poolInfo.mintB.decimals);
    const sqrtPriceX64A = SqrtPriceMath.getSqrtPriceX64FromTick(tickLower);
    const sqrtPriceX64B = SqrtPriceMath.getSqrtPriceX64FromTick(tickUpper);
    const coefficientRe = add2 ? 1 + slippage : 1 - slippage;
    const amounts = LiquidityMath.getAmountsFromLiquidity(sqrtPriceX64, sqrtPriceX64A, sqrtPriceX64B, liquidity, add2);
    const [amountA, amountB] = [
      getTransferAmountFeeV2(amounts.amountA, poolInfo.mintA.extensions?.feeConfig, epochInfo, amountAddFee),
      getTransferAmountFeeV2(amounts.amountB, poolInfo.mintB.extensions?.feeConfig, epochInfo, amountAddFee)
    ];
    const [amountSlippageA, amountSlippageB] = [
      getTransferAmountFeeV2(new import_bn17.default(new decimal_default(amounts.amountA.toString()).mul(coefficientRe).toFixed(0)), poolInfo.mintA.extensions?.feeConfig, epochInfo, amountAddFee),
      getTransferAmountFeeV2(new import_bn17.default(new decimal_default(amounts.amountB.toString()).mul(coefficientRe).toFixed(0)), poolInfo.mintB.extensions?.feeConfig, epochInfo, amountAddFee)
    ];
    return {
      liquidity,
      amountA,
      amountB,
      amountSlippageA,
      amountSlippageB,
      expirationTime: minExpirationTime(amountA.expirationTime, amountB.expirationTime)
    };
  }
};
var SwapMath = class {
  static swapCompute(programId, poolId, tickArrayCache, tickArrayBitmap, tickarrayBitmapExtension, zeroForOne, fee, liquidity, currentTick, tickSpacing, currentSqrtPriceX64, amountSpecified, lastSavedTickArrayStartIndex, sqrtPriceLimitX64, catchLiquidityInsufficient = false) {
    if (amountSpecified.eq(ZERO)) {
      throw new Error("amountSpecified must not be 0");
    }
    if (!sqrtPriceLimitX64)
      sqrtPriceLimitX64 = zeroForOne ? MIN_SQRT_PRICE_X64.add(ONE) : MAX_SQRT_PRICE_X64.sub(ONE);
    if (zeroForOne) {
      if (sqrtPriceLimitX64.lt(MIN_SQRT_PRICE_X64)) {
        throw new Error("sqrtPriceX64 must greater than MIN_SQRT_PRICE_X64");
      }
      if (sqrtPriceLimitX64.gte(currentSqrtPriceX64)) {
        throw new Error("sqrtPriceX64 must smaller than current");
      }
    } else {
      if (sqrtPriceLimitX64.gt(MAX_SQRT_PRICE_X64)) {
        throw new Error("sqrtPriceX64 must smaller than MAX_SQRT_PRICE_X64");
      }
      if (sqrtPriceLimitX64.lte(currentSqrtPriceX64)) {
        throw new Error("sqrtPriceX64 must greater than current");
      }
    }
    const baseInput = amountSpecified.gt(ZERO);
    const state = {
      amountSpecifiedRemaining: amountSpecified,
      amountCalculated: ZERO,
      sqrtPriceX64: currentSqrtPriceX64,
      tick: currentTick > lastSavedTickArrayStartIndex ? Math.min(lastSavedTickArrayStartIndex + TickQuery.tickCount(tickSpacing) - 1, currentTick) : lastSavedTickArrayStartIndex,
      accounts: [],
      liquidity,
      feeAmount: new import_bn17.default(0)
    };
    let tickAarrayStartIndex = lastSavedTickArrayStartIndex;
    let tickArrayCurrent = tickArrayCache[lastSavedTickArrayStartIndex];
    let loopCount = 0;
    let t = !zeroForOne && tickArrayCurrent.startTickIndex === state.tick;
    while (!state.amountSpecifiedRemaining.eq(ZERO) && !state.sqrtPriceX64.eq(sqrtPriceLimitX64)) {
      if (loopCount > 10) {
      }
      const step = {};
      step.sqrtPriceStartX64 = state.sqrtPriceX64;
      const tickState = TickUtils.nextInitTick(tickArrayCurrent, state.tick, tickSpacing, zeroForOne, t);
      let nextInitTick = tickState ? tickState : null;
      let tickArrayAddress = null;
      if (!nextInitTick?.liquidityGross.gtn(0)) {
        const nextInitTickArrayIndex = PoolUtils.nextInitializedTickArrayStartIndex({
          tickCurrent: state.tick,
          tickSpacing,
          tickArrayBitmap,
          exBitmapInfo: tickarrayBitmapExtension
        }, tickAarrayStartIndex, zeroForOne);
        if (!nextInitTickArrayIndex.isExist) {
          if (catchLiquidityInsufficient) {
            return {
              allTrade: false,
              amountSpecifiedRemaining: state.amountSpecifiedRemaining,
              amountCalculated: state.amountCalculated,
              feeAmount: state.feeAmount,
              sqrtPriceX64: state.sqrtPriceX64,
              liquidity: state.liquidity,
              tickCurrent: state.tick,
              accounts: state.accounts
            };
          }
          throw Error("swapCompute LiquidityInsufficient");
        }
        tickAarrayStartIndex = nextInitTickArrayIndex.nextStartIndex;
        const { publicKey: expectedNextTickArrayAddress } = getPdaTickArrayAddress(programId, poolId, tickAarrayStartIndex);
        tickArrayAddress = expectedNextTickArrayAddress;
        tickArrayCurrent = tickArrayCache[tickAarrayStartIndex];
        try {
          nextInitTick = TickUtils.firstInitializedTick(tickArrayCurrent, zeroForOne);
        } catch (e) {
          throw Error("not found next tick info");
        }
      }
      step.tickNext = nextInitTick.tick;
      step.initialized = nextInitTick.liquidityGross.gtn(0);
      if (lastSavedTickArrayStartIndex !== tickAarrayStartIndex && tickArrayAddress) {
        state.accounts.push(tickArrayAddress);
        lastSavedTickArrayStartIndex = tickAarrayStartIndex;
      }
      if (step.tickNext < MIN_TICK) {
        step.tickNext = MIN_TICK;
      } else if (step.tickNext > MAX_TICK) {
        step.tickNext = MAX_TICK;
      }
      step.sqrtPriceNextX64 = SqrtPriceMath.getSqrtPriceX64FromTick(step.tickNext);
      let targetPrice;
      if (zeroForOne && step.sqrtPriceNextX64.lt(sqrtPriceLimitX64) || !zeroForOne && step.sqrtPriceNextX64.gt(sqrtPriceLimitX64)) {
        targetPrice = sqrtPriceLimitX64;
      } else {
        targetPrice = step.sqrtPriceNextX64;
      }
      [state.sqrtPriceX64, step.amountIn, step.amountOut, step.feeAmount] = SwapMath.swapStepCompute(state.sqrtPriceX64, targetPrice, state.liquidity, state.amountSpecifiedRemaining, fee, zeroForOne);
      state.feeAmount = state.feeAmount.add(step.feeAmount);
      if (baseInput) {
        state.amountSpecifiedRemaining = state.amountSpecifiedRemaining.sub(step.amountIn.add(step.feeAmount));
        state.amountCalculated = state.amountCalculated.sub(step.amountOut);
      } else {
        state.amountSpecifiedRemaining = state.amountSpecifiedRemaining.add(step.amountOut);
        state.amountCalculated = state.amountCalculated.add(step.amountIn.add(step.feeAmount));
      }
      if (state.sqrtPriceX64.eq(step.sqrtPriceNextX64)) {
        if (step.initialized) {
          let liquidityNet = nextInitTick.liquidityNet;
          if (zeroForOne)
            liquidityNet = liquidityNet.mul(NEGATIVE_ONE);
          state.liquidity = LiquidityMath.addDelta(state.liquidity, liquidityNet);
        }
        t = step.tickNext != state.tick && !zeroForOne && tickArrayCurrent.startTickIndex === step.tickNext;
        state.tick = zeroForOne ? step.tickNext - 1 : step.tickNext;
      } else if (state.sqrtPriceX64 != step.sqrtPriceStartX64) {
        const _T = SqrtPriceMath.getTickFromSqrtPriceX64(state.sqrtPriceX64);
        t = _T != state.tick && !zeroForOne && tickArrayCurrent.startTickIndex === _T;
        state.tick = _T;
      }
      ++loopCount;
    }
    try {
      const { nextStartIndex: tickAarrayStartIndex2, isExist } = TickQuery.nextInitializedTickArray(state.tick, tickSpacing, zeroForOne, tickArrayBitmap, tickarrayBitmapExtension);
      if (isExist && lastSavedTickArrayStartIndex !== tickAarrayStartIndex2) {
        state.accounts.push(getPdaTickArrayAddress(programId, poolId, tickAarrayStartIndex2).publicKey);
        lastSavedTickArrayStartIndex = tickAarrayStartIndex2;
      }
    } catch (e) {
    }
    return {
      allTrade: true,
      amountSpecifiedRemaining: ZERO,
      amountCalculated: state.amountCalculated,
      feeAmount: state.feeAmount,
      sqrtPriceX64: state.sqrtPriceX64,
      liquidity: state.liquidity,
      tickCurrent: state.tick,
      accounts: state.accounts
    };
  }
  static swapStepCompute(sqrtPriceX64Current, sqrtPriceX64Target, liquidity, amountRemaining, feeRate, zeroForOne) {
    const swapStep = {
      sqrtPriceX64Next: new import_bn17.default(0),
      amountIn: new import_bn17.default(0),
      amountOut: new import_bn17.default(0),
      feeAmount: new import_bn17.default(0)
    };
    const baseInput = amountRemaining.gte(ZERO);
    if (baseInput) {
      const amountRemainingSubtractFee = MathUtil.mulDivFloor(amountRemaining, FEE_RATE_DENOMINATOR.sub(new import_bn17.default(feeRate.toString())), FEE_RATE_DENOMINATOR);
      swapStep.amountIn = zeroForOne ? LiquidityMath.getTokenAmountAFromLiquidity(sqrtPriceX64Target, sqrtPriceX64Current, liquidity, true) : LiquidityMath.getTokenAmountBFromLiquidity(sqrtPriceX64Current, sqrtPriceX64Target, liquidity, true);
      if (amountRemainingSubtractFee.gte(swapStep.amountIn)) {
        swapStep.sqrtPriceX64Next = sqrtPriceX64Target;
      } else {
        swapStep.sqrtPriceX64Next = SqrtPriceMath.getNextSqrtPriceX64FromInput(sqrtPriceX64Current, liquidity, amountRemainingSubtractFee, zeroForOne);
      }
    } else {
      swapStep.amountOut = zeroForOne ? LiquidityMath.getTokenAmountBFromLiquidity(sqrtPriceX64Target, sqrtPriceX64Current, liquidity, false) : LiquidityMath.getTokenAmountAFromLiquidity(sqrtPriceX64Current, sqrtPriceX64Target, liquidity, false);
      if (amountRemaining.mul(NEGATIVE_ONE).gte(swapStep.amountOut)) {
        swapStep.sqrtPriceX64Next = sqrtPriceX64Target;
      } else {
        swapStep.sqrtPriceX64Next = SqrtPriceMath.getNextSqrtPriceX64FromOutput(sqrtPriceX64Current, liquidity, amountRemaining.mul(NEGATIVE_ONE), zeroForOne);
      }
    }
    const reachTargetPrice = sqrtPriceX64Target.eq(swapStep.sqrtPriceX64Next);
    if (zeroForOne) {
      if (!(reachTargetPrice && baseInput)) {
        swapStep.amountIn = LiquidityMath.getTokenAmountAFromLiquidity(swapStep.sqrtPriceX64Next, sqrtPriceX64Current, liquidity, true);
      }
      if (!(reachTargetPrice && !baseInput)) {
        swapStep.amountOut = LiquidityMath.getTokenAmountBFromLiquidity(swapStep.sqrtPriceX64Next, sqrtPriceX64Current, liquidity, false);
      }
    } else {
      swapStep.amountIn = reachTargetPrice && baseInput ? swapStep.amountIn : LiquidityMath.getTokenAmountBFromLiquidity(sqrtPriceX64Current, swapStep.sqrtPriceX64Next, liquidity, true);
      swapStep.amountOut = reachTargetPrice && !baseInput ? swapStep.amountOut : LiquidityMath.getTokenAmountAFromLiquidity(sqrtPriceX64Current, swapStep.sqrtPriceX64Next, liquidity, false);
    }
    if (!baseInput && swapStep.amountOut.gt(amountRemaining.mul(NEGATIVE_ONE))) {
      swapStep.amountOut = amountRemaining.mul(NEGATIVE_ONE);
    }
    if (baseInput && !swapStep.sqrtPriceX64Next.eq(sqrtPriceX64Target)) {
      swapStep.feeAmount = amountRemaining.sub(swapStep.amountIn);
    } else {
      swapStep.feeAmount = MathUtil.mulDivCeil(swapStep.amountIn, new import_bn17.default(feeRate), FEE_RATE_DENOMINATOR.sub(new import_bn17.default(feeRate)));
    }
    return [swapStep.sqrtPriceX64Next, swapStep.amountIn, swapStep.amountOut, swapStep.feeAmount];
  }
};

// src/raydium/clmm/utils/tick.ts
var TICK_ARRAY_SIZE = 60;
var TICK_ARRAY_BITMAP_SIZE = 512;
var TickUtils = class {
  static getTickArrayAddressByTick(programId, poolId, tickIndex, tickSpacing) {
    const startIndex = TickUtils.getTickArrayStartIndexByTick(tickIndex, tickSpacing);
    const { publicKey: tickArrayAddress } = getPdaTickArrayAddress(programId, poolId, startIndex);
    return tickArrayAddress;
  }
  static getTickOffsetInArray(tickIndex, tickSpacing) {
    if (tickIndex % tickSpacing != 0) {
      throw new Error("tickIndex % tickSpacing not equal 0");
    }
    const startTickIndex = TickUtils.getTickArrayStartIndexByTick(tickIndex, tickSpacing);
    const offsetInArray = Math.floor((tickIndex - startTickIndex) / tickSpacing);
    if (offsetInArray < 0 || offsetInArray >= TICK_ARRAY_SIZE) {
      throw new Error("tick offset in array overflow");
    }
    return offsetInArray;
  }
  static getTickArrayBitIndex(tickIndex, tickSpacing) {
    const ticksInArray = TickQuery.tickCount(tickSpacing);
    let startIndex = tickIndex / ticksInArray;
    if (tickIndex < 0 && tickIndex % ticksInArray != 0) {
      startIndex = Math.ceil(startIndex) - 1;
    } else {
      startIndex = Math.floor(startIndex);
    }
    return startIndex;
  }
  static getTickArrayStartIndexByTick(tickIndex, tickSpacing) {
    return this.getTickArrayBitIndex(tickIndex, tickSpacing) * TickQuery.tickCount(tickSpacing);
  }
  static getTickArrayOffsetInBitmapByTick(tick, tickSpacing) {
    const multiplier = tickSpacing * TICK_ARRAY_SIZE;
    const compressed = Math.floor(tick / multiplier) + 512;
    return Math.abs(compressed);
  }
  static checkTickArrayIsInitialized(bitmap, tick, tickSpacing) {
    const multiplier = tickSpacing * TICK_ARRAY_SIZE;
    const compressed = Math.floor(tick / multiplier) + 512;
    const bitPos = Math.abs(compressed);
    return {
      isInitialized: bitmap.testn(bitPos),
      startIndex: (bitPos - 512) * multiplier
    };
  }
  static getNextTickArrayStartIndex(lastTickArrayStartIndex, tickSpacing, zeroForOne) {
    return zeroForOne ? lastTickArrayStartIndex - tickSpacing * TICK_ARRAY_SIZE : lastTickArrayStartIndex + tickSpacing * TICK_ARRAY_SIZE;
  }
  static mergeTickArrayBitmap(bns) {
    let b = new import_bn18.default(0);
    for (let i = 0; i < bns.length; i++) {
      b = b.add(bns[i].shln(64 * i));
    }
    return b;
  }
  static getInitializedTickArrayInRange(tickArrayBitmap, exTickArrayBitmap, tickSpacing, tickArrayStartIndex, expectedCount) {
    const tickArrayOffset = Math.floor(tickArrayStartIndex / (tickSpacing * TICK_ARRAY_SIZE));
    return [
      ...TickUtils.searchLowBitFromStart(tickArrayBitmap, exTickArrayBitmap, tickArrayOffset - 1, expectedCount, tickSpacing),
      ...TickUtils.searchHightBitFromStart(tickArrayBitmap, exTickArrayBitmap, tickArrayOffset, expectedCount, tickSpacing)
    ];
  }
  static getAllInitializedTickArrayStartIndex(tickArrayBitmap, exTickArrayBitmap, tickSpacing) {
    return TickUtils.searchHightBitFromStart(tickArrayBitmap, exTickArrayBitmap, -7680, TICK_ARRAY_BITMAP_SIZE, tickSpacing);
  }
  static getAllInitializedTickArrayInfo(programId, poolId, tickArrayBitmap, exTickArrayBitmap, tickSpacing) {
    const result = [];
    const allInitializedTickArrayIndex = TickUtils.getAllInitializedTickArrayStartIndex(tickArrayBitmap, exTickArrayBitmap, tickSpacing);
    for (const startIndex of allInitializedTickArrayIndex) {
      const { publicKey: address } = getPdaTickArrayAddress(programId, poolId, startIndex);
      result.push({
        tickArrayStartIndex: startIndex,
        tickArrayAddress: address
      });
    }
    return result;
  }
  static getAllInitializedTickInTickArray(tickArray) {
    return tickArray.ticks.filter((i) => i.liquidityGross.gtn(0));
  }
  static searchLowBitFromStart(tickArrayBitmap, exTickArrayBitmap, currentTickArrayBitStartIndex, expectedCount, tickSpacing) {
    const tickArrayBitmaps = [
      ...[...exTickArrayBitmap.negativeTickArrayBitmap].reverse(),
      tickArrayBitmap.slice(0, 8),
      tickArrayBitmap.slice(8, 16),
      ...exTickArrayBitmap.positiveTickArrayBitmap
    ].map((i) => TickUtils.mergeTickArrayBitmap(i));
    const result = [];
    while (currentTickArrayBitStartIndex >= -7680) {
      const arrayIndex = Math.floor((currentTickArrayBitStartIndex + 7680) / 512);
      const searchIndex = (currentTickArrayBitStartIndex + 7680) % 512;
      if (tickArrayBitmaps[arrayIndex].testn(searchIndex))
        result.push(currentTickArrayBitStartIndex);
      currentTickArrayBitStartIndex--;
      if (result.length === expectedCount)
        break;
    }
    const tickCount = TickQuery.tickCount(tickSpacing);
    return result.map((i) => i * tickCount);
  }
  static searchHightBitFromStart(tickArrayBitmap, exTickArrayBitmap, currentTickArrayBitStartIndex, expectedCount, tickSpacing) {
    const tickArrayBitmaps = [
      ...[...exTickArrayBitmap.negativeTickArrayBitmap].reverse(),
      tickArrayBitmap.slice(0, 8),
      tickArrayBitmap.slice(8, 16),
      ...exTickArrayBitmap.positiveTickArrayBitmap
    ].map((i) => TickUtils.mergeTickArrayBitmap(i));
    const result = [];
    while (currentTickArrayBitStartIndex < 7680) {
      const arrayIndex = Math.floor((currentTickArrayBitStartIndex + 7680) / 512);
      const searchIndex = (currentTickArrayBitStartIndex + 7680) % 512;
      if (tickArrayBitmaps[arrayIndex].testn(searchIndex))
        result.push(currentTickArrayBitStartIndex);
      currentTickArrayBitStartIndex++;
      if (result.length === expectedCount)
        break;
    }
    const tickCount = TickQuery.tickCount(tickSpacing);
    return result.map((i) => i * tickCount);
  }
  static checkIsOutOfBoundary(tick) {
    return tick < MIN_TICK || tick > MAX_TICK;
  }
  static nextInitTick(tickArrayCurrent, currentTickIndex, tickSpacing, zeroForOne, t) {
    const currentTickArrayStartIndex = TickQuery.getArrayStartIndex(currentTickIndex, tickSpacing);
    if (currentTickArrayStartIndex != tickArrayCurrent.startTickIndex) {
      return null;
    }
    let offsetInArray = Math.floor((currentTickIndex - tickArrayCurrent.startTickIndex) / tickSpacing);
    if (zeroForOne) {
      while (offsetInArray >= 0) {
        if (tickArrayCurrent.ticks[offsetInArray].liquidityGross.gtn(0)) {
          return tickArrayCurrent.ticks[offsetInArray];
        }
        offsetInArray = offsetInArray - 1;
      }
    } else {
      if (!t)
        offsetInArray = offsetInArray + 1;
      while (offsetInArray < TICK_ARRAY_SIZE) {
        if (tickArrayCurrent.ticks[offsetInArray].liquidityGross.gtn(0)) {
          return tickArrayCurrent.ticks[offsetInArray];
        }
        offsetInArray = offsetInArray + 1;
      }
    }
    return null;
  }
  static firstInitializedTick(tickArrayCurrent, zeroForOne) {
    if (zeroForOne) {
      let i = TICK_ARRAY_SIZE - 1;
      while (i >= 0) {
        if (tickArrayCurrent.ticks[i].liquidityGross.gtn(0)) {
          return tickArrayCurrent.ticks[i];
        }
        i = i - 1;
      }
    } else {
      let i = 0;
      while (i < TICK_ARRAY_SIZE) {
        if (tickArrayCurrent.ticks[i].liquidityGross.gtn(0)) {
          return tickArrayCurrent.ticks[i];
        }
        i = i + 1;
      }
    }
    throw Error(`firstInitializedTick check error: ${tickArrayCurrent} - ${zeroForOne}`);
  }
  static _getTickPriceLegacy({
    poolInfo,
    tick,
    baseIn
  }) {
    const tickSqrtPriceX64 = SqrtPriceMath.getSqrtPriceX64FromTick(tick);
    const tickPrice = SqrtPriceMath.sqrtPriceX64ToPrice(tickSqrtPriceX64, poolInfo.mintA.decimals, poolInfo.mintB.decimals);
    return baseIn ? { tick, price: tickPrice, tickSqrtPriceX64 } : { tick, price: new decimal_default(1).div(tickPrice), tickSqrtPriceX64 };
  }
  static _getPriceAndTickLegacy({
    poolInfo,
    price,
    baseIn
  }) {
    const _price = baseIn ? price : new decimal_default(1).div(price);
    const tick = TickMath.getTickWithPriceAndTickspacing(_price, poolInfo.ammConfig.tickSpacing, poolInfo.mintA.decimals, poolInfo.mintB.decimals);
    const tickSqrtPriceX64 = SqrtPriceMath.getSqrtPriceX64FromTick(tick);
    const tickPrice = SqrtPriceMath.sqrtPriceX64ToPrice(tickSqrtPriceX64, poolInfo.mintA.decimals, poolInfo.mintB.decimals);
    return baseIn ? { tick, price: tickPrice } : { tick, price: new decimal_default(1).div(tickPrice) };
  }
  static getTickPrice({
    poolInfo,
    tick,
    baseIn
  }) {
    const tickSqrtPriceX64 = SqrtPriceMath.getSqrtPriceX64FromTick(tick);
    const tickPrice = SqrtPriceMath.sqrtPriceX64ToPrice(tickSqrtPriceX64, poolInfo.mintA.decimals, poolInfo.mintB.decimals);
    return baseIn ? { tick, price: tickPrice, tickSqrtPriceX64 } : { tick, price: new decimal_default(1).div(tickPrice), tickSqrtPriceX64 };
  }
  static getPriceAndTick({
    poolInfo,
    price,
    baseIn
  }) {
    const _price = baseIn ? price : new decimal_default(1).div(price);
    const tick = TickMath.getTickWithPriceAndTickspacing(_price, poolInfo.config.tickSpacing, poolInfo.mintA.decimals, poolInfo.mintB.decimals);
    const tickSqrtPriceX64 = SqrtPriceMath.getSqrtPriceX64FromTick(tick);
    const tickPrice = SqrtPriceMath.sqrtPriceX64ToPrice(tickSqrtPriceX64, poolInfo.mintA.decimals, poolInfo.mintB.decimals);
    return baseIn ? { tick, price: tickPrice } : { tick, price: new decimal_default(1).div(tickPrice) };
  }
};

// src/raydium/clmm/layout.ts
var ClmmConfigLayout = struct([
  blob(8),
  u82("bump"),
  u16("index"),
  publicKey(""),
  u322("protocolFeeRate"),
  u322("tradeFeeRate"),
  u16("tickSpacing"),
  seq2(u64(), 8, "")
]);
var ObservationLayout = struct([u322("blockTimestamp"), i64("tickCumulative"), seq2(u64(), 4)]);
var ObservationInfoLayout = struct([
  blob(8),
  bool("initialized"),
  u64("recentEpoch"),
  u16("observationIndex"),
  publicKey("poolId"),
  seq2(ObservationLayout, 100, "observations"),
  seq2(u64(), 4)
]);
var RewardInfo = struct([
  u82("rewardState"),
  u64("openTime"),
  u64("endTime"),
  u64("lastUpdateTime"),
  u128("emissionsPerSecondX64"),
  u64("rewardTotalEmissioned"),
  u64("rewardClaimed"),
  publicKey("tokenMint"),
  publicKey("tokenVault"),
  publicKey("creator"),
  u128("rewardGrowthGlobalX64")
]);
var PoolInfoLayout = struct([
  blob(8),
  u82("bump"),
  publicKey("ammConfig"),
  publicKey("creator"),
  publicKey("mintA"),
  publicKey("mintB"),
  publicKey("vaultA"),
  publicKey("vaultB"),
  publicKey("observationId"),
  u82("mintDecimalsA"),
  u82("mintDecimalsB"),
  u16("tickSpacing"),
  u128("liquidity"),
  u128("sqrtPriceX64"),
  s32("tickCurrent"),
  u322(),
  u128("feeGrowthGlobalX64A"),
  u128("feeGrowthGlobalX64B"),
  u64("protocolFeesTokenA"),
  u64("protocolFeesTokenB"),
  u128("swapInAmountTokenA"),
  u128("swapOutAmountTokenB"),
  u128("swapInAmountTokenB"),
  u128("swapOutAmountTokenA"),
  u82("status"),
  seq2(u82(), 7, ""),
  seq2(RewardInfo, 3, "rewardInfos"),
  seq2(u64(), 16, "tickArrayBitmap"),
  u64("totalFeesTokenA"),
  u64("totalFeesClaimedTokenA"),
  u64("totalFeesTokenB"),
  u64("totalFeesClaimedTokenB"),
  u64("fundFeesTokenA"),
  u64("fundFeesTokenB"),
  u64("startTime"),
  seq2(u64(), 15 * 4 - 3, "padding")
]);
var PositionRewardInfoLayout = struct([u128("growthInsideLastX64"), u64("rewardAmountOwed")]);
var PositionInfoLayout = struct([
  blob(8),
  u82("bump"),
  publicKey("nftMint"),
  publicKey("poolId"),
  s32("tickLower"),
  s32("tickUpper"),
  u128("liquidity"),
  u128("feeGrowthInsideLastX64A"),
  u128("feeGrowthInsideLastX64B"),
  u64("tokenFeesOwedA"),
  u64("tokenFeesOwedB"),
  seq2(PositionRewardInfoLayout, 3, "rewardInfos"),
  seq2(u64(), 8, "")
]);
var ProtocolPositionLayout = struct([
  blob(8),
  u82("bump"),
  publicKey("poolId"),
  s32("tickLowerIndex"),
  s32("tickUpperIndex"),
  u128("liquidity"),
  u128("feeGrowthInsideLastX64A"),
  u128("feeGrowthInsideLastX64B"),
  u64("tokenFeesOwedA"),
  u64("tokenFeesOwedB"),
  seq2(u128(), 3, "rewardGrowthInside"),
  seq2(u64(), 8, "")
]);
var TickLayout = struct([
  s32("tick"),
  i128("liquidityNet"),
  u128("liquidityGross"),
  u128("feeGrowthOutsideX64A"),
  u128("feeGrowthOutsideX64B"),
  seq2(u128(), 3, "rewardGrowthsOutsideX64"),
  seq2(u322(), 13, "")
]);
var TickArrayLayout = struct([
  blob(8),
  publicKey("poolId"),
  s32("startTickIndex"),
  seq2(TickLayout, TICK_ARRAY_SIZE, "ticks"),
  u82("initializedTickCount"),
  seq2(u82(), 115, "")
]);
var OperationLayout = struct([blob(329), seq2(publicKey(), 100, "whitelistMints")]);
var TickArrayBitmapExtensionLayout = struct([
  blob(8),
  publicKey("poolId"),
  seq2(seq2(u64(), 8), EXTENSION_TICKARRAY_BITMAP_SIZE, "positiveTickArrayBitmap"),
  seq2(seq2(u64(), 8), EXTENSION_TICKARRAY_BITMAP_SIZE, "negativeTickArrayBitmap")
]);
var LockPositionLayout = struct([
  u64(),
  u82("bump"),
  publicKey("owner"),
  publicKey("poolId"),
  publicKey("positionId"),
  publicKey("nftAccount"),
  seq2(u64(), 8)
]);
var LockClPositionLayoutV2 = struct([
  blob(8),
  u82("bump"),
  publicKey("lockOwner"),
  publicKey("poolId"),
  publicKey("positionId"),
  publicKey("nftAccount"),
  publicKey("lockNftMint"),
  u64("recentEpoch"),
  seq2(u64(), 8)
]);

// src/raydium/clmm/instrument.ts
ObservationInfoLayout.span;
var logger11 = createLogger("Raydium_Clmm");
var anchorDataBuf2 = {
  createPool: [233, 146, 209, 142, 207, 104, 64, 188],
  initReward: [95, 135, 192, 196, 242, 129, 230, 68],
  setRewardEmissions: [112, 52, 167, 75, 32, 201, 211, 137],
  openPosition: [77, 184, 74, 214, 112, 86, 241, 199],
  openPositionWithTokenEx: [77, 255, 174, 82, 125, 29, 201, 46],
  closePosition: [123, 134, 81, 0, 49, 68, 98, 98],
  increaseLiquidity: [133, 29, 89, 223, 69, 238, 176, 10],
  decreaseLiquidity: [58, 127, 188, 62, 79, 82, 196, 96],
  swap: [43, 4, 237, 11, 26, 201, 30, 98],
  collectReward: [18, 237, 166, 197, 34, 16, 213, 144]
};
var lockInsDataBuf = [188, 37, 179, 131, 82, 150, 84, 73];
var lockHarvestInsDataBuf = [16, 72, 250, 198, 14, 162, 212, 19];
var ClmmInstrument = class {
  static createPoolInstruction(programId, poolId, poolCreator, ammConfigId, observationId, mintA, mintVaultA, mintProgramIdA, mintB, mintVaultB, mintProgramIdB, exTickArrayBitmap, sqrtPriceX64, extendMintAccount) {
    const dataLayout = struct([u128("sqrtPriceX64"), u64("zero")]);
    const keys = [
      { pubkey: poolCreator, isSigner: true, isWritable: true },
      { pubkey: ammConfigId, isSigner: false, isWritable: false },
      { pubkey: poolId, isSigner: false, isWritable: true },
      { pubkey: mintA, isSigner: false, isWritable: false },
      { pubkey: mintB, isSigner: false, isWritable: false },
      { pubkey: mintVaultA, isSigner: false, isWritable: true },
      { pubkey: mintVaultB, isSigner: false, isWritable: true },
      { pubkey: observationId, isSigner: false, isWritable: true },
      { pubkey: exTickArrayBitmap, isSigner: false, isWritable: true },
      { pubkey: mintProgramIdA, isSigner: false, isWritable: false },
      { pubkey: mintProgramIdB, isSigner: false, isWritable: false },
      { pubkey: import_web319.SystemProgram.programId, isSigner: false, isWritable: false },
      { pubkey: RENT_PROGRAM_ID, isSigner: false, isWritable: false },
      ...extendMintAccount?.map((k) => ({ pubkey: k, isSigner: false, isWritable: false })) || []
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
      sqrtPriceX64,
      zero: ZERO
    }, data);
    const aData = Buffer.from([...anchorDataBuf2.createPool, ...data]);
    return new import_web319.TransactionInstruction({
      keys,
      programId,
      data: aData
    });
  }
  static async createPoolInstructions(props) {
    const { programId, owner, mintA, mintB, ammConfigId, initialPriceX64, extendMintAccount } = props;
    const [mintAAddress, mintBAddress] = [new import_web319.PublicKey(mintA.address), new import_web319.PublicKey(mintB.address)];
    const { publicKey: poolId } = getPdaPoolId(programId, ammConfigId, mintAAddress, mintBAddress);
    const { publicKey: observationId } = getPdaObservationAccount(programId, poolId);
    const { publicKey: mintAVault } = getPdaPoolVaultId(programId, poolId, mintAAddress);
    const { publicKey: mintBVault } = getPdaPoolVaultId(programId, poolId, mintBAddress);
    const exBitmapAccount = getPdaExBitmapAccount(programId, poolId).publicKey;
    const ins = [
      this.createPoolInstruction(programId, poolId, owner, ammConfigId, observationId, mintAAddress, mintAVault, new import_web319.PublicKey(mintA.programId || import_spl_token13.TOKEN_PROGRAM_ID), mintBAddress, mintBVault, new import_web319.PublicKey(mintB.programId || import_spl_token13.TOKEN_PROGRAM_ID), exBitmapAccount, initialPriceX64, extendMintAccount)
    ];
    return {
      signers: [],
      instructions: ins,
      instructionTypes: [InstructionType.CreateAccount, InstructionType.ClmmCreatePool],
      address: { poolId, observationId, exBitmapAccount, mintAVault, mintBVault },
      lookupTableAddress: []
    };
  }
  static openPositionFromLiquidityInstruction(programId, payer, poolId, positionNftOwner, positionNftMint, positionNftAccount, metadataAccount, protocolPosition, tickArrayLower, tickArrayUpper, personalPosition, ownerTokenAccountA, ownerTokenAccountB, tokenVaultA, tokenVaultB, tokenMintA, tokenMintB, tickLowerIndex, tickUpperIndex, tickArrayLowerStartIndex, tickArrayUpperStartIndex, liquidity, amountMaxA, amountMaxB, withMetadata, exTickArrayBitmap) {
    const dataLayout = struct([
      s32("tickLowerIndex"),
      s32("tickUpperIndex"),
      s32("tickArrayLowerStartIndex"),
      s32("tickArrayUpperStartIndex"),
      u128("liquidity"),
      u64("amountMaxA"),
      u64("amountMaxB"),
      bool("withMetadata"),
      u82("optionBaseFlag"),
      bool("baseFlag")
    ]);
    const remainingAccounts = [
      ...exTickArrayBitmap ? [{ pubkey: exTickArrayBitmap, isSigner: false, isWritable: true }] : []
    ];
    const keys = [
      { pubkey: payer, isSigner: true, isWritable: true },
      { pubkey: positionNftOwner, isSigner: false, isWritable: false },
      { pubkey: positionNftMint, isSigner: true, isWritable: true },
      { pubkey: positionNftAccount, isSigner: false, isWritable: true },
      { pubkey: metadataAccount, isSigner: false, isWritable: true },
      { pubkey: poolId, isSigner: false, isWritable: true },
      { pubkey: protocolPosition, isSigner: false, isWritable: true },
      { pubkey: tickArrayLower, isSigner: false, isWritable: true },
      { pubkey: tickArrayUpper, isSigner: false, isWritable: true },
      { pubkey: personalPosition, isSigner: false, isWritable: true },
      { pubkey: ownerTokenAccountA, isSigner: false, isWritable: true },
      { pubkey: ownerTokenAccountB, isSigner: false, isWritable: true },
      { pubkey: tokenVaultA, isSigner: false, isWritable: true },
      { pubkey: tokenVaultB, isSigner: false, isWritable: true },
      { pubkey: RENT_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_web319.SystemProgram.programId, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: METADATA_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: tokenMintA, isSigner: false, isWritable: false },
      { pubkey: tokenMintB, isSigner: false, isWritable: false },
      ...remainingAccounts
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
      tickLowerIndex,
      tickUpperIndex,
      tickArrayLowerStartIndex,
      tickArrayUpperStartIndex,
      liquidity,
      amountMaxA,
      amountMaxB,
      withMetadata: withMetadata === "create",
      baseFlag: false,
      optionBaseFlag: 0
    }, data);
    const aData = Buffer.from([...anchorDataBuf2.openPosition, ...data]);
    return new import_web319.TransactionInstruction({
      keys,
      programId,
      data: aData
    });
  }
  static openPositionFromLiquidityInstruction22(programId, payer, poolId, positionNftOwner, positionNftMint, positionNftAccount, protocolPosition, tickArrayLower, tickArrayUpper, personalPosition, ownerTokenAccountA, ownerTokenAccountB, tokenVaultA, tokenVaultB, tokenMintA, tokenMintB, tickLowerIndex, tickUpperIndex, tickArrayLowerStartIndex, tickArrayUpperStartIndex, liquidity, amountMaxA, amountMaxB, withMetadata, exTickArrayBitmap) {
    const dataLayout = struct([
      s32("tickLowerIndex"),
      s32("tickUpperIndex"),
      s32("tickArrayLowerStartIndex"),
      s32("tickArrayUpperStartIndex"),
      u128("liquidity"),
      u64("amountMaxA"),
      u64("amountMaxB"),
      bool("withMetadata"),
      u82("optionBaseFlag"),
      bool("baseFlag")
    ]);
    const remainingAccounts = [
      ...exTickArrayBitmap ? [{ pubkey: exTickArrayBitmap, isSigner: false, isWritable: true }] : []
    ];
    const keys = [
      { pubkey: payer, isSigner: true, isWritable: true },
      { pubkey: positionNftOwner, isSigner: false, isWritable: false },
      { pubkey: positionNftMint, isSigner: true, isWritable: true },
      { pubkey: positionNftAccount, isSigner: false, isWritable: true },
      { pubkey: poolId, isSigner: false, isWritable: true },
      { pubkey: protocolPosition, isSigner: false, isWritable: true },
      { pubkey: tickArrayLower, isSigner: false, isWritable: true },
      { pubkey: tickArrayUpper, isSigner: false, isWritable: true },
      { pubkey: personalPosition, isSigner: false, isWritable: true },
      { pubkey: ownerTokenAccountA, isSigner: false, isWritable: true },
      { pubkey: ownerTokenAccountB, isSigner: false, isWritable: true },
      { pubkey: tokenVaultA, isSigner: false, isWritable: true },
      { pubkey: tokenVaultB, isSigner: false, isWritable: true },
      { pubkey: RENT_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_web319.SystemProgram.programId, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: tokenMintA, isSigner: false, isWritable: false },
      { pubkey: tokenMintB, isSigner: false, isWritable: false },
      ...remainingAccounts
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
      tickLowerIndex,
      tickUpperIndex,
      tickArrayLowerStartIndex,
      tickArrayUpperStartIndex,
      liquidity,
      amountMaxA,
      amountMaxB,
      withMetadata: withMetadata === "create",
      baseFlag: false,
      optionBaseFlag: 0
    }, data);
    const aData = Buffer.from([...anchorDataBuf2.openPositionWithTokenEx, ...data]);
    return new import_web319.TransactionInstruction({
      keys,
      programId,
      data: aData
    });
  }
  static async openPositionInstructions({
    poolInfo,
    poolKeys,
    ownerInfo,
    tickLower,
    tickUpper,
    liquidity,
    amountMaxA,
    amountMaxB,
    withMetadata,
    getEphemeralSigners,
    nft2022
  }) {
    const signers = [];
    const [programId, id] = [new import_web319.PublicKey(poolInfo.programId), new import_web319.PublicKey(poolInfo.id)];
    let nftMintAccount;
    if (getEphemeralSigners) {
      nftMintAccount = new import_web319.PublicKey((await getEphemeralSigners(1))[0]);
    } else {
      const _k = import_web319.Keypair.generate();
      signers.push(_k);
      nftMintAccount = _k.publicKey;
    }
    const tickArrayLowerStartIndex = TickUtils.getTickArrayStartIndexByTick(tickLower, poolInfo.config.tickSpacing);
    const tickArrayUpperStartIndex = TickUtils.getTickArrayStartIndexByTick(tickUpper, poolInfo.config.tickSpacing);
    const { publicKey: tickArrayLower } = getPdaTickArrayAddress(programId, id, tickArrayLowerStartIndex);
    const { publicKey: tickArrayUpper } = getPdaTickArrayAddress(programId, id, tickArrayUpperStartIndex);
    const { publicKey: positionNftAccount } = nft2022 ? getATAAddress(ownerInfo.wallet, nftMintAccount, import_spl_token13.TOKEN_2022_PROGRAM_ID) : getATAAddress(ownerInfo.wallet, nftMintAccount, import_spl_token13.TOKEN_PROGRAM_ID);
    const { publicKey: metadataAccount } = getPdaMetadataKey(nftMintAccount);
    const { publicKey: personalPosition } = getPdaPersonalPositionAddress(programId, nftMintAccount);
    const { publicKey: protocolPosition } = getPdaProtocolPositionAddress(programId, id, tickLower, tickUpper);
    const ins = nft2022 ? this.openPositionFromLiquidityInstruction22(programId, ownerInfo.feePayer, id, ownerInfo.wallet, nftMintAccount, positionNftAccount, protocolPosition, tickArrayLower, tickArrayUpper, personalPosition, ownerInfo.tokenAccountA, ownerInfo.tokenAccountB, new import_web319.PublicKey(poolKeys.vault.A), new import_web319.PublicKey(poolKeys.vault.B), new import_web319.PublicKey(poolInfo.mintA.address), new import_web319.PublicKey(poolInfo.mintB.address), tickLower, tickUpper, tickArrayLowerStartIndex, tickArrayUpperStartIndex, liquidity, amountMaxA, amountMaxB, withMetadata, PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.config.tickSpacing, [
      tickArrayLowerStartIndex,
      tickArrayUpperStartIndex
    ]) ? getPdaExBitmapAccount(programId, id).publicKey : void 0) : this.openPositionFromLiquidityInstruction(programId, ownerInfo.feePayer, id, ownerInfo.wallet, nftMintAccount, positionNftAccount, metadataAccount, protocolPosition, tickArrayLower, tickArrayUpper, personalPosition, ownerInfo.tokenAccountA, ownerInfo.tokenAccountB, new import_web319.PublicKey(poolKeys.vault.A), new import_web319.PublicKey(poolKeys.vault.B), new import_web319.PublicKey(poolInfo.mintA.address), new import_web319.PublicKey(poolInfo.mintB.address), tickLower, tickUpper, tickArrayLowerStartIndex, tickArrayUpperStartIndex, liquidity, amountMaxA, amountMaxB, withMetadata, PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.config.tickSpacing, [
      tickArrayLowerStartIndex,
      tickArrayUpperStartIndex
    ]) ? getPdaExBitmapAccount(programId, id).publicKey : void 0);
    return {
      signers,
      instructions: [ins],
      instructionTypes: [InstructionType.ClmmOpenPosition],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : [],
      address: {
        nftMint: nftMintAccount,
        tickArrayLower,
        tickArrayUpper,
        positionNftAccount,
        metadataAccount,
        personalPosition,
        protocolPosition
      }
    };
  }
  static async openPositionFromBaseInstructions({
    poolInfo,
    poolKeys,
    ownerInfo,
    tickLower,
    tickUpper,
    base,
    baseAmount,
    otherAmountMax,
    withMetadata,
    getEphemeralSigners,
    nft2022
  }) {
    const signers = [];
    const [programId, id] = [new import_web319.PublicKey(poolInfo.programId), new import_web319.PublicKey(poolInfo.id)];
    let nftMintAccount;
    if (getEphemeralSigners) {
      nftMintAccount = new import_web319.PublicKey((await getEphemeralSigners(1))[0]);
    } else {
      const _k = import_web319.Keypair.generate();
      signers.push(_k);
      nftMintAccount = _k.publicKey;
    }
    const tickArrayLowerStartIndex = TickUtils.getTickArrayStartIndexByTick(tickLower, poolInfo.config.tickSpacing);
    const tickArrayUpperStartIndex = TickUtils.getTickArrayStartIndexByTick(tickUpper, poolInfo.config.tickSpacing);
    const { publicKey: tickArrayLower } = getPdaTickArrayAddress(programId, id, tickArrayLowerStartIndex);
    const { publicKey: tickArrayUpper } = getPdaTickArrayAddress(programId, id, tickArrayUpperStartIndex);
    const { publicKey: positionNftAccount } = nft2022 ? getATAAddress(ownerInfo.wallet, nftMintAccount, import_spl_token13.TOKEN_2022_PROGRAM_ID) : getATAAddress(ownerInfo.wallet, nftMintAccount, import_spl_token13.TOKEN_PROGRAM_ID);
    const { publicKey: metadataAccount } = getPdaMetadataKey(nftMintAccount);
    const { publicKey: personalPosition } = getPdaPersonalPositionAddress(programId, nftMintAccount);
    const { publicKey: protocolPosition } = getPdaProtocolPositionAddress(programId, id, tickLower, tickUpper);
    const ins = nft2022 ? this.openPositionFromBaseInstruction22(programId, ownerInfo.feePayer, id, ownerInfo.wallet, nftMintAccount, positionNftAccount, protocolPosition, tickArrayLower, tickArrayUpper, personalPosition, ownerInfo.tokenAccountA, ownerInfo.tokenAccountB, new import_web319.PublicKey(poolKeys.vault.A), new import_web319.PublicKey(poolKeys.vault.B), new import_web319.PublicKey(poolInfo.mintA.address), new import_web319.PublicKey(poolInfo.mintB.address), tickLower, tickUpper, tickArrayLowerStartIndex, tickArrayUpperStartIndex, withMetadata, base, baseAmount, otherAmountMax, PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.config.tickSpacing, [
      tickArrayLowerStartIndex,
      tickArrayUpperStartIndex
    ]) ? getPdaExBitmapAccount(programId, id).publicKey : void 0) : this.openPositionFromBaseInstruction(programId, ownerInfo.feePayer, id, ownerInfo.wallet, nftMintAccount, positionNftAccount, metadataAccount, protocolPosition, tickArrayLower, tickArrayUpper, personalPosition, ownerInfo.tokenAccountA, ownerInfo.tokenAccountB, new import_web319.PublicKey(poolKeys.vault.A), new import_web319.PublicKey(poolKeys.vault.B), new import_web319.PublicKey(poolInfo.mintA.address), new import_web319.PublicKey(poolInfo.mintB.address), tickLower, tickUpper, tickArrayLowerStartIndex, tickArrayUpperStartIndex, withMetadata, base, baseAmount, otherAmountMax, PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.config.tickSpacing, [
      tickArrayLowerStartIndex,
      tickArrayUpperStartIndex
    ]) ? getPdaExBitmapAccount(programId, id).publicKey : void 0);
    return {
      address: {
        nftMint: nftMintAccount,
        tickArrayLower,
        tickArrayUpper,
        positionNftAccount,
        metadataAccount,
        personalPosition,
        protocolPosition
      },
      instructions: [ins],
      signers,
      instructionTypes: [InstructionType.ClmmOpenPosition],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : []
    };
  }
  static openPositionFromBaseInstruction(programId, payer, poolId, positionNftOwner, positionNftMint, positionNftAccount, metadataAccount, protocolPosition, tickArrayLower, tickArrayUpper, personalPosition, ownerTokenAccountA, ownerTokenAccountB, tokenVaultA, tokenVaultB, tokenMintA, tokenMintB, tickLowerIndex, tickUpperIndex, tickArrayLowerStartIndex, tickArrayUpperStartIndex, withMetadata, base, baseAmount, otherAmountMax, exTickArrayBitmap) {
    const dataLayout = struct([
      s32("tickLowerIndex"),
      s32("tickUpperIndex"),
      s32("tickArrayLowerStartIndex"),
      s32("tickArrayUpperStartIndex"),
      u128("liquidity"),
      u64("amountMaxA"),
      u64("amountMaxB"),
      bool("withMetadata"),
      u82("optionBaseFlag"),
      bool("baseFlag")
    ]);
    const remainingAccounts = [
      ...exTickArrayBitmap ? [{ pubkey: exTickArrayBitmap, isSigner: false, isWritable: true }] : []
    ];
    const keys = [
      { pubkey: payer, isSigner: true, isWritable: true },
      { pubkey: positionNftOwner, isSigner: false, isWritable: false },
      { pubkey: positionNftMint, isSigner: true, isWritable: true },
      { pubkey: positionNftAccount, isSigner: false, isWritable: true },
      { pubkey: metadataAccount, isSigner: false, isWritable: true },
      { pubkey: poolId, isSigner: false, isWritable: true },
      { pubkey: protocolPosition, isSigner: false, isWritable: true },
      { pubkey: tickArrayLower, isSigner: false, isWritable: true },
      { pubkey: tickArrayUpper, isSigner: false, isWritable: true },
      { pubkey: personalPosition, isSigner: false, isWritable: true },
      { pubkey: ownerTokenAccountA, isSigner: false, isWritable: true },
      { pubkey: ownerTokenAccountB, isSigner: false, isWritable: true },
      { pubkey: tokenVaultA, isSigner: false, isWritable: true },
      { pubkey: tokenVaultB, isSigner: false, isWritable: true },
      { pubkey: RENT_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_web319.SystemProgram.programId, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: METADATA_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: tokenMintA, isSigner: false, isWritable: false },
      { pubkey: tokenMintB, isSigner: false, isWritable: false },
      ...remainingAccounts
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
      tickLowerIndex,
      tickUpperIndex,
      tickArrayLowerStartIndex,
      tickArrayUpperStartIndex,
      liquidity: new import_bn19.default(0),
      amountMaxA: base === "MintA" ? baseAmount : otherAmountMax,
      amountMaxB: base === "MintA" ? otherAmountMax : baseAmount,
      withMetadata: withMetadata === "create",
      baseFlag: base === "MintA",
      optionBaseFlag: 1
    }, data);
    const aData = Buffer.from([...anchorDataBuf2.openPosition, ...data]);
    return new import_web319.TransactionInstruction({
      keys,
      programId,
      data: aData
    });
  }
  static openPositionFromBaseInstruction22(programId, payer, poolId, positionNftOwner, positionNftMint, positionNftAccount, protocolPosition, tickArrayLower, tickArrayUpper, personalPosition, ownerTokenAccountA, ownerTokenAccountB, tokenVaultA, tokenVaultB, tokenMintA, tokenMintB, tickLowerIndex, tickUpperIndex, tickArrayLowerStartIndex, tickArrayUpperStartIndex, withMetadata, base, baseAmount, otherAmountMax, exTickArrayBitmap) {
    const dataLayout = struct([
      s32("tickLowerIndex"),
      s32("tickUpperIndex"),
      s32("tickArrayLowerStartIndex"),
      s32("tickArrayUpperStartIndex"),
      u128("liquidity"),
      u64("amountMaxA"),
      u64("amountMaxB"),
      bool("withMetadata"),
      u82("optionBaseFlag"),
      bool("baseFlag")
    ]);
    const remainingAccounts = [
      ...exTickArrayBitmap ? [{ pubkey: exTickArrayBitmap, isSigner: false, isWritable: true }] : []
    ];
    const keys = [
      { pubkey: payer, isSigner: true, isWritable: true },
      { pubkey: positionNftOwner, isSigner: false, isWritable: false },
      { pubkey: positionNftMint, isSigner: true, isWritable: true },
      { pubkey: positionNftAccount, isSigner: false, isWritable: true },
      { pubkey: poolId, isSigner: false, isWritable: true },
      { pubkey: protocolPosition, isSigner: false, isWritable: true },
      { pubkey: tickArrayLower, isSigner: false, isWritable: true },
      { pubkey: tickArrayUpper, isSigner: false, isWritable: true },
      { pubkey: personalPosition, isSigner: false, isWritable: true },
      { pubkey: ownerTokenAccountA, isSigner: false, isWritable: true },
      { pubkey: ownerTokenAccountB, isSigner: false, isWritable: true },
      { pubkey: tokenVaultA, isSigner: false, isWritable: true },
      { pubkey: tokenVaultB, isSigner: false, isWritable: true },
      { pubkey: RENT_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_web319.SystemProgram.programId, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: tokenMintA, isSigner: false, isWritable: false },
      { pubkey: tokenMintB, isSigner: false, isWritable: false },
      ...remainingAccounts
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
      tickLowerIndex,
      tickUpperIndex,
      tickArrayLowerStartIndex,
      tickArrayUpperStartIndex,
      liquidity: new import_bn19.default(0),
      amountMaxA: base === "MintA" ? baseAmount : otherAmountMax,
      amountMaxB: base === "MintA" ? otherAmountMax : baseAmount,
      withMetadata: withMetadata === "create",
      baseFlag: base === "MintA",
      optionBaseFlag: 1
    }, data);
    const aData = Buffer.from([...anchorDataBuf2.openPositionWithTokenEx, ...data]);
    return new import_web319.TransactionInstruction({
      keys,
      programId,
      data: aData
    });
  }
  static async openPositionFromLiquidityInstructions({
    poolInfo,
    poolKeys,
    ownerInfo,
    tickLower,
    tickUpper,
    liquidity,
    amountMaxA,
    amountMaxB,
    withMetadata,
    getEphemeralSigners,
    nft2022
  }) {
    let nftMintAccount;
    const signers = [];
    if (getEphemeralSigners) {
      nftMintAccount = new import_web319.PublicKey((await getEphemeralSigners(1))[0]);
    } else {
      const _k = import_web319.Keypair.generate();
      signers.push(_k);
      nftMintAccount = _k.publicKey;
    }
    const [programId, id] = [new import_web319.PublicKey(poolInfo.programId), new import_web319.PublicKey(poolInfo.id)];
    const tickArrayLowerStartIndex = TickUtils.getTickArrayStartIndexByTick(tickLower, poolInfo.config.tickSpacing);
    const tickArrayUpperStartIndex = TickUtils.getTickArrayStartIndexByTick(tickUpper, poolInfo.config.tickSpacing);
    const { publicKey: tickArrayLower } = getPdaTickArrayAddress(programId, id, tickArrayLowerStartIndex);
    const { publicKey: tickArrayUpper } = getPdaTickArrayAddress(programId, id, tickArrayUpperStartIndex);
    const { publicKey: positionNftAccount } = nft2022 ? getATAAddress(ownerInfo.wallet, nftMintAccount, import_spl_token13.TOKEN_2022_PROGRAM_ID) : getATAAddress(ownerInfo.wallet, nftMintAccount, import_spl_token13.TOKEN_PROGRAM_ID);
    const { publicKey: metadataAccount } = getPdaMetadataKey(nftMintAccount);
    const { publicKey: personalPosition } = getPdaPersonalPositionAddress(programId, nftMintAccount);
    const { publicKey: protocolPosition } = getPdaProtocolPositionAddress(programId, id, tickLower, tickUpper);
    const ins = nft2022 ? this.openPositionFromLiquidityInstruction22(programId, ownerInfo.wallet, id, ownerInfo.wallet, nftMintAccount, positionNftAccount, protocolPosition, tickArrayLower, tickArrayUpper, personalPosition, ownerInfo.tokenAccountA, ownerInfo.tokenAccountB, new import_web319.PublicKey(poolKeys.vault.A), new import_web319.PublicKey(poolKeys.vault.B), new import_web319.PublicKey(poolKeys.mintA.address), new import_web319.PublicKey(poolKeys.mintB.address), tickLower, tickUpper, tickArrayLowerStartIndex, tickArrayUpperStartIndex, liquidity, amountMaxA, amountMaxB, withMetadata, PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.config.tickSpacing, [
      tickArrayLowerStartIndex,
      tickArrayUpperStartIndex
    ]) ? getPdaExBitmapAccount(programId, id).publicKey : void 0) : this.openPositionFromLiquidityInstruction(programId, ownerInfo.wallet, id, ownerInfo.wallet, nftMintAccount, positionNftAccount, metadataAccount, protocolPosition, tickArrayLower, tickArrayUpper, personalPosition, ownerInfo.tokenAccountA, ownerInfo.tokenAccountB, new import_web319.PublicKey(poolKeys.vault.A), new import_web319.PublicKey(poolKeys.vault.B), new import_web319.PublicKey(poolKeys.mintA.address), new import_web319.PublicKey(poolKeys.mintB.address), tickLower, tickUpper, tickArrayLowerStartIndex, tickArrayUpperStartIndex, liquidity, amountMaxA, amountMaxB, withMetadata, PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.config.tickSpacing, [
      tickArrayLowerStartIndex,
      tickArrayUpperStartIndex
    ]) ? getPdaExBitmapAccount(programId, id).publicKey : void 0);
    return {
      address: {
        nftMint: nftMintAccount,
        tickArrayLower,
        tickArrayUpper,
        positionNftAccount,
        metadataAccount,
        personalPosition,
        protocolPosition
      },
      instructions: [ins],
      signers,
      instructionTypes: [InstructionType.ClmmOpenPosition],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : []
    };
  }
  static closePositionInstruction(programId, positionNftOwner, positionNftMint, positionNftAccount, personalPosition, nft2022) {
    const dataLayout = struct([]);
    const keys = [
      { pubkey: positionNftOwner, isSigner: true, isWritable: true },
      { pubkey: positionNftMint, isSigner: false, isWritable: true },
      { pubkey: positionNftAccount, isSigner: false, isWritable: true },
      { pubkey: personalPosition, isSigner: false, isWritable: true },
      { pubkey: import_web319.SystemProgram.programId, isSigner: false, isWritable: false },
      { pubkey: nft2022 ? import_spl_token13.TOKEN_2022_PROGRAM_ID : import_spl_token13.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false }
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({}, data);
    const aData = Buffer.from([...anchorDataBuf2.closePosition, ...data]);
    return new import_web319.TransactionInstruction({
      keys,
      programId,
      data: aData
    });
  }
  static closePositionInstructions({
    poolInfo,
    poolKeys,
    ownerInfo,
    ownerPosition,
    nft2022
  }) {
    const programId = new import_web319.PublicKey(poolInfo.programId);
    const positionNftAccount = nft2022 ? getATAAddress(ownerInfo.wallet, ownerPosition.nftMint, import_spl_token13.TOKEN_2022_PROGRAM_ID).publicKey : getATAAddress(ownerInfo.wallet, ownerPosition.nftMint, import_spl_token13.TOKEN_PROGRAM_ID).publicKey;
    const { publicKey: personalPosition } = getPdaPersonalPositionAddress(programId, ownerPosition.nftMint);
    const ins = [];
    ins.push(this.closePositionInstruction(programId, ownerInfo.wallet, ownerPosition.nftMint, positionNftAccount, personalPosition, nft2022));
    return {
      address: {
        positionNftAccount,
        personalPosition
      },
      signers: [],
      instructions: ins,
      instructionTypes: [InstructionType.ClmmClosePosition],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : []
    };
  }
  static increasePositionFromLiquidityInstruction(programId, positionNftOwner, positionNftAccount, personalPosition, poolId, protocolPosition, tickArrayLower, tickArrayUpper, ownerTokenAccountA, ownerTokenAccountB, mintVaultA, mintVaultB, mintMintA, mintMintB, liquidity, amountMaxA, amountMaxB, exTickArrayBitmap) {
    const dataLayout = struct([
      u128("liquidity"),
      u64("amountMaxA"),
      u64("amountMaxB"),
      u82("optionBaseFlag"),
      bool("baseFlag")
    ]);
    const remainingAccounts = [
      ...exTickArrayBitmap ? [{ pubkey: exTickArrayBitmap, isSigner: false, isWritable: true }] : []
    ];
    const keys = [
      { pubkey: positionNftOwner, isSigner: true, isWritable: false },
      { pubkey: positionNftAccount, isSigner: false, isWritable: false },
      { pubkey: poolId, isSigner: false, isWritable: true },
      { pubkey: protocolPosition, isSigner: false, isWritable: true },
      { pubkey: personalPosition, isSigner: false, isWritable: true },
      { pubkey: tickArrayLower, isSigner: false, isWritable: true },
      { pubkey: tickArrayUpper, isSigner: false, isWritable: true },
      { pubkey: ownerTokenAccountA, isSigner: false, isWritable: true },
      { pubkey: ownerTokenAccountB, isSigner: false, isWritable: true },
      { pubkey: mintVaultA, isSigner: false, isWritable: true },
      { pubkey: mintVaultB, isSigner: false, isWritable: true },
      { pubkey: import_spl_token13.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: mintMintA, isSigner: false, isWritable: false },
      { pubkey: mintMintB, isSigner: false, isWritable: false },
      ...remainingAccounts
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
      liquidity,
      amountMaxA,
      amountMaxB,
      optionBaseFlag: 0,
      baseFlag: false
    }, data);
    const aData = Buffer.from([...anchorDataBuf2.increaseLiquidity, ...data]);
    return new import_web319.TransactionInstruction({
      keys,
      programId,
      data: aData
    });
  }
  static increasePositionFromLiquidityInstructions({
    poolInfo,
    poolKeys,
    ownerPosition,
    ownerInfo,
    liquidity,
    amountMaxA,
    amountMaxB,
    nft2022
  }) {
    const [programId, id] = [new import_web319.PublicKey(poolInfo.programId), new import_web319.PublicKey(poolInfo.id)];
    const tickArrayLowerStartIndex = TickUtils.getTickArrayStartIndexByTick(ownerPosition.tickLower, poolInfo.config.tickSpacing);
    const tickArrayUpperStartIndex = TickUtils.getTickArrayStartIndexByTick(ownerPosition.tickUpper, poolInfo.config.tickSpacing);
    const { publicKey: tickArrayLower } = getPdaTickArrayAddress(programId, id, tickArrayLowerStartIndex);
    const { publicKey: tickArrayUpper } = getPdaTickArrayAddress(programId, id, tickArrayUpperStartIndex);
    const { publicKey: positionNftAccount } = nft2022 ? getATAAddress(ownerInfo.wallet, ownerPosition.nftMint, import_spl_token13.TOKEN_2022_PROGRAM_ID) : getATAAddress(ownerInfo.wallet, ownerPosition.nftMint, import_spl_token13.TOKEN_PROGRAM_ID);
    const { publicKey: personalPosition } = getPdaPersonalPositionAddress(programId, ownerPosition.nftMint);
    const { publicKey: protocolPosition } = getPdaProtocolPositionAddress(programId, id, ownerPosition.tickLower, ownerPosition.tickUpper);
    const ins = this.increasePositionFromLiquidityInstruction(programId, ownerInfo.wallet, positionNftAccount, personalPosition, id, protocolPosition, tickArrayLower, tickArrayUpper, ownerInfo.tokenAccountA, ownerInfo.tokenAccountB, new import_web319.PublicKey(poolKeys.vault.A), new import_web319.PublicKey(poolKeys.vault.B), new import_web319.PublicKey(poolInfo.mintA.address), new import_web319.PublicKey(poolInfo.mintB.address), liquidity, amountMaxA, amountMaxB, PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.config.tickSpacing, [
      tickArrayLowerStartIndex,
      tickArrayUpperStartIndex
    ]) ? getPdaExBitmapAccount(programId, id).publicKey : void 0);
    return {
      address: {
        tickArrayLower,
        tickArrayUpper,
        positionNftAccount,
        personalPosition,
        protocolPosition
      },
      signers: [],
      instructions: [ins],
      instructionTypes: [InstructionType.ClmmIncreasePosition],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : []
    };
  }
  static increasePositionFromBaseInstructions({
    poolInfo,
    poolKeys,
    ownerPosition,
    ownerInfo,
    base,
    baseAmount,
    otherAmountMax,
    nft2022
  }) {
    const [programId, id] = [new import_web319.PublicKey(poolInfo.programId), new import_web319.PublicKey(poolInfo.id)];
    const tickArrayLowerStartIndex = TickUtils.getTickArrayStartIndexByTick(ownerPosition.tickLower, poolInfo.config.tickSpacing);
    const tickArrayUpperStartIndex = TickUtils.getTickArrayStartIndexByTick(ownerPosition.tickUpper, poolInfo.config.tickSpacing);
    const { publicKey: tickArrayLower } = getPdaTickArrayAddress(programId, id, tickArrayLowerStartIndex);
    const { publicKey: tickArrayUpper } = getPdaTickArrayAddress(programId, id, tickArrayUpperStartIndex);
    const { publicKey: positionNftAccount } = nft2022 ? getATAAddress(ownerInfo.wallet, ownerPosition.nftMint, import_spl_token13.TOKEN_2022_PROGRAM_ID) : getATAAddress(ownerInfo.wallet, ownerPosition.nftMint, import_spl_token13.TOKEN_PROGRAM_ID);
    const { publicKey: personalPosition } = getPdaPersonalPositionAddress(programId, ownerPosition.nftMint);
    const { publicKey: protocolPosition } = getPdaProtocolPositionAddress(programId, id, ownerPosition.tickLower, ownerPosition.tickUpper);
    return {
      address: {
        tickArrayLower,
        tickArrayUpper,
        positionNftAccount,
        personalPosition,
        protocolPosition
      },
      instructions: [
        this.increasePositionFromBaseInstruction(programId, ownerInfo.wallet, positionNftAccount, personalPosition, id, protocolPosition, tickArrayLower, tickArrayUpper, ownerInfo.tokenAccountA, ownerInfo.tokenAccountB, new import_web319.PublicKey(poolKeys.vault.A), new import_web319.PublicKey(poolKeys.vault.B), new import_web319.PublicKey(poolInfo.mintA.address), new import_web319.PublicKey(poolInfo.mintB.address), base, baseAmount, otherAmountMax, PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.config.tickSpacing, [
          tickArrayLowerStartIndex,
          tickArrayUpperStartIndex
        ]) ? getPdaExBitmapAccount(programId, id).publicKey : void 0)
      ],
      signers: [],
      instructionTypes: [InstructionType.ClmmIncreasePosition],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : []
    };
  }
  static increasePositionFromBaseInstruction(programId, positionNftOwner, positionNftAccount, personalPosition, poolId, protocolPosition, tickArrayLower, tickArrayUpper, ownerTokenAccountA, ownerTokenAccountB, mintVaultA, mintVaultB, mintMintA, mintMintB, base, baseAmount, otherAmountMax, exTickArrayBitmap) {
    const dataLayout = struct([
      u128("liquidity"),
      u64("amountMaxA"),
      u64("amountMaxB"),
      u82("optionBaseFlag"),
      bool("baseFlag")
    ]);
    const remainingAccounts = [
      ...exTickArrayBitmap ? [{ pubkey: exTickArrayBitmap, isSigner: false, isWritable: true }] : []
    ];
    const keys = [
      { pubkey: positionNftOwner, isSigner: true, isWritable: false },
      { pubkey: positionNftAccount, isSigner: false, isWritable: false },
      { pubkey: poolId, isSigner: false, isWritable: true },
      { pubkey: protocolPosition, isSigner: false, isWritable: true },
      { pubkey: personalPosition, isSigner: false, isWritable: true },
      { pubkey: tickArrayLower, isSigner: false, isWritable: true },
      { pubkey: tickArrayUpper, isSigner: false, isWritable: true },
      { pubkey: ownerTokenAccountA, isSigner: false, isWritable: true },
      { pubkey: ownerTokenAccountB, isSigner: false, isWritable: true },
      { pubkey: mintVaultA, isSigner: false, isWritable: true },
      { pubkey: mintVaultB, isSigner: false, isWritable: true },
      { pubkey: import_spl_token13.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: mintMintA, isSigner: false, isWritable: false },
      { pubkey: mintMintB, isSigner: false, isWritable: false },
      ...remainingAccounts
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
      liquidity: new import_bn19.default(0),
      amountMaxA: base === "MintA" ? baseAmount : otherAmountMax,
      amountMaxB: base === "MintA" ? otherAmountMax : baseAmount,
      baseFlag: base === "MintA",
      optionBaseFlag: 1
    }, data);
    const aData = Buffer.from([...anchorDataBuf2.increaseLiquidity, ...data]);
    return new import_web319.TransactionInstruction({
      keys,
      programId,
      data: aData
    });
  }
  static decreaseLiquidityInstruction(programId, positionNftOwner, positionNftAccount, personalPosition, poolId, protocolPosition, tickArrayLower, tickArrayUpper, ownerTokenAccountA, ownerTokenAccountB, mintVaultA, mintVaultB, mintMintA, mintMintB, rewardAccounts, liquidity, amountMinA, amountMinB, exTickArrayBitmap) {
    const dataLayout = struct([u128("liquidity"), u64("amountMinA"), u64("amountMinB")]);
    const remainingAccounts = [
      ...exTickArrayBitmap ? [{ pubkey: exTickArrayBitmap, isSigner: false, isWritable: true }] : [],
      ...rewardAccounts.map((i) => [
        { pubkey: i.poolRewardVault, isSigner: false, isWritable: true },
        { pubkey: i.ownerRewardVault, isSigner: false, isWritable: true },
        { pubkey: i.rewardMint, isSigner: false, isWritable: false }
      ]).flat()
    ];
    const keys = [
      { pubkey: positionNftOwner, isSigner: true, isWritable: false },
      { pubkey: positionNftAccount, isSigner: false, isWritable: false },
      { pubkey: personalPosition, isSigner: false, isWritable: true },
      { pubkey: poolId, isSigner: false, isWritable: true },
      { pubkey: protocolPosition, isSigner: false, isWritable: true },
      { pubkey: mintVaultA, isSigner: false, isWritable: true },
      { pubkey: mintVaultB, isSigner: false, isWritable: true },
      { pubkey: tickArrayLower, isSigner: false, isWritable: true },
      { pubkey: tickArrayUpper, isSigner: false, isWritable: true },
      { pubkey: ownerTokenAccountA, isSigner: false, isWritable: true },
      { pubkey: ownerTokenAccountB, isSigner: false, isWritable: true },
      { pubkey: import_spl_token13.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: MEMO_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: mintMintA, isSigner: false, isWritable: false },
      { pubkey: mintMintB, isSigner: false, isWritable: false },
      ...remainingAccounts
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
      liquidity,
      amountMinA,
      amountMinB
    }, data);
    const aData = Buffer.from([...anchorDataBuf2.decreaseLiquidity, ...data]);
    return new import_web319.TransactionInstruction({
      keys,
      programId,
      data: aData
    });
  }
  static decreaseLiquidityInstructions({
    poolInfo,
    poolKeys,
    ownerPosition,
    ownerInfo,
    liquidity,
    amountMinA,
    amountMinB,
    programId,
    nft2022
  }) {
    const [poolProgramId, id] = [new import_web319.PublicKey(poolInfo.programId), new import_web319.PublicKey(poolInfo.id)];
    const tickArrayLowerStartIndex = TickUtils.getTickArrayStartIndexByTick(ownerPosition.tickLower, poolInfo.config.tickSpacing);
    const tickArrayUpperStartIndex = TickUtils.getTickArrayStartIndexByTick(ownerPosition.tickUpper, poolInfo.config.tickSpacing);
    const { publicKey: tickArrayLower } = getPdaTickArrayAddress(poolProgramId, id, tickArrayLowerStartIndex);
    const { publicKey: tickArrayUpper } = getPdaTickArrayAddress(poolProgramId, id, tickArrayUpperStartIndex);
    const { publicKey: positionNftAccount } = nft2022 ? getATAAddress(ownerInfo.wallet, ownerPosition.nftMint, import_spl_token13.TOKEN_2022_PROGRAM_ID) : getATAAddress(ownerInfo.wallet, ownerPosition.nftMint, programId);
    const { publicKey: personalPosition } = getPdaPersonalPositionAddress(poolProgramId, ownerPosition.nftMint);
    const { publicKey: protocolPosition } = getPdaProtocolPositionAddress(poolProgramId, id, ownerPosition.tickLower, ownerPosition.tickUpper);
    const rewardAccounts = [];
    for (let i = 0; i < poolInfo.rewardDefaultInfos.length; i++) {
      rewardAccounts.push({
        poolRewardVault: new import_web319.PublicKey(poolKeys.rewardInfos[i].vault),
        ownerRewardVault: ownerInfo.rewardAccounts[i],
        rewardMint: new import_web319.PublicKey(poolInfo.rewardDefaultInfos[i].mint.address)
      });
    }
    const ins = [];
    const decreaseIns = this.decreaseLiquidityInstruction(poolProgramId, ownerInfo.wallet, positionNftAccount, personalPosition, id, protocolPosition, tickArrayLower, tickArrayUpper, ownerInfo.tokenAccountA, ownerInfo.tokenAccountB, new import_web319.PublicKey(poolKeys.vault.A), new import_web319.PublicKey(poolKeys.vault.B), new import_web319.PublicKey(poolInfo.mintA.address), new import_web319.PublicKey(poolInfo.mintB.address), rewardAccounts, liquidity, amountMinA, amountMinB, PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.config.tickSpacing, [
      tickArrayLowerStartIndex,
      tickArrayUpperStartIndex
    ]) ? getPdaExBitmapAccount(poolProgramId, id).publicKey : void 0);
    ins.push(decreaseIns);
    return {
      address: {
        tickArrayLower,
        tickArrayUpper,
        positionNftAccount,
        personalPosition,
        protocolPosition
      },
      signers: [],
      instructions: ins,
      instructionTypes: [InstructionType.ClmmDecreasePosition],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : []
    };
  }
  static swapInstruction(programId, payer, poolId, ammConfigId, inputTokenAccount, outputTokenAccount, inputVault, outputVault, inputMint, outputMint, tickArray, observationId, amount, otherAmountThreshold, sqrtPriceLimitX64, isBaseInput, exTickArrayBitmap) {
    const dataLayout = struct([
      u64("amount"),
      u64("otherAmountThreshold"),
      u128("sqrtPriceLimitX64"),
      bool("isBaseInput")
    ]);
    const remainingAccounts = [
      ...exTickArrayBitmap ? [{ pubkey: exTickArrayBitmap, isSigner: false, isWritable: true }] : [],
      ...tickArray.map((i) => ({ pubkey: i, isSigner: false, isWritable: true }))
    ];
    const keys = [
      { pubkey: payer, isSigner: true, isWritable: false },
      { pubkey: ammConfigId, isSigner: false, isWritable: false },
      { pubkey: poolId, isSigner: false, isWritable: true },
      { pubkey: inputTokenAccount, isSigner: false, isWritable: true },
      { pubkey: outputTokenAccount, isSigner: false, isWritable: true },
      { pubkey: inputVault, isSigner: false, isWritable: true },
      { pubkey: outputVault, isSigner: false, isWritable: true },
      { pubkey: observationId, isSigner: false, isWritable: true },
      { pubkey: import_spl_token13.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: MEMO_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: inputMint, isSigner: false, isWritable: false },
      { pubkey: outputMint, isSigner: false, isWritable: false },
      ...remainingAccounts
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
      amount,
      otherAmountThreshold,
      sqrtPriceLimitX64,
      isBaseInput
    }, data);
    const aData = Buffer.from([...anchorDataBuf2.swap, ...data]);
    return new import_web319.TransactionInstruction({
      keys,
      programId,
      data: aData
    });
  }
  static makeSwapBaseInInstructions({
    poolInfo,
    poolKeys,
    observationId,
    ownerInfo,
    inputMint,
    amountIn,
    amountOutMin,
    sqrtPriceLimitX64,
    remainingAccounts
  }) {
    const [programId, id] = [new import_web319.PublicKey(poolInfo.programId), new import_web319.PublicKey(poolInfo.id)];
    const [mintAVault, mintBVault] = [new import_web319.PublicKey(poolKeys.vault.A), new import_web319.PublicKey(poolKeys.vault.B)];
    const [mintA, mintB] = [new import_web319.PublicKey(poolInfo.mintA.address), new import_web319.PublicKey(poolInfo.mintB.address)];
    const isInputMintA = poolInfo.mintA.address === inputMint.toString();
    const ins = [
      this.swapInstruction(programId, ownerInfo.wallet, id, new import_web319.PublicKey(poolInfo.config.id), isInputMintA ? ownerInfo.tokenAccountA : ownerInfo.tokenAccountB, isInputMintA ? ownerInfo.tokenAccountB : ownerInfo.tokenAccountA, isInputMintA ? mintAVault : mintBVault, isInputMintA ? mintBVault : mintAVault, isInputMintA ? mintA : mintB, isInputMintA ? mintB : mintA, remainingAccounts, observationId, amountIn, amountOutMin, sqrtPriceLimitX64, true, getPdaExBitmapAccount(programId, id).publicKey)
    ];
    return {
      signers: [],
      instructions: ins,
      instructionTypes: [InstructionType.ClmmSwapBaseIn],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : [],
      address: {}
    };
  }
  static makeSwapBaseOutInstructions({
    poolInfo,
    poolKeys,
    observationId,
    ownerInfo,
    outputMint,
    amountOut,
    amountInMax,
    sqrtPriceLimitX64,
    remainingAccounts
  }) {
    const [programId, id] = [new import_web319.PublicKey(poolInfo.programId), new import_web319.PublicKey(poolInfo.id)];
    const [mintAVault, mintBVault] = [new import_web319.PublicKey(poolKeys.vault.A), new import_web319.PublicKey(poolKeys.vault.B)];
    const [mintA, mintB] = [new import_web319.PublicKey(poolInfo.mintA.address), new import_web319.PublicKey(poolInfo.mintB.address)];
    const isInputMintA = poolInfo.mintA.address === outputMint.toBase58();
    const ins = [
      this.swapInstruction(programId, ownerInfo.wallet, id, new import_web319.PublicKey(poolInfo.config.id), isInputMintA ? ownerInfo.tokenAccountB : ownerInfo.tokenAccountA, isInputMintA ? ownerInfo.tokenAccountA : ownerInfo.tokenAccountB, isInputMintA ? mintBVault : mintAVault, isInputMintA ? mintAVault : mintBVault, isInputMintA ? mintB : mintA, isInputMintA ? mintA : mintB, remainingAccounts, observationId, amountOut, amountInMax, sqrtPriceLimitX64, false, getPdaExBitmapAccount(programId, id).publicKey)
    ];
    return {
      signers: [],
      instructions: ins,
      instructionTypes: [InstructionType.ClmmSwapBaseOut],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : [],
      address: {}
    };
  }
  static initRewardInstruction(programId, payer, poolId, operationId, ammConfigId, ownerTokenAccount, rewardProgramId, rewardMint, rewardVault, openTime, endTime, emissionsPerSecondX64) {
    const dataLayout = struct([u64("openTime"), u64("endTime"), u128("emissionsPerSecondX64")]);
    const keys = [
      { pubkey: payer, isSigner: true, isWritable: true },
      { pubkey: ownerTokenAccount, isSigner: false, isWritable: true },
      { pubkey: ammConfigId, isSigner: false, isWritable: false },
      { pubkey: poolId, isSigner: false, isWritable: true },
      { pubkey: operationId, isSigner: false, isWritable: true },
      { pubkey: rewardMint, isSigner: false, isWritable: false },
      { pubkey: rewardVault, isSigner: false, isWritable: true },
      { pubkey: rewardProgramId, isSigner: false, isWritable: false },
      { pubkey: import_web319.SystemProgram.programId, isSigner: false, isWritable: false },
      { pubkey: RENT_PROGRAM_ID, isSigner: false, isWritable: false }
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
      openTime: parseBigNumberish(openTime),
      endTime: parseBigNumberish(endTime),
      emissionsPerSecondX64
    }, data);
    const aData = Buffer.from([...anchorDataBuf2.initReward, ...data]);
    return new import_web319.TransactionInstruction({
      keys,
      programId,
      data: aData
    });
  }
  static initRewardInstructions({
    poolInfo,
    poolKeys,
    ownerInfo,
    rewardInfo
  }) {
    const [programId, id] = [new import_web319.PublicKey(poolInfo.programId), new import_web319.PublicKey(poolInfo.id)];
    const poolRewardVault = getPdaPoolRewardVaulId(programId, id, rewardInfo.mint).publicKey;
    const operationId = getPdaOperationAccount(programId).publicKey;
    const ins = [
      this.initRewardInstruction(programId, ownerInfo.wallet, id, operationId, new import_web319.PublicKey(poolInfo.config.id), ownerInfo.tokenAccount, rewardInfo.programId, rewardInfo.mint, poolRewardVault, rewardInfo.openTime, rewardInfo.endTime, rewardInfo.emissionsPerSecondX64)
    ];
    return {
      address: { poolRewardVault, operationId },
      signers: [],
      instructions: ins,
      instructionTypes: [InstructionType.ClmmInitReward],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : []
    };
  }
  static setRewardInstruction(programId, payer, poolId, operationId, ammConfigId, ownerTokenAccount, rewardVault, rewardMint, rewardIndex, openTime, endTime, emissionsPerSecondX64) {
    const dataLayout = struct([u82("rewardIndex"), u128("emissionsPerSecondX64"), u64("openTime"), u64("endTime")]);
    const keys = [
      { pubkey: payer, isSigner: true, isWritable: true },
      { pubkey: ammConfigId, isSigner: false, isWritable: false },
      { pubkey: poolId, isSigner: false, isWritable: true },
      { pubkey: operationId, isSigner: false, isWritable: true },
      { pubkey: import_spl_token13.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: rewardVault, isSigner: false, isWritable: true },
      { pubkey: ownerTokenAccount, isSigner: false, isWritable: true },
      { pubkey: rewardMint, isSigner: false, isWritable: true }
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
      rewardIndex,
      emissionsPerSecondX64,
      openTime: parseBigNumberish(openTime),
      endTime: parseBigNumberish(endTime)
    }, data);
    const aData = Buffer.from([...anchorDataBuf2.setRewardEmissions, ...data]);
    return new import_web319.TransactionInstruction({
      keys,
      programId,
      data: aData
    });
  }
  static setRewardInstructions({
    poolInfo,
    poolKeys,
    ownerInfo,
    rewardInfo
  }) {
    const [programId, id] = [new import_web319.PublicKey(poolInfo.programId), new import_web319.PublicKey(poolInfo.id)];
    let rewardIndex;
    let rewardVault;
    let rewardMint;
    for (let index = 0; index < poolInfo.rewardDefaultInfos.length; index++)
      if (poolInfo.rewardDefaultInfos[index].mint.address === rewardInfo.mint.toString()) {
        rewardIndex = index;
        rewardVault = new import_web319.PublicKey(poolKeys.rewardInfos[index].vault);
        rewardMint = new import_web319.PublicKey(poolKeys.rewardInfos[index].mint.address);
      }
    if (rewardIndex === void 0 || rewardVault === void 0)
      logger11.logWithError("reward mint check error", "no reward mint", poolInfo.rewardDefaultInfos);
    const operationId = getPdaOperationAccount(programId).publicKey;
    const ins = [
      this.setRewardInstruction(programId, ownerInfo.wallet, id, operationId, new import_web319.PublicKey(poolInfo.config.id), ownerInfo.tokenAccount, rewardVault, rewardMint, rewardIndex, rewardInfo.openTime, rewardInfo.endTime, rewardInfo.emissionsPerSecondX64)
    ];
    return {
      address: { rewardVault, operationId },
      signers: [],
      instructions: ins,
      instructionTypes: [InstructionType.ClmmSetReward],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : []
    };
  }
  static collectRewardInstruction(programId, payer, poolId, ownerTokenAccount, rewardVault, rewardMint, rewardIndex) {
    const dataLayout = struct([u82("rewardIndex")]);
    const keys = [
      { pubkey: payer, isSigner: true, isWritable: true },
      { pubkey: ownerTokenAccount, isSigner: false, isWritable: true },
      { pubkey: poolId, isSigner: false, isWritable: true },
      { pubkey: rewardVault, isSigner: false, isWritable: true },
      { pubkey: rewardMint, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: MEMO_PROGRAM_ID, isSigner: false, isWritable: false }
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
      rewardIndex
    }, data);
    const aData = Buffer.from([...anchorDataBuf2.collectReward, ...data]);
    return new import_web319.TransactionInstruction({
      keys,
      programId,
      data: aData
    });
  }
  static collectRewardInstructions({
    poolInfo,
    poolKeys,
    ownerInfo,
    rewardMint
  }) {
    const [programId, id] = [new import_web319.PublicKey(poolInfo.programId), new import_web319.PublicKey(poolInfo.id)];
    let rewardIndex;
    let rewardVault;
    for (let index = 0; index < poolInfo.rewardDefaultInfos.length; index++)
      if (poolInfo.rewardDefaultInfos[index].mint.address === rewardMint.toString()) {
        rewardIndex = index;
        rewardVault = new import_web319.PublicKey(poolKeys.rewardInfos[index].vault);
      }
    if (rewardIndex === void 0 || rewardVault === void 0)
      logger11.logWithError("reward mint check error", "no reward mint", poolInfo.rewardDefaultInfos);
    const ins = [
      this.collectRewardInstruction(programId, ownerInfo.wallet, id, ownerInfo.tokenAccount, rewardVault, rewardMint, rewardIndex)
    ];
    return {
      address: { rewardVault },
      signers: [],
      instructions: ins,
      instructionTypes: [InstructionType.ClmmCollectReward],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : []
    };
  }
  static async makeLockPositions({
    programId,
    authProgramId,
    poolProgramId,
    payer,
    wallet,
    nftMint,
    nft2022,
    getEphemeralSigners
  }) {
    const signers = [];
    let lockNftMint;
    if (getEphemeralSigners) {
      lockNftMint = new import_web319.PublicKey((await getEphemeralSigners(1))[0]);
    } else {
      const _k = import_web319.Keypair.generate();
      signers.push(_k);
      lockNftMint = _k.publicKey;
    }
    const positionNftAccount = nft2022 ? getATAAddress(wallet, nftMint, import_spl_token13.TOKEN_2022_PROGRAM_ID).publicKey : getATAAddress(wallet, nftMint, import_spl_token13.TOKEN_PROGRAM_ID).publicKey;
    const { publicKey: positionId } = getPdaPersonalPositionAddress(poolProgramId, nftMint);
    const lockPositionId = getPdaLockClPositionIdV2(programId, lockNftMint).publicKey;
    const lockNftAccount = getATAAddress(wallet, lockNftMint, import_spl_token13.TOKEN_PROGRAM_ID).publicKey;
    const metadataAccount = getPdaMetadataKey(lockNftMint).publicKey;
    const ins = ClmmInstrument.lockPositionInstructionV2({
      programId,
      auth: authProgramId,
      payer,
      positionOwner: wallet,
      lockOwner: wallet,
      positionNftAccount,
      positionId,
      lockPositionId,
      lockNftMint,
      lockNftAccount,
      metadataAccount,
      withMetadata: true,
      nft2022,
      positionNftMint: nftMint,
      authPositionNftAccount: getATAAddress(authProgramId, nftMint, nft2022 ? import_spl_token13.TOKEN_2022_PROGRAM_ID : import_spl_token13.TOKEN_PROGRAM_ID).publicKey,
      positionNftProgram: nft2022 ? import_spl_token13.TOKEN_2022_PROGRAM_ID : import_spl_token13.TOKEN_PROGRAM_ID
    });
    return {
      address: {
        positionId,
        lockPositionId,
        lockNftAccount,
        lockNftMint,
        positionNftAccount,
        metadataAccount
      },
      instructions: [ins],
      signers,
      instructionTypes: [InstructionType.ClmmLockPosition],
      lookupTableAddress: []
    };
  }
  static lockPositionInstructionV2({
    programId,
    auth,
    payer,
    positionOwner,
    lockOwner,
    positionNftAccount,
    positionId,
    positionNftMint,
    authPositionNftAccount,
    positionNftProgram,
    lockPositionId,
    lockNftMint,
    lockNftAccount,
    metadataAccount,
    withMetadata
  }) {
    const keys = [
      { pubkey: auth, isSigner: false, isWritable: false },
      { pubkey: payer, isSigner: true, isWritable: true },
      { pubkey: positionOwner, isSigner: true, isWritable: true },
      { pubkey: lockOwner, isSigner: false, isWritable: false },
      { pubkey: positionNftAccount, isSigner: false, isWritable: true },
      { pubkey: positionId, isSigner: false, isWritable: false },
      { pubkey: positionNftMint, isSigner: false, isWritable: true },
      { pubkey: authPositionNftAccount, isSigner: false, isWritable: true },
      { pubkey: lockPositionId, isSigner: false, isWritable: true },
      { pubkey: lockNftMint, isSigner: true, isWritable: true },
      { pubkey: lockNftAccount, isSigner: false, isWritable: true },
      { pubkey: metadataAccount, isSigner: false, isWritable: true },
      { pubkey: METADATA_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: RENT_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: positionNftProgram, isSigner: false, isWritable: false },
      { pubkey: import_web319.SystemProgram.programId, isSigner: false, isWritable: false }
    ];
    const dataLayout = struct([bool("withMetadata")]);
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
      withMetadata
    }, data);
    const aData = Buffer.from([...lockInsDataBuf, ...data]);
    return new import_web319.TransactionInstruction({
      keys,
      programId,
      data: aData
    });
  }
  static lockPositionInstruction({
    programId,
    authProgramId,
    poolProgramId,
    owner,
    positionNft
  }) {
    const { publicKey: nftAccount } = getATAAddress(owner, positionNft, import_spl_token13.TOKEN_PROGRAM_ID);
    const { publicKey: positionId } = getPdaPersonalPositionAddress(poolProgramId, positionNft);
    const keys = [
      { pubkey: authProgramId, isSigner: false, isWritable: false },
      { pubkey: owner, isSigner: true, isWritable: false },
      { pubkey: nftAccount, isSigner: false, isWritable: true },
      { pubkey: positionId, isSigner: false, isWritable: false },
      { pubkey: getPdaLockPositionId(programId, positionId).publicKey, isSigner: false, isWritable: true },
      { pubkey: import_spl_token13.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_web319.SystemProgram.programId, isSigner: false, isWritable: false }
    ];
    return new import_web319.TransactionInstruction({
      keys,
      programId,
      data: Buffer.from(lockInsDataBuf)
    });
  }
  static harvestLockPositionInstruction(props) {
    const [poolProgramId, poolId] = [new import_web319.PublicKey(props.poolKeys.programId), new import_web319.PublicKey(props.poolKeys.id)];
    const tickArrayLowerStartIndex = TickUtils.getTickArrayStartIndexByTick(props.ownerPosition.tickLower, props.poolKeys.config.tickSpacing);
    const tickArrayUpperStartIndex = TickUtils.getTickArrayStartIndexByTick(props.ownerPosition.tickUpper, props.poolKeys.config.tickSpacing);
    const { publicKey: tickArrayLower } = getPdaTickArrayAddress(poolProgramId, poolId, tickArrayLowerStartIndex);
    const { publicKey: tickArrayUpper } = getPdaTickArrayAddress(poolProgramId, poolId, tickArrayUpperStartIndex);
    const { publicKey: nftAccount } = getATAAddress(props.owner, props.ownerPosition.nftMint, import_spl_token13.TOKEN_PROGRAM_ID);
    const { publicKey: positionId } = getPdaPersonalPositionAddress(poolProgramId, props.ownerPosition.nftMint);
    const { publicKey: protocolPosition } = getPdaProtocolPositionAddress(poolProgramId, poolId, props.ownerPosition.tickLower, props.ownerPosition.tickUpper);
    const rewardAccounts = [];
    for (let i = 0; i < props.poolKeys.rewardInfos.length; i++) {
      rewardAccounts.push({
        poolRewardVault: new import_web319.PublicKey(props.poolKeys.rewardInfos[i].vault),
        ownerRewardVault: props.ownerRewardAccounts[i],
        rewardMint: new import_web319.PublicKey(props.poolKeys.rewardInfos[i].mint.address)
      });
    }
    const remainingAccounts = [
      ...rewardAccounts.map((i) => [
        { pubkey: i.poolRewardVault, isSigner: false, isWritable: true },
        { pubkey: i.ownerRewardVault, isSigner: false, isWritable: true },
        { pubkey: i.rewardMint, isSigner: false, isWritable: false }
      ]).flat()
    ];
    const keys = [
      { pubkey: props.authProgramId, isSigner: false, isWritable: false },
      { pubkey: getPdaLockPositionId(props.programId, positionId).publicKey, isSigner: false, isWritable: false },
      { pubkey: poolProgramId, isSigner: false, isWritable: false },
      { pubkey: props.owner, isSigner: true, isWritable: false },
      { pubkey: nftAccount, isSigner: false, isWritable: true },
      { pubkey: positionId, isSigner: false, isWritable: true },
      { pubkey: poolId, isSigner: false, isWritable: true },
      { pubkey: protocolPosition, isSigner: false, isWritable: true },
      { pubkey: new import_web319.PublicKey(props.poolKeys.vault.A), isSigner: false, isWritable: true },
      { pubkey: new import_web319.PublicKey(props.poolKeys.vault.B), isSigner: false, isWritable: true },
      { pubkey: tickArrayLower, isSigner: false, isWritable: true },
      { pubkey: tickArrayUpper, isSigner: false, isWritable: true },
      { pubkey: props.userVaultA, isSigner: false, isWritable: true },
      { pubkey: props.userVaultB, isSigner: false, isWritable: true },
      { pubkey: import_spl_token13.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: MEMO_PROGRAM_ID2, isSigner: false, isWritable: false },
      { pubkey: new import_web319.PublicKey(props.poolKeys.mintA.address), isSigner: false, isWritable: false },
      { pubkey: new import_web319.PublicKey(props.poolKeys.mintB.address), isSigner: false, isWritable: false },
      ...remainingAccounts
    ];
    return new import_web319.TransactionInstruction({
      keys,
      programId: props.programId,
      data: Buffer.from(lockHarvestInsDataBuf)
    });
  }
  static harvestLockPositionInstructionV2({
    programId,
    auth,
    lockPositionId,
    clmmProgram,
    lockOwner,
    lockNftMint,
    lockNftAccount,
    positionNftAccount,
    positionId,
    poolId,
    protocolPosition,
    vaultA,
    vaultB,
    tickArrayLower,
    tickArrayUpper,
    userVaultA,
    userVaultB,
    mintA,
    mintB,
    rewardAccounts,
    exTickArrayBitmap
  }) {
    const remainingAccounts = [
      ...exTickArrayBitmap ? [{ pubkey: exTickArrayBitmap, isSigner: false, isWritable: true }] : [],
      ...rewardAccounts.map((i) => [
        { pubkey: i.poolRewardVault, isSigner: false, isWritable: true },
        { pubkey: i.ownerRewardVault, isSigner: false, isWritable: true },
        { pubkey: i.rewardMint, isSigner: false, isWritable: false }
      ]).flat()
    ];
    const keys = [
      { pubkey: auth, isSigner: false, isWritable: false },
      { pubkey: lockOwner, isSigner: true, isWritable: false },
      { pubkey: lockNftAccount, isSigner: false, isWritable: true },
      { pubkey: lockPositionId, isSigner: false, isWritable: false },
      { pubkey: clmmProgram, isSigner: false, isWritable: false },
      { pubkey: positionNftAccount, isSigner: false, isWritable: true },
      { pubkey: positionId, isSigner: false, isWritable: true },
      { pubkey: poolId, isSigner: false, isWritable: true },
      { pubkey: protocolPosition, isSigner: false, isWritable: true },
      { pubkey: vaultA, isSigner: false, isWritable: true },
      { pubkey: vaultB, isSigner: false, isWritable: true },
      { pubkey: tickArrayLower, isSigner: false, isWritable: true },
      { pubkey: tickArrayUpper, isSigner: false, isWritable: true },
      { pubkey: userVaultA, isSigner: false, isWritable: true },
      { pubkey: userVaultB, isSigner: false, isWritable: true },
      { pubkey: import_spl_token13.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token13.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: MEMO_PROGRAM_ID2, isSigner: false, isWritable: false },
      { pubkey: mintA, isSigner: false, isWritable: false },
      { pubkey: mintB, isSigner: false, isWritable: false },
      ...remainingAccounts
    ];
    return new import_web319.TransactionInstruction({
      keys,
      programId,
      data: Buffer.from(lockHarvestInsDataBuf)
    });
  }
};

// src/raydium/token/layout.ts
var SPL_MINT_LAYOUT = struct([
  u322("mintAuthorityOption"),
  publicKey("mintAuthority"),
  u64("supply"),
  u82("decimals"),
  u82("isInitialized"),
  u322("freezeAuthorityOption"),
  publicKey("freezeAuthority")
]);

// src/raydium/token/utils.ts
var import_web320 = require("@solana/web3.js");
var import_spl_token14 = require("@solana/spl-token");
var parseTokenInfo = async ({
  connection,
  mint
}) => {
  const accountData = await connection.getAccountInfo(new import_web320.PublicKey(mint));
  if (!accountData || accountData.data.length !== import_spl_token14.MintLayout.span)
    return;
  const tokenInfo = import_spl_token14.MintLayout.decode(accountData.data);
  return tokenInfo;
};
var toTokenInfo = ({
  mint,
  decimals,
  programId = import_spl_token14.TOKEN_PROGRAM_ID,
  logoURI = "",
  priority = 3
}) => {
  const pubStr = mint.toBase58().substring(0, 6);
  return {
    address: mint.toBase58(),
    decimals,
    symbol: pubStr,
    logoURI,
    extensions: {},
    chainId: 101,
    programId: programId.toString(),
    name: pubStr,
    tags: [],
    priority
  };
};
var toToken = (props) => new Token({
  mint: props.address,
  decimals: props.decimals,
  symbol: props.symbol,
  name: props.name
});
var toTokenAmount = ({
  amount,
  isRaw,
  name,
  ...props
}) => new TokenAmount(new Token({
  mint: solToWSol(props.address).toBase58(),
  decimals: props.decimals,
  symbol: props.symbol,
  name
}), amount, isRaw, name);
function solToWSolToken(token) {
  if (token.address === SOL_INFO.address)
    return TOKEN_WSOL;
  return token;
}
function wSolToSolToken(token) {
  if (token.address === TOKEN_WSOL.address)
    return SOL_INFO;
  return token;
}
var toApiV3Token = ({
  address,
  programId,
  decimals,
  ...props
}) => ({
  chainId: 101,
  address: solToWSol(address).toBase58(),
  programId,
  logoURI: "",
  symbol: "",
  name: "",
  decimals,
  tags: [],
  extensions: props.extensions || {},
  ...props
});
var toFeeConfig = (config2) => config2 ? {
  ...config2,
  transferFeeConfigAuthority: config2.transferFeeConfigAuthority.toBase58(),
  withdrawWithheldAuthority: config2.withdrawWithheldAuthority.toBase58(),
  withheldAmount: config2.withheldAmount.toString(),
  olderTransferFee: {
    ...config2.olderTransferFee,
    epoch: config2.olderTransferFee.epoch.toString(),
    maximumFee: config2.olderTransferFee.maximumFee.toString()
  },
  newerTransferFee: {
    ...config2.newerTransferFee,
    epoch: config2.newerTransferFee.epoch.toString(),
    maximumFee: config2.newerTransferFee.maximumFee.toString()
  }
} : void 0;

// src/raydium/liquidity/constant.ts
var import_bn20 = __toESM(require("bn.js"));
var LIQUIDITY_FEES_NUMERATOR = new import_bn20.default(25);
var LIQUIDITY_FEES_DENOMINATOR = new import_bn20.default(1e4);
var LIQUIDITY_VERSION_TO_SERUM_VERSION = {
  4: 3,
  5: 3
};

// src/raydium/liquidity/instruction.ts
var import_web322 = require("@solana/web3.js");
var import_spl_token15 = require("@solana/spl-token");

// src/raydium/liquidity/layout.ts
var fixedSwapInLayout = struct([u82("instruction"), u64("amountIn"), u64("minAmountOut")]);
var fixedSwapOutLayout = struct([u82("instruction"), u64("maxAmountIn"), u64("amountOut")]);
var createPoolV4Layout = struct([u82("instruction"), u82("nonce")]);
var initPoolLayout = struct([u82("instruction"), u82("nonce"), u64("startTime")]);
var liquidityStateV4Layout = struct([
  u64("status"),
  u64("nonce"),
  u64("maxOrder"),
  u64("depth"),
  u64("baseDecimal"),
  u64("quoteDecimal"),
  u64("state"),
  u64("resetFlag"),
  u64("minSize"),
  u64("volMaxCutRatio"),
  u64("amountWaveRatio"),
  u64("baseLotSize"),
  u64("quoteLotSize"),
  u64("minPriceMultiplier"),
  u64("maxPriceMultiplier"),
  u64("systemDecimalValue"),
  u64("minSeparateNumerator"),
  u64("minSeparateDenominator"),
  u64("tradeFeeNumerator"),
  u64("tradeFeeDenominator"),
  u64("pnlNumerator"),
  u64("pnlDenominator"),
  u64("swapFeeNumerator"),
  u64("swapFeeDenominator"),
  u64("baseNeedTakePnl"),
  u64("quoteNeedTakePnl"),
  u64("quoteTotalPnl"),
  u64("baseTotalPnl"),
  u64("poolOpenTime"),
  u64("punishPcAmount"),
  u64("punishCoinAmount"),
  u64("orderbookToInitTime"),
  u128("swapBaseInAmount"),
  u128("swapQuoteOutAmount"),
  u64("swapBase2QuoteFee"),
  u128("swapQuoteInAmount"),
  u128("swapBaseOutAmount"),
  u64("swapQuote2BaseFee"),
  publicKey("baseVault"),
  publicKey("quoteVault"),
  publicKey("baseMint"),
  publicKey("quoteMint"),
  publicKey("lpMint"),
  publicKey("openOrders"),
  publicKey("marketId"),
  publicKey("marketProgramId"),
  publicKey("targetOrders"),
  publicKey("withdrawQueue"),
  publicKey("lpVault"),
  publicKey("owner"),
  u64("lpReserve"),
  seq2(u64(), 3, "padding")
]);
var liquidityStateV5Layout = struct([
  u64("accountType"),
  u64("status"),
  u64("nonce"),
  u64("maxOrder"),
  u64("depth"),
  u64("baseDecimal"),
  u64("quoteDecimal"),
  u64("state"),
  u64("resetFlag"),
  u64("minSize"),
  u64("volMaxCutRatio"),
  u64("amountWaveRatio"),
  u64("baseLotSize"),
  u64("quoteLotSize"),
  u64("minPriceMultiplier"),
  u64("maxPriceMultiplier"),
  u64("systemDecimalsValue"),
  u64("abortTradeFactor"),
  u64("priceTickMultiplier"),
  u64("priceTick"),
  u64("minSeparateNumerator"),
  u64("minSeparateDenominator"),
  u64("tradeFeeNumerator"),
  u64("tradeFeeDenominator"),
  u64("pnlNumerator"),
  u64("pnlDenominator"),
  u64("swapFeeNumerator"),
  u64("swapFeeDenominator"),
  u64("baseNeedTakePnl"),
  u64("quoteNeedTakePnl"),
  u64("quoteTotalPnl"),
  u64("baseTotalPnl"),
  u64("poolOpenTime"),
  u64("punishPcAmount"),
  u64("punishCoinAmount"),
  u64("orderbookToInitTime"),
  u128("swapBaseInAmount"),
  u128("swapQuoteOutAmount"),
  u128("swapQuoteInAmount"),
  u128("swapBaseOutAmount"),
  u64("swapQuote2BaseFee"),
  u64("swapBase2QuoteFee"),
  publicKey("baseVault"),
  publicKey("quoteVault"),
  publicKey("baseMint"),
  publicKey("quoteMint"),
  publicKey("lpMint"),
  publicKey("modelDataAccount"),
  publicKey("openOrders"),
  publicKey("marketId"),
  publicKey("marketProgramId"),
  publicKey("targetOrders"),
  publicKey("owner"),
  seq2(u64(), 64, "padding")
]);
var addLiquidityLayout = struct([
  u82("instruction"),
  u64("baseAmountIn"),
  u64("quoteAmountIn"),
  u64("fixedSide"),
  u64("otherAmountMin")
]);
var removeLiquidityLayout = struct([
  u82("instruction"),
  u64("lpAmount"),
  u64("baseAmountMin"),
  u64("quoteAmountMin")
]);
var LIQUIDITY_VERSION_TO_STATE_LAYOUT = {
  4: liquidityStateV4Layout,
  5: liquidityStateV5Layout
};
var createPoolFeeLayout = struct([u64("fee")]);

// src/raydium/liquidity/stable.ts
var import_web321 = require("@solana/web3.js");
var MODEL_DATA_PUBKEY = new import_web321.PublicKey("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo");
var ELEMENT_SIZE = 5e4;
var DataElement = struct([u64("x"), u64("y"), u64("price")]);
var modelDataInfoLayout = struct([
  u64("accountType"),
  u64("status"),
  u64("multiplier"),
  u64("validDataCount"),
  seq2(DataElement, ELEMENT_SIZE, "DataElement")
]);
function estimateRangeByXyReal(_xReal, _yReal) {
  return [0, ELEMENT_SIZE - 2];
}
function estimateRangeByX(_x) {
  return [0, ELEMENT_SIZE - 2];
}
function estimateRangeByY(_y) {
  return [0, ELEMENT_SIZE - 2];
}
function getMininumRangeByXyReal(layoutData, xReal, yReal) {
  const [min2, max2] = estimateRangeByXyReal(xReal, yReal);
  let minRangeIdx = min2;
  let maxRangeIdx = max2;
  let mid = 0;
  const target = xReal * layoutData.multiplier / yReal;
  while (minRangeIdx <= maxRangeIdx) {
    mid = Math.floor((maxRangeIdx + minRangeIdx) / 2);
    if (mid === 0 || mid >= ELEMENT_SIZE - 2) {
      return [mid, mid, false];
    }
    const cur = layoutData.DataElement[mid].x * layoutData.multiplier / layoutData.DataElement[mid].y;
    const left = layoutData.DataElement[mid - 1].x * layoutData.multiplier / layoutData.DataElement[mid - 1].y;
    const right = layoutData.DataElement[mid + 1].x * layoutData.multiplier / layoutData.DataElement[mid + 1].y;
    if (target === cur) {
      return [mid, mid, true];
    } else if (target === left) {
      return [mid - 1, mid - 1, true];
    } else if (target === right) {
      return [mid + 1, mid + 1, true];
    } else if (target < left) {
      maxRangeIdx = mid - 1;
    } else if (target > left && target < cur) {
      return [mid - 1, mid, true];
    } else if (target > cur && target < right) {
      return [mid, mid + 1, true];
    } else {
      minRangeIdx = mid + 1;
    }
  }
  return [mid, mid, false];
}
function getRatio(layoutData, xReal, yReal) {
  const [minRangeIdx, maxRangeIdx, find] = getMininumRangeByXyReal(layoutData, xReal, yReal);
  if (!find) {
    return 0;
  }
  if (minRangeIdx === maxRangeIdx) {
    const x = layoutData.DataElement[minRangeIdx].x;
    const ratio = xReal * layoutData.multiplier / x;
    return ratio;
  } else {
    const x1 = layoutData.DataElement[minRangeIdx].x;
    const y1 = layoutData.DataElement[minRangeIdx].y;
    const x2 = layoutData.DataElement[maxRangeIdx].x;
    const y2 = layoutData.DataElement[maxRangeIdx].y;
    const xDenominator = yReal * (x2 * y1 - x1 * y2);
    const xNumerator1 = x1 * xDenominator;
    const xNumerator2 = (x2 - x1) * (xReal * y1 - x1 * yReal) * y2;
    const xNumerator = xNumerator1 + xNumerator2;
    const ratio = xReal * layoutData.multiplier * xDenominator / xNumerator;
    return ratio;
  }
}
function realToTable(layoutData, realValue, ratio) {
  return realValue * layoutData.multiplier / ratio;
}
function tableToReal(layoutData, tableValue, ratio) {
  return tableValue * ratio / layoutData.multiplier;
}
function getMinimumRangeByX(layoutData, x) {
  const [min2, max2] = estimateRangeByX(x);
  let minRangeIdx = min2;
  let maxRangeIdx = max2;
  let mid = 0;
  const target = x;
  while (minRangeIdx < maxRangeIdx) {
    mid = Math.floor((maxRangeIdx + minRangeIdx) / 2);
    if (mid <= 0 || mid > ELEMENT_SIZE - 2) {
      return [mid, mid, false];
    }
    const cur = layoutData.DataElement[mid].x;
    const left = layoutData.DataElement[mid - 1].x;
    const right = layoutData.DataElement[mid + 1].x;
    if (target === cur)
      return [mid, mid, true];
    else if (target === left)
      return [mid - 1, mid - 1, true];
    else if (target === right)
      return [mid + 1, mid + 1, true];
    else if (target < left)
      maxRangeIdx = mid - 1;
    else if (target > left && target < cur)
      return [mid - 1, mid, true];
    else if (target > cur && target < right)
      return [mid, mid + 1, true];
    else
      minRangeIdx = mid + 1;
  }
  return [mid, mid, false];
}
function getMinimumRangeByY(layoutData, y) {
  const [min2, max2] = estimateRangeByY(y);
  let minRangeIdx = min2;
  let maxRangeIdx = max2;
  let mid = 0;
  const target = y;
  while (minRangeIdx <= maxRangeIdx) {
    mid = Math.floor((maxRangeIdx + minRangeIdx) / 2);
    if (mid <= 0 || mid >= ELEMENT_SIZE - 2) {
      return [mid, mid, false];
    }
    const cur = layoutData.DataElement[mid].y;
    const left = layoutData.DataElement[mid - 1].y;
    const right = layoutData.DataElement[mid + 1].y;
    if (target === cur)
      return [mid, mid, true];
    else if (target === left)
      return [mid - 1, mid - 1, true];
    else if (target === right)
      return [mid + 1, mid + 1, true];
    else if (target < right) {
      minRangeIdx = mid + 1;
    } else if (target < left && target > cur)
      return [mid - 1, mid, true];
    else if (target < cur && target > right)
      return [mid, mid + 1, true];
    else
      maxRangeIdx = mid - 1;
  }
  return [mid, mid, false];
}
function getDataByX(layoutData, x, dx, priceUp) {
  const xWithDx = priceUp ? x + dx : x - dx;
  const [minIdx, maxIdx, find] = getMinimumRangeByX(layoutData, xWithDx);
  if (!find)
    return [0, 0, false, find];
  if (minIdx === maxIdx)
    return [layoutData.DataElement[maxIdx].price, layoutData.DataElement[maxIdx].y, false, find];
  else {
    const x1 = layoutData.DataElement[minIdx].x;
    const x2 = layoutData.DataElement[maxIdx].x;
    const p1 = layoutData.DataElement[minIdx].price;
    const p2 = layoutData.DataElement[maxIdx].price;
    const y1 = layoutData.DataElement[minIdx].y;
    const y2 = layoutData.DataElement[maxIdx].y;
    if (x >= x1 && x <= x2) {
      if (priceUp)
        return [p2, y2, true, find];
      else
        return [p1, y1, true, find];
    } else {
      let p, y;
      if (priceUp) {
        p = p1 + (p2 - p1) * (x - x1) / (x2 - x1);
        y = y1 - (xWithDx - x1) * layoutData.multiplier / p2;
      } else {
        p = p1 + (p2 - p1) * (x - x1) / (x2 - x1);
        y = y2 + (x2 - xWithDx) * layoutData.multiplier / p1;
      }
      return [p, y, false, find];
    }
  }
}
function getDataByY(layoutData, y, dy, priceUp) {
  const yWithDy = priceUp ? y - dy : y + dy;
  const [minIdx, maxIdx, find] = getMinimumRangeByY(layoutData, yWithDy);
  if (!find)
    return [0, 0, false, find];
  if (minIdx === maxIdx)
    return [layoutData.DataElement[maxIdx].price, layoutData.DataElement[maxIdx].x, false, find];
  else {
    const x1 = layoutData.DataElement[minIdx].x;
    const x2 = layoutData.DataElement[maxIdx].x;
    const p1 = layoutData.DataElement[minIdx].price;
    const p2 = layoutData.DataElement[maxIdx].price;
    const y1 = layoutData.DataElement[minIdx].y;
    const y2 = layoutData.DataElement[maxIdx].y;
    if (y >= y2 && y <= y1) {
      return priceUp ? [p2, x2, true, find] : [p1, x1, true, find];
    } else {
      let p, x;
      if (priceUp) {
        p = p1 + (p2 - p1) * (y1 - y) / (y1 - y2);
        x = x1 + p2 * (y1 - yWithDy) / layoutData.multiplier;
      } else {
        p = p1 + (p2 - p1) * (y1 - y) / (y1 - y2);
        x = x2 - p1 * (yWithDy - y2) / layoutData.multiplier;
      }
      return [p, x, false, find];
    }
  }
}
function getMidPrice(layoutData, x) {
  const ret = getDataByX(layoutData, x, 0, false);
  if (ret[3])
    return ret[0];
  else
    return 0;
}
function getDyByDxBaseIn(layoutData, xReal, yReal, dxReal) {
  const ratio = getRatio(layoutData, xReal, yReal);
  const x = realToTable(layoutData, xReal, ratio);
  const y = realToTable(layoutData, yReal, ratio);
  const dx = realToTable(layoutData, dxReal, ratio);
  const priceUp = true;
  const [p, y2, lessTrade, find] = getDataByX(layoutData, x, dx, priceUp);
  if (!find)
    return 0;
  if (lessTrade) {
    const dyReal = dxReal * layoutData.multiplier / p;
    return dyReal;
  } else {
    const dy = y - y2;
    const dyReal = tableToReal(layoutData, dy, ratio);
    return dyReal;
  }
}
function getDxByDyBaseIn(layoutData, xReal, yReal, dyReal) {
  const ratio = getRatio(layoutData, xReal, yReal);
  const x = realToTable(layoutData, xReal, ratio);
  const y = realToTable(layoutData, yReal, ratio);
  const dy = realToTable(layoutData, dyReal, ratio);
  const priceUp = false;
  const [p, x2, lessTrade, find] = getDataByY(layoutData, y, dy, priceUp);
  if (!find)
    return 0;
  if (lessTrade) {
    const dxReal = dyReal * p / layoutData.multiplier;
    return dxReal;
  } else {
    const dx = x - x2;
    const dxReal = tableToReal(layoutData, dx, ratio);
    return dxReal;
  }
}
function formatLayout(buffer) {
  const layoutInfo = modelDataInfoLayout.decode(buffer);
  return {
    accountType: layoutInfo.accountType.toNumber(),
    status: layoutInfo.status.toNumber(),
    multiplier: layoutInfo.multiplier.toNumber(),
    validDataCount: layoutInfo.validDataCount.toNumber(),
    DataElement: layoutInfo.DataElement.map((item) => ({
      x: item.x.toNumber(),
      y: item.y.toNumber(),
      price: item.price.toNumber()
    }))
  };
}
function getStablePrice(layoutData, coinReal, pcReal, baseCoin) {
  const price = getMidPrice(layoutData, realToTable(layoutData, coinReal, getRatio(layoutData, coinReal, pcReal))) / layoutData.multiplier;
  return baseCoin ? price : 1 / price;
}
var StableLayout = class {
  connection;
  _layoutData = {
    accountType: 0,
    status: 0,
    multiplier: 0,
    validDataCount: 0,
    DataElement: []
  };
  constructor({ connection }) {
    this.connection = connection;
  }
  get stableModelData() {
    return this._layoutData;
  }
  async initStableModelLayout() {
    if (this._layoutData.validDataCount === 0) {
      if (this.connection) {
        const acc = await this.connection.getAccountInfo(MODEL_DATA_PUBKEY);
        if (acc)
          this._layoutData = formatLayout(acc?.data);
      }
    }
  }
};

// src/raydium/liquidity/instruction.ts
var logger12 = createLogger("Raydium_liquidity_instruction");
function makeAddLiquidityInstruction(params) {
  const { poolInfo, poolKeys, userKeys, baseAmountIn, quoteAmountIn, fixedSide, otherAmountMin } = params;
  const data = Buffer.alloc(addLiquidityLayout.span);
  addLiquidityLayout.encode({
    instruction: 3,
    baseAmountIn: parseBigNumberish(baseAmountIn),
    quoteAmountIn: parseBigNumberish(quoteAmountIn),
    otherAmountMin: parseBigNumberish(otherAmountMin),
    fixedSide: fixedSide === "base" ? BN_ZERO : BN_ONE
  }, data);
  const keys = [
    accountMeta({ pubkey: import_spl_token15.TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolInfo.id) }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.authority), isWritable: false }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.openOrders), isWritable: false }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.targetOrders) }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolInfo.lpMint.address) }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.vault.A) }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.vault.B) })
  ];
  if (poolInfo.pooltype.includes("StablePool")) {
    keys.push(accountMeta({ pubkey: MODEL_DATA_PUBKEY }));
  }
  keys.push(accountMeta({ pubkey: new import_web322.PublicKey(poolInfo.marketId), isWritable: false }), accountMeta({ pubkey: userKeys.baseTokenAccount }), accountMeta({ pubkey: userKeys.quoteTokenAccount }), accountMeta({ pubkey: userKeys.lpTokenAccount }), accountMeta({ pubkey: userKeys.owner, isWritable: false, isSigner: true }), accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.marketEventQueue), isWritable: false }));
  return new import_web322.TransactionInstruction({
    programId: new import_web322.PublicKey(poolInfo.programId),
    keys,
    data
  });
}
function removeLiquidityInstruction(params) {
  const { poolInfo, poolKeys: poolKeyProps, userKeys, lpAmount, baseAmountMin, quoteAmountMin } = params;
  const poolKeys = jsonInfo2PoolKeys(poolKeyProps);
  let version = 4;
  if (poolInfo.pooltype.includes("StablePool"))
    version = 5;
  if (version === 4 || version === 5) {
    const data = Buffer.alloc(removeLiquidityLayout.span);
    removeLiquidityLayout.encode({
      instruction: 4,
      lpAmount: parseBigNumberish(lpAmount),
      baseAmountMin: parseBigNumberish(baseAmountMin),
      quoteAmountMin: parseBigNumberish(quoteAmountMin)
    }, data);
    const keys = [
      accountMeta({ pubkey: import_spl_token15.TOKEN_PROGRAM_ID, isWritable: false }),
      accountMeta({ pubkey: poolKeys.id }),
      accountMeta({ pubkey: poolKeys.authority, isWritable: false }),
      accountMeta({ pubkey: poolKeys.openOrders }),
      accountMeta({ pubkey: poolKeys.targetOrders }),
      accountMeta({ pubkey: poolKeys.mintLp.address }),
      accountMeta({ pubkey: poolKeys.vault.A }),
      accountMeta({ pubkey: poolKeys.vault.B })
    ];
    if (version === 5) {
      keys.push(accountMeta({ pubkey: MODEL_DATA_PUBKEY }));
    } else {
      keys.push(accountMeta({ pubkey: poolKeys.id }));
      keys.push(accountMeta({ pubkey: poolKeys.id }));
    }
    keys.push(accountMeta({ pubkey: poolKeys.marketProgramId, isWritable: false }), accountMeta({ pubkey: poolKeys.marketId }), accountMeta({ pubkey: poolKeys.marketBaseVault }), accountMeta({ pubkey: poolKeys.marketQuoteVault }), accountMeta({ pubkey: poolKeys.marketAuthority, isWritable: false }), accountMeta({ pubkey: userKeys.lpTokenAccount }), accountMeta({ pubkey: userKeys.baseTokenAccount }), accountMeta({ pubkey: userKeys.quoteTokenAccount }), accountMeta({ pubkey: userKeys.owner, isWritable: false, isSigner: true }), accountMeta({ pubkey: poolKeys.marketEventQueue }), accountMeta({ pubkey: poolKeys.marketBids }), accountMeta({ pubkey: poolKeys.marketAsks }));
    return new import_web322.TransactionInstruction({
      programId: poolKeys.programId,
      keys,
      data
    });
  }
  return new import_web322.TransactionInstruction({ programId: poolKeys.programId, keys: [] });
}
function createPoolV4InstructionV2({
  programId,
  ammId,
  ammAuthority,
  ammOpenOrders,
  lpMint,
  coinMint,
  pcMint,
  coinVault,
  pcVault,
  withdrawQueue,
  ammTargetOrders,
  poolTempLp,
  marketProgramId,
  marketId,
  userWallet,
  userCoinVault,
  userPcVault,
  userLpVault,
  nonce,
  openTime,
  coinAmount,
  pcAmount,
  ammConfigId,
  feeDestinationId
}) {
  const dataLayout = struct([u82("instruction"), u82("nonce"), u64("openTime"), u64("pcAmount"), u64("coinAmount")]);
  const keys = [
    { pubkey: import_spl_token15.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: import_spl_token15.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: import_web322.SystemProgram.programId, isSigner: false, isWritable: false },
    { pubkey: RENT_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: ammId, isSigner: false, isWritable: true },
    { pubkey: ammAuthority, isSigner: false, isWritable: false },
    { pubkey: ammOpenOrders, isSigner: false, isWritable: true },
    { pubkey: lpMint, isSigner: false, isWritable: true },
    { pubkey: coinMint, isSigner: false, isWritable: false },
    { pubkey: pcMint, isSigner: false, isWritable: false },
    { pubkey: coinVault, isSigner: false, isWritable: true },
    { pubkey: pcVault, isSigner: false, isWritable: true },
    { pubkey: ammTargetOrders, isSigner: false, isWritable: true },
    { pubkey: ammConfigId, isSigner: false, isWritable: false },
    { pubkey: feeDestinationId, isSigner: false, isWritable: true },
    { pubkey: marketProgramId, isSigner: false, isWritable: false },
    { pubkey: marketId, isSigner: false, isWritable: false },
    { pubkey: userWallet, isSigner: true, isWritable: true },
    { pubkey: userCoinVault, isSigner: false, isWritable: true },
    { pubkey: userPcVault, isSigner: false, isWritable: true },
    { pubkey: userLpVault, isSigner: false, isWritable: true }
  ];
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({ instruction: 1, nonce, openTime, coinAmount, pcAmount }, data);
  return {
    instruction: new import_web322.TransactionInstruction({
      keys,
      programId,
      data
    }),
    instructionType: InstructionType.AmmV4CreatePool
  };
}
function simulatePoolInfoInstruction(poolKeys) {
  const simulatePoolLayout = struct([u82("instruction"), u82("simulateType")]);
  const data = Buffer.alloc(simulatePoolLayout.span);
  simulatePoolLayout.encode({
    instruction: 12,
    simulateType: 0
  }, data);
  const keys = [
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.id), isWritable: false }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.authority), isWritable: false }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.openOrders), isWritable: false }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.vault.A), isWritable: false }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.vault.B), isWritable: false }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.mintLp.address), isWritable: false }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.marketId), isWritable: false }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.marketEventQueue), isWritable: false })
  ];
  return new import_web322.TransactionInstruction({
    programId: new import_web322.PublicKey(poolKeys.programId),
    keys,
    data
  });
}
function makeSwapFixedInInstruction({ poolKeys: propPoolKeys, userKeys, amountIn, minAmountOut }, version) {
  const poolKeys = jsonInfo2PoolKeys(propPoolKeys);
  const data = Buffer.alloc(fixedSwapInLayout.span);
  fixedSwapInLayout.encode({
    instruction: 9,
    amountIn: parseBigNumberish(amountIn),
    minAmountOut: parseBigNumberish(minAmountOut)
  }, data);
  const keys = [
    accountMeta({ pubkey: import_spl_token15.TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: poolKeys.id }),
    accountMeta({ pubkey: poolKeys.authority, isWritable: false }),
    accountMeta({ pubkey: poolKeys.openOrders })
  ];
  if (version === 4)
    keys.push(accountMeta({ pubkey: poolKeys.targetOrders }));
  keys.push(accountMeta({ pubkey: poolKeys.vault.A }), accountMeta({ pubkey: poolKeys.vault.B }));
  if (version === 5)
    keys.push(accountMeta({ pubkey: MODEL_DATA_PUBKEY }));
  keys.push(accountMeta({ pubkey: poolKeys.marketProgramId, isWritable: false }), accountMeta({ pubkey: poolKeys.marketId }), accountMeta({ pubkey: poolKeys.marketBids }), accountMeta({ pubkey: poolKeys.marketAsks }), accountMeta({ pubkey: poolKeys.marketEventQueue }), accountMeta({ pubkey: poolKeys.marketBaseVault }), accountMeta({ pubkey: poolKeys.marketQuoteVault }), accountMeta({ pubkey: poolKeys.marketAuthority, isWritable: false }), accountMeta({ pubkey: userKeys.tokenAccountIn }), accountMeta({ pubkey: userKeys.tokenAccountOut }), accountMeta({ pubkey: userKeys.owner, isWritable: false, isSigner: true }));
  return new import_web322.TransactionInstruction({
    programId: poolKeys.programId,
    keys,
    data
  });
}
function makeSwapFixedOutInstruction({ poolKeys: propPoolKeys, userKeys, maxAmountIn, amountOut }, version) {
  const poolKeys = jsonInfo2PoolKeys(propPoolKeys);
  const data = Buffer.alloc(fixedSwapOutLayout.span);
  fixedSwapOutLayout.encode({
    instruction: 11,
    maxAmountIn: parseBigNumberish(maxAmountIn),
    amountOut: parseBigNumberish(amountOut)
  }, data);
  const keys = [
    accountMeta({ pubkey: import_spl_token15.TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: poolKeys.id }),
    accountMeta({ pubkey: poolKeys.authority, isWritable: false }),
    accountMeta({ pubkey: poolKeys.openOrders }),
    accountMeta({ pubkey: poolKeys.targetOrders }),
    accountMeta({ pubkey: poolKeys.vault.A }),
    accountMeta({ pubkey: poolKeys.vault.B })
  ];
  if (version === 5)
    keys.push(accountMeta({ pubkey: MODEL_DATA_PUBKEY }));
  keys.push(accountMeta({ pubkey: poolKeys.marketProgramId, isWritable: false }), accountMeta({ pubkey: poolKeys.marketId }), accountMeta({ pubkey: poolKeys.marketBids }), accountMeta({ pubkey: poolKeys.marketAsks }), accountMeta({ pubkey: poolKeys.marketEventQueue }), accountMeta({ pubkey: poolKeys.marketBaseVault }), accountMeta({ pubkey: poolKeys.marketQuoteVault }), accountMeta({ pubkey: poolKeys.marketAuthority, isWritable: false }), accountMeta({ pubkey: userKeys.tokenAccountIn }), accountMeta({ pubkey: userKeys.tokenAccountOut }), accountMeta({ pubkey: userKeys.owner, isWritable: false, isSigner: true }));
  return new import_web322.TransactionInstruction({
    programId: poolKeys.programId,
    keys,
    data
  });
}
function makeAMMSwapInstruction(params) {
  const { poolKeys, version, userKeys, amountIn, amountOut, fixedSide } = params;
  if (version === 4 || version === 5) {
    const props = { poolKeys, userKeys };
    if (fixedSide === "in") {
      return makeSwapFixedInInstruction({
        ...props,
        amountIn,
        minAmountOut: amountOut
      }, version);
    } else if (fixedSide === "out") {
      return makeSwapFixedOutInstruction({
        ...props,
        maxAmountIn: amountIn,
        amountOut
      }, version);
    }
    logger12.logWithError("invalid params", "params", params);
  }
  logger12.logWithError("invalid version", "poolKeys.version", version);
  throw new Error("invalid version");
}
function makeInitPoolInstructionV4({
  poolKeys: propPoolKeys,
  userKeys,
  startTime
}) {
  const data = Buffer.alloc(initPoolLayout.span);
  initPoolLayout.encode({
    instruction: 0,
    nonce: 5,
    startTime: parseBigNumberish(startTime)
  }, data);
  const poolKeys = jsonInfo2PoolKeys(propPoolKeys);
  const keys = [
    accountMeta({ pubkey: import_spl_token15.TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_web322.SystemProgram.programId, isWritable: false }),
    accountMeta({ pubkey: import_web322.SYSVAR_RENT_PUBKEY, isWritable: false }),
    accountMeta({ pubkey: poolKeys.id }),
    accountMeta({ pubkey: poolKeys.authority, isWritable: false }),
    accountMeta({ pubkey: poolKeys.openOrders }),
    accountMeta({ pubkey: poolKeys.mintLp.address }),
    accountMeta({ pubkey: poolKeys.mintA.address, isWritable: false }),
    accountMeta({ pubkey: poolKeys.mintB.address, isWritable: false }),
    accountMeta({ pubkey: poolKeys.vault.A, isWritable: false }),
    accountMeta({ pubkey: poolKeys.vault.B, isWritable: false }),
    accountMeta({ pubkey: poolKeys.id }),
    accountMeta({ pubkey: poolKeys.targetOrders }),
    accountMeta({ pubkey: userKeys.lpTokenAccount }),
    accountMeta({ pubkey: poolKeys.id, isWritable: false }),
    accountMeta({ pubkey: poolKeys.marketProgramId, isWritable: false }),
    accountMeta({ pubkey: poolKeys.marketId, isWritable: false }),
    accountMeta({ pubkey: userKeys.payer, isSigner: true })
  ];
  return new import_web322.TransactionInstruction({
    programId: poolKeys.programId,
    keys,
    data
  });
}
function makeSimulatePoolInfoInstruction({ poolKeys }) {
  const LAYOUT = struct([u82("instruction"), u82("simulateType")]);
  const data = Buffer.alloc(LAYOUT.span);
  LAYOUT.encode({
    instruction: 12,
    simulateType: 0
  }, data);
  const keys = [
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.id), isWritable: false }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.authority), isWritable: false }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.openOrders), isWritable: false }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.vault.A), isWritable: false }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.vault.B), isWritable: false }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.mintLp.address), isWritable: false }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.marketId), isWritable: false }),
    accountMeta({ pubkey: new import_web322.PublicKey(poolKeys.marketEventQueue), isWritable: false })
  ];
  return {
    instruction: new import_web322.TransactionInstruction({
      programId: new import_web322.PublicKey(poolKeys.programId),
      keys,
      data
    })
  };
}

// src/raydium/liquidity/utils.ts
var import_web324 = require("@solana/web3.js");
var import_bn21 = __toESM(require("bn.js"));
var import_spl_token16 = require("@solana/spl-token");

// src/raydium/liquidity/serum.ts
var import_web323 = require("@solana/web3.js");
var logger13 = createLogger("Raydium_liquidity_serum");
function getSerumAssociatedAuthority({ programId, marketId }) {
  const seeds = [marketId.toBuffer()];
  let nonce = 0;
  let publicKey2;
  while (nonce < 100) {
    try {
      const seedsWithNonce = seeds.concat(Buffer.from([nonce]), Buffer.alloc(7));
      publicKey2 = import_web323.PublicKey.createProgramAddressSync(seedsWithNonce, programId);
    } catch (err) {
      if (err instanceof TypeError) {
        throw err;
      }
      nonce++;
      continue;
    }
    return { publicKey: publicKey2, nonce };
  }
  logger13.logWithError("unable to find a viable program address nonce", "params", {
    programId,
    marketId
  });
  throw new Error("unable to find a viable program address nonce");
}

// src/raydium/liquidity/utils.ts
function getAssociatedConfigId({ programId }) {
  const { publicKey: publicKey2 } = findProgramAddress([Buffer.from("amm_config_account_seed", "utf-8")], programId);
  return publicKey2;
}
function getLiquidityAssociatedId({ name, programId, marketId }) {
  const { publicKey: publicKey2 } = findProgramAddress([programId.toBuffer(), marketId.toBuffer(), Buffer.from(name, "utf-8")], programId);
  return publicKey2;
}
function getAssociatedOpenOrders({ programId, marketId }) {
  const { publicKey: publicKey2 } = findProgramAddress([programId.toBuffer(), marketId.toBuffer(), Buffer.from("open_order_associated_seed", "utf-8")], programId);
  return publicKey2;
}
function getLiquidityAssociatedAuthority({ programId }) {
  return findProgramAddress([Buffer.from([97, 109, 109, 32, 97, 117, 116, 104, 111, 114, 105, 116, 121])], programId);
}
function getAssociatedPoolKeys({
  version,
  marketVersion,
  marketId,
  baseMint,
  quoteMint,
  baseDecimals,
  quoteDecimals,
  programId,
  marketProgramId
}) {
  const id = getLiquidityAssociatedId({ name: "amm_associated_seed", programId, marketId });
  const lpMint = getLiquidityAssociatedId({ name: "lp_mint_associated_seed", programId, marketId });
  const { publicKey: authority, nonce } = getLiquidityAssociatedAuthority({ programId });
  const baseVault = getLiquidityAssociatedId({ name: "coin_vault_associated_seed", programId, marketId });
  const quoteVault = getLiquidityAssociatedId({ name: "pc_vault_associated_seed", programId, marketId });
  const lpVault = getLiquidityAssociatedId({ name: "temp_lp_token_associated_seed", programId, marketId });
  const openOrders = getAssociatedOpenOrders({ programId, marketId });
  const targetOrders = getLiquidityAssociatedId({ name: "target_associated_seed", programId, marketId });
  const withdrawQueue = getLiquidityAssociatedId({ name: "withdraw_associated_seed", programId, marketId });
  const { publicKey: marketAuthority } = getSerumAssociatedAuthority({
    programId: marketProgramId,
    marketId
  });
  return {
    id,
    baseMint,
    quoteMint,
    lpMint,
    baseDecimals,
    quoteDecimals,
    lpDecimals: baseDecimals,
    version,
    programId,
    authority,
    nonce,
    baseVault,
    quoteVault,
    lpVault,
    openOrders,
    targetOrders,
    withdrawQueue,
    marketVersion,
    marketProgramId,
    marketId,
    marketAuthority,
    lookupTableAccount: import_web324.PublicKey.default,
    configId: getAssociatedConfigId({ programId })
  };
}
var stableLayout;
async function fetchMultipleInfo({
  connection,
  poolKeysList,
  config: config2
}) {
  const loadStable = poolKeysList.find((i) => i.modelDataAccount);
  if (loadStable) {
    if (!stableLayout) {
      stableLayout = new StableLayout({ connection });
      await stableLayout.initStableModelLayout();
    }
  }
  return await Promise.all(poolKeysList.map(async (itemPoolKey) => {
    if (itemPoolKey.modelDataAccount) {
      const instructions = makeSimulatePoolInfoInstruction({ poolKeys: itemPoolKey });
      const logs = await simulateMultipleInstruction(connection, [instructions.instruction], "GetPoolData");
      const poolsInfo = logs.map((log3) => {
        const json = parseSimulateLogToJson(log3, "GetPoolData");
        const status = new import_bn21.default(parseSimulateValue(json, "status"));
        const baseDecimals = Number(parseSimulateValue(json, "coin_decimals"));
        const quoteDecimals = Number(parseSimulateValue(json, "pc_decimals"));
        const lpDecimals = Number(parseSimulateValue(json, "lp_decimals"));
        const baseReserve = new import_bn21.default(parseSimulateValue(json, "pool_coin_amount"));
        const quoteReserve = new import_bn21.default(parseSimulateValue(json, "pool_pc_amount"));
        const lpSupply = new import_bn21.default(parseSimulateValue(json, "pool_lp_supply"));
        let startTime = "0";
        try {
          startTime = parseSimulateValue(json, "pool_open_time");
        } catch (error) {
        }
        return {
          status,
          baseDecimals,
          quoteDecimals,
          lpDecimals,
          baseReserve,
          quoteReserve,
          lpSupply,
          startTime: new import_bn21.default(startTime)
        };
      })[0];
      return poolsInfo;
    } else {
      const [poolAcc, vaultAccA, vaultAccB, mintAccLp] = await connection.getMultipleAccountsInfo([
        new import_web324.PublicKey(itemPoolKey.id),
        new import_web324.PublicKey(itemPoolKey.vault.A),
        new import_web324.PublicKey(itemPoolKey.vault.B),
        new import_web324.PublicKey(itemPoolKey.mintLp.address)
      ]);
      if (poolAcc === null)
        throw Error("fetch pool error");
      if (vaultAccA === null)
        throw Error("fetch vaultAccA error");
      if (vaultAccB === null)
        throw Error("fetch vaultAccB error");
      if (mintAccLp === null)
        throw Error("fetch mintAccLp error");
      const poolInfo = liquidityStateV4Layout.decode(poolAcc.data);
      const vaultInfoA = splAccountLayout.decode(vaultAccA.data);
      const vaultInfoB = splAccountLayout.decode(vaultAccB.data);
      const lpInfo = SPL_MINT_LAYOUT.decode(mintAccLp.data);
      return {
        status: poolInfo.status,
        baseDecimals: poolInfo.baseDecimal.toNumber(),
        quoteDecimals: poolInfo.quoteDecimal.toNumber(),
        lpDecimals: lpInfo.decimals,
        baseReserve: vaultInfoA.amount.sub(poolInfo.baseNeedTakePnl),
        quoteReserve: vaultInfoB.amount.sub(poolInfo.quoteNeedTakePnl),
        lpSupply: poolInfo.lpReserve,
        startTime: poolInfo.poolOpenTime
      };
    }
  }));
}
var mockRewardData2 = {
  volume: 0,
  volumeQuote: 0,
  volumeFee: 0,
  apr: 0,
  feeApr: 0,
  priceMin: 0,
  priceMax: 0,
  rewardApr: []
};
var toAmmComputePoolInfo = (poolData) => {
  const data = {};
  const tokenProgramStr = import_spl_token16.TOKEN_PROGRAM_ID.toBase58();
  Object.keys(poolData).map((poolId) => {
    const poolInfo = poolData[poolId];
    const [mintA, mintB] = [poolInfo.baseMint.toBase58(), poolInfo.quoteMint.toBase58()];
    data[poolId] = {
      id: poolId,
      version: 4,
      status: poolInfo.status.toNumber(),
      programId: poolInfo.programId.toBase58(),
      mintA: toApiV3Token({
        address: mintA,
        programId: tokenProgramStr,
        decimals: poolInfo.baseDecimal.toNumber()
      }),
      mintB: toApiV3Token({
        address: mintB,
        programId: tokenProgramStr,
        decimals: poolInfo.quoteDecimal.toNumber()
      }),
      rewardDefaultInfos: [],
      rewardDefaultPoolInfos: "Ecosystem",
      price: poolInfo.poolPrice.toNumber(),
      mintAmountA: new decimal_default(poolInfo.mintAAmount.toString()).div(10 ** poolInfo.baseDecimal.toNumber()).toNumber(),
      mintAmountB: new decimal_default(poolInfo.mintBAmount.toString()).div(10 ** poolInfo.quoteDecimal.toNumber()).toNumber(),
      baseReserve: poolInfo.baseReserve,
      quoteReserve: poolInfo.quoteReserve,
      feeRate: new decimal_default(poolInfo.tradeFeeNumerator.toString()).div(poolInfo.tradeFeeDenominator.toString()).toNumber(),
      openTime: poolInfo.poolOpenTime.toString(),
      tvl: 0,
      day: mockRewardData2,
      week: mockRewardData2,
      month: mockRewardData2,
      pooltype: [],
      farmUpcomingCount: 0,
      farmOngoingCount: 0,
      farmFinishedCount: 0,
      type: "Standard",
      marketId: poolInfo.marketId.toBase58(),
      configId: getAssociatedConfigId({ programId: poolInfo.programId }).toBase58(),
      lpPrice: 0,
      lpAmount: new decimal_default(poolInfo.lpReserve.toString()).div(10 ** Math.min(poolInfo.baseDecimal.toNumber(), poolInfo.quoteDecimal.toNumber())).toNumber(),
      lpMint: toApiV3Token({
        address: poolInfo.lpMint.toBase58(),
        programId: tokenProgramStr,
        decimals: Math.min(poolInfo.baseDecimal.toNumber(), poolInfo.quoteDecimal.toNumber())
      }),
      burnPercent: 0
    };
  });
  return data;
};

// src/raydium/liquidity/liquidity.ts
var import_bn23 = __toESM(require("bn.js"));

// src/raydium/marketV2/createMarket.ts
var import_web326 = require("@solana/web3.js");
var import_bn22 = __toESM(require("bn.js"));
var import_spl_token18 = require("@solana/spl-token");

// src/raydium/marketV2/instrument.ts
var import_web325 = require("@solana/web3.js");
var import_spl_token17 = require("@solana/spl-token");

// src/raydium/marketV2/layout.ts
function accountFlagsLayout(property = "accountFlags") {
  const ACCOUNT_FLAGS_LAYOUT = new WideBits(property);
  ACCOUNT_FLAGS_LAYOUT.addBoolean("initialized");
  ACCOUNT_FLAGS_LAYOUT.addBoolean("market");
  ACCOUNT_FLAGS_LAYOUT.addBoolean("openOrders");
  ACCOUNT_FLAGS_LAYOUT.addBoolean("requestQueue");
  ACCOUNT_FLAGS_LAYOUT.addBoolean("eventQueue");
  ACCOUNT_FLAGS_LAYOUT.addBoolean("bids");
  ACCOUNT_FLAGS_LAYOUT.addBoolean("asks");
  return ACCOUNT_FLAGS_LAYOUT;
}
var MARKET_STATE_LAYOUT_V2 = struct([
  blob(5),
  accountFlagsLayout("accountFlags"),
  publicKey("ownAddress"),
  u64("vaultSignerNonce"),
  publicKey("baseMint"),
  publicKey("quoteMint"),
  publicKey("baseVault"),
  u64("baseDepositsTotal"),
  u64("baseFeesAccrued"),
  publicKey("quoteVault"),
  u64("quoteDepositsTotal"),
  u64("quoteFeesAccrued"),
  u64("quoteDustThreshold"),
  publicKey("requestQueue"),
  publicKey("eventQueue"),
  publicKey("bids"),
  publicKey("asks"),
  u64("baseLotSize"),
  u64("quoteLotSize"),
  u64("feeRateBps"),
  u64("referrerRebatesAccrued"),
  blob(7)
]);

// src/raydium/marketV2/instrument.ts
function initializeMarket({
  programId,
  marketInfo
}) {
  const dataLayout = struct([
    u82("version"),
    u322("instruction"),
    u64("baseLotSize"),
    u64("quoteLotSize"),
    u16("feeRateBps"),
    u64("vaultSignerNonce"),
    u64("quoteDustThreshold")
  ]);
  const keys = [
    { pubkey: marketInfo.id, isSigner: false, isWritable: true },
    { pubkey: marketInfo.requestQueue, isSigner: false, isWritable: true },
    { pubkey: marketInfo.eventQueue, isSigner: false, isWritable: true },
    { pubkey: marketInfo.bids, isSigner: false, isWritable: true },
    { pubkey: marketInfo.asks, isSigner: false, isWritable: true },
    { pubkey: marketInfo.baseVault, isSigner: false, isWritable: true },
    { pubkey: marketInfo.quoteVault, isSigner: false, isWritable: true },
    { pubkey: marketInfo.baseMint, isSigner: false, isWritable: false },
    { pubkey: marketInfo.quoteMint, isSigner: false, isWritable: false },
    {
      pubkey: marketInfo.authority ? marketInfo.quoteMint : import_web325.SYSVAR_RENT_PUBKEY,
      isSigner: false,
      isWritable: false
    }
  ].concat(marketInfo.authority ? { pubkey: marketInfo.authority, isSigner: false, isWritable: false } : []).concat(marketInfo.authority && marketInfo.pruneAuthority ? { pubkey: marketInfo.pruneAuthority, isSigner: false, isWritable: false } : []);
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    version: 0,
    instruction: 0,
    baseLotSize: marketInfo.baseLotSize,
    quoteLotSize: marketInfo.quoteLotSize,
    feeRateBps: marketInfo.feeRateBps,
    vaultSignerNonce: marketInfo.vaultSignerNonce,
    quoteDustThreshold: marketInfo.quoteDustThreshold
  }, data);
  return new import_web325.TransactionInstruction({
    keys,
    programId,
    data
  });
}
async function makeCreateMarketInstruction({
  connection,
  wallet,
  marketInfo
}) {
  const tx1 = new import_web325.Transaction();
  const accountLamports = await connection.getMinimumBalanceForRentExemption(165);
  tx1.add(import_web325.SystemProgram.createAccountWithSeed({
    fromPubkey: wallet,
    basePubkey: wallet,
    seed: marketInfo.baseVault.seed,
    newAccountPubkey: marketInfo.baseVault.publicKey,
    lamports: accountLamports,
    space: 165,
    programId: import_spl_token17.TOKEN_PROGRAM_ID
  }), import_web325.SystemProgram.createAccountWithSeed({
    fromPubkey: wallet,
    basePubkey: wallet,
    seed: marketInfo.quoteVault.seed,
    newAccountPubkey: marketInfo.quoteVault.publicKey,
    lamports: accountLamports,
    space: 165,
    programId: import_spl_token17.TOKEN_PROGRAM_ID
  }), (0, import_spl_token17.createInitializeAccountInstruction)(marketInfo.baseVault.publicKey, marketInfo.baseMint, marketInfo.vaultOwner), (0, import_spl_token17.createInitializeAccountInstruction)(marketInfo.quoteVault.publicKey, marketInfo.quoteMint, marketInfo.vaultOwner), import_web325.SystemProgram.createAccountWithSeed({
    fromPubkey: wallet,
    basePubkey: wallet,
    seed: marketInfo.id.seed,
    newAccountPubkey: marketInfo.id.publicKey,
    lamports: await connection.getMinimumBalanceForRentExemption(MARKET_STATE_LAYOUT_V2.span),
    space: MARKET_STATE_LAYOUT_V2.span,
    programId: marketInfo.programId
  }));
  const tx2 = new import_web325.Transaction();
  tx2.add(import_web325.SystemProgram.createAccountWithSeed({
    fromPubkey: wallet,
    basePubkey: wallet,
    seed: marketInfo.requestQueue.seed,
    newAccountPubkey: marketInfo.requestQueue.publicKey,
    lamports: marketInfo.lowestFeeMarket ? 6208320 : await connection.getMinimumBalanceForRentExemption(marketInfo.requestQueueSpace ?? 5120 + 12),
    space: marketInfo.lowestFeeMarket ? 764 : marketInfo.requestQueueSpace ?? 5120 + 12,
    programId: marketInfo.programId
  }), import_web325.SystemProgram.createAccountWithSeed({
    fromPubkey: wallet,
    basePubkey: wallet,
    seed: marketInfo.eventQueue.seed,
    newAccountPubkey: marketInfo.eventQueue.publicKey,
    lamports: marketInfo.lowestFeeMarket ? 79594560 : await connection.getMinimumBalanceForRentExemption(marketInfo.eventQueueSpace ?? 262144 + 12),
    space: marketInfo.lowestFeeMarket ? 11308 : marketInfo.eventQueueSpace ?? 262144 + 12,
    programId: marketInfo.programId
  }), import_web325.SystemProgram.createAccountWithSeed({
    fromPubkey: wallet,
    basePubkey: wallet,
    seed: marketInfo.bids.seed,
    newAccountPubkey: marketInfo.bids.publicKey,
    lamports: marketInfo.lowestFeeMarket ? 101977920 : await connection.getMinimumBalanceForRentExemption(marketInfo.orderbookQueueSpace ?? 65536 + 12),
    space: marketInfo.lowestFeeMarket ? 14524 : marketInfo.orderbookQueueSpace ?? 65536 + 12,
    programId: marketInfo.programId
  }), import_web325.SystemProgram.createAccountWithSeed({
    fromPubkey: wallet,
    basePubkey: wallet,
    seed: marketInfo.asks.seed,
    newAccountPubkey: marketInfo.asks.publicKey,
    lamports: marketInfo.lowestFeeMarket ? 101977920 : await connection.getMinimumBalanceForRentExemption(marketInfo.orderbookQueueSpace ?? 65536 + 12),
    space: marketInfo.lowestFeeMarket ? 14524 : marketInfo.orderbookQueueSpace ?? 65536 + 12,
    programId: marketInfo.programId
  }), initializeMarket({
    programId: marketInfo.programId,
    marketInfo: {
      id: marketInfo.id.publicKey,
      requestQueue: marketInfo.requestQueue.publicKey,
      eventQueue: marketInfo.eventQueue.publicKey,
      bids: marketInfo.bids.publicKey,
      asks: marketInfo.asks.publicKey,
      baseVault: marketInfo.baseVault.publicKey,
      quoteVault: marketInfo.quoteVault.publicKey,
      baseMint: marketInfo.baseMint,
      quoteMint: marketInfo.quoteMint,
      baseLotSize: marketInfo.baseLotSize,
      quoteLotSize: marketInfo.quoteLotSize,
      feeRateBps: marketInfo.feeRateBps,
      vaultSignerNonce: marketInfo.vaultSignerNonce,
      quoteDustThreshold: marketInfo.quoteDustThreshold
    }
  }));
  return [
    {
      transaction: tx1,
      signer: [],
      instructionTypes: [
        InstructionType.CreateAccount,
        InstructionType.CreateAccount,
        InstructionType.InitAccount,
        InstructionType.InitAccount
      ]
    },
    {
      transaction: tx2,
      signer: [],
      instructionTypes: [
        InstructionType.CreateAccount,
        InstructionType.CreateAccount,
        InstructionType.CreateAccount,
        InstructionType.CreateAccount,
        InstructionType.CreateAccount,
        InstructionType.InitMarket
      ]
    }
  ];
}

// src/raydium/marketV2/createMarket.ts
var MarketV2 = class extends ModuleBase {
  async create({
    baseInfo,
    quoteInfo,
    lotSize,
    tickSize,
    dexProgramId,
    requestQueueSpace,
    eventQueueSpace,
    orderbookQueueSpace,
    lowestFeeMarket,
    assignSeed,
    txVersion,
    computeBudgetConfig,
    txTipConfig,
    feePayer
  }) {
    const wallet = this.scope.ownerPubKey;
    const seed = assignSeed ? `${baseInfo.mint.toBase58().slice(0, 10)}-${quoteInfo.mint.toBase58().slice(0, 10)}-${assignSeed}` : void 0;
    const market = generatePubKey({
      fromPublicKey: wallet,
      programId: dexProgramId,
      assignSeed: seed ? `${seed}-market` : seed
    });
    const requestQueue = generatePubKey({
      fromPublicKey: wallet,
      programId: dexProgramId,
      assignSeed: seed ? `${seed}-request` : seed
    });
    const eventQueue = generatePubKey({
      fromPublicKey: wallet,
      programId: dexProgramId,
      assignSeed: seed ? `${seed}-event` : seed
    });
    const bids = generatePubKey({
      fromPublicKey: wallet,
      programId: dexProgramId,
      assignSeed: seed ? `${seed}-bids` : seed
    });
    const asks = generatePubKey({
      fromPublicKey: wallet,
      programId: dexProgramId,
      assignSeed: seed ? `${seed}-asks` : seed
    });
    const baseVault = generatePubKey({
      fromPublicKey: wallet,
      programId: import_spl_token18.TOKEN_PROGRAM_ID,
      assignSeed: seed ? `${seed}-baseVault` : seed
    });
    const quoteVault = generatePubKey({
      fromPublicKey: wallet,
      programId: import_spl_token18.TOKEN_PROGRAM_ID,
      assignSeed: seed ? `${seed}-quoteVault` : seed
    });
    const feeRateBps = 0;
    const quoteDustThreshold = new import_bn22.default(100);
    function getVaultOwnerAndNonce() {
      const vaultSignerNonce2 = new import_bn22.default(0);
      while (true) {
        try {
          const vaultOwner2 = import_web326.PublicKey.createProgramAddressSync([market.publicKey.toBuffer(), vaultSignerNonce2.toArrayLike(Buffer, "le", 8)], dexProgramId);
          return { vaultOwner: vaultOwner2, vaultSignerNonce: vaultSignerNonce2 };
        } catch (e) {
          vaultSignerNonce2.iaddn(1);
          if (vaultSignerNonce2.gt(new import_bn22.default(25555)))
            throw Error("find vault owner error");
        }
      }
    }
    const { vaultOwner, vaultSignerNonce } = getVaultOwnerAndNonce();
    const baseLotSize = new import_bn22.default(Math.round(10 ** baseInfo.decimals * lotSize));
    const quoteLotSize = new import_bn22.default(Math.round(lotSize * 10 ** quoteInfo.decimals * tickSize));
    if (baseLotSize.eq(BN_ZERO))
      throw Error("lot size is too small");
    if (quoteLotSize.eq(BN_ZERO))
      throw Error("tick size or lot size is too small");
    const allTxArr = await makeCreateMarketInstruction({
      connection: this.scope.connection,
      wallet: this.scope.ownerPubKey,
      marketInfo: {
        programId: dexProgramId,
        id: market,
        baseMint: baseInfo.mint,
        quoteMint: quoteInfo.mint,
        baseVault,
        quoteVault,
        vaultOwner,
        requestQueue,
        eventQueue,
        bids,
        asks,
        feeRateBps,
        quoteDustThreshold,
        vaultSignerNonce,
        baseLotSize,
        quoteLotSize,
        requestQueueSpace,
        eventQueueSpace,
        orderbookQueueSpace,
        lowestFeeMarket
      }
    });
    const txBuilder = this.createTxBuilder(feePayer);
    txBuilder.addInstruction({
      instructions: allTxArr[0].transaction.instructions,
      signers: allTxArr[0].signer
    });
    for await (const txData of allTxArr.slice(1, allTxArr.length)) {
      txBuilder.addInstruction({
        instructions: txData.transaction.instructions,
        signers: txData.signer,
        instructionTypes: txData.instructionTypes
      });
    }
    if (txVersion === 0 /* V0 */)
      return txBuilder.sizeCheckBuildV0({
        computeBudgetConfig,
        address: {
          marketId: market.publicKey,
          requestQueue: requestQueue.publicKey,
          eventQueue: eventQueue.publicKey,
          bids: bids.publicKey,
          asks: asks.publicKey,
          baseVault: baseVault.publicKey,
          quoteVault: quoteVault.publicKey,
          baseMint: new import_web326.PublicKey(baseInfo.mint),
          quoteMint: new import_web326.PublicKey(quoteInfo.mint)
        }
      });
    return txBuilder.sizeCheckBuild({
      computeBudgetConfig,
      address: {
        marketId: market.publicKey,
        requestQueue: requestQueue.publicKey,
        eventQueue: eventQueue.publicKey,
        bids: bids.publicKey,
        asks: asks.publicKey,
        baseVault: baseVault.publicKey,
        quoteVault: quoteVault.publicKey,
        baseMint: new import_web326.PublicKey(baseInfo.mint),
        quoteMint: new import_web326.PublicKey(quoteInfo.mint)
      }
    });
  }
};

// src/raydium/liquidity/liquidity.ts
var LiquidityModule = class extends ModuleBase {
  stableLayout;
  constructor(params) {
    super(params);
    this.stableLayout = new StableLayout({ connection: this.scope.connection });
  }
  async initLayout() {
    await this.stableLayout.initStableModelLayout();
  }
  async load() {
    this.checkDisabled();
  }
  computePairAmount({
    poolInfo,
    amount,
    slippage,
    baseIn
  }) {
    const inputAmount = new import_bn23.default(new decimal_default(amount).mul(10 ** poolInfo[baseIn ? "mintA" : "mintB"].decimals).toFixed(0));
    const _anotherToken = toToken(poolInfo[baseIn ? "mintB" : "mintA"]);
    const [baseReserve, quoteReserve] = [
      new import_bn23.default(new decimal_default(poolInfo.mintAmountA).mul(10 ** poolInfo.mintA.decimals).toString()),
      new import_bn23.default(new decimal_default(poolInfo.mintAmountB).mul(10 ** poolInfo.mintB.decimals).toString())
    ];
    const lpAmount = new import_bn23.default(new decimal_default(poolInfo.lpAmount).mul(10 ** poolInfo.lpMint.decimals).toFixed(0, decimal_default.ROUND_DOWN));
    this.logDebug("baseReserve:", baseReserve.toString(), "quoteReserve:", quoteReserve.toString());
    this.logDebug("tokenIn:", baseIn ? poolInfo.mintA.symbol : poolInfo.mintB.symbol, "amountIn:", inputAmount.toString(), "anotherToken:", baseIn ? poolInfo.mintB.symbol : poolInfo.mintA.symbol, "slippage:", `${slippage.toSignificant()}%`, "baseReserve", baseReserve.toString(), "quoteReserve", quoteReserve.toString());
    const input = baseIn ? "base" : "quote";
    this.logDebug("input side:", input);
    let amountRaw = BN_ZERO;
    if (!inputAmount.isZero()) {
      amountRaw = input === "base" ? divCeil(inputAmount.mul(quoteReserve), baseReserve) : divCeil(inputAmount.mul(baseReserve), quoteReserve);
    }
    this.logDebug("amountRaw:", amountRaw.toString(), "lpAmount:", lpAmount.toString());
    const liquidity = divCeil(inputAmount.mul(lpAmount), input === "base" ? baseReserve : quoteReserve);
    this.logDebug("liquidity:", liquidity.toString());
    const _slippage = new Percent(new import_bn23.default(1)).add(slippage);
    const _slippageMin = new Percent(new import_bn23.default(1)).sub(slippage);
    const slippageAdjustedAmount = _slippage.mul(amountRaw).quotient;
    const slippageAdjustedMinAmount = _slippageMin.mul(amountRaw).quotient;
    const _anotherAmount = new TokenAmount(_anotherToken, amountRaw);
    const _maxAnotherAmount = new TokenAmount(_anotherToken, slippageAdjustedAmount);
    const _minAnotherAmount = new TokenAmount(_anotherToken, slippageAdjustedMinAmount);
    this.logDebug("anotherAmount:", _anotherAmount.toFixed(), "maxAnotherAmount:", _maxAnotherAmount.toFixed());
    return {
      anotherAmount: _anotherAmount,
      maxAnotherAmount: _maxAnotherAmount,
      minAnotherAmount: _minAnotherAmount,
      liquidity
    };
  }
  async getAmmPoolKeys(poolId) {
    return (await this.scope.api.fetchPoolKeysById({ idList: [poolId] }))[0];
  }
  async addLiquidity(params) {
    const {
      poolInfo,
      poolKeys: propPoolKeys,
      amountInA,
      amountInB,
      otherAmountMin,
      fixedSide,
      config: config2,
      txVersion,
      computeBudgetConfig,
      txTipConfig,
      feePayer
    } = params;
    if (this.scope.availability.addStandardPosition === false)
      this.logAndCreateError("add liquidity feature disabled in your region");
    this.logDebug("amountInA:", amountInA, "amountInB:", amountInB);
    if (amountInA.isZero() || amountInB.isZero())
      this.logAndCreateError("amounts must greater than zero", "amountInA & amountInB", {
        amountInA: amountInA.toFixed(),
        amountInB: amountInB.toFixed()
      });
    const { account } = this.scope;
    const { bypassAssociatedCheck, checkCreateATAOwner } = {
      ...{ bypassAssociatedCheck: false, checkCreateATAOwner: false },
      ...config2
    };
    const [tokenA, tokenB] = [amountInA.token, amountInB.token];
    const tokenAccountA = await account.getCreatedTokenAccount({
      mint: tokenA.mint,
      associatedOnly: false
    });
    const tokenAccountB = await account.getCreatedTokenAccount({
      mint: tokenB.mint,
      associatedOnly: false
    });
    if (!tokenAccountA && !tokenAccountB)
      this.logAndCreateError("cannot found target token accounts", "tokenAccounts", account.tokenAccounts);
    const lpTokenAccount = await account.getCreatedTokenAccount({
      mint: new import_web327.PublicKey(poolInfo.lpMint.address)
    });
    const tokens = [tokenA, tokenB];
    const _tokenAccounts = [tokenAccountA, tokenAccountB];
    const rawAmounts = [amountInA.raw, amountInB.raw];
    const sideA = amountInA.token.mint.toBase58() === poolInfo.mintA.address ? "base" : "quote";
    let _fixedSide = "base";
    if (!["quote", "base"].includes(sideA))
      this.logAndCreateError("invalid fixedSide", "fixedSide", fixedSide);
    if (sideA === "quote") {
      tokens.reverse();
      _tokenAccounts.reverse();
      rawAmounts.reverse();
      _fixedSide = fixedSide === "a" ? "quote" : "base";
    } else if (sideA === "base") {
      _fixedSide = fixedSide === "a" ? "base" : "quote";
    }
    const [baseToken, quoteToken] = tokens;
    const [baseTokenAccount, quoteTokenAccount] = _tokenAccounts;
    const [baseAmountRaw, quoteAmountRaw] = rawAmounts;
    const poolKeys = propPoolKeys ?? await this.getAmmPoolKeys(poolInfo.id);
    const txBuilder = this.createTxBuilder(feePayer);
    const { tokenAccount: _baseTokenAccount, ...baseInstruction } = await account.handleTokenAccount({
      side: "in",
      amount: baseAmountRaw,
      mint: baseToken.mint,
      tokenAccount: baseTokenAccount,
      bypassAssociatedCheck,
      checkCreateATAOwner
    });
    txBuilder.addInstruction(baseInstruction);
    const { tokenAccount: _quoteTokenAccount, ...quoteInstruction } = await account.handleTokenAccount({
      side: "in",
      amount: quoteAmountRaw,
      mint: quoteToken.mint,
      tokenAccount: quoteTokenAccount,
      bypassAssociatedCheck,
      checkCreateATAOwner
    });
    txBuilder.addInstruction(quoteInstruction);
    const { tokenAccount: _lpTokenAccount, ...lpInstruction } = await account.handleTokenAccount({
      side: "out",
      amount: 0,
      mint: new import_web327.PublicKey(poolInfo.lpMint.address),
      tokenAccount: lpTokenAccount,
      bypassAssociatedCheck,
      checkCreateATAOwner
    });
    txBuilder.addInstruction(lpInstruction);
    txBuilder.addInstruction({
      instructions: [
        makeAddLiquidityInstruction({
          poolInfo,
          poolKeys,
          userKeys: {
            baseTokenAccount: _baseTokenAccount,
            quoteTokenAccount: _quoteTokenAccount,
            lpTokenAccount: _lpTokenAccount,
            owner: this.scope.ownerPubKey
          },
          baseAmountIn: baseAmountRaw,
          quoteAmountIn: quoteAmountRaw,
          otherAmountMin: otherAmountMin.raw,
          fixedSide: _fixedSide
        })
      ],
      instructionTypes: [
        poolInfo.pooltype.includes("StablePool") ? InstructionType.AmmV5AddLiquidity : InstructionType.AmmV4AddLiquidity
      ],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : []
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    if (txVersion === 0 /* V0 */)
      return await txBuilder.buildV0();
    return txBuilder.build();
  }
  async removeLiquidity(params) {
    if (this.scope.availability.removeStandardPosition === false)
      this.logAndCreateError("remove liquidity feature disabled in your region");
    const {
      poolInfo,
      poolKeys: propPoolKeys,
      lpAmount,
      baseAmountMin,
      quoteAmountMin,
      config: config2,
      txVersion,
      computeBudgetConfig,
      txTipConfig,
      feePayer
    } = params;
    const poolKeys = propPoolKeys ?? await this.getAmmPoolKeys(poolInfo.id);
    const [baseMint, quoteMint, lpMint] = [
      new import_web327.PublicKey(poolInfo.mintA.address),
      new import_web327.PublicKey(poolInfo.mintB.address),
      new import_web327.PublicKey(poolInfo.lpMint.address)
    ];
    this.logDebug("lpAmount:", lpAmount);
    this.logDebug("baseAmountMin:", baseAmountMin);
    this.logDebug("quoteAmountMin:", quoteAmountMin);
    if (lpAmount.isZero())
      this.logAndCreateError("amount must greater than zero", "lpAmount", lpAmount.toString());
    const { account } = this.scope;
    const lpTokenAccount = await account.getCreatedTokenAccount({
      mint: lpMint,
      associatedOnly: false
    });
    if (!lpTokenAccount)
      this.logAndCreateError("cannot found lpTokenAccount", "tokenAccounts", account.tokenAccounts);
    const baseTokenAccount = await account.getCreatedTokenAccount({
      mint: baseMint
    });
    const quoteTokenAccount = await account.getCreatedTokenAccount({
      mint: quoteMint
    });
    const txBuilder = this.createTxBuilder(feePayer);
    const { bypassAssociatedCheck, checkCreateATAOwner } = {
      ...{ bypassAssociatedCheck: false, checkCreateATAOwner: false },
      ...config2
    };
    const { tokenAccount: _baseTokenAccount, ...baseInstruction } = await account.handleTokenAccount({
      side: "out",
      amount: 0,
      mint: baseMint,
      tokenAccount: baseTokenAccount,
      bypassAssociatedCheck,
      checkCreateATAOwner
    });
    txBuilder.addInstruction(baseInstruction);
    const { tokenAccount: _quoteTokenAccount, ...quoteInstruction } = await account.handleTokenAccount({
      side: "out",
      amount: 0,
      mint: quoteMint,
      tokenAccount: quoteTokenAccount,
      bypassAssociatedCheck,
      checkCreateATAOwner
    });
    txBuilder.addInstruction(quoteInstruction);
    txBuilder.addInstruction({
      instructions: [
        removeLiquidityInstruction({
          poolInfo,
          poolKeys,
          userKeys: {
            lpTokenAccount,
            baseTokenAccount: _baseTokenAccount,
            quoteTokenAccount: _quoteTokenAccount,
            owner: this.scope.ownerPubKey
          },
          lpAmount,
          baseAmountMin,
          quoteAmountMin
        })
      ],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : [],
      instructionTypes: [
        poolInfo.pooltype.includes("StablePool") ? InstructionType.AmmV5RemoveLiquidity : InstructionType.AmmV4RemoveLiquidity
      ]
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    if (txVersion === 0 /* V0 */)
      return await txBuilder.buildV0();
    return txBuilder.build();
  }
  async removeAllLpAndCreateClmmPosition({
    poolInfo,
    clmmPoolInfo,
    removeLpAmount,
    createPositionInfo,
    farmInfo,
    userFarmLpAmount,
    base,
    computeBudgetConfig,
    payer,
    userAuxiliaryLedgers,
    tokenProgram = import_spl_token19.TOKEN_PROGRAM_ID,
    checkCreateATAOwner = true,
    getEphemeralSigners,
    txVersion,
    feePayer
  }) {
    if (this.scope.availability.removeStandardPosition === false || this.scope.availability.createConcentratedPosition === false)
      this.logAndCreateError("remove liquidity or create position feature disabled in your region");
    if (!(poolInfo.mintA.address === clmmPoolInfo.mintA.address || poolInfo.mintA.address === clmmPoolInfo.mintB.address))
      throw Error("mint check error");
    if (!(poolInfo.mintB.address === clmmPoolInfo.mintA.address || poolInfo.mintB.address === clmmPoolInfo.mintB.address))
      throw Error("mint check error");
    const txBuilder = this.createTxBuilder(feePayer);
    const mintToAccount = {};
    for (const item of this.scope.account.tokenAccountRawInfos) {
      if (mintToAccount[item.accountInfo.mint.toString()] === void 0 || getATAAddress(this.scope.ownerPubKey, item.accountInfo.mint, import_spl_token19.TOKEN_PROGRAM_ID).publicKey.equals(item.pubkey)) {
        mintToAccount[item.accountInfo.mint.toString()] = item.pubkey;
      }
    }
    const lpTokenAccount = mintToAccount[poolInfo.lpMint.address];
    if (lpTokenAccount === void 0)
      throw Error("find lp account error in trade accounts");
    const amountIn = removeLpAmount.add(userFarmLpAmount ?? new import_bn23.default(0));
    const mintBaseUseSOLBalance = poolInfo.mintA.address === Token.WSOL.mint.toString();
    const mintQuoteUseSOLBalance = poolInfo.mintB.address === Token.WSOL.mint.toString();
    const { account: baseTokenAccount, instructionParams: ownerTokenAccountBaseInstruction } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: import_spl_token19.TOKEN_PROGRAM_ID,
      mint: new import_web327.PublicKey(poolInfo.mintA.address),
      owner: this.scope.ownerPubKey,
      createInfo: mintBaseUseSOLBalance ? {
        payer: this.scope.ownerPubKey
      } : void 0,
      skipCloseAccount: !mintBaseUseSOLBalance,
      notUseTokenAccount: mintBaseUseSOLBalance,
      associatedOnly: true,
      checkCreateATAOwner
    });
    txBuilder.addInstruction(ownerTokenAccountBaseInstruction || {});
    if (baseTokenAccount === void 0)
      throw new Error("base token account not found");
    const { account: quoteTokenAccount, instructionParams: ownerTokenAccountQuoteInstruction } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: import_spl_token19.TOKEN_PROGRAM_ID,
      mint: new import_web327.PublicKey(poolInfo.mintB.address),
      owner: this.scope.ownerPubKey,
      createInfo: mintQuoteUseSOLBalance ? {
        payer: this.scope.ownerPubKey,
        amount: 0
      } : void 0,
      skipCloseAccount: !mintQuoteUseSOLBalance,
      notUseTokenAccount: mintQuoteUseSOLBalance,
      associatedOnly: true,
      checkCreateATAOwner
    });
    txBuilder.addInstruction(ownerTokenAccountQuoteInstruction || {});
    if (quoteTokenAccount === void 0)
      throw new Error("quote token account not found");
    mintToAccount[poolInfo.mintA.address] = baseTokenAccount;
    mintToAccount[poolInfo.mintB.address] = quoteTokenAccount;
    if (farmInfo !== void 0 && !userFarmLpAmount?.isZero()) {
      const farmVersion = FARM_PROGRAM_TO_VERSION[farmInfo.programId];
      const ledger = getAssociatedLedgerAccount({
        programId: new import_web327.PublicKey(farmInfo.programId),
        poolId: new import_web327.PublicKey(farmInfo.id),
        owner: this.scope.ownerPubKey,
        version: farmVersion
      });
      let ledgerInfo = void 0;
      const ledgerData = await this.scope.connection.getAccountInfo(ledger);
      if (ledgerData) {
        const ledgerLayout = getFarmLedgerLayout(farmVersion);
        ledgerInfo = ledgerLayout.decode(ledgerData.data);
      }
      if (farmVersion !== 6 && !ledgerInfo) {
        const { instruction, instructionType } = createAssociatedLedgerAccountInstruction({
          id: new import_web327.PublicKey(farmInfo.id),
          programId: new import_web327.PublicKey(farmInfo.programId),
          version: farmVersion,
          ledger,
          owner: this.scope.ownerPubKey
        });
        txBuilder.addInstruction({ instructions: [instruction], instructionTypes: [instructionType] });
      }
      const rewardTokenAccounts = [];
      for (const item of farmInfo.rewardInfos) {
        const rewardIsWsol = item.mint.address === Token.WSOL.mint.toString();
        if (mintToAccount[item.mint.address])
          rewardTokenAccounts.push(mintToAccount[item.mint.address]);
        else {
          const { account: farmRewardAccount, instructionParams: ownerTokenAccountFarmInstruction } = await this.scope.account.getOrCreateTokenAccount({
            mint: new import_web327.PublicKey(item.mint.address),
            tokenProgram,
            owner: this.scope.ownerPubKey,
            skipCloseAccount: !rewardIsWsol,
            createInfo: {
              payer: payer || this.scope.ownerPubKey
            },
            associatedOnly: true,
            checkCreateATAOwner
          });
          if (!farmRewardAccount)
            this.logAndCreateError("farm reward account not found:", item.mint.address);
          ownerTokenAccountFarmInstruction && txBuilder.addInstruction(ownerTokenAccountFarmInstruction);
          rewardTokenAccounts.push(farmRewardAccount);
        }
      }
      const farmKeys = (await this.scope.api.fetchFarmKeysById({ ids: farmInfo.id }))[0];
      const insParams = {
        userAuxiliaryLedgers,
        amount: userFarmLpAmount,
        owner: this.scope.ownerPubKey,
        farmInfo,
        farmKeys,
        lpAccount: lpTokenAccount,
        rewardAccounts: rewardTokenAccounts
      };
      const version = FARM_PROGRAM_TO_VERSION[farmInfo.programId];
      const newInstruction = version === 6 ? makeWithdrawInstructionV6(insParams) : version === 5 ? makeWithdrawInstructionV5(insParams) : makeWithdrawInstructionV3(insParams);
      const insType = {
        3: InstructionType.FarmV3Withdraw,
        5: InstructionType.FarmV5Withdraw,
        6: InstructionType.FarmV6Withdraw
      };
      txBuilder.addInstruction({
        instructions: [newInstruction],
        instructionTypes: [insType[version]]
      });
    }
    const poolKeys = await this.getAmmPoolKeys(poolInfo.id);
    const removeIns = removeLiquidityInstruction({
      poolInfo,
      poolKeys,
      userKeys: {
        lpTokenAccount,
        baseTokenAccount,
        quoteTokenAccount,
        owner: this.scope.ownerPubKey
      },
      lpAmount: amountIn,
      baseAmountMin: 0,
      quoteAmountMin: 0
    });
    txBuilder.addInstruction({
      instructions: [removeIns],
      instructionTypes: [
        !poolInfo.pooltype.includes("StablePool") ? InstructionType.AmmV4RemoveLiquidity : InstructionType.AmmV5RemoveLiquidity
      ],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : []
    });
    const [tokenAccountA, tokenAccountB] = poolInfo.mintA.address === clmmPoolInfo.mintA.address ? [baseTokenAccount, quoteTokenAccount] : [quoteTokenAccount, baseTokenAccount];
    const clmmPoolKeys = await this.scope.clmm.getClmmPoolKeys(clmmPoolInfo.id);
    const createPositionIns = await ClmmInstrument.openPositionFromBaseInstructions({
      poolInfo: clmmPoolInfo,
      poolKeys: clmmPoolKeys,
      ownerInfo: {
        feePayer: this.scope.ownerPubKey,
        wallet: this.scope.ownerPubKey,
        tokenAccountA,
        tokenAccountB
      },
      withMetadata: "create",
      ...createPositionInfo,
      base,
      getEphemeralSigners
    });
    txBuilder.addInstruction({
      instructions: [...createPositionIns.instructions],
      signers: createPositionIns.signers,
      instructionTypes: [...createPositionIns.instructionTypes],
      lookupTableAddress: clmmPoolKeys.lookupTableAccount ? [clmmPoolKeys.lookupTableAccount] : []
    });
    if (txVersion === 0 /* V0 */)
      return txBuilder.sizeCheckBuildV0({ computeBudgetConfig });
    return txBuilder.sizeCheckBuild({ computeBudgetConfig });
  }
  async createPoolV4({
    programId,
    marketInfo,
    baseMintInfo,
    quoteMintInfo,
    baseAmount,
    quoteAmount,
    startTime,
    ownerInfo,
    associatedOnly = false,
    checkCreateATAOwner = false,
    tokenProgram,
    txVersion,
    feeDestinationId,
    computeBudgetConfig,
    txTipConfig,
    feePayer
  }) {
    const payer = ownerInfo.feePayer || this.scope.owner?.publicKey;
    const mintAUseSOLBalance = ownerInfo.useSOLBalance && baseMintInfo.mint.equals(import_spl_token19.NATIVE_MINT);
    const mintBUseSOLBalance = ownerInfo.useSOLBalance && quoteMintInfo.mint.equals(import_spl_token19.NATIVE_MINT);
    const txBuilder = this.createTxBuilder(feePayer);
    const { account: ownerTokenAccountBase, instructionParams: ownerTokenAccountBaseInstruction } = await this.scope.account.getOrCreateTokenAccount({
      mint: baseMintInfo.mint,
      owner: this.scope.ownerPubKey,
      createInfo: mintAUseSOLBalance ? {
        payer,
        amount: baseAmount
      } : void 0,
      notUseTokenAccount: mintAUseSOLBalance,
      skipCloseAccount: !mintAUseSOLBalance,
      associatedOnly: mintAUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    txBuilder.addInstruction(ownerTokenAccountBaseInstruction || {});
    const { account: ownerTokenAccountQuote, instructionParams: ownerTokenAccountQuoteInstruction } = await this.scope.account.getOrCreateTokenAccount({
      mint: quoteMintInfo.mint,
      owner: this.scope.ownerPubKey,
      createInfo: mintBUseSOLBalance ? {
        payer,
        amount: quoteAmount
      } : void 0,
      notUseTokenAccount: mintBUseSOLBalance,
      skipCloseAccount: !mintBUseSOLBalance,
      associatedOnly: mintBUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    txBuilder.addInstruction(ownerTokenAccountQuoteInstruction || {});
    if (ownerTokenAccountBase === void 0 || ownerTokenAccountQuote === void 0)
      throw Error("you don't has some token account");
    const poolInfo = getAssociatedPoolKeys({
      version: 4,
      marketVersion: 3,
      marketId: marketInfo.marketId,
      baseMint: baseMintInfo.mint,
      quoteMint: quoteMintInfo.mint,
      baseDecimals: baseMintInfo.decimals,
      quoteDecimals: quoteMintInfo.decimals,
      programId,
      marketProgramId: marketInfo.programId
    });
    const createPoolKeys = {
      programId,
      ammId: poolInfo.id,
      ammAuthority: poolInfo.authority,
      ammOpenOrders: poolInfo.openOrders,
      lpMint: poolInfo.lpMint,
      coinMint: poolInfo.baseMint,
      pcMint: poolInfo.quoteMint,
      coinVault: poolInfo.baseVault,
      pcVault: poolInfo.quoteVault,
      withdrawQueue: poolInfo.withdrawQueue,
      ammTargetOrders: poolInfo.targetOrders,
      poolTempLp: poolInfo.lpVault,
      marketProgramId: poolInfo.marketProgramId,
      marketId: poolInfo.marketId,
      ammConfigId: poolInfo.configId,
      feeDestinationId
    };
    const { instruction, instructionType } = createPoolV4InstructionV2({
      ...createPoolKeys,
      userWallet: this.scope.ownerPubKey,
      userCoinVault: ownerTokenAccountBase,
      userPcVault: ownerTokenAccountQuote,
      userLpVault: getATAAddress(this.scope.ownerPubKey, poolInfo.lpMint, tokenProgram).publicKey,
      nonce: poolInfo.nonce,
      openTime: startTime,
      coinAmount: baseAmount,
      pcAmount: quoteAmount
    });
    txBuilder.addInstruction({
      instructions: [instruction],
      instructionTypes: [instructionType]
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion,
      extInfo: {
        address: createPoolKeys
      }
    });
  }
  async createMarketAndPoolV4({
    programId = AMM_V4,
    marketProgram = OPEN_BOOK_PROGRAM,
    feeDestinationId = FEE_DESTINATION_ID,
    tokenProgram,
    baseMintInfo,
    quoteMintInfo,
    baseAmount,
    quoteAmount,
    startTime,
    ownerInfo,
    lowestFeeMarket,
    assignSeed,
    associatedOnly = false,
    checkCreateATAOwner = false,
    lotSize = 1,
    tickSize = 0.01,
    txVersion,
    computeBudgetConfig,
    txTipConfig,
    feePayer
  }) {
    const wallet = this.scope.ownerPubKey;
    const payer = ownerInfo.feePayer || this.scope.owner?.publicKey;
    const mintAUseSOLBalance = ownerInfo.useSOLBalance && baseMintInfo.mint.equals(import_spl_token19.NATIVE_MINT);
    const mintBUseSOLBalance = ownerInfo.useSOLBalance && quoteMintInfo.mint.equals(import_spl_token19.NATIVE_MINT);
    const seed = assignSeed ? `${baseMintInfo.mint.toBase58().slice(0, 7)}-${quoteMintInfo.mint.toBase58().slice(0, 7)}-${assignSeed}` : void 0;
    const market = generatePubKey({
      fromPublicKey: wallet,
      programId: marketProgram,
      assignSeed: seed ? `${seed}-market` : seed
    });
    const requestQueue = generatePubKey({
      fromPublicKey: wallet,
      programId: marketProgram,
      assignSeed: seed ? `${seed}-request` : seed
    });
    const eventQueue = generatePubKey({
      fromPublicKey: wallet,
      programId: marketProgram,
      assignSeed: seed ? `${seed}-event` : seed
    });
    const bids = generatePubKey({
      fromPublicKey: wallet,
      programId: marketProgram,
      assignSeed: seed ? `${seed}-bids` : seed
    });
    const asks = generatePubKey({
      fromPublicKey: wallet,
      programId: marketProgram,
      assignSeed: seed ? `${seed}-asks` : seed
    });
    const baseVault = generatePubKey({
      fromPublicKey: wallet,
      programId: import_spl_token19.TOKEN_PROGRAM_ID,
      assignSeed: seed ? `${seed}-baseVault` : seed
    });
    const quoteVault = generatePubKey({
      fromPublicKey: wallet,
      programId: import_spl_token19.TOKEN_PROGRAM_ID,
      assignSeed: seed ? `${seed}-quoteVault` : seed
    });
    const feeRateBps = 0;
    const quoteDustThreshold = new import_bn23.default(100);
    function getVaultOwnerAndNonce() {
      const vaultSignerNonce2 = new import_bn23.default(0);
      while (true) {
        try {
          const vaultOwner2 = import_web327.PublicKey.createProgramAddressSync([market.publicKey.toBuffer(), vaultSignerNonce2.toArrayLike(Buffer, "le", 8)], marketProgram);
          return { vaultOwner: vaultOwner2, vaultSignerNonce: vaultSignerNonce2 };
        } catch (e) {
          vaultSignerNonce2.iaddn(1);
          if (vaultSignerNonce2.gt(new import_bn23.default(25555)))
            throw Error("find vault owner error");
        }
      }
    }
    const { vaultOwner, vaultSignerNonce } = getVaultOwnerAndNonce();
    const baseLotSize = new import_bn23.default(Math.round(10 ** baseMintInfo.decimals * lotSize));
    const quoteLotSize = new import_bn23.default(Math.round(lotSize * 10 ** quoteMintInfo.decimals * tickSize));
    if (baseLotSize.eq(BN_ZERO))
      throw Error("lot size is too small");
    if (quoteLotSize.eq(BN_ZERO))
      throw Error("tick size or lot size is too small");
    const allTxArr = await makeCreateMarketInstruction({
      connection: this.scope.connection,
      wallet: this.scope.ownerPubKey,
      marketInfo: {
        programId: marketProgram,
        vaultOwner,
        baseMint: baseMintInfo.mint,
        quoteMint: quoteMintInfo.mint,
        id: market,
        baseVault,
        quoteVault,
        requestQueue,
        eventQueue,
        bids,
        asks,
        feeRateBps,
        quoteDustThreshold,
        vaultSignerNonce,
        baseLotSize,
        quoteLotSize,
        lowestFeeMarket
      }
    });
    const txBuilder = this.createTxBuilder(feePayer);
    txBuilder.addInstruction({
      instructions: allTxArr[0].transaction.instructions,
      signers: allTxArr[0].signer
    });
    for await (const txData of allTxArr.slice(1, allTxArr.length)) {
      txBuilder.addInstruction({
        instructions: txData.transaction.instructions,
        signers: txData.signer,
        instructionTypes: txData.instructionTypes
      });
    }
    const { account: ownerTokenAccountBase, instructionParams: ownerTokenAccountBaseInstruction } = await this.scope.account.getOrCreateTokenAccount({
      mint: baseMintInfo.mint,
      owner: this.scope.ownerPubKey,
      createInfo: mintAUseSOLBalance ? {
        payer,
        amount: baseAmount
      } : void 0,
      notUseTokenAccount: mintAUseSOLBalance,
      skipCloseAccount: !mintAUseSOLBalance,
      associatedOnly: mintAUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner,
      assignSeed: mintAUseSOLBalance && seed ? `${seed}-wsol` : void 0
    });
    txBuilder.addInstruction(ownerTokenAccountBaseInstruction || {});
    const { account: ownerTokenAccountQuote, instructionParams: ownerTokenAccountQuoteInstruction } = await this.scope.account.getOrCreateTokenAccount({
      mint: quoteMintInfo.mint,
      owner: this.scope.ownerPubKey,
      createInfo: mintBUseSOLBalance ? {
        payer,
        amount: quoteAmount
      } : void 0,
      notUseTokenAccount: mintBUseSOLBalance,
      skipCloseAccount: !mintBUseSOLBalance,
      associatedOnly: mintBUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner,
      assignSeed: mintBUseSOLBalance && seed ? `${seed}-wsol` : void 0
    });
    txBuilder.addInstruction(ownerTokenAccountQuoteInstruction || {});
    if (ownerTokenAccountBase === void 0)
      throw Error("you don't has base token account");
    if (ownerTokenAccountQuote === void 0)
      throw Error("you don't has quote token account");
    const poolInfo = getAssociatedPoolKeys({
      version: 4,
      marketVersion: 3,
      marketId: market.publicKey,
      baseMint: baseMintInfo.mint,
      quoteMint: quoteMintInfo.mint,
      baseDecimals: baseMintInfo.decimals,
      quoteDecimals: quoteMintInfo.decimals,
      programId,
      marketProgramId: marketProgram
    });
    const createPoolKeys = {
      programId,
      ammId: poolInfo.id,
      ammAuthority: poolInfo.authority,
      ammOpenOrders: poolInfo.openOrders,
      lpMint: poolInfo.lpMint,
      coinMint: poolInfo.baseMint,
      pcMint: poolInfo.quoteMint,
      coinVault: poolInfo.baseVault,
      pcVault: poolInfo.quoteVault,
      withdrawQueue: poolInfo.withdrawQueue,
      ammTargetOrders: poolInfo.targetOrders,
      poolTempLp: poolInfo.lpVault,
      marketProgramId: poolInfo.marketProgramId,
      marketId: poolInfo.marketId,
      ammConfigId: poolInfo.configId,
      feeDestinationId
    };
    const { instruction, instructionType } = createPoolV4InstructionV2({
      ...createPoolKeys,
      userWallet: this.scope.ownerPubKey,
      userCoinVault: ownerTokenAccountBase,
      userPcVault: ownerTokenAccountQuote,
      userLpVault: getATAAddress(this.scope.ownerPubKey, poolInfo.lpMint, tokenProgram).publicKey,
      nonce: poolInfo.nonce,
      openTime: startTime,
      coinAmount: baseAmount,
      pcAmount: quoteAmount
    });
    txBuilder.addInstruction({
      instructions: [instruction],
      instructionTypes: [instructionType]
    });
    const splitIns = mintAUseSOLBalance || mintBUseSOLBalance ? [
      ownerTokenAccountBaseInstruction?.instructions?.[0] || ownerTokenAccountQuoteInstruction?.instructions?.[0]
    ].filter((i) => !!i) : void 0;
    if (txVersion === 0 /* V0 */)
      return txBuilder.sizeCheckBuildV0({
        computeBudgetConfig,
        splitIns,
        address: {
          requestQueue: requestQueue.publicKey,
          eventQueue: eventQueue.publicKey,
          bids: bids.publicKey,
          asks: asks.publicKey,
          baseVault: baseVault.publicKey,
          quoteVault: quoteVault.publicKey,
          baseMint: new import_web327.PublicKey(baseMintInfo.mint),
          quoteMint: new import_web327.PublicKey(quoteMintInfo.mint),
          ...createPoolKeys
        }
      });
    return txBuilder.sizeCheckBuild({
      computeBudgetConfig,
      splitIns,
      address: {
        requestQueue: requestQueue.publicKey,
        eventQueue: eventQueue.publicKey,
        bids: bids.publicKey,
        asks: asks.publicKey,
        baseVault: baseVault.publicKey,
        quoteVault: quoteVault.publicKey,
        baseMint: new import_web327.PublicKey(baseMintInfo.mint),
        quoteMint: new import_web327.PublicKey(quoteMintInfo.mint),
        ...createPoolKeys
      }
    });
  }
  async getCreatePoolFee({ programId }) {
    const configId = getAssociatedConfigId({ programId });
    const account = await this.scope.connection.getAccountInfo(configId, { dataSlice: { offset: 536, length: 8 } });
    if (account === null)
      throw Error("get config account error");
    return createPoolFeeLayout.decode(account.data).fee;
  }
  computeAmountOut({
    poolInfo,
    amountIn,
    mintIn: propMintIn,
    mintOut: propMintOut,
    slippage
  }) {
    const [mintIn, mintOut] = [propMintIn.toString(), propMintOut.toString()];
    if (mintIn !== poolInfo.mintA.address && mintIn !== poolInfo.mintB.address)
      throw new Error("toke not match");
    if (mintOut !== poolInfo.mintA.address && mintOut !== poolInfo.mintB.address)
      throw new Error("toke not match");
    const { baseReserve, quoteReserve } = poolInfo;
    const reserves = [baseReserve, quoteReserve];
    const mintDecimals = [poolInfo.mintA.decimals, poolInfo.mintB.decimals];
    const input = mintIn == poolInfo.mintA.address ? "base" : "quote";
    if (input === "quote") {
      reserves.reverse();
      mintDecimals.reverse();
    }
    const [reserveIn, reserveOut] = reserves;
    const [mintInDecimals, mintOutDecimals] = mintDecimals;
    const isVersion4 = poolInfo.version === 4;
    let currentPrice;
    if (isVersion4) {
      currentPrice = new decimal_default(reserveOut.toString()).div(10 ** mintOutDecimals).div(new decimal_default(reserveIn.toString()).div(10 ** mintInDecimals));
    } else {
      const p = getStablePrice(this.stableLayout.stableModelData, baseReserve.toNumber(), quoteReserve.toNumber(), false);
      if (input === "quote")
        currentPrice = new decimal_default(1e6).div(p * 1e6);
      else
        currentPrice = new decimal_default(p * 1e6).div(1e6);
    }
    const amountInRaw = amountIn;
    let amountOutRaw = new import_bn23.default(0);
    let feeRaw = new import_bn23.default(0);
    if (!amountInRaw.isZero()) {
      if (isVersion4) {
        feeRaw = BNDivCeil(amountInRaw.mul(LIQUIDITY_FEES_NUMERATOR), LIQUIDITY_FEES_DENOMINATOR);
        const amountInWithFee = amountInRaw.sub(feeRaw);
        const denominator = reserveIn.add(amountInWithFee);
        amountOutRaw = reserveOut.mul(amountInWithFee).div(denominator);
      } else {
        feeRaw = amountInRaw.mul(new import_bn23.default(2)).div(new import_bn23.default(1e4));
        const amountInWithFee = amountInRaw.sub(feeRaw);
        if (input === "quote")
          amountOutRaw = new import_bn23.default(getDyByDxBaseIn(this.stableLayout.stableModelData, quoteReserve.toNumber(), baseReserve.toNumber(), amountInWithFee.toNumber()));
        else {
          amountOutRaw = new import_bn23.default(getDxByDyBaseIn(this.stableLayout.stableModelData, quoteReserve.toNumber(), baseReserve.toNumber(), amountInWithFee.toNumber()));
        }
      }
    }
    const minAmountOutRaw = new import_bn23.default(new decimal_default(amountOutRaw.toString()).mul(1 - slippage).toFixed(0));
    const amountOut = amountOutRaw;
    const minAmountOut = minAmountOutRaw;
    let executionPrice = new decimal_default(amountOutRaw.toString()).div(new decimal_default(amountInRaw.sub(feeRaw).toString()).toFixed(0));
    if (!amountInRaw.isZero() && !amountOutRaw.isZero()) {
      executionPrice = new decimal_default(amountOutRaw.toString()).div(10 ** mintOutDecimals).div(new decimal_default(amountInRaw.sub(feeRaw).toString()).div(10 ** mintInDecimals));
    }
    const priceImpact = currentPrice.sub(executionPrice).div(currentPrice).mul(100);
    const fee = feeRaw;
    return {
      amountOut,
      minAmountOut,
      currentPrice,
      executionPrice,
      priceImpact,
      fee
    };
  }
  computeAmountIn({ poolInfo, amountOut, mintIn, mintOut, slippage }) {
    const { baseReserve, quoteReserve } = poolInfo;
    if (mintIn.toString() !== poolInfo.mintA.address && mintIn.toString() !== poolInfo.mintB.address)
      this.logAndCreateError("mintIn does not match pool");
    if (mintOut.toString() !== poolInfo.mintA.address && mintOut.toString() !== poolInfo.mintB.address)
      this.logAndCreateError("mintOut does not match pool");
    this.logDebug("baseReserve:", baseReserve.toString());
    this.logDebug("quoteReserve:", quoteReserve.toString());
    const baseIn = mintIn.toString() === poolInfo.mintA.address;
    const [tokenIn, tokenOut] = baseIn ? [poolInfo.mintA, poolInfo.mintB] : [poolInfo.mintB, poolInfo.mintA];
    this.logDebug("currencyOut:", tokenOut.symbol || tokenOut.address);
    this.logDebug("amountOut:", new decimal_default(amountOut.toString()).div(10 ** tokenOut.decimals).toDecimalPlaces(tokenOut.decimals).toString(), tokenIn.symbol || tokenIn.address);
    this.logDebug("slippage:", `${slippage * 100}%`);
    const reserves = [baseReserve, quoteReserve];
    const output2 = !baseIn ? "base" : "quote";
    if (output2 === "base") {
      reserves.reverse();
    }
    this.logDebug("output side:", output2);
    const [reserveIn, reserveOut] = reserves;
    const currentPrice = new decimal_default(reserveOut.toString()).div(10 ** poolInfo[baseIn ? "mintB" : "mintA"].decimals).div(new decimal_default(reserveIn.toString()).div(10 ** poolInfo[baseIn ? "mintA" : "mintB"].decimals));
    this.logDebug("currentPrice:", `1 ${tokenIn.symbol || tokenIn.address} \u2248 ${currentPrice.toString()} ${tokenOut.symbol || tokenOut.address}`);
    this.logDebug("currentPrice invert:", `1 ${tokenOut.symbol || tokenOut.address} \u2248 ${new decimal_default(1).div(currentPrice).toString()} ${tokenIn.symbol || tokenIn.address}`);
    let amountInRaw = new import_bn23.default(0);
    let amountOutRaw = amountOut;
    if (!amountOutRaw.isZero()) {
      if (amountOutRaw.gt(reserveOut)) {
        amountOutRaw = reserveOut.sub(new import_bn23.default(1));
      }
      const denominator = reserveOut.sub(amountOutRaw);
      const amountInWithoutFee = reserveIn.mul(amountOutRaw).div(denominator);
      amountInRaw = amountInWithoutFee.mul(LIQUIDITY_FEES_DENOMINATOR).div(LIQUIDITY_FEES_DENOMINATOR.sub(LIQUIDITY_FEES_NUMERATOR));
    }
    const maxAmountInRaw = new import_bn23.default(new decimal_default(amountInRaw.toString()).mul(1 + slippage).toFixed(0));
    const amountIn = amountInRaw;
    const maxAmountIn = maxAmountInRaw;
    this.logDebug("amountIn:", new decimal_default(amountIn.toString()).div(10 ** tokenIn.decimals).toDecimalPlaces(tokenIn.decimals).toString());
    this.logDebug("maxAmountIn:", new decimal_default(maxAmountIn.toString()).div(10 ** tokenIn.decimals).toDecimalPlaces(tokenIn.decimals).toString());
    let executionPrice = null;
    if (!amountInRaw.isZero() && !amountOutRaw.isZero()) {
      executionPrice = new decimal_default(amountOutRaw.toString()).div(10 ** tokenOut.decimals).div(new decimal_default(amountInRaw.toString()).div(10 ** tokenIn.decimals));
      this.logDebug("executionPrice:", `1 ${tokenOut.symbol || tokenOut.address} \u2248 ${executionPrice.toDecimalPlaces(Math.max(poolInfo.mintA.decimals, poolInfo.mintB.decimals)).toString()} ${tokenIn.symbol || tokenIn.address}`);
      this.logDebug("executionPrice invert:", `1 ${tokenOut.symbol || tokenOut.address} \u2248 ${new decimal_default(1).div(executionPrice).toDecimalPlaces(Math.max(poolInfo.mintA.decimals, poolInfo.mintB.decimals)).toString()} ${tokenIn.symbol || tokenIn.address}`);
    }
    const exactQuote = currentPrice.mul(amountIn.toString());
    const priceImpact = exactQuote.sub(amountOut.toString()).abs().div(exactQuote);
    this.logDebug("priceImpact:", `${priceImpact.toString()}%`);
    return {
      amountIn,
      maxAmountIn,
      currentPrice,
      executionPrice,
      priceImpact
    };
  }
  async swap({
    poolInfo,
    poolKeys: propPoolKeys,
    amountIn,
    amountOut,
    inputMint,
    fixedSide,
    txVersion,
    config: config2,
    computeBudgetConfig,
    txTipConfig,
    feePayer
  }) {
    const txBuilder = this.createTxBuilder(feePayer);
    const { associatedOnly = true, inputUseSolBalance = true, outputUseSolBalance = true } = config2 || {};
    const [tokenIn, tokenOut] = inputMint === poolInfo.mintA.address ? [poolInfo.mintA, poolInfo.mintB] : [poolInfo.mintB, poolInfo.mintA];
    const inputTokenUseSolBalance = inputUseSolBalance && tokenIn.address === WSOLMint.toBase58();
    const outputTokenUseSolBalance = outputUseSolBalance && tokenOut.address === WSOLMint.toBase58();
    const { account: _tokenAccountIn, instructionParams: ownerTokenAccountBaseInstruction } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: import_spl_token19.TOKEN_PROGRAM_ID,
      mint: new import_web327.PublicKey(tokenIn.address),
      owner: this.scope.ownerPubKey,
      createInfo: inputTokenUseSolBalance ? {
        payer: this.scope.ownerPubKey,
        amount: amountIn
      } : void 0,
      skipCloseAccount: !inputTokenUseSolBalance,
      notUseTokenAccount: inputTokenUseSolBalance,
      associatedOnly
    });
    txBuilder.addInstruction(ownerTokenAccountBaseInstruction || {});
    if (!_tokenAccountIn)
      this.logAndCreateError("input token account not found", {
        token: tokenIn.symbol || tokenIn.address,
        tokenAccountIn: _tokenAccountIn,
        inputTokenUseSolBalance,
        associatedOnly
      });
    const { account: _tokenAccountOut, instructionParams: ownerTokenAccountQuoteInstruction } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: import_spl_token19.TOKEN_PROGRAM_ID,
      mint: new import_web327.PublicKey(tokenOut.address),
      owner: this.scope.ownerPubKey,
      createInfo: {
        payer: this.scope.ownerPubKey,
        amount: 0
      },
      skipCloseAccount: !outputTokenUseSolBalance,
      notUseTokenAccount: outputTokenUseSolBalance,
      associatedOnly: outputTokenUseSolBalance ? false : associatedOnly
    });
    txBuilder.addInstruction(ownerTokenAccountQuoteInstruction || {});
    if (_tokenAccountOut === void 0)
      this.logAndCreateError("output token account not found", {
        token: tokenOut.symbol || tokenOut.address,
        tokenAccountOut: _tokenAccountOut,
        outputTokenUseSolBalance,
        associatedOnly
      });
    const poolKeys = propPoolKeys || await this.getAmmPoolKeys(poolInfo.id);
    let version = 4;
    if (poolInfo.pooltype.includes("StablePool"))
      version = 5;
    txBuilder.addInstruction({
      instructions: [
        makeAMMSwapInstruction({
          version,
          poolKeys,
          userKeys: {
            tokenAccountIn: _tokenAccountIn,
            tokenAccountOut: _tokenAccountOut,
            owner: this.scope.ownerPubKey
          },
          amountIn,
          amountOut,
          fixedSide
        })
      ],
      instructionTypes: [version === 4 ? InstructionType.AmmV4SwapBaseIn : InstructionType.AmmV5SwapBaseIn]
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion
    });
  }
  async getRpcPoolInfo(poolId) {
    return (await this.getRpcPoolInfos([poolId]))[poolId];
  }
  async getRpcPoolInfos(poolIds, config2) {
    const accounts = await getMultipleAccountsInfoWithCustomFlags(this.scope.connection, poolIds.map((i) => ({ pubkey: new import_web327.PublicKey(i) })), config2);
    const poolInfos = {};
    const needFetchVaults = [];
    for (let i = 0; i < poolIds.length; i++) {
      const item = accounts[i];
      if (item === null || !item.accountInfo)
        throw Error("fetch pool info error: " + String(poolIds[i]));
      const rpc = liquidityStateV4Layout.decode(item.accountInfo.data);
      poolInfos[String(poolIds[i])] = {
        ...rpc,
        programId: item.accountInfo.owner
      };
      needFetchVaults.push(rpc.baseVault, rpc.quoteVault);
    }
    const vaultInfo = {};
    const vaultAccountInfo = await getMultipleAccountsInfoWithCustomFlags(this.scope.connection, needFetchVaults.map((i) => ({ pubkey: new import_web327.PublicKey(i) })), config2);
    for (let i = 0; i < needFetchVaults.length; i++) {
      const vaultItemInfo = vaultAccountInfo[i].accountInfo;
      if (vaultItemInfo === null)
        throw Error("fetch vault info error: " + needFetchVaults[i]);
      vaultInfo[String(needFetchVaults[i])] = new import_bn23.default(import_spl_token19.AccountLayout.decode(vaultItemInfo.data).amount.toString());
    }
    const returnData = {};
    for (const [id, info] of Object.entries(poolInfos)) {
      const baseReserve = vaultInfo[info.baseVault.toString()].sub(info.baseNeedTakePnl);
      const quoteReserve = vaultInfo[info.quoteVault.toString()].sub(info.quoteNeedTakePnl);
      returnData[id] = {
        ...info,
        baseReserve,
        mintAAmount: vaultInfo[info.baseVault.toString()],
        mintBAmount: vaultInfo[info.quoteVault.toString()],
        quoteReserve,
        poolPrice: new decimal_default(quoteReserve.toString()).div(new decimal_default(10).pow(info.quoteDecimal.toString())).div(new decimal_default(baseReserve.toString()).div(new decimal_default(10).pow(info.baseDecimal.toString())))
      };
    }
    return returnData;
  }
  async getPoolInfoFromRpc({ poolId }) {
    const rpcData = await this.getRpcPoolInfo(poolId);
    const computeData = toAmmComputePoolInfo({ [poolId]: rpcData });
    const poolInfo = computeData[poolId];
    const allKeys = await this.scope.tradeV2.computePoolToPoolKeys({
      pools: [computeData[poolId]],
      ammRpcData: { [poolId]: rpcData }
    });
    return {
      poolRpcData: rpcData,
      poolInfo,
      poolKeys: allKeys[0]
    };
  }
};

// src/raydium/clmm/clmm.ts
var import_web328 = require("@solana/web3.js");
var import_bn24 = __toESM(require("bn.js"));
var import_spl_token20 = require("@solana/spl-token");
var Clmm = class extends ModuleBase {
  constructor(params) {
    super(params);
  }
  async getClmmPoolKeys(poolId) {
    return (await this.scope.api.fetchPoolKeysById({ idList: [poolId] }))[0];
  }
  async createPool(props) {
    const {
      programId,
      owner = this.scope.owner?.publicKey || import_web328.PublicKey.default,
      mint1,
      mint2,
      ammConfig,
      initialPrice,
      computeBudgetConfig,
      forerunCreate,
      getObserveState,
      txVersion,
      txTipConfig,
      feePayer
    } = props;
    const txBuilder = this.createTxBuilder(feePayer);
    const [mintA, mintB, initPrice] = new import_bn24.default(new import_web328.PublicKey(mint1.address).toBuffer()).gt(new import_bn24.default(new import_web328.PublicKey(mint2.address).toBuffer())) ? [mint2, mint1, new decimal_default(1).div(initialPrice)] : [mint1, mint2, initialPrice];
    const initialPriceX64 = SqrtPriceMath.priceToSqrtPriceX64(initPrice, mintA.decimals, mintB.decimals);
    const extendMintAccount = [];
    const fetchAccounts = [];
    if (mintA.programId === import_spl_token20.TOKEN_2022_PROGRAM_ID.toBase58())
      fetchAccounts.push(getPdaMintExAccount(programId, new import_web328.PublicKey(mintA.address)).publicKey);
    if (mintB.programId === import_spl_token20.TOKEN_2022_PROGRAM_ID.toBase58())
      fetchAccounts.push(getPdaMintExAccount(programId, new import_web328.PublicKey(mintB.address)).publicKey);
    const extMintRes = await this.scope.connection.getMultipleAccountsInfo(fetchAccounts);
    extMintRes.forEach((r, idx) => {
      if (r)
        extendMintAccount.push(fetchAccounts[idx]);
    });
    const insInfo = await ClmmInstrument.createPoolInstructions({
      connection: this.scope.connection,
      programId,
      owner,
      mintA,
      mintB,
      ammConfigId: ammConfig.id,
      initialPriceX64,
      forerunCreate: !getObserveState && forerunCreate,
      extendMintAccount
    });
    txBuilder.addInstruction(insInfo);
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion,
      extInfo: {
        address: {
          ...insInfo.address,
          observationId: insInfo.address.observationId.toBase58(),
          exBitmapAccount: insInfo.address.exBitmapAccount.toBase58(),
          programId: programId.toString(),
          id: insInfo.address.poolId.toString(),
          mintA,
          mintB,
          openTime: "0",
          vault: { A: insInfo.address.mintAVault.toString(), B: insInfo.address.mintBVault.toString() },
          rewardInfos: [],
          config: {
            id: ammConfig.id.toString(),
            index: ammConfig.index,
            protocolFeeRate: ammConfig.protocolFeeRate,
            tradeFeeRate: ammConfig.tradeFeeRate,
            tickSpacing: ammConfig.tickSpacing,
            fundFeeRate: ammConfig.fundFeeRate,
            description: ammConfig.description,
            defaultRange: 0,
            defaultRangePoint: []
          }
        },
        mockPoolInfo: {
          type: "Concentrated",
          rewardDefaultPoolInfos: "Clmm",
          id: insInfo.address.poolId.toString(),
          mintA,
          mintB,
          feeRate: ammConfig.tradeFeeRate,
          openTime: "0",
          programId: programId.toString(),
          price: initPrice.toNumber(),
          config: {
            id: ammConfig.id.toString(),
            index: ammConfig.index,
            protocolFeeRate: ammConfig.protocolFeeRate,
            tradeFeeRate: ammConfig.tradeFeeRate,
            tickSpacing: ammConfig.tickSpacing,
            fundFeeRate: ammConfig.fundFeeRate,
            description: ammConfig.description,
            defaultRange: 0,
            defaultRangePoint: []
          },
          burnPercent: 0,
          ...mockV3CreatePoolInfo
        },
        forerunCreate
      }
    });
  }
  async openPositionFromBase({
    poolInfo,
    poolKeys: propPoolKeys,
    ownerInfo,
    tickLower,
    tickUpper,
    base,
    baseAmount,
    otherAmountMax,
    nft2022,
    associatedOnly = true,
    checkCreateATAOwner = false,
    withMetadata = "create",
    getEphemeralSigners,
    computeBudgetConfig,
    txTipConfig,
    txVersion,
    feePayer
  }) {
    if (this.scope.availability.addConcentratedPosition === false)
      this.logAndCreateError("add position feature disabled in your region");
    this.scope.checkOwner();
    const txBuilder = this.createTxBuilder(feePayer);
    let ownerTokenAccountA = null;
    let ownerTokenAccountB = null;
    const mintAUseSOLBalance = ownerInfo.useSOLBalance && poolInfo.mintA.address === WSOLMint.toString();
    const mintBUseSOLBalance = ownerInfo.useSOLBalance && poolInfo.mintB.address === WSOLMint.toString();
    const [amountA, amountB] = base === "MintA" ? [baseAmount, otherAmountMax] : [otherAmountMax, baseAmount];
    const { account: _ownerTokenAccountA, instructionParams: _tokenAccountAInstruction } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolInfo.mintA.programId,
      mint: new import_web328.PublicKey(poolInfo.mintA.address),
      owner: this.scope.ownerPubKey,
      createInfo: mintAUseSOLBalance || amountA.isZero() ? {
        payer: this.scope.ownerPubKey,
        amount: amountA
      } : void 0,
      skipCloseAccount: !mintAUseSOLBalance,
      notUseTokenAccount: mintAUseSOLBalance,
      associatedOnly: mintAUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    if (_ownerTokenAccountA)
      ownerTokenAccountA = _ownerTokenAccountA;
    txBuilder.addInstruction(_tokenAccountAInstruction || {});
    const { account: _ownerTokenAccountB, instructionParams: _tokenAccountBInstruction } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolInfo.mintB.programId,
      mint: new import_web328.PublicKey(poolInfo.mintB.address),
      owner: this.scope.ownerPubKey,
      createInfo: mintBUseSOLBalance || amountB.isZero() ? {
        payer: this.scope.ownerPubKey,
        amount: amountB
      } : void 0,
      skipCloseAccount: !mintBUseSOLBalance,
      notUseTokenAccount: mintBUseSOLBalance,
      associatedOnly: mintBUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    if (_ownerTokenAccountB)
      ownerTokenAccountB = _ownerTokenAccountB;
    txBuilder.addInstruction(_tokenAccountBInstruction || {});
    if (!ownerTokenAccountA || !ownerTokenAccountB)
      this.logAndCreateError("cannot found target token accounts", "tokenAccounts", {
        ownerTokenAccountA: ownerTokenAccountA?.toBase58(),
        ownerTokenAccountB: ownerTokenAccountB?.toBase58()
      });
    const poolKeys = propPoolKeys || await this.getClmmPoolKeys(poolInfo.id);
    const insInfo = await ClmmInstrument.openPositionFromBaseInstructions({
      poolInfo,
      poolKeys,
      ownerInfo: {
        ...ownerInfo,
        feePayer: this.scope.ownerPubKey,
        wallet: this.scope.ownerPubKey,
        tokenAccountA: ownerTokenAccountA,
        tokenAccountB: ownerTokenAccountB
      },
      tickLower,
      tickUpper,
      base,
      baseAmount,
      otherAmountMax,
      withMetadata,
      getEphemeralSigners,
      nft2022
    });
    txBuilder.addInstruction(insInfo);
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion,
      extInfo: { ...insInfo.address }
    });
  }
  async openPositionFromLiquidity({
    poolInfo,
    poolKeys: propPoolKeys,
    ownerInfo,
    amountMaxA,
    amountMaxB,
    tickLower,
    tickUpper,
    liquidity,
    associatedOnly = true,
    checkCreateATAOwner = false,
    withMetadata = "create",
    txVersion,
    computeBudgetConfig,
    txTipConfig,
    getEphemeralSigners,
    nft2022,
    feePayer
  }) {
    if (this.scope.availability.createConcentratedPosition === false)
      this.logAndCreateError("open position feature disabled in your region");
    const txBuilder = this.createTxBuilder(feePayer);
    let ownerTokenAccountA = null;
    let ownerTokenAccountB = null;
    const mintAUseSOLBalance = ownerInfo.useSOLBalance && poolInfo.mintA.address === WSOLMint.toBase58();
    const mintBUseSOLBalance = ownerInfo.useSOLBalance && poolInfo.mintB.address === WSOLMint.toBase58();
    const { account: _ownerTokenAccountA, instructionParams: _tokenAccountAInstruction } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolInfo.mintA.programId,
      mint: new import_web328.PublicKey(poolInfo.mintA.address),
      owner: this.scope.ownerPubKey,
      createInfo: mintAUseSOLBalance || amountMaxA.isZero() ? {
        payer: this.scope.ownerPubKey,
        amount: amountMaxA
      } : void 0,
      skipCloseAccount: !mintAUseSOLBalance,
      notUseTokenAccount: mintAUseSOLBalance,
      associatedOnly: mintAUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    if (_ownerTokenAccountA)
      ownerTokenAccountA = _ownerTokenAccountA;
    txBuilder.addInstruction(_tokenAccountAInstruction || {});
    const { account: _ownerTokenAccountB, instructionParams: _tokenAccountBInstruction } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolInfo.mintB.programId,
      mint: new import_web328.PublicKey(poolInfo.mintB.address),
      owner: this.scope.ownerPubKey,
      createInfo: mintBUseSOLBalance || amountMaxB.isZero() ? {
        payer: this.scope.ownerPubKey,
        amount: amountMaxB
      } : void 0,
      skipCloseAccount: !mintBUseSOLBalance,
      notUseTokenAccount: mintBUseSOLBalance,
      associatedOnly: mintBUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    if (_ownerTokenAccountB)
      ownerTokenAccountB = _ownerTokenAccountB;
    txBuilder.addInstruction(_tokenAccountBInstruction || {});
    if (ownerTokenAccountA === void 0 || ownerTokenAccountB === void 0)
      this.logAndCreateError("cannot found target token accounts", "tokenAccounts", this.scope.account.tokenAccounts);
    const poolKeys = propPoolKeys || await this.getClmmPoolKeys(poolInfo.id);
    const makeOpenPositionInstructions = await ClmmInstrument.openPositionFromLiquidityInstructions({
      poolInfo,
      poolKeys,
      ownerInfo: {
        wallet: this.scope.ownerPubKey,
        tokenAccountA: ownerTokenAccountA,
        tokenAccountB: ownerTokenAccountB
      },
      tickLower,
      tickUpper,
      liquidity,
      amountMaxA,
      amountMaxB,
      withMetadata,
      getEphemeralSigners,
      nft2022
    });
    txBuilder.addInstruction(makeOpenPositionInstructions);
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion,
      extInfo: { address: makeOpenPositionInstructions.address }
    });
  }
  async increasePositionFromLiquidity(props) {
    const {
      poolInfo,
      poolKeys: propPoolKeys,
      ownerPosition,
      amountMaxA,
      amountMaxB,
      liquidity,
      ownerInfo,
      associatedOnly = true,
      checkCreateATAOwner = false,
      computeBudgetConfig,
      txTipConfig,
      txVersion,
      feePayer
    } = props;
    const txBuilder = this.createTxBuilder(feePayer);
    let ownerTokenAccountA = void 0;
    let ownerTokenAccountB = void 0;
    const mintAUseSOLBalance = ownerInfo.useSOLBalance && poolInfo.mintA.address === WSOLMint.toString();
    const mintBUseSOLBalance = ownerInfo.useSOLBalance && poolInfo.mintB.address === WSOLMint.toString();
    const { account: _ownerTokenAccountA, instructionParams: _tokenAccountAInstruction } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolInfo.mintA.programId,
      mint: new import_web328.PublicKey(poolInfo.mintA.address),
      notUseTokenAccount: mintAUseSOLBalance,
      owner: this.scope.ownerPubKey,
      createInfo: mintAUseSOLBalance || amountMaxA.isZero() ? {
        payer: this.scope.ownerPubKey,
        amount: amountMaxA
      } : void 0,
      skipCloseAccount: !mintAUseSOLBalance,
      associatedOnly: mintAUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    if (_ownerTokenAccountA)
      ownerTokenAccountA = _ownerTokenAccountA;
    txBuilder.addInstruction(_tokenAccountAInstruction || {});
    const { account: _ownerTokenAccountB, instructionParams: _tokenAccountBInstruction } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolInfo.mintB.programId,
      mint: new import_web328.PublicKey(poolInfo.mintB.address),
      owner: this.scope.ownerPubKey,
      createInfo: mintBUseSOLBalance || amountMaxB.isZero() ? {
        payer: this.scope.ownerPubKey,
        amount: amountMaxB
      } : void 0,
      notUseTokenAccount: mintBUseSOLBalance,
      skipCloseAccount: !mintBUseSOLBalance,
      associatedOnly: mintBUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    if (_ownerTokenAccountB)
      ownerTokenAccountB = _ownerTokenAccountB;
    txBuilder.addInstruction(_tokenAccountBInstruction || {});
    if (!ownerTokenAccountA && !ownerTokenAccountB)
      this.logAndCreateError("cannot found target token accounts", "tokenAccounts", this.scope.account.tokenAccounts);
    const poolKeys = propPoolKeys ?? await this.getClmmPoolKeys(poolInfo.id);
    const ins = ClmmInstrument.increasePositionFromLiquidityInstructions({
      poolInfo,
      poolKeys,
      ownerPosition,
      ownerInfo: {
        wallet: this.scope.ownerPubKey,
        tokenAccountA: ownerTokenAccountA,
        tokenAccountB: ownerTokenAccountB
      },
      liquidity,
      amountMaxA,
      amountMaxB,
      nft2022: (await this.scope.connection.getAccountInfo(ownerPosition.nftMint))?.owner.equals(import_spl_token20.TOKEN_2022_PROGRAM_ID)
    });
    txBuilder.addInstruction(ins);
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion,
      extInfo: { address: ins.address }
    });
  }
  async increasePositionFromBase(props) {
    const {
      poolInfo,
      ownerPosition,
      base,
      baseAmount,
      otherAmountMax,
      ownerInfo,
      associatedOnly = true,
      checkCreateATAOwner = false,
      computeBudgetConfig,
      txTipConfig,
      txVersion,
      feePayer
    } = props;
    const txBuilder = this.createTxBuilder(feePayer);
    let ownerTokenAccountA = void 0;
    let ownerTokenAccountB = void 0;
    const mintAUseSOLBalance = ownerInfo.useSOLBalance && poolInfo.mintA.address === WSOLMint.toString();
    const mintBUseSOLBalance = ownerInfo.useSOLBalance && poolInfo.mintB.address === WSOLMint.toString();
    const { account: _ownerTokenAccountA, instructionParams: _tokenAccountAInstruction } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolInfo.mintA.programId,
      mint: new import_web328.PublicKey(poolInfo.mintA.address),
      notUseTokenAccount: mintAUseSOLBalance,
      owner: this.scope.ownerPubKey,
      createInfo: mintAUseSOLBalance || (base === "MintA" ? baseAmount : otherAmountMax).isZero() ? {
        payer: this.scope.ownerPubKey,
        amount: base === "MintA" ? baseAmount : otherAmountMax
      } : void 0,
      skipCloseAccount: !mintAUseSOLBalance,
      associatedOnly: mintAUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    if (_ownerTokenAccountA)
      ownerTokenAccountA = _ownerTokenAccountA;
    txBuilder.addInstruction(_tokenAccountAInstruction || {});
    const { account: _ownerTokenAccountB, instructionParams: _tokenAccountBInstruction } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolInfo.mintB.programId,
      mint: new import_web328.PublicKey(poolInfo.mintB.address),
      owner: this.scope.ownerPubKey,
      createInfo: mintBUseSOLBalance || (base === "MintA" ? otherAmountMax : baseAmount).isZero() ? {
        payer: this.scope.ownerPubKey,
        amount: base === "MintA" ? otherAmountMax : baseAmount
      } : void 0,
      notUseTokenAccount: mintBUseSOLBalance,
      skipCloseAccount: !mintBUseSOLBalance,
      associatedOnly: mintBUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    if (_ownerTokenAccountB)
      ownerTokenAccountB = _ownerTokenAccountB;
    txBuilder.addInstruction(_tokenAccountBInstruction || {});
    if (!ownerTokenAccountA && !ownerTokenAccountB)
      this.logAndCreateError("cannot found target token accounts", "tokenAccounts", this.scope.account.tokenAccounts);
    const poolKeys = await this.getClmmPoolKeys(poolInfo.id);
    const ins = ClmmInstrument.increasePositionFromBaseInstructions({
      poolInfo,
      poolKeys,
      ownerPosition,
      ownerInfo: {
        wallet: this.scope.ownerPubKey,
        tokenAccountA: ownerTokenAccountA,
        tokenAccountB: ownerTokenAccountB
      },
      base,
      baseAmount,
      otherAmountMax,
      nft2022: (await this.scope.connection.getAccountInfo(ownerPosition.nftMint))?.owner.equals(import_spl_token20.TOKEN_2022_PROGRAM_ID)
    });
    txBuilder.addInstruction(ins);
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion,
      extInfo: { address: ins.address }
    });
  }
  async decreaseLiquidity(props) {
    const {
      poolInfo,
      poolKeys: propPoolKeys,
      ownerPosition,
      ownerInfo,
      amountMinA,
      amountMinB,
      liquidity,
      associatedOnly = true,
      checkCreateATAOwner = false,
      computeBudgetConfig,
      txTipConfig,
      txVersion,
      feePayer
    } = props;
    if (this.scope.availability.removeConcentratedPosition === false)
      this.logAndCreateError("remove position feature disabled in your region");
    const txBuilder = this.createTxBuilder(feePayer);
    const mintAUseSOLBalance = ownerInfo.useSOLBalance && poolInfo.mintA.address === WSOLMint.toString();
    const mintBUseSOLBalance = ownerInfo.useSOLBalance && poolInfo.mintB.address === WSOLMint.toString();
    let ownerTokenAccountA = void 0;
    let ownerTokenAccountB = void 0;
    const { account: _ownerTokenAccountA, instructionParams: accountAInstructions } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolInfo.mintA.programId,
      mint: new import_web328.PublicKey(poolInfo.mintA.address),
      notUseTokenAccount: mintAUseSOLBalance,
      owner: this.scope.ownerPubKey,
      createInfo: {
        payer: this.scope.ownerPubKey,
        amount: 0
      },
      skipCloseAccount: !mintAUseSOLBalance,
      associatedOnly: mintAUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    ownerTokenAccountA = _ownerTokenAccountA;
    accountAInstructions && txBuilder.addInstruction(accountAInstructions);
    const { account: _ownerTokenAccountB, instructionParams: accountBInstructions } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolInfo.mintB.programId,
      mint: new import_web328.PublicKey(poolInfo.mintB.address),
      notUseTokenAccount: mintBUseSOLBalance,
      owner: this.scope.ownerPubKey,
      createInfo: {
        payer: this.scope.ownerPubKey,
        amount: 0
      },
      skipCloseAccount: !mintBUseSOLBalance,
      associatedOnly: mintBUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    ownerTokenAccountB = _ownerTokenAccountB;
    accountBInstructions && txBuilder.addInstruction(accountBInstructions);
    const rewardAccounts = [];
    for (const itemReward of poolInfo.rewardDefaultInfos) {
      const rewardUseSOLBalance = ownerInfo.useSOLBalance && itemReward.mint.address === WSOLMint.toString();
      let ownerRewardAccount;
      if (itemReward.mint.address === poolInfo.mintA.address)
        ownerRewardAccount = ownerTokenAccountA;
      else if (itemReward.mint.address === poolInfo.mintB.address)
        ownerRewardAccount = ownerTokenAccountB;
      else {
        const { account: _ownerRewardAccount, instructionParams: ownerRewardAccountInstructions } = await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: new import_web328.PublicKey(itemReward.mint.programId),
          mint: new import_web328.PublicKey(itemReward.mint.address),
          notUseTokenAccount: rewardUseSOLBalance,
          owner: this.scope.ownerPubKey,
          createInfo: {
            payer: this.scope.ownerPubKey,
            amount: 0
          },
          skipCloseAccount: !rewardUseSOLBalance,
          associatedOnly: rewardUseSOLBalance ? false : associatedOnly,
          checkCreateATAOwner
        });
        ownerRewardAccount = _ownerRewardAccount;
        ownerRewardAccountInstructions && txBuilder.addInstruction(ownerRewardAccountInstructions);
      }
      rewardAccounts.push(ownerRewardAccount);
    }
    if (!ownerTokenAccountA && !ownerTokenAccountB)
      this.logAndCreateError("cannot found target token accounts", "tokenAccounts", this.scope.account.tokenAccountRawInfos);
    const poolKeys = propPoolKeys ?? await this.getClmmPoolKeys(poolInfo.id);
    const nft2022 = (await this.scope.connection.getAccountInfo(ownerPosition.nftMint))?.owner.equals(import_spl_token20.TOKEN_2022_PROGRAM_ID);
    const decreaseInsInfo = await ClmmInstrument.decreaseLiquidityInstructions({
      poolInfo,
      poolKeys,
      ownerPosition,
      ownerInfo: {
        wallet: this.scope.ownerPubKey,
        tokenAccountA: ownerTokenAccountA,
        tokenAccountB: ownerTokenAccountB,
        rewardAccounts
      },
      liquidity,
      amountMinA,
      amountMinB,
      nft2022
    });
    txBuilder.addInstruction({
      instructions: decreaseInsInfo.instructions,
      instructionTypes: [InstructionType.ClmmDecreasePosition]
    });
    let extInfo = { ...decreaseInsInfo.address };
    if (ownerInfo.closePosition) {
      const closeInsInfo = await ClmmInstrument.closePositionInstructions({
        poolInfo,
        poolKeys,
        ownerInfo: { wallet: this.scope.ownerPubKey },
        ownerPosition,
        nft2022
      });
      txBuilder.addInstruction({
        endInstructions: closeInsInfo.instructions,
        endInstructionTypes: closeInsInfo.instructionTypes
      });
      extInfo = { ...extInfo, ...closeInsInfo.address };
    }
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion,
      extInfo: { address: extInfo }
    });
  }
  async lockPosition(props) {
    const {
      programId = CLMM_LOCK_PROGRAM_ID,
      authProgramId = CLMM_LOCK_AUTH_ID,
      poolProgramId = CLMM_PROGRAM_ID,
      ownerPosition,
      payer,
      computeBudgetConfig,
      txTipConfig,
      txVersion,
      getEphemeralSigners,
      feePayer
    } = props;
    const txBuilder = this.createTxBuilder(feePayer);
    const lockIns = await ClmmInstrument.makeLockPositions({
      programId,
      authProgramId,
      poolProgramId,
      wallet: this.scope.ownerPubKey,
      payer: payer ?? this.scope.ownerPubKey,
      nftMint: ownerPosition.nftMint,
      getEphemeralSigners,
      nft2022: (await this.scope.connection.getAccountInfo(ownerPosition.nftMint))?.owner.equals(import_spl_token20.TOKEN_2022_PROGRAM_ID)
    });
    txBuilder.addInstruction(lockIns);
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion,
      extInfo: lockIns.address
    });
  }
  async harvestLockPosition(props) {
    const {
      programId = CLMM_LOCK_PROGRAM_ID,
      authProgramId = CLMM_LOCK_AUTH_ID,
      clmmProgram = CLMM_PROGRAM_ID,
      poolKeys: propPoolKeys,
      lockData,
      ownerInfo = { useSOLBalance: true },
      associatedOnly = true,
      checkCreateATAOwner = false,
      computeBudgetConfig,
      txTipConfig,
      txVersion,
      feePayer
    } = props;
    const poolKeys = propPoolKeys || await this.getClmmPoolKeys(lockData.poolId.toString());
    const txBuilder = this.createTxBuilder(feePayer);
    const positionData = await this.scope.connection.getAccountInfo(lockData.positionId);
    if (!positionData)
      this.logger.logWithError("position not found", lockData.positionId);
    const position = PositionInfoLayout.decode(positionData.data);
    const mintAUseSOLBalance = ownerInfo.useSOLBalance && poolKeys.mintA.address === WSOLMint.toString();
    const mintBUseSOLBalance = ownerInfo.useSOLBalance && poolKeys.mintB.address === WSOLMint.toString();
    let ownerTokenAccountA = void 0;
    let ownerTokenAccountB = void 0;
    const { account: _ownerTokenAccountA, instructionParams: accountAInstructions } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolKeys.mintA.programId,
      mint: new import_web328.PublicKey(poolKeys.mintA.address),
      notUseTokenAccount: mintAUseSOLBalance,
      owner: this.scope.ownerPubKey,
      createInfo: {
        payer: this.scope.ownerPubKey,
        amount: 0
      },
      skipCloseAccount: !mintAUseSOLBalance,
      associatedOnly: mintAUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    ownerTokenAccountA = _ownerTokenAccountA;
    accountAInstructions && txBuilder.addInstruction(accountAInstructions);
    const { account: _ownerTokenAccountB, instructionParams: accountBInstructions } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolKeys.mintB.programId,
      mint: new import_web328.PublicKey(poolKeys.mintB.address),
      notUseTokenAccount: mintBUseSOLBalance,
      owner: this.scope.ownerPubKey,
      createInfo: {
        payer: this.scope.ownerPubKey,
        amount: 0
      },
      skipCloseAccount: !mintBUseSOLBalance,
      associatedOnly: mintBUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    ownerTokenAccountB = _ownerTokenAccountB;
    accountBInstructions && txBuilder.addInstruction(accountBInstructions);
    const ownerMintToAccount = {};
    const rewardAccounts = [];
    for (const itemReward of poolKeys.rewardInfos) {
      const rewardUseSOLBalance = ownerInfo.useSOLBalance && itemReward.mint.address === WSOLMint.toString();
      let ownerRewardAccount = ownerMintToAccount[itemReward.mint.address];
      if (!ownerRewardAccount) {
        const { account, instructionParams } = await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: new import_web328.PublicKey(itemReward.mint.programId),
          mint: new import_web328.PublicKey(itemReward.mint.address),
          notUseTokenAccount: rewardUseSOLBalance,
          owner: this.scope.ownerPubKey,
          skipCloseAccount: !rewardUseSOLBalance,
          createInfo: {
            payer: this.scope.ownerPubKey,
            amount: 0
          },
          associatedOnly: rewardUseSOLBalance ? false : associatedOnly
        });
        ownerRewardAccount = account;
        instructionParams && txBuilder.addInstruction(instructionParams);
      }
      ownerMintToAccount[itemReward.mint.address] = ownerRewardAccount;
      rewardAccounts.push(ownerRewardAccount);
    }
    const lockPositionId = getPdaLockClPositionIdV2(programId, lockData.lockNftMint).publicKey;
    const lockNftAccount = getATAAddress(this.scope.ownerPubKey, lockData.lockNftMint, import_spl_token20.TOKEN_PROGRAM_ID).publicKey;
    const tickArrayLowerStartIndex = TickUtils.getTickArrayStartIndexByTick(position.tickLower, poolKeys.config.tickSpacing);
    const tickArrayUpperStartIndex = TickUtils.getTickArrayStartIndexByTick(position.tickUpper, poolKeys.config.tickSpacing);
    const { publicKey: tickArrayLower } = getPdaTickArrayAddress(new import_web328.PublicKey(poolKeys.programId), lockData.poolId, tickArrayLowerStartIndex);
    const { publicKey: tickArrayUpper } = getPdaTickArrayAddress(new import_web328.PublicKey(poolKeys.programId), lockData.poolId, tickArrayUpperStartIndex);
    const { publicKey: protocolPosition } = getPdaProtocolPositionAddress(new import_web328.PublicKey(poolKeys.programId), lockData.poolId, position.tickLower, position.tickUpper);
    const rewardAccountsFullInfo = [];
    for (let i = 0; i < poolKeys.rewardInfos.length; i++) {
      rewardAccountsFullInfo.push({
        poolRewardVault: new import_web328.PublicKey(poolKeys.rewardInfos[i].vault),
        ownerRewardVault: rewardAccounts[i],
        rewardMint: new import_web328.PublicKey(poolKeys.rewardInfos[i].mint.address)
      });
    }
    const harvestLockIns = await ClmmInstrument.harvestLockPositionInstructionV2({
      programId,
      auth: authProgramId,
      lockPositionId,
      clmmProgram,
      lockOwner: this.scope.ownerPubKey,
      lockNftMint: lockData.lockNftMint,
      lockNftAccount,
      positionNftAccount: lockData.nftAccount,
      positionId: lockData.positionId,
      poolId: lockData.poolId,
      protocolPosition,
      vaultA: new import_web328.PublicKey(poolKeys.vault.A),
      vaultB: new import_web328.PublicKey(poolKeys.vault.B),
      tickArrayLower,
      tickArrayUpper,
      userVaultA: ownerTokenAccountA,
      userVaultB: ownerTokenAccountB,
      mintA: new import_web328.PublicKey(poolKeys.mintA.address),
      mintB: new import_web328.PublicKey(poolKeys.mintB.address),
      rewardAccounts: rewardAccountsFullInfo,
      exTickArrayBitmap: getPdaExBitmapAccount(clmmProgram, lockData.poolId).publicKey
    });
    txBuilder.addInstruction({
      instructions: [harvestLockIns],
      instructionTypes: [InstructionType.ClmmHarvestLockPosition]
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion
    });
  }
  async closePosition({
    poolInfo,
    poolKeys: propPoolKeys,
    ownerPosition,
    txVersion,
    computeBudgetConfig,
    txTipConfig,
    feePayer
  }) {
    if (this.scope.availability.removeConcentratedPosition === false)
      this.logAndCreateError("remove position feature disabled in your region");
    const txBuilder = this.createTxBuilder(feePayer);
    const poolKeys = propPoolKeys ?? await this.getClmmPoolKeys(poolInfo.id);
    const ins = ClmmInstrument.closePositionInstructions({
      poolInfo,
      poolKeys,
      ownerInfo: { wallet: this.scope.ownerPubKey },
      ownerPosition,
      nft2022: (await this.scope.connection.getAccountInfo(ownerPosition.nftMint))?.owner.equals(import_spl_token20.TOKEN_2022_PROGRAM_ID)
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.addInstruction(ins).versionBuild({
      txVersion,
      extInfo: { address: ins.address }
    });
  }
  async initReward({
    poolInfo,
    ownerInfo,
    rewardInfo,
    associatedOnly = true,
    checkCreateATAOwner = false,
    computeBudgetConfig,
    txVersion,
    feePayer
  }) {
    if (rewardInfo.endTime <= rewardInfo.openTime)
      this.logAndCreateError("reward time error", "rewardInfo", rewardInfo);
    const txBuilder = this.createTxBuilder(feePayer);
    const rewardMintUseSOLBalance = ownerInfo.useSOLBalance && rewardInfo.mint.address.toString() === WSOLMint.toString();
    const _baseRewardAmount = rewardInfo.perSecond.mul(rewardInfo.endTime - rewardInfo.openTime);
    const { account: ownerRewardAccount, instructionParams: ownerRewardAccountIns } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: new import_web328.PublicKey(rewardInfo.mint.address),
      mint: new import_web328.PublicKey(rewardInfo.mint.address),
      notUseTokenAccount: !!rewardMintUseSOLBalance,
      skipCloseAccount: !rewardMintUseSOLBalance,
      owner: this.scope.ownerPubKey,
      createInfo: rewardMintUseSOLBalance ? {
        payer: ownerInfo.feePayer || this.scope.ownerPubKey,
        amount: new import_bn24.default(new decimal_default(_baseRewardAmount.toFixed(0)).gte(_baseRewardAmount) ? _baseRewardAmount.toFixed(0) : _baseRewardAmount.add(1).toFixed(0))
      } : void 0,
      associatedOnly: rewardMintUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    ownerRewardAccountIns && txBuilder.addInstruction(ownerRewardAccountIns);
    if (!ownerRewardAccount)
      this.logAndCreateError("no money", "ownerRewardAccount", this.scope.account.tokenAccountRawInfos);
    const poolKeys = await this.getClmmPoolKeys(poolInfo.id);
    const insInfo = ClmmInstrument.initRewardInstructions({
      poolInfo,
      poolKeys,
      ownerInfo: {
        wallet: this.scope.ownerPubKey,
        tokenAccount: ownerRewardAccount
      },
      rewardInfo: {
        programId: new import_web328.PublicKey(rewardInfo.mint.programId),
        mint: new import_web328.PublicKey(rewardInfo.mint.address),
        openTime: rewardInfo.openTime,
        endTime: rewardInfo.endTime,
        emissionsPerSecondX64: MathUtil.decimalToX64(rewardInfo.perSecond)
      }
    });
    txBuilder.addInstruction(insInfo);
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    return txBuilder.versionBuild({
      txVersion,
      extInfo: { address: insInfo.address }
    });
  }
  async initRewards({
    poolInfo,
    poolKeys: propPoolKeys,
    ownerInfo,
    rewardInfos,
    associatedOnly = true,
    checkCreateATAOwner = false,
    computeBudgetConfig,
    txTipConfig,
    txVersion,
    feePayer
  }) {
    for (const rewardInfo of rewardInfos) {
      if (rewardInfo.endTime <= rewardInfo.openTime)
        this.logAndCreateError("reward time error", "rewardInfo", rewardInfo);
    }
    const txBuilder = this.createTxBuilder(feePayer);
    let address = {};
    for (const rewardInfo of rewardInfos) {
      const rewardMintUseSOLBalance = ownerInfo.useSOLBalance && rewardInfo.mint.address === WSOLMint.toString();
      const _baseRewardAmount = rewardInfo.perSecond.mul(rewardInfo.endTime - rewardInfo.openTime);
      const { account: ownerRewardAccount, instructionParams: ownerRewardAccountIns } = await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: new import_web328.PublicKey(rewardInfo.mint.programId),
        mint: new import_web328.PublicKey(rewardInfo.mint.address),
        notUseTokenAccount: !!rewardMintUseSOLBalance,
        skipCloseAccount: !rewardMintUseSOLBalance,
        owner: this.scope.ownerPubKey,
        createInfo: rewardMintUseSOLBalance ? {
          payer: ownerInfo.feePayer || this.scope.ownerPubKey,
          amount: new import_bn24.default(new decimal_default(_baseRewardAmount.toFixed(0)).gte(_baseRewardAmount) ? _baseRewardAmount.toFixed(0) : _baseRewardAmount.add(1).toFixed(0))
        } : void 0,
        associatedOnly: rewardMintUseSOLBalance ? false : associatedOnly,
        checkCreateATAOwner
      });
      ownerRewardAccountIns && txBuilder.addInstruction(ownerRewardAccountIns);
      if (!ownerRewardAccount)
        this.logAndCreateError("no money", "ownerRewardAccount", this.scope.account.tokenAccountRawInfos);
      const poolKeys = propPoolKeys ?? await this.getClmmPoolKeys(poolInfo.id);
      const insInfo = ClmmInstrument.initRewardInstructions({
        poolInfo,
        poolKeys,
        ownerInfo: {
          wallet: this.scope.ownerPubKey,
          tokenAccount: ownerRewardAccount
        },
        rewardInfo: {
          programId: new import_web328.PublicKey(rewardInfo.mint.programId),
          mint: new import_web328.PublicKey(rewardInfo.mint.address),
          openTime: rewardInfo.openTime,
          endTime: rewardInfo.endTime,
          emissionsPerSecondX64: MathUtil.decimalToX64(rewardInfo.perSecond)
        }
      });
      address = {
        ...address,
        ...insInfo.address
      };
      txBuilder.addInstruction(insInfo);
    }
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion,
      extInfo: { address }
    });
  }
  async setReward({
    poolInfo,
    ownerInfo,
    rewardInfo,
    associatedOnly = true,
    checkCreateATAOwner = false,
    computeBudgetConfig,
    txTipConfig,
    txVersion,
    feePayer
  }) {
    if (rewardInfo.endTime <= rewardInfo.openTime)
      this.logAndCreateError("reward time error", "rewardInfo", rewardInfo);
    const txBuilder = this.createTxBuilder(feePayer);
    const rewardMintUseSOLBalance = ownerInfo.useSOLBalance && rewardInfo.mint.equals(WSOLMint);
    const { account: ownerRewardAccount, instructionParams: ownerRewardIns } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: rewardInfo.programId,
      mint: rewardInfo.mint,
      notUseTokenAccount: rewardMintUseSOLBalance,
      owner: this.scope.ownerPubKey,
      createInfo: rewardMintUseSOLBalance ? {
        payer: ownerInfo.feePayer || this.scope.ownerPubKey,
        amount: new import_bn24.default(new decimal_default(rewardInfo.perSecond.mul(rewardInfo.endTime - rewardInfo.openTime).toFixed(0)).gte(rewardInfo.perSecond.mul(rewardInfo.endTime - rewardInfo.openTime)) ? rewardInfo.perSecond.mul(rewardInfo.endTime - rewardInfo.openTime).toFixed(0) : rewardInfo.perSecond.mul(rewardInfo.endTime - rewardInfo.openTime).add(1).toFixed(0))
      } : void 0,
      associatedOnly: rewardMintUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    ownerRewardIns && txBuilder.addInstruction(ownerRewardIns);
    if (!ownerRewardAccount)
      this.logAndCreateError("no money", "ownerRewardAccount", this.scope.account.tokenAccountRawInfos);
    const poolKeys = await this.getClmmPoolKeys(poolInfo.id);
    const insInfo = ClmmInstrument.setRewardInstructions({
      poolInfo,
      poolKeys,
      ownerInfo: {
        wallet: this.scope.ownerPubKey,
        tokenAccount: ownerRewardAccount
      },
      rewardInfo: {
        mint: rewardInfo.mint,
        openTime: rewardInfo.openTime,
        endTime: rewardInfo.endTime,
        emissionsPerSecondX64: MathUtil.decimalToX64(rewardInfo.perSecond)
      }
    });
    txBuilder.addInstruction(insInfo);
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion,
      extInfo: { address: insInfo.address }
    });
  }
  async setRewards({
    poolInfo,
    poolKeys: propPoolKeys,
    ownerInfo,
    rewardInfos,
    associatedOnly = true,
    checkCreateATAOwner = false,
    computeBudgetConfig,
    txTipConfig,
    txVersion,
    feePayer
  }) {
    const txBuilder = this.createTxBuilder(feePayer);
    let address = {};
    for (const rewardInfo of rewardInfos) {
      if (rewardInfo.endTime <= rewardInfo.openTime)
        this.logAndCreateError("reward time error", "rewardInfo", rewardInfo);
      const rewardMintUseSOLBalance = ownerInfo.useSOLBalance && rewardInfo.mint.address === WSOLMint.toString();
      const { account: ownerRewardAccount, instructionParams: ownerRewardIns } = await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: new import_web328.PublicKey(rewardInfo.mint.programId),
        mint: new import_web328.PublicKey(rewardInfo.mint.address),
        notUseTokenAccount: rewardMintUseSOLBalance,
        owner: this.scope.ownerPubKey,
        createInfo: rewardMintUseSOLBalance ? {
          payer: ownerInfo.feePayer || this.scope.ownerPubKey,
          amount: new import_bn24.default(new decimal_default(rewardInfo.perSecond.mul(rewardInfo.endTime - rewardInfo.openTime).toFixed(0)).gte(rewardInfo.perSecond.mul(rewardInfo.endTime - rewardInfo.openTime)) ? rewardInfo.perSecond.mul(rewardInfo.endTime - rewardInfo.openTime).toFixed(0) : rewardInfo.perSecond.mul(rewardInfo.endTime - rewardInfo.openTime).add(1).toFixed(0))
        } : void 0,
        associatedOnly: rewardMintUseSOLBalance ? false : associatedOnly,
        checkCreateATAOwner
      });
      ownerRewardIns && txBuilder.addInstruction(ownerRewardIns);
      if (!ownerRewardAccount)
        this.logAndCreateError("no money", "ownerRewardAccount", this.scope.account.tokenAccountRawInfos);
      const poolKeys = propPoolKeys ?? await this.getClmmPoolKeys(poolInfo.id);
      const insInfo = ClmmInstrument.setRewardInstructions({
        poolInfo,
        poolKeys,
        ownerInfo: {
          wallet: this.scope.ownerPubKey,
          tokenAccount: ownerRewardAccount
        },
        rewardInfo: {
          mint: new import_web328.PublicKey(rewardInfo.mint.address),
          openTime: rewardInfo.openTime,
          endTime: rewardInfo.endTime,
          emissionsPerSecondX64: MathUtil.decimalToX64(rewardInfo.perSecond)
        }
      });
      txBuilder.addInstruction(insInfo);
      address = {
        ...address,
        ...insInfo.address
      };
    }
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion,
      extInfo: { address }
    });
  }
  async collectReward({
    poolInfo,
    ownerInfo,
    rewardMint,
    associatedOnly = true,
    checkCreateATAOwner = false,
    computeBudgetConfig,
    txTipConfig,
    txVersion,
    feePayer
  }) {
    const rewardInfo = poolInfo.rewardDefaultInfos.find((i) => i.mint.address === rewardMint.toString());
    if (!rewardInfo)
      this.logAndCreateError("reward mint error", "not found reward mint", rewardMint);
    const txBuilder = this.createTxBuilder(feePayer);
    const rewardMintUseSOLBalance = ownerInfo.useSOLBalance && rewardMint.equals(WSOLMint);
    const { account: ownerRewardAccount, instructionParams: ownerRewardIns } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: new import_web328.PublicKey(rewardInfo.mint.programId),
      mint: rewardMint,
      notUseTokenAccount: rewardMintUseSOLBalance,
      owner: this.scope.ownerPubKey,
      skipCloseAccount: !rewardMintUseSOLBalance,
      createInfo: {
        payer: ownerInfo.feePayer || this.scope.ownerPubKey,
        amount: 0
      },
      associatedOnly: rewardMintUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    ownerRewardIns && txBuilder.addInstruction(ownerRewardIns);
    if (!ownerRewardAccount)
      this.logAndCreateError("no money", "ownerRewardAccount", this.scope.account.tokenAccountRawInfos);
    const poolKeys = await this.getClmmPoolKeys(poolInfo.id);
    const insInfo = ClmmInstrument.collectRewardInstructions({
      poolInfo,
      poolKeys,
      ownerInfo: {
        wallet: this.scope.ownerPubKey,
        tokenAccount: ownerRewardAccount
      },
      rewardMint
    });
    txBuilder.addInstruction(insInfo);
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion,
      extInfo: { address: insInfo.address }
    });
  }
  async collectRewards({
    poolInfo,
    ownerInfo,
    rewardMints,
    associatedOnly = true,
    checkCreateATAOwner = false,
    computeBudgetConfig,
    txTipConfig,
    feePayer
  }) {
    const txBuilder = this.createTxBuilder(feePayer);
    let address = {};
    for (const rewardMint of rewardMints) {
      const rewardInfo = poolInfo.rewardDefaultInfos.find((i) => i.mint.address === rewardMint.toString());
      if (!rewardInfo) {
        this.logAndCreateError("reward mint error", "not found reward mint", rewardMint);
        continue;
      }
      const rewardMintUseSOLBalance = ownerInfo.useSOLBalance && rewardMint.equals(WSOLMint);
      const { account: ownerRewardAccount, instructionParams: ownerRewardIns } = await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: new import_web328.PublicKey(rewardInfo.mint.programId),
        mint: rewardMint,
        notUseTokenAccount: rewardMintUseSOLBalance,
        owner: this.scope.ownerPubKey,
        skipCloseAccount: !rewardMintUseSOLBalance,
        createInfo: {
          payer: ownerInfo.feePayer || this.scope.ownerPubKey,
          amount: 0
        },
        associatedOnly: rewardMintUseSOLBalance ? false : associatedOnly,
        checkCreateATAOwner
      });
      if (!ownerRewardAccount)
        this.logAndCreateError("no money", "ownerRewardAccount", this.scope.account.tokenAccountRawInfos);
      ownerRewardIns && txBuilder.addInstruction(ownerRewardIns);
      const poolKeys = await this.getClmmPoolKeys(poolInfo.id);
      const insInfo = ClmmInstrument.collectRewardInstructions({
        poolInfo,
        poolKeys,
        ownerInfo: {
          wallet: this.scope.ownerPubKey,
          tokenAccount: ownerRewardAccount
        },
        rewardMint
      });
      txBuilder.addInstruction(insInfo);
      address = { ...address, ...insInfo.address };
    }
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.build({ address });
  }
  async swap({
    poolInfo,
    poolKeys: propPoolKeys,
    inputMint,
    amountIn,
    amountOutMin,
    priceLimit,
    observationId,
    ownerInfo,
    remainingAccounts,
    associatedOnly = true,
    checkCreateATAOwner = false,
    txVersion,
    computeBudgetConfig,
    txTipConfig,
    feePayer
  }) {
    const txBuilder = this.createTxBuilder(feePayer);
    const baseIn = inputMint.toString() === poolInfo.mintA.address;
    const mintAUseSOLBalance = ownerInfo.useSOLBalance && poolInfo.mintA.address === WSOLMint.toBase58();
    const mintBUseSOLBalance = ownerInfo.useSOLBalance && poolInfo.mintB.address === WSOLMint.toBase58();
    let sqrtPriceLimitX64;
    if (!priceLimit || priceLimit.equals(new decimal_default(0))) {
      sqrtPriceLimitX64 = baseIn ? MIN_SQRT_PRICE_X64.add(new import_bn24.default(1)) : MAX_SQRT_PRICE_X64.sub(new import_bn24.default(1));
    } else {
      sqrtPriceLimitX64 = SqrtPriceMath.priceToSqrtPriceX64(priceLimit, poolInfo.mintA.decimals, poolInfo.mintB.decimals);
    }
    let ownerTokenAccountA;
    if (!ownerTokenAccountA) {
      const { account, instructionParams } = await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: poolInfo.mintA.programId,
        mint: new import_web328.PublicKey(poolInfo.mintA.address),
        notUseTokenAccount: mintAUseSOLBalance,
        owner: this.scope.ownerPubKey,
        skipCloseAccount: !mintAUseSOLBalance,
        createInfo: mintAUseSOLBalance || !baseIn ? {
          payer: ownerInfo.feePayer || this.scope.ownerPubKey,
          amount: baseIn ? amountIn : 0
        } : void 0,
        associatedOnly: mintAUseSOLBalance ? false : associatedOnly,
        checkCreateATAOwner
      });
      ownerTokenAccountA = account;
      instructionParams && txBuilder.addInstruction(instructionParams);
    }
    let ownerTokenAccountB;
    if (!ownerTokenAccountB) {
      const { account, instructionParams } = await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: poolInfo.mintB.programId,
        mint: new import_web328.PublicKey(poolInfo.mintB.address),
        notUseTokenAccount: mintBUseSOLBalance,
        owner: this.scope.ownerPubKey,
        skipCloseAccount: !mintBUseSOLBalance,
        createInfo: mintBUseSOLBalance || baseIn ? {
          payer: ownerInfo.feePayer || this.scope.ownerPubKey,
          amount: baseIn ? 0 : amountIn
        } : void 0,
        associatedOnly: mintBUseSOLBalance ? false : associatedOnly,
        checkCreateATAOwner
      });
      ownerTokenAccountB = account;
      instructionParams && txBuilder.addInstruction(instructionParams);
    }
    if (!ownerTokenAccountA || !ownerTokenAccountB)
      this.logAndCreateError("user do not have token account", {
        tokenA: poolInfo.mintA.symbol || poolInfo.mintA.address,
        tokenB: poolInfo.mintB.symbol || poolInfo.mintB.address,
        ownerTokenAccountA,
        ownerTokenAccountB,
        mintAUseSOLBalance,
        mintBUseSOLBalance,
        associatedOnly
      });
    const poolKeys = propPoolKeys ?? await this.getClmmPoolKeys(poolInfo.id);
    txBuilder.addInstruction(ClmmInstrument.makeSwapBaseInInstructions({
      poolInfo,
      poolKeys,
      observationId,
      ownerInfo: {
        wallet: this.scope.ownerPubKey,
        tokenAccountA: ownerTokenAccountA,
        tokenAccountB: ownerTokenAccountB
      },
      inputMint: new import_web328.PublicKey(inputMint),
      amountIn,
      amountOutMin,
      sqrtPriceLimitX64,
      remainingAccounts
    }));
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({ txVersion });
  }
  async swapBaseOut({
    poolInfo,
    poolKeys: propPoolKeys,
    outputMint,
    amountOut,
    amountInMax,
    priceLimit,
    observationId,
    ownerInfo,
    remainingAccounts,
    associatedOnly = true,
    checkCreateATAOwner = false,
    txVersion,
    computeBudgetConfig,
    txTipConfig,
    feePayer
  }) {
    const txBuilder = this.createTxBuilder(feePayer);
    const baseIn = outputMint.toString() === poolInfo.mintB.address;
    const mintAUseSOLBalance = ownerInfo.useSOLBalance && poolInfo.mintA.address === WSOLMint.toBase58();
    const mintBUseSOLBalance = ownerInfo.useSOLBalance && poolInfo.mintB.address === WSOLMint.toBase58();
    let sqrtPriceLimitX64;
    if (!priceLimit || priceLimit.equals(new decimal_default(0))) {
      sqrtPriceLimitX64 = outputMint.toString() === poolInfo.mintB.address ? MIN_SQRT_PRICE_X64.add(new import_bn24.default(1)) : MAX_SQRT_PRICE_X64.sub(new import_bn24.default(1));
    } else {
      sqrtPriceLimitX64 = SqrtPriceMath.priceToSqrtPriceX64(priceLimit, poolInfo.mintA.decimals, poolInfo.mintB.decimals);
    }
    let ownerTokenAccountA;
    if (!ownerTokenAccountA) {
      const { account, instructionParams } = await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: poolInfo.mintA.programId,
        mint: new import_web328.PublicKey(poolInfo.mintA.address),
        notUseTokenAccount: mintAUseSOLBalance,
        owner: this.scope.ownerPubKey,
        skipCloseAccount: !mintAUseSOLBalance,
        createInfo: mintAUseSOLBalance || !baseIn ? {
          payer: ownerInfo.feePayer || this.scope.ownerPubKey,
          amount: baseIn ? amountInMax : 0
        } : void 0,
        associatedOnly: mintAUseSOLBalance ? false : associatedOnly,
        checkCreateATAOwner
      });
      ownerTokenAccountA = account;
      instructionParams && txBuilder.addInstruction(instructionParams);
    }
    let ownerTokenAccountB;
    if (!ownerTokenAccountB) {
      const { account, instructionParams } = await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: poolInfo.mintB.programId,
        mint: new import_web328.PublicKey(poolInfo.mintB.address),
        notUseTokenAccount: mintBUseSOLBalance,
        owner: this.scope.ownerPubKey,
        skipCloseAccount: !mintBUseSOLBalance,
        createInfo: mintBUseSOLBalance || baseIn ? {
          payer: ownerInfo.feePayer || this.scope.ownerPubKey,
          amount: baseIn ? 0 : amountInMax
        } : void 0,
        associatedOnly: mintBUseSOLBalance ? false : associatedOnly,
        checkCreateATAOwner
      });
      ownerTokenAccountB = account;
      instructionParams && txBuilder.addInstruction(instructionParams);
    }
    if (!ownerTokenAccountA || !ownerTokenAccountB)
      this.logAndCreateError("user do not have token account", {
        tokenA: poolInfo.mintA.symbol || poolInfo.mintA.address,
        tokenB: poolInfo.mintB.symbol || poolInfo.mintB.address,
        ownerTokenAccountA,
        ownerTokenAccountB,
        mintAUseSOLBalance,
        mintBUseSOLBalance,
        associatedOnly
      });
    const poolKeys = propPoolKeys ?? await this.getClmmPoolKeys(poolInfo.id);
    txBuilder.addInstruction(ClmmInstrument.makeSwapBaseOutInstructions({
      poolInfo,
      poolKeys,
      observationId,
      ownerInfo: {
        wallet: this.scope.ownerPubKey,
        tokenAccountA: ownerTokenAccountA,
        tokenAccountB: ownerTokenAccountB
      },
      outputMint: new import_web328.PublicKey(outputMint),
      amountOut,
      amountInMax,
      sqrtPriceLimitX64,
      remainingAccounts
    }));
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({ txVersion });
  }
  async harvestAllRewards({
    allPoolInfo,
    allPositions,
    lockInfo,
    ownerInfo,
    associatedOnly = true,
    checkCreateATAOwner = false,
    programId,
    txVersion,
    computeBudgetConfig,
    feePayer
  }) {
    const ownerMintToAccount = {};
    for (const item of this.scope.account.tokenAccountRawInfos) {
      if (associatedOnly) {
        const ata = getATAAddress(this.scope.ownerPubKey, item.accountInfo.mint, programId).publicKey;
        if (ata.equals(item.pubkey))
          ownerMintToAccount[item.accountInfo.mint.toString()] = item.pubkey;
      } else {
        ownerMintToAccount[item.accountInfo.mint.toString()] = item.pubkey;
      }
    }
    const allNftMints = Object.values(allPositions).flat().map((p) => p.nftMint);
    const mintData = await getMultipleAccountsInfoWithCustomFlags(this.scope.connection, allNftMints.map((n) => ({ pubkey: n })));
    const record = {};
    mintData.forEach((data) => {
      record[data.pubkey.toBase58()] = data?.accountInfo?.owner ?? null;
    });
    const txBuilder = this.createTxBuilder(feePayer);
    for (const itemInfo of Object.values(allPoolInfo)) {
      if (allPositions[itemInfo.id] === void 0)
        continue;
      if (!allPositions[itemInfo.id].find((i) => !i.liquidity.isZero() || i.rewardInfos.find((ii) => !ii.rewardAmountOwed.isZero())))
        continue;
      const poolInfo = itemInfo;
      const mintAUseSOLBalance = ownerInfo.useSOLBalance && poolInfo.mintA.address === WSOLMint.toString();
      const mintBUseSOLBalance = ownerInfo.useSOLBalance && poolInfo.mintB.address === WSOLMint.toString();
      let ownerTokenAccountA = ownerMintToAccount[poolInfo.mintA.address];
      if (!ownerTokenAccountA) {
        const { account, instructionParams } = await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: poolInfo.mintA.programId,
          mint: new import_web328.PublicKey(poolInfo.mintA.address),
          notUseTokenAccount: mintAUseSOLBalance,
          owner: this.scope.ownerPubKey,
          skipCloseAccount: !mintAUseSOLBalance,
          createInfo: {
            payer: ownerInfo.feePayer || this.scope.ownerPubKey,
            amount: 0
          },
          associatedOnly: mintAUseSOLBalance ? false : associatedOnly,
          checkCreateATAOwner
        });
        ownerTokenAccountA = account;
        instructionParams && txBuilder.addInstruction(instructionParams);
      }
      let ownerTokenAccountB = ownerMintToAccount[poolInfo.mintB.address];
      if (!ownerTokenAccountB) {
        const { account, instructionParams } = await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: poolInfo.mintB.programId,
          mint: new import_web328.PublicKey(poolInfo.mintB.address),
          notUseTokenAccount: mintBUseSOLBalance,
          owner: this.scope.ownerPubKey,
          skipCloseAccount: !mintBUseSOLBalance,
          createInfo: {
            payer: ownerInfo.feePayer || this.scope.ownerPubKey,
            amount: 0
          },
          associatedOnly: mintBUseSOLBalance ? false : associatedOnly,
          checkCreateATAOwner
        });
        ownerTokenAccountB = account;
        instructionParams && txBuilder.addInstruction(instructionParams);
      }
      ownerMintToAccount[poolInfo.mintA.address] = ownerTokenAccountA;
      ownerMintToAccount[poolInfo.mintB.address] = ownerTokenAccountB;
      const rewardAccounts = [];
      for (const itemReward of poolInfo.rewardDefaultInfos) {
        const rewardUseSOLBalance = ownerInfo.useSOLBalance && itemReward.mint.address === WSOLMint.toString();
        let ownerRewardAccount = ownerMintToAccount[itemReward.mint.address];
        if (!ownerRewardAccount) {
          const { account, instructionParams } = await this.scope.account.getOrCreateTokenAccount({
            tokenProgram: new import_web328.PublicKey(itemReward.mint.programId),
            mint: new import_web328.PublicKey(itemReward.mint.address),
            notUseTokenAccount: rewardUseSOLBalance,
            owner: this.scope.ownerPubKey,
            skipCloseAccount: !rewardUseSOLBalance,
            createInfo: {
              payer: ownerInfo.feePayer || this.scope.ownerPubKey,
              amount: 0
            },
            associatedOnly: rewardUseSOLBalance ? false : associatedOnly
          });
          ownerRewardAccount = account;
          instructionParams && txBuilder.addInstruction(instructionParams);
        }
        ownerMintToAccount[itemReward.mint.address] = ownerRewardAccount;
        rewardAccounts.push(ownerRewardAccount);
      }
      const poolKeys = await this.getClmmPoolKeys(poolInfo.id);
      const rewardAccountsFullInfo = [];
      for (let i = 0; i < poolKeys.rewardInfos.length; i++) {
        rewardAccountsFullInfo.push({
          poolRewardVault: new import_web328.PublicKey(poolKeys.rewardInfos[i].vault),
          ownerRewardVault: rewardAccounts[i],
          rewardMint: new import_web328.PublicKey(poolKeys.rewardInfos[i].mint.address)
        });
      }
      for (const itemPosition of allPositions[itemInfo.id]) {
        const lockData = lockInfo?.[itemInfo.id]?.[itemPosition.nftMint.toBase58()];
        if (lockData) {
          const lockNftAccount = getATAAddress(this.scope.ownerPubKey, lockData.lockNftMint, import_spl_token20.TOKEN_PROGRAM_ID).publicKey;
          const tickArrayLowerStartIndex = TickUtils.getTickArrayStartIndexByTick(itemPosition.tickLower, poolKeys.config.tickSpacing);
          const tickArrayUpperStartIndex = TickUtils.getTickArrayStartIndexByTick(itemPosition.tickUpper, poolKeys.config.tickSpacing);
          const { publicKey: tickArrayLower } = getPdaTickArrayAddress(new import_web328.PublicKey(poolKeys.programId), lockData.poolId, tickArrayLowerStartIndex);
          const { publicKey: tickArrayUpper } = getPdaTickArrayAddress(new import_web328.PublicKey(poolKeys.programId), lockData.poolId, tickArrayUpperStartIndex);
          const { publicKey: protocolPosition } = getPdaProtocolPositionAddress(new import_web328.PublicKey(poolKeys.programId), lockData.poolId, itemPosition.tickLower, itemPosition.tickUpper);
          const lockPositionId = getPdaLockClPositionIdV2(CLMM_LOCK_PROGRAM_ID, lockData.lockNftMint).publicKey;
          const harvestLockIns = ClmmInstrument.harvestLockPositionInstructionV2({
            programId: CLMM_LOCK_PROGRAM_ID,
            auth: CLMM_LOCK_AUTH_ID,
            lockPositionId,
            clmmProgram: CLMM_PROGRAM_ID,
            lockOwner: this.scope.ownerPubKey,
            lockNftMint: lockData.lockNftMint,
            lockNftAccount,
            positionNftAccount: lockData.nftAccount,
            positionId: lockData.positionId,
            poolId: lockData.poolId,
            protocolPosition,
            vaultA: new import_web328.PublicKey(poolKeys.vault.A),
            vaultB: new import_web328.PublicKey(poolKeys.vault.B),
            tickArrayLower,
            tickArrayUpper,
            userVaultA: ownerTokenAccountA,
            userVaultB: ownerTokenAccountB,
            mintA: new import_web328.PublicKey(poolKeys.mintA.address),
            mintB: new import_web328.PublicKey(poolKeys.mintB.address),
            rewardAccounts: rewardAccountsFullInfo,
            exTickArrayBitmap: getPdaExBitmapAccount(CLMM_PROGRAM_ID, lockData.poolId).publicKey
          });
          txBuilder.addInstruction({
            instructions: [harvestLockIns],
            instructionTypes: [InstructionType.ClmmHarvestLockPosition],
            lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : []
          });
        } else {
          const insData = ClmmInstrument.decreaseLiquidityInstructions({
            poolInfo,
            poolKeys,
            ownerPosition: itemPosition,
            ownerInfo: {
              wallet: this.scope.ownerPubKey,
              tokenAccountA: ownerTokenAccountA,
              tokenAccountB: ownerTokenAccountB,
              rewardAccounts
            },
            liquidity: new import_bn24.default(0),
            amountMinA: new import_bn24.default(0),
            amountMinB: new import_bn24.default(0),
            nft2022: record[itemPosition.nftMint.toBase58()]?.equals(import_spl_token20.TOKEN_2022_PROGRAM_ID)
          });
          txBuilder.addInstruction(insData);
        }
      }
    }
    if (txVersion === 0 /* V0 */)
      return txBuilder.sizeCheckBuildV0({ computeBudgetConfig });
    return txBuilder.sizeCheckBuild({ computeBudgetConfig });
  }
  async getWhiteListMint({ programId }) {
    const accountInfo = await this.scope.connection.getAccountInfo(getPdaOperationAccount(programId).publicKey);
    if (!accountInfo)
      return [];
    const whitelistMintsInfo = OperationLayout.decode(accountInfo.data);
    return whitelistMintsInfo.whitelistMints.filter((i) => !i.equals(import_web328.PublicKey.default));
  }
  async getOwnerPositionInfo({
    programId
  }) {
    await this.scope.account.fetchWalletTokenAccounts();
    const balanceMints = this.scope.account.tokenAccountRawInfos.filter((acc) => acc.accountInfo.amount.eq(new import_bn24.default(1)));
    const allPositionKey = balanceMints.map((acc) => getPdaPersonalPositionAddress(new import_web328.PublicKey(programId), acc.accountInfo.mint).publicKey);
    const accountInfo = await this.scope.connection.getMultipleAccountsInfo(allPositionKey);
    const allPosition = [];
    accountInfo.forEach((positionRes) => {
      if (!positionRes)
        return;
      const position = PositionInfoLayout.decode(positionRes.data);
      allPosition.push(position);
    });
    return allPosition;
  }
  async getRpcClmmPoolInfo({ poolId }) {
    return (await this.getRpcClmmPoolInfos({ poolIds: [poolId] }))[String(poolId)];
  }
  async getRpcClmmPoolInfos({
    poolIds,
    config: config2
  }) {
    const accounts = await getMultipleAccountsInfoWithCustomFlags(this.scope.connection, poolIds.map((i) => ({ pubkey: new import_web328.PublicKey(i) })), config2);
    const returnData = {};
    for (let i = 0; i < poolIds.length; i++) {
      const item = accounts[i];
      if (item === null || !item.accountInfo)
        throw Error("fetch pool info error: " + String(poolIds[i]));
      const rpc = PoolInfoLayout.decode(item.accountInfo.data);
      const currentPrice = SqrtPriceMath.sqrtPriceX64ToPrice(rpc.sqrtPriceX64, rpc.mintDecimalsA, rpc.mintDecimalsB).toNumber();
      returnData[String(poolIds[i])] = {
        ...rpc,
        currentPrice,
        programId: item.accountInfo.owner
      };
    }
    return returnData;
  }
  async getComputeClmmPoolInfos({
    clmmPoolsRpcInfo,
    mintInfos
  }) {
    const configSet = new Set(Object.keys(clmmPoolsRpcInfo).map((p) => clmmPoolsRpcInfo[p].ammConfig.toBase58()));
    const res = await getMultipleAccountsInfoWithCustomFlags(this.scope.connection, Array.from(configSet).map((s) => ({ pubkey: new import_web328.PublicKey(s) })));
    const clmmConfigs = {};
    res.forEach((acc) => {
      if (!acc.accountInfo)
        return;
      clmmConfigs[acc.pubkey.toBase58()] = ClmmConfigLayout.decode(acc.accountInfo.data);
    });
    const computeClmmPoolInfo = await PoolUtils.fetchComputeMultipleClmmInfo({
      connection: this.scope.connection,
      rpcDataMap: clmmPoolsRpcInfo,
      poolList: Object.keys(clmmPoolsRpcInfo).map((poolId) => {
        const [mintA, mintB] = [clmmPoolsRpcInfo[poolId].mintA.toBase58(), clmmPoolsRpcInfo[poolId].mintB.toBase58()];
        return {
          id: poolId,
          programId: clmmPoolsRpcInfo[poolId].programId.toBase58(),
          mintA: toApiV3Token({
            address: mintA,
            decimals: clmmPoolsRpcInfo[poolId].mintDecimalsA,
            programId: mintInfos[mintA].programId.toBase58() || import_spl_token20.TOKEN_PROGRAM_ID.toBase58(),
            extensions: {
              feeConfig: mintInfos[mintA]?.feeConfig ? toFeeConfig(mintInfos[mintA]?.feeConfig) : void 0
            }
          }),
          mintB: toApiV3Token({
            address: mintB,
            decimals: clmmPoolsRpcInfo[poolId].mintDecimalsB,
            programId: mintInfos[mintB].programId.toBase58() || import_spl_token20.TOKEN_PROGRAM_ID.toBase58(),
            extensions: {
              feeConfig: mintInfos[mintB]?.feeConfig ? toFeeConfig(mintInfos[mintB]?.feeConfig) : void 0
            }
          }),
          price: clmmPoolsRpcInfo[poolId].currentPrice,
          config: {
            ...clmmConfigs[clmmPoolsRpcInfo[poolId].ammConfig.toBase58()],
            id: clmmPoolsRpcInfo[poolId].ammConfig.toBase58(),
            fundFeeRate: 0,
            description: "",
            defaultRange: 0,
            defaultRangePoint: []
          }
        };
      })
    });
    const computePoolTickData = await PoolUtils.fetchMultiplePoolTickArrays({
      connection: this.scope.connection,
      poolKeys: Object.values(computeClmmPoolInfo)
    });
    return {
      computeClmmPoolInfo,
      computePoolTickData
    };
  }
  async getPoolInfoFromRpc(poolId) {
    const rpcData = await this.getRpcClmmPoolInfo({ poolId });
    const mintSet = /* @__PURE__ */ new Set([rpcData.mintA.toBase58(), rpcData.mintB.toBase58()]);
    const mintInfos = await fetchMultipleMintInfos({
      connection: this.scope.connection,
      mints: Array.from(mintSet).map((m) => new import_web328.PublicKey(m))
    });
    const { computeClmmPoolInfo, computePoolTickData } = await this.scope.clmm.getComputeClmmPoolInfos({
      clmmPoolsRpcInfo: { [poolId]: rpcData },
      mintInfos
    });
    const vaultData = await getMultipleAccountsInfoWithCustomFlags(this.scope.connection, [
      { pubkey: rpcData.vaultA },
      { pubkey: rpcData.vaultB }
    ]);
    const poolInfo = clmmComputeInfoToApiInfo(computeClmmPoolInfo[poolId]);
    if (!vaultData[0].accountInfo || !vaultData[1].accountInfo)
      throw new Error("pool vault data not found");
    poolInfo.mintAmountA = Number(import_spl_token20.AccountLayout.decode(vaultData[0].accountInfo.data).amount.toString());
    poolInfo.mintAmountB = Number(import_spl_token20.AccountLayout.decode(vaultData[1].accountInfo?.data).amount.toString());
    const poolKeys = {
      ...computeClmmPoolInfo[poolId],
      exBitmapAccount: computeClmmPoolInfo[poolId].exBitmapAccount.toBase58(),
      observationId: computeClmmPoolInfo[poolId].observationId.toBase58(),
      id: poolId,
      programId: rpcData.programId.toBase58(),
      openTime: rpcData.startTime.toString(),
      vault: {
        A: rpcData.vaultA.toBase58(),
        B: rpcData.vaultB.toBase58()
      },
      config: poolInfo.config,
      rewardInfos: computeClmmPoolInfo[poolId].rewardInfos.filter((r) => !r.tokenVault.equals(import_web328.PublicKey.default)).map((r) => ({
        mint: toApiV3Token({ address: r.tokenMint.toBase58(), programId: import_spl_token20.TOKEN_PROGRAM_ID.toBase58(), decimals: 10 }),
        vault: r.tokenVault.toBase58()
      }))
    };
    return { poolInfo, poolKeys, computePoolInfo: computeClmmPoolInfo[poolId], tickData: computePoolTickData };
  }
};

// src/raydium/cpmm/cpmm.ts
var import_web330 = require("@solana/web3.js");
var import_spl_token22 = require("@solana/spl-token");

// src/raydium/cpmm/curve/calculator.ts
var import_bn26 = __toESM(require("bn.js"));
var import_decimal11 = __toESM(require("decimal.js-light"));

// src/raydium/cpmm/curve/constantProduct.ts
var import_bn25 = __toESM(require("bn.js"));
function checkedRem(dividend, divisor) {
  if (divisor.isZero())
    throw Error("divisor is zero");
  const result = dividend.mod(divisor);
  return result;
}
function checkedCeilDiv(dividend, rhs) {
  if (rhs.isZero())
    throw Error("rhs is zero");
  let quotient = dividend.div(rhs);
  if (quotient.isZero())
    throw Error("quotient is zero");
  let remainder = checkedRem(dividend, rhs);
  if (remainder.gt(ZERO3)) {
    quotient = quotient.add(new import_bn25.default(1));
    rhs = dividend.div(quotient);
    remainder = checkedRem(dividend, quotient);
    if (remainder.gt(ZERO3)) {
      rhs = rhs.add(new import_bn25.default(1));
    }
  }
  return [quotient, rhs];
}
var ZERO3 = new import_bn25.default(0);
var ConstantProductCurve = class {
  static swapWithoutFees(sourceAmount, swapSourceAmount, swapDestinationAmount) {
    const invariant = swapSourceAmount.mul(swapDestinationAmount);
    const newSwapSourceAmount = swapSourceAmount.add(sourceAmount);
    const [newSwapDestinationAmount] = checkedCeilDiv(invariant, newSwapSourceAmount);
    const destinationAmountSwapped = swapDestinationAmount.sub(newSwapDestinationAmount);
    if (destinationAmountSwapped.isZero())
      throw Error("destinationAmountSwapped is zero");
    return {
      destinationAmountSwapped
    };
  }
  static lpTokensToTradingTokens(lpTokenAmount, lpTokenSupply, swapTokenAmount0, swapTokenAmount1, roundDirection) {
    let tokenAmount0 = lpTokenAmount.mul(swapTokenAmount0).div(lpTokenSupply);
    let tokenAmount1 = lpTokenAmount.mul(swapTokenAmount1).div(lpTokenSupply);
    if (roundDirection === 0 /* Floor */) {
      return { tokenAmount0, tokenAmount1 };
    } else if (roundDirection === 1 /* Ceiling */) {
      const tokenRemainder0 = checkedRem(lpTokenAmount.mul(swapTokenAmount0), lpTokenSupply);
      if (tokenRemainder0.gt(ZERO3) && tokenAmount0.gt(ZERO3)) {
        tokenAmount0 = tokenAmount0.add(new import_bn25.default(1));
      }
      const token1Remainder = checkedRem(lpTokenAmount.mul(swapTokenAmount1), lpTokenSupply);
      if (token1Remainder.gt(ZERO3) && tokenAmount1.gt(ZERO3)) {
        tokenAmount1 = tokenAmount1.add(new import_bn25.default(1));
      }
      return { tokenAmount0, tokenAmount1 };
    }
    throw Error("roundDirection value error");
  }
};

// src/raydium/cpmm/curve/fee.ts
var CpmmFee = class {
  static tradingFee(amount, tradeFeeRate) {
    return ceilDiv(amount, tradeFeeRate, FEE_RATE_DENOMINATOR_VALUE);
  }
  static protocolFee(amount, protocolFeeRate) {
    return floorDiv(amount, protocolFeeRate, FEE_RATE_DENOMINATOR_VALUE);
  }
  static fundFee(amount, fundFeeRate) {
    return floorDiv(amount, fundFeeRate, FEE_RATE_DENOMINATOR_VALUE);
  }
};

// src/raydium/cpmm/curve/calculator.ts
var RoundDirection = /* @__PURE__ */ ((RoundDirection2) => {
  RoundDirection2[RoundDirection2["Floor"] = 0] = "Floor";
  RoundDirection2[RoundDirection2["Ceiling"] = 1] = "Ceiling";
  return RoundDirection2;
})(RoundDirection || {});
var CurveCalculator = class {
  static validate_supply(tokenAmount0, tokenAmount1) {
    if (tokenAmount0.isZero())
      throw Error("tokenAmount0 is zero");
    if (tokenAmount1.isZero())
      throw Error("tokenAmount1 is zero");
  }
  static swap(sourceAmount, swapSourceAmount, swapDestinationAmount, tradeFeeRate) {
    const tradeFee = CpmmFee.tradingFee(sourceAmount, tradeFeeRate);
    const sourceAmountLessFees = sourceAmount.sub(tradeFee);
    const { destinationAmountSwapped } = ConstantProductCurve.swapWithoutFees(sourceAmountLessFees, swapSourceAmount, swapDestinationAmount);
    return {
      newSwapDestinationAmount: swapDestinationAmount.sub(destinationAmountSwapped),
      sourceAmountSwapped: sourceAmount,
      destinationAmountSwapped,
      tradeFee
    };
  }
  static swapBaseOut({
    poolMintA,
    poolMintB,
    tradeFeeRate,
    baseReserve,
    quoteReserve,
    outputMint,
    outputAmount
  }) {
    const [reserveInAmount, reserveOutAmount, reserveInDecimals, reserveOutDecimals, inputMint] = poolMintB.address === outputMint.toString() ? [baseReserve, quoteReserve, poolMintA.decimals, poolMintB.decimals, poolMintA.address] : [quoteReserve, baseReserve, poolMintB.decimals, poolMintA.decimals, poolMintB.address];
    const currentPrice = new import_decimal11.default(reserveOutAmount.toString()).div(10 ** reserveOutDecimals).div(new import_decimal11.default(reserveInAmount.toString()).div(10 ** reserveInDecimals));
    const amountRealOut = outputAmount.gte(reserveOutAmount) ? reserveOutAmount.sub(new import_bn26.default(1)) : outputAmount;
    const denominator = reserveOutAmount.sub(amountRealOut);
    const amountInWithoutFee = BNDivCeil(reserveInAmount.mul(amountRealOut), denominator);
    const amountIn = BNDivCeil(amountInWithoutFee.mul(new import_bn26.default(1e6)), new import_bn26.default(1e6).sub(tradeFeeRate));
    const fee = amountIn.sub(amountInWithoutFee);
    const executionPrice = new import_decimal11.default(amountRealOut.toString()).div(10 ** reserveOutDecimals).div(new import_decimal11.default(amountIn.toString()).div(10 ** reserveInDecimals));
    const priceImpact = currentPrice.isZero() ? 0 : executionPrice.sub(currentPrice).div(currentPrice).abs().toNumber();
    return {
      amountRealOut,
      amountIn,
      amountInWithoutFee,
      tradeFee: fee,
      priceImpact
    };
  }
};

// src/raydium/cpmm/cpmm.ts
var import_bn27 = __toESM(require("bn.js"));

// src/raydium/cpmm/instruction.ts
var import_web329 = require("@solana/web3.js");
var import_spl_token21 = require("@solana/spl-token");

// src/raydium/cpmm/pda.ts
var AUTH_SEED = Buffer.from("vault_and_lp_mint_auth_seed", "utf8");
var AMM_CONFIG_SEED2 = Buffer.from("amm_config", "utf8");
var POOL_SEED2 = Buffer.from("pool", "utf8");
var POOL_LP_MINT_SEED = Buffer.from("pool_lp_mint", "utf8");
var POOL_VAULT_SEED2 = Buffer.from("pool_vault", "utf8");
var OBSERVATION_SEED2 = Buffer.from("observation", "utf8");
function getPdaPoolAuthority(programId) {
  return findProgramAddress([AUTH_SEED], programId);
}
function getCpmmPdaAmmConfigId(programId, index) {
  return findProgramAddress([AMM_CONFIG_SEED2, u16ToBytes2(index)], programId);
}
function getCpmmPdaPoolId(programId, ammConfigId, mintA, mintB) {
  return findProgramAddress([POOL_SEED2, ammConfigId.toBuffer(), mintA.toBuffer(), mintB.toBuffer()], programId);
}
function getPdaLpMint(programId, poolId) {
  return findProgramAddress([POOL_LP_MINT_SEED, poolId.toBuffer()], programId);
}
function getPdaVault(programId, poolId, mint) {
  return findProgramAddress([POOL_VAULT_SEED2, poolId.toBuffer(), mint.toBuffer()], programId);
}
function getPdaObservationId(programId, poolId) {
  return findProgramAddress([OBSERVATION_SEED2, poolId.toBuffer()], programId);
}
function u16ToBytes2(num) {
  const arr = new ArrayBuffer(2);
  const view = new DataView(arr);
  view.setUint16(0, num, false);
  return new Uint8Array(arr);
}
function getCreatePoolKeys({
  poolId: propPoolId,
  programId,
  configId,
  mintA,
  mintB
}) {
  const authority = getPdaPoolAuthority(programId).publicKey;
  const poolId = propPoolId || getCpmmPdaPoolId(programId, configId, mintA, mintB).publicKey;
  const lpMint = getPdaLpMint(programId, poolId).publicKey;
  const vaultA = getPdaVault(programId, poolId, mintA).publicKey;
  const vaultB = getPdaVault(programId, poolId, mintB).publicKey;
  const observationId = getPdaObservationId(programId, poolId).publicKey;
  return {
    poolId,
    configId,
    authority,
    lpMint,
    vaultA,
    vaultB,
    observationId
  };
}
var LOCK_LIQUIDITY_SEED = Buffer.from("locked_liquidity", "utf8");
function getCpLockPda(programId, mint) {
  return findProgramAddress([LOCK_LIQUIDITY_SEED, mint.toBuffer()], programId);
}

// src/raydium/cpmm/instruction.ts
var logger14 = createLogger("Raydium_cpmm");
var anchorDataBuf3 = {
  initialize: [175, 175, 109, 31, 13, 152, 155, 237],
  deposit: [242, 35, 198, 137, 82, 225, 242, 182],
  withdraw: [183, 18, 70, 156, 148, 109, 161, 34],
  swapBaseInput: [143, 190, 90, 218, 196, 30, 51, 222],
  swapBaseOutput: [55, 217, 98, 86, 163, 74, 180, 173],
  lockCpLiquidity: [216, 157, 29, 78, 38, 51, 31, 26],
  collectCpFee: [8, 30, 51, 199, 209, 184, 247, 133]
};
function makeCreateCpmmPoolInInstruction(programId, creator, configId, authority, poolId, mintA, mintB, lpMint, userVaultA, userVaultB, userLpAccount, vaultA, vaultB, createPoolFeeAccount, mintProgramA, mintProgramB, observationId, amountMaxA, amountMaxB, openTime) {
  const dataLayout = struct([u64("amountMaxA"), u64("amountMaxB"), u64("openTime")]);
  const pdaPoolId = getCpmmPdaPoolId(programId, configId, mintA, mintB).publicKey;
  const keys = [
    { pubkey: creator, isSigner: true, isWritable: false },
    { pubkey: configId, isSigner: false, isWritable: false },
    { pubkey: authority, isSigner: false, isWritable: false },
    { pubkey: poolId, isSigner: !poolId.equals(pdaPoolId), isWritable: true },
    { pubkey: mintA, isSigner: false, isWritable: false },
    { pubkey: mintB, isSigner: false, isWritable: false },
    { pubkey: lpMint, isSigner: false, isWritable: true },
    { pubkey: userVaultA, isSigner: false, isWritable: true },
    { pubkey: userVaultB, isSigner: false, isWritable: true },
    { pubkey: userLpAccount, isSigner: false, isWritable: true },
    { pubkey: vaultA, isSigner: false, isWritable: true },
    { pubkey: vaultB, isSigner: false, isWritable: true },
    { pubkey: createPoolFeeAccount, isSigner: false, isWritable: true },
    { pubkey: observationId, isSigner: false, isWritable: true },
    { pubkey: import_spl_token21.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: mintProgramA, isSigner: false, isWritable: false },
    { pubkey: mintProgramB, isSigner: false, isWritable: false },
    { pubkey: import_spl_token21.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: SYSTEM_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: RENT_PROGRAM_ID, isSigner: false, isWritable: false }
  ];
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    amountMaxA,
    amountMaxB,
    openTime
  }, data);
  return new import_web329.TransactionInstruction({
    keys,
    programId,
    data: Buffer.from([...anchorDataBuf3.initialize, ...data])
  });
}
function makeDepositCpmmInInstruction(programId, owner, authority, poolId, userLpAccount, userVaultA, userVaultB, vaultA, vaultB, mintA, mintB, lpMint, lpAmount, amountMaxA, amountMaxB) {
  const dataLayout = struct([u64("lpAmount"), u64("amountMaxA"), u64("amountMaxB")]);
  const keys = [
    { pubkey: owner, isSigner: true, isWritable: false },
    { pubkey: authority, isSigner: false, isWritable: false },
    { pubkey: poolId, isSigner: false, isWritable: true },
    { pubkey: userLpAccount, isSigner: false, isWritable: true },
    { pubkey: userVaultA, isSigner: false, isWritable: true },
    { pubkey: userVaultB, isSigner: false, isWritable: true },
    { pubkey: vaultA, isSigner: false, isWritable: true },
    { pubkey: vaultB, isSigner: false, isWritable: true },
    { pubkey: import_spl_token21.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: import_spl_token21.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: mintA, isSigner: false, isWritable: false },
    { pubkey: mintB, isSigner: false, isWritable: false },
    { pubkey: lpMint, isSigner: false, isWritable: true }
  ];
  const data = Buffer.alloc(dataLayout.span);
  logger14.debug("cpmm deposit data", {
    lpAmount: lpAmount.toString(),
    amountMaxA: amountMaxA.toString(),
    amountMaxB: amountMaxB.toString()
  });
  dataLayout.encode({
    lpAmount,
    amountMaxA,
    amountMaxB
  }, data);
  return new import_web329.TransactionInstruction({
    keys,
    programId,
    data: Buffer.from([...anchorDataBuf3.deposit, ...data])
  });
}
function makeWithdrawCpmmInInstruction(programId, owner, authority, poolId, userLpAccount, userVaultA, userVaultB, vaultA, vaultB, mintA, mintB, lpMint, lpAmount, amountMinA, amountMinB) {
  const dataLayout = struct([u64("lpAmount"), u64("amountMinA"), u64("amountMinB")]);
  const keys = [
    { pubkey: owner, isSigner: true, isWritable: false },
    { pubkey: authority, isSigner: false, isWritable: false },
    { pubkey: poolId, isSigner: false, isWritable: true },
    { pubkey: userLpAccount, isSigner: false, isWritable: true },
    { pubkey: userVaultA, isSigner: false, isWritable: true },
    { pubkey: userVaultB, isSigner: false, isWritable: true },
    { pubkey: vaultA, isSigner: false, isWritable: true },
    { pubkey: vaultB, isSigner: false, isWritable: true },
    { pubkey: import_spl_token21.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: import_spl_token21.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: mintA, isSigner: false, isWritable: false },
    { pubkey: mintB, isSigner: false, isWritable: false },
    { pubkey: lpMint, isSigner: false, isWritable: true },
    { pubkey: MEMO_PROGRAM_ID2, isSigner: false, isWritable: false }
  ];
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    lpAmount,
    amountMinA,
    amountMinB
  }, data);
  return new import_web329.TransactionInstruction({
    keys,
    programId,
    data: Buffer.from([...anchorDataBuf3.withdraw, ...data])
  });
}
function makeSwapCpmmBaseInInstruction(programId, payer, authority, configId, poolId, userInputAccount, userOutputAccount, inputVault, outputVault, inputTokenProgram, outputTokenProgram, inputMint, outputMint, observationId, amountIn, amounOutMin) {
  const dataLayout = struct([u64("amountIn"), u64("amounOutMin")]);
  const keys = [
    { pubkey: payer, isSigner: true, isWritable: false },
    { pubkey: authority, isSigner: false, isWritable: false },
    { pubkey: configId, isSigner: false, isWritable: false },
    { pubkey: poolId, isSigner: false, isWritable: true },
    { pubkey: userInputAccount, isSigner: false, isWritable: true },
    { pubkey: userOutputAccount, isSigner: false, isWritable: true },
    { pubkey: inputVault, isSigner: false, isWritable: true },
    { pubkey: outputVault, isSigner: false, isWritable: true },
    { pubkey: inputTokenProgram, isSigner: false, isWritable: false },
    { pubkey: outputTokenProgram, isSigner: false, isWritable: false },
    { pubkey: inputMint, isSigner: false, isWritable: false },
    { pubkey: outputMint, isSigner: false, isWritable: false },
    { pubkey: observationId, isSigner: false, isWritable: true }
  ];
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    amountIn,
    amounOutMin
  }, data);
  return new import_web329.TransactionInstruction({
    keys,
    programId,
    data: Buffer.from([...anchorDataBuf3.swapBaseInput, ...data])
  });
}
function makeSwapCpmmBaseOutInstruction(programId, payer, authority, configId, poolId, userInputAccount, userOutputAccount, inputVault, outputVault, inputTokenProgram, outputTokenProgram, inputMint, outputMint, observationId, amountInMax, amountOut) {
  const dataLayout = struct([u64("amountInMax"), u64("amountOut")]);
  const keys = [
    { pubkey: payer, isSigner: true, isWritable: false },
    { pubkey: authority, isSigner: false, isWritable: false },
    { pubkey: configId, isSigner: false, isWritable: false },
    { pubkey: poolId, isSigner: false, isWritable: true },
    { pubkey: userInputAccount, isSigner: false, isWritable: true },
    { pubkey: userOutputAccount, isSigner: false, isWritable: true },
    { pubkey: inputVault, isSigner: false, isWritable: true },
    { pubkey: outputVault, isSigner: false, isWritable: true },
    { pubkey: inputTokenProgram, isSigner: false, isWritable: false },
    { pubkey: outputTokenProgram, isSigner: false, isWritable: false },
    { pubkey: inputMint, isSigner: false, isWritable: false },
    { pubkey: outputMint, isSigner: false, isWritable: false },
    { pubkey: observationId, isSigner: false, isWritable: true }
  ];
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    amountInMax,
    amountOut
  }, data);
  return new import_web329.TransactionInstruction({
    keys,
    programId,
    data: Buffer.from([...anchorDataBuf3.swapBaseOutput, ...data])
  });
}
async function makeCpmmLockInstruction(props) {
  const { ownerInfo, poolInfo, poolKeys, feeNftOwner, getEphemeralSigners } = props;
  const signers = [];
  const [poolId, lpMint] = [new import_web329.PublicKey(poolInfo.id), new import_web329.PublicKey(poolInfo.lpMint.address)];
  let nftMintAccount;
  if (getEphemeralSigners) {
    nftMintAccount = new import_web329.PublicKey((await getEphemeralSigners(1))[0]);
  } else {
    const _k = import_web329.Keypair.generate();
    signers.push(_k);
    nftMintAccount = _k.publicKey;
  }
  const { publicKey: nftAccount } = getATAAddress(feeNftOwner, nftMintAccount, import_spl_token21.TOKEN_PROGRAM_ID);
  const { publicKey: metadataAccount } = getPdaMetadataKey(nftMintAccount);
  const { publicKey: lockPda } = getCpLockPda(props.lockProgram, nftMintAccount);
  const { publicKey: userLpVault } = getATAAddress(ownerInfo.wallet, lpMint, import_spl_token21.TOKEN_PROGRAM_ID);
  const { publicKey: lockLpVault } = getATAAddress(props.lockAuthProgram, lpMint, import_spl_token21.TOKEN_PROGRAM_ID);
  const ins = cpmmLockPositionInstruction({
    programId: props.lockProgram,
    auth: props.lockAuthProgram,
    payer: ownerInfo.feePayer,
    liquidityOwner: ownerInfo.wallet,
    nftOwner: feeNftOwner,
    nftMint: nftMintAccount,
    nftAccount,
    poolId,
    lockPda,
    mintLp: lpMint,
    userLpVault,
    lockLpVault,
    poolVaultA: new import_web329.PublicKey(poolKeys.vault.A),
    poolVaultB: new import_web329.PublicKey(poolKeys.vault.B),
    metadataAccount,
    lpAmount: props.lpAmount,
    withMetadata: props.withMetadata ?? true
  });
  return {
    address: {
      nftMint: nftMintAccount,
      nftAccount,
      metadataAccount,
      lockPda,
      userLpVault,
      lockLpVault
    },
    instructions: [ins],
    signers,
    instructionTypes: [InstructionType.CpmmLockLp],
    lookupTableAddress: []
  };
}
function cpmmLockPositionInstruction({
  programId,
  auth,
  payer,
  liquidityOwner,
  nftOwner,
  nftMint,
  nftAccount,
  poolId,
  lockPda,
  mintLp,
  userLpVault,
  lockLpVault,
  poolVaultA,
  poolVaultB,
  metadataAccount,
  lpAmount,
  withMetadata
}) {
  const keys = [
    { pubkey: auth, isSigner: false, isWritable: false },
    { pubkey: payer, isSigner: true, isWritable: true },
    { pubkey: liquidityOwner, isSigner: true, isWritable: false },
    { pubkey: nftOwner, isSigner: false, isWritable: false },
    { pubkey: nftMint, isSigner: true, isWritable: true },
    { pubkey: nftAccount, isSigner: false, isWritable: true },
    { pubkey: poolId, isSigner: false, isWritable: false },
    { pubkey: lockPda, isSigner: false, isWritable: true },
    { pubkey: mintLp, isSigner: false, isWritable: false },
    { pubkey: userLpVault, isSigner: false, isWritable: true },
    { pubkey: lockLpVault, isSigner: false, isWritable: true },
    { pubkey: poolVaultA, isSigner: false, isWritable: true },
    { pubkey: poolVaultB, isSigner: false, isWritable: true },
    { pubkey: metadataAccount, isSigner: false, isWritable: true },
    { pubkey: RENT_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: import_web329.SystemProgram.programId, isSigner: false, isWritable: false },
    { pubkey: import_spl_token21.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: import_spl_token21.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: METADATA_PROGRAM_ID, isSigner: false, isWritable: false }
  ];
  const dataLayout = struct([u64("lpAmount"), bool("withMetadata")]);
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    lpAmount,
    withMetadata
  }, data);
  const aData = Buffer.from([...anchorDataBuf3.lockCpLiquidity, ...data]);
  return new import_web329.TransactionInstruction({
    keys,
    programId,
    data: aData
  });
}
function collectCpFeeInstruction({
  programId,
  nftOwner,
  auth,
  nftAccount,
  lockPda,
  poolId,
  mintLp,
  userVaultA,
  userVaultB,
  poolVaultA,
  poolVaultB,
  mintA,
  mintB,
  lockLpVault,
  lpFeeAmount,
  cpmmProgram,
  cpmmAuthProgram
}) {
  const keys = [
    { pubkey: auth, isSigner: false, isWritable: false },
    { pubkey: nftOwner, isSigner: true, isWritable: false },
    { pubkey: nftAccount, isSigner: false, isWritable: true },
    { pubkey: lockPda, isSigner: false, isWritable: true },
    { pubkey: cpmmProgram ?? CREATE_CPMM_POOL_PROGRAM, isSigner: false, isWritable: false },
    { pubkey: cpmmAuthProgram ?? CREATE_CPMM_POOL_AUTH, isSigner: false, isWritable: false },
    { pubkey: poolId, isSigner: false, isWritable: true },
    { pubkey: mintLp, isSigner: false, isWritable: true },
    { pubkey: userVaultA, isSigner: false, isWritable: true },
    { pubkey: userVaultB, isSigner: false, isWritable: true },
    { pubkey: poolVaultA, isSigner: false, isWritable: true },
    { pubkey: poolVaultB, isSigner: false, isWritable: true },
    { pubkey: mintA, isSigner: false, isWritable: false },
    { pubkey: mintB, isSigner: false, isWritable: false },
    { pubkey: lockLpVault, isSigner: false, isWritable: true },
    { pubkey: import_spl_token21.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: import_spl_token21.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: MEMO_PROGRAM_ID2, isSigner: false, isWritable: false }
  ];
  const dataLayout = struct([u64("lpFeeAmount")]);
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    lpFeeAmount
  }, data);
  const aData = Buffer.from([...anchorDataBuf3.collectCpFee, ...data]);
  return new import_web329.TransactionInstruction({
    keys,
    programId,
    data: aData
  });
}

// src/raydium/cpmm/layout.ts
var CpmmConfigInfoLayout = struct([
  blob(8),
  u82("bump"),
  bool("disableCreatePool"),
  u16("index"),
  u64("tradeFeeRate"),
  u64("protocolFeeRate"),
  u64("fundFeeRate"),
  u64("createPoolFee"),
  publicKey("protocolOwner"),
  publicKey("fundOwner"),
  seq2(u64(), 16)
]);
var CpmmPoolInfoLayout = struct([
  blob(8),
  publicKey("configId"),
  publicKey("poolCreator"),
  publicKey("vaultA"),
  publicKey("vaultB"),
  publicKey("mintLp"),
  publicKey("mintA"),
  publicKey("mintB"),
  publicKey("mintProgramA"),
  publicKey("mintProgramB"),
  publicKey("observationId"),
  u82("bump"),
  u82("status"),
  u82("lpDecimals"),
  u82("mintDecimalA"),
  u82("mintDecimalB"),
  u64("lpAmount"),
  u64("protocolFeesMintA"),
  u64("protocolFeesMintB"),
  u64("fundFeesMintA"),
  u64("fundFeesMintB"),
  u64("openTime"),
  seq2(u64(), 32)
]);

// src/raydium/cpmm/cpmm.ts
var CpmmModule = class extends ModuleBase {
  constructor(params) {
    super(params);
  }
  async load() {
    this.checkDisabled();
  }
  async getCpmmPoolKeys(poolId) {
    return (await this.scope.api.fetchPoolKeysById({ idList: [poolId] }))[0];
  }
  async getRpcPoolInfo(poolId, accountInfos, fetchConfigInfo) {
    if (!poolId && !accountInfos?.marketAccount) {
      throw new Error("Either poolId or accountInfos.marketAccount must be provided");
    }
    const poolAccount = poolId ? (await getMultipleAccountsInfoWithCustomFlags(this.scope.connection, [{ pubkey: new import_web330.PublicKey(poolId) }]))[0] : accountInfos.marketAccount;
    if (!poolAccount?.accountInfo) {
      const identifier = poolId || accountInfos?.marketAccount?.pubkey?.toBase58() || "unknown";
      throw new Error(`Pool account not found: ${identifier}`);
    }
    const poolInfo = {
      ...CpmmPoolInfoLayout.decode(poolAccount.accountInfo.data),
      programId: poolAccount.accountInfo.owner
    };
    const accountsToFetch = [];
    const vaultKeys = [poolInfo.vaultA, poolInfo.vaultB];
    if (poolId) {
      accountsToFetch.push(...vaultKeys.map((key) => ({ pubkey: new import_web330.PublicKey(key) })));
      if (fetchConfigInfo) {
        accountsToFetch.push({ pubkey: new import_web330.PublicKey(poolInfo.configId) });
      }
    }
    let fetchedAccounts = [];
    if (poolId && accountsToFetch.length > 0) {
      fetchedAccounts = await getMultipleAccountsInfoWithCustomFlags(this.scope.connection, accountsToFetch);
    }
    let configInfo;
    if (fetchConfigInfo) {
      const configAccount = poolId ? fetchedAccounts[fetchedAccounts.length - 1] : accountInfos?.configState;
      if (!configAccount?.accountInfo) {
        throw new Error(`Config account not found: ${poolInfo.configId}`);
      }
      configInfo = CpmmConfigInfoLayout.decode(configAccount.accountInfo.data);
    }
    const vaultAInfo = poolId ? fetchedAccounts[0]?.accountInfo : accountInfos?.vaultAInfo?.accountInfo;
    const vaultBInfo = poolId ? fetchedAccounts[1]?.accountInfo : accountInfos?.vaultBInfo?.accountInfo;
    if (!vaultAInfo || !vaultBInfo) {
      throw new Error(`Vault accounts not found: A=${poolInfo.vaultA}, B=${poolInfo.vaultB}`);
    }
    const vaultAAmount = new import_bn27.default(import_spl_token22.AccountLayout.decode(vaultAInfo.data).amount.toString());
    const vaultBAmount = new import_bn27.default(import_spl_token22.AccountLayout.decode(vaultBInfo.data).amount.toString());
    const baseReserve = vaultAAmount.sub(poolInfo.protocolFeesMintA).sub(poolInfo.fundFeesMintA);
    const quoteReserve = vaultBAmount.sub(poolInfo.protocolFeesMintB).sub(poolInfo.fundFeesMintB);
    const baseDecimalFactor = new decimal_default(10).pow(poolInfo.mintDecimalA);
    const quoteDecimalFactor = new decimal_default(10).pow(poolInfo.mintDecimalB);
    const normalizedBase = new decimal_default(baseReserve.toString()).div(baseDecimalFactor);
    const normalizedQuote = new decimal_default(quoteReserve.toString()).div(quoteDecimalFactor);
    const poolPrice = normalizedBase.isZero() ? new decimal_default(0) : normalizedQuote.div(normalizedBase);
    return {
      ...poolInfo,
      baseReserve,
      quoteReserve,
      vaultAAmount,
      vaultBAmount,
      configInfo,
      poolPrice
    };
  }
  async getRpcPoolInfos(poolIds, fetchConfigInfo) {
    const accounts = await getMultipleAccountsInfoWithCustomFlags(this.scope.connection, poolIds.map((i) => ({ pubkey: new import_web330.PublicKey(i) })));
    const poolInfos = {};
    const needFetchConfigId = /* @__PURE__ */ new Set();
    const needFetchVaults = [];
    for (let i = 0; i < poolIds.length; i++) {
      const item = accounts[i];
      if (item.accountInfo === null)
        throw Error("fetch pool info error: " + String(poolIds[i]));
      const rpc = CpmmPoolInfoLayout.decode(item.accountInfo.data);
      poolInfos[String(poolIds[i])] = {
        ...rpc,
        programId: item.accountInfo.owner
      };
      needFetchConfigId.add(String(rpc.configId));
      needFetchVaults.push(rpc.vaultA, rpc.vaultB);
    }
    const configInfo = {};
    if (fetchConfigInfo) {
      const configIds = [...needFetchConfigId];
      const configState = await getMultipleAccountsInfoWithCustomFlags(this.scope.connection, configIds.map((i) => ({ pubkey: new import_web330.PublicKey(i) })));
      for (let i = 0; i < configIds.length; i++) {
        const configItemInfo = configState[i].accountInfo;
        if (configItemInfo === null)
          throw Error("fetch pool config error: " + configIds[i]);
        configInfo[configIds[i]] = CpmmConfigInfoLayout.decode(configItemInfo.data);
      }
    }
    const vaultInfo = {};
    const vaultAccountInfo = await getMultipleAccountsInfoWithCustomFlags(this.scope.connection, needFetchVaults.map((i) => ({ pubkey: new import_web330.PublicKey(i) })));
    for (let i = 0; i < needFetchVaults.length; i++) {
      const vaultItemInfo = vaultAccountInfo[i].accountInfo;
      if (vaultItemInfo === null)
        throw Error("fetch vault info error: " + needFetchVaults[i]);
      vaultInfo[String(needFetchVaults[i])] = new import_bn27.default(import_spl_token22.AccountLayout.decode(vaultItemInfo.data).amount.toString());
    }
    const returnData = {};
    for (const [id, info] of Object.entries(poolInfos)) {
      const baseReserve = vaultInfo[info.vaultA.toString()].sub(info.protocolFeesMintA).sub(info.fundFeesMintA);
      const quoteReserve = vaultInfo[info.vaultB.toString()].sub(info.protocolFeesMintB).sub(info.fundFeesMintB);
      returnData[id] = {
        ...info,
        baseReserve,
        quoteReserve,
        vaultAAmount: vaultInfo[info.vaultA.toString()],
        vaultBAmount: vaultInfo[info.vaultB.toString()],
        configInfo: configInfo[info.configId.toString()],
        poolPrice: new decimal_default(quoteReserve.toString()).div(new decimal_default(10).pow(info.mintDecimalB)).div(new decimal_default(baseReserve.toString()).div(new decimal_default(10).pow(info.mintDecimalA)))
      };
    }
    return returnData;
  }
  toComputePoolInfos({
    pools,
    mintInfos
  }) {
    return Object.keys(pools).reduce((acc, cur) => {
      const pool = pools[cur];
      const [mintA, mintB] = [pool.mintA.toBase58(), pool.mintB.toBase58()];
      return {
        ...acc,
        [cur]: {
          ...pool,
          id: new import_web330.PublicKey(cur),
          configInfo: pool.configInfo,
          version: 7,
          authority: getPdaPoolAuthority(pool.programId).publicKey,
          mintA: toApiV3Token({
            address: mintA,
            decimals: pool.mintDecimalA,
            programId: pool.mintProgramA.toBase58(),
            extensions: {
              feeConfig: mintInfos[mintA]?.feeConfig ? toFeeConfig(mintInfos[mintA]?.feeConfig) : void 0
            }
          }),
          mintB: toApiV3Token({
            address: mintB,
            decimals: pool.mintDecimalB,
            programId: pool.mintProgramB.toBase58(),
            extensions: {
              feeConfig: mintInfos[mintB]?.feeConfig ? toFeeConfig(mintInfos[mintB]?.feeConfig) : void 0
            }
          })
        }
      };
    }, {});
  }
  async getPoolInfoFromRpc(poolId, rpcData, mintInfos) {
    rpcData = rpcData || await this.getRpcPoolInfo(poolId, void 0, true);
    mintInfos = mintInfos || await fetchMultipleMintInfos({
      connection: this.scope.connection,
      mints: [rpcData.mintA, rpcData.mintB]
    });
    const mintA = toApiV3Token({
      address: rpcData.mintA.toBase58(),
      decimals: rpcData.mintDecimalA,
      programId: rpcData.mintProgramA.toBase58(),
      extensions: {
        feeConfig: mintInfos[rpcData.mintA.toBase58()].feeConfig ? toFeeConfig(mintInfos[rpcData.mintA.toBase58()].feeConfig) : void 0
      }
    });
    const mintB = toApiV3Token({
      address: rpcData.mintB.toBase58(),
      decimals: rpcData.mintDecimalB,
      programId: rpcData.mintProgramB.toBase58(),
      extensions: {
        feeConfig: mintInfos[rpcData.mintB.toBase58()].feeConfig ? toFeeConfig(mintInfos[rpcData.mintB.toBase58()].feeConfig) : void 0
      }
    });
    const lpMint = toApiV3Token({
      address: rpcData.mintLp.toBase58(),
      decimals: rpcData.lpDecimals,
      programId: import_spl_token22.TOKEN_PROGRAM_ID.toBase58()
    });
    const configInfo = {
      id: rpcData.configId.toBase58(),
      index: rpcData.configInfo.index,
      protocolFeeRate: rpcData.configInfo.protocolFeeRate.toNumber(),
      tradeFeeRate: rpcData.configInfo.tradeFeeRate.toNumber(),
      fundFeeRate: rpcData.configInfo.fundFeeRate.toNumber(),
      createPoolFee: rpcData.configInfo.createPoolFee.toString()
    };
    const mockRewardData3 = {
      volume: 0,
      volumeQuote: 0,
      volumeFee: 0,
      apr: 0,
      feeApr: 0,
      priceMin: 0,
      priceMax: 0,
      rewardApr: []
    };
    return {
      poolInfo: {
        programId: rpcData.programId.toBase58(),
        id: poolId,
        type: "Standard",
        lpMint,
        lpPrice: 0,
        lpAmount: rpcData.lpAmount.toNumber(),
        config: configInfo,
        mintA,
        mintB,
        rewardDefaultInfos: [],
        rewardDefaultPoolInfos: "Ecosystem",
        price: rpcData.poolPrice.toNumber(),
        mintAmountA: new decimal_default(rpcData.vaultAAmount.toString()).div(10 ** mintA.decimals).toNumber(),
        mintAmountB: new decimal_default(rpcData.vaultBAmount.toString()).div(10 ** mintB.decimals).toNumber(),
        feeRate: rpcData.configInfo.tradeFeeRate.toNumber(),
        openTime: rpcData.openTime.toString(),
        tvl: 0,
        burnPercent: 0,
        day: mockRewardData3,
        week: mockRewardData3,
        month: mockRewardData3,
        pooltype: [],
        farmUpcomingCount: 0,
        farmOngoingCount: 0,
        farmFinishedCount: 0
      },
      poolKeys: {
        programId: rpcData.programId.toBase58(),
        id: poolId,
        mintA,
        mintB,
        openTime: rpcData.openTime.toString(),
        vault: { A: rpcData.vaultA.toBase58(), B: rpcData.vaultB.toBase58() },
        authority: getPdaPoolAuthority(rpcData.programId).publicKey.toBase58(),
        mintLp: lpMint,
        config: configInfo,
        observationId: getPdaObservationId(rpcData.programId, new import_web330.PublicKey(poolId)).publicKey.toBase58()
      },
      rpcData
    };
  }
  async createPool({
    poolId,
    programId,
    poolFeeAccount,
    startTime,
    ownerInfo,
    associatedOnly = false,
    checkCreateATAOwner = false,
    txVersion,
    feeConfig,
    computeBudgetConfig,
    txTipConfig,
    feePayer,
    ...params
  }) {
    const payer = ownerInfo.feePayer || this.scope.owner?.publicKey;
    const isFront = new import_bn27.default(new import_web330.PublicKey(params.mintA.address).toBuffer()).lte(new import_bn27.default(new import_web330.PublicKey(params.mintB.address).toBuffer()));
    const [mintA, mintB] = isFront ? [params.mintA, params.mintB] : [params.mintB, params.mintA];
    const [mintAAmount, mintBAmount] = isFront ? [params.mintAAmount, params.mintBAmount] : [params.mintBAmount, params.mintAAmount];
    const mintAUseSOLBalance = ownerInfo.useSOLBalance && mintA.address === import_spl_token22.NATIVE_MINT.toBase58();
    const mintBUseSOLBalance = ownerInfo.useSOLBalance && mintB.address === import_spl_token22.NATIVE_MINT.toBase58();
    const [mintAPubkey, mintBPubkey] = [new import_web330.PublicKey(mintA.address), new import_web330.PublicKey(mintB.address)];
    const txBuilder = this.createTxBuilder(feePayer);
    const { account: userVaultA, instructionParams: userVaultAInstruction } = await this.scope.account.getOrCreateTokenAccount({
      mint: mintAPubkey,
      tokenProgram: mintA.programId,
      owner: this.scope.ownerPubKey,
      createInfo: mintAUseSOLBalance ? {
        payer,
        amount: mintAAmount
      } : void 0,
      notUseTokenAccount: mintAUseSOLBalance,
      skipCloseAccount: !mintAUseSOLBalance,
      associatedOnly: mintAUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    txBuilder.addInstruction(userVaultAInstruction || {});
    const { account: userVaultB, instructionParams: userVaultBInstruction } = await this.scope.account.getOrCreateTokenAccount({
      mint: new import_web330.PublicKey(mintB.address),
      tokenProgram: mintB.programId,
      owner: this.scope.ownerPubKey,
      createInfo: mintBUseSOLBalance ? {
        payer,
        amount: mintBAmount
      } : void 0,
      notUseTokenAccount: mintBUseSOLBalance,
      skipCloseAccount: !mintBUseSOLBalance,
      associatedOnly: mintBUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    txBuilder.addInstruction(userVaultBInstruction || {});
    if (userVaultA === void 0 || userVaultB === void 0)
      throw Error("you don't has some token account");
    const poolKeys = getCreatePoolKeys({
      poolId,
      programId,
      configId: new import_web330.PublicKey(feeConfig.id),
      mintA: mintAPubkey,
      mintB: mintBPubkey
    });
    txBuilder.addInstruction({
      instructions: [
        makeCreateCpmmPoolInInstruction(programId, this.scope.ownerPubKey, new import_web330.PublicKey(feeConfig.id), poolKeys.authority, poolKeys.poolId, mintAPubkey, mintBPubkey, poolKeys.lpMint, userVaultA, userVaultB, getATAAddress(this.scope.ownerPubKey, poolKeys.lpMint).publicKey, poolKeys.vaultA, poolKeys.vaultB, poolFeeAccount, new import_web330.PublicKey(mintA.programId ?? import_spl_token22.TOKEN_PROGRAM_ID), new import_web330.PublicKey(mintB.programId ?? import_spl_token22.TOKEN_PROGRAM_ID), poolKeys.observationId, mintAAmount, mintBAmount, startTime)
      ],
      instructionTypes: [InstructionType.CpmmCreatePool]
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion,
      extInfo: {
        address: { ...poolKeys, mintA, mintB, programId, poolFeeAccount, feeConfig }
      }
    });
  }
  async addLiquidity(params) {
    const {
      poolInfo,
      poolKeys: propPoolKeys,
      inputAmount,
      baseIn,
      slippage,
      computeResult,
      computeBudgetConfig,
      txTipConfig,
      config: config2,
      txVersion,
      feePayer
    } = params;
    if (this.scope.availability.addStandardPosition === false)
      this.logAndCreateError("add liquidity feature disabled in your region");
    if (inputAmount.isZero())
      this.logAndCreateError("amounts must greater than zero", "amountInA", {
        amountInA: inputAmount.toString()
      });
    const { account } = this.scope;
    const { bypassAssociatedCheck, checkCreateATAOwner } = {
      ...{ bypassAssociatedCheck: false, checkCreateATAOwner: false },
      ...config2
    };
    const rpcPoolData = computeResult ? void 0 : await this.getRpcPoolInfo(poolInfo.id);
    const {
      liquidity,
      inputAmountFee,
      anotherAmount: _anotherAmount
    } = computeResult || this.computePairAmount({
      poolInfo: {
        ...poolInfo,
        lpAmount: new decimal_default(rpcPoolData.lpAmount.toString()).div(10 ** poolInfo.lpMint.decimals).toNumber()
      },
      baseReserve: rpcPoolData.baseReserve,
      quoteReserve: rpcPoolData.quoteReserve,
      slippage: new Percent(0),
      baseIn,
      epochInfo: await this.scope.fetchEpochInfo(),
      amount: new decimal_default(inputAmount.toString()).div(10 ** (baseIn ? poolInfo.mintA.decimals : poolInfo.mintB.decimals))
    });
    const anotherAmount = _anotherAmount.amount;
    const mintAUseSOLBalance = poolInfo.mintA.address === import_spl_token22.NATIVE_MINT.toString();
    const mintBUseSOLBalance = poolInfo.mintB.address === import_spl_token22.NATIVE_MINT.toString();
    const txBuilder = this.createTxBuilder(feePayer);
    const [mintA, mintB] = [new import_web330.PublicKey(poolInfo.mintA.address), new import_web330.PublicKey(poolInfo.mintB.address)];
    const { account: tokenAccountA, instructionParams: _tokenAccountAInstruction } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolInfo.mintA.programId,
      mint: new import_web330.PublicKey(poolInfo.mintA.address),
      owner: this.scope.ownerPubKey,
      createInfo: mintAUseSOLBalance || (baseIn ? inputAmount : anotherAmount).isZero() ? {
        payer: this.scope.ownerPubKey,
        amount: baseIn ? inputAmount : anotherAmount
      } : void 0,
      skipCloseAccount: !mintAUseSOLBalance,
      notUseTokenAccount: mintAUseSOLBalance,
      associatedOnly: false,
      checkCreateATAOwner
    });
    txBuilder.addInstruction(_tokenAccountAInstruction || {});
    const { account: tokenAccountB, instructionParams: _tokenAccountBInstruction } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolInfo.mintB.programId,
      mint: new import_web330.PublicKey(poolInfo.mintB.address),
      owner: this.scope.ownerPubKey,
      createInfo: mintBUseSOLBalance || (baseIn ? anotherAmount : inputAmount).isZero() ? {
        payer: this.scope.ownerPubKey,
        amount: baseIn ? anotherAmount : inputAmount
      } : void 0,
      skipCloseAccount: !mintBUseSOLBalance,
      notUseTokenAccount: mintBUseSOLBalance,
      associatedOnly: false,
      checkCreateATAOwner
    });
    txBuilder.addInstruction(_tokenAccountBInstruction || {});
    if (!tokenAccountA && !tokenAccountB)
      this.logAndCreateError("cannot found target token accounts", "tokenAccounts", account.tokenAccounts);
    const lpTokenAccount = await account.getCreatedTokenAccount({
      mint: new import_web330.PublicKey(poolInfo.lpMint.address)
    });
    const { tokenAccount: _lpTokenAccount, ...lpInstruction } = await account.handleTokenAccount({
      side: "out",
      amount: 0,
      mint: new import_web330.PublicKey(poolInfo.lpMint.address),
      tokenAccount: lpTokenAccount,
      bypassAssociatedCheck,
      checkCreateATAOwner
    });
    txBuilder.addInstruction(lpInstruction);
    const poolKeys = propPoolKeys ?? await this.getCpmmPoolKeys(poolInfo.id);
    const _slippage = new Percent(new import_bn27.default(1)).sub(slippage);
    txBuilder.addInstruction({
      instructions: [
        makeDepositCpmmInInstruction(new import_web330.PublicKey(poolInfo.programId), this.scope.ownerPubKey, new import_web330.PublicKey(poolKeys.authority), new import_web330.PublicKey(poolInfo.id), _lpTokenAccount, tokenAccountA, tokenAccountB, new import_web330.PublicKey(poolKeys.vault.A), new import_web330.PublicKey(poolKeys.vault.B), mintA, mintB, new import_web330.PublicKey(poolInfo.lpMint.address), computeResult ? computeResult?.liquidity : _slippage.mul(liquidity).quotient, baseIn ? inputAmountFee.amount : anotherAmount, baseIn ? anotherAmount : inputAmountFee.amount)
      ],
      instructionTypes: [InstructionType.CpmmAddLiquidity],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : []
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({ txVersion });
  }
  async withdrawLiquidity(params) {
    const {
      poolInfo,
      poolKeys: propPoolKeys,
      lpAmount,
      slippage,
      computeBudgetConfig,
      txTipConfig,
      txVersion,
      feePayer,
      closeWsol = true
    } = params;
    if (this.scope.availability.addStandardPosition === false)
      this.logAndCreateError("add liquidity feature disabled in your region");
    const _slippage = new Percent(new import_bn27.default(1)).sub(slippage);
    const rpcPoolData = await this.getRpcPoolInfo(poolInfo.id);
    const [amountMintA, amountMintB] = [
      _slippage.mul(lpAmount.mul(rpcPoolData.baseReserve).div(rpcPoolData.lpAmount)).quotient,
      _slippage.mul(lpAmount.mul(rpcPoolData.quoteReserve).div(rpcPoolData.lpAmount)).quotient
    ];
    const epochInfo = await this.scope.fetchEpochInfo();
    const [mintAAmountFee, mintBAmountFee] = [
      getTransferAmountFeeV2(amountMintA, poolInfo.mintA.extensions.feeConfig, epochInfo, false),
      getTransferAmountFeeV2(amountMintB, poolInfo.mintB.extensions.feeConfig, epochInfo, false)
    ];
    const { account } = this.scope;
    const txBuilder = this.createTxBuilder(feePayer);
    const [mintA, mintB] = [new import_web330.PublicKey(poolInfo.mintA.address), new import_web330.PublicKey(poolInfo.mintB.address)];
    const mintAUseSOLBalance = mintA.equals(WSOLMint);
    const mintBUseSOLBalance = mintB.equals(WSOLMint);
    let tokenAccountA = void 0;
    let tokenAccountB = void 0;
    const { account: _ownerTokenAccountA, instructionParams: accountAInstructions } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolInfo.mintA.programId,
      mint: new import_web330.PublicKey(poolInfo.mintA.address),
      notUseTokenAccount: mintAUseSOLBalance,
      owner: this.scope.ownerPubKey,
      createInfo: {
        payer: this.scope.ownerPubKey,
        amount: 0
      },
      skipCloseAccount: !(mintAUseSOLBalance && closeWsol),
      associatedOnly: mintAUseSOLBalance ? false : true,
      checkCreateATAOwner: false
    });
    tokenAccountA = _ownerTokenAccountA;
    accountAInstructions && txBuilder.addInstruction(accountAInstructions);
    const { account: _ownerTokenAccountB, instructionParams: accountBInstructions } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolInfo.mintB.programId,
      mint: new import_web330.PublicKey(poolInfo.mintB.address),
      notUseTokenAccount: mintBUseSOLBalance,
      owner: this.scope.ownerPubKey,
      createInfo: {
        payer: this.scope.ownerPubKey,
        amount: 0
      },
      skipCloseAccount: !(mintBUseSOLBalance && closeWsol),
      associatedOnly: mintBUseSOLBalance ? false : true,
      checkCreateATAOwner: false
    });
    tokenAccountB = _ownerTokenAccountB;
    accountBInstructions && txBuilder.addInstruction(accountBInstructions);
    if (!tokenAccountA || !tokenAccountB)
      this.logAndCreateError("cannot found target token accounts", "tokenAccounts", account.tokenAccounts);
    const lpTokenAccount = await account.getCreatedTokenAccount({
      mint: new import_web330.PublicKey(poolInfo.lpMint.address)
    });
    if (!lpTokenAccount)
      this.logAndCreateError("cannot found lp token account", "tokenAccounts", account.tokenAccounts);
    const poolKeys = propPoolKeys ?? await this.getCpmmPoolKeys(poolInfo.id);
    txBuilder.addInstruction({
      instructions: [
        makeWithdrawCpmmInInstruction(new import_web330.PublicKey(poolInfo.programId), this.scope.ownerPubKey, new import_web330.PublicKey(poolKeys.authority), new import_web330.PublicKey(poolInfo.id), lpTokenAccount, tokenAccountA, tokenAccountB, new import_web330.PublicKey(poolKeys.vault.A), new import_web330.PublicKey(poolKeys.vault.B), mintA, mintB, new import_web330.PublicKey(poolInfo.lpMint.address), lpAmount, amountMintA.sub(mintAAmountFee.fee ?? new import_bn27.default(0)), amountMintB.sub(mintBAmountFee.fee ?? new import_bn27.default(0)))
      ],
      instructionTypes: [InstructionType.CpmmWithdrawLiquidity],
      lookupTableAddress: poolKeys.lookupTableAccount ? [poolKeys.lookupTableAccount] : []
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({ txVersion });
  }
  async swap(params) {
    const {
      poolInfo,
      poolKeys: propPoolKeys,
      baseIn,
      fixedOut,
      inputAmount,
      swapResult,
      slippage = 0,
      config: config2,
      computeBudgetConfig,
      txTipConfig,
      txVersion,
      feePayer,
      nonce
    } = params;
    const {
      bypassAssociatedCheck,
      checkCreateATAOwner,
      associatedOnly,
      useIdempotent = false
    } = {
      bypassAssociatedCheck: false,
      checkCreateATAOwner: false,
      associatedOnly: true,
      useIdempotent: false,
      ...config2
    };
    console.log();
    const txBuilder = this.createTxBuilder(feePayer);
    if (nonce && nonce?.instruction) {
      txBuilder.addInstruction({
        instructions: [nonce.instruction],
        instructionTypes: [nonce.instruction].map(() => InstructionType.NonceAccount)
      });
    }
    if (computeBudgetConfig) {
      const { instructions, instructionTypes } = addComputeBudget(computeBudgetConfig);
      txBuilder.addInstruction({
        instructions,
        instructionTypes
      });
    }
    if (!fixedOut) {
      swapResult.destinationAmountSwapped = swapResult.destinationAmountSwapped.mul(new import_bn27.default((1 - slippage) * 1e4)).div(new import_bn27.default(1e4));
    } else {
      swapResult.sourceAmountSwapped = swapResult.sourceAmountSwapped.mul(new import_bn27.default((1 + slippage) * 1e4)).div(new import_bn27.default(1e4));
    }
    const [mintA, mintB] = [new import_web330.PublicKey(poolInfo.mintA.address), new import_web330.PublicKey(poolInfo.mintB.address)];
    let mintATokenAcc;
    let mintBTokenAcc;
    if (useIdempotent) {
      const tokenProgramA = new import_web330.PublicKey(poolInfo.mintA.programId ?? import_spl_token22.TOKEN_PROGRAM_ID);
      const tokenProgramB = new import_web330.PublicKey(poolInfo.mintB.programId ?? import_spl_token22.TOKEN_PROGRAM_ID);
      const mintAIsSOL = mintA.equals(import_spl_token22.NATIVE_MINT);
      const mintBIsSOL = mintB.equals(import_spl_token22.NATIVE_MINT);
      mintATokenAcc = (0, import_spl_token22.getAssociatedTokenAddressSync)(mintA, this.scope.ownerPubKey, false, tokenProgramA);
      mintBTokenAcc = (0, import_spl_token22.getAssociatedTokenAddressSync)(mintB, this.scope.ownerPubKey, false, tokenProgramB);
      if (!mintAIsSOL) {
        txBuilder.addInstruction({
          instructions: [
            (0, import_spl_token22.createAssociatedTokenAccountIdempotentInstruction)(this.scope.ownerPubKey, mintATokenAcc, this.scope.ownerPubKey, mintA, tokenProgramA)
          ],
          instructionTypes: [InstructionType.CreateATA]
        });
      }
      if (!mintBIsSOL) {
        txBuilder.addInstruction({
          instructions: [
            (0, import_spl_token22.createAssociatedTokenAccountIdempotentInstruction)(this.scope.ownerPubKey, mintBTokenAcc, this.scope.ownerPubKey, mintB, tokenProgramB)
          ],
          instructionTypes: [InstructionType.CreateATA]
        });
      }
    } else {
      const mintAUseSOLBalance = poolInfo.mintA.address === WSOLMint.toBase58();
      const mintBUseSOLBalance = poolInfo.mintB.address === WSOLMint.toBase58();
      const { account: mintATokenAccResult, instructionParams: mintATokenAccInstruction } = await this.scope.account.getOrCreateTokenAccount({
        mint: mintA,
        tokenProgram: new import_web330.PublicKey(poolInfo.mintA.programId ?? import_spl_token22.TOKEN_PROGRAM_ID),
        owner: this.scope.ownerPubKey,
        createInfo: mintAUseSOLBalance || !baseIn ? {
          payer: this.scope.ownerPubKey,
          amount: baseIn ? swapResult.sourceAmountSwapped : 0
        } : void 0,
        notUseTokenAccount: mintAUseSOLBalance,
        skipCloseAccount: !mintAUseSOLBalance,
        associatedOnly: mintAUseSOLBalance ? false : associatedOnly,
        checkCreateATAOwner
      });
      mintATokenAccInstruction && txBuilder.addInstruction(mintATokenAccInstruction);
      mintATokenAcc = mintATokenAccResult;
      const { account: mintBTokenAccResult, instructionParams: mintBTokenAccInstruction } = await this.scope.account.getOrCreateTokenAccount({
        mint: mintB,
        tokenProgram: new import_web330.PublicKey(poolInfo.mintB.programId ?? import_spl_token22.TOKEN_PROGRAM_ID),
        owner: this.scope.ownerPubKey,
        createInfo: mintBUseSOLBalance || baseIn ? {
          payer: this.scope.ownerPubKey,
          amount: baseIn ? 0 : swapResult.sourceAmountSwapped
        } : void 0,
        notUseTokenAccount: mintBUseSOLBalance,
        skipCloseAccount: !mintBUseSOLBalance,
        associatedOnly: mintBUseSOLBalance ? false : associatedOnly,
        checkCreateATAOwner
      });
      mintBTokenAccInstruction && txBuilder.addInstruction(mintBTokenAccInstruction);
      mintBTokenAcc = mintBTokenAccResult;
      if (!mintATokenAcc || !mintBTokenAcc)
        this.logAndCreateError("user do not have token account", {
          mintA: poolInfo.mintA.symbol || poolInfo.mintA.address,
          mintB: poolInfo.mintB.symbol || poolInfo.mintB.address,
          mintATokenAcc,
          mintBTokenAcc,
          mintAUseSOLBalance,
          mintBUseSOLBalance,
          associatedOnly
        });
    }
    const poolKeys = propPoolKeys ?? await this.getCpmmPoolKeys(poolInfo.id);
    const sourceTokenAccount = baseIn ? mintATokenAcc : mintBTokenAcc;
    const destinationTokenAccount = baseIn ? mintBTokenAcc : mintATokenAcc;
    const sourceMint = baseIn ? mintA : mintB;
    const destinationMint = baseIn ? mintB : mintA;
    const sourceVault = baseIn ? poolKeys.vault.A : poolKeys.vault.B;
    const destinationVault = baseIn ? poolKeys.vault.B : poolKeys.vault.A;
    const sourceTokenProgram = baseIn ? new import_web330.PublicKey(poolInfo.mintA.programId ?? import_spl_token22.TOKEN_PROGRAM_ID) : new import_web330.PublicKey(poolInfo.mintB.programId ?? import_spl_token22.TOKEN_PROGRAM_ID);
    const destinationTokenProgram = baseIn ? new import_web330.PublicKey(poolInfo.mintB.programId ?? import_spl_token22.TOKEN_PROGRAM_ID) : new import_web330.PublicKey(poolInfo.mintA.programId ?? import_spl_token22.TOKEN_PROGRAM_ID);
    txBuilder.addInstruction({
      instructions: [
        !fixedOut ? makeSwapCpmmBaseInInstruction(new import_web330.PublicKey(poolInfo.programId), this.scope.ownerPubKey, new import_web330.PublicKey(poolKeys.authority), new import_web330.PublicKey(poolKeys.config.id), new import_web330.PublicKey(poolInfo.id), sourceTokenAccount, destinationTokenAccount, new import_web330.PublicKey(sourceVault), new import_web330.PublicKey(destinationVault), sourceTokenProgram, destinationTokenProgram, sourceMint, destinationMint, getPdaObservationId(new import_web330.PublicKey(poolInfo.programId), new import_web330.PublicKey(poolInfo.id)).publicKey, inputAmount, swapResult.destinationAmountSwapped) : makeSwapCpmmBaseOutInstruction(new import_web330.PublicKey(poolInfo.programId), this.scope.ownerPubKey, new import_web330.PublicKey(poolKeys.authority), new import_web330.PublicKey(poolKeys.config.id), new import_web330.PublicKey(poolInfo.id), sourceTokenAccount, destinationTokenAccount, new import_web330.PublicKey(sourceVault), new import_web330.PublicKey(destinationVault), sourceTokenProgram, destinationTokenProgram, sourceMint, destinationMint, getPdaObservationId(new import_web330.PublicKey(poolInfo.programId), new import_web330.PublicKey(poolInfo.id)).publicKey, swapResult.sourceAmountSwapped, swapResult.destinationAmountSwapped)
      ],
      instructionTypes: [fixedOut ? InstructionType.CpmmSwapBaseOut : InstructionType.CpmmSwapBaseIn]
    });
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({ txVersion }, nonce?.nonce);
  }
  async lockLp(params) {
    const { poolInfo, lpAmount, computeBudgetConfig, txTipConfig, txVersion, feePayer, feeNftOwner } = params;
    if (lpAmount.isZero())
      this.logAndCreateError("lpAmount must greater than zero", {
        lpAmount: lpAmount.toString()
      });
    const txBuilder = this.createTxBuilder(feePayer);
    const poolKeys = params.poolKeys ?? await this.getCpmmPoolKeys(poolInfo.id);
    const insData = await makeCpmmLockInstruction({
      poolInfo,
      poolKeys,
      ownerInfo: {
        wallet: this.scope.ownerPubKey,
        feePayer: params.feePayer ?? this.scope.ownerPubKey
      },
      feeNftOwner: feeNftOwner ?? this.scope.ownerPubKey,
      lockProgram: params.programId ?? LOCK_CPMM_PROGRAM,
      lockAuthProgram: params.authProgram ?? LOCK_CPMM_AUTH,
      lpAmount,
      withMetadata: params.withMetadata ?? true,
      getEphemeralSigners: params.getEphemeralSigners
    });
    txBuilder.addInstruction(insData);
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({ txVersion, extInfo: insData.address });
  }
  async harvestLockLp(params) {
    const {
      poolInfo,
      lpFeeAmount,
      nftMint,
      programId = LOCK_CPMM_PROGRAM,
      authProgram = LOCK_CPMM_AUTH,
      cpmmProgram,
      computeBudgetConfig,
      txTipConfig,
      txVersion,
      closeWsol = true
    } = params;
    if (lpFeeAmount.isZero())
      this.logAndCreateError("lpFeeAmount must greater than zero", {
        lpAmount: lpFeeAmount.toString()
      });
    const feePayer = params.feePayer || this.scope.ownerPubKey;
    const txBuilder = this.createTxBuilder(feePayer);
    const [mintA, mintB] = [new import_web330.PublicKey(poolInfo.mintA.address), new import_web330.PublicKey(poolInfo.mintB.address)];
    const mintAUseSOLBalance = mintA.equals(WSOLMint);
    const mintBUseSOLBalance = mintB.equals(WSOLMint);
    let tokenAccountA = void 0;
    let tokenAccountB = void 0;
    const { account: _ownerTokenAccountA, instructionParams: accountAInstructions } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolInfo.mintA.programId,
      mint: new import_web330.PublicKey(poolInfo.mintA.address),
      notUseTokenAccount: mintAUseSOLBalance,
      owner: this.scope.ownerPubKey,
      createInfo: {
        payer: this.scope.ownerPubKey,
        amount: 0
      },
      skipCloseAccount: !(mintAUseSOLBalance && closeWsol),
      associatedOnly: mintAUseSOLBalance ? false : true,
      checkCreateATAOwner: false
    });
    tokenAccountA = _ownerTokenAccountA;
    accountAInstructions && txBuilder.addInstruction(accountAInstructions);
    const { account: _ownerTokenAccountB, instructionParams: accountBInstructions } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolInfo.mintB.programId,
      mint: new import_web330.PublicKey(poolInfo.mintB.address),
      notUseTokenAccount: mintBUseSOLBalance,
      owner: this.scope.ownerPubKey,
      createInfo: {
        payer: this.scope.ownerPubKey,
        amount: 0
      },
      skipCloseAccount: !(mintBUseSOLBalance && closeWsol),
      associatedOnly: mintBUseSOLBalance ? false : true,
      checkCreateATAOwner: false
    });
    tokenAccountB = _ownerTokenAccountB;
    accountBInstructions && txBuilder.addInstruction(accountBInstructions);
    if (!tokenAccountA || !tokenAccountB)
      this.logAndCreateError("cannot found target token accounts", { tokenAccountA, tokenAccountB });
    const poolKeys = params.poolKeys ?? await this.getCpmmPoolKeys(poolInfo.id);
    const { publicKey: nftAccount } = getATAAddress(feePayer, nftMint, import_spl_token22.TOKEN_PROGRAM_ID);
    const { publicKey: lockPda } = getCpLockPda(programId, nftMint);
    const { publicKey: lockLpVault } = getATAAddress(authProgram, new import_web330.PublicKey(poolInfo.lpMint.address), import_spl_token22.TOKEN_PROGRAM_ID);
    txBuilder.addInstruction({
      instructions: [
        collectCpFeeInstruction({
          programId: programId ?? LOCK_CPMM_PROGRAM,
          nftOwner: this.scope.ownerPubKey,
          auth: authProgram ?? LOCK_CPMM_AUTH,
          nftMint,
          nftAccount,
          lockPda,
          poolId: new import_web330.PublicKey(poolInfo.id),
          mintLp: new import_web330.PublicKey(poolKeys.mintLp.address),
          userVaultA: tokenAccountA,
          userVaultB: tokenAccountB,
          poolVaultA: new import_web330.PublicKey(poolKeys.vault.A),
          poolVaultB: new import_web330.PublicKey(poolKeys.vault.B),
          mintA,
          mintB,
          lockLpVault,
          lpFeeAmount,
          cpmmProgram: cpmmProgram?.programId,
          cpmmAuthProgram: cpmmProgram?.authProgram
        })
      ],
      instructionTypes: [InstructionType.CpmmCollectLockFee]
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({ txVersion });
  }
  computeSwapAmount({
    pool,
    amountIn,
    outputMint,
    slippage
  }) {
    const isBaseIn = outputMint.toString() === pool.mintB.address;
    const swapResult = CurveCalculator.swap(amountIn, isBaseIn ? pool.baseReserve : pool.quoteReserve, isBaseIn ? pool.quoteReserve : pool.baseReserve, pool.configInfo.tradeFeeRate);
    const executionPrice = new decimal_default(swapResult.destinationAmountSwapped.toString()).div(swapResult.sourceAmountSwapped.toString());
    const minAmountOut = swapResult.destinationAmountSwapped.mul(new import_bn27.default((1 - slippage) * 1e4)).div(new import_bn27.default(1e4));
    return {
      allTrade: swapResult.sourceAmountSwapped.eq(amountIn),
      amountIn,
      amountOut: swapResult.destinationAmountSwapped,
      minAmountOut,
      executionPrice,
      fee: swapResult.tradeFee,
      priceImpact: pool.poolPrice.sub(executionPrice).div(pool.poolPrice)
    };
  }
  computePairAmount({
    poolInfo,
    baseReserve,
    quoteReserve,
    amount,
    slippage,
    epochInfo,
    baseIn
  }) {
    const coefficient = 1 - Number(slippage.toSignificant()) / 100;
    const inputAmount = new import_bn27.default(new decimal_default(amount).mul(10 ** poolInfo[baseIn ? "mintA" : "mintB"].decimals).mul(coefficient).toFixed(0));
    const inputAmountFee = getTransferAmountFeeV2(inputAmount, poolInfo[baseIn ? "mintA" : "mintB"].extensions.feeConfig, epochInfo, false);
    const _inputAmountWithoutFee = inputAmount.sub(inputAmountFee.fee ?? new import_bn27.default(0));
    const lpAmount = new import_bn27.default(new decimal_default(poolInfo.lpAmount).mul(10 ** poolInfo.lpMint.decimals).toFixed(0, decimal_default.ROUND_DOWN));
    this.logDebug("baseReserve:", baseReserve.toString(), "quoteReserve:", quoteReserve.toString());
    this.logDebug("tokenIn:", baseIn ? poolInfo.mintA.symbol : poolInfo.mintB.symbol, "amountIn:", inputAmount.toString(), "amountInFee:", inputAmountFee.fee?.toString() ?? 0, "anotherToken:", baseIn ? poolInfo.mintB.symbol : poolInfo.mintA.symbol, "slippage:", `${slippage.toSignificant()}%`);
    const input = baseIn ? "base" : "quote";
    this.logDebug("input side:", input);
    const liquidity = _inputAmountWithoutFee.mul(lpAmount).div(input === "base" ? baseReserve : quoteReserve);
    let anotherAmountFee = {
      amount: BN_ZERO,
      fee: void 0,
      expirationTime: void 0
    };
    if (!_inputAmountWithoutFee.isZero()) {
      const lpAmountData = lpToAmount(liquidity, baseReserve, quoteReserve, lpAmount);
      this.logDebug("lpAmountData:", {
        amountA: lpAmountData.amountA.toString(),
        amountB: lpAmountData.amountB.toString()
      });
      anotherAmountFee = getTransferAmountFeeV2(lpAmountData[baseIn ? "amountB" : "amountA"], poolInfo[baseIn ? "mintB" : "mintA"].extensions.feeConfig, epochInfo, true);
    }
    const _slippage = new Percent(new import_bn27.default(1)).add(slippage);
    const _slippageMin = new Percent(new import_bn27.default(1)).sub(slippage);
    const slippageAdjustedAmount = getTransferAmountFeeV2(_slippage.mul(anotherAmountFee.amount.sub(anotherAmountFee.fee ?? new import_bn27.default(0))).quotient, poolInfo[baseIn ? "mintB" : "mintA"].extensions.feeConfig, epochInfo, true);
    const slippageAdjustedMinAmount = getTransferAmountFeeV2(_slippageMin.mul(anotherAmountFee.amount.sub(anotherAmountFee.fee ?? new import_bn27.default(0))).quotient, poolInfo[baseIn ? "mintB" : "mintA"].extensions.feeConfig, epochInfo, true);
    this.logDebug("anotherAmount:", anotherAmountFee.amount.toString(), "anotherAmountFee:", anotherAmountFee.fee?.toString() ?? 0, "maxAnotherAmount:", slippageAdjustedAmount.amount.toString(), "maxAnotherAmountFee:", slippageAdjustedAmount.fee?.toString() ?? 0);
    return {
      inputAmountFee,
      anotherAmount: anotherAmountFee,
      maxAnotherAmount: slippageAdjustedAmount,
      minAnotherAmount: slippageAdjustedMinAmount,
      liquidity
    };
  }
};
function lpToAmount(lp, poolAmountA, poolAmountB, supply) {
  let amountA = lp.mul(poolAmountA).div(supply);
  if (!amountA.isZero() && !lp.mul(poolAmountA).mod(supply).isZero())
    amountA = amountA.add(new import_bn27.default(1));
  let amountB = lp.mul(poolAmountB).div(supply);
  if (!amountB.isZero() && !lp.mul(poolAmountB).mod(supply).isZero())
    amountB = amountB.add(new import_bn27.default(1));
  return {
    amountA,
    amountB
  };
}

// src/raydium/tradeV2/trade.ts
var import_web333 = require("@solana/web3.js");
var import_spl_token24 = require("@solana/spl-token");
var import_bn29 = __toESM(require("bn.js"));

// src/raydium/serum/id.ts
var SERUM_PROGRAMID_TO_VERSION = {
  [SERUM_PROGRAM_ID_V3.toBase58()]: 3
};
var SERUM_VERSION_TO_PROGRAMID = {
  3: SERUM_PROGRAM_ID_V3
};

// src/raydium/serum/layout.ts
var MARKET_STATE_LAYOUT_V3 = struct([
  blob(5),
  blob(8),
  publicKey("ownAddress"),
  u64("vaultSignerNonce"),
  publicKey("baseMint"),
  publicKey("quoteMint"),
  publicKey("baseVault"),
  u64("baseDepositsTotal"),
  u64("baseFeesAccrued"),
  publicKey("quoteVault"),
  u64("quoteDepositsTotal"),
  u64("quoteFeesAccrued"),
  u64("quoteDustThreshold"),
  publicKey("requestQueue"),
  publicKey("eventQueue"),
  publicKey("bids"),
  publicKey("asks"),
  u64("baseLotSize"),
  u64("quoteLotSize"),
  u64("feeRateBps"),
  u64("referrerRebatesAccrued"),
  blob(7)
]);
var MARKET_VERSION_TO_STATE_LAYOUT = {
  3: MARKET_STATE_LAYOUT_V3
};

// src/raydium/serum/serum.ts
var import_web331 = require("@solana/web3.js");
var logger15 = createLogger("Serum");
var Market = class {
  static getProgramId(version) {
    const programId = SERUM_VERSION_TO_PROGRAMID[version];
    if (!programId)
      logger15.logWithError("invalid version", "version", version);
    return programId;
  }
  static getVersion(programId) {
    const programIdString = programId.toBase58();
    const version = SERUM_PROGRAMID_TO_VERSION[programIdString];
    if (!version)
      logger15.logWithError("invalid program id", "programId", programIdString);
    return version;
  }
  static getStateLayout(version) {
    const STATE_LAYOUT = MARKET_VERSION_TO_STATE_LAYOUT[version];
    if (!STATE_LAYOUT)
      logger15.logWithError(!!STATE_LAYOUT, "invalid version", "version", version);
    return STATE_LAYOUT;
  }
  static getLayouts(version) {
    return { state: this.getStateLayout(version) };
  }
  static getAssociatedAuthority({ programId, marketId }) {
    const seeds = [marketId.toBuffer()];
    let nonce = 0;
    let publicKey2;
    while (nonce < 100) {
      try {
        const seedsWithNonce = seeds.concat(Buffer.from([nonce]), Buffer.alloc(7));
        publicKey2 = import_web331.PublicKey.createProgramAddressSync(seedsWithNonce, programId);
      } catch (err) {
        if (err instanceof TypeError) {
          throw err;
        }
        nonce++;
        continue;
      }
      return { publicKey: publicKey2, nonce };
    }
    logger15.logWithError("unable to find a viable program address nonce", "params", {
      programId,
      marketId
    });
    return { publicKey: import_web331.PublicKey.default, nonce };
  }
};

// src/raydium/tradeV2/instrument.ts
var import_web332 = require("@solana/web3.js");
var import_bn28 = __toESM(require("bn.js"));
var import_spl_token23 = require("@solana/spl-token");
function route1Instruction(programId, poolInfoA, poolKeyA, poolKeyB, userSourceToken, userRouteToken, userPdaAccount, ownerWallet, inputMint, amountIn, amountOut, tickArrayA) {
  const dataLayout = struct([u82("instruction"), u64("amountIn"), u64("amountOut")]);
  const keys = [
    { pubkey: import_web332.SystemProgram.programId, isSigner: false, isWritable: false },
    { pubkey: import_spl_token23.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: new import_web332.PublicKey(poolKeyA.programId), isSigner: false, isWritable: false },
    { pubkey: new import_web332.PublicKey(poolKeyA.id), isSigner: false, isWritable: true },
    { pubkey: new import_web332.PublicKey(poolKeyB.id), isSigner: false, isWritable: true },
    { pubkey: userSourceToken, isSigner: false, isWritable: true },
    { pubkey: userRouteToken, isSigner: false, isWritable: true },
    { pubkey: userPdaAccount, isSigner: false, isWritable: true },
    { pubkey: ownerWallet, isSigner: true, isWritable: false }
  ];
  if (poolInfoA.type === "Concentrated") {
    const poolKey = jsonInfo2PoolKeys(poolKeyA);
    keys.push(...[
      { pubkey: poolKey.config.id, isSigner: false, isWritable: false },
      { pubkey: poolKey.id, isSigner: false, isWritable: true },
      {
        pubkey: poolKey.mintA.address.equals(inputMint) ? poolKey.vault.A : poolKey.vault.B,
        isSigner: false,
        isWritable: true
      },
      {
        pubkey: poolKey.mintA.address.equals(inputMint) ? poolKey.vault.B : poolKey.vault.A,
        isSigner: false,
        isWritable: true
      },
      { pubkey: poolKey.id, isSigner: false, isWritable: true },
      ...tickArrayA.map((i) => ({ pubkey: i, isSigner: false, isWritable: true }))
    ]);
  } else if (poolInfoA.pooltype.includes("StablePool")) {
    const poolKey = jsonInfo2PoolKeys(poolKeyA);
    keys.push(...[
      { pubkey: poolKey.authority, isSigner: false, isWritable: false },
      { pubkey: poolKey.marketProgramId, isSigner: false, isWritable: false },
      { pubkey: poolKey.id, isSigner: false, isWritable: true },
      { pubkey: new import_web332.PublicKey("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo"), isSigner: false, isWritable: false },
      { pubkey: poolKey.openOrders, isSigner: false, isWritable: true },
      { pubkey: poolKey.vault.A, isSigner: false, isWritable: true },
      { pubkey: poolKey.vault.B, isSigner: false, isWritable: true },
      { pubkey: poolKey.marketId, isSigner: false, isWritable: true },
      { pubkey: poolKey.marketBids, isSigner: false, isWritable: true },
      { pubkey: poolKey.marketAsks, isSigner: false, isWritable: true },
      { pubkey: poolKey.marketEventQueue, isSigner: false, isWritable: true },
      { pubkey: poolKey.id, isSigner: false, isWritable: true },
      { pubkey: poolKey.id, isSigner: false, isWritable: true }
    ]);
  } else {
    const poolKey = jsonInfo2PoolKeys(poolKeyA);
    keys.push(...[
      { pubkey: poolKey.authority, isSigner: false, isWritable: false },
      { pubkey: poolKey.marketProgramId, isSigner: false, isWritable: false },
      { pubkey: poolKey.marketAuthority, isSigner: false, isWritable: false },
      { pubkey: poolKey.openOrders, isSigner: false, isWritable: true },
      { pubkey: poolKey.vault.A, isSigner: false, isWritable: true },
      { pubkey: poolKey.vault.B, isSigner: false, isWritable: true },
      { pubkey: poolKey.marketId, isSigner: false, isWritable: true },
      { pubkey: poolKey.marketBids, isSigner: false, isWritable: true },
      { pubkey: poolKey.marketAsks, isSigner: false, isWritable: true },
      { pubkey: poolKey.marketEventQueue, isSigner: false, isWritable: true },
      ...poolKey.marketProgramId.toString() === "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX" ? [
        { pubkey: poolKey.marketBaseVault, isSigner: false, isWritable: true },
        { pubkey: poolKey.marketQuoteVault, isSigner: false, isWritable: true }
      ] : [
        { pubkey: poolKey.id, isSigner: false, isWritable: true },
        { pubkey: poolKey.id, isSigner: false, isWritable: true }
      ]
    ]);
  }
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    instruction: 4,
    amountIn,
    amountOut
  }, data);
  return new import_web332.TransactionInstruction({
    keys,
    programId,
    data
  });
}
function route2Instruction(programId, poolInfoB, poolKeyA, poolKeyB, userRouteToken, userDestinationToken, userPdaAccount, ownerWallet, routeMint, tickArrayB) {
  const dataLayout = struct([u82("instruction")]);
  const keys = [
    { pubkey: import_web332.SystemProgram.programId, isSigner: false, isWritable: false },
    { pubkey: import_spl_token23.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: new import_web332.PublicKey(String(poolKeyB.programId)), isSigner: false, isWritable: false },
    { pubkey: new import_web332.PublicKey(String(poolKeyB.id)), isSigner: false, isWritable: true },
    { pubkey: new import_web332.PublicKey(String(poolKeyA.id)), isSigner: false, isWritable: true },
    { pubkey: userRouteToken, isSigner: false, isWritable: true },
    { pubkey: userDestinationToken, isSigner: false, isWritable: true },
    { pubkey: userPdaAccount, isSigner: false, isWritable: true },
    { pubkey: ownerWallet, isSigner: true, isWritable: false }
  ];
  if (poolInfoB.type === "Concentrated") {
    const poolKey = jsonInfo2PoolKeys(poolKeyB);
    keys.push(...[
      { pubkey: poolKey.config.id, isSigner: false, isWritable: false },
      { pubkey: poolKey.id, isSigner: false, isWritable: true },
      {
        pubkey: poolKey.mintA.address.equals(routeMint) ? poolKey.vault.A : poolKey.vault.B,
        isSigner: false,
        isWritable: true
      },
      {
        pubkey: poolKey.mintA.address.equals(routeMint) ? poolKey.vault.B : poolKey.vault.A,
        isSigner: false,
        isWritable: true
      },
      { pubkey: poolKey.id, isSigner: false, isWritable: true },
      ...tickArrayB.map((i) => ({ pubkey: i, isSigner: false, isWritable: true }))
    ]);
  } else if (poolInfoB.pooltype.includes("StablePool")) {
    const poolKey = jsonInfo2PoolKeys(poolKeyB);
    keys.push(...[
      { pubkey: poolKey.authority, isSigner: false, isWritable: false },
      { pubkey: poolKey.marketProgramId, isSigner: false, isWritable: false },
      { pubkey: poolKey.id, isSigner: false, isWritable: true },
      { pubkey: new import_web332.PublicKey("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo"), isSigner: false, isWritable: false },
      { pubkey: poolKey.openOrders, isSigner: false, isWritable: true },
      { pubkey: poolKey.vault.A, isSigner: false, isWritable: true },
      { pubkey: poolKey.vault.B, isSigner: false, isWritable: true },
      { pubkey: poolKey.marketId, isSigner: false, isWritable: true },
      { pubkey: poolKey.marketBids, isSigner: false, isWritable: true },
      { pubkey: poolKey.marketAsks, isSigner: false, isWritable: true },
      { pubkey: poolKey.marketEventQueue, isSigner: false, isWritable: true },
      { pubkey: poolKey.id, isSigner: false, isWritable: true },
      { pubkey: poolKey.id, isSigner: false, isWritable: true }
    ]);
  } else {
    const poolKey = jsonInfo2PoolKeys(poolKeyB);
    keys.push(...[
      { pubkey: poolKey.authority, isSigner: false, isWritable: false },
      { pubkey: poolKey.marketProgramId, isSigner: false, isWritable: false },
      { pubkey: poolKey.marketAuthority, isSigner: false, isWritable: false },
      { pubkey: poolKey.openOrders, isSigner: false, isWritable: true },
      { pubkey: poolKey.vault.A, isSigner: false, isWritable: true },
      { pubkey: poolKey.vault.B, isSigner: false, isWritable: true },
      { pubkey: poolKey.marketId, isSigner: false, isWritable: true },
      { pubkey: poolKey.marketBids, isSigner: false, isWritable: true },
      { pubkey: poolKey.marketAsks, isSigner: false, isWritable: true },
      { pubkey: poolKey.marketEventQueue, isSigner: false, isWritable: true },
      ...poolKey.marketProgramId.toString() === "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX" ? [
        { pubkey: poolKey.marketBaseVault, isSigner: false, isWritable: true },
        { pubkey: poolKey.marketQuoteVault, isSigner: false, isWritable: true }
      ] : [
        { pubkey: poolKey.id, isSigner: false, isWritable: true },
        { pubkey: poolKey.id, isSigner: false, isWritable: true }
      ]
    ]);
  }
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    instruction: 5
  }, data);
  return new import_web332.TransactionInstruction({
    keys,
    programId,
    data
  });
}
function routeInstruction(programId, wallet, userSourceToken, userRouteToken, userDestinationToken, inputMint, routeMint, outputMint, poolInfoA, poolInfoB, poolKeyA, poolKeyB, amountIn, amountOut, remainingAccounts) {
  const clmmPriceLimit = [];
  const keys = [
    accountMeta({ pubkey: import_spl_token23.TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_spl_token23.TOKEN_2022_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_spl_token23.ASSOCIATED_TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_web332.SystemProgram.programId, isWritable: false }),
    accountMeta({ pubkey: wallet, isSigner: true })
  ];
  keys.push(accountMeta({ pubkey: userSourceToken }));
  keys.push(accountMeta({ pubkey: userDestinationToken }));
  const poolInfos = [poolInfoA, poolInfoB];
  const poolKeys = [poolKeyA, poolKeyB];
  const routeMints = [inputMint, routeMint, outputMint];
  for (let index = 0; index < poolInfos.length; index++) {
    const _poolInfo = poolInfos[index];
    const inputIsA = routeMints[index] === _poolInfo.mintA.address;
    keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolInfo.programId), isWritable: false }));
    if (index === poolInfos.length - 1) {
      keys.push(accountMeta({ pubkey: userDestinationToken }));
    } else {
      keys.push(accountMeta({ pubkey: userRouteToken }));
    }
    keys.push(accountMeta({ pubkey: new import_web332.PublicKey(routeMints[index]) }));
    keys.push(accountMeta({ pubkey: new import_web332.PublicKey(routeMints[index + 1]) }));
    if (_poolInfo.version === 6) {
      const _poolKey = poolKeys[index];
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.config.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(inputIsA ? _poolKey.vault.A : _poolKey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(inputIsA ? _poolKey.vault.B : _poolKey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolInfo.observationId) }));
      keys.push(accountMeta({ pubkey: MEMO_PROGRAM_ID2 }));
      keys.push(accountMeta({
        pubkey: getPdaExBitmapAccount(new import_web332.PublicKey(_poolInfo.programId), new import_web332.PublicKey(_poolInfo.id)).publicKey
      }));
      clmmPriceLimit.push(clmmPriceLimitX64InsData(_poolInfo.sqrtPriceX64.toString(), inputIsA));
      for (const item of remainingAccounts[index] ?? []) {
        keys.push(accountMeta({ pubkey: new import_web332.PublicKey(item) }));
      }
    } else if (_poolInfo.version === 5) {
      const _poolKey = poolKeys[index];
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.authority), isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.marketProgramId) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.marketAuthority) }));
      keys.push(accountMeta({ pubkey: LIQUIDITY_POOL_PROGRAM_ID_V5_MODEL, isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.openOrders) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.marketId) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.marketBids) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.marketAsks) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.marketEventQueue) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.marketBaseVault) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.marketQuoteVault) }));
    } else if (_poolInfo.version === 4) {
      const _poolKey = poolKeys[index];
      const isSupportIdOnly = _poolInfo.status !== 1;
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.authority), isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(isSupportIdOnly ? _poolKey.id : _poolKey.marketProgramId) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(isSupportIdOnly ? _poolKey.id : _poolKey.marketAuthority) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(isSupportIdOnly ? _poolKey.id : _poolKey.openOrders) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(isSupportIdOnly ? _poolKey.id : _poolKey.marketId) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(isSupportIdOnly ? _poolKey.id : _poolKey.marketBids) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(isSupportIdOnly ? _poolKey.id : _poolKey.marketAsks) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(isSupportIdOnly ? _poolKey.id : _poolKey.marketEventQueue) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(isSupportIdOnly ? _poolKey.id : _poolKey.marketBaseVault) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(isSupportIdOnly ? _poolKey.id : _poolKey.marketQuoteVault) }));
    } else if (_poolInfo.version === 7) {
      const _poolKey = poolKeys[index];
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.authority) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.config.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(inputIsA ? _poolKey.vault.A : _poolKey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(inputIsA ? _poolKey.vault.B : _poolKey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolInfo.observationId) }));
    } else
      throw Error("pool type error");
  }
  const dataLayout = struct([
    u82("insId"),
    u64("amountIn"),
    u64("amountOut"),
    seq2(u128(), clmmPriceLimit.length, "clmmPriceLimit")
  ]);
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    insId: 0,
    amountIn,
    amountOut,
    clmmPriceLimit
  }, data);
  return new import_web332.TransactionInstruction({
    keys,
    programId,
    data
  });
}
function clmmPriceLimitX64InsData(x64Price, inputIsA) {
  if (x64Price) {
    if (inputIsA) {
      const _m = new import_bn28.default(x64Price).div(new import_bn28.default(25));
      return _m.gt(MIN_SQRT_PRICE_X64_ADD_ONE) ? _m : MIN_SQRT_PRICE_X64_ADD_ONE;
    } else {
      const _m = new import_bn28.default(x64Price).mul(new import_bn28.default(25));
      return _m.lt(MAX_SQRT_PRICE_X64_SUB_ONE) ? _m : MAX_SQRT_PRICE_X64_SUB_ONE;
    }
  } else {
    return inputIsA ? MIN_SQRT_PRICE_X64_ADD_ONE : MAX_SQRT_PRICE_X64_SUB_ONE;
  }
}
function makeSwapInstruction({
  routeProgram,
  ownerInfo,
  inputMint,
  swapInfo
}) {
  if (swapInfo.routeType === "amm") {
    if (swapInfo.poolInfo[0].version === 6) {
      const poolKeys = swapInfo.poolKey[0];
      const _poolKey = jsonInfo2PoolKeys(poolKeys);
      const sqrtPriceLimitX64 = inputMint.equals(_poolKey.mintA.address) ? MIN_SQRT_PRICE_X64.add(ONE) : MAX_SQRT_PRICE_X64.sub(ONE);
      return ClmmInstrument.makeSwapBaseInInstructions({
        poolInfo: poolKeys,
        poolKeys,
        observationId: swapInfo.poolInfo[0].observationId,
        ownerInfo: {
          wallet: ownerInfo.wallet,
          tokenAccountA: _poolKey.mintA.address.equals(inputMint) ? ownerInfo.sourceToken : ownerInfo.destinationToken,
          tokenAccountB: _poolKey.mintA.address.equals(inputMint) ? ownerInfo.destinationToken : ownerInfo.sourceToken
        },
        inputMint,
        amountIn: swapInfo.amountIn.amount.raw,
        amountOutMin: swapInfo.minAmountOut.amount.raw.sub(swapInfo.minAmountOut.fee?.raw ?? new import_bn28.default(0)),
        sqrtPriceLimitX64,
        remainingAccounts: swapInfo.remainingAccounts[0] ?? []
      });
    } else if (swapInfo.poolInfo[0].version === 7) {
      const poolInfo = swapInfo.poolInfo[0];
      const baseIn = inputMint.toString() === swapInfo.poolInfo[0].mintA.address;
      return {
        signers: [],
        instructions: [
          makeSwapCpmmBaseInInstruction(poolInfo.programId, ownerInfo.wallet, poolInfo.authority, poolInfo.configId, poolInfo.id, ownerInfo.sourceToken, ownerInfo.destinationToken, baseIn ? poolInfo.vaultA : poolInfo.vaultB, baseIn ? poolInfo.vaultB : poolInfo.vaultA, baseIn ? poolInfo.mintProgramA : poolInfo.mintProgramB, baseIn ? poolInfo.mintProgramB : poolInfo.mintProgramA, new import_web332.PublicKey(poolInfo[baseIn ? "mintA" : "mintB"].address), new import_web332.PublicKey(poolInfo[baseIn ? "mintB" : "mintA"].address), poolInfo.observationId, swapInfo.amountIn.amount.raw, swapInfo.minAmountOut.amount.raw)
        ],
        lookupTableAddress: [],
        instructionTypes: [baseIn ? InstructionType.CpmmSwapBaseIn : InstructionType.CpmmSwapBaseOut],
        address: {}
      };
    } else {
      const _poolKey = swapInfo.poolKey[0];
      return {
        signers: [],
        instructions: [
          makeAMMSwapInstruction({
            poolKeys: _poolKey,
            version: swapInfo.poolInfo[0].pooltype.includes("StablePool") ? 5 : 4,
            userKeys: {
              tokenAccountIn: ownerInfo.sourceToken,
              tokenAccountOut: ownerInfo.destinationToken,
              owner: ownerInfo.wallet
            },
            amountIn: swapInfo.amountIn.amount.raw,
            amountOut: swapInfo.minAmountOut.amount.raw.sub(swapInfo.minAmountOut.fee?.raw ?? new import_bn28.default(0)),
            fixedSide: "in"
          })
        ],
        lookupTableAddress: _poolKey.lookupTableAccount ? [_poolKey.lookupTableAccount] : [],
        instructionTypes: [
          swapInfo.poolInfo[0].pooltype.includes("StablePool") ? InstructionType.AmmV5SwapBaseIn : InstructionType.AmmV4SwapBaseIn
        ],
        address: {}
      };
    }
  } else if (swapInfo.routeType === "route") {
    const poolInfo1 = swapInfo.poolInfo[0];
    const poolInfo2 = swapInfo.poolInfo[1];
    const poolKey1 = swapInfo.poolKey[0];
    const poolKey2 = swapInfo.poolKey[1];
    if (ownerInfo.routeToken === void 0)
      throw Error("owner route token account check error");
    return {
      signers: [],
      instructions: [
        routeInstruction(routeProgram, ownerInfo.wallet, ownerInfo.sourceToken, ownerInfo.routeToken, ownerInfo.destinationToken, inputMint.toString(), swapInfo.middleToken.mint.toString(), swapInfo.outputMint.toString(), poolInfo1, poolInfo2, poolKey1, poolKey2, swapInfo.amountIn.amount.raw, swapInfo.minAmountOut.amount.raw.sub(swapInfo.minAmountOut.fee?.raw ?? new import_bn28.default(0)), swapInfo.remainingAccounts)
      ],
      instructionTypes: [InstructionType.RouteSwap],
      lookupTableAddress: [poolKey1.lookupTableAccount, poolKey2.lookupTableAccount].filter((a) => a !== void 0),
      address: {}
    };
  } else {
    throw Error("route type error");
  }
}
function swapBaseInAutoAccount({
  programId,
  wallet,
  amount,
  inputAccount,
  outputAccount,
  routeInfo,
  poolKeys
}) {
  if (routeInfo.success === false)
    throw Error("route info error");
  const clmmPriceLimit = [];
  const keys = [
    accountMeta({ pubkey: import_spl_token23.TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_spl_token23.TOKEN_2022_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_spl_token23.ASSOCIATED_TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_web332.SystemProgram.programId, isWritable: false }),
    accountMeta({ pubkey: wallet, isSigner: true })
  ];
  const cacheAccount = {
    [routeInfo.data.inputMint]: inputAccount,
    [routeInfo.data.outputMint]: outputAccount
  };
  keys.push(accountMeta({ pubkey: cacheAccount[routeInfo.data.inputMint] }));
  keys.push(accountMeta({ pubkey: cacheAccount[routeInfo.data.outputMint] }));
  for (let index = 0; index < poolKeys.length; index++) {
    const _routeInfo = routeInfo.data.routePlan[index];
    const _poolKey = poolKeys[index];
    const inputIsA = _routeInfo.inputMint === _poolKey.mintA.address;
    keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.programId), isWritable: false }));
    if (index === poolKeys.length - 1) {
      keys.push(accountMeta({ pubkey: cacheAccount[_routeInfo.outputMint] }));
    } else {
      const mint = _routeInfo.outputMint;
      if (cacheAccount[mint] === void 0) {
        const ata = getATAAddress(wallet, new import_web332.PublicKey(mint), _poolKey.programId === ALL_PROGRAM_ID.CLMM_PROGRAM_ID.toBase58() || _poolKey.programId === ALL_PROGRAM_ID.CREATE_CPMM_POOL_PROGRAM.toBase58() ? new import_web332.PublicKey(inputIsA ? _poolKey.mintB.programId : _poolKey.mintA.programId) : import_spl_token23.TOKEN_PROGRAM_ID).publicKey;
        cacheAccount[mint] = ata;
      }
      keys.push(accountMeta({ pubkey: cacheAccount[mint] }));
    }
    keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_routeInfo.inputMint) }));
    keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_routeInfo.outputMint) }));
    if (_poolKey.programId === ALL_PROGRAM_ID.CLMM_PROGRAM_ID.toBase58()) {
      const poolKey = _poolKey;
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.config.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(inputIsA ? poolKey.vault.A : poolKey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(inputIsA ? poolKey.vault.B : poolKey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.observationId) }));
      keys.push(accountMeta({ pubkey: MEMO_PROGRAM_ID2, isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.exBitmapAccount) }));
      clmmPriceLimit.push(clmmPriceLimitX64InsData(_routeInfo.lastPoolPriceX64, inputIsA));
      for (const item of _routeInfo.remainingAccounts ?? []) {
        keys.push(accountMeta({ pubkey: new import_web332.PublicKey(item) }));
      }
    } else if (_poolKey.programId === ALL_PROGRAM_ID.AMM_STABLE.toBase58()) {
      const poolKey = _poolKey;
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.authority), isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.marketProgramId), isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.marketAuthority), isWritable: false }));
      keys.push(accountMeta({ pubkey: LIQUIDITY_POOL_PROGRAM_ID_V5_MODEL, isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.openOrders) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.marketId) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.marketBids) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.marketAsks) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.marketEventQueue) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.marketBaseVault) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.marketQuoteVault) }));
    } else if (_poolKey.programId === ALL_PROGRAM_ID.AMM_V4.toBase58()) {
      const poolKey = _poolKey;
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.authority), isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.id) }));
    } else if (_poolKey.programId === ALL_PROGRAM_ID.CREATE_CPMM_POOL_PROGRAM.toBase58()) {
      const poolKey = _poolKey;
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.authority) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.config.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(inputIsA ? poolKey.vault.A : poolKey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(inputIsA ? poolKey.vault.B : poolKey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.observationId) }));
    } else
      throw Error("pool type error");
  }
  const dataLayout = struct([
    u82("insId"),
    u64("amountIn"),
    u64("amountOut"),
    seq2(u128(), clmmPriceLimit.length, "clmmPriceLimit")
  ]);
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    insId: 0,
    amountIn: amount,
    amountOut: new import_bn28.default(routeInfo.data.otherAmountThreshold),
    clmmPriceLimit
  }, data);
  return new import_web332.TransactionInstruction({
    keys,
    programId,
    data
  });
}
function swapBaseOutAutoAccount({
  programId,
  wallet,
  inputAccount,
  outputAccount,
  routeInfo,
  poolKeys
}) {
  if (routeInfo.success === false)
    throw Error("route info error");
  const clmmPriceLimit = [];
  const keys = [
    accountMeta({ pubkey: import_spl_token23.TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_spl_token23.TOKEN_2022_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_spl_token23.ASSOCIATED_TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_web332.SystemProgram.programId, isWritable: false }),
    accountMeta({ pubkey: wallet, isSigner: true })
  ];
  const cacheAccount = {
    [routeInfo.data.inputMint]: inputAccount,
    [routeInfo.data.outputMint]: outputAccount
  };
  for (let index = poolKeys.length - 1; index >= 0; index--) {
    const _routeInfo = routeInfo.data.routePlan[index];
    const _poolKey = poolKeys[index];
    const inputIsA = _routeInfo.inputMint === _poolKey.mintA.address;
    keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_poolKey.programId) }));
    if (index === 0) {
      keys.push(accountMeta({ pubkey: cacheAccount[_routeInfo.inputMint] }));
    } else {
      const mint = _routeInfo.inputMint;
      if (cacheAccount[mint] === void 0) {
        const ata = getATAAddress(wallet, new import_web332.PublicKey(mint), _poolKey.programId === ALL_PROGRAM_ID.CLMM_PROGRAM_ID.toBase58() || _poolKey.programId === ALL_PROGRAM_ID.CREATE_CPMM_POOL_PROGRAM.toBase58() ? new import_web332.PublicKey(inputIsA ? _poolKey.mintA.programId : _poolKey.mintB.programId) : import_spl_token23.TOKEN_PROGRAM_ID).publicKey;
        cacheAccount[mint] = ata;
      }
      keys.push(accountMeta({ pubkey: cacheAccount[mint] }));
    }
    if (index === poolKeys.length - 1) {
      keys.push(accountMeta({ pubkey: cacheAccount[_routeInfo.outputMint] }));
    } else {
      const mint = _routeInfo.outputMint;
      if (cacheAccount[mint] === void 0) {
        const ata = getATAAddress(wallet, new import_web332.PublicKey(mint), _poolKey.programId === ALL_PROGRAM_ID.CLMM_PROGRAM_ID.toBase58() || _poolKey.programId === ALL_PROGRAM_ID.CREATE_CPMM_POOL_PROGRAM.toBase58() ? new import_web332.PublicKey(inputIsA ? _poolKey.mintB.programId : _poolKey.mintA.programId) : import_spl_token23.TOKEN_PROGRAM_ID).publicKey;
        cacheAccount[mint] = ata;
      }
      keys.push(accountMeta({ pubkey: cacheAccount[mint] }));
    }
    keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_routeInfo.inputMint) }));
    keys.push(accountMeta({ pubkey: new import_web332.PublicKey(_routeInfo.outputMint) }));
    if (_poolKey.programId === ALL_PROGRAM_ID.CLMM_PROGRAM_ID.toBase58()) {
      const poolKey = _poolKey;
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.config.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(inputIsA ? poolKey.vault.A : poolKey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(inputIsA ? poolKey.vault.B : poolKey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.observationId) }));
      keys.push(accountMeta({ pubkey: MEMO_PROGRAM_ID2, isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolKey.exBitmapAccount) }));
      clmmPriceLimit.push(clmmPriceLimitX64InsData(_routeInfo.lastPoolPriceX64, inputIsA));
      for (const item of _routeInfo.remainingAccounts ?? []) {
        keys.push(accountMeta({ pubkey: new import_web332.PublicKey(item) }));
      }
    } else if (_poolKey.programId === ALL_PROGRAM_ID.AMM_STABLE.toBase58()) {
      const poolkey = _poolKey;
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.authority), isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.marketProgramId), isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.marketAuthority), isWritable: false }));
      keys.push(accountMeta({ pubkey: LIQUIDITY_POOL_PROGRAM_ID_V5_MODEL, isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.openOrders) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.marketId) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.marketBids) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.marketAsks) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.marketEventQueue) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.marketBaseVault) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.marketQuoteVault) }));
    } else if (_poolKey.programId === ALL_PROGRAM_ID.AMM_V4.toBase58()) {
      const poolkey = _poolKey;
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.authority), isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.id) }));
    } else if (_poolKey.programId === ALL_PROGRAM_ID.CREATE_CPMM_POOL_PROGRAM.toBase58()) {
      const poolkey = _poolKey;
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.authority) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.config.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(inputIsA ? poolkey.vault.A : poolkey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(inputIsA ? poolkey.vault.B : poolkey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web332.PublicKey(poolkey.observationId) }));
    } else
      throw Error("pool type error");
  }
  const dataLayout = struct([
    u82("insId"),
    u64("amountIn"),
    u64("amountOut"),
    seq2(u128(), clmmPriceLimit.length, "clmmPriceLimit")
  ]);
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    insId: 1,
    amountIn: new import_bn28.default(routeInfo.data.otherAmountThreshold),
    amountOut: new import_bn28.default(routeInfo.data.outputAmount),
    clmmPriceLimit
  }, data);
  return new import_web332.TransactionInstruction({
    keys,
    programId,
    data
  });
}

// src/raydium/tradeV2/trade.ts
var ZERO4 = new import_bn29.default(0);
var TradeV2 = class extends ModuleBase {
  constructor(params) {
    super(params);
  }
  async getWSolAccounts() {
    this.scope.checkOwner();
    await this.scope.account.fetchWalletTokenAccounts();
    const tokenAccounts = this.scope.account.tokenAccounts.filter((acc) => acc.mint.equals(WSOLMint));
    tokenAccounts.sort((a, b) => {
      if (a.isAssociated)
        return 1;
      if (b.isAssociated)
        return -1;
      return a.amount.lt(b.amount) ? -1 : 1;
    });
    return tokenAccounts;
  }
  async unWrapWSol(props) {
    const { amount, tokenProgram, txVersion = 1 /* LEGACY */, feePayer } = props;
    const tokenAccounts = await this.getWSolAccounts();
    const txBuilder = this.createTxBuilder(feePayer);
    txBuilder.addCustomComputeBudget(props.computeBudgetConfig);
    const amountBN = parseBigNumberish(amount);
    for (let i = 0; i < tokenAccounts.length; i++) {
      if (amountBN.gte(tokenAccounts[i].amount)) {
        txBuilder.addInstruction({
          instructions: [
            closeAccountInstruction({
              tokenAccount: tokenAccounts[i].publicKey,
              payer: this.scope.ownerPubKey,
              owner: this.scope.ownerPubKey,
              programId: tokenProgram
            })
          ]
        });
        amountBN.sub(tokenAccounts[i].amount);
      } else {
        txBuilder.addInstruction({
          instructions: [
            closeAccountInstruction({
              tokenAccount: tokenAccounts[i].publicKey,
              payer: this.scope.ownerPubKey,
              owner: this.scope.ownerPubKey,
              programId: tokenProgram
            })
          ]
        });
      }
    }
    return txBuilder.versionBuild({ txVersion });
  }
  async wrapWSol(amount, tokenProgram, txVersion, feePayer) {
    const txBuilder = this.createTxBuilder(feePayer);
    const ins = await createWSolAccountInstructions({
      connection: this.scope.connection,
      owner: this.scope.ownerPubKey,
      payer: this.scope.ownerPubKey,
      amount,
      skipCloseAccount: true
    });
    txBuilder.addInstruction(ins);
    return txBuilder.versionBuild({ txVersion: txVersion ?? 1 /* LEGACY */ });
  }
  async swap({
    swapInfo,
    swapPoolKeys,
    ownerInfo,
    computeBudgetConfig,
    routeProgram,
    txVersion,
    feePayer
  }) {
    const txBuilder = this.createTxBuilder(feePayer);
    const amountIn = swapInfo.amountIn;
    const amountOut = swapInfo.amountOut;
    const useSolBalance = amountIn.amount.token.mint.equals(WSOLMint);
    const isOutputSol = amountOut.amount.token.mint.equals(WSOLMint);
    const inputMint = amountIn.amount.token.mint;
    const outputMint = amountOut.amount.token.mint;
    const { account: sourceAcc, instructionParams: sourceAccInsParams } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: amountIn.amount.token.isToken2022 ? import_spl_token24.TOKEN_2022_PROGRAM_ID : import_spl_token24.TOKEN_PROGRAM_ID,
      mint: inputMint,
      notUseTokenAccount: useSolBalance,
      owner: this.scope.ownerPubKey,
      skipCloseAccount: !useSolBalance,
      createInfo: useSolBalance ? {
        payer: this.scope.ownerPubKey,
        amount: amountIn.amount.raw
      } : void 0,
      associatedOnly: useSolBalance ? false : ownerInfo.associatedOnly,
      checkCreateATAOwner: ownerInfo.checkCreateATAOwner
    });
    sourceAccInsParams && txBuilder.addInstruction(sourceAccInsParams);
    if (sourceAcc === void 0) {
      throw Error("input account check error");
    }
    let destinationAcc;
    if (swapInfo.routeType === "route" && !isOutputSol) {
      destinationAcc = this.scope.account.getAssociatedTokenAccount(outputMint, amountOut.amount.token.isToken2022 ? import_spl_token24.TOKEN_2022_PROGRAM_ID : import_spl_token24.TOKEN_PROGRAM_ID);
    } else {
      const { account, instructionParams } = await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: amountOut.amount.token.isToken2022 ? import_spl_token24.TOKEN_2022_PROGRAM_ID : import_spl_token24.TOKEN_PROGRAM_ID,
        mint: outputMint,
        notUseTokenAccount: isOutputSol,
        owner: this.scope.ownerPubKey,
        skipCloseAccount: true,
        createInfo: {
          payer: this.scope.ownerPubKey,
          amount: 0
        },
        associatedOnly: isOutputSol ? false : ownerInfo.associatedOnly,
        checkCreateATAOwner: ownerInfo.checkCreateATAOwner
      });
      destinationAcc = account;
      instructionParams && txBuilder.addInstruction(instructionParams);
    }
    if (isOutputSol) {
      txBuilder.addInstruction({
        endInstructions: [
          closeAccountInstruction({
            owner: this.scope.ownerPubKey,
            payer: this.scope.ownerPubKey,
            tokenAccount: destinationAcc,
            programId: import_spl_token24.TOKEN_PROGRAM_ID
          })
        ],
        endInstructionTypes: [InstructionType.CloseAccount]
      });
    }
    let routeTokenAcc = void 0;
    if (swapInfo.routeType === "route") {
      const middleMint = swapInfo.middleToken;
      routeTokenAcc = this.scope.account.getAssociatedTokenAccount(middleMint.mint, middleMint.isToken2022 ? import_spl_token24.TOKEN_2022_PROGRAM_ID : import_spl_token24.TOKEN_PROGRAM_ID);
    }
    const poolKeys = swapPoolKeys ? swapPoolKeys : await this.computePoolToPoolKeys({ pools: swapInfo.poolInfoList });
    const swapIns = makeSwapInstruction({
      routeProgram,
      inputMint,
      swapInfo: {
        ...swapInfo,
        poolInfo: [...swapInfo.poolInfoList],
        poolKey: poolKeys,
        outputMint
      },
      ownerInfo: {
        wallet: this.scope.ownerPubKey,
        sourceToken: sourceAcc,
        routeToken: routeTokenAcc,
        destinationToken: destinationAcc
      }
    });
    if (swapInfo.feeConfig !== void 0) {
      const checkTxBuilder = this.createTxBuilder();
      checkTxBuilder.addInstruction({
        instructions: [
          (0, import_spl_token24.createTransferInstruction)(sourceAcc, swapInfo.feeConfig.feeAccount, this.scope.ownerPubKey, swapInfo.feeConfig.feeAmount.toNumber())
        ],
        instructionTypes: [InstructionType.TransferAmount]
      });
      checkTxBuilder.addInstruction(swapIns);
      const { transactions } = txVersion === 0 /* V0 */ ? await checkTxBuilder.sizeCheckBuildV0() : await checkTxBuilder.sizeCheckBuild();
      if (transactions.length < 2) {
        txBuilder.addInstruction({
          instructions: [
            (0, import_spl_token24.createTransferInstruction)(sourceAcc, swapInfo.feeConfig.feeAccount, this.scope.ownerPubKey, swapInfo.feeConfig.feeAmount.toNumber())
          ],
          instructionTypes: [InstructionType.TransferAmount]
        });
      }
    }
    txBuilder.addInstruction(swapIns);
    if (txVersion === 0 /* V0 */)
      return txBuilder.sizeCheckBuildV0({ computeBudgetConfig, address: swapIns.address });
    return txBuilder.sizeCheckBuild({ computeBudgetConfig, address: swapIns.address });
  }
  async fetchRoutePoolBasicInfo(programIds) {
    const { amm = AMM_V4, clmm = CLMM_PROGRAM_ID, cpmm = CREATE_CPMM_POOL_PROGRAM } = programIds || {};
    const ammPoolsData = await this.scope.connection.getProgramAccounts(amm, {
      dataSlice: { offset: liquidityStateV4Layout.offsetOf("baseMint"), length: 64 }
    });
    const layoutAmm = struct([publicKey("baseMint"), publicKey("quoteMint")]);
    const ammData = ammPoolsData.map((data) => ({
      id: data.pubkey,
      version: 4,
      mintA: layoutAmm.decode(data.account.data).baseMint,
      mintB: layoutAmm.decode(data.account.data).quoteMint
    }));
    const layout = struct([publicKey("mintA"), publicKey("mintB")]);
    const clmmPoolsData = await this.scope.connection.getProgramAccounts(clmm, {
      filters: [{ dataSize: PoolInfoLayout.span }],
      dataSlice: { offset: PoolInfoLayout.offsetOf("mintA"), length: 64 }
    });
    const clmmData = clmmPoolsData.map((data) => {
      const clmm2 = layout.decode(data.account.data);
      return {
        id: data.pubkey,
        version: 6,
        mintA: clmm2.mintA,
        mintB: clmm2.mintB
      };
    });
    const cpmmPools = await this.scope.connection.getProgramAccounts(cpmm, {
      dataSlice: { offset: CpmmPoolInfoLayout.offsetOf("mintA"), length: 64 }
    });
    const cpmmData = cpmmPools.map((data) => {
      const clmm2 = layout.decode(data.account.data);
      return {
        id: data.pubkey,
        version: 7,
        mintA: clmm2.mintA,
        mintB: clmm2.mintB
      };
    });
    return {
      clmmPools: clmmData,
      ammPools: ammData,
      cpmmPools: cpmmData
    };
  }
  getAllRoute({
    inputMint,
    outputMint,
    clmmPools,
    ammPools,
    cpmmPools
  }) {
    inputMint = inputMint.toString() === import_web333.PublicKey.default.toString() ? WSOLMint : inputMint;
    outputMint = outputMint.toString() === import_web333.PublicKey.default.toString() ? WSOLMint : outputMint;
    const needSimulate = {};
    const needTickArray = {};
    const cpmmPoolList = {};
    const directPath = [];
    const routePathDict = {};
    for (const itemClmmPool of clmmPools ?? []) {
      if (itemClmmPool.mintA.equals(inputMint) && itemClmmPool.mintB.equals(outputMint) || itemClmmPool.mintA.equals(outputMint) && itemClmmPool.mintB.equals(inputMint)) {
        directPath.push(itemClmmPool);
        needTickArray[itemClmmPool.id.toString()] = itemClmmPool;
      }
      if (itemClmmPool.mintA.equals(inputMint)) {
        const t = itemClmmPool.mintB.toString();
        if (routePathDict[t] === void 0)
          routePathDict[t] = {
            mintProgram: import_spl_token24.TOKEN_PROGRAM_ID,
            in: [],
            out: [],
            mDecimals: 0
          };
        routePathDict[t].in.push(itemClmmPool);
      }
      if (itemClmmPool.mintB.equals(inputMint)) {
        const t = itemClmmPool.mintA.toString();
        if (routePathDict[t] === void 0)
          routePathDict[t] = {
            mintProgram: import_spl_token24.TOKEN_PROGRAM_ID,
            in: [],
            out: [],
            mDecimals: 0
          };
        routePathDict[t].in.push(itemClmmPool);
      }
      if (itemClmmPool.mintA.equals(outputMint)) {
        const t = itemClmmPool.mintB.toString();
        if (routePathDict[t] === void 0)
          routePathDict[t] = {
            mintProgram: import_spl_token24.TOKEN_PROGRAM_ID,
            in: [],
            out: [],
            mDecimals: 0
          };
        routePathDict[t].out.push(itemClmmPool);
      }
      if (itemClmmPool.mintB.equals(outputMint)) {
        const t = itemClmmPool.mintA.toString();
        if (routePathDict[t] === void 0)
          routePathDict[t] = {
            mintProgram: import_spl_token24.TOKEN_PROGRAM_ID,
            in: [],
            out: [],
            mDecimals: 0
          };
        routePathDict[t].out.push(itemClmmPool);
      }
    }
    const addLiquidityPools = [];
    for (const itemAmmPool of ammPools) {
      if (itemAmmPool.mintA.equals(inputMint) && itemAmmPool.mintB.equals(outputMint) || itemAmmPool.mintA.equals(outputMint) && itemAmmPool.mintB.equals(inputMint)) {
        directPath.push(itemAmmPool);
        needSimulate[itemAmmPool.id.toBase58()] = itemAmmPool;
        addLiquidityPools.push(itemAmmPool);
      }
      if (itemAmmPool.mintA.equals(inputMint)) {
        if (routePathDict[itemAmmPool.mintB.toBase58()] === void 0)
          routePathDict[itemAmmPool.mintB.toBase58()] = {
            mintProgram: import_spl_token24.TOKEN_PROGRAM_ID,
            in: [],
            out: [],
            mDecimals: 0
          };
        routePathDict[itemAmmPool.mintB.toBase58()].in.push(itemAmmPool);
      }
      if (itemAmmPool.mintB.equals(inputMint)) {
        if (routePathDict[itemAmmPool.mintA.toBase58()] === void 0)
          routePathDict[itemAmmPool.mintA.toBase58()] = {
            mintProgram: import_spl_token24.TOKEN_PROGRAM_ID,
            in: [],
            out: [],
            mDecimals: 0
          };
        routePathDict[itemAmmPool.mintA.toBase58()].in.push(itemAmmPool);
      }
      if (itemAmmPool.mintA.equals(outputMint)) {
        if (routePathDict[itemAmmPool.mintB.toBase58()] === void 0)
          routePathDict[itemAmmPool.mintB.toBase58()] = {
            mintProgram: import_spl_token24.TOKEN_PROGRAM_ID,
            in: [],
            out: [],
            mDecimals: 0
          };
        routePathDict[itemAmmPool.mintB.toBase58()].out.push(itemAmmPool);
      }
      if (itemAmmPool.mintB.equals(outputMint)) {
        if (routePathDict[itemAmmPool.mintA.toBase58()] === void 0)
          routePathDict[itemAmmPool.mintA.toBase58()] = {
            mintProgram: import_spl_token24.TOKEN_PROGRAM_ID,
            in: [],
            out: [],
            mDecimals: 0
          };
        routePathDict[itemAmmPool.mintA.toBase58()].out.push(itemAmmPool);
      }
    }
    for (const itemCpmmPool of cpmmPools) {
      if (itemCpmmPool.mintA.equals(inputMint) && itemCpmmPool.mintB.equals(outputMint) || itemCpmmPool.mintA.equals(outputMint) && itemCpmmPool.mintB.equals(inputMint)) {
        directPath.push(itemCpmmPool);
        cpmmPoolList[itemCpmmPool.id.toBase58()] = itemCpmmPool;
      }
      if (itemCpmmPool.mintA.equals(inputMint)) {
        if (routePathDict[itemCpmmPool.mintB.toBase58()] === void 0)
          routePathDict[itemCpmmPool.mintB.toBase58()] = {
            mintProgram: import_spl_token24.TOKEN_PROGRAM_ID,
            in: [],
            out: [],
            mDecimals: 0
          };
        routePathDict[itemCpmmPool.mintB.toBase58()].in.push(itemCpmmPool);
      }
      if (itemCpmmPool.mintB.equals(inputMint)) {
        if (routePathDict[itemCpmmPool.mintA.toBase58()] === void 0)
          routePathDict[itemCpmmPool.mintA.toBase58()] = {
            mintProgram: import_spl_token24.TOKEN_PROGRAM_ID,
            in: [],
            out: [],
            mDecimals: 0
          };
        routePathDict[itemCpmmPool.mintA.toBase58()].in.push(itemCpmmPool);
      }
      if (itemCpmmPool.mintA.equals(outputMint)) {
        if (routePathDict[itemCpmmPool.mintB.toBase58()] === void 0)
          routePathDict[itemCpmmPool.mintB.toBase58()] = {
            mintProgram: import_spl_token24.TOKEN_PROGRAM_ID,
            in: [],
            out: [],
            mDecimals: 0
          };
        routePathDict[itemCpmmPool.mintB.toBase58()].out.push(itemCpmmPool);
      }
      if (itemCpmmPool.mintB.equals(outputMint)) {
        if (routePathDict[itemCpmmPool.mintA.toBase58()] === void 0)
          routePathDict[itemCpmmPool.mintA.toBase58()] = {
            mintProgram: import_spl_token24.TOKEN_PROGRAM_ID,
            in: [],
            out: [],
            mDecimals: 0
          };
        routePathDict[itemCpmmPool.mintA.toBase58()].out.push(itemCpmmPool);
      }
    }
    for (const t of Object.keys(routePathDict)) {
      if (routePathDict[t].in.length === 1 && routePathDict[t].out.length === 1 && routePathDict[t].in[0].id.equals(routePathDict[t].out[0].id)) {
        delete routePathDict[t];
        continue;
      }
      if (routePathDict[t].in.length === 0 || routePathDict[t].out.length === 0) {
        delete routePathDict[t];
        continue;
      }
      const info = routePathDict[t];
      for (const infoIn of info.in) {
        for (const infoOut of info.out) {
          if (infoIn.version === 6 && needTickArray[infoIn.id.toString()] === void 0) {
            needTickArray[infoIn.id.toString()] = infoIn;
          } else if (infoIn.version === 7 && cpmmPoolList[infoIn.id.toString()] === void 0) {
            cpmmPoolList[infoIn.id.toString()] = infoIn;
          } else if ((infoIn.version === 4 || infoIn.version === 5) && needSimulate[infoIn.id.toString()] === void 0) {
            needSimulate[infoIn.id.toString()] = infoIn;
          }
          if (infoOut.version === 6 && needTickArray[infoOut.id.toString()] === void 0) {
            needTickArray[infoOut.id.toString()] = infoOut;
          } else if (infoOut.version === 7 && cpmmPoolList[infoOut.id.toString()] === void 0) {
            cpmmPoolList[infoOut.id.toString()] = infoOut;
          } else if ((infoOut.version === 4 || infoOut.version === 5) && needSimulate[infoOut.id.toString()] === void 0) {
            needSimulate[infoOut.id.toString()] = infoOut;
          }
        }
      }
    }
    return {
      directPath,
      addLiquidityPools,
      routePathDict,
      needSimulate: Object.values(needSimulate),
      needTickArray: Object.values(needTickArray),
      cpmmPoolList: Object.values(cpmmPoolList)
    };
  }
  async fetchSwapRoutesData({
    routes,
    inputMint,
    outputMint
  }) {
    const mintSet = /* @__PURE__ */ new Set([
      ...routes.needTickArray.map((p) => [p.mintA.toBase58(), p.mintB.toBase58()]).flat(),
      inputMint.toString(),
      outputMint.toString()
    ]);
    console.log("fetching amm pools info, total: ", routes.needSimulate.length);
    const ammPoolsRpcInfo = await this.scope.liquidity.getRpcPoolInfos(routes.needSimulate.map((p) => p.id));
    const ammSimulateCache = toAmmComputePoolInfo(ammPoolsRpcInfo);
    let mintInfos = {};
    Object.values(ammSimulateCache).forEach((p) => {
      mintSet.delete(p.mintA.address);
      mintInfos[p.mintA.address] = {
        address: new import_web333.PublicKey(p.mintA.address),
        programId: import_spl_token24.TOKEN_PROGRAM_ID,
        mintAuthority: null,
        supply: BigInt(0),
        decimals: p.mintA.decimals,
        isInitialized: true,
        freezeAuthority: null,
        tlvData: Buffer.from("0", "hex"),
        feeConfig: void 0
      };
      mintSet.delete(p.mintB.address);
      mintInfos[p.mintB.address] = {
        address: new import_web333.PublicKey(p.mintB.address),
        programId: import_spl_token24.TOKEN_PROGRAM_ID,
        mintAuthority: null,
        supply: BigInt(0),
        decimals: p.mintB.decimals,
        isInitialized: true,
        freezeAuthority: null,
        tlvData: Buffer.from("0", "hex"),
        feeConfig: void 0
      };
    });
    console.log("fetching cpmm pools info, total: ", routes.cpmmPoolList.length);
    const cpmmPoolsRpcInfo = await this.scope.cpmm.getRpcPoolInfos(routes.cpmmPoolList.map((p) => p.id.toBase58()), true);
    Object.values(cpmmPoolsRpcInfo).forEach((p) => {
      const [mintA, mintB] = [p.mintA.toBase58(), p.mintB.toBase58()];
      if (p.mintProgramA.equals(import_spl_token24.TOKEN_PROGRAM_ID)) {
        mintSet.delete(mintA);
        mintInfos[mintA] = {
          address: p.mintA,
          programId: p.mintProgramA,
          mintAuthority: null,
          supply: BigInt(0),
          decimals: p.mintDecimalA,
          isInitialized: true,
          freezeAuthority: null,
          tlvData: Buffer.from("0", "hex"),
          feeConfig: void 0
        };
      } else
        mintSet.add(mintA);
      if (p.mintProgramB.equals(import_spl_token24.TOKEN_PROGRAM_ID)) {
        mintSet.delete(mintB);
        mintInfos[mintB] = {
          address: p.mintB,
          programId: p.mintProgramB,
          mintAuthority: null,
          supply: BigInt(0),
          decimals: p.mintDecimalB,
          isInitialized: true,
          freezeAuthority: null,
          tlvData: Buffer.from("0", "hex"),
          feeConfig: void 0
        };
      } else
        mintSet.add(mintB);
    });
    console.log("fetching mints info, total: ", mintSet.size);
    const fetchMintInfoRes = await fetchMultipleMintInfos({
      connection: this.scope.connection,
      mints: Array.from(mintSet).map((m) => new import_web333.PublicKey(m))
    });
    mintInfos = {
      ...mintInfos,
      ...fetchMintInfoRes
    };
    const computeCpmmData = this.scope.cpmm.toComputePoolInfos({
      pools: cpmmPoolsRpcInfo,
      mintInfos
    });
    console.log("fetching clmm pools info, total:", routes.needTickArray.length);
    const clmmPoolsRpcInfo = await this.scope.clmm.getRpcClmmPoolInfos({
      poolIds: routes.needTickArray.map((p) => p.id)
    });
    const { computeClmmPoolInfo, computePoolTickData } = await this.scope.clmm.getComputeClmmPoolInfos({
      clmmPoolsRpcInfo,
      mintInfos
    });
    const routePathDict = Object.keys(routes.routePathDict).reduce((acc, cur) => {
      return {
        ...acc,
        [cur]: {
          ...routes.routePathDict[cur],
          mintProgram: mintInfos[cur].programId,
          mDecimals: mintInfos[cur].decimals,
          in: routes.routePathDict[cur].in.map((p) => ammSimulateCache[p.id.toBase58()] || computeClmmPoolInfo[p.id.toBase58()] || computeCpmmData[p.id.toBase58()]),
          out: routes.routePathDict[cur].out.map((p) => ammSimulateCache[p.id.toBase58()] || computeClmmPoolInfo[p.id.toBase58()] || computeCpmmData[p.id.toBase58()])
        }
      };
    }, {});
    return {
      mintInfos,
      ammPoolsRpcInfo,
      ammSimulateCache,
      clmmPoolsRpcInfo,
      computeClmmPoolInfo,
      computePoolTickData,
      computeCpmmData,
      routePathDict
    };
  }
  getAllRouteComputeAmountOut({
    inputTokenAmount,
    outputToken: propOutputToken,
    directPath,
    routePathDict,
    simulateCache,
    tickCache,
    slippage,
    chainTime,
    epochInfo,
    feeConfig
  }) {
    const _amountInFee = feeConfig === void 0 ? new import_bn29.default(0) : inputTokenAmount.raw.mul(new import_bn29.default(feeConfig.feeBps.toNumber())).div(new import_bn29.default(1e4));
    const _amoutIn = inputTokenAmount.raw.sub(_amountInFee);
    const amountIn = new TokenAmount(inputTokenAmount.token, _amoutIn);
    const _inFeeConfig = feeConfig === void 0 ? void 0 : {
      feeAmount: _amountInFee,
      feeAccount: feeConfig.feeAccount
    };
    const outputToken = {
      ...propOutputToken,
      address: solToWSol(propOutputToken.address).toString()
    };
    const outRoute = [];
    for (const itemPool of directPath) {
      try {
        outRoute.push({
          ...this.computeAmountOut({
            itemPool,
            tickCache,
            simulateCache,
            chainTime,
            epochInfo,
            slippage,
            outputToken,
            amountIn
          }),
          feeConfig: _inFeeConfig
        });
      } catch (e) {
        this.logDebug("direct error", itemPool.version, itemPool.id.toString(), e.message);
      }
    }
    this.logDebug("direct done");
    for (const [routeMint, info] of Object.entries(routePathDict)) {
      const routeToken = {
        chainId: 101,
        address: routeMint,
        programId: info.mintProgram.toBase58(),
        logoURI: "",
        symbol: "",
        name: "",
        decimals: info.mDecimals,
        tags: [],
        extensions: {}
      };
      const maxFirstIn = info.in.map((i) => {
        try {
          return {
            pool: i,
            data: this.computeAmountOut({
              itemPool: i,
              tickCache,
              simulateCache,
              chainTime,
              epochInfo,
              slippage,
              outputToken: routeToken,
              amountIn
            })
          };
        } catch (e) {
          this.logDebug("route in error", i.version, i.id.toString(), e.message);
          return void 0;
        }
      }).sort((_a, _b) => {
        const a = _a === void 0 ? ZERO4 : _a.data.amountOut.amount.raw.sub(_a.data.amountOut.fee?.raw ?? ZERO4);
        const b = _b === void 0 ? ZERO4 : _b.data.amountOut.amount.raw.sub(_b.data.amountOut.fee?.raw ?? ZERO4);
        return a.lt(b) ? 1 : -1;
      })[0];
      if (maxFirstIn === void 0)
        continue;
      const routeAmountIn = new TokenAmount(toToken(routeToken), maxFirstIn.data.amountOut.amount.raw.sub(maxFirstIn.data.amountOut.fee?.raw ?? ZERO4));
      for (const iOutPool of info.out) {
        try {
          const outC = this.computeAmountOut({
            itemPool: iOutPool,
            tickCache,
            simulateCache,
            chainTime,
            epochInfo,
            slippage,
            outputToken,
            amountIn: routeAmountIn
          });
          outRoute.push({
            ...outC,
            allTrade: maxFirstIn.data.allTrade && outC.allTrade ? true : false,
            amountIn: maxFirstIn.data.amountIn,
            amountOut: outC.amountOut,
            minAmountOut: outC.minAmountOut,
            currentPrice: void 0,
            executionPrice: new decimal_default(new Price({
              baseToken: maxFirstIn.data.amountIn.amount.token,
              denominator: maxFirstIn.data.amountIn.amount.raw,
              quoteToken: outC.amountOut.amount.token,
              numerator: outC.amountOut.amount.raw.sub(outC.amountOut.fee?.raw ?? ZERO4)
            }).toFixed()),
            priceImpact: new decimal_default(maxFirstIn.data.priceImpact.add(outC.priceImpact).toFixed()),
            fee: [maxFirstIn.data.fee[0], outC.fee[0]],
            routeType: "route",
            poolInfoList: [maxFirstIn.pool, iOutPool],
            remainingAccounts: [maxFirstIn.data.remainingAccounts[0], outC.remainingAccounts[0]],
            minMiddleAmountFee: outC.amountOut.fee?.raw ? new TokenAmount(maxFirstIn.data.amountOut.amount.token, (maxFirstIn.data.amountOut.fee?.raw ?? ZERO4).add(outC.amountOut.fee?.raw ?? ZERO4)) : void 0,
            middleToken: maxFirstIn.data.amountOut.amount.token,
            poolReady: maxFirstIn.data.poolReady && outC.poolReady,
            poolType: [maxFirstIn.data.poolType, outC.poolType],
            feeConfig: _inFeeConfig,
            expirationTime: minExpirationTime(maxFirstIn.data.expirationTime, outC.expirationTime)
          });
        } catch (e) {
          this.logDebug("route out error", iOutPool.version, iOutPool.id.toString(), e.message);
        }
      }
    }
    return outRoute.filter((i) => {
      if (!i.allTrade)
        this.logDebug(`pool ${i.poolInfoList.map((p) => p.id.toString()).join(",")} filter out since not all trade`);
      return i.allTrade;
    }).sort((a, b) => a.amountOut.amount.raw.sub(b.amountOut.amount.raw).gt(ZERO4) ? -1 : 1);
  }
  computeAmountOut({
    itemPool,
    tickCache,
    simulateCache,
    chainTime,
    epochInfo,
    slippage,
    outputToken,
    amountIn
  }) {
    if (itemPool.version === 6) {
      const {
        allTrade,
        realAmountIn,
        amountOut,
        minAmountOut,
        expirationTime,
        currentPrice,
        executionPrice,
        priceImpact,
        fee,
        remainingAccounts,
        executionPriceX64
      } = PoolUtils.computeAmountOutFormat({
        poolInfo: itemPool,
        tickArrayCache: tickCache[itemPool.id.toString()],
        amountIn: amountIn.raw,
        tokenOut: outputToken,
        slippage,
        epochInfo,
        catchLiquidityInsufficient: true
      });
      return {
        allTrade,
        amountIn: realAmountIn,
        amountOut,
        minAmountOut,
        currentPrice: new decimal_default(currentPrice.toFixed()),
        executionPrice: new decimal_default(executionPrice.toFixed()),
        priceImpact: new decimal_default(priceImpact.toFixed()),
        fee: [fee],
        remainingAccounts: [remainingAccounts],
        routeType: "amm",
        poolInfoList: [itemPool],
        poolReady: itemPool.startTime < chainTime,
        poolType: "CLMM",
        slippage,
        clmmExPriceX64: [executionPriceX64],
        expirationTime: minExpirationTime(realAmountIn.expirationTime, expirationTime)
      };
    } else if (itemPool.version === 7) {
      const { allTrade, executionPrice, amountOut, minAmountOut, priceImpact, fee } = this.scope.cpmm.computeSwapAmount({
        pool: itemPool,
        outputMint: outputToken.address,
        amountIn: amountIn.raw,
        slippage
      });
      return {
        allTrade,
        amountIn: { amount: amountIn, fee: void 0, expirationTime: void 0 },
        amountOut: {
          amount: toTokenAmount({
            ...outputToken,
            amount: amountOut
          }),
          fee: void 0,
          expirationTime: void 0
        },
        minAmountOut: {
          amount: toTokenAmount({
            ...outputToken,
            amount: minAmountOut
          }),
          fee: void 0,
          expirationTime: void 0
        },
        currentPrice: itemPool.poolPrice,
        executionPrice,
        priceImpact,
        fee: [new TokenAmount(amountIn.token, fee)],
        remainingAccounts: [],
        routeType: "amm",
        poolInfoList: [itemPool],
        poolReady: itemPool.openTime.toNumber() < chainTime,
        poolType: "CPMM",
        slippage,
        clmmExPriceX64: [void 0],
        expirationTime: void 0
      };
    } else {
      if (![1, 6, 7].includes(simulateCache[itemPool.id.toString()].status))
        throw Error("swap error");
      const { amountOut, minAmountOut, currentPrice, executionPrice, priceImpact, fee } = this.scope.liquidity.computeAmountOut({
        poolInfo: simulateCache[itemPool.id.toString()],
        amountIn: amountIn.raw,
        mintIn: amountIn.token.mint,
        mintOut: outputToken.address,
        slippage
      });
      return {
        amountIn: { amount: amountIn, fee: void 0, expirationTime: void 0 },
        amountOut: {
          amount: toTokenAmount({
            ...outputToken,
            amount: amountOut
          }),
          fee: void 0,
          expirationTime: void 0
        },
        minAmountOut: {
          amount: toTokenAmount({
            ...outputToken,
            amount: minAmountOut
          }),
          fee: void 0,
          expirationTime: void 0
        },
        currentPrice,
        executionPrice,
        priceImpact,
        fee: [new TokenAmount(amountIn.token, fee)],
        routeType: "amm",
        poolInfoList: [itemPool],
        remainingAccounts: [],
        poolReady: Number(simulateCache[itemPool.id].openTime) < chainTime,
        poolType: itemPool.version === 5 ? "STABLE" : void 0,
        expirationTime: void 0,
        allTrade: true,
        slippage,
        clmmExPriceX64: [void 0]
      };
    }
  }
  async computePoolToPoolKeys({
    pools,
    clmmRpcData = {},
    ammRpcData = {}
  }) {
    const clmmFetchKeys = new Set(pools.filter((p) => p.version === 6 && !clmmRpcData[p.id.toString()]).map((p) => p.id.toString()));
    if (clmmFetchKeys.size > 0) {
      const clmmData = await this.scope.clmm.getRpcClmmPoolInfos({ poolIds: Array.from(clmmFetchKeys) });
      Object.keys(clmmData).forEach((poolId) => {
        clmmRpcData[poolId] = clmmData[poolId];
      });
    }
    const ammFetchKeys = new Set(pools.filter((p) => p.version === 4 && !ammRpcData[p.id.toString()]).map((p) => p.id.toString()));
    if (ammFetchKeys.size > 0) {
      const ammData = await this.scope.liquidity.getRpcPoolInfos(Array.from(ammFetchKeys));
      Object.keys(ammData).forEach((poolId) => {
        ammRpcData[poolId] = ammData[poolId];
      });
    }
    const ammMarketFetchKeys = new Set(pools.filter((p) => p.version === 4).map((p) => p.marketId));
    const marketData = {};
    if (ammMarketFetchKeys.size > 0) {
      const marketAccount = await getMultipleAccountsInfoWithCustomFlags(this.scope.connection, Array.from(ammMarketFetchKeys).map((p) => ({ pubkey: new import_web333.PublicKey(p) })));
      marketAccount.forEach((m) => {
        if (!m.accountInfo)
          return;
        const itemMarketInfo = MARKET_STATE_LAYOUT_V3.decode(m.accountInfo.data);
        marketData[m.pubkey.toBase58()] = {
          marketId: m.pubkey.toString(),
          marketProgramId: m.accountInfo.owner.toString(),
          marketAuthority: Market.getAssociatedAuthority({
            programId: m.accountInfo.owner,
            marketId: m.pubkey
          }).publicKey.toString(),
          marketBaseVault: itemMarketInfo.baseVault.toString(),
          marketQuoteVault: itemMarketInfo.quoteVault.toString(),
          marketBids: itemMarketInfo.bids.toString(),
          marketAsks: itemMarketInfo.asks.toString(),
          marketEventQueue: itemMarketInfo.eventQueue.toString()
        };
      });
    }
    const poolKeys = [];
    pools.forEach((pool) => {
      if (pool.version === 6) {
        const rpcInfo = clmmRpcData[pool.id.toString()];
        const clmmKeys = {
          programId: pool.programId.toBase58(),
          id: pool.id.toBase58(),
          mintA: pool.mintA,
          mintB: pool.mintB,
          openTime: String(pool.startTime),
          vault: {
            A: rpcInfo.vaultA.toBase58(),
            B: rpcInfo.vaultB.toBase58()
          },
          config: {
            ...pool.ammConfig,
            id: pool.ammConfig.id.toString(),
            defaultRange: 0,
            defaultRangePoint: []
          },
          rewardInfos: [],
          observationId: pool.observationId.toBase58(),
          exBitmapAccount: pool.exBitmapAccount.toBase58()
        };
        poolKeys.push(clmmKeys);
      } else if (pool.version === 4) {
        const rpcInfo = ammRpcData[pool.id.toString()];
        const ammKeys = {
          programId: pool.programId,
          id: pool.id,
          mintA: pool.mintA,
          mintB: pool.mintB,
          openTime: String(pool.openTime),
          vault: {
            A: rpcInfo.baseVault.toBase58(),
            B: rpcInfo.quoteVault.toBase58()
          },
          authority: getLiquidityAssociatedAuthority({ programId: new import_web333.PublicKey(pool.programId) }).publicKey.toString(),
          openOrders: rpcInfo.openOrders.toBase58(),
          targetOrders: rpcInfo.targetOrders.toBase58(),
          mintLp: pool.lpMint,
          ...marketData[pool.marketId]
        };
        poolKeys.push(ammKeys);
      } else if (pool.version === 7) {
        poolKeys.push({
          observationId: pool.observationId.toBase58(),
          programId: pool.programId.toBase58(),
          id: pool.id.toBase58(),
          mintA: pool.mintA,
          mintB: pool.mintB,
          openTime: String(pool.openTime),
          authority: getPdaPoolAuthority(pool.programId).publicKey.toBase58(),
          vault: {
            A: pool.vaultA.toBase58(),
            B: pool.vaultB.toBase58()
          },
          mintLp: toApiV3Token({
            address: pool.mintLp.toBase58(),
            programId: import_spl_token24.TOKEN_PROGRAM_ID.toBase58(),
            decimals: pool.lpDecimals
          }),
          config: {
            id: pool.configId.toBase58(),
            ...pool.configInfo,
            protocolFeeRate: pool.configInfo.protocolFeeRate.toNumber(),
            tradeFeeRate: pool.configInfo.tradeFeeRate.toNumber(),
            fundFeeRate: pool.configInfo.fundFeeRate.toNumber(),
            createPoolFee: pool.configInfo.createPoolFee.toString()
          }
        });
      }
    });
    return poolKeys;
  }
};

// src/raydium/utils1216/utils1216.ts
var import_web334 = require("@solana/web3.js");
var import_spl_token25 = require("@solana/spl-token");
var import_bn30 = __toESM(require("bn.js"));
var _Utils1216 = class extends ModuleBase {
  static getPdaPoolId(programId, ammId) {
    return findProgramAddress([_Utils1216.SEED_CONFIG.pool.id, ammId.toBuffer()], programId);
  }
  static getPdaOwnerId(programId, poolId, owner, version) {
    return findProgramAddress([
      _Utils1216.SEED_CONFIG.owner.id,
      poolId.toBuffer(),
      owner.toBuffer(),
      Buffer.from(new import_bn30.default(version).toArray())
    ], programId);
  }
  static async getAllInfo({
    connection,
    programId,
    poolIds,
    wallet,
    chainTime
  }) {
    if (poolIds.length === 0)
      return [];
    const allPoolPda = poolIds.map((id) => _Utils1216.getPdaPoolId(programId, id).publicKey);
    const allOwnerPda = [];
    for (let itemVersion = 0; itemVersion < _Utils1216.VERSION_PROJECT.length; itemVersion++) {
      allOwnerPda.push(...allPoolPda.map((id) => _Utils1216.getPdaOwnerId(programId, id, wallet, itemVersion).publicKey));
    }
    const pdaInfo = await getMultipleAccountsInfo(connection, [...allPoolPda, ...allOwnerPda]);
    const info = [];
    for (let index = 0; index < pdaInfo.length; index++) {
      const version = Math.floor(index / poolIds.length);
      const i = index % poolIds.length;
      const itemPoolId = allPoolPda[i];
      const itemOwnerId = allOwnerPda[index];
      const itemPoolInfoS = pdaInfo[i];
      const itemOwnerInfoS = pdaInfo[poolIds.length + index];
      if (!(itemPoolInfoS && itemOwnerInfoS))
        continue;
      if (itemPoolInfoS.data.length !== _Utils1216.POOL_LAYOUT.span || itemOwnerInfoS.data.length !== _Utils1216.OWNER_LAYOUT.span)
        continue;
      const itemPoolInfo = _Utils1216.POOL_LAYOUT.decode(itemPoolInfoS.data);
      const itemOwnerInfo = _Utils1216.OWNER_LAYOUT.decode(itemOwnerInfoS.data);
      const openTime = itemPoolInfo.openTime.toNumber();
      const endTime = itemPoolInfo.endTime.toNumber();
      const hasCanClaimToken = itemOwnerInfo.tokenInfo.map((i2) => i2.debtAmount.gt(new import_bn30.default(0))).filter((i2) => !i2).length !== 3;
      const inCanClaimTime = chainTime > openTime && chainTime < endTime && itemPoolInfo.status === 1;
      const canClaim = hasCanClaimToken && inCanClaimTime;
      info.push({
        programId,
        poolId: itemPoolId,
        ammId: itemPoolInfo.ammId,
        ownerAccountId: itemOwnerId,
        snapshotLpAmount: itemOwnerInfo.lpAmount,
        project: _Utils1216.VERSION_PROJECT[version],
        openTime,
        endTime,
        canClaim,
        canClaimErrorType: !hasCanClaimToken ? "alreadyClaimIt" : !inCanClaimTime ? "outOfOperationalTime" : void 0,
        tokenInfo: itemPoolInfo.tokenInfo.map((itemPoolToken, i2) => ({
          mintAddress: itemPoolToken.mintAddress,
          mintVault: itemPoolToken.mintVault,
          mintDecimals: itemPoolToken.mintDecimals,
          perLpLoss: itemPoolToken.perLpLoss,
          debtAmount: itemOwnerInfo.tokenInfo[i2].debtAmount.add(itemOwnerInfo.tokenInfo[i2].claimedAmount)
        }))
      });
    }
    return info;
  }
  async makeClaimTransaction({
    poolInfo,
    ownerInfo,
    feePayer
  }) {
    if (!ownerInfo.wallet)
      this.scope.checkOwner();
    const txBuilder = this.createTxBuilder(feePayer);
    const wallet = ownerInfo.wallet || this.scope.ownerPubKey;
    const ownerVaultList = [];
    for (const itemToken of poolInfo.tokenInfo) {
      const { account, instructionParams } = await this.scope.account.getOrCreateTokenAccount({
        mint: itemToken.mintAddress,
        owner: this.scope.ownerPubKey,
        notUseTokenAccount: itemToken.mintAddress.equals(Token.WSOL.mint),
        createInfo: {
          payer: wallet,
          amount: 0
        },
        skipCloseAccount: !itemToken.mintAddress.equals(Token.WSOL.mint),
        associatedOnly: itemToken.mintAddress.equals(Token.WSOL.mint) ? false : ownerInfo.associatedOnly
      });
      instructionParams && txBuilder.addInstruction(instructionParams);
      ownerVaultList.push(account);
    }
    txBuilder.addInstruction({
      instructions: [
        _Utils1216.makeClaimInstruction({
          programId: poolInfo.programId,
          poolInfo,
          ownerInfo: {
            wallet,
            ownerPda: poolInfo.ownerAccountId,
            claimAddress: ownerVaultList
          }
        })
      ]
    });
    const { transaction, signers } = txBuilder.build();
    return [
      {
        transaction,
        signer: signers
      }
    ];
  }
  async makeClaimAllTransaction({
    poolInfos,
    ownerInfo,
    feePayer
  }) {
    const txBuilder = this.createTxBuilder(feePayer);
    const wallet = ownerInfo.wallet || this.scope.ownerPubKey;
    const tempNewVault = {};
    for (const poolInfo of poolInfos) {
      const ownerVaultList = [];
      for (const itemToken of poolInfo.tokenInfo) {
        const { account: tempVault, instructionParams } = await this.scope.account.getOrCreateTokenAccount({
          mint: itemToken.mintAddress,
          owner: this.scope.ownerPubKey,
          notUseTokenAccount: itemToken.mintAddress.equals(Token.WSOL.mint),
          createInfo: {
            payer: wallet,
            amount: 0
          },
          skipCloseAccount: !itemToken.mintAddress.equals(Token.WSOL.mint),
          associatedOnly: itemToken.mintAddress.equals(Token.WSOL.mint) ? false : ownerInfo.associatedOnly
        });
        instructionParams && txBuilder.addInstruction(instructionParams);
        if (tempVault) {
          tempNewVault[itemToken.mintAddress.toString()] = tempVault;
          ownerVaultList.push(tempVault);
        }
      }
      txBuilder.addInstruction({
        instructions: [
          _Utils1216.makeClaimInstruction({
            programId: poolInfo.programId,
            poolInfo,
            ownerInfo: {
              wallet,
              ownerPda: poolInfo.ownerAccountId,
              claimAddress: ownerVaultList
            }
          })
        ]
      });
    }
    const { transaction, signers } = txBuilder.build();
    const instructions = txBuilder.allInstructions;
    if (forecastTransactionSize(instructions, [wallet, ...signers.map((s) => s.publicKey)])) {
      return [
        {
          transaction,
          signer: signers
        }
      ];
    } else {
      return [
        {
          transaction: new import_web334.Transaction().add(...instructions.slice(0, txBuilder.AllTxData.instructions.length - 1)),
          signer: signers
        },
        {
          transaction: new import_web334.Transaction().add(...instructions.slice(txBuilder.AllTxData.instructions.length - 1)),
          signer: []
        },
        { transaction: new import_web334.Transaction().add(...txBuilder.AllTxData.endInstructions), signer: [] }
      ];
    }
  }
  static makeClaimInstruction({
    programId,
    poolInfo,
    ownerInfo
  }) {
    const dataLayout = struct([]);
    const keys = [
      { pubkey: ownerInfo.wallet, isSigner: true, isWritable: true },
      { pubkey: poolInfo.poolId, isSigner: false, isWritable: true },
      { pubkey: ownerInfo.ownerPda, isSigner: false, isWritable: true },
      ...ownerInfo.claimAddress.map((i) => ({ pubkey: i, isSigner: false, isWritable: true })),
      ...poolInfo.tokenInfo.map(({ mintVault }) => ({ pubkey: mintVault, isSigner: false, isWritable: true })),
      { pubkey: import_spl_token25.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false }
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({}, data);
    const aData = Buffer.from([...[10, 66, 208, 184, 161, 6, 191, 98], ...data]);
    return new import_web334.TransactionInstruction({
      keys,
      programId,
      data: aData
    });
  }
};
var Utils1216 = _Utils1216;
__publicField(Utils1216, "CLAIMED_NUM", 3);
__publicField(Utils1216, "POOL_LAYOUT", struct([
  blob(8),
  u82("bump"),
  u82("status"),
  u64("openTime"),
  u64("endTime"),
  publicKey("ammId"),
  seq2(struct([
    u82("mintDecimals"),
    publicKey("mintAddress"),
    publicKey("mintVault"),
    u64("perLpLoss"),
    u64("totalClaimedAmount")
  ]), _Utils1216.CLAIMED_NUM, "tokenInfo"),
  seq2(u64(), 10, "padding")
]));
__publicField(Utils1216, "OWNER_LAYOUT", struct([
  blob(8),
  u82("bump"),
  u82("version"),
  publicKey("poolId"),
  publicKey("owner"),
  u64("lpAmount"),
  seq2(struct([publicKey("mintAddress"), u64("debtAmount"), u64("claimedAmount")]), _Utils1216.CLAIMED_NUM, "tokenInfo"),
  seq2(u64(), 4, "padding")
]));
__publicField(Utils1216, "DEFAULT_POOL_ID", [
  "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2",
  "6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg",
  "AVs9TA4nWDzfPJE9gGVNJMVhcQy3V9PGazuz33BfG2RA",
  "DVa7Qmb5ct9RCpaU7UTpSaf3GVMYz17vNVU67XpdCRut",
  "7XawhbbxtsRcQA8KTkHT9f9nc6d69UwqCDh6U5EEbEmX",
  "6a1CsrpeZubDjEJE9s1CMVheB6HWM5d7m1cj2jkhyXhj",
  "EoNrn8iUhwgJySD1pHu8Qxm5gSQqLK3za4m8xzD2RuEb",
  "AceAyRTWt4PyB2pHqf2qhDgNZDtKVNaxgL8Ru3V4aN1P",
  "6tmFJbMk5yVHFcFy7X2K8RwHjKLr6KVFLYXpgpBNeAxB"
].map((i) => new import_web334.PublicKey(i)));
__publicField(Utils1216, "SEED_CONFIG", {
  pool: {
    id: Buffer.from("pool_seed", "utf8")
  },
  owner: {
    id: Buffer.from("user_claim_seed", "utf8")
  }
});
__publicField(Utils1216, "VERSION_PROJECT", [void 0, "Francium", "Tulip", "Larix"]);

// src/raydium/ido/ido.ts
var import_web336 = require("@solana/web3.js");
var import_bn31 = __toESM(require("bn.js"));

// src/raydium/ido/instruction.ts
var import_web335 = require("@solana/web3.js");
var import_spl_token26 = require("@solana/spl-token");

// src/raydium/ido/layout.ts
var purchaseLayout = struct([u82("instruction"), nu64("amount")]);
var claimLayout = struct([u82("instruction")]);

// src/raydium/ido/instruction.ts
function makePurchaseInstruction({
  programId,
  amount,
  instructionKeys
}) {
  const keys = [
    { pubkey: SYSTEM_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: import_spl_token26.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: RENT_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: CLOCK_PROGRAM_ID, isSigner: false, isWritable: false },
    ...Object.entries(instructionKeys).map(([name, pubkey]) => ({
      pubkey,
      isSigner: name === "userOwner",
      isWritable: !["authority", "userOwner", "userIdoCheck", "userStakeInfo"].includes(name)
    }))
  ];
  const data = Buffer.alloc(purchaseLayout.span);
  purchaseLayout.encode({ instruction: 1, amount: Number(amount) }, data);
  return new import_web335.TransactionInstruction({ keys, programId, data });
}
function makeClaimInstruction({ programId }, instructionKeys) {
  const keys = [
    { pubkey: import_spl_token26.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: CLOCK_PROGRAM_ID, isSigner: false, isWritable: false },
    ...Object.entries(instructionKeys).map(([name, pubkey]) => ({
      pubkey,
      isSigner: name === "userOwner",
      isWritable: !["authority", "userOwner"].includes(name)
    }))
  ];
  const data = Buffer.alloc(claimLayout.span);
  claimLayout.encode({ instruction: 2 }, data);
  return new import_web335.TransactionInstruction({ keys, programId, data });
}
function makeClaimInstructionV4(params) {
  const { poolConfig, userKeys, side } = params;
  const tokenAccount = side === "base" ? userKeys.baseTokenAccount : userKeys.quoteTokenAccount;
  const vault = side === "base" ? poolConfig.baseVault : poolConfig.quoteVault;
  const data = Buffer.alloc(claimLayout.span);
  claimLayout.encode({
    instruction: 2
  }, data);
  const keys = [
    {
      pubkey: import_spl_token26.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false
    },
    {
      pubkey: import_web335.SYSVAR_CLOCK_PUBKEY,
      isWritable: false,
      isSigner: false
    },
    {
      pubkey: poolConfig.id,
      isWritable: true,
      isSigner: false
    },
    {
      pubkey: poolConfig.authority,
      isWritable: false,
      isSigner: false
    },
    {
      pubkey: vault,
      isWritable: true,
      isSigner: false
    },
    {
      pubkey: tokenAccount,
      isWritable: true,
      isSigner: false
    },
    {
      pubkey: userKeys.ledgerAccount,
      isWritable: true,
      isSigner: false
    },
    {
      pubkey: userKeys.owner,
      isWritable: false,
      isSigner: true
    }
  ];
  return new import_web335.TransactionInstruction({
    programId: poolConfig.programId,
    keys,
    data
  });
}

// src/raydium/ido/ido.ts
var PROGRAM_TO_VERSION = {
  [IDO_ALL_PROGRAM.IDO_PROGRAM_ID_V1.toString()]: 1,
  [IDO_ALL_PROGRAM.IDO_PROGRAM_ID_V2.toString()]: 2,
  [IDO_ALL_PROGRAM.IDO_PROGRAM_ID_V3.toString()]: 3,
  [IDO_ALL_PROGRAM.IDO_PROGRAM_ID_V4.toString()]: 4
};
var MarketV22 = class extends ModuleBase {
  async claim({
    ownerInfo,
    idoKeys,
    associatedOnly = true,
    checkCreateATAOwner = false,
    txVersion,
    feePayer
  }) {
    const txBuilder = this.createTxBuilder(feePayer);
    const version = PROGRAM_TO_VERSION[idoKeys.programId];
    if (!version)
      this.logAndCreateError("invalid version", version);
    const poolConfigKey = jsonInfo2PoolKeys(idoKeys);
    const [hasUnClaimedProject, hasUnClaimedBuy] = [!new import_bn31.default(ownerInfo.coin).isZero(), !new import_bn31.default(ownerInfo.pc).isZero()];
    const userProjectUseSolBalance = poolConfigKey.projectInfo.mint.address.equals(WSOLMint);
    const { account: userProjectTokenAccount, instructionParams: userProjectInstructionParams } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolConfigKey.projectInfo.mint.programId,
      mint: poolConfigKey.projectInfo.mint.address,
      owner: this.scope.ownerPubKey,
      createInfo: {
        payer: this.scope.ownerPubKey,
        amount: 0
      },
      skipCloseAccount: !userProjectUseSolBalance,
      notUseTokenAccount: userProjectUseSolBalance,
      associatedOnly: userProjectUseSolBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    if (!userProjectTokenAccount && hasUnClaimedProject)
      this.logAndCreateError("target token accounts not found", "mint", idoKeys.projectInfo.mint.address);
    hasUnClaimedProject && userProjectInstructionParams && txBuilder.addInstruction(userProjectInstructionParams);
    const buyMintUseSolBalance = poolConfigKey.buyInfo.mint.address.equals(WSOLMint);
    const { account: userBuyTokenAccount, instructionParams } = await this.scope.account.getOrCreateTokenAccount({
      tokenProgram: poolConfigKey.buyInfo.mint.programId,
      mint: poolConfigKey.buyInfo.mint.address,
      owner: this.scope.ownerPubKey,
      createInfo: {
        payer: this.scope.ownerPubKey,
        amount: 0
      },
      skipCloseAccount: !buyMintUseSolBalance,
      notUseTokenAccount: buyMintUseSolBalance,
      associatedOnly: buyMintUseSolBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    if (!userProjectTokenAccount && hasUnClaimedBuy)
      this.logAndCreateError("target token accounts not found", "mint", idoKeys.projectInfo.mint.address);
    hasUnClaimedBuy && instructionParams && txBuilder.addInstruction(instructionParams);
    if (!userProjectTokenAccount || !userBuyTokenAccount)
      this.logAndCreateError("target token accounts not found", "mint", idoKeys.projectInfo.mint.address, idoKeys.buyInfo.mint.address);
    if (version === 3) {
      return txBuilder.addInstruction({
        instructions: [
          ...hasUnClaimedProject ? [
            makeClaimInstruction({ programId: poolConfigKey.programId }, {
              idoId: poolConfigKey.id,
              authority: poolConfigKey.authority,
              poolTokenAccount: poolConfigKey.projectInfo.vault,
              userTokenAccount: userProjectTokenAccount,
              userIdoInfo: new import_web336.PublicKey(ownerInfo.userIdoInfo),
              userOwner: this.scope.ownerPubKey
            })
          ] : [],
          ...hasUnClaimedBuy ? [
            makeClaimInstruction({ programId: new import_web336.PublicKey(idoKeys.programId) }, {
              idoId: poolConfigKey.id,
              authority: poolConfigKey.authority,
              poolTokenAccount: poolConfigKey.buyInfo.vault,
              userTokenAccount: userBuyTokenAccount,
              userIdoInfo: new import_web336.PublicKey(ownerInfo.userIdoInfo),
              userOwner: this.scope.ownerPubKey
            })
          ] : []
        ]
      }).versionBuild({ txVersion });
    }
    if (version < 3) {
      if (!hasUnClaimedProject && !hasUnClaimedBuy)
        this.logAndCreateError("no claimable rewards");
      return txBuilder.addInstruction({
        instructions: [
          makeClaimInstruction({ programId: poolConfigKey.programId }, {
            idoId: poolConfigKey.id,
            authority: poolConfigKey.authority,
            poolQuoteTokenAccount: poolConfigKey.buyInfo.vault,
            poolBaseTokenAccount: poolConfigKey.projectInfo.vault,
            userQuoteTokenAccount: userBuyTokenAccount,
            userBaseTokenAccount: userProjectTokenAccount,
            userIdoInfo: new import_web336.PublicKey(ownerInfo.userIdoInfo),
            userOwner: this.scope.ownerPubKey
          })
        ]
      }).versionBuild({ txVersion });
    }
    const keys = {
      poolConfig: {
        id: poolConfigKey.id,
        programId: poolConfigKey.programId,
        authority: poolConfigKey.authority,
        baseVault: poolConfigKey.projectInfo.vault,
        quoteVault: poolConfigKey.buyInfo.vault,
        baseToken: idoKeys.projectInfo.mint,
        quoteToken: idoKeys.buyInfo.mint
      },
      userKeys: {
        baseTokenAccount: userProjectTokenAccount,
        quoteTokenAccount: userBuyTokenAccount,
        ledgerAccount: new import_web336.PublicKey(ownerInfo.userIdoInfo),
        owner: this.scope.ownerPubKey
      }
    };
    return txBuilder.addInstruction({
      instructions: [
        ...hasUnClaimedProject ? [makeClaimInstructionV4({ ...keys, side: "base" })] : [],
        ...hasUnClaimedBuy ? [makeClaimInstructionV4({ ...keys, side: "quote" })] : []
      ]
    }).versionBuild({ txVersion });
  }
};

// src/raydium/launchpad/pda.ts
var LAUNCHPAD_AUTH_SEED = Buffer.from("vault_auth_seed", "utf8");
var LAUNCHPAD_CONFIG_SEED = Buffer.from("global_config", "utf8");
var LAUNCHPAD_POOL_SEED = Buffer.from("pool", "utf8");
var LAUNCHPAD_POOL_VAULT_SEED = Buffer.from("pool_vault", "utf8");
var LAUNCHPAD_POOL_VESTING_SEED = Buffer.from("pool_vesting", "utf8");
var LAUNCHPAD_POOL_PLATFORM_SEED = Buffer.from("platform_config", "utf8");
function getPdaLaunchpadAuth(programId) {
  return findProgramAddress([LAUNCHPAD_AUTH_SEED], programId);
}
function getPdaLaunchpadConfigId(programId, mintB, curveType, index) {
  return findProgramAddress([LAUNCHPAD_CONFIG_SEED, mintB.toBuffer(), u8ToBytes(curveType), u16ToBytes(index)], programId);
}
function getPdaLaunchpadPoolId(programId, mintA, mintB) {
  return findProgramAddress([LAUNCHPAD_POOL_SEED, mintA.toBuffer(), mintB.toBuffer()], programId);
}
function getPdaLaunchpadVaultId(programId, poolId, mint) {
  return findProgramAddress([LAUNCHPAD_POOL_VAULT_SEED, poolId.toBuffer(), mint.toBuffer()], programId);
}
function u8ToBytes(num) {
  const arr = new ArrayBuffer(1);
  const view = new DataView(arr);
  view.setUint8(0, num);
  return new Uint8Array(arr);
}
function getPdaCpiEvent(programId) {
  return findProgramAddress([Buffer.from("__event_authority", "utf8")], programId);
}
function getPdaPlatformId(programId, platformAdminWallet) {
  return findProgramAddress([LAUNCHPAD_POOL_PLATFORM_SEED, platformAdminWallet.toBuffer()], programId);
}
function getPdaVestId(programId, poolId, owner) {
  return findProgramAddress([LAUNCHPAD_POOL_VESTING_SEED, poolId.toBuffer(), owner.toBuffer()], programId);
}

// src/raydium/launchpad/instrument.ts
var import_web337 = require("@solana/web3.js");
var import_spl_token27 = require("@solana/spl-token");
var import_bn32 = __toESM(require("bn.js"));
var anchorDataBuf4 = {
  initialize: Buffer.from([175, 175, 109, 31, 13, 152, 155, 237]),
  buyExactIn: Buffer.from([250, 234, 13, 123, 213, 156, 19, 236]),
  buyExactOut: Buffer.from([24, 211, 116, 40, 105, 3, 153, 56]),
  sellExactIn: Buffer.from([149, 39, 222, 155, 211, 124, 152, 26]),
  sellExactOut: Buffer.from([95, 200, 71, 34, 8, 9, 11, 166]),
  createVestingAccount: Buffer.from([129, 178, 2, 13, 217, 172, 230, 218]),
  claimVestedToken: Buffer.from([49, 33, 104, 30, 189, 157, 79, 35]),
  createPlatformConfig: Buffer.from([176, 90, 196, 175, 253, 113, 220, 20]),
  claimPlatformFee: Buffer.from([156, 39, 208, 135, 76, 237, 61, 72]),
  updatePlaformConfig: Buffer.from([195, 60, 76, 129, 146, 45, 67, 143])
};
function initialize(programId, payer, creator, configId, platformId, auth, poolId, mintA, mintB, vaultA, vaultB, metadataId, tokenProgramA, tokenProgramB, decimals, name, symbol, uri, curveParam, totalLockedAmount, cliffPeriod, unlockPeriod) {
  const dataLayout1 = struct([u82("decimals"), str("name"), str("symbol"), str("uri")]);
  const dataLayout3 = struct([u64("totalLockedAmount"), u64("cliffPeriod"), u64("unlockPeriod")]);
  const dataLayout21 = struct([u82("index"), u64("supply"), u64("totalFundRaisingB"), u82("migrateType")]);
  const dataLayout22 = struct([
    u82("index"),
    u64("supply"),
    u64("totalSellA"),
    u64("totalFundRaisingB"),
    u82("migrateType")
  ]);
  const keys = [
    { pubkey: payer, isSigner: true, isWritable: false },
    { pubkey: creator, isSigner: false, isWritable: false },
    { pubkey: configId, isSigner: false, isWritable: false },
    { pubkey: platformId, isSigner: false, isWritable: false },
    { pubkey: auth, isSigner: false, isWritable: false },
    { pubkey: poolId, isSigner: false, isWritable: true },
    { pubkey: mintA, isSigner: true, isWritable: true },
    { pubkey: mintB, isSigner: false, isWritable: false },
    { pubkey: vaultA, isSigner: false, isWritable: true },
    { pubkey: vaultB, isSigner: false, isWritable: true },
    { pubkey: metadataId, isSigner: false, isWritable: true },
    { pubkey: tokenProgramA, isSigner: false, isWritable: false },
    { pubkey: tokenProgramB, isSigner: false, isWritable: false },
    { pubkey: METADATA_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: import_web337.SystemProgram.programId, isSigner: false, isWritable: false },
    { pubkey: RENT_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: getPdaCpiEvent(programId).publicKey, isSigner: false, isWritable: false },
    { pubkey: programId, isSigner: false, isWritable: false }
  ];
  const data1 = Buffer.alloc(Buffer.from(name, "utf-8").length + Buffer.from(symbol, "utf-8").length + Buffer.from(uri, "utf-8").length + 4 * 3 + 1);
  const data3 = Buffer.alloc(dataLayout3.span);
  const data2 = Buffer.alloc(curveParam.type === "ConstantCurve" ? dataLayout22.span : dataLayout21.span);
  dataLayout1.encode({ decimals, name, symbol, uri }, data1);
  if (curveParam.type === "ConstantCurve") {
    dataLayout22.encode({ index: 0, ...curveParam, migrateType: curveParam.migrateType === "amm" ? 0 : 1 }, data2);
  } else if (curveParam.type === "FixedCurve") {
    dataLayout21.encode({ index: 1, ...curveParam, migrateType: curveParam.migrateType === "amm" ? 0 : 1 }, data2);
  } else if (curveParam.type === "LinearCurve") {
    dataLayout21.encode({ index: 2, ...curveParam, migrateType: curveParam.migrateType === "amm" ? 0 : 1 }, data2);
  }
  dataLayout3.encode({ totalLockedAmount, cliffPeriod, unlockPeriod }, data3);
  return new import_web337.TransactionInstruction({
    keys,
    programId,
    data: Buffer.from([...anchorDataBuf4.initialize, ...data1, ...data2, ...data3])
  });
}
function buyExactInInstruction(programId, owner, auth, configId, platformId, poolId, userTokenAccountA, userTokenAccountB, vaultA, vaultB, mintA, mintB, tokenProgramA, tokenProgramB, amountB, minAmountA, shareFeeRate, shareFeeReceiver) {
  const dataLayout = struct([u64("amountB"), u64("minAmountA"), u64("shareFeeRate")]);
  const keys = [
    { pubkey: owner, isSigner: true, isWritable: false },
    { pubkey: auth, isSigner: false, isWritable: false },
    { pubkey: configId, isSigner: false, isWritable: false },
    { pubkey: platformId, isSigner: false, isWritable: false },
    { pubkey: poolId, isSigner: false, isWritable: true },
    { pubkey: userTokenAccountA, isSigner: false, isWritable: true },
    { pubkey: userTokenAccountB, isSigner: false, isWritable: true },
    { pubkey: vaultA, isSigner: false, isWritable: true },
    { pubkey: vaultB, isSigner: false, isWritable: true },
    { pubkey: mintA, isSigner: false, isWritable: false },
    { pubkey: mintB, isSigner: false, isWritable: false },
    { pubkey: tokenProgramA, isSigner: false, isWritable: false },
    { pubkey: tokenProgramB, isSigner: false, isWritable: false },
    { pubkey: getPdaCpiEvent(programId).publicKey, isSigner: false, isWritable: false },
    { pubkey: programId, isSigner: false, isWritable: false }
  ];
  if (shareFeeReceiver) {
    keys.push({ pubkey: shareFeeReceiver, isSigner: false, isWritable: true });
  }
  console.log({
    amountB: amountB.toString(),
    minAmountA: minAmountA.toString()
  });
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    amountB,
    minAmountA,
    shareFeeRate: shareFeeRate ?? new import_bn32.default(0)
  }, data);
  return new import_web337.TransactionInstruction({
    keys,
    programId,
    data: Buffer.from([...anchorDataBuf4.buyExactIn, ...data])
  });
}
function buyExactOutInstruction(programId, owner, auth, configId, platformId, poolId, userTokenAccountA, userTokenAccountB, vaultA, vaultB, mintA, mintB, tokenProgramA, tokenProgramB, amountA, maxAmountB, shareFeeRate, shareFeeReceiver) {
  const dataLayout = struct([u64("amountA"), u64("maxAmountB"), u64("shareFeeRate")]);
  const keys = [
    { pubkey: owner, isSigner: true, isWritable: false },
    { pubkey: auth, isSigner: false, isWritable: false },
    { pubkey: configId, isSigner: false, isWritable: false },
    { pubkey: platformId, isSigner: false, isWritable: false },
    { pubkey: poolId, isSigner: false, isWritable: true },
    { pubkey: userTokenAccountA, isSigner: false, isWritable: true },
    { pubkey: userTokenAccountB, isSigner: false, isWritable: true },
    { pubkey: vaultA, isSigner: false, isWritable: true },
    { pubkey: vaultB, isSigner: false, isWritable: true },
    { pubkey: mintA, isSigner: false, isWritable: false },
    { pubkey: mintB, isSigner: false, isWritable: false },
    { pubkey: tokenProgramA, isSigner: false, isWritable: false },
    { pubkey: tokenProgramB, isSigner: false, isWritable: false },
    { pubkey: getPdaCpiEvent(programId).publicKey, isSigner: false, isWritable: false },
    { pubkey: programId, isSigner: false, isWritable: false }
  ];
  if (shareFeeReceiver) {
    keys.push({ pubkey: shareFeeReceiver, isSigner: false, isWritable: true });
  }
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    amountA,
    maxAmountB,
    shareFeeRate: shareFeeRate ?? new import_bn32.default(0)
  }, data);
  return new import_web337.TransactionInstruction({
    keys,
    programId,
    data: Buffer.from([...anchorDataBuf4.buyExactOut, ...data])
  });
}
function sellExactInInstruction(programId, owner, auth, configId, platformId, poolId, userTokenAccountA, userTokenAccountB, vaultA, vaultB, mintA, mintB, tokenProgramA, tokenProgramB, amountA, minAmountB, shareFeeRate, shareFeeReceiver) {
  const dataLayout = struct([u64("amountA"), u64("minAmountB"), u64("shareFeeRate")]);
  const keys = [
    { pubkey: owner, isSigner: true, isWritable: false },
    { pubkey: auth, isSigner: false, isWritable: false },
    { pubkey: configId, isSigner: false, isWritable: false },
    { pubkey: platformId, isSigner: false, isWritable: false },
    { pubkey: poolId, isSigner: false, isWritable: true },
    { pubkey: userTokenAccountA, isSigner: false, isWritable: true },
    { pubkey: userTokenAccountB, isSigner: false, isWritable: true },
    { pubkey: vaultA, isSigner: false, isWritable: true },
    { pubkey: vaultB, isSigner: false, isWritable: true },
    { pubkey: mintA, isSigner: false, isWritable: false },
    { pubkey: mintB, isSigner: false, isWritable: false },
    { pubkey: tokenProgramA, isSigner: false, isWritable: false },
    { pubkey: tokenProgramB, isSigner: false, isWritable: false },
    { pubkey: getPdaCpiEvent(programId).publicKey, isSigner: false, isWritable: false },
    { pubkey: programId, isSigner: false, isWritable: false }
  ];
  if (shareFeeReceiver) {
    keys.push({ pubkey: shareFeeReceiver, isSigner: false, isWritable: true });
  }
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    amountA,
    minAmountB,
    shareFeeRate: shareFeeRate ?? new import_bn32.default(0)
  }, data);
  return new import_web337.TransactionInstruction({
    keys,
    programId,
    data: Buffer.from([...anchorDataBuf4.sellExactIn, ...data])
  });
}
function sellExactOut(programId, owner, auth, configId, platformId, poolId, userTokenAccountA, userTokenAccountB, vaultA, vaultB, mintA, mintB, tokenProgramA, tokenProgramB, amountB, maxAmountA, shareFeeRate, shareFeeReceiver) {
  const dataLayout = struct([u64("amountB"), u64("maxAmountA"), u64("shareFeeRate")]);
  const keys = [
    { pubkey: owner, isSigner: true, isWritable: false },
    { pubkey: auth, isSigner: false, isWritable: false },
    { pubkey: configId, isSigner: false, isWritable: false },
    { pubkey: platformId, isSigner: false, isWritable: false },
    { pubkey: poolId, isSigner: false, isWritable: true },
    { pubkey: userTokenAccountA, isSigner: false, isWritable: true },
    { pubkey: userTokenAccountB, isSigner: false, isWritable: true },
    { pubkey: vaultA, isSigner: false, isWritable: true },
    { pubkey: vaultB, isSigner: false, isWritable: true },
    { pubkey: mintA, isSigner: false, isWritable: false },
    { pubkey: mintB, isSigner: false, isWritable: false },
    { pubkey: tokenProgramA, isSigner: false, isWritable: false },
    { pubkey: tokenProgramB, isSigner: false, isWritable: false },
    { pubkey: getPdaCpiEvent(programId).publicKey, isSigner: false, isWritable: false },
    { pubkey: programId, isSigner: false, isWritable: false }
  ];
  if (shareFeeReceiver) {
    keys.push({ pubkey: shareFeeReceiver, isSigner: false, isWritable: true });
  }
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({
    amountB,
    maxAmountA,
    shareFeeRate: shareFeeRate ?? new import_bn32.default(0)
  }, data);
  return new import_web337.TransactionInstruction({
    keys,
    programId,
    data: Buffer.from([...anchorDataBuf4.sellExactOut, ...data])
  });
}
function claimVestedToken(programId, owner, auth, poolId, vestingRecord, userTokenAccountA, vaultA, mintA, tokenProgramA) {
  const dataLayout = struct([]);
  const keys = [
    { pubkey: owner, isSigner: true, isWritable: false },
    { pubkey: auth, isSigner: false, isWritable: false },
    { pubkey: poolId, isSigner: false, isWritable: true },
    { pubkey: vestingRecord, isSigner: false, isWritable: true },
    { pubkey: vaultA, isSigner: false, isWritable: true },
    { pubkey: userTokenAccountA, isSigner: false, isWritable: true },
    { pubkey: mintA, isSigner: false, isWritable: false },
    { pubkey: tokenProgramA, isSigner: false, isWritable: false },
    { pubkey: import_web337.SystemProgram.programId, isSigner: false, isWritable: false },
    { pubkey: import_spl_token27.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: false, isWritable: false }
  ];
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({}, data);
  return new import_web337.TransactionInstruction({
    keys,
    programId,
    data: Buffer.from([...anchorDataBuf4.claimVestedToken, ...data])
  });
}
function createVestingAccount(programId, owner, beneficiary, poolId, vestingRecord, shareAmount) {
  const dataLayout = struct([u64("shareAmount")]);
  const keys = [
    { pubkey: owner, isSigner: true, isWritable: false },
    { pubkey: beneficiary, isSigner: false, isWritable: true },
    { pubkey: poolId, isSigner: false, isWritable: true },
    { pubkey: vestingRecord, isSigner: false, isWritable: true },
    { pubkey: import_web337.SystemProgram.programId, isSigner: false, isWritable: false }
  ];
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode({ shareAmount }, data);
  return new import_web337.TransactionInstruction({
    keys,
    programId,
    data: Buffer.from([...anchorDataBuf4.createVestingAccount, ...data])
  });
}
function claimPlatformFee(programId, platformClaimFeeWallet, auth, poolId, platformId, vaultB, userTokenAccountB, mintB, tokenProgramB) {
  const keys = [
    { pubkey: platformClaimFeeWallet, isSigner: true, isWritable: true },
    { pubkey: auth, isSigner: false, isWritable: false },
    { pubkey: poolId, isSigner: false, isWritable: true },
    { pubkey: platformId, isSigner: false, isWritable: true },
    { pubkey: vaultB, isSigner: false, isWritable: true },
    { pubkey: userTokenAccountB, isSigner: false, isWritable: true },
    { pubkey: mintB, isSigner: false, isWritable: true },
    { pubkey: tokenProgramB, isSigner: false, isWritable: true },
    { pubkey: import_web337.SystemProgram.programId, isSigner: false, isWritable: true },
    { pubkey: import_spl_token27.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: false, isWritable: true }
  ];
  return new import_web337.TransactionInstruction({
    keys,
    programId,
    data: anchorDataBuf4.claimPlatformFee
  });
}
function createPlatformConfig(programId, platformAdmin, platformClaimFeeWallet, platformLockNftWallet, platformId, cpConfigId, migrateCpLockNftScale, feeRate, name, web, img) {
  const dataLayout = struct([
    u64("platformScale"),
    u64("creatorScale"),
    u64("burnScale"),
    u64("feeRate"),
    str("name"),
    str("web"),
    str("img")
  ]);
  const keys = [
    { pubkey: platformAdmin, isSigner: true, isWritable: true },
    { pubkey: platformClaimFeeWallet, isSigner: false, isWritable: false },
    { pubkey: platformLockNftWallet, isSigner: false, isWritable: false },
    { pubkey: platformId, isSigner: false, isWritable: true },
    { pubkey: cpConfigId, isSigner: false, isWritable: true },
    { pubkey: import_web337.SystemProgram.programId, isSigner: false, isWritable: false }
  ];
  const data = Buffer.alloc(8 * 4 + Buffer.from(name, "utf-8").length + Buffer.from(web, "utf-8").length + Buffer.from(img, "utf-8").length + 4 * 3);
  dataLayout.encode({
    platformScale: migrateCpLockNftScale.platformScale,
    creatorScale: migrateCpLockNftScale.creatorScale,
    burnScale: migrateCpLockNftScale.burnScale,
    feeRate,
    name,
    web,
    img
  }, data);
  return new import_web337.TransactionInstruction({
    keys,
    programId,
    data: Buffer.from([...anchorDataBuf4.createPlatformConfig, ...data])
  });
}
function updatePlatformConfig(programId, platformAdmin, platformId, updateInfo) {
  const keys = [
    { pubkey: platformAdmin, isSigner: true, isWritable: false },
    { pubkey: platformId, isSigner: false, isWritable: true }
  ];
  let data;
  if (updateInfo.type === "updateClaimFeeWallet") {
    const dataLayout = struct([u82("index"), publicKey("value")]);
    data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({ index: 0, value: updateInfo.value }, data);
  } else if (updateInfo.type === "updateLockNftWallet") {
    const dataLayout = struct([u82("index"), publicKey("value")]);
    data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({ index: 1, value: updateInfo.value }, data);
  } else if (updateInfo.type === "migrateCpLockNftScale") {
    const dataLayout = struct([u82("index"), u64("platformScale"), u64("creatorScale"), u64("burnScale")]);
    data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({ index: 2, ...updateInfo.value }, data);
  } else if (updateInfo.type === "updateFeeRate") {
    const dataLayout = struct([u82("index"), u64("value")]);
    data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({ index: 3, value: updateInfo.value }, data);
  } else if (updateInfo.type === "updateImg" || updateInfo.type === "updateName" || updateInfo.type === "updateWeb") {
    const dataLayout = struct([u82("index"), str("value")]);
    data = Buffer.alloc(Buffer.from(updateInfo.value, "utf-8").length + 4 + 1 * 1);
    if (updateInfo.type === "updateName")
      dataLayout.encode({ index: 4, value: updateInfo.value }, data);
    else if (updateInfo.type === "updateWeb")
      dataLayout.encode({ index: 5, value: updateInfo.value }, data);
    else if (updateInfo.type === "updateImg")
      dataLayout.encode({ index: 6, value: updateInfo.value }, data);
  } else if (updateInfo.type === "updateCpConfigId") {
    keys.push({ pubkey: updateInfo.value, isSigner: false, isWritable: false });
    const dataLayout = struct([u82("index")]);
    data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({ index: 7 }, data);
  } else if (updateInfo.type === "updateAll") {
    console.log("Please note that this update will overwrite all data in the platform account with the new data.");
    keys.push({ pubkey: updateInfo.value.cpConfigId, isSigner: false, isWritable: false });
    const dataLayout = struct([
      u82("index"),
      publicKey("platformClaimFeeWallet"),
      publicKey("platformLockNftWallet"),
      u64("platformScale"),
      u64("creatorScale"),
      u64("burnScale"),
      u64("feeRate"),
      str("name"),
      str("web"),
      str("img")
    ]);
    data = Buffer.alloc(1 + 32 + 32 + 8 * 4 + 4 * 3 + Buffer.from(updateInfo.value.name, "utf-8").length + Buffer.from(updateInfo.value.web, "utf-8").length + Buffer.from(updateInfo.value.img, "utf-8").length);
    dataLayout.encode({
      index: 8,
      platformClaimFeeWallet: updateInfo.value.platformClaimFeeWallet,
      platformLockNftWallet: updateInfo.value.platformLockNftWallet,
      platformScale: updateInfo.value.migrateCpLockNftScale.platformScale,
      creatorScale: updateInfo.value.migrateCpLockNftScale.creatorScale,
      burnScale: updateInfo.value.migrateCpLockNftScale.burnScale,
      feeRate: updateInfo.value.feeRate,
      name: updateInfo.value.name,
      web: updateInfo.value.web,
      img: updateInfo.value.img
    }, data);
  } else {
    throw Error("updateInfo params type error");
  }
  return new import_web337.TransactionInstruction({
    keys,
    programId,
    data: Buffer.from([...anchorDataBuf4.updatePlaformConfig, ...data])
  });
}

// src/raydium/launchpad/launchpad.ts
var import_spl_token28 = require("@solana/spl-token");
var import_bn38 = __toESM(require("bn.js"));
var import_web338 = require("@solana/web3.js");

// src/raydium/launchpad/layout.ts
var LaunchpadConfig = struct([
  u64(),
  u64("epoch"),
  u82("curveType"),
  u16("index"),
  u64("migrateFee"),
  u64("tradeFeeRate"),
  u64("maxShareFeeRate"),
  u64("minSupplyA"),
  u64("maxLockRate"),
  u64("minSellRateA"),
  u64("minMigrateRateA"),
  u64("minFundRaisingB"),
  publicKey("mintB"),
  publicKey("protocolFeeOwner"),
  publicKey("migrateFeeOwner"),
  publicKey("migrateToAmmWallet"),
  publicKey("migrateToCpmmWallet"),
  seq2(u64(), 16)
]);
var LaunchpadVestingSchedule = struct([
  u64("totalLockedAmount"),
  u64("cliffPeriod"),
  u64("unlockPeriod"),
  u64("startTime"),
  u64("totalAllocatedShare")
]);
var LaunchpadPool = struct([
  u64(),
  u64("epoch"),
  u82("bump"),
  u82("status"),
  u82("mintDecimalsA"),
  u82("mintDecimalsB"),
  u82("migrateType"),
  u64("supply"),
  u64("totalSellA"),
  u64("virtualA"),
  u64("virtualB"),
  u64("realA"),
  u64("realB"),
  u64("totalFundRaisingB"),
  u64("protocolFee"),
  u64("platformFee"),
  u64("migrateFee"),
  LaunchpadVestingSchedule.replicate("vestingSchedule"),
  publicKey("configId"),
  publicKey("platformId"),
  publicKey("mintA"),
  publicKey("mintB"),
  publicKey("vaultA"),
  publicKey("vaultB"),
  publicKey("creator"),
  seq2(u64(), 8)
]);
var LaunchpadVesting = struct([
  u64(),
  u64("epoch"),
  publicKey("poolId"),
  publicKey("beneficiary"),
  u64("claimedAmount"),
  u64("tokenShareAmount"),
  seq2(u64(), 8)
]);
var PlatformConfig = struct([
  u64(),
  u64("epoch"),
  publicKey("platformClaimFeeWallet"),
  publicKey("platformLockNftWallet"),
  u64("platformScale"),
  u64("creatorScale"),
  u64("burnScale"),
  u64("feeRate"),
  seq2(u82(), 64, "name"),
  seq2(u82(), 256, "web"),
  seq2(u82(), 256, "img"),
  publicKey("cpConfigId"),
  seq2(u82(), 224)
]);

// src/raydium/launchpad/curve/curve.ts
var import_bn37 = __toESM(require("bn.js"));

// src/raydium/launchpad/curve/constantProductCurve.ts
var import_bn33 = __toESM(require("bn.js"));

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

// src/raydium/launchpad/curve/constantProductCurve.ts
var LaunchPadConstantProductCurve = class extends CurveBase {
  static getPoolInitPriceByPool({
    poolInfo,
    decimalA,
    decimalB
  }) {
    return new decimal_default(poolInfo.virtualB.toString()).div(poolInfo.virtualA.toString()).mul(10 ** (decimalA - decimalB));
  }
  static getPoolInitPriceByInit({
    a,
    b,
    decimalA,
    decimalB
  }) {
    return new decimal_default(b.toString()).div(a.toString()).mul(10 ** (decimalA - decimalB));
  }
  static getPoolPrice({
    poolInfo,
    decimalA,
    decimalB
  }) {
    return new decimal_default(poolInfo.virtualB.add(poolInfo.realB).toString()).div(poolInfo.virtualA.sub(poolInfo.realA).toString()).mul(10 ** (decimalA - decimalB));
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
    return new decimal_default(totalFundRaising.sub(migrateFee).toString()).div(supply.sub(totalSell).sub(totalLockedAmount).toString()).mul(10 ** (decimalA - decimalB));
  }
  static getPoolEndPriceReal({
    poolInfo,
    decimalA,
    decimalB
  }) {
    const allSellToken = poolInfo.totalSellA.sub(poolInfo.realA);
    const buyAllTokenUseB = poolInfo.totalFundRaisingB.sub(poolInfo.realB);
    return new decimal_default(poolInfo.virtualB.add(poolInfo.realB.add(buyAllTokenUseB)).toString()).div(poolInfo.virtualA.sub(poolInfo.realA.add(allSellToken)).toString()).mul(10 ** (decimalA - decimalB));
  }
  static getInitParam({
    supply,
    totalFundRaising,
    totalSell,
    totalLockedAmount,
    migrateFee
  }) {
    if (supply.lte(totalSell))
      throw Error("supply need gt total sell");
    const supplyMinusSellLocked = supply.sub(totalSell).sub(totalLockedAmount);
    if (supplyMinusSellLocked.lte(new import_bn33.default(0)))
      throw Error("supplyMinusSellLocked <= 0");
    const tfMinusMf = totalFundRaising.sub(migrateFee);
    if (tfMinusMf.lte(new import_bn33.default(0)))
      throw Error("tfMinusMf <= 0");
    const numerator = tfMinusMf.mul(totalSell).mul(totalSell).div(supplyMinusSellLocked);
    const denominator = tfMinusMf.mul(totalSell).div(supplyMinusSellLocked).sub(totalFundRaising);
    if (denominator.lt(new import_bn33.default(0)))
      throw Error("supply/totalSell/totalLockedAmount diff too high");
    const x0 = numerator.div(denominator);
    const y0 = totalFundRaising.mul(totalFundRaising).div(denominator);
    if (x0.lt(new import_bn33.default(0)) || y0.lt(new import_bn33.default(0)))
      throw Error("invalid input 0");
    return {
      a: x0,
      b: y0,
      c: totalSell
    };
  }
  static buyExactIn({ poolInfo, amount }) {
    return this.getAmountOut({
      amountIn: amount,
      inputReserve: poolInfo.virtualB.add(poolInfo.realB),
      outputReserve: poolInfo.virtualA.sub(poolInfo.realA)
    });
  }
  static buyExactOut({ poolInfo, amount }) {
    return this.getAmountIn({
      amountOut: amount,
      inputReserve: poolInfo.virtualB.add(poolInfo.realB),
      outputReserve: poolInfo.virtualA.sub(poolInfo.realA)
    });
  }
  static sellExactIn({ poolInfo, amount }) {
    return this.getAmountOut({
      amountIn: amount,
      inputReserve: poolInfo.virtualA.sub(poolInfo.realA),
      outputReserve: poolInfo.virtualB.add(poolInfo.realB)
    });
  }
  static sellExactOut({ poolInfo, amount }) {
    return this.getAmountIn({
      amountOut: amount,
      inputReserve: poolInfo.virtualA.sub(poolInfo.realA),
      outputReserve: poolInfo.virtualB.add(poolInfo.realB)
    });
  }
  static getAmountOut({
    amountIn,
    inputReserve,
    outputReserve
  }) {
    const numerator = amountIn.mul(outputReserve);
    const denominator = inputReserve.add(amountIn);
    const amountOut = numerator.div(denominator);
    return amountOut;
  }
  static getAmountIn({
    amountOut,
    inputReserve,
    outputReserve
  }) {
    const numerator = inputReserve.mul(amountOut);
    const denominator = outputReserve.sub(amountOut);
    const amountIn = ceilDivBN(numerator, denominator);
    return amountIn;
  }
};

// src/raydium/launchpad/curve/fixedPriceCurve.ts
var import_bn34 = __toESM(require("bn.js"));
var FixedPriceCurve = class extends CurveBase {
  static getPoolInitPriceByPool({
    poolInfo,
    decimalA,
    decimalB
  }) {
    return new decimal_default(poolInfo.virtualB.toString()).div(poolInfo.virtualA.toString()).mul(10 ** (decimalA - decimalB));
  }
  static getPoolInitPriceByInit({
    a,
    b,
    decimalA,
    decimalB
  }) {
    return new decimal_default(b.toString()).div(a.toString()).mul(10 ** (decimalA - decimalB));
  }
  static getPoolPrice({
    poolInfo,
    decimalA,
    decimalB
  }) {
    return new decimal_default(poolInfo.virtualB.toString()).div(poolInfo.virtualA.toString()).mul(10 ** (decimalA - decimalB));
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
    return new decimal_default(totalFundRaising.sub(migrateFee).toString()).div(supply.sub(totalSell).sub(totalLockedAmount).toString()).mul(10 ** (decimalA - decimalB));
  }
  static getPoolEndPriceReal({
    poolInfo,
    decimalA,
    decimalB
  }) {
    const allSellToken = poolInfo.totalSellA.sub(poolInfo.realA);
    const buyAllTokenUseB = poolInfo.totalFundRaisingB.sub(poolInfo.realB);
    return new decimal_default(poolInfo.virtualB.add(poolInfo.realB).add(buyAllTokenUseB).toString()).div(poolInfo.virtualA.sub(poolInfo.realA).add(allSellToken).toString()).mul(10 ** (decimalA - decimalB));
  }
  static getInitParam({
    supply,
    totalFundRaising,
    totalSell,
    totalLockedAmount,
    migrateFee
  }) {
    const supplyMinusLocked = supply.sub(totalLockedAmount);
    if (supplyMinusLocked.lte(new import_bn34.default(0)))
      throw Error("invalid input 1");
    const denominator = new import_bn34.default(2).mul(totalFundRaising).sub(migrateFee);
    const numerator = totalFundRaising.mul(supplyMinusLocked);
    const totalSellExpect = numerator.div(denominator);
    return { a: totalSellExpect, b: totalFundRaising, c: totalSellExpect };
  }
  static buyExactIn({ poolInfo, amount }) {
    return this.getAmountOut({ amountIn: amount, initInput: poolInfo.virtualB, initOutput: poolInfo.virtualA });
  }
  static buyExactOut({ poolInfo, amount }) {
    return this.getAmountIn({ amountOut: amount, initInput: poolInfo.virtualB, initOutput: poolInfo.virtualA });
  }
  static sellExactIn({ poolInfo, amount }) {
    return this.getAmountOut({ amountIn: amount, initInput: poolInfo.virtualA, initOutput: poolInfo.virtualB });
  }
  static sellExactOut({ poolInfo, amount }) {
    return this.getAmountIn({ amountOut: amount, initInput: poolInfo.virtualA, initOutput: poolInfo.virtualB });
  }
  static getAmountOut({ amountIn, initInput, initOutput }) {
    const numerator = initOutput.mul(amountIn);
    const amountOut = numerator.div(initInput);
    return amountOut;
  }
  static getAmountIn({ amountOut, initInput, initOutput }) {
    const numerator = initInput.mul(amountOut);
    const amountIn = ceilDivBN(numerator, initOutput);
    return amountIn;
  }
};

// src/raydium/launchpad/curve/linearPriceCurve.ts
var import_bn36 = __toESM(require("bn.js"));

// src/raydium/launchpad/curve/func.ts
var import_bn35 = __toESM(require("bn.js"));
var MathLaunch = class {
  static _multipler(decimals) {
    return new decimal_default(10).pow(decimals);
  }
  static getPrice({ priceX64, decimalA, decimalB }) {
    const priceWithDecimals = new decimal_default(priceX64.toString()).div(this._Q64);
    const price = priceWithDecimals.mul(this._multipler(decimalA)).div(this._multipler(decimalB));
    return price;
  }
  static getPriceX64({ price, decimalA, decimalB }) {
    const priceWithDecimals = price.mul(this._multipler(decimalB)).div(this._multipler(decimalA));
    const priceX64 = new import_bn35.default(priceWithDecimals.mul(this._Q64).toFixed(0));
    return priceX64;
  }
};
__publicField(MathLaunch, "_Q64", new decimal_default(new import_bn35.default(1).shln(64).toString()));
function checkPoolToAmm({
  supply,
  totalFundRaisingB,
  totalLockedAmount,
  totalSellA,
  migrateType,
  decimalsA
}) {
  const migrateAmountA = supply.sub(totalSellA).sub(totalLockedAmount);
  const liquidity = new import_bn35.default(new decimal_default(migrateAmountA.mul(totalFundRaisingB).toString()).sqrt().toFixed(0));
  if (migrateType === "amm") {
    if (liquidity.gt(new import_bn35.default(10).pow(new import_bn35.default(decimalsA))))
      return true;
  } else if (migrateType === "cpmm") {
    if (liquidity.gt(new import_bn35.default(100)))
      return true;
  } else {
    throw Error("migrate type error");
  }
  return false;
}

// src/raydium/launchpad/curve/linearPriceCurve.ts
var LinearPriceCurve = class extends CurveBase {
  static getPoolInitPriceByPool({
    poolInfo,
    decimalA,
    decimalB
  }) {
    return new decimal_default(0);
  }
  static getPoolInitPriceByInit({
    a,
    b,
    decimalA,
    decimalB
  }) {
    return new decimal_default(0);
  }
  static getPoolPrice({
    poolInfo,
    decimalA,
    decimalB
  }) {
    return new decimal_default(poolInfo.virtualA.mul(poolInfo.realA).toString()).div(MathLaunch._Q64).mul(10 ** (decimalA - decimalB));
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
    return new decimal_default(totalFundRaising.sub(migrateFee).toString()).div(supply.sub(totalSell).sub(totalLockedAmount).toString()).mul(10 ** (decimalA - decimalB));
  }
  static getPoolEndPriceReal({
    poolInfo,
    decimalA,
    decimalB
  }) {
    const allSellToken = poolInfo.totalSellA.sub(poolInfo.realA);
    const buyAllTokenUseB = poolInfo.totalFundRaisingB.sub(poolInfo.realB);
    return new decimal_default(poolInfo.virtualB.add(poolInfo.realB).add(buyAllTokenUseB).toString()).div(poolInfo.virtualA.sub(poolInfo.realA).add(allSellToken).toString()).mul(10 ** (decimalA - decimalB));
  }
  static getInitParam({
    supply,
    totalFundRaising,
    totalSell,
    totalLockedAmount,
    migrateFee
  }) {
    const supplyMinusLocked = supply.sub(totalLockedAmount);
    if (supplyMinusLocked.lte(new import_bn36.default(0)))
      throw Error("supplyMinusLocked need gt 0");
    const denominator = totalFundRaising.mul(new import_bn36.default(3)).sub(migrateFee);
    const numerator = totalFundRaising.mul(new import_bn36.default(2)).mul(supplyMinusLocked);
    const totalSellExpect = numerator.div(denominator);
    const totalSellSquared = totalSellExpect.mul(totalSellExpect);
    const a = totalFundRaising.mul(new import_bn36.default(2)).mul(Q64).div(totalSellSquared);
    if (!a.gt(new import_bn36.default(0)))
      throw Error("a need gt 0");
    if (!MaxU64.gt(a))
      throw Error("a need lt u64 max");
    return { a, b: new import_bn36.default(0), c: totalSellExpect };
  }
  static buyExactIn({ poolInfo, amount }) {
    const newQuote = poolInfo.realB.add(amount);
    const termInsideSqrt = new import_bn36.default(2).mul(newQuote).mul(Q64).div(poolInfo.virtualA);
    const sqrtTerm = new import_bn36.default(new decimal_default(termInsideSqrt.toString()).sqrt().toFixed(0));
    const amountOut = sqrtTerm.sub(poolInfo.realA);
    return amountOut;
  }
  static buyExactOut({ poolInfo, amount }) {
    const newBase = poolInfo.realA.add(amount);
    const newBaseSquared = newBase.mul(newBase);
    const { div: _newQuoteDiv, mod: _newQuoteMod } = poolInfo.virtualA.mul(newBaseSquared).divmod(new import_bn36.default(2).mul(Q64));
    const newQuote = _newQuoteMod.isZero() ? _newQuoteDiv : _newQuoteDiv.add(new import_bn36.default(1));
    return newQuote.sub(poolInfo.realB);
  }
  static sellExactIn({ poolInfo, amount }) {
    const newBase = poolInfo.realA.sub(amount);
    const newBaseSquared = newBase.mul(newBase);
    const { div: _newQuoteDiv, mod: _newQuoteMod } = poolInfo.virtualA.mul(newBaseSquared).divmod(new import_bn36.default(2).mul(Q64));
    const newQuote = _newQuoteMod.isZero() ? _newQuoteDiv : _newQuoteDiv.add(new import_bn36.default(1));
    return poolInfo.realB.sub(newQuote);
  }
  static sellExactOut({ poolInfo, amount }) {
    const newB = poolInfo.realB.sub(amount);
    const termInsideSqrt = new import_bn36.default(2).mul(newB).mul(Q64).div(poolInfo.virtualA);
    const sqrtTerm = new import_bn36.default(new decimal_default(termInsideSqrt.toString()).sqrt().toFixed(0));
    const amountIn = poolInfo.realA.sub(sqrtTerm);
    return amountIn;
  }
};

// src/raydium/launchpad/curve/curve.ts
var Curve = class {
  static getPoolCurvePointByPoolInfo({
    curveType,
    pointCount,
    poolInfo
  }) {
    return this.getPoolCurvePointByInit({
      curveType,
      pointCount,
      supply: poolInfo.supply,
      totalFundRaising: poolInfo.totalFundRaisingB,
      totalSell: poolInfo.totalSellA,
      totalLockedAmount: poolInfo.vestingSchedule.totalLockedAmount,
      migrateFee: poolInfo.migrateFee,
      decimalA: poolInfo.mintDecimalsA,
      decimalB: poolInfo.mintDecimalsB
    });
  }
  static getPoolCurvePointByInit({
    curveType,
    pointCount,
    supply,
    totalFundRaising,
    totalSell,
    totalLockedAmount,
    migrateFee,
    decimalA,
    decimalB
  }) {
    if (pointCount < 3)
      throw Error("point count < 3");
    const curve = this.getCurve(curveType);
    const initParam = curve.getInitParam({ supply, totalFundRaising, totalSell, totalLockedAmount, migrateFee });
    const initPrice = curve.getPoolInitPriceByInit({ ...initParam, decimalA, decimalB });
    const itemStepBuy = totalFundRaising.div(new import_bn37.default(pointCount - 1));
    const zero = new import_bn37.default(0);
    const returnPoints = [{ price: initPrice, totalSellSupply: 0 }];
    const { a, b } = initParam;
    let realA = zero;
    let realB = zero;
    for (let i = 1; i < pointCount; i++) {
      const amountB = i !== pointCount - 1 ? itemStepBuy : totalFundRaising.sub(realB);
      const itemBuy = this.buyExactIn({
        poolInfo: {
          virtualA: a,
          virtualB: b,
          realA,
          realB,
          totalFundRaisingB: totalFundRaising,
          totalSellA: totalSell
        },
        amountB,
        protocolFeeRate: zero,
        platformFeeRate: zero,
        curveType,
        shareFeeRate: zero
      });
      realA = realA.add(itemBuy.amountA);
      realB = realB.add(itemBuy.amountB);
      const nowPoolPrice = this.getPrice({
        poolInfo: { virtualA: a, virtualB: b, realA, realB },
        decimalA,
        decimalB,
        curveType
      });
      returnPoints.push({
        price: nowPoolPrice,
        totalSellSupply: new decimal_default(realA.toString()).div(10 ** decimalA).toNumber()
      });
    }
    return returnPoints;
  }
  static getPoolInitPriceByPool({
    poolInfo,
    decimalA,
    decimalB,
    curveType
  }) {
    const curve = this.getCurve(curveType);
    return curve.getPoolInitPriceByPool({ poolInfo, decimalA, decimalB });
  }
  static getPoolInitPriceByInit({
    a,
    b,
    decimalA,
    decimalB,
    curveType
  }) {
    const curve = this.getCurve(curveType);
    return curve.getPoolInitPriceByInit({ a, b, decimalA, decimalB });
  }
  static getPrice({
    poolInfo,
    curveType,
    decimalA,
    decimalB
  }) {
    const curve = this.getCurve(curveType);
    return curve.getPoolPrice({ poolInfo, decimalA, decimalB });
  }
  static getEndPrice({
    poolInfo,
    curveType,
    decimalA,
    decimalB
  }) {
    const curve = this.getCurve(curveType);
    return curve.getPoolPrice({ poolInfo, decimalA, decimalB });
  }
  static getPoolEndPriceReal({
    poolInfo,
    curveType,
    decimalA,
    decimalB
  }) {
    const curve = this.getCurve(curveType);
    return curve.getPoolEndPriceReal({ poolInfo, decimalA, decimalB });
  }
  static checkParam({
    supply,
    totalFundRaising,
    totalSell,
    totalLockedAmount,
    decimals,
    config: config2,
    migrateType
  }) {
    if (Number(decimals) !== 6)
      throw Error("decimals = 6");
    const maxLockedA = supply.mul(config2.maxLockRate).div(FEE_RATE_DENOMINATOR_VALUE);
    if (maxLockedA.lt(totalLockedAmount))
      throw Error("total lock amount gte max lock amount");
    if (supply.lt(config2.minSupplyA.mul(new import_bn37.default(10 ** decimals))))
      throw Error("supply lt min supply");
    const minSellA = supply.mul(config2.minSellRateA).div(FEE_RATE_DENOMINATOR_VALUE);
    if (totalSell.lt(minSellA))
      throw Error("invalid input");
    if (totalFundRaising.lt(config2.minFundRaisingB))
      throw Error("total fund raising lt min fund raising");
    const amountMigrate = supply.sub(totalSell).sub(totalLockedAmount);
    const minAmountMigrate = supply.mul(config2.minMigrateRateA).div(FEE_RATE_DENOMINATOR_VALUE);
    if (amountMigrate.lt(minAmountMigrate))
      throw Error("migrate lt min migrate amount");
    const migrateAmountA = supply.sub(totalSell).sub(totalLockedAmount);
    const liquidity = new import_bn37.default(new decimal_default(migrateAmountA.mul(totalFundRaising).toString()).sqrt().toFixed(0));
    if (migrateType === "amm") {
      const minLockLp = new import_bn37.default(10).pow(new import_bn37.default(decimals));
      if (liquidity.lte(minLockLp))
        throw Error("check migrate lp error");
    } else if (migrateType === "cpmm") {
      const minLockLp = new import_bn37.default(100);
      if (liquidity.lte(minLockLp))
        throw Error("check migrate lp error");
    } else {
      throw Error("migrate type error");
    }
  }
  static buyExactIn({
    poolInfo,
    amountB,
    protocolFeeRate,
    platformFeeRate,
    curveType,
    shareFeeRate
  }) {
    const feeRate = protocolFeeRate.add(shareFeeRate).add(platformFeeRate);
    const _totalFee = this.calculateFee({ amount: amountB, feeRate });
    const amountLessFeeB = amountB.sub(_totalFee);
    const curve = this.getCurve(curveType);
    const _amountA = curve.buyExactIn({ poolInfo, amount: amountLessFeeB });
    const remainingAmountA = poolInfo.totalSellA.sub(poolInfo.realA);
    let amountA;
    let realAmountB;
    let totalFee;
    if (_amountA.gt(remainingAmountA)) {
      amountA = remainingAmountA;
      const amountLessFeeB2 = curve.buyExactOut({
        poolInfo,
        amount: amountA
      });
      realAmountB = this.calculatePreFee({ postFeeAmount: amountLessFeeB2, feeRate });
      totalFee = realAmountB.sub(amountLessFeeB2);
    } else {
      amountA = _amountA;
      realAmountB = amountB;
      totalFee = _totalFee;
    }
    const splitFee = this.splitFee({ totalFee, protocolFeeRate, platformFeeRate, shareFeeRate });
    return { amountA, amountB: realAmountB, splitFee };
  }
  static buyExactOut({
    poolInfo,
    amountA,
    protocolFeeRate,
    platformFeeRate,
    curveType,
    shareFeeRate
  }) {
    const remainingAmountA = poolInfo.totalSellA.sub(poolInfo.realA);
    let realAmountA = amountA;
    if (amountA.gt(remainingAmountA)) {
      realAmountA = remainingAmountA;
    } else {
    }
    const curve = this.getCurve(curveType);
    const amountInLessFeeB = curve.buyExactOut({ poolInfo, amount: amountA });
    const totalFeeRate = protocolFeeRate.add(shareFeeRate).add(platformFeeRate);
    const amountB = this.calculatePreFee({ postFeeAmount: amountInLessFeeB, feeRate: totalFeeRate });
    const totalFee = amountB.sub(amountInLessFeeB);
    const splitFee = this.splitFee({ totalFee, protocolFeeRate, platformFeeRate, shareFeeRate });
    return { amountA: realAmountA, amountB, splitFee };
  }
  static sellExactIn({
    poolInfo,
    amountA,
    protocolFeeRate,
    platformFeeRate,
    curveType,
    shareFeeRate
  }) {
    const curve = this.getCurve(curveType);
    const amountB = curve.sellExactIn({ poolInfo, amount: amountA });
    const totalFee = this.calculateFee({
      amount: amountB,
      feeRate: protocolFeeRate.add(shareFeeRate).add(platformFeeRate)
    });
    const splitFee = this.splitFee({ totalFee, protocolFeeRate, platformFeeRate, shareFeeRate });
    return { amountA, amountB: amountB.sub(totalFee), splitFee };
  }
  static sellExactOut({
    poolInfo,
    amountB,
    protocolFeeRate,
    platformFeeRate,
    curveType,
    shareFeeRate
  }) {
    const totalFeeRate = protocolFeeRate.add(shareFeeRate).add(platformFeeRate);
    const amountOutWithFeeB = this.calculatePreFee({ postFeeAmount: amountB, feeRate: totalFeeRate });
    if (poolInfo.realB.lt(amountOutWithFeeB))
      throw Error("Insufficient liquidity");
    const totalFee = amountOutWithFeeB.sub(amountB);
    const curve = Curve.getCurve(curveType);
    const amountA = curve.sellExactOut({ poolInfo, amount: amountOutWithFeeB });
    if (amountA.gt(poolInfo.realA))
      throw Error();
    const splitFee = this.splitFee({ totalFee, protocolFeeRate, platformFeeRate, shareFeeRate });
    return { amountA, amountB, splitFee };
  }
  static splitFee({
    totalFee,
    protocolFeeRate,
    platformFeeRate,
    shareFeeRate
  }) {
    const totalFeeRate = protocolFeeRate.add(platformFeeRate).add(shareFeeRate);
    const platformFee = totalFeeRate.isZero() ? new import_bn37.default(0) : totalFee.mul(platformFeeRate).div(totalFeeRate);
    const shareFee = totalFeeRate.isZero() ? new import_bn37.default(0) : totalFee.mul(shareFeeRate).div(totalFeeRate);
    const protocolFee = totalFee.sub(platformFee).sub(shareFee);
    return { platformFee, shareFee, protocolFee };
  }
  static calculateFee({ amount, feeRate }) {
    return ceilDiv(amount, feeRate, FEE_RATE_DENOMINATOR_VALUE);
  }
  static calculatePreFee({ postFeeAmount, feeRate }) {
    if (feeRate.isZero())
      return postFeeAmount;
    const numerator = postFeeAmount.mul(FEE_RATE_DENOMINATOR_VALUE);
    const denominator = FEE_RATE_DENOMINATOR_VALUE.sub(feeRate);
    return numerator.add(denominator).sub(new import_bn37.default(1)).div(denominator);
  }
  static getCurve(curveType) {
    switch (curveType) {
      case 0:
        return LaunchPadConstantProductCurve;
      case 1:
        return FixedPriceCurve;
      case 2:
        return LinearPriceCurve;
    }
    throw Error("find curve error");
  }
};

// src/raydium/launchpad/launchpad.ts
var LaunchpadPoolInitParam = {
  initPriceX64: new import_bn38.default("515752397214619"),
  supply: new import_bn38.default(1e15),
  totalSellA: new import_bn38.default(7931e11),
  totalFundRaisingB: new import_bn38.default(85e9),
  totalLockedAmount: new import_bn38.default("0"),
  cliffPeriod: new import_bn38.default("0"),
  unlockPeriod: new import_bn38.default("0"),
  decimals: 6,
  virtualA: new import_bn38.default("1073471847374405"),
  virtualB: new import_bn38.default("30050573465"),
  realA: new import_bn38.default(0),
  realB: new import_bn38.default(0),
  protocolFee: new import_bn38.default(0),
  platformId: new import_web338.PublicKey("4Bu96XjU84XjPDSpveTVf6LYGCkfW5FK7SNkREWcEfV4"),
  vestingSchedule: {
    totalLockedAmount: new import_bn38.default(0),
    cliffPeriod: new import_bn38.default(0),
    unlockPeriod: new import_bn38.default(0),
    startTime: new import_bn38.default(0),
    totalAllocatedShare: new import_bn38.default(0)
  }
};
var SLIPPAGE_UNIT = new import_bn38.default(1e4);
var LaunchpadModule = class extends ModuleBase {
  constructor(params) {
    super(params);
  }
  async createLaunchpad({
    programId = LAUNCHPAD_PROGRAM,
    authProgramId,
    platformId = LaunchpadPoolInitParam.platformId,
    mintA,
    decimals = 6,
    mintBDecimals = 9,
    name,
    symbol,
    uri,
    migrateType,
    configId,
    configInfo: propConfigInfo,
    platformFeeRate,
    txVersion,
    computeBudgetConfig,
    txTipConfig,
    feePayer,
    buyAmount,
    minMintAAmount,
    slippage,
    associatedOnly = true,
    checkCreateATAOwner = false,
    extraSigners,
    ...extraConfigs
  }) {
    const txBuilder = this.createTxBuilder(feePayer);
    authProgramId = authProgramId ?? getPdaLaunchpadAuth(programId).publicKey;
    let configInfo = propConfigInfo;
    if (!configInfo && configId) {
      const r = await this.scope.connection.getAccountInfo(configId);
      if (r)
        configInfo = LaunchpadConfig.decode(r.data);
    }
    if (!configInfo)
      this.logAndCreateError("config not found");
    const mintB = configInfo.mintB;
    const curType = configInfo.curveType;
    const { publicKey: poolId } = getPdaLaunchpadPoolId(programId, mintA, mintB);
    const { publicKey: vaultA } = getPdaLaunchpadVaultId(programId, poolId, mintA);
    const { publicKey: vaultB } = getPdaLaunchpadVaultId(programId, poolId, mintB);
    const { publicKey: metaId } = getPdaMetadataKey(mintA);
    console.log(`create token: ${mintA.toBase58()}, mintB: ${mintB.toBase58()}, decimals A:${decimals}/B:${mintBDecimals}, config:${configId.toBase58()}`);
    if (symbol.length > 10)
      this.logAndCreateError("Symbol length should shorter than 11");
    if (!uri)
      this.logAndCreateError("uri should not empty");
    if (buyAmount.lte(new import_bn38.default(0)))
      this.logAndCreateError("buy amount should gt 0:", buyAmount.toString());
    const supply = extraConfigs?.supply ?? LaunchpadPoolInitParam.supply;
    const totalSellA = extraConfigs?.totalSellA ?? LaunchpadPoolInitParam.totalSellA;
    const totalFundRaisingB = extraConfigs?.totalFundRaisingB ?? LaunchpadPoolInitParam.totalFundRaisingB;
    const totalLockedAmount = extraConfigs?.totalLockedAmount ?? new import_bn38.default(0);
    let defaultPlatformFeeRate = platformFeeRate;
    if (!platformFeeRate) {
      const platformData = await this.scope.connection.getAccountInfo(platformId);
      if (!platformData)
        this.logAndCreateError("platform id not found:", platformId.toString());
      defaultPlatformFeeRate = PlatformConfig.decode(platformData.data).feeRate;
    }
    const curve = Curve.getCurve(configInfo.curveType);
    const initParam = curve.getInitParam({
      supply,
      totalFundRaising: totalFundRaisingB,
      totalSell: totalSellA,
      totalLockedAmount,
      migrateFee: configInfo.migrateFee
    });
    const poolInfo = {
      epoch: new import_bn38.default(896),
      bump: 254,
      status: 0,
      mintDecimalsA: decimals,
      mintDecimalsB: mintBDecimals,
      supply,
      totalSellA,
      mintA: new import_web338.PublicKey(mintA),
      mintB,
      virtualA: initParam.a,
      virtualB: initParam.b,
      realA: LaunchpadPoolInitParam.realA,
      realB: LaunchpadPoolInitParam.realB,
      migrateFee: configInfo.migrateFee,
      migrateType: migrateType === "amm" ? 0 : 1,
      protocolFee: LaunchpadPoolInitParam.protocolFee,
      platformFee: defaultPlatformFeeRate,
      platformId,
      configId,
      vaultA,
      vaultB,
      creator: this.scope.ownerPubKey,
      totalFundRaisingB,
      vestingSchedule: {
        totalLockedAmount,
        cliffPeriod: new import_bn38.default(0),
        unlockPeriod: new import_bn38.default(0),
        startTime: new import_bn38.default(0),
        totalAllocatedShare: new import_bn38.default(0)
      }
    };
    const initCurve = Curve.getCurve(configInfo.curveType);
    const { c } = initCurve.getInitParam({
      supply: poolInfo.supply,
      totalFundRaising: poolInfo.totalFundRaisingB,
      totalLockedAmount,
      totalSell: configInfo.curveType === 0 ? poolInfo.totalSellA : new import_bn38.default(0),
      migrateFee: configInfo.migrateFee
    });
    try {
      Curve.checkParam({
        supply: poolInfo.supply,
        totalFundRaising: poolInfo.totalFundRaisingB,
        totalSell: c,
        totalLockedAmount,
        decimals: poolInfo.mintDecimalsA,
        config: configInfo,
        migrateType
      });
      console.log("check init params success");
    } catch (e) {
      this.logAndCreateError(`check create mint params failed, ${e.message}`);
    }
    txBuilder.addInstruction({
      instructions: [
        initialize(programId, feePayer ?? this.scope.ownerPubKey, this.scope.ownerPubKey, configId, platformId, authProgramId, poolId, mintA, mintB, vaultA, vaultB, metaId, import_spl_token28.TOKEN_PROGRAM_ID, import_spl_token28.TOKEN_PROGRAM_ID, decimals, name, symbol, uri || "https://", {
          type: curType === 0 ? "ConstantCurve" : curType === 1 ? "FixedCurve" : curType === 2 ? "LinearCurve" : "ConstantCurve",
          totalSellA,
          migrateType,
          supply,
          totalFundRaisingB
        }, totalLockedAmount, extraConfigs?.cliffPeriod ?? new import_bn38.default(0), extraConfigs?.unlockPeriod ?? new import_bn38.default(0))
      ]
    });
    let outAmount = new import_bn38.default(0);
    let splitIns;
    if (extraSigners?.length)
      txBuilder.addInstruction({ signers: extraSigners });
    if (!extraConfigs.createOnly) {
      const { builder, extInfo } = await this.buyToken({
        programId,
        authProgramId,
        mintA,
        mintB,
        poolInfo,
        buyAmount,
        minMintAAmount,
        shareFeeRate: extraConfigs.shareFeeRate,
        shareFeeReceiver: extraConfigs.shareFeeReceiver,
        configInfo,
        platformFeeRate: defaultPlatformFeeRate,
        slippage,
        associatedOnly,
        checkCreateATAOwner
      });
      txBuilder.addInstruction({ ...builder.AllTxData });
      outAmount = extInfo.outAmount;
      splitIns = (this.scope.cluster === "devnet" || txVersion === 1 /* LEGACY */) && extraConfigs.shareFeeReceiver ? [builder.allInstructions[0]] : void 0;
    }
    txBuilder.addTipInstruction(txTipConfig);
    if (txVersion === 0 /* V0 */)
      return txBuilder.sizeCheckBuildV0({
        computeBudgetConfig,
        outAmount,
        splitIns,
        address: {
          ...poolInfo,
          poolId
        }
      });
    return txBuilder.sizeCheckBuild({
      computeBudgetConfig,
      outAmount,
      splitIns,
      address: {
        ...poolInfo,
        poolId
      }
    });
  }
  async buyToken({
    programId = LAUNCHPAD_PROGRAM,
    authProgramId,
    mintA,
    mintB = import_spl_token28.NATIVE_MINT,
    poolInfo: propPoolInfo,
    configInfo: propConfigInfo,
    platformFeeRate,
    txVersion,
    computeBudgetConfig,
    txTipConfig,
    feePayer,
    buyAmount,
    minMintAAmount: propMinMintAAmount,
    slippage,
    shareFeeRate = new import_bn38.default(0),
    shareFeeReceiver,
    associatedOnly = true,
    checkCreateATAOwner = false
  }) {
    if (buyAmount.lte(new import_bn38.default(0)))
      this.logAndCreateError("buy amount should gt 0:", buyAmount.toString());
    const txBuilder = this.createTxBuilder(feePayer);
    const { publicKey: poolId } = getPdaLaunchpadPoolId(programId, mintA, mintB);
    authProgramId = authProgramId ?? getPdaLaunchpadAuth(programId).publicKey;
    let userTokenAccountA = null;
    let userTokenAccountB = null;
    const mintBUseSOLBalance = mintB.equals(import_spl_token28.NATIVE_MINT);
    const { account: _ownerTokenAccountA, instructionParams: _tokenAccountAInstruction } = await this.scope.account.getOrCreateTokenAccount({
      mint: mintA,
      owner: this.scope.ownerPubKey,
      createInfo: {
        payer: this.scope.ownerPubKey,
        amount: 0
      },
      skipCloseAccount: true,
      notUseTokenAccount: false,
      associatedOnly,
      checkCreateATAOwner
    });
    if (_ownerTokenAccountA)
      userTokenAccountA = _ownerTokenAccountA;
    txBuilder.addInstruction(_tokenAccountAInstruction || {});
    if (userTokenAccountA === void 0)
      this.logAndCreateError(`cannot found mintA(${mintA.toBase58()}) token accounts`, "tokenAccounts", this.scope.account.tokenAccounts);
    const { account: _ownerTokenAccountB, instructionParams: _tokenAccountBInstruction } = await this.scope.account.getOrCreateTokenAccount({
      mint: mintB,
      owner: this.scope.ownerPubKey,
      createInfo: mintBUseSOLBalance ? {
        payer: this.scope.ownerPubKey,
        amount: buyAmount
      } : void 0,
      skipCloseAccount: !mintBUseSOLBalance,
      notUseTokenAccount: mintBUseSOLBalance,
      associatedOnly: mintBUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    if (_ownerTokenAccountB)
      userTokenAccountB = _ownerTokenAccountB;
    txBuilder.addInstruction(_tokenAccountBInstruction || {});
    if (userTokenAccountB === void 0)
      this.logAndCreateError(`cannot found mintB(${mintB.toBase58()}) token accounts`, "tokenAccounts", this.scope.account.tokenAccounts);
    let poolInfo = propPoolInfo;
    if (!poolInfo) {
      const poolData = await this.scope.connection.getAccountInfo(poolId, { commitment: "processed" });
      if (!poolData)
        this.logAndCreateError("cannot found pool:", poolId.toBase58());
      poolInfo = LaunchpadPool.decode(poolData.data);
    }
    let configInfo = propConfigInfo;
    const allData = await getMultipleAccountsInfoWithCustomFlags(this.scope.connection, [configInfo ? void 0 : poolInfo.configId, platformFeeRate ? void 0 : poolInfo.platformId].filter(Boolean).map((key) => ({ pubkey: key })));
    if (!configInfo) {
      const data = allData.find((d) => d.pubkey.equals(poolInfo.configId));
      if (!data || !data.accountInfo)
        this.logAndCreateError("config not found: ", poolInfo.configId.toBase58());
      configInfo = LaunchpadConfig.decode(data.accountInfo.data);
    }
    if (!platformFeeRate) {
      const data = allData.find((d) => d.pubkey.equals(poolInfo.platformId));
      if (!data || !data.accountInfo)
        this.logAndCreateError("platform info not found: ", poolInfo.configId.toBase58());
      platformFeeRate = PlatformConfig.decode(data.accountInfo.data).feeRate;
    }
    const calculatedAmount = Curve.buyExactIn({
      poolInfo,
      amountB: buyAmount,
      protocolFeeRate: configInfo.tradeFeeRate,
      platformFeeRate,
      curveType: configInfo.curveType,
      shareFeeRate
    });
    const decimalAmountA = new decimal_default(calculatedAmount.amountA.toString());
    const multiplier = slippage ? new decimal_default(SLIPPAGE_UNIT.sub(slippage).toNumber() / SLIPPAGE_UNIT.toNumber()).clampedTo(0, 1) : new decimal_default(1);
    const minMintAAmount = propMinMintAAmount ?? (slippage ? new import_bn38.default(decimalAmountA.mul(multiplier).toFixed(0)) : calculatedAmount.amountA);
    if (calculatedAmount.amountB.lt(buyAmount)) {
      console.log(`maximum ${mintA.toBase58()} amount can buy is ${calculatedAmount.amountA.toString()}, input ${mintB.toBase58()} amount: ${calculatedAmount.amountB.toString()}`);
    }
    const shareATA = shareFeeReceiver ? getATAAddress(shareFeeReceiver, mintB, import_spl_token28.TOKEN_PROGRAM_ID).publicKey : void 0;
    if (shareATA) {
      txBuilder.addInstruction({
        instructions: [
          (0, import_spl_token28.createAssociatedTokenAccountIdempotentInstruction)(this.scope.ownerPubKey, shareATA, shareFeeReceiver, mintB)
        ]
      });
    }
    txBuilder.addInstruction({
      instructions: [
        buyExactInInstruction(programId, this.scope.ownerPubKey, authProgramId, poolInfo.configId, poolInfo.platformId, poolId, userTokenAccountA, userTokenAccountB, poolInfo.vaultA, poolInfo.vaultB, mintA, mintB, import_spl_token28.TOKEN_PROGRAM_ID, import_spl_token28.TOKEN_PROGRAM_ID, calculatedAmount.amountB.lt(buyAmount) ? calculatedAmount.amountB : buyAmount, minMintAAmount, shareFeeRate, shareATA)
      ]
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion,
      extInfo: {
        outAmount: minMintAAmount
      }
    });
  }
  async sellToken({
    programId = LAUNCHPAD_PROGRAM,
    authProgramId,
    mintA,
    mintB = import_spl_token28.NATIVE_MINT,
    poolInfo: propPoolInfo,
    configInfo: propConfigInfo,
    platformFeeRate,
    txVersion,
    computeBudgetConfig,
    txTipConfig,
    feePayer,
    sellAmount,
    minAmountB: propMinAmountB,
    slippage,
    shareFeeRate = new import_bn38.default(0),
    shareFeeReceiver,
    associatedOnly = true,
    checkCreateATAOwner = false
  }) {
    authProgramId = authProgramId ?? getPdaLaunchpadAuth(programId).publicKey;
    const txBuilder = this.createTxBuilder(feePayer);
    if (sellAmount.lte(new import_bn38.default(0)))
      this.logAndCreateError("sell amount should be gt 0");
    const { publicKey: poolId } = getPdaLaunchpadPoolId(programId, mintA, mintB);
    let userTokenAccountA = null;
    let userTokenAccountB = null;
    const mintBUseSOLBalance = mintB.equals(import_spl_token28.NATIVE_MINT);
    const { account: _ownerTokenAccountA, instructionParams: _tokenAccountAInstruction } = await this.scope.account.getOrCreateTokenAccount({
      mint: mintA,
      owner: this.scope.ownerPubKey,
      createInfo: void 0,
      skipCloseAccount: true,
      notUseTokenAccount: false,
      associatedOnly,
      checkCreateATAOwner
    });
    if (_ownerTokenAccountA)
      userTokenAccountA = _ownerTokenAccountA;
    txBuilder.addInstruction(_tokenAccountAInstruction || {});
    if (userTokenAccountA === void 0)
      this.logAndCreateError("cannot found mintA token accounts", "tokenAccounts", this.scope.account.tokenAccounts);
    const { account: _ownerTokenAccountB, instructionParams: _tokenAccountBInstruction } = await this.scope.account.getOrCreateTokenAccount({
      mint: mintB,
      owner: this.scope.ownerPubKey,
      createInfo: mintBUseSOLBalance ? {
        payer: this.scope.ownerPubKey,
        amount: 0
      } : void 0,
      skipCloseAccount: !mintBUseSOLBalance,
      notUseTokenAccount: mintBUseSOLBalance,
      associatedOnly: mintBUseSOLBalance ? false : associatedOnly,
      checkCreateATAOwner
    });
    if (_ownerTokenAccountB)
      userTokenAccountB = _ownerTokenAccountB;
    txBuilder.addInstruction(_tokenAccountBInstruction || {});
    if (userTokenAccountB === void 0)
      this.logAndCreateError("cannot found mintB token accounts", "tokenAccounts", this.scope.account.tokenAccounts);
    let poolInfo = propPoolInfo;
    if (!poolInfo) {
      const poolData = await this.scope.connection.getAccountInfo(poolId, { commitment: "processed" });
      if (!poolData)
        this.logAndCreateError("cannot found pool", poolId.toBase58());
      poolInfo = LaunchpadPool.decode(poolData.data);
    }
    let configInfo = propConfigInfo;
    const allData = await getMultipleAccountsInfoWithCustomFlags(this.scope.connection, [configInfo ? void 0 : poolInfo.configId, platformFeeRate ? void 0 : poolInfo.platformId].filter(Boolean).map((key) => ({ pubkey: key })));
    if (!configInfo) {
      const data = allData.find((d) => d.pubkey.equals(poolInfo.configId));
      if (!data || !data.accountInfo)
        this.logAndCreateError("config not found: ", poolInfo.configId.toBase58());
      configInfo = LaunchpadConfig.decode(data.accountInfo.data);
    }
    if (!platformFeeRate) {
      const data = allData.find((d) => d.pubkey.equals(poolInfo.platformId));
      if (!data || !data.accountInfo)
        this.logAndCreateError("platform info not found: ", poolInfo.configId.toBase58());
      platformFeeRate = PlatformConfig.decode(data.accountInfo.data).feeRate;
    }
    const calculatedAmount = Curve.sellExactIn({
      poolInfo,
      amountA: sellAmount,
      protocolFeeRate: configInfo.tradeFeeRate,
      platformFeeRate,
      curveType: configInfo.curveType,
      shareFeeRate
    });
    const decimalAmountB = new decimal_default(calculatedAmount.amountB.toString());
    const multiplier = slippage ? new decimal_default(SLIPPAGE_UNIT.sub(slippage).toNumber() / SLIPPAGE_UNIT.toNumber()).clampedTo(0, 1) : new decimal_default(1);
    const minAmountB = propMinAmountB ?? (slippage ? new import_bn38.default(decimalAmountB.mul(multiplier).toFixed(0)) : calculatedAmount.amountB);
    if (minAmountB.lte(new import_bn38.default(0)))
      this.logAndCreateError(`out ${mintB.toBase58()} amount should be gt 0`);
    const shareATA = shareFeeReceiver ? getATAAddress(shareFeeReceiver, mintB, import_spl_token28.TOKEN_PROGRAM_ID).publicKey : void 0;
    if (shareATA) {
      txBuilder.addInstruction({
        instructions: [
          (0, import_spl_token28.createAssociatedTokenAccountIdempotentInstruction)(this.scope.ownerPubKey, shareATA, shareFeeReceiver, mintB)
        ]
      });
    }
    txBuilder.addInstruction({
      instructions: [
        sellExactInInstruction(programId, this.scope.ownerPubKey, authProgramId, poolInfo.configId, poolInfo.platformId, poolId, userTokenAccountA, userTokenAccountB, poolInfo.vaultA, poolInfo.vaultB, mintA, mintB, import_spl_token28.TOKEN_PROGRAM_ID, import_spl_token28.TOKEN_PROGRAM_ID, calculatedAmount.amountA.lt(sellAmount) ? calculatedAmount.amountA : sellAmount, minAmountB, shareFeeRate, shareATA)
      ]
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion,
      extInfo: {
        outAmount: minAmountB
      }
    });
  }
  async createPlatformConfig({
    programId = LAUNCHPAD_PROGRAM,
    platformAdmin,
    platformClaimFeeWallet,
    platformLockNftWallet,
    cpConfigId,
    migrateCpLockNftScale,
    feeRate,
    name,
    web,
    img,
    txVersion,
    computeBudgetConfig,
    txTipConfig,
    feePayer
  }) {
    const txBuilder = this.createTxBuilder(feePayer);
    const { publicKey: platformId } = getPdaPlatformId(programId, platformAdmin);
    txBuilder.addInstruction({
      instructions: [
        createPlatformConfig(programId, platformAdmin, platformClaimFeeWallet, platformLockNftWallet, platformId, cpConfigId, migrateCpLockNftScale, feeRate, name, web, img)
      ]
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion,
      extInfo: {
        platformId
      }
    });
  }
  async updatePlatformConfig({
    programId = LAUNCHPAD_PROGRAM,
    platformAdmin,
    platformId: propsPlatformId,
    updateInfo,
    txVersion,
    computeBudgetConfig,
    txTipConfig,
    feePayer
  }) {
    const txBuilder = this.createTxBuilder(feePayer);
    const platformId = propsPlatformId ?? getPdaPlatformId(programId, platformAdmin).publicKey;
    txBuilder.addInstruction({
      instructions: [updatePlatformConfig(programId, platformAdmin, platformId, updateInfo)]
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion
    });
  }
  async claimPlatformFee({
    programId = LAUNCHPAD_PROGRAM,
    authProgramId,
    platformId,
    poolId,
    platformClaimFeeWallet,
    mintB: propsMintB,
    vaultB: propsVaultB,
    mintBProgram = import_spl_token28.TOKEN_PROGRAM_ID,
    txVersion,
    computeBudgetConfig,
    txTipConfig,
    feePayer
  }) {
    const txBuilder = this.createTxBuilder(feePayer);
    authProgramId = authProgramId ?? getPdaLaunchpadAuth(programId).publicKey;
    let mintB = propsMintB;
    let vaultB = propsVaultB;
    if (!mintB) {
      const poolData = await this.scope.connection.getAccountInfo(poolId, { commitment: "processed" });
      if (!poolData)
        this.logAndCreateError("cannot found pool:", poolId.toBase58());
      const poolInfo = LaunchpadPool.decode(poolData.data);
      const configData = await this.scope.connection.getAccountInfo(poolInfo.configId, { commitment: "processed" });
      if (!configData)
        this.logAndCreateError("cannot found config:", poolInfo.configId.toBase58());
      const configInfo = LaunchpadConfig.decode(configData.data);
      mintB = configInfo.mintB;
      vaultB = vaultB ?? poolInfo.vaultB;
    }
    if (!mintB || !vaultB) {
      this.logAndCreateError("cannot found mint info, mintB: ", mintB.toBase58(), ", vaultB: ", vaultB?.toBase58() ?? "");
    }
    const userTokenAccountB = getATAAddress(this.scope.ownerPubKey, mintB, import_spl_token28.TOKEN_PROGRAM_ID).publicKey;
    txBuilder.addInstruction({
      instructions: [
        (0, import_spl_token28.createAssociatedTokenAccountIdempotentInstruction)(this.scope.ownerPubKey, userTokenAccountB, this.scope.ownerPubKey, mintB)
      ]
    });
    txBuilder.addInstruction({
      instructions: [
        claimPlatformFee(programId, platformClaimFeeWallet, authProgramId, poolId, platformId, vaultB, userTokenAccountB, mintB, mintBProgram)
      ]
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion
    });
  }
  async claimAllPlatformFee({
    programId = LAUNCHPAD_PROGRAM,
    authProgramId,
    platformId,
    platformClaimFeeWallet,
    txVersion,
    computeBudgetConfig,
    txTipConfig,
    feePayer
  }) {
    const txBuilder = this.createTxBuilder(feePayer);
    authProgramId = authProgramId ?? getPdaLaunchpadAuth(programId).publicKey;
    const allPlatformPool = await this.scope.connection.getProgramAccounts(programId, {
      filters: [
        { dataSize: LaunchpadPool.span },
        { memcmp: { offset: LaunchpadPool.offsetOf("platformId"), bytes: platformId.toString() } }
      ]
    });
    allPlatformPool.forEach((data) => {
      const pool = LaunchpadPool.decode(data.account.data);
      const userTokenAccountB = getATAAddress(this.scope.ownerPubKey, pool.mintB, import_spl_token28.TOKEN_PROGRAM_ID).publicKey;
      txBuilder.addInstruction({
        instructions: [
          (0, import_spl_token28.createAssociatedTokenAccountIdempotentInstruction)(this.scope.ownerPubKey, userTokenAccountB, this.scope.ownerPubKey, pool.mintB)
        ]
      });
      txBuilder.addInstruction({
        instructions: [
          claimPlatformFee(programId, platformClaimFeeWallet, authProgramId, data.pubkey, platformId, pool.vaultB, userTokenAccountB, pool.mintB, import_spl_token28.TOKEN_PROGRAM_ID)
        ]
      });
    });
    txBuilder.addTipInstruction(txTipConfig);
    if (txVersion === 0 /* V0 */)
      return txBuilder.sizeCheckBuildV0({ computeBudgetConfig });
    return txBuilder.sizeCheckBuild({
      computeBudgetConfig
    });
  }
  async createVesting({
    programId = LAUNCHPAD_PROGRAM,
    poolId,
    beneficiary,
    shareAmount,
    txVersion,
    computeBudgetConfig,
    txTipConfig,
    feePayer
  }) {
    const txBuilder = this.createTxBuilder(feePayer);
    const vestingRecord = getPdaVestId(programId, poolId, beneficiary).publicKey;
    txBuilder.addInstruction({
      instructions: [
        createVestingAccount(programId, this.scope.ownerPubKey, beneficiary, poolId, vestingRecord, shareAmount)
      ]
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion
    });
  }
  async claimVesting({
    programId = LAUNCHPAD_PROGRAM,
    poolId,
    poolInfo: propsPoolInfo,
    txVersion,
    computeBudgetConfig,
    txTipConfig,
    feePayer,
    associatedOnly = true,
    checkCreateATAOwner = false
  }) {
    const txBuilder = this.createTxBuilder(feePayer);
    const authProgramId = getPdaLaunchpadAuth(programId).publicKey;
    const vestingRecord = getPdaVestId(programId, poolId, this.scope.ownerPubKey).publicKey;
    let poolInfo = propsPoolInfo;
    if (!poolInfo) {
      const r = await this.scope.connection.getAccountInfo(poolId);
      if (!r)
        this.logAndCreateError("pool not found");
      poolInfo = LaunchpadPool.decode(r.data);
    }
    const userTokenAccountA = getATAAddress(this.scope.ownerPubKey, poolInfo.mintA, import_spl_token28.TOKEN_PROGRAM_ID).publicKey;
    txBuilder.addInstruction({
      instructions: [
        (0, import_spl_token28.createAssociatedTokenAccountIdempotentInstruction)(this.scope.ownerPubKey, userTokenAccountA, this.scope.ownerPubKey, poolInfo.mintA)
      ]
    });
    txBuilder.addInstruction({
      instructions: [
        claimVestedToken(programId, this.scope.ownerPubKey, authProgramId, poolId, vestingRecord, userTokenAccountA, poolInfo.vaultA, poolInfo.mintA, import_spl_token28.TOKEN_PROGRAM_ID)
      ]
    });
    txBuilder.addCustomComputeBudget(computeBudgetConfig);
    txBuilder.addTipInstruction(txTipConfig);
    return txBuilder.versionBuild({
      txVersion
    });
  }
  async getRpcPoolInfo({
    poolId
  }) {
    const data = await this.getRpcPoolsInfo({ poolIdList: [poolId] });
    return data.poolInfoMap[poolId.toBase58()];
  }
  async getRpcPoolsInfo({
    poolIdList,
    config: config2
  }) {
    const accounts = await getMultipleAccountsInfoWithCustomFlags(this.scope.connection, poolIdList.map((i) => ({ pubkey: i })), config2);
    const poolInfoMap = {};
    const configKeys = [];
    for (let i = 0; i < poolIdList.length; i++) {
      const item = accounts[i];
      if (item === null || !item.accountInfo)
        throw Error("fetch pool info error: " + poolIdList[i].toBase58());
      const poolInfo = LaunchpadPool.decode(item.accountInfo.data);
      poolInfoMap[poolIdList[i].toBase58()] = {
        ...poolInfo,
        poolId: item.accountInfo.owner
      };
      configKeys.push(poolInfo.configId);
    }
    const configAccounts = await getMultipleAccountsInfoWithCustomFlags(this.scope.connection, configKeys.map((i) => ({ pubkey: i })), config2);
    const configInfoMap = {};
    for (let i = 0; i < configKeys.length; i++) {
      const item = configAccounts[i];
      if (item === null || !item.accountInfo)
        throw Error("fetch config info error: " + configKeys[i].toBase58());
      const configInfo = LaunchpadConfig.decode(item.accountInfo.data);
      configInfoMap[configKeys[i].toBase58()] = {
        ...configInfo,
        configId: item.accountInfo.owner
      };
    }
    return {
      poolInfoMap: Object.keys(poolInfoMap).reduce((acc, cur) => ({
        ...acc,
        [cur]: {
          ...poolInfoMap[cur],
          configInfo: configInfoMap[poolInfoMap[cur].configId.toBase58()]
        }
      }), {})
    };
  }
};

// src/raydium/token/token.ts
var import_web339 = require("@solana/web3.js");
var import_spl_token29 = require("@solana/spl-token");
var TokenModule = class extends ModuleBase {
  _tokenList = [];
  _tokenMap = /* @__PURE__ */ new Map();
  _blackTokenMap = /* @__PURE__ */ new Set();
  _mintGroup = {
    official: /* @__PURE__ */ new Set(),
    jup: /* @__PURE__ */ new Set(),
    extra: /* @__PURE__ */ new Set()
  };
  _whiteMap = /* @__PURE__ */ new Set();
  _extraTokenList = [];
  constructor(params) {
    super(params);
  }
  async load(params) {
    this.checkDisabled();
    const { forceUpdate = false, type = "strict" /* Strict */ } = params || {};
    const { mintList, blacklist, whiteList } = await this.scope.fetchV3TokenList(forceUpdate);
    const jup = await this.scope.fetchJupTokenList(forceUpdate);
    this._tokenList = [];
    this._tokenMap = /* @__PURE__ */ new Map();
    this._blackTokenMap = new Set(blacklist);
    this._mintGroup = { official: /* @__PURE__ */ new Set(), jup: /* @__PURE__ */ new Set(), extra: /* @__PURE__ */ new Set() };
    this._whiteMap = new Set(whiteList);
    this._tokenMap.set(SOL_INFO.address, SOL_INFO);
    this._mintGroup.official.add(SOL_INFO.address);
    mintList.forEach((token) => {
      if (this._blackTokenMap.has(token.address))
        return;
      this._tokenMap.set(token.address, {
        ...token,
        type: "raydium",
        priority: 2,
        programId: token.programId ?? (token.tags.includes("token-2022") ? import_spl_token29.TOKEN_2022_PROGRAM_ID.toBase58() : import_spl_token29.TOKEN_PROGRAM_ID.toBase58())
      });
      this._mintGroup.official.add(token.address);
    });
    jup.forEach((token) => {
      if (this._blackTokenMap.has(token.address) || this._tokenMap.has(token.address))
        return;
      this._tokenMap.set(token.address, {
        ...token,
        type: "jupiter",
        priority: 1,
        programId: token.programId ?? (token.tags.includes("token-2022") ? import_spl_token29.TOKEN_2022_PROGRAM_ID.toBase58() : import_spl_token29.TOKEN_PROGRAM_ID.toBase58()),
        tags: token.freezeAuthority ? [...token.tags || [], "hasFreeze"] : token.tags
      });
      this._mintGroup.jup.add(token.address);
    });
    this._extraTokenList.forEach((token) => {
      if (this._blackTokenMap.has(token.address) || this._tokenMap.has(token.address))
        return;
      this._tokenMap.set(token.address, {
        ...token,
        type: "extra",
        priority: 1,
        programId: token.programId || token.tags.includes("token-2022") ? import_spl_token29.TOKEN_2022_PROGRAM_ID.toBase58() : import_spl_token29.TOKEN_PROGRAM_ID.toBase58()
      });
      this._mintGroup.extra.add(token.address);
    });
    this._tokenList = Array.from(this._tokenMap).map((data) => data[1]);
  }
  get tokenList() {
    return this._tokenList;
  }
  get tokenMap() {
    return this._tokenMap;
  }
  get blackTokenMap() {
    return this._blackTokenMap;
  }
  get mintGroup() {
    return this._mintGroup;
  }
  get whiteListMap() {
    return this._whiteMap;
  }
  async getTokenInfo(mint) {
    if (!mint)
      throw new Error("please input mint");
    const mintStr = mint.toString();
    const info = this._tokenMap.get(mintStr);
    if (info)
      return info;
    if (mintStr.toLocaleUpperCase() === "SOL")
      return SOL_INFO;
    const apiTokenInfo = (await this.scope.api.getTokenInfo([mintStr]))[0];
    if (apiTokenInfo) {
      this._mintGroup.extra.add(mintStr);
      this._tokenMap.set(mintStr, { ...apiTokenInfo, priority: 2 });
      return apiTokenInfo;
    }
    const onlineInfo = await this.scope.connection.getAccountInfo(new import_web339.PublicKey(mintStr));
    if (!onlineInfo)
      throw new Error(`mint address not found: ${mintStr}`);
    const data = import_spl_token29.MintLayout.decode(onlineInfo.data);
    const mintSymbol = mintStr.toString().substring(0, 6);
    const fullInfo = {
      chainId: 101,
      address: mintStr,
      programId: onlineInfo.owner.toBase58(),
      logoURI: "",
      symbol: mintSymbol,
      name: mintSymbol,
      decimals: data.decimals,
      tags: [],
      extensions: {},
      priority: 0,
      type: "unknown"
    };
    this._mintGroup.extra.add(mintStr);
    this._tokenMap.set(mintStr, fullInfo);
    return fullInfo;
  }
};

// src/raydium/raydium.ts
var Raydium = class {
  cluster;
  farm;
  account;
  liquidity;
  clmm;
  cpmm;
  tradeV2;
  utils1216;
  marketV2;
  ido;
  token;
  launchpad;
  rawBalances = /* @__PURE__ */ new Map();
  apiData;
  availability;
  blockhashCommitment;
  loopMultiTxStatus;
  _connection;
  _owner;
  api;
  _apiCacheTime;
  _signAllTransactions;
  logger;
  _chainTime;
  _epochInfo;
  constructor(config2) {
    const {
      connection,
      cluster,
      owner,
      api,
      defaultChainTime,
      defaultChainTimeOffset,
      apiCacheTime,
      blockhashCommitment = "confirmed",
      loopMultiTxStatus
    } = config2;
    this._connection = connection;
    this.cluster = cluster || "mainnet";
    this._owner = owner ? new Owner(owner) : void 0;
    this._signAllTransactions = config2.signAllTransactions;
    this.blockhashCommitment = blockhashCommitment;
    this.loopMultiTxStatus = loopMultiTxStatus;
    this.api = api;
    this._apiCacheTime = apiCacheTime || 5 * 60 * 1e3;
    this.logger = createLogger("Raydium");
    this.farm = new Farm({ scope: this, moduleName: "Raydium_Farm" });
    this.account = new Account({
      scope: this,
      moduleName: "Raydium_Account",
      tokenAccounts: config2.tokenAccounts,
      tokenAccountRawInfos: config2.tokenAccountRawInfos
    });
    this.liquidity = new LiquidityModule({ scope: this, moduleName: "Raydium_LiquidityV2" });
    this.token = new TokenModule({ scope: this, moduleName: "Raydium_tokenV2" });
    this.tradeV2 = new TradeV2({ scope: this, moduleName: "Raydium_tradeV2" });
    this.clmm = new Clmm({ scope: this, moduleName: "Raydium_clmm" });
    this.cpmm = new CpmmModule({ scope: this, moduleName: "Raydium_cpmm" });
    this.utils1216 = new Utils1216({ scope: this, moduleName: "Raydium_utils1216" });
    this.marketV2 = new MarketV2({ scope: this, moduleName: "Raydium_marketV2" });
    this.ido = new MarketV22({ scope: this, moduleName: "Raydium_ido" });
    this.launchpad = new LaunchpadModule({ scope: this, moduleName: "Raydium_lauchpad" });
    this.availability = {};
    const now = new Date().getTime();
    this.apiData = {};
    if (defaultChainTimeOffset)
      this._chainTime = {
        fetched: now,
        value: {
          chainTime: defaultChainTime || Date.now() - defaultChainTimeOffset,
          offset: defaultChainTimeOffset
        }
      };
  }
  static async load(config2) {
    const custom = (0, import_lodash2.merge)({
      cluster: "mainnet",
      owner: null,
      apiRequestInterval: 5 * 60 * 1e3,
      apiRequestTimeout: 10 * 1e3
    }, config2);
    const { cluster, apiRequestTimeout, logCount, logRequests, urlConfigs } = custom;
    const api = new Api({ cluster, timeout: apiRequestTimeout, urlConfigs, logCount, logRequests });
    const raydium = new Raydium({
      ...custom,
      api
    });
    await raydium.fetchAvailabilityStatus(config2.disableFeatureCheck ?? true);
    if (!config2.disableLoadToken)
      await raydium.token.load({
        type: config2.jupTokenType
      });
    return raydium;
  }
  get owner() {
    return this._owner;
  }
  get ownerPubKey() {
    if (!this._owner)
      throw new Error(EMPTY_OWNER);
    return this._owner.publicKey;
  }
  setOwner(owner) {
    this._owner = owner ? new Owner(owner) : void 0;
    this.account.resetTokenAccounts();
    return this;
  }
  get connection() {
    if (!this._connection)
      throw new Error(EMPTY_CONNECTION);
    return this._connection;
  }
  setConnection(connection) {
    this._connection = connection;
    return this;
  }
  get signAllTransactions() {
    return this._signAllTransactions;
  }
  setSignAllTransactions(signAllTransactions) {
    this._signAllTransactions = signAllTransactions;
    return this;
  }
  checkOwner() {
    if (!this.owner) {
      console.error(EMPTY_OWNER);
      throw new Error(EMPTY_OWNER);
    }
  }
  isCacheInvalidate(time) {
    return new Date().getTime() - time > this._apiCacheTime;
  }
  async fetchChainTime() {
    try {
      const data = await this.api.getChainTimeOffset();
      this._chainTime = {
        fetched: Date.now(),
        value: {
          chainTime: Date.now() + data.offset * 1e3,
          offset: data.offset * 1e3
        }
      };
    } catch {
      this._chainTime = void 0;
    }
  }
  async fetchV3TokenList(forceUpdate) {
    if (this.apiData.tokenList && !this.isCacheInvalidate(this.apiData.tokenList.fetched) && !forceUpdate)
      return this.apiData.tokenList.data;
    try {
      const raydiumList = await this.api.getTokenList();
      const dataObject = {
        fetched: Date.now(),
        data: raydiumList
      };
      this.apiData.tokenList = dataObject;
      return dataObject.data;
    } catch (e) {
      console.error(e);
      return {
        mintList: [],
        blacklist: [],
        whiteList: []
      };
    }
  }
  async fetchJupTokenList(forceUpdate) {
    const prevFetched = this.apiData.jupTokenList;
    if (prevFetched && !this.isCacheInvalidate(prevFetched.fetched) && !forceUpdate)
      return prevFetched.data;
    try {
      const jupList = await this.api.getJupTokenList();
      this.apiData.jupTokenList = {
        fetched: Date.now(),
        data: jupList.map((t) => ({
          ...t,
          mintAuthority: t.mint_authority || void 0,
          freezeAuthority: t.freeze_authority || void 0
        }))
      };
      return this.apiData.jupTokenList.data;
    } catch (e) {
      console.error(e);
      return [];
    }
  }
  get chainTimeData() {
    return this._chainTime?.value;
  }
  async chainTimeOffset() {
    if (this._chainTime && Date.now() - this._chainTime.fetched <= 1e3 * 60 * 5)
      return this._chainTime.value.offset;
    await this.fetchChainTime();
    return this._chainTime?.value.offset || 0;
  }
  async currentBlockChainTime() {
    if (this._chainTime && Date.now() - this._chainTime.fetched <= 1e3 * 60 * 5)
      return this._chainTime.value.chainTime;
    await this.fetchChainTime();
    return this._chainTime?.value.chainTime || Date.now();
  }
  async fetchEpochInfo() {
    if (this._epochInfo && Date.now() - this._epochInfo.fetched <= 1e3 * 30)
      return this._epochInfo.value;
    this._epochInfo = {
      fetched: Date.now(),
      value: await this.connection.getEpochInfo()
    };
    return this._epochInfo.value;
  }
  async fetchAvailabilityStatus(skipCheck) {
    if (skipCheck)
      return {};
    try {
      const data = await this.api.fetchAvailabilityStatus();
      const isAllDisabled = data.all === false;
      this.availability = {
        all: data.all,
        swap: isAllDisabled ? false : data.swap,
        createConcentratedPosition: isAllDisabled ? false : data.createConcentratedPosition,
        addConcentratedPosition: isAllDisabled ? false : data.addConcentratedPosition,
        addStandardPosition: isAllDisabled ? false : data.addStandardPosition,
        removeConcentratedPosition: isAllDisabled ? false : data.removeConcentratedPosition,
        removeStandardPosition: isAllDisabled ? false : data.removeStandardPosition,
        addFarm: isAllDisabled ? false : data.addFarm,
        removeFarm: isAllDisabled ? false : data.removeFarm
      };
      return data;
    } catch {
      return {};
    }
  }
};

// src/raydium/type.ts
var unionArr = (arr) => arr;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AMM_CONFIG_SEED,
  BIT_PRECISION,
  Clmm,
  ClmmConfigLayout,
  ClmmInstrument,
  ConstantProductCurve,
  CpmmConfigInfoLayout,
  CpmmFee,
  CpmmPoolInfoLayout,
  Curve,
  CurveBase,
  CurveCalculator,
  DataElement,
  EXTENSION_TICKARRAY_BITMAP_SIZE,
  FARM_LOCK_MINT,
  FARM_LOCK_VAULT,
  FARM_PROGRAM_TO_VERSION,
  FARM_VERSION_TO_LEDGER_LAYOUT,
  FARM_VERSION_TO_STATE_LAYOUT,
  FEE_RATE_DENOMINATOR,
  FETCH_TICKARRAY_COUNT,
  Fee,
  FixedPriceCurve,
  LAUNCHPAD_AUTH_SEED,
  LAUNCHPAD_CONFIG_SEED,
  LAUNCHPAD_POOL_PLATFORM_SEED,
  LAUNCHPAD_POOL_SEED,
  LAUNCHPAD_POOL_VAULT_SEED,
  LAUNCHPAD_POOL_VESTING_SEED,
  LIQUIDITY_FEES_DENOMINATOR,
  LIQUIDITY_FEES_NUMERATOR,
  LIQUIDITY_VERSION_TO_SERUM_VERSION,
  LIQUIDITY_VERSION_TO_STATE_LAYOUT,
  LOCK_LIQUIDITY_SEED,
  LOG_B_2_X32,
  LOG_B_P_ERR_MARGIN_LOWER_X64,
  LOG_B_P_ERR_MARGIN_UPPER_X64,
  LaunchPadConstantProductCurve,
  LaunchpadConfig,
  LaunchpadPool,
  LaunchpadPoolInitParam,
  LaunchpadVesting,
  LaunchpadVestingSchedule,
  LinearPriceCurve,
  LiquidityMath,
  LockClPositionLayoutV2,
  LockPositionLayout,
  MARKET_STATE_LAYOUT_V2,
  MARKET_STATE_LAYOUT_V3,
  MARKET_VERSION_TO_STATE_LAYOUT,
  MAX_SQRT_PRICE_X64,
  MAX_SQRT_PRICE_X64_SUB_ONE,
  MAX_TICK,
  MIN_SQRT_PRICE_X64,
  MIN_SQRT_PRICE_X64_ADD_ONE,
  MIN_TICK,
  MODEL_DATA_PUBKEY,
  Market,
  MathLaunch,
  MathUtil,
  MaxU64,
  MaxUint128,
  NEGATIVE_ONE,
  OBSERVATION_SEED,
  ONE,
  OPERATION_SEED,
  ObservationInfoLayout,
  ObservationLayout,
  OperationLayout,
  POOL_LOCK_ID_SEED,
  POOL_REWARD_VAULT_SEED,
  POOL_SEED,
  POOL_TICK_ARRAY_BITMAP_SEED,
  POOL_VAULT_SEED,
  POSITION_SEED,
  PlatformConfig,
  PoolInfoLayout,
  PoolUtils,
  PositionInfoLayout,
  PositionRewardInfoLayout,
  PositionUtils,
  ProtocolPositionLayout,
  Q128,
  Q64,
  Raydium,
  RewardInfo,
  RoundDirection,
  SERUM_PROGRAMID_TO_VERSION,
  SERUM_VERSION_TO_PROGRAMID,
  SOL_INFO,
  SPL_MINT_LAYOUT,
  SUPPORT_MINT_SEED,
  SqrtPriceMath,
  StableLayout,
  SwapMath,
  TICK_ARRAY_BITMAP_SIZE,
  TICK_ARRAY_SEED,
  TICK_ARRAY_SIZE,
  TICK_SPACINGS,
  TOKEN_WSOL,
  TickArrayBitmap,
  TickArrayBitmapExtensionLayout,
  TickArrayBitmapExtensionUtils,
  TickArrayLayout,
  TickLayout,
  TickMath,
  TickQuery,
  TickUtils,
  U64Resolution,
  U64_IGNORE_RANGE,
  Voter,
  VoterDepositEntry,
  VoterLockup,
  VoterRegistrar,
  VoterVotingMintConfig,
  ZERO,
  addLiquidityLayout,
  anchorDataBuf,
  associatedLedgerAccountLayout,
  buyExactInInstruction,
  buyExactOutInstruction,
  calFarmRewardAmount,
  checkPoolToAmm,
  claimLayout,
  claimPlatformFee,
  claimVestedToken,
  clmmComputeInfoToApiInfo,
  closeAccountInstruction,
  collectCpFeeInstruction,
  cpmmLockPositionInstruction,
  createAssociatedLedgerAccountInstruction,
  createPlatformConfig,
  createPoolFeeLayout,
  createPoolV4InstructionV2,
  createPoolV4Layout,
  createVestingAccount,
  createWSolAccountInstructions,
  dwLayout,
  farmAddRewardLayout,
  farmLedgerLayoutV3_1,
  farmLedgerLayoutV3_2,
  farmLedgerLayoutV5_1,
  farmLedgerLayoutV5_2,
  farmLedgerLayoutV6_1,
  farmRewardInfoToConfig,
  farmRewardLayout,
  farmRewardRestartLayout,
  farmRewardTimeInfoLayout,
  farmStateV3Layout,
  farmStateV5Layout,
  farmStateV6Layout,
  fetchMultipleFarmInfoAndUpdate,
  fetchMultipleInfo,
  fixedSwapInLayout,
  fixedSwapOutLayout,
  formatLayout,
  generatePubKey,
  getAssociatedAuthority,
  getAssociatedConfigId,
  getAssociatedLedgerAccount,
  getAssociatedLedgerPoolAccount,
  getAssociatedOpenOrders,
  getAssociatedPoolKeys,
  getCpLockPda,
  getCpmmPdaAmmConfigId,
  getCpmmPdaPoolId,
  getCreatePoolKeys,
  getDepositEntryIndex,
  getDxByDyBaseIn,
  getDyByDxBaseIn,
  getFarmLedgerLayout,
  getFarmStateLayout,
  getLiquidityAssociatedAuthority,
  getLiquidityAssociatedId,
  getLiquidityFromAmounts,
  getPdaAmmConfigId,
  getPdaCpiEvent,
  getPdaExBitmapAccount,
  getPdaLaunchpadAuth,
  getPdaLaunchpadConfigId,
  getPdaLaunchpadPoolId,
  getPdaLaunchpadVaultId,
  getPdaLockClPositionIdV2,
  getPdaLockPositionId,
  getPdaLpMint,
  getPdaMetadataKey,
  getPdaMintExAccount,
  getPdaObservationAccount,
  getPdaObservationId,
  getPdaOperationAccount,
  getPdaPersonalPositionAddress,
  getPdaPlatformId,
  getPdaPoolAuthority,
  getPdaPoolId,
  getPdaPoolRewardVaulId,
  getPdaPoolVaultId,
  getPdaProtocolPositionAddress,
  getPdaTickArrayAddress,
  getPdaVault,
  getPdaVestId,
  getRegistrarAddress,
  getStablePrice,
  getTokenOwnerRecordAddress,
  getVoterAddress,
  getVoterWeightRecordAddress,
  getVotingMintAuthority,
  getVotingTokenMint,
  governanceCreateTokenOwnerRecord,
  i16ToBytes,
  i32ToBytes,
  initPoolLayout,
  initTokenAccountInstruction,
  initialize,
  initializeMarket,
  isValidFarmVersion,
  isZero,
  judgeFarmType,
  leadingZeros,
  leastSignificantBit,
  liquidityStateV4Layout,
  liquidityStateV5Layout,
  makeAMMSwapInstruction,
  makeAddLiquidityInstruction,
  makeAddNewRewardInstruction,
  makeClaimInstruction,
  makeClaimInstructionV4,
  makeCpmmLockInstruction,
  makeCreateCpmmPoolInInstruction,
  makeCreateFarmInstruction,
  makeCreateMarketInstruction,
  makeCreatorWithdrawFarmRewardInstruction,
  makeDepositCpmmInInstruction,
  makeDepositInstructionV3,
  makeDepositInstructionV5,
  makeDepositInstructionV6,
  makeDepositTokenInstruction,
  makeDepositWithdrawInstruction,
  makeInitPoolInstructionV4,
  makePurchaseInstruction,
  makeRestartRewardInstruction,
  makeSimulatePoolInfoInstruction,
  makeSwapCpmmBaseInInstruction,
  makeSwapCpmmBaseOutInstruction,
  makeSwapFixedInInstruction,
  makeSwapFixedOutInstruction,
  makeSwapInstruction,
  makeTransferInstruction,
  makeWithdrawCpmmInInstruction,
  makeWithdrawInstructionV3,
  makeWithdrawInstructionV4,
  makeWithdrawInstructionV5,
  makeWithdrawInstructionV6,
  makeWithdrawTokenInstruction,
  mockCreatePoolInfo,
  mockV3CreatePoolInfo,
  modelDataInfoLayout,
  mostSignificantBit,
  parseTokenAccountResp,
  parseTokenInfo,
  poolTypeV6,
  purchaseLayout,
  realFarmStateV3Layout,
  realFarmStateV5Layout,
  realFarmV6Layout,
  removeLiquidityInstruction,
  removeLiquidityLayout,
  route1Instruction,
  route2Instruction,
  routeInstruction,
  sellExactInInstruction,
  sellExactOut,
  simulatePoolInfoInstruction,
  solToWSolToken,
  splAccountLayout,
  swapBaseInAutoAccount,
  swapBaseOutAutoAccount,
  toAmmComputePoolInfo,
  toApiV3Token,
  toFeeConfig,
  toToken,
  toTokenAmount,
  toTokenInfo,
  trailingZeros,
  u16ToBytes,
  u32ToBytes,
  u8ToBytes,
  unionArr,
  updateFarmPoolInfo,
  updatePlatformConfig,
  validateFarmRewards,
  voterStakeRegistryCreateDepositEntry,
  voterStakeRegistryCreateVoter,
  voterStakeRegistryDeposit,
  voterStakeRegistryUpdateVoterWeightRecord,
  voterStakeRegistryWithdraw,
  wSolToSolToken,
  withdrawRewardLayout
});
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
//# sourceMappingURL=index.js.map