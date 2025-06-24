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

// src/raydium/tradeV2/index.ts
var tradeV2_exports = {};
__export(tradeV2_exports, {
  makeSwapInstruction: () => makeSwapInstruction,
  route1Instruction: () => route1Instruction,
  route2Instruction: () => route2Instruction,
  routeInstruction: () => routeInstruction,
  swapBaseInAutoAccount: () => swapBaseInAutoAccount,
  swapBaseOutAutoAccount: () => swapBaseOutAutoAccount
});
module.exports = __toCommonJS(tradeV2_exports);

// src/raydium/tradeV2/trade.ts
var import_web325 = require("@solana/web3.js");
var import_spl_token16 = require("@solana/spl-token");
var import_bn24 = __toESM(require("bn.js"));

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
  var str, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), dp + 1, rm);
    str = finiteToString(x, true, dp + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFixed = function(dp, rm) {
  var str, y, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    y = finalise(new Ctor(x), dp + x.e + 1, rm);
    str = finiteToString(y, false, dp + y.e + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
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
  var str, x = this, Ctor = x.constructor;
  if (sd === void 0) {
    str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), sd, rm);
    str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
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
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.truncated = P.trunc = function() {
  return finalise(new this.constructor(this), this.e + 1, 1);
};
P.valueOf = P.toJSON = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() ? "-" + str : str;
};
function digitsToString(d) {
  var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws = d[i] + "";
      k = LOG_BASE - ws.length;
      if (k)
        str += getZeroString(k);
      str += ws;
    }
    w = d[i];
    ws = w + "";
    k = LOG_BASE - ws.length;
    if (k)
      str += getZeroString(k);
  } else if (w === 0) {
    return "0";
  }
  for (; w % 10 === 0; )
    w /= 10;
  return str + w;
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
function convertBase(str, baseIn, baseOut) {
  var j, arr = [0], arrL, i = 0, strL = str.length;
  for (; i < strL; ) {
    for (arrL = arr.length; arrL--; )
      arr[arrL] *= baseIn;
    arr[0] += NUMERALS.indexOf(str.charAt(i++));
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
  var k, e = x.e, str = digitsToString(x.d), len = str.length;
  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str = str.charAt(0) + "." + str.slice(1);
    }
    str = str + (x.e < 0 ? "e" : "e+") + x.e;
  } else if (e < 0) {
    str = "0." + getZeroString(-e - 1) + str;
    if (sd && (k = sd - len) > 0)
      str += getZeroString(k);
  } else if (e >= len) {
    str += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0)
      str = str + "." + getZeroString(k);
  } else {
    if ((k = e + 1) < len)
      str = str.slice(0, k) + "." + str.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len)
        str += ".";
      str += getZeroString(k);
    }
  }
  return str;
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
function parseDecimal(x, str) {
  var e, i, len;
  if ((e = str.indexOf(".")) > -1)
    str = str.replace(".", "");
  if ((i = str.search(/e/i)) > 0) {
    if (e < 0)
      e = i;
    e += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e < 0) {
    e = str.length;
  }
  for (i = 0; str.charCodeAt(i) === 48; i++)
    ;
  for (len = str.length; str.charCodeAt(len - 1) === 48; --len)
    ;
  str = str.slice(i, len);
  if (str) {
    len -= i;
    x.e = e = e - i - 1;
    x.d = [];
    i = (e + 1) % LOG_BASE;
    if (e < 0)
      i += LOG_BASE;
    if (i < len) {
      if (i)
        x.d.push(+str.slice(0, i));
      for (len -= LOG_BASE; i < len; )
        x.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }
    for (; i--; )
      str += "0";
    x.d.push(+str);
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
function parseOther(x, str) {
  var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
  if (str.indexOf("_") > -1) {
    str = str.replace(/(\d)_(?=\d)/g, "$1");
    if (isDecimal.test(str))
      return parseDecimal(x, str);
  } else if (str === "Infinity" || str === "NaN") {
    if (!+str)
      x.s = NaN;
    x.e = NaN;
    x.d = null;
    return x;
  }
  if (isHex.test(str)) {
    base = 16;
    str = str.toLowerCase();
  } else if (isBinary.test(str)) {
    base = 2;
  } else if (isOctal.test(str)) {
    base = 8;
  } else {
    throw Error(invalidArgument + str);
  }
  i = str.search(/p/i);
  if (i > 0) {
    p = +str.slice(i + 1);
    str = str.substring(2, i);
  } else {
    str = str.slice(2);
  }
  i = str.indexOf(".");
  isFloat = i >= 0;
  Ctor = x.constructor;
  if (isFloat) {
    str = str.replace(".", "");
    len = str.length;
    i = len - i;
    divisor = intPow(Ctor, new Ctor(base), i, i * 2);
  }
  xd = convertBase(str, base, BASE);
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
  var base, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
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
    str = nonFiniteToString(x);
  } else {
    str = finiteToString(x);
    i = str.indexOf(".");
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
      str = str.replace(".", "");
      y = new Ctor(1);
      y.e = str.length - i;
      y.d = convertBase(finiteToString(y), 10, base);
      y.e = y.d.length;
    }
    xd = convertBase(str, 10, base);
    e = len = xd.length;
    for (; xd[--len] == 0; )
      xd.pop();
    if (!xd[0]) {
      str = isExp ? "0p+0" : "0";
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
      for (i = 0, str = ""; i < len; i++)
        str += NUMERALS.charAt(xd[i]);
      if (isExp) {
        if (len > 1) {
          if (baseOut == 16 || baseOut == 8) {
            i = baseOut == 16 ? 4 : 3;
            for (--len; len % i; len++)
              str += "0";
            xd = convertBase(str, base, baseOut);
            for (len = xd.length; !xd[len - 1]; --len)
              ;
            for (i = 1, str = "1."; i < len; i++)
              str += NUMERALS.charAt(xd[i]);
          } else {
            str = str.charAt(0) + "." + str.slice(1);
          }
        }
        str = str + (e < 0 ? "p" : "p+") + e;
      } else if (e < 0) {
        for (; ++e; )
          str = "0" + str;
        str = "0." + str;
      } else {
        if (++e > len)
          for (e -= len; e--; )
            str += "0";
        else if (e < len)
          str = str.slice(0, e) + "." + str.slice(e);
      }
    }
    str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
  }
  return x.s < 0 ? "-" + str : str;
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
  let logger12 = (0, import_lodash.get)(moduleLoggers, moduleName);
  if (!logger12) {
    const logLevel = (0, import_lodash.get)(moduleLevels, moduleName);
    logger12 = new Logger({ name: moduleName, logLevel });
    (0, import_lodash.set)(moduleLoggers, moduleName, logger12);
  }
  return logger12;
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

// src/common/bignumber.ts
var import_bn6 = __toESM(require("bn.js"));

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
  const logger12 = createLogger("Raydium_parseBigNumberish");
  if (value instanceof import_bn.default) {
    return value;
  }
  if (typeof value === "string") {
    if (value.match(/^-?[0-9]+$/)) {
      return new import_bn.default(value);
    }
    logger12.logWithError(`invalid BigNumberish string: ${value}`);
  }
  if (typeof value === "number") {
    if (value % 1) {
      logger12.logWithError(`BigNumberish number underflow: ${value}`);
    }
    if (value >= MAX_SAFE || value <= -MAX_SAFE) {
      logger12.logWithError(`BigNumberish number overflow: ${value}`);
    }
    return new import_bn.default(String(value));
  }
  if (typeof value === "bigint") {
    return new import_bn.default(value.toString());
  }
  logger12.error(`invalid BigNumberish value: ${value}`);
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

// src/common/lodash.ts
function chunkArray(arr, chunkSize = 1, cache = []) {
  const tmp = [...arr];
  if (chunkSize <= 0)
    return cache;
  while (tmp.length)
    cache.push(tmp.splice(0, chunkSize));
  return cache;
}

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
function findProgramAddress(seeds, programId) {
  const [publicKey2, nonce] = import_web36.PublicKey.findProgramAddressSync(seeds, programId);
  return { publicKey: publicKey2, nonce };
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

// src/common/txTool/lookupTable.ts
var import_web39 = require("@solana/web3.js");
var LOOKUP_TABLE_CACHE = {
  "AcL1Vo8oy1ULiavEcjSUcwfBSForXMudcZvDZy5nzJkU": new import_web39.AddressLookupTableAccount({
    key: new import_web39.PublicKey("AcL1Vo8oy1ULiavEcjSUcwfBSForXMudcZvDZy5nzJkU"),
    state: import_web39.AddressLookupTableAccount.deserialize(Buffer.from("AQAAAP//////////I1rcEwAAAAAvAQYwun9CU6c5Ikm2pAj+D9IEnCOR45nK+SFTGSdpd6J6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbd9uHXZaGT2cvhRs7reawctIXtX1s3kTqM9YV+/wCpBt324e51j94YQl285GzN2rYa/E2DuQ0n/r35KNihi/wFSlNQ+F3IgtYUpVZyeIopbd8eq6vQpgZ4iEky9O72oAVKU1qZKSEGTSTocWDaOHx8NbXdvJK7geQfqEBBBUSNBqfVFxksXFEhjMlMPUrxf1ja7gibof1E49vZigAAAAAGp9UXGMd0yShWY5hpHV62i164o5tLbVxzVVshAAAAAIyXJY9OJInxuz0QKRSODYMLWhOZ2v8QhASOe9jb6fhZC3BlsePRfEU4nVJ/awTDzVi4bHMaoP21SbbRvAP4KUbIScv+6Yw2LHF/6K0ZjUPibbSWXCirYPGuuVl7zT789IUPLW4CpHr4JNCatp3ELXDLKMv6JJ+37le50lbBJ2LvBkX2T9y7AHdNGviJAqQNtlDUDCnauQRWybsLji6nPM8Qkw5asQRvCdB3MbX6IEBwytOrpM32l4jQygKG9TKgR0vZScQ2AsM/IHeQ7RajUkyhuZdc8SGiqQz/7H34torNR/Wir3sl0ruUrVxJWEZfUg+QLNAxxODdBi53/OP7Ioil1cqeBM9dtZC3FLov4yyxWRM/wcGStyJX/QfTnLBAHqkqWotPKVlShCVQqpP9W5W1rOao65IMk5QuQ2kMIOxzDMKAy2vjGSxQODgBz0QwGA+eP4ZjIjrIAQaXENv31QfLlOdXSRCkaybRniDHF4C8YcwhcvsqrOVuTP4B2Na+9wLdtrB31uz2rtlFI5kahdsnp/d1SrASDInYCtTYtdoke4kX+hoKWcEWM4Tle8pTUkUVv4BxS6fje/EzKBE4Qu/YsA/yfEEFGcr8Z57VKDw8uQzpiru7g4lvjnfapW62W030syevD8k07SGoxUHiuT/ai7gAHWWhDsVmg/C63ajgpkH7Sn3GdutArDTfyqOkdqv4/IPC/EFFy7mGkfDd2C57N5a/4jC+BbmJy7wQaSEZr0CQU88lPtUxIVvzGjC95b8Ooss2TqmkrayGKofkPMGQn7Ux+9lfwBSNfxwH8NgbpqC/7LNlV4I7nCvsXf3p+ohQk9NrAJb2KAFpUqEIJ9ZBV7BYDzHF/ORKYlgtvPnXjudZQ6CEo5OzUDaNIomTCCsvhD16TxJjsbgne1kGnQPCFSoaxUbq2V1bPMFQ3VYP6wDZ9bKStCFKx9A3tNbwZFC5ZGAN83MFK7XoTy+OmmcFEr6rLOjfSuTfPvHJkSVxW6Qllwkl67XcBi5v00u2gQsbu+38sp+rd5pA/LvyWj4P94ZGZwc1tE2P88xekCLcAwZGb+UhFzL/7K26csOb57yM5bvF9xJrLEObOkAAAAAn+HWRkdcPKyFFMnVwEoD7vnD0jCKFIU1sImubYCxNTSVzsKpaQX+fzNxrLAI3L14JQnJx/D6Uk2LADIHGqnGELzjEbkBDAlaM77NkXMPfqXNLSveCkWI7UEgNs31WEWB6XHSYI/v5DklHOb4QTtDOR804PVbi3fjloZeLR2F8d4FuZmMMO7ck3Fnkn2zEMG5gOmqsygb6PjTitArVl52NhcSznTxVnguaIJxiZkAnurDmn3MWR0PC2GLghp2KJqHCc6QQ85odeIjFHKOlRlJyeSXVJmL8vb1UgOzsbJPVP8p6zM4M3C1Sd7uWIHP33G42AP2Zg8ucn/n6meQjjD266JgCWdxZD6PXs9CsnIeL7SSG0/6lGb9xfP0ZcWkCXB/3hjxHYVXjra/GPOeXGk0fLLKjCbk+mgs2w6d2oCwimBipTzuoZ30GiI8ij8VRzD5CzMWtu2m21eDBIfjGAEo4pQeNNonKcqzV/cleX8ySZLOHsz8PtBCrLqF+VkLm9hOzIT+6i/nIf6keR4GWKMOD4AvqfpjHoD4DuhBpz8P28+DxkGrDXXr/nr20x291VPvcTU/b+b+o2kC9G0kcXeTlLjU6a2TQXWlZ4gBUdBl1jgT7mObSTpLblNiXZsLkbmVXZwvFKXua5cUKlWed/w30skmEUraTuQqtqr5fHZPW9n57EmeTif6LjHL2YJFZkQU+TrJmFzqzmF4/b8OwrPQAprl8mX3q4LUIdAS/a+11B6DWD1Xk2++Sn94dLC4xjkO4Wtlw8c4XuzciVbepHOmnoWzVu/0y3KCrLCSfQxQ3br8DJCoVzhgtPsS2nZZjsBGIZgnU0QpMv+2MnRsnKwdp1VsrCX84j/qvaZn4WhKunippgTbN2EUs0tPTP55Qfgj+nKmjtWW5IYs72FrEwJKYoNfsmqaF4o5pf4v9zgPwVwY/5I4XJKUL2L25m9kAQcW/K+H1RTFEUoj8Z4ajpOmAB/dG0COmCphVMW2CCMvnxhcGiSgPnpDuWu6qiJ7NG7ye5kvHgefgqPLeicspNJ5EpL3XiRNLM2tmJLI1awAwOyd6iHv0dCkMYRKaa6rcaZeYwmKCkckm0kM2JNmnmmAaBQQ7mwmIM0IMxX4f5W6j9PqZWcJxF7r17T/lQBAmcjoupRiJifbnXCNUv9GhpRF19WcBdeKbivRJVlGop6I2RS6lGImJ9udcI1S/0aGlEXX1ZwF14puK9ElWUainojZFYVHLHD6dIP2ESjqBzg3ol1/wB7+/ylGwd9LS7wSZ2A630CJSVKwH47K9P4bB8PEQP8BwjMFa7xQHOqZFP1XqaQ==", "base64"))
  })
};

// src/common/txTool/txTool.ts
var import_web310 = require("@solana/web3.js");
var import_axios = __toESM(require("axios"));

// src/common/fee.ts
var import_bn8 = __toESM(require("bn.js"));
var FEE_RATE_DENOMINATOR_VALUE = new import_bn8.default(1e6);

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
var s32 = import_buffer_layout.s32;
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

// src/raydium/clmm/clmm.ts
var import_web315 = require("@solana/web3.js");
var import_bn16 = __toESM(require("bn.js"));
var import_spl_token9 = require("@solana/spl-token");

// src/raydium/token/utils.ts
var import_web312 = require("@solana/web3.js");
var import_spl_token6 = require("@solana/spl-token");

// src/raydium/clmm/instrument.ts
var import_web314 = require("@solana/web3.js");
var import_bn15 = __toESM(require("bn.js"));
var import_spl_token8 = require("@solana/spl-token");

// src/raydium/clmm/utils/tick.ts
var import_bn14 = __toESM(require("bn.js"));

// src/raydium/clmm/utils/constants.ts
var import_bn10 = __toESM(require("bn.js"));
var ZERO = new import_bn10.default(0);
var ONE = new import_bn10.default(1);
var NEGATIVE_ONE = new import_bn10.default(-1);
var Q64 = new import_bn10.default(1).shln(64);
var Q128 = new import_bn10.default(1).shln(128);
var MaxU64 = Q64.sub(ONE);
var U64Resolution = 64;
var MaxUint128 = Q128.subn(1);
var MIN_TICK = -443636;
var MAX_TICK = -MIN_TICK;
var MIN_SQRT_PRICE_X64 = new import_bn10.default("4295048016");
var MAX_SQRT_PRICE_X64 = new import_bn10.default("79226673521066979257578248091");
var MIN_SQRT_PRICE_X64_ADD_ONE = new import_bn10.default("4295048017");
var MAX_SQRT_PRICE_X64_SUB_ONE = new import_bn10.default("79226673521066979257578248090");
var BIT_PRECISION = 16;
var LOG_B_2_X32 = "59543866431248";
var LOG_B_P_ERR_MARGIN_LOWER_X64 = "184467440737095516";
var LOG_B_P_ERR_MARGIN_UPPER_X64 = "15793534762490258745";
var FEE_RATE_DENOMINATOR = new import_bn10.default(10).pow(new import_bn10.default(6));
var U64_IGNORE_RANGE = new import_bn10.default("18446744073700000000");

// src/raydium/clmm/utils/math.ts
var import_bn13 = __toESM(require("bn.js"));

// src/raydium/clmm/utils/util.ts
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

// src/raydium/clmm/utils/pool.ts
var import_web313 = require("@solana/web3.js");
var import_spl_token7 = require("@solana/spl-token");
var import_bn12 = __toESM(require("bn.js"));

// src/raydium/clmm/utils/position.ts
var import_bn11 = __toESM(require("bn.js"));
var PositionUtils = class {
  static getfeeGrowthInside(poolState, tickLowerState, tickUpperState) {
    let feeGrowthBelowX64A = new import_bn11.default(0);
    let feeGrowthBelowX64B = new import_bn11.default(0);
    if (poolState.tickCurrent >= tickLowerState.tick) {
      feeGrowthBelowX64A = tickLowerState.feeGrowthOutsideX64A;
      feeGrowthBelowX64B = tickLowerState.feeGrowthOutsideX64B;
    } else {
      feeGrowthBelowX64A = poolState.feeGrowthGlobalX64A.sub(tickLowerState.feeGrowthOutsideX64A);
      feeGrowthBelowX64B = poolState.feeGrowthGlobalX64B.sub(tickLowerState.feeGrowthOutsideX64B);
    }
    let feeGrowthAboveX64A = new import_bn11.default(0);
    let feeGrowthAboveX64B = new import_bn11.default(0);
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
      let rewardGrowthsBelow = new import_bn11.default(0);
      if (tickLowerState.liquidityGross.eqn(0)) {
        rewardGrowthsBelow = rewardInfos[i].rewardGrowthGlobalX64;
      } else if (tickCurrentIndex < tickLowerState.tick) {
        rewardGrowthsBelow = rewardInfos[i].rewardGrowthGlobalX64.sub(tickLowerState.rewardGrowthsOutsideX64[i]);
      } else {
        rewardGrowthsBelow = tickLowerState.rewardGrowthsOutsideX64[i];
      }
      let rewardGrowthsAbove = new import_bn11.default(0);
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
      let rewardGrowthsBelow = new import_bn11.default(0);
      if (tickLowerState.liquidityGross.eqn(0)) {
        rewardGrowthsBelow = rewardInfos[i].rewardGrowthGlobalX64;
      } else if (tickCurrentIndex < tickLowerState.tick) {
        rewardGrowthsBelow = rewardInfos[i].rewardGrowthGlobalX64.sub(tickLowerState.rewardGrowthsOutsideX64[i]);
      } else {
        rewardGrowthsBelow = tickLowerState.rewardGrowthsOutsideX64[i];
      }
      let rewardGrowthsAbove = new import_bn11.default(0);
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
      getTransferAmountFeeV2(new import_bn11.default(new decimal_default(amounts.amountA.toString()).mul(coefficientRe).toFixed(0)), poolInfo.mintA.extensions?.feeConfig, epochInfo, true),
      getTransferAmountFeeV2(new import_bn11.default(new decimal_default(amounts.amountB.toString()).mul(coefficientRe).toFixed(0)), poolInfo.mintB.extensions?.feeConfig, epochInfo, true)
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
        tokenProgramId: new import_web313.PublicKey(apiRewardProgram)
      };
      if (itemReward.tokenMint.equals(import_web313.PublicKey.default))
        continue;
      if (chainTime <= itemReward.openTime.toNumber() || poolLiquidity.eq(ZERO)) {
        nRewardInfo.push(itemReward);
        continue;
      }
      const latestUpdateTime = new import_bn12.default(Math.min(itemReward.endTime.toNumber(), chainTime));
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
              pendingReward: new import_bn12.default(0)
            })),
            leverage,
            tokenFeeAmountA: new import_bn12.default(0),
            tokenFeeAmountB: new import_bn12.default(0)
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
            itemPA.tokenFeeAmountA = tokenFeeAmountA.gte(new import_bn12.default(0)) ? tokenFeeAmountA : new import_bn12.default(0);
            itemPA.tokenFeeAmountB = tokenFeeAmountB.gte(new import_bn12.default(0)) ? tokenFeeAmountB : new import_bn12.default(0);
            for (let i = 0; i < rewardInfos.length; i++) {
              itemPA.rewardInfos[i].pendingReward = rewardInfos[i].gte(new import_bn12.default(0)) ? rewardInfos[i] : new import_bn12.default(0);
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
      sqrtPriceLimitX64 = isBaseIn ? MIN_SQRT_PRICE_X64.add(new import_bn12.default(1)) : MAX_SQRT_PRICE_X64.sub(new import_bn12.default(1));
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
    const _minAmountOut = _expectedAmountOut.mul(new import_bn12.default(Math.floor((1 - slippage) * 1e10))).div(new import_bn12.default(1e10));
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
        isToken2022: inputMint.programId === import_spl_token7.TOKEN_2022_PROGRAM_ID.toBase58()
      }),
      new Token({
        ...outMint,
        mint: outMint.address,
        isToken2022: outMint.programId === import_spl_token7.TOKEN_2022_PROGRAM_ID.toBase58()
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
      baseMint: new import_web313.PublicKey(inputMint.address),
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
      denominator: new import_bn12.default(10).pow(new import_bn12.default(20 + baseToken.decimals)),
      quoteToken: outToken,
      numerator: currentPrice.mul(new decimal_default(10 ** (20 + outToken.decimals))).toFixed(0)
    });
    const _executionPrice = new Price({
      baseToken,
      denominator: new import_bn12.default(10).pow(new import_bn12.default(20 + baseToken.decimals)),
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
      sqrtPriceLimitX64 = !isBaseIn ? MIN_SQRT_PRICE_X64.add(new import_bn12.default(1)) : MAX_SQRT_PRICE_X64.sub(new import_bn12.default(1));
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
    const _maxAmountIn = _expectedAmountIn.mul(new import_bn12.default(Math.floor((1 + slippage) * 1e10))).div(new import_bn12.default(1e10));
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
    const _amount = new import_bn12.default(new decimal_default(addFeeAmount.amount.sub(addFeeAmount.fee ?? ZERO).toString()).toFixed(0));
    let liquidity;
    if (sqrtPriceX64.lte(sqrtPriceX64A)) {
      liquidity = inputA ? LiquidityMath.getLiquidityFromTokenAmountA(sqrtPriceX64A, sqrtPriceX64B, _amount, !add2) : new import_bn12.default(0);
    } else if (sqrtPriceX64.lte(sqrtPriceX64B)) {
      const liquidity0 = LiquidityMath.getLiquidityFromTokenAmountA(sqrtPriceX64, sqrtPriceX64B, _amount, !add2);
      const liquidity1 = LiquidityMath.getLiquidityFromTokenAmountB(sqrtPriceX64A, sqrtPriceX64, _amount);
      liquidity = inputA ? liquidity0 : liquidity1;
    } else {
      liquidity = inputA ? new import_bn12.default(0) : LiquidityMath.getLiquidityFromTokenAmountB(sqrtPriceX64A, sqrtPriceX64B, _amount);
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
    const fetchRpcList = poolList.filter((p) => !rpcDataMap[p.id]).map((p) => new import_web313.PublicKey(p.id));
    const rpcRes = await getMultipleAccountsInfo(connection, fetchRpcList);
    rpcRes.forEach((r, idx) => {
      if (!r)
        return;
      rpcDataMap[fetchRpcList[idx].toBase58()] = PoolInfoLayout.decode(r.data);
    });
    const pdaList = poolList.map((poolInfo) => getPdaExBitmapAccount(new import_web313.PublicKey(poolInfo.programId), new import_web313.PublicKey(poolInfo.id)).publicKey);
    const exBitData = await PoolUtils.fetchExBitmaps({
      connection,
      exBitmapAddress: pdaList,
      batchRequest: false
    });
    return poolList.reduce((acc, cur) => ({
      ...acc,
      [cur.id]: {
        ...rpcDataMap[cur.id],
        id: new import_web313.PublicKey(cur.id),
        version: 6,
        programId: new import_web313.PublicKey(cur.programId),
        mintA: cur.mintA,
        mintB: cur.mintB,
        ammConfig: {
          ...cur.config,
          id: new import_web313.PublicKey(cur.config.id),
          fundOwner: ""
        },
        currentPrice: new decimal_default(cur.price),
        exBitmapAccount: getPdaExBitmapAccount(new import_web313.PublicKey(cur.programId), new import_web313.PublicKey(cur.id)).publicKey,
        exBitmapInfo: exBitData[getPdaExBitmapAccount(new import_web313.PublicKey(cur.programId), new import_web313.PublicKey(cur.id)).publicKey.toBase58()],
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
    return new import_bn13.default(num.mul(decimal_default.pow(2, 64)).floor().toFixed());
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
    let ratio = (tickAbs & 1) != 0 ? new import_bn13.default("18445821805675395072") : new import_bn13.default("18446744073709551616");
    if ((tickAbs & 2) != 0)
      ratio = mulRightShift(ratio, new import_bn13.default("18444899583751176192"));
    if ((tickAbs & 4) != 0)
      ratio = mulRightShift(ratio, new import_bn13.default("18443055278223355904"));
    if ((tickAbs & 8) != 0)
      ratio = mulRightShift(ratio, new import_bn13.default("18439367220385607680"));
    if ((tickAbs & 16) != 0)
      ratio = mulRightShift(ratio, new import_bn13.default("18431993317065453568"));
    if ((tickAbs & 32) != 0)
      ratio = mulRightShift(ratio, new import_bn13.default("18417254355718170624"));
    if ((tickAbs & 64) != 0)
      ratio = mulRightShift(ratio, new import_bn13.default("18387811781193609216"));
    if ((tickAbs & 128) != 0)
      ratio = mulRightShift(ratio, new import_bn13.default("18329067761203558400"));
    if ((tickAbs & 256) != 0)
      ratio = mulRightShift(ratio, new import_bn13.default("18212142134806163456"));
    if ((tickAbs & 512) != 0)
      ratio = mulRightShift(ratio, new import_bn13.default("17980523815641700352"));
    if ((tickAbs & 1024) != 0)
      ratio = mulRightShift(ratio, new import_bn13.default("17526086738831433728"));
    if ((tickAbs & 2048) != 0)
      ratio = mulRightShift(ratio, new import_bn13.default("16651378430235570176"));
    if ((tickAbs & 4096) != 0)
      ratio = mulRightShift(ratio, new import_bn13.default("15030750278694412288"));
    if ((tickAbs & 8192) != 0)
      ratio = mulRightShift(ratio, new import_bn13.default("12247334978884435968"));
    if ((tickAbs & 16384) != 0)
      ratio = mulRightShift(ratio, new import_bn13.default("8131365268886854656"));
    if ((tickAbs & 32768) != 0)
      ratio = mulRightShift(ratio, new import_bn13.default("3584323654725218816"));
    if ((tickAbs & 65536) != 0)
      ratio = mulRightShift(ratio, new import_bn13.default("696457651848324352"));
    if ((tickAbs & 131072) != 0)
      ratio = mulRightShift(ratio, new import_bn13.default("26294789957507116"));
    if ((tickAbs & 262144) != 0)
      ratio = mulRightShift(ratio, new import_bn13.default("37481735321082"));
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
    const adjustedMsb = new import_bn13.default(msb - 64);
    const log2pIntegerX32 = signedLeftShift(adjustedMsb, 32, 128);
    let bit = new import_bn13.default("8000000000000000", "hex");
    let precision = 0;
    let log2pFractionX64 = new import_bn13.default(0);
    let r = msb >= 64 ? sqrtPriceX64.shrn(msb - 63) : sqrtPriceX64.shln(63 - msb);
    while (bit.gt(new import_bn13.default(0)) && precision < BIT_PRECISION) {
      r = r.mul(r);
      const rMoreThanTwo = r.shrn(127);
      r = r.shrn(63 + rMoreThanTwo.toNumber());
      log2pFractionX64 = log2pFractionX64.add(bit.mul(rMoreThanTwo));
      bit = bit.shrn(1);
      precision += 1;
    }
    const log2pFractionX32 = log2pFractionX64.shrn(32);
    const log2pX32 = log2pIntegerX32.add(log2pFractionX32);
    const logbpX64 = log2pX32.mul(new import_bn13.default(LOG_B_2_X32));
    const tickLow = signedRightShift(logbpX64.sub(new import_bn13.default(LOG_B_P_ERR_MARGIN_LOWER_X64)), 64, 128).toNumber();
    const tickHigh = signedRightShift(logbpX64.add(new import_bn13.default(LOG_B_P_ERR_MARGIN_UPPER_X64)), 64, 128).toNumber();
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
        amountB: new import_bn13.default(0)
      };
    } else if (sqrtPriceCurrentX64.lt(sqrtPriceX64B)) {
      const amountA = LiquidityMath.getTokenAmountAFromLiquidity(sqrtPriceCurrentX64, sqrtPriceX64B, liquidity, roundUp);
      const amountB = LiquidityMath.getTokenAmountBFromLiquidity(sqrtPriceX64A, sqrtPriceCurrentX64, liquidity, roundUp);
      return { amountA, amountB };
    } else {
      return {
        amountA: new import_bn13.default(0),
        amountB: LiquidityMath.getTokenAmountBFromLiquidity(sqrtPriceX64A, sqrtPriceX64B, liquidity, roundUp)
      };
    }
  }
  static getAmountsFromLiquidityWithSlippage(sqrtPriceCurrentX64, sqrtPriceX64A, sqrtPriceX64B, liquidity, amountMax, roundUp, amountSlippage) {
    const { amountA, amountB } = LiquidityMath.getAmountsFromLiquidity(sqrtPriceCurrentX64, sqrtPriceX64A, sqrtPriceX64B, liquidity, roundUp);
    const coefficient = amountMax ? 1 + amountSlippage : 1 - amountSlippage;
    const amount0Slippage = new import_bn13.default(new decimal_default(amountA.toString()).mul(coefficient).toFixed(0));
    const amount1Slippage = new import_bn13.default(new decimal_default(amountB.toString()).mul(coefficient).toFixed(0));
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
      getTransferAmountFeeV2(new import_bn13.default(new decimal_default(amounts.amountA.toString()).mul(coefficientRe).toFixed(0)), poolInfo.mintA.extensions?.feeConfig, epochInfo, amountAddFee),
      getTransferAmountFeeV2(new import_bn13.default(new decimal_default(amounts.amountB.toString()).mul(coefficientRe).toFixed(0)), poolInfo.mintB.extensions?.feeConfig, epochInfo, amountAddFee)
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
      feeAmount: new import_bn13.default(0)
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
      sqrtPriceX64Next: new import_bn13.default(0),
      amountIn: new import_bn13.default(0),
      amountOut: new import_bn13.default(0),
      feeAmount: new import_bn13.default(0)
    };
    const baseInput = amountRemaining.gte(ZERO);
    if (baseInput) {
      const amountRemainingSubtractFee = MathUtil.mulDivFloor(amountRemaining, FEE_RATE_DENOMINATOR.sub(new import_bn13.default(feeRate.toString())), FEE_RATE_DENOMINATOR);
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
      swapStep.feeAmount = MathUtil.mulDivCeil(swapStep.amountIn, new import_bn13.default(feeRate), FEE_RATE_DENOMINATOR.sub(new import_bn13.default(feeRate)));
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
    let b = new import_bn14.default(0);
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
var logger6 = createLogger("Raydium_Clmm");
var anchorDataBuf = {
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
      { pubkey: import_web314.SystemProgram.programId, isSigner: false, isWritable: false },
      { pubkey: RENT_PROGRAM_ID, isSigner: false, isWritable: false },
      ...extendMintAccount?.map((k) => ({ pubkey: k, isSigner: false, isWritable: false })) || []
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
      sqrtPriceX64,
      zero: ZERO
    }, data);
    const aData = Buffer.from([...anchorDataBuf.createPool, ...data]);
    return new import_web314.TransactionInstruction({
      keys,
      programId,
      data: aData
    });
  }
  static async createPoolInstructions(props) {
    const { programId, owner, mintA, mintB, ammConfigId, initialPriceX64, extendMintAccount } = props;
    const [mintAAddress, mintBAddress] = [new import_web314.PublicKey(mintA.address), new import_web314.PublicKey(mintB.address)];
    const { publicKey: poolId } = getPdaPoolId(programId, ammConfigId, mintAAddress, mintBAddress);
    const { publicKey: observationId } = getPdaObservationAccount(programId, poolId);
    const { publicKey: mintAVault } = getPdaPoolVaultId(programId, poolId, mintAAddress);
    const { publicKey: mintBVault } = getPdaPoolVaultId(programId, poolId, mintBAddress);
    const exBitmapAccount = getPdaExBitmapAccount(programId, poolId).publicKey;
    const ins = [
      this.createPoolInstruction(programId, poolId, owner, ammConfigId, observationId, mintAAddress, mintAVault, new import_web314.PublicKey(mintA.programId || import_spl_token8.TOKEN_PROGRAM_ID), mintBAddress, mintBVault, new import_web314.PublicKey(mintB.programId || import_spl_token8.TOKEN_PROGRAM_ID), exBitmapAccount, initialPriceX64, extendMintAccount)
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
      { pubkey: import_web314.SystemProgram.programId, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: METADATA_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
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
    const aData = Buffer.from([...anchorDataBuf.openPosition, ...data]);
    return new import_web314.TransactionInstruction({
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
      { pubkey: import_web314.SystemProgram.programId, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
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
    const aData = Buffer.from([...anchorDataBuf.openPositionWithTokenEx, ...data]);
    return new import_web314.TransactionInstruction({
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
    const [programId, id] = [new import_web314.PublicKey(poolInfo.programId), new import_web314.PublicKey(poolInfo.id)];
    let nftMintAccount;
    if (getEphemeralSigners) {
      nftMintAccount = new import_web314.PublicKey((await getEphemeralSigners(1))[0]);
    } else {
      const _k = import_web314.Keypair.generate();
      signers.push(_k);
      nftMintAccount = _k.publicKey;
    }
    const tickArrayLowerStartIndex = TickUtils.getTickArrayStartIndexByTick(tickLower, poolInfo.config.tickSpacing);
    const tickArrayUpperStartIndex = TickUtils.getTickArrayStartIndexByTick(tickUpper, poolInfo.config.tickSpacing);
    const { publicKey: tickArrayLower } = getPdaTickArrayAddress(programId, id, tickArrayLowerStartIndex);
    const { publicKey: tickArrayUpper } = getPdaTickArrayAddress(programId, id, tickArrayUpperStartIndex);
    const { publicKey: positionNftAccount } = nft2022 ? getATAAddress(ownerInfo.wallet, nftMintAccount, import_spl_token8.TOKEN_2022_PROGRAM_ID) : getATAAddress(ownerInfo.wallet, nftMintAccount, import_spl_token8.TOKEN_PROGRAM_ID);
    const { publicKey: metadataAccount } = getPdaMetadataKey(nftMintAccount);
    const { publicKey: personalPosition } = getPdaPersonalPositionAddress(programId, nftMintAccount);
    const { publicKey: protocolPosition } = getPdaProtocolPositionAddress(programId, id, tickLower, tickUpper);
    const ins = nft2022 ? this.openPositionFromLiquidityInstruction22(programId, ownerInfo.feePayer, id, ownerInfo.wallet, nftMintAccount, positionNftAccount, protocolPosition, tickArrayLower, tickArrayUpper, personalPosition, ownerInfo.tokenAccountA, ownerInfo.tokenAccountB, new import_web314.PublicKey(poolKeys.vault.A), new import_web314.PublicKey(poolKeys.vault.B), new import_web314.PublicKey(poolInfo.mintA.address), new import_web314.PublicKey(poolInfo.mintB.address), tickLower, tickUpper, tickArrayLowerStartIndex, tickArrayUpperStartIndex, liquidity, amountMaxA, amountMaxB, withMetadata, PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.config.tickSpacing, [
      tickArrayLowerStartIndex,
      tickArrayUpperStartIndex
    ]) ? getPdaExBitmapAccount(programId, id).publicKey : void 0) : this.openPositionFromLiquidityInstruction(programId, ownerInfo.feePayer, id, ownerInfo.wallet, nftMintAccount, positionNftAccount, metadataAccount, protocolPosition, tickArrayLower, tickArrayUpper, personalPosition, ownerInfo.tokenAccountA, ownerInfo.tokenAccountB, new import_web314.PublicKey(poolKeys.vault.A), new import_web314.PublicKey(poolKeys.vault.B), new import_web314.PublicKey(poolInfo.mintA.address), new import_web314.PublicKey(poolInfo.mintB.address), tickLower, tickUpper, tickArrayLowerStartIndex, tickArrayUpperStartIndex, liquidity, amountMaxA, amountMaxB, withMetadata, PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.config.tickSpacing, [
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
    const [programId, id] = [new import_web314.PublicKey(poolInfo.programId), new import_web314.PublicKey(poolInfo.id)];
    let nftMintAccount;
    if (getEphemeralSigners) {
      nftMintAccount = new import_web314.PublicKey((await getEphemeralSigners(1))[0]);
    } else {
      const _k = import_web314.Keypair.generate();
      signers.push(_k);
      nftMintAccount = _k.publicKey;
    }
    const tickArrayLowerStartIndex = TickUtils.getTickArrayStartIndexByTick(tickLower, poolInfo.config.tickSpacing);
    const tickArrayUpperStartIndex = TickUtils.getTickArrayStartIndexByTick(tickUpper, poolInfo.config.tickSpacing);
    const { publicKey: tickArrayLower } = getPdaTickArrayAddress(programId, id, tickArrayLowerStartIndex);
    const { publicKey: tickArrayUpper } = getPdaTickArrayAddress(programId, id, tickArrayUpperStartIndex);
    const { publicKey: positionNftAccount } = nft2022 ? getATAAddress(ownerInfo.wallet, nftMintAccount, import_spl_token8.TOKEN_2022_PROGRAM_ID) : getATAAddress(ownerInfo.wallet, nftMintAccount, import_spl_token8.TOKEN_PROGRAM_ID);
    const { publicKey: metadataAccount } = getPdaMetadataKey(nftMintAccount);
    const { publicKey: personalPosition } = getPdaPersonalPositionAddress(programId, nftMintAccount);
    const { publicKey: protocolPosition } = getPdaProtocolPositionAddress(programId, id, tickLower, tickUpper);
    const ins = nft2022 ? this.openPositionFromBaseInstruction22(programId, ownerInfo.feePayer, id, ownerInfo.wallet, nftMintAccount, positionNftAccount, protocolPosition, tickArrayLower, tickArrayUpper, personalPosition, ownerInfo.tokenAccountA, ownerInfo.tokenAccountB, new import_web314.PublicKey(poolKeys.vault.A), new import_web314.PublicKey(poolKeys.vault.B), new import_web314.PublicKey(poolInfo.mintA.address), new import_web314.PublicKey(poolInfo.mintB.address), tickLower, tickUpper, tickArrayLowerStartIndex, tickArrayUpperStartIndex, withMetadata, base, baseAmount, otherAmountMax, PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.config.tickSpacing, [
      tickArrayLowerStartIndex,
      tickArrayUpperStartIndex
    ]) ? getPdaExBitmapAccount(programId, id).publicKey : void 0) : this.openPositionFromBaseInstruction(programId, ownerInfo.feePayer, id, ownerInfo.wallet, nftMintAccount, positionNftAccount, metadataAccount, protocolPosition, tickArrayLower, tickArrayUpper, personalPosition, ownerInfo.tokenAccountA, ownerInfo.tokenAccountB, new import_web314.PublicKey(poolKeys.vault.A), new import_web314.PublicKey(poolKeys.vault.B), new import_web314.PublicKey(poolInfo.mintA.address), new import_web314.PublicKey(poolInfo.mintB.address), tickLower, tickUpper, tickArrayLowerStartIndex, tickArrayUpperStartIndex, withMetadata, base, baseAmount, otherAmountMax, PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.config.tickSpacing, [
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
      { pubkey: import_web314.SystemProgram.programId, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: METADATA_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
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
      liquidity: new import_bn15.default(0),
      amountMaxA: base === "MintA" ? baseAmount : otherAmountMax,
      amountMaxB: base === "MintA" ? otherAmountMax : baseAmount,
      withMetadata: withMetadata === "create",
      baseFlag: base === "MintA",
      optionBaseFlag: 1
    }, data);
    const aData = Buffer.from([...anchorDataBuf.openPosition, ...data]);
    return new import_web314.TransactionInstruction({
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
      { pubkey: import_web314.SystemProgram.programId, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
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
      liquidity: new import_bn15.default(0),
      amountMaxA: base === "MintA" ? baseAmount : otherAmountMax,
      amountMaxB: base === "MintA" ? otherAmountMax : baseAmount,
      withMetadata: withMetadata === "create",
      baseFlag: base === "MintA",
      optionBaseFlag: 1
    }, data);
    const aData = Buffer.from([...anchorDataBuf.openPositionWithTokenEx, ...data]);
    return new import_web314.TransactionInstruction({
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
      nftMintAccount = new import_web314.PublicKey((await getEphemeralSigners(1))[0]);
    } else {
      const _k = import_web314.Keypair.generate();
      signers.push(_k);
      nftMintAccount = _k.publicKey;
    }
    const [programId, id] = [new import_web314.PublicKey(poolInfo.programId), new import_web314.PublicKey(poolInfo.id)];
    const tickArrayLowerStartIndex = TickUtils.getTickArrayStartIndexByTick(tickLower, poolInfo.config.tickSpacing);
    const tickArrayUpperStartIndex = TickUtils.getTickArrayStartIndexByTick(tickUpper, poolInfo.config.tickSpacing);
    const { publicKey: tickArrayLower } = getPdaTickArrayAddress(programId, id, tickArrayLowerStartIndex);
    const { publicKey: tickArrayUpper } = getPdaTickArrayAddress(programId, id, tickArrayUpperStartIndex);
    const { publicKey: positionNftAccount } = nft2022 ? getATAAddress(ownerInfo.wallet, nftMintAccount, import_spl_token8.TOKEN_2022_PROGRAM_ID) : getATAAddress(ownerInfo.wallet, nftMintAccount, import_spl_token8.TOKEN_PROGRAM_ID);
    const { publicKey: metadataAccount } = getPdaMetadataKey(nftMintAccount);
    const { publicKey: personalPosition } = getPdaPersonalPositionAddress(programId, nftMintAccount);
    const { publicKey: protocolPosition } = getPdaProtocolPositionAddress(programId, id, tickLower, tickUpper);
    const ins = nft2022 ? this.openPositionFromLiquidityInstruction22(programId, ownerInfo.wallet, id, ownerInfo.wallet, nftMintAccount, positionNftAccount, protocolPosition, tickArrayLower, tickArrayUpper, personalPosition, ownerInfo.tokenAccountA, ownerInfo.tokenAccountB, new import_web314.PublicKey(poolKeys.vault.A), new import_web314.PublicKey(poolKeys.vault.B), new import_web314.PublicKey(poolKeys.mintA.address), new import_web314.PublicKey(poolKeys.mintB.address), tickLower, tickUpper, tickArrayLowerStartIndex, tickArrayUpperStartIndex, liquidity, amountMaxA, amountMaxB, withMetadata, PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.config.tickSpacing, [
      tickArrayLowerStartIndex,
      tickArrayUpperStartIndex
    ]) ? getPdaExBitmapAccount(programId, id).publicKey : void 0) : this.openPositionFromLiquidityInstruction(programId, ownerInfo.wallet, id, ownerInfo.wallet, nftMintAccount, positionNftAccount, metadataAccount, protocolPosition, tickArrayLower, tickArrayUpper, personalPosition, ownerInfo.tokenAccountA, ownerInfo.tokenAccountB, new import_web314.PublicKey(poolKeys.vault.A), new import_web314.PublicKey(poolKeys.vault.B), new import_web314.PublicKey(poolKeys.mintA.address), new import_web314.PublicKey(poolKeys.mintB.address), tickLower, tickUpper, tickArrayLowerStartIndex, tickArrayUpperStartIndex, liquidity, amountMaxA, amountMaxB, withMetadata, PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.config.tickSpacing, [
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
      { pubkey: import_web314.SystemProgram.programId, isSigner: false, isWritable: false },
      { pubkey: nft2022 ? import_spl_token8.TOKEN_2022_PROGRAM_ID : import_spl_token8.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false }
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({}, data);
    const aData = Buffer.from([...anchorDataBuf.closePosition, ...data]);
    return new import_web314.TransactionInstruction({
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
    const programId = new import_web314.PublicKey(poolInfo.programId);
    const positionNftAccount = nft2022 ? getATAAddress(ownerInfo.wallet, ownerPosition.nftMint, import_spl_token8.TOKEN_2022_PROGRAM_ID).publicKey : getATAAddress(ownerInfo.wallet, ownerPosition.nftMint, import_spl_token8.TOKEN_PROGRAM_ID).publicKey;
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
      { pubkey: import_spl_token8.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
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
    const aData = Buffer.from([...anchorDataBuf.increaseLiquidity, ...data]);
    return new import_web314.TransactionInstruction({
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
    const [programId, id] = [new import_web314.PublicKey(poolInfo.programId), new import_web314.PublicKey(poolInfo.id)];
    const tickArrayLowerStartIndex = TickUtils.getTickArrayStartIndexByTick(ownerPosition.tickLower, poolInfo.config.tickSpacing);
    const tickArrayUpperStartIndex = TickUtils.getTickArrayStartIndexByTick(ownerPosition.tickUpper, poolInfo.config.tickSpacing);
    const { publicKey: tickArrayLower } = getPdaTickArrayAddress(programId, id, tickArrayLowerStartIndex);
    const { publicKey: tickArrayUpper } = getPdaTickArrayAddress(programId, id, tickArrayUpperStartIndex);
    const { publicKey: positionNftAccount } = nft2022 ? getATAAddress(ownerInfo.wallet, ownerPosition.nftMint, import_spl_token8.TOKEN_2022_PROGRAM_ID) : getATAAddress(ownerInfo.wallet, ownerPosition.nftMint, import_spl_token8.TOKEN_PROGRAM_ID);
    const { publicKey: personalPosition } = getPdaPersonalPositionAddress(programId, ownerPosition.nftMint);
    const { publicKey: protocolPosition } = getPdaProtocolPositionAddress(programId, id, ownerPosition.tickLower, ownerPosition.tickUpper);
    const ins = this.increasePositionFromLiquidityInstruction(programId, ownerInfo.wallet, positionNftAccount, personalPosition, id, protocolPosition, tickArrayLower, tickArrayUpper, ownerInfo.tokenAccountA, ownerInfo.tokenAccountB, new import_web314.PublicKey(poolKeys.vault.A), new import_web314.PublicKey(poolKeys.vault.B), new import_web314.PublicKey(poolInfo.mintA.address), new import_web314.PublicKey(poolInfo.mintB.address), liquidity, amountMaxA, amountMaxB, PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.config.tickSpacing, [
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
    const [programId, id] = [new import_web314.PublicKey(poolInfo.programId), new import_web314.PublicKey(poolInfo.id)];
    const tickArrayLowerStartIndex = TickUtils.getTickArrayStartIndexByTick(ownerPosition.tickLower, poolInfo.config.tickSpacing);
    const tickArrayUpperStartIndex = TickUtils.getTickArrayStartIndexByTick(ownerPosition.tickUpper, poolInfo.config.tickSpacing);
    const { publicKey: tickArrayLower } = getPdaTickArrayAddress(programId, id, tickArrayLowerStartIndex);
    const { publicKey: tickArrayUpper } = getPdaTickArrayAddress(programId, id, tickArrayUpperStartIndex);
    const { publicKey: positionNftAccount } = nft2022 ? getATAAddress(ownerInfo.wallet, ownerPosition.nftMint, import_spl_token8.TOKEN_2022_PROGRAM_ID) : getATAAddress(ownerInfo.wallet, ownerPosition.nftMint, import_spl_token8.TOKEN_PROGRAM_ID);
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
        this.increasePositionFromBaseInstruction(programId, ownerInfo.wallet, positionNftAccount, personalPosition, id, protocolPosition, tickArrayLower, tickArrayUpper, ownerInfo.tokenAccountA, ownerInfo.tokenAccountB, new import_web314.PublicKey(poolKeys.vault.A), new import_web314.PublicKey(poolKeys.vault.B), new import_web314.PublicKey(poolInfo.mintA.address), new import_web314.PublicKey(poolInfo.mintB.address), base, baseAmount, otherAmountMax, PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.config.tickSpacing, [
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
      { pubkey: import_spl_token8.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: mintMintA, isSigner: false, isWritable: false },
      { pubkey: mintMintB, isSigner: false, isWritable: false },
      ...remainingAccounts
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
      liquidity: new import_bn15.default(0),
      amountMaxA: base === "MintA" ? baseAmount : otherAmountMax,
      amountMaxB: base === "MintA" ? otherAmountMax : baseAmount,
      baseFlag: base === "MintA",
      optionBaseFlag: 1
    }, data);
    const aData = Buffer.from([...anchorDataBuf.increaseLiquidity, ...data]);
    return new import_web314.TransactionInstruction({
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
      { pubkey: import_spl_token8.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
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
    const aData = Buffer.from([...anchorDataBuf.decreaseLiquidity, ...data]);
    return new import_web314.TransactionInstruction({
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
    const [poolProgramId, id] = [new import_web314.PublicKey(poolInfo.programId), new import_web314.PublicKey(poolInfo.id)];
    const tickArrayLowerStartIndex = TickUtils.getTickArrayStartIndexByTick(ownerPosition.tickLower, poolInfo.config.tickSpacing);
    const tickArrayUpperStartIndex = TickUtils.getTickArrayStartIndexByTick(ownerPosition.tickUpper, poolInfo.config.tickSpacing);
    const { publicKey: tickArrayLower } = getPdaTickArrayAddress(poolProgramId, id, tickArrayLowerStartIndex);
    const { publicKey: tickArrayUpper } = getPdaTickArrayAddress(poolProgramId, id, tickArrayUpperStartIndex);
    const { publicKey: positionNftAccount } = nft2022 ? getATAAddress(ownerInfo.wallet, ownerPosition.nftMint, import_spl_token8.TOKEN_2022_PROGRAM_ID) : getATAAddress(ownerInfo.wallet, ownerPosition.nftMint, programId);
    const { publicKey: personalPosition } = getPdaPersonalPositionAddress(poolProgramId, ownerPosition.nftMint);
    const { publicKey: protocolPosition } = getPdaProtocolPositionAddress(poolProgramId, id, ownerPosition.tickLower, ownerPosition.tickUpper);
    const rewardAccounts = [];
    for (let i = 0; i < poolInfo.rewardDefaultInfos.length; i++) {
      rewardAccounts.push({
        poolRewardVault: new import_web314.PublicKey(poolKeys.rewardInfos[i].vault),
        ownerRewardVault: ownerInfo.rewardAccounts[i],
        rewardMint: new import_web314.PublicKey(poolInfo.rewardDefaultInfos[i].mint.address)
      });
    }
    const ins = [];
    const decreaseIns = this.decreaseLiquidityInstruction(poolProgramId, ownerInfo.wallet, positionNftAccount, personalPosition, id, protocolPosition, tickArrayLower, tickArrayUpper, ownerInfo.tokenAccountA, ownerInfo.tokenAccountB, new import_web314.PublicKey(poolKeys.vault.A), new import_web314.PublicKey(poolKeys.vault.B), new import_web314.PublicKey(poolInfo.mintA.address), new import_web314.PublicKey(poolInfo.mintB.address), rewardAccounts, liquidity, amountMinA, amountMinB, PoolUtils.isOverflowDefaultTickarrayBitmap(poolInfo.config.tickSpacing, [
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
      { pubkey: import_spl_token8.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
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
    const aData = Buffer.from([...anchorDataBuf.swap, ...data]);
    return new import_web314.TransactionInstruction({
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
    const [programId, id] = [new import_web314.PublicKey(poolInfo.programId), new import_web314.PublicKey(poolInfo.id)];
    const [mintAVault, mintBVault] = [new import_web314.PublicKey(poolKeys.vault.A), new import_web314.PublicKey(poolKeys.vault.B)];
    const [mintA, mintB] = [new import_web314.PublicKey(poolInfo.mintA.address), new import_web314.PublicKey(poolInfo.mintB.address)];
    const isInputMintA = poolInfo.mintA.address === inputMint.toString();
    const ins = [
      this.swapInstruction(programId, ownerInfo.wallet, id, new import_web314.PublicKey(poolInfo.config.id), isInputMintA ? ownerInfo.tokenAccountA : ownerInfo.tokenAccountB, isInputMintA ? ownerInfo.tokenAccountB : ownerInfo.tokenAccountA, isInputMintA ? mintAVault : mintBVault, isInputMintA ? mintBVault : mintAVault, isInputMintA ? mintA : mintB, isInputMintA ? mintB : mintA, remainingAccounts, observationId, amountIn, amountOutMin, sqrtPriceLimitX64, true, getPdaExBitmapAccount(programId, id).publicKey)
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
    const [programId, id] = [new import_web314.PublicKey(poolInfo.programId), new import_web314.PublicKey(poolInfo.id)];
    const [mintAVault, mintBVault] = [new import_web314.PublicKey(poolKeys.vault.A), new import_web314.PublicKey(poolKeys.vault.B)];
    const [mintA, mintB] = [new import_web314.PublicKey(poolInfo.mintA.address), new import_web314.PublicKey(poolInfo.mintB.address)];
    const isInputMintA = poolInfo.mintA.address === outputMint.toBase58();
    const ins = [
      this.swapInstruction(programId, ownerInfo.wallet, id, new import_web314.PublicKey(poolInfo.config.id), isInputMintA ? ownerInfo.tokenAccountB : ownerInfo.tokenAccountA, isInputMintA ? ownerInfo.tokenAccountA : ownerInfo.tokenAccountB, isInputMintA ? mintBVault : mintAVault, isInputMintA ? mintAVault : mintBVault, isInputMintA ? mintB : mintA, isInputMintA ? mintA : mintB, remainingAccounts, observationId, amountOut, amountInMax, sqrtPriceLimitX64, false, getPdaExBitmapAccount(programId, id).publicKey)
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
      { pubkey: import_web314.SystemProgram.programId, isSigner: false, isWritable: false },
      { pubkey: RENT_PROGRAM_ID, isSigner: false, isWritable: false }
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
      openTime: parseBigNumberish(openTime),
      endTime: parseBigNumberish(endTime),
      emissionsPerSecondX64
    }, data);
    const aData = Buffer.from([...anchorDataBuf.initReward, ...data]);
    return new import_web314.TransactionInstruction({
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
    const [programId, id] = [new import_web314.PublicKey(poolInfo.programId), new import_web314.PublicKey(poolInfo.id)];
    const poolRewardVault = getPdaPoolRewardVaulId(programId, id, rewardInfo.mint).publicKey;
    const operationId = getPdaOperationAccount(programId).publicKey;
    const ins = [
      this.initRewardInstruction(programId, ownerInfo.wallet, id, operationId, new import_web314.PublicKey(poolInfo.config.id), ownerInfo.tokenAccount, rewardInfo.programId, rewardInfo.mint, poolRewardVault, rewardInfo.openTime, rewardInfo.endTime, rewardInfo.emissionsPerSecondX64)
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
      { pubkey: import_spl_token8.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
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
    const aData = Buffer.from([...anchorDataBuf.setRewardEmissions, ...data]);
    return new import_web314.TransactionInstruction({
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
    const [programId, id] = [new import_web314.PublicKey(poolInfo.programId), new import_web314.PublicKey(poolInfo.id)];
    let rewardIndex;
    let rewardVault;
    let rewardMint;
    for (let index = 0; index < poolInfo.rewardDefaultInfos.length; index++)
      if (poolInfo.rewardDefaultInfos[index].mint.address === rewardInfo.mint.toString()) {
        rewardIndex = index;
        rewardVault = new import_web314.PublicKey(poolKeys.rewardInfos[index].vault);
        rewardMint = new import_web314.PublicKey(poolKeys.rewardInfos[index].mint.address);
      }
    if (rewardIndex === void 0 || rewardVault === void 0)
      logger6.logWithError("reward mint check error", "no reward mint", poolInfo.rewardDefaultInfos);
    const operationId = getPdaOperationAccount(programId).publicKey;
    const ins = [
      this.setRewardInstruction(programId, ownerInfo.wallet, id, operationId, new import_web314.PublicKey(poolInfo.config.id), ownerInfo.tokenAccount, rewardVault, rewardMint, rewardIndex, rewardInfo.openTime, rewardInfo.endTime, rewardInfo.emissionsPerSecondX64)
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
      { pubkey: import_spl_token8.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: MEMO_PROGRAM_ID, isSigner: false, isWritable: false }
    ];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
      rewardIndex
    }, data);
    const aData = Buffer.from([...anchorDataBuf.collectReward, ...data]);
    return new import_web314.TransactionInstruction({
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
    const [programId, id] = [new import_web314.PublicKey(poolInfo.programId), new import_web314.PublicKey(poolInfo.id)];
    let rewardIndex;
    let rewardVault;
    for (let index = 0; index < poolInfo.rewardDefaultInfos.length; index++)
      if (poolInfo.rewardDefaultInfos[index].mint.address === rewardMint.toString()) {
        rewardIndex = index;
        rewardVault = new import_web314.PublicKey(poolKeys.rewardInfos[index].vault);
      }
    if (rewardIndex === void 0 || rewardVault === void 0)
      logger6.logWithError("reward mint check error", "no reward mint", poolInfo.rewardDefaultInfos);
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
      lockNftMint = new import_web314.PublicKey((await getEphemeralSigners(1))[0]);
    } else {
      const _k = import_web314.Keypair.generate();
      signers.push(_k);
      lockNftMint = _k.publicKey;
    }
    const positionNftAccount = nft2022 ? getATAAddress(wallet, nftMint, import_spl_token8.TOKEN_2022_PROGRAM_ID).publicKey : getATAAddress(wallet, nftMint, import_spl_token8.TOKEN_PROGRAM_ID).publicKey;
    const { publicKey: positionId } = getPdaPersonalPositionAddress(poolProgramId, nftMint);
    const lockPositionId = getPdaLockClPositionIdV2(programId, lockNftMint).publicKey;
    const lockNftAccount = getATAAddress(wallet, lockNftMint, import_spl_token8.TOKEN_PROGRAM_ID).publicKey;
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
      authPositionNftAccount: getATAAddress(authProgramId, nftMint, nft2022 ? import_spl_token8.TOKEN_2022_PROGRAM_ID : import_spl_token8.TOKEN_PROGRAM_ID).publicKey,
      positionNftProgram: nft2022 ? import_spl_token8.TOKEN_2022_PROGRAM_ID : import_spl_token8.TOKEN_PROGRAM_ID
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
      { pubkey: import_spl_token8.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: RENT_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: positionNftProgram, isSigner: false, isWritable: false },
      { pubkey: import_web314.SystemProgram.programId, isSigner: false, isWritable: false }
    ];
    const dataLayout = struct([bool("withMetadata")]);
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
      withMetadata
    }, data);
    const aData = Buffer.from([...lockInsDataBuf, ...data]);
    return new import_web314.TransactionInstruction({
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
    const { publicKey: nftAccount } = getATAAddress(owner, positionNft, import_spl_token8.TOKEN_PROGRAM_ID);
    const { publicKey: positionId } = getPdaPersonalPositionAddress(poolProgramId, positionNft);
    const keys = [
      { pubkey: authProgramId, isSigner: false, isWritable: false },
      { pubkey: owner, isSigner: true, isWritable: false },
      { pubkey: nftAccount, isSigner: false, isWritable: true },
      { pubkey: positionId, isSigner: false, isWritable: false },
      { pubkey: getPdaLockPositionId(programId, positionId).publicKey, isSigner: false, isWritable: true },
      { pubkey: import_spl_token8.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_web314.SystemProgram.programId, isSigner: false, isWritable: false }
    ];
    return new import_web314.TransactionInstruction({
      keys,
      programId,
      data: Buffer.from(lockInsDataBuf)
    });
  }
  static harvestLockPositionInstruction(props) {
    const [poolProgramId, poolId] = [new import_web314.PublicKey(props.poolKeys.programId), new import_web314.PublicKey(props.poolKeys.id)];
    const tickArrayLowerStartIndex = TickUtils.getTickArrayStartIndexByTick(props.ownerPosition.tickLower, props.poolKeys.config.tickSpacing);
    const tickArrayUpperStartIndex = TickUtils.getTickArrayStartIndexByTick(props.ownerPosition.tickUpper, props.poolKeys.config.tickSpacing);
    const { publicKey: tickArrayLower } = getPdaTickArrayAddress(poolProgramId, poolId, tickArrayLowerStartIndex);
    const { publicKey: tickArrayUpper } = getPdaTickArrayAddress(poolProgramId, poolId, tickArrayUpperStartIndex);
    const { publicKey: nftAccount } = getATAAddress(props.owner, props.ownerPosition.nftMint, import_spl_token8.TOKEN_PROGRAM_ID);
    const { publicKey: positionId } = getPdaPersonalPositionAddress(poolProgramId, props.ownerPosition.nftMint);
    const { publicKey: protocolPosition } = getPdaProtocolPositionAddress(poolProgramId, poolId, props.ownerPosition.tickLower, props.ownerPosition.tickUpper);
    const rewardAccounts = [];
    for (let i = 0; i < props.poolKeys.rewardInfos.length; i++) {
      rewardAccounts.push({
        poolRewardVault: new import_web314.PublicKey(props.poolKeys.rewardInfos[i].vault),
        ownerRewardVault: props.ownerRewardAccounts[i],
        rewardMint: new import_web314.PublicKey(props.poolKeys.rewardInfos[i].mint.address)
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
      { pubkey: new import_web314.PublicKey(props.poolKeys.vault.A), isSigner: false, isWritable: true },
      { pubkey: new import_web314.PublicKey(props.poolKeys.vault.B), isSigner: false, isWritable: true },
      { pubkey: tickArrayLower, isSigner: false, isWritable: true },
      { pubkey: tickArrayUpper, isSigner: false, isWritable: true },
      { pubkey: props.userVaultA, isSigner: false, isWritable: true },
      { pubkey: props.userVaultB, isSigner: false, isWritable: true },
      { pubkey: import_spl_token8.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: MEMO_PROGRAM_ID2, isSigner: false, isWritable: false },
      { pubkey: new import_web314.PublicKey(props.poolKeys.mintA.address), isSigner: false, isWritable: false },
      { pubkey: new import_web314.PublicKey(props.poolKeys.mintB.address), isSigner: false, isWritable: false },
      ...remainingAccounts
    ];
    return new import_web314.TransactionInstruction({
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
      { pubkey: import_spl_token8.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: import_spl_token8.TOKEN_2022_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: MEMO_PROGRAM_ID2, isSigner: false, isWritable: false },
      { pubkey: mintA, isSigner: false, isWritable: false },
      { pubkey: mintB, isSigner: false, isWritable: false },
      ...remainingAccounts
    ];
    return new import_web314.TransactionInstruction({
      keys,
      programId,
      data: Buffer.from(lockHarvestInsDataBuf)
    });
  }
};

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

// src/raydium/cpmm/instruction.ts
var import_web316 = require("@solana/web3.js");
var import_spl_token10 = require("@solana/spl-token");

// src/raydium/cpmm/pda.ts
var AUTH_SEED = Buffer.from("vault_and_lp_mint_auth_seed", "utf8");
var AMM_CONFIG_SEED2 = Buffer.from("amm_config", "utf8");
var POOL_SEED2 = Buffer.from("pool", "utf8");
var POOL_LP_MINT_SEED = Buffer.from("pool_lp_mint", "utf8");
var POOL_VAULT_SEED2 = Buffer.from("pool_vault", "utf8");
var OBSERVATION_SEED2 = Buffer.from("observation", "utf8");
var LOCK_LIQUIDITY_SEED = Buffer.from("locked_liquidity", "utf8");

// src/raydium/cpmm/instruction.ts
var logger7 = createLogger("Raydium_cpmm");
var anchorDataBuf2 = {
  initialize: [175, 175, 109, 31, 13, 152, 155, 237],
  deposit: [242, 35, 198, 137, 82, 225, 242, 182],
  withdraw: [183, 18, 70, 156, 148, 109, 161, 34],
  swapBaseInput: [143, 190, 90, 218, 196, 30, 51, 222],
  swapBaseOutput: [55, 217, 98, 86, 163, 74, 180, 173],
  lockCpLiquidity: [216, 157, 29, 78, 38, 51, 31, 26],
  collectCpFee: [8, 30, 51, 199, 209, 184, 247, 133]
};
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
  return new import_web316.TransactionInstruction({
    keys,
    programId,
    data: Buffer.from([...anchorDataBuf2.swapBaseInput, ...data])
  });
}

// src/raydium/cpmm/curve/calculator.ts
var import_bn18 = __toESM(require("bn.js"));
var import_decimal8 = __toESM(require("decimal.js-light"));

// src/raydium/cpmm/curve/constantProduct.ts
var import_bn17 = __toESM(require("bn.js"));
var ZERO3 = new import_bn17.default(0);

// src/raydium/liquidity/constant.ts
var import_bn19 = __toESM(require("bn.js"));
var LIQUIDITY_FEES_NUMERATOR = new import_bn19.default(25);
var LIQUIDITY_FEES_DENOMINATOR = new import_bn19.default(1e4);

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
var createPoolFeeLayout = struct([u64("fee")]);

// src/raydium/liquidity/utils.ts
var import_web322 = require("@solana/web3.js");
var import_bn22 = __toESM(require("bn.js"));
var import_spl_token14 = require("@solana/spl-token");

// src/raydium/liquidity/instruction.ts
var import_web318 = require("@solana/web3.js");
var import_spl_token11 = require("@solana/spl-token");

// src/raydium/liquidity/stable.ts
var import_web317 = require("@solana/web3.js");
var MODEL_DATA_PUBKEY = new import_web317.PublicKey("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo");
var ELEMENT_SIZE = 5e4;
var DataElement = struct([u64("x"), u64("y"), u64("price")]);
var modelDataInfoLayout = struct([
  u64("accountType"),
  u64("status"),
  u64("multiplier"),
  u64("validDataCount"),
  seq2(DataElement, ELEMENT_SIZE, "DataElement")
]);

// src/raydium/liquidity/instruction.ts
var logger8 = createLogger("Raydium_liquidity_instruction");
function makeSwapFixedInInstruction({ poolKeys: propPoolKeys, userKeys, amountIn, minAmountOut }, version) {
  const poolKeys = jsonInfo2PoolKeys(propPoolKeys);
  const data = Buffer.alloc(fixedSwapInLayout.span);
  fixedSwapInLayout.encode({
    instruction: 9,
    amountIn: parseBigNumberish(amountIn),
    minAmountOut: parseBigNumberish(minAmountOut)
  }, data);
  const keys = [
    accountMeta({ pubkey: import_spl_token11.TOKEN_PROGRAM_ID, isWritable: false }),
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
  return new import_web318.TransactionInstruction({
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
    accountMeta({ pubkey: import_spl_token11.TOKEN_PROGRAM_ID, isWritable: false }),
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
  return new import_web318.TransactionInstruction({
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
    logger8.logWithError("invalid params", "params", params);
  }
  logger8.logWithError("invalid version", "poolKeys.version", version);
  throw new Error("invalid version");
}

// src/raydium/liquidity/serum.ts
var import_web319 = require("@solana/web3.js");
var logger9 = createLogger("Raydium_liquidity_serum");

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
var import_web320 = require("@solana/web3.js");
var import_bn20 = __toESM(require("bn.js"));
var import_spl_token12 = require("@solana/spl-token");
var logger10 = createLogger("Raydium_Util");

// src/raydium/account/instruction.ts
var import_web321 = require("@solana/web3.js");
var import_bn21 = __toESM(require("bn.js"));
var import_spl_token13 = require("@solana/spl-token");

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

// src/raydium/serum/id.ts
var SERUM_PROGRAMID_TO_VERSION = {
  [SERUM_PROGRAM_ID_V3.toBase58()]: 3
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

// src/raydium/serum/serum.ts
var import_web323 = require("@solana/web3.js");
var logger11 = createLogger("Serum");

// src/raydium/tradeV2/instrument.ts
var import_web324 = require("@solana/web3.js");
var import_bn23 = __toESM(require("bn.js"));
var import_spl_token15 = require("@solana/spl-token");
function route1Instruction(programId, poolInfoA, poolKeyA, poolKeyB, userSourceToken, userRouteToken, userPdaAccount, ownerWallet, inputMint, amountIn, amountOut, tickArrayA) {
  const dataLayout = struct([u82("instruction"), u64("amountIn"), u64("amountOut")]);
  const keys = [
    { pubkey: import_web324.SystemProgram.programId, isSigner: false, isWritable: false },
    { pubkey: import_spl_token15.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: new import_web324.PublicKey(poolKeyA.programId), isSigner: false, isWritable: false },
    { pubkey: new import_web324.PublicKey(poolKeyA.id), isSigner: false, isWritable: true },
    { pubkey: new import_web324.PublicKey(poolKeyB.id), isSigner: false, isWritable: true },
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
      { pubkey: new import_web324.PublicKey("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo"), isSigner: false, isWritable: false },
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
  return new import_web324.TransactionInstruction({
    keys,
    programId,
    data
  });
}
function route2Instruction(programId, poolInfoB, poolKeyA, poolKeyB, userRouteToken, userDestinationToken, userPdaAccount, ownerWallet, routeMint, tickArrayB) {
  const dataLayout = struct([u82("instruction")]);
  const keys = [
    { pubkey: import_web324.SystemProgram.programId, isSigner: false, isWritable: false },
    { pubkey: import_spl_token15.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: new import_web324.PublicKey(String(poolKeyB.programId)), isSigner: false, isWritable: false },
    { pubkey: new import_web324.PublicKey(String(poolKeyB.id)), isSigner: false, isWritable: true },
    { pubkey: new import_web324.PublicKey(String(poolKeyA.id)), isSigner: false, isWritable: true },
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
      { pubkey: new import_web324.PublicKey("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo"), isSigner: false, isWritable: false },
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
  return new import_web324.TransactionInstruction({
    keys,
    programId,
    data
  });
}
function routeInstruction(programId, wallet, userSourceToken, userRouteToken, userDestinationToken, inputMint, routeMint, outputMint, poolInfoA, poolInfoB, poolKeyA, poolKeyB, amountIn, amountOut, remainingAccounts) {
  const clmmPriceLimit = [];
  const keys = [
    accountMeta({ pubkey: import_spl_token15.TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_spl_token15.TOKEN_2022_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_spl_token15.ASSOCIATED_TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_web324.SystemProgram.programId, isWritable: false }),
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
    keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolInfo.programId), isWritable: false }));
    if (index === poolInfos.length - 1) {
      keys.push(accountMeta({ pubkey: userDestinationToken }));
    } else {
      keys.push(accountMeta({ pubkey: userRouteToken }));
    }
    keys.push(accountMeta({ pubkey: new import_web324.PublicKey(routeMints[index]) }));
    keys.push(accountMeta({ pubkey: new import_web324.PublicKey(routeMints[index + 1]) }));
    if (_poolInfo.version === 6) {
      const _poolKey = poolKeys[index];
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.config.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(inputIsA ? _poolKey.vault.A : _poolKey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(inputIsA ? _poolKey.vault.B : _poolKey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolInfo.observationId) }));
      keys.push(accountMeta({ pubkey: MEMO_PROGRAM_ID2 }));
      keys.push(accountMeta({
        pubkey: getPdaExBitmapAccount(new import_web324.PublicKey(_poolInfo.programId), new import_web324.PublicKey(_poolInfo.id)).publicKey
      }));
      clmmPriceLimit.push(clmmPriceLimitX64InsData(_poolInfo.sqrtPriceX64.toString(), inputIsA));
      for (const item of remainingAccounts[index] ?? []) {
        keys.push(accountMeta({ pubkey: new import_web324.PublicKey(item) }));
      }
    } else if (_poolInfo.version === 5) {
      const _poolKey = poolKeys[index];
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.authority), isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.marketProgramId) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.marketAuthority) }));
      keys.push(accountMeta({ pubkey: LIQUIDITY_POOL_PROGRAM_ID_V5_MODEL, isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.openOrders) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.marketId) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.marketBids) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.marketAsks) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.marketEventQueue) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.marketBaseVault) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.marketQuoteVault) }));
    } else if (_poolInfo.version === 4) {
      const _poolKey = poolKeys[index];
      const isSupportIdOnly = _poolInfo.status !== 1;
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.authority), isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(isSupportIdOnly ? _poolKey.id : _poolKey.marketProgramId) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(isSupportIdOnly ? _poolKey.id : _poolKey.marketAuthority) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(isSupportIdOnly ? _poolKey.id : _poolKey.openOrders) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(isSupportIdOnly ? _poolKey.id : _poolKey.marketId) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(isSupportIdOnly ? _poolKey.id : _poolKey.marketBids) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(isSupportIdOnly ? _poolKey.id : _poolKey.marketAsks) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(isSupportIdOnly ? _poolKey.id : _poolKey.marketEventQueue) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(isSupportIdOnly ? _poolKey.id : _poolKey.marketBaseVault) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(isSupportIdOnly ? _poolKey.id : _poolKey.marketQuoteVault) }));
    } else if (_poolInfo.version === 7) {
      const _poolKey = poolKeys[index];
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.authority) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.config.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(inputIsA ? _poolKey.vault.A : _poolKey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(inputIsA ? _poolKey.vault.B : _poolKey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolInfo.observationId) }));
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
  return new import_web324.TransactionInstruction({
    keys,
    programId,
    data
  });
}
function clmmPriceLimitX64InsData(x64Price, inputIsA) {
  if (x64Price) {
    if (inputIsA) {
      const _m = new import_bn23.default(x64Price).div(new import_bn23.default(25));
      return _m.gt(MIN_SQRT_PRICE_X64_ADD_ONE) ? _m : MIN_SQRT_PRICE_X64_ADD_ONE;
    } else {
      const _m = new import_bn23.default(x64Price).mul(new import_bn23.default(25));
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
        amountOutMin: swapInfo.minAmountOut.amount.raw.sub(swapInfo.minAmountOut.fee?.raw ?? new import_bn23.default(0)),
        sqrtPriceLimitX64,
        remainingAccounts: swapInfo.remainingAccounts[0] ?? []
      });
    } else if (swapInfo.poolInfo[0].version === 7) {
      const poolInfo = swapInfo.poolInfo[0];
      const baseIn = inputMint.toString() === swapInfo.poolInfo[0].mintA.address;
      return {
        signers: [],
        instructions: [
          makeSwapCpmmBaseInInstruction(poolInfo.programId, ownerInfo.wallet, poolInfo.authority, poolInfo.configId, poolInfo.id, ownerInfo.sourceToken, ownerInfo.destinationToken, baseIn ? poolInfo.vaultA : poolInfo.vaultB, baseIn ? poolInfo.vaultB : poolInfo.vaultA, baseIn ? poolInfo.mintProgramA : poolInfo.mintProgramB, baseIn ? poolInfo.mintProgramB : poolInfo.mintProgramA, new import_web324.PublicKey(poolInfo[baseIn ? "mintA" : "mintB"].address), new import_web324.PublicKey(poolInfo[baseIn ? "mintB" : "mintA"].address), poolInfo.observationId, swapInfo.amountIn.amount.raw, swapInfo.minAmountOut.amount.raw)
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
            amountOut: swapInfo.minAmountOut.amount.raw.sub(swapInfo.minAmountOut.fee?.raw ?? new import_bn23.default(0)),
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
        routeInstruction(routeProgram, ownerInfo.wallet, ownerInfo.sourceToken, ownerInfo.routeToken, ownerInfo.destinationToken, inputMint.toString(), swapInfo.middleToken.mint.toString(), swapInfo.outputMint.toString(), poolInfo1, poolInfo2, poolKey1, poolKey2, swapInfo.amountIn.amount.raw, swapInfo.minAmountOut.amount.raw.sub(swapInfo.minAmountOut.fee?.raw ?? new import_bn23.default(0)), swapInfo.remainingAccounts)
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
    accountMeta({ pubkey: import_spl_token15.TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_spl_token15.TOKEN_2022_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_spl_token15.ASSOCIATED_TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_web324.SystemProgram.programId, isWritable: false }),
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
    keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.programId), isWritable: false }));
    if (index === poolKeys.length - 1) {
      keys.push(accountMeta({ pubkey: cacheAccount[_routeInfo.outputMint] }));
    } else {
      const mint = _routeInfo.outputMint;
      if (cacheAccount[mint] === void 0) {
        const ata = getATAAddress(wallet, new import_web324.PublicKey(mint), _poolKey.programId === ALL_PROGRAM_ID.CLMM_PROGRAM_ID.toBase58() || _poolKey.programId === ALL_PROGRAM_ID.CREATE_CPMM_POOL_PROGRAM.toBase58() ? new import_web324.PublicKey(inputIsA ? _poolKey.mintB.programId : _poolKey.mintA.programId) : import_spl_token15.TOKEN_PROGRAM_ID).publicKey;
        cacheAccount[mint] = ata;
      }
      keys.push(accountMeta({ pubkey: cacheAccount[mint] }));
    }
    keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_routeInfo.inputMint) }));
    keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_routeInfo.outputMint) }));
    if (_poolKey.programId === ALL_PROGRAM_ID.CLMM_PROGRAM_ID.toBase58()) {
      const poolKey = _poolKey;
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.config.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(inputIsA ? poolKey.vault.A : poolKey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(inputIsA ? poolKey.vault.B : poolKey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.observationId) }));
      keys.push(accountMeta({ pubkey: MEMO_PROGRAM_ID2, isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.exBitmapAccount) }));
      clmmPriceLimit.push(clmmPriceLimitX64InsData(_routeInfo.lastPoolPriceX64, inputIsA));
      for (const item of _routeInfo.remainingAccounts ?? []) {
        keys.push(accountMeta({ pubkey: new import_web324.PublicKey(item) }));
      }
    } else if (_poolKey.programId === ALL_PROGRAM_ID.AMM_STABLE.toBase58()) {
      const poolKey = _poolKey;
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.authority), isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.marketProgramId), isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.marketAuthority), isWritable: false }));
      keys.push(accountMeta({ pubkey: LIQUIDITY_POOL_PROGRAM_ID_V5_MODEL, isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.openOrders) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.marketId) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.marketBids) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.marketAsks) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.marketEventQueue) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.marketBaseVault) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.marketQuoteVault) }));
    } else if (_poolKey.programId === ALL_PROGRAM_ID.AMM_V4.toBase58()) {
      const poolKey = _poolKey;
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.authority), isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.id) }));
    } else if (_poolKey.programId === ALL_PROGRAM_ID.CREATE_CPMM_POOL_PROGRAM.toBase58()) {
      const poolKey = _poolKey;
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.authority) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.config.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(inputIsA ? poolKey.vault.A : poolKey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(inputIsA ? poolKey.vault.B : poolKey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.observationId) }));
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
    amountOut: new import_bn23.default(routeInfo.data.otherAmountThreshold),
    clmmPriceLimit
  }, data);
  return new import_web324.TransactionInstruction({
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
    accountMeta({ pubkey: import_spl_token15.TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_spl_token15.TOKEN_2022_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_spl_token15.ASSOCIATED_TOKEN_PROGRAM_ID, isWritable: false }),
    accountMeta({ pubkey: import_web324.SystemProgram.programId, isWritable: false }),
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
    keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_poolKey.programId) }));
    if (index === 0) {
      keys.push(accountMeta({ pubkey: cacheAccount[_routeInfo.inputMint] }));
    } else {
      const mint = _routeInfo.inputMint;
      if (cacheAccount[mint] === void 0) {
        const ata = getATAAddress(wallet, new import_web324.PublicKey(mint), _poolKey.programId === ALL_PROGRAM_ID.CLMM_PROGRAM_ID.toBase58() || _poolKey.programId === ALL_PROGRAM_ID.CREATE_CPMM_POOL_PROGRAM.toBase58() ? new import_web324.PublicKey(inputIsA ? _poolKey.mintA.programId : _poolKey.mintB.programId) : import_spl_token15.TOKEN_PROGRAM_ID).publicKey;
        cacheAccount[mint] = ata;
      }
      keys.push(accountMeta({ pubkey: cacheAccount[mint] }));
    }
    if (index === poolKeys.length - 1) {
      keys.push(accountMeta({ pubkey: cacheAccount[_routeInfo.outputMint] }));
    } else {
      const mint = _routeInfo.outputMint;
      if (cacheAccount[mint] === void 0) {
        const ata = getATAAddress(wallet, new import_web324.PublicKey(mint), _poolKey.programId === ALL_PROGRAM_ID.CLMM_PROGRAM_ID.toBase58() || _poolKey.programId === ALL_PROGRAM_ID.CREATE_CPMM_POOL_PROGRAM.toBase58() ? new import_web324.PublicKey(inputIsA ? _poolKey.mintB.programId : _poolKey.mintA.programId) : import_spl_token15.TOKEN_PROGRAM_ID).publicKey;
        cacheAccount[mint] = ata;
      }
      keys.push(accountMeta({ pubkey: cacheAccount[mint] }));
    }
    keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_routeInfo.inputMint) }));
    keys.push(accountMeta({ pubkey: new import_web324.PublicKey(_routeInfo.outputMint) }));
    if (_poolKey.programId === ALL_PROGRAM_ID.CLMM_PROGRAM_ID.toBase58()) {
      const poolKey = _poolKey;
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.config.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(inputIsA ? poolKey.vault.A : poolKey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(inputIsA ? poolKey.vault.B : poolKey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.observationId) }));
      keys.push(accountMeta({ pubkey: MEMO_PROGRAM_ID2, isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolKey.exBitmapAccount) }));
      clmmPriceLimit.push(clmmPriceLimitX64InsData(_routeInfo.lastPoolPriceX64, inputIsA));
      for (const item of _routeInfo.remainingAccounts ?? []) {
        keys.push(accountMeta({ pubkey: new import_web324.PublicKey(item) }));
      }
    } else if (_poolKey.programId === ALL_PROGRAM_ID.AMM_STABLE.toBase58()) {
      const poolkey = _poolKey;
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.authority), isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.marketProgramId), isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.marketAuthority), isWritable: false }));
      keys.push(accountMeta({ pubkey: LIQUIDITY_POOL_PROGRAM_ID_V5_MODEL, isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.openOrders) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.marketId) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.marketBids) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.marketAsks) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.marketEventQueue) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.marketBaseVault) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.marketQuoteVault) }));
    } else if (_poolKey.programId === ALL_PROGRAM_ID.AMM_V4.toBase58()) {
      const poolkey = _poolKey;
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.authority), isWritable: false }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.id) }));
    } else if (_poolKey.programId === ALL_PROGRAM_ID.CREATE_CPMM_POOL_PROGRAM.toBase58()) {
      const poolkey = _poolKey;
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.authority) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.config.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.id) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(inputIsA ? poolkey.vault.A : poolkey.vault.B) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(inputIsA ? poolkey.vault.B : poolkey.vault.A) }));
      keys.push(accountMeta({ pubkey: new import_web324.PublicKey(poolkey.observationId) }));
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
    amountIn: new import_bn23.default(routeInfo.data.otherAmountThreshold),
    amountOut: new import_bn23.default(routeInfo.data.outputAmount),
    clmmPriceLimit
  }, data);
  return new import_web324.TransactionInstruction({
    keys,
    programId,
    data
  });
}

// src/raydium/tradeV2/trade.ts
var ZERO4 = new import_bn24.default(0);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  makeSwapInstruction,
  route1Instruction,
  route2Instruction,
  routeInstruction,
  swapBaseInAutoAccount,
  swapBaseOutAutoAccount
});
//# sourceMappingURL=index.js.map