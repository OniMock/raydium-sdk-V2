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

// src/raydium/liquidity/stable.ts
var stable_exports = {};
__export(stable_exports, {
  DataElement: () => DataElement,
  MODEL_DATA_PUBKEY: () => MODEL_DATA_PUBKEY,
  StableLayout: () => StableLayout,
  formatLayout: () => formatLayout,
  getDxByDyBaseIn: () => getDxByDyBaseIn,
  getDyByDxBaseIn: () => getDyByDxBaseIn,
  getStablePrice: () => getStablePrice,
  modelDataInfoLayout: () => modelDataInfoLayout
});
module.exports = __toCommonJS(stable_exports);
var import_web32 = require("@solana/web3.js");

// src/marshmallow/index.ts
var import_web3 = require("@solana/web3.js");
var import_bn = __toESM(require("bn.js"));

// src/marshmallow/buffer-layout.ts
var import_buffer_layout = require("@solana/buffer-layout");
var Layout = import_buffer_layout.Layout;
var Structure = import_buffer_layout.Structure;
var seq = import_buffer_layout.seq;
var blob = import_buffer_layout.blob;

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
    const num = new import_bn.default(this.blob.decode(b, offset2), 10, "le");
    if (this.signed) {
      return num.fromTwos(this.span * 8).clone();
    }
    return num;
  }
  encode(src, b, offset2 = 0) {
    if (typeof src === "number")
      src = new import_bn.default(src);
    if (this.signed) {
      src = src.toTwos(this.span * 8);
    }
    return this.blob.encode(src.toArrayLike(Buffer, "le", this.span), b, offset2);
  }
};
function u64(property) {
  return new BNLayout(8, false, property);
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
  const superCount = typeof count === "number" ? count : (0, import_bn.isBN)(count) ? count.toNumber() : new Proxy(count, {
    get(target, property2) {
      if (!parsedCount) {
        const countProperty = Reflect.get(target, "count");
        parsedCount = (0, import_bn.isBN)(countProperty) ? countProperty.toNumber() : countProperty;
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

// src/raydium/liquidity/stable.ts
var MODEL_DATA_PUBKEY = new import_web32.PublicKey("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo");
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
  const [min, max] = estimateRangeByXyReal(xReal, yReal);
  let minRangeIdx = min;
  let maxRangeIdx = max;
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
  const [min, max] = estimateRangeByX(x);
  let minRangeIdx = min;
  let maxRangeIdx = max;
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
  const [min, max] = estimateRangeByY(y);
  let minRangeIdx = min;
  let maxRangeIdx = max;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DataElement,
  MODEL_DATA_PUBKEY,
  StableLayout,
  formatLayout,
  getDxByDyBaseIn,
  getDyByDxBaseIn,
  getStablePrice,
  modelDataInfoLayout
});
//# sourceMappingURL=stable.js.map