// src/raydium/farm/config.ts
import { PublicKey as PublicKey3 } from "@solana/web3.js";

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

// src/common/programId.ts
import { PublicKey } from "@solana/web3.js";
var FARM_PROGRAM_ID_V3 = new PublicKey("EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q");
var FARM_PROGRAM_ID_V4 = new PublicKey("CBuCnLe26faBpcBP2fktp4rp8abpcAnTWft6ZrP5Q4T");
var FARM_PROGRAM_ID_V5 = new PublicKey("9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z");
var FARM_PROGRAM_ID_V6 = new PublicKey("FarmqiPv5eAj3j1GMdMCMUGXqPUvmquZtMy86QH6rzhG");
var UTIL1216 = new PublicKey("CLaimxFqjHzgTJtAGHU47NPhg6qrc5sCnpC4tBLyABQS");
var OPEN_BOOK_PROGRAM = new PublicKey("srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX");
var SERUM_PROGRAM_ID_V3 = new PublicKey("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin");
var AMM_V4 = new PublicKey("675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8");
var AMM_STABLE = new PublicKey("5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h");
var LIQUIDITY_POOL_PROGRAM_ID_V5_MODEL = new PublicKey("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo");
var CLMM_PROGRAM_ID = new PublicKey("CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK");
var CLMM_LOCK_PROGRAM_ID = new PublicKey("LockrWmn6K5twhz3y9w1dQERbmgSaRkfnTeTKbpofwE");
var CLMM_LOCK_AUTH_ID = new PublicKey("kN1kEznaF5Xbd8LYuqtEFcxzWSBk5Fv6ygX6SqEGJVy");
var Router = new PublicKey("routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS");
var FEE_DESTINATION_ID = new PublicKey("7YttLkHDoNj9wyDur5pM1ejNaAvT9X4eqaYcHQqtj2G5");
var IDO_PROGRAM_ID_V1 = new PublicKey("6FJon3QE27qgPVggARueB22hLvoh22VzJpXv4rBEoSLF");
var IDO_PROGRAM_ID_V2 = new PublicKey("CC12se5To1CdEuw7fDS27B7Geo5jJyL7t5UK2B44NgiH");
var IDO_PROGRAM_ID_V3 = new PublicKey("9HzJyW1qZsEiSfMUf6L2jo3CcTKAyBmSyKdwQeYisHrC");
var IDO_PROGRAM_ID_V4 = new PublicKey("DropEU8AvevN3UrXWXTMuz3rqnMczQVNjq3kcSdW2SQi");
var CREATE_CPMM_POOL_PROGRAM = new PublicKey("CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C");
var CREATE_CPMM_POOL_AUTH = new PublicKey("GpMZbSM2GgvTKHJirzeGfMFoaZ8UR2X7F4v8vHTvxFbL");
var CREATE_CPMM_POOL_FEE_ACC = new PublicKey("DNXgeM9EiiaAbaWvwjHj9fQQLAX5ZsfHyvmYUNRAdNC8");
var DEV_CREATE_CPMM_POOL_PROGRAM = new PublicKey("CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW");
var DEV_CREATE_CPMM_POOL_AUTH = new PublicKey("7rQ1QFNosMkUCuh7Z7fPbTHvh73b68sQYdirycEzJVuw");
var DEV_CREATE_CPMM_POOL_FEE_ACC = new PublicKey("G11FKBRaAkHAKuLCgLM6K6NUc9rTjPAznRCjZifrTQe2");
var LOCK_CPMM_PROGRAM = new PublicKey("LockrWmn6K5twhz3y9w1dQERbmgSaRkfnTeTKbpofwE");
var DEV_LOCK_CPMM_PROGRAM = new PublicKey("DLockwT7X7sxtLmGH9g5kmfcjaBtncdbUmi738m5bvQC");
var LOCK_CPMM_AUTH = new PublicKey("3f7GcQFG397GAaEnv51zR6tsTVihYRydnydDD1cXekxH");
var DEV_LOCK_CPMM_AUTH = new PublicKey("7AFUeLVRjBfzqK3tTGw8hN48KLQWSk6DTE8xprWdPqix");
var LAUNCHPAD_PROGRAM = new PublicKey("LanMV9sAd7wArD4vJFi2qDdfnVhFxYSUg6eADduJ3uj");
var LAUNCHPAD_AUTH = new PublicKey("WLHv2UAZm6z4KyaaELi5pjdbJh6RESMva1Rnn8pJVVh");
var DEV_LAUNCHPAD_PROGRAM = new PublicKey("LanD8FpTBBvzZFXjTxsAoipkFsxPUCDB4qAqKxYDiNP");
var DEV_LAUNCHPAD_AUTH = new PublicKey("HYNHiyKJ3gGVFvyxJAurK7qr7P2o5J9THmvCGMdULtpW");
var DEVNET_PROGRAM_ID = {
  SERUM_MARKET: PublicKey.default,
  OPENBOOK_MARKET: new PublicKey("EoTcMgcDRTJVZDMZWBoU6rhYHZfkNTVEAfz3uUJRcYGj"),
  UTIL1216: PublicKey.default,
  FarmV3: new PublicKey("85BFyr98MbCUU9MVTEgzx1nbhWACbJqLzho6zd6DZcWL"),
  FarmV5: new PublicKey("EcLzTrNg9V7qhcdyXDe2qjtPkiGzDM2UbdRaeaadU5r2"),
  FarmV6: new PublicKey("Farm2hJLcqPtPg8M4rR6DMrsRNc5TPm5Cs4bVQrMe2T7"),
  AmmV4: new PublicKey("HWy1jotHpo6UqeQxx49dpYYdQB8wj9Qk9MdxwjLvDHB8"),
  AmmStable: new PublicKey("DDg4VmQaJV9ogWce7LpcjBA9bv22wRp5uaTPa5pGjijF"),
  CLMM: new PublicKey("devi51mZmdwUJGU9hjN27vEz64Gps7uUefqxg27EAtH"),
  CLMM_LOCK_PROGRAM_ID: new PublicKey("DLockwT7X7sxtLmGH9g5kmfcjaBtncdbUmi738m5bvQC"),
  CLMM_LOCK_AUTH_ID: new PublicKey("8qmHNvu2Kr2C7U8mJL4Vz1vTDxMhVuXKREwU7TNoaVEo"),
  Router: new PublicKey("BVChZ3XFEwTMUk1o9i3HAf91H6mFxSwa5X2wFAWhYPhU"),
  CREATE_CPMM_POOL_PROGRAM: DEV_CREATE_CPMM_POOL_PROGRAM,
  CREATE_CPMM_POOL_AUTH: DEV_CREATE_CPMM_POOL_AUTH,
  CREATE_CPMM_POOL_FEE_ACC: DEV_CREATE_CPMM_POOL_FEE_ACC,
  FEE_DESTINATION_ID: new PublicKey("3XMrhbv989VxAMi3DErLV9eJht1pHppW5LbKxe9fkEFR"),
  LOCK_CPMM_PROGRAM: DEV_LOCK_CPMM_PROGRAM,
  LCOK_CPMM_AUTH: DEV_LOCK_CPMM_AUTH,
  LAUNCHPAD_PROGRAM: DEV_LAUNCHPAD_PROGRAM,
  LAUNCHPAD_AUTH: DEV_LAUNCHPAD_AUTH
};

// src/marshmallow/index.ts
import { PublicKey as PublicKey2 } from "@solana/web3.js";
import BN, { isBN } from "bn.js";

// src/marshmallow/buffer-layout.ts
import {
  bits as _bits,
  BitStructure as _BitStructure,
  blob as _blob,
  Blob as _Blob,
  cstr as _cstr,
  f32 as _f32,
  f32be as _f32be,
  f64 as _f64,
  f64be as _f64be,
  greedy as _greedy,
  Layout as _Layout,
  ns64 as _ns64,
  ns64be as _ns64be,
  nu64 as _nu64,
  nu64be as _nu64be,
  offset as _offset,
  s16 as _s16,
  s16be as _s16be,
  s24 as _s24,
  s24be as _s24be,
  s32 as _s32,
  s32be as _s32be,
  s40 as _s40,
  s40be as _s40be,
  s48 as _s48,
  s48be as _s48be,
  s8 as _s8,
  seq as _seq,
  struct as _struct,
  Structure as _Structure,
  u16 as _u16,
  u16be as _u16be,
  u24 as _u24,
  u24be as _u24be,
  u32 as _u32,
  u32be as _u32be,
  u40 as _u40,
  u40be as _u40be,
  u48 as _u48,
  u48be as _u48be,
  u8 as _u8,
  UInt as _UInt,
  union as _union,
  Union as _Union,
  unionLayoutDiscriminator as _unionLayoutDiscriminator,
  utf8 as _utf8
} from "@solana/buffer-layout";
var Layout = _Layout;
var Structure = _Structure;
var UInt = _UInt;
var u8 = _u8;
var seq = _seq;
var blob = _blob;

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
    const num = new BN(this.blob.decode(b, offset2), 10, "le");
    if (this.signed) {
      return num.fromTwos(this.span * 8).clone();
    }
    return num;
  }
  encode(src, b, offset2 = 0) {
    if (typeof src === "number")
      src = new BN(src);
    if (this.signed) {
      src = src.toTwos(this.span * 8);
    }
    return this.blob.encode(src.toArrayLike(Buffer, "le", this.span), b, offset2);
  }
};
function u82(property) {
  return new UInt(1, property);
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
  return new WrappedLayout(blob(32), (b) => new PublicKey2(b), (key) => key.toBuffer(), property);
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
  const superCount = typeof count === "number" ? count : isBN(count) ? count.toNumber() : new Proxy(count, {
    get(target, property2) {
      if (!parsedCount) {
        const countProperty = Reflect.get(target, "count");
        parsedCount = isBN(countProperty) ? countProperty.toNumber() : countProperty;
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
var logger = createLogger("Raydium_farm_config");
var FARM_LOCK_MINT = new PublicKey3("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R");
var FARM_LOCK_VAULT = new PublicKey3("FrspKwj8i3pNmKwXreTveC4fu7KL5ZbGeXdZBe2XViu1");
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
export {
  FARM_LOCK_MINT,
  FARM_LOCK_VAULT,
  FARM_PROGRAM_TO_VERSION,
  FARM_VERSION_TO_LEDGER_LAYOUT,
  FARM_VERSION_TO_STATE_LAYOUT,
  isValidFarmVersion,
  poolTypeV6,
  validateFarmRewards
};
//# sourceMappingURL=config.mjs.map