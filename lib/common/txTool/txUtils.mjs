// src/common/txTool/txUtils.ts
import {
  ComputeBudgetProgram,
  Keypair,
  PublicKey,
  Transaction,
  TransactionMessage,
  VersionedTransaction
} from "@solana/web3.js";

// src/common/logger.ts
import { get, set } from "lodash";
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
  let logger2 = get(moduleLoggers, moduleName);
  if (!logger2) {
    const logLevel = get(moduleLevels, moduleName);
    logger2 = new Logger({ name: moduleName, logLevel });
    set(moduleLoggers, moduleName, logger2);
  }
  return logger2;
}

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
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
var logger = createLogger("Raydium_txUtil");
var MAX_BASE64_SIZE = 1644;
function addComputeBudget(config) {
  const ins = [];
  const insTypes = [];
  if (config.microLamports) {
    ins.push(ComputeBudgetProgram.setComputeUnitPrice({ microLamports: config.microLamports }));
    insTypes.push(InstructionType.SetComputeUnitPrice);
  }
  if (config.units) {
    ins.push(ComputeBudgetProgram.setComputeUnitLimit({ units: config.units }));
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
    logger.logWithError(`no instructions provided: ${instructions.toString()}`);
  if (signers.length < 1)
    logger.logWithError(`no signers provided:, ${signers.toString()}`);
  const transaction = new Transaction();
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
  const feePayer = new PublicKey("RaydiumSimuLateTransaction11111111111111111");
  const transactions = [];
  let transaction = new Transaction();
  transaction.feePayer = feePayer;
  for (const instruction of instructions) {
    if (!forecastTransactionSize([...transaction.instructions, instruction], [feePayer])) {
      transactions.push(transaction);
      transaction = new Transaction();
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
      logger.logWithError("failed to simulate for instructions", "RPC_ERROR", {
        message: error.message
      });
    }
  }
  const logs = [];
  for (const result of results) {
    logger.debug("simulate result:", result);
    if (result.logs) {
      const filteredLog = result.logs.filter((log) => log && log.includes(keyword));
      logger.debug("filteredLog:", logs);
      if (!filteredLog.length)
        logger.logWithError("simulate log not match keyword", "keyword", keyword);
      logs.push(...filteredLog);
    }
  }
  return logs;
}
function parseSimulateLogToJson(log, keyword) {
  const results = log.match(/{["\w:,]+}/g);
  if (!results || results.length !== 1) {
    return logger.logWithError(`simulate log fail to match json, keyword: ${keyword}`);
  }
  return results[0];
}
function parseSimulateValue(log, key) {
  const reg = new RegExp(`"${key}":(\\d+)`, "g");
  const results = reg.exec(log);
  if (!results || results.length !== 2) {
    return logger.logWithError(`simulate log fail to match key", key: ${key}`);
  }
  return results[1];
}
function findProgramAddress(seeds, programId) {
  const [publicKey, nonce] = PublicKey.findProgramAddressSync(seeds, programId);
  return { publicKey, nonce };
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
        logger.logWithError("failed to get info for multiple accounts", "RPC_ERROR", {
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
  recentBlockhash = Keypair.generate().publicKey.toString()
}) {
  const transactionMessage = new TransactionMessage({
    payerKey: payer,
    recentBlockhash,
    instructions
  });
  const messageV0 = transactionMessage.compileToV0Message(Object.values(lookupTableAddressAccount ?? {}));
  try {
    const buildLength = Buffer.from(new VersionedTransaction(messageV0).serialize()).toString("base64").length;
    return buildLength < MAX_BASE64_SIZE;
  } catch (error) {
    return false;
  }
}
var epochInfoCache = {
  time: 0,
  data: void 0
};
async function getEpochInfo(connection) {
  if (!epochInfoCache.data || (Date.now() - epochInfoCache.time) / 1e3 > 30) {
    const data = await connection.getEpochInfo();
    epochInfoCache = {
      time: Date.now(),
      data
    };
    return data;
  } else {
    return epochInfoCache.data;
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
  if (transaction instanceof VersionedTransaction)
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
    if (transaction instanceof Transaction) {
      if (!transaction.recentBlockhash)
        transaction.recentBlockhash = TOKEN_PROGRAM_ID.toBase58();
      if (!transaction.feePayer)
        transaction.feePayer = Keypair.generate().publicKey;
    }
    allBase64.push(txToBase64(transaction));
  });
  console.log("simulate tx string:", allBase64);
  return allBase64;
}
function transformTxToBase64(tx) {
  let serialized = tx.serialize({ requireAllSignatures: false, verifySignatures: false });
  if (tx instanceof VersionedTransaction)
    serialized = toBuffer(serialized);
  return serialized.toString("base64");
}
export {
  MAX_BASE64_SIZE,
  addComputeBudget,
  checkLegacyTxSize,
  checkV0TxSize,
  confirmTransaction,
  findProgramAddress,
  forecastTransactionSize,
  getEpochInfo,
  getRecentBlockHash,
  parseSimulateLogToJson,
  parseSimulateValue,
  printSimulate,
  simulateMultipleInstruction,
  simulateTransaction,
  toBuffer,
  transformTxToBase64,
  txToBase64
};
//# sourceMappingURL=txUtils.mjs.map