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

// src/common/date.ts
var date_exports = {};
__export(date_exports, {
  getDate: () => getDate,
  getTime: () => getTime,
  isDateAfter: () => isDateAfter,
  isDateBefore: () => isDateBefore,
  isNumber: () => isNumber,
  offsetDateTime: () => offsetDateTime
});
module.exports = __toCommonJS(date_exports);
var isNumber = (val) => typeof val === "number";
var getDate = (value) => value ? new Date(value) : new Date();
var getTime = (value) => getDate(value).getTime();
function isDateBefore(timestampA, timestampB, options) {
  const realTimestampB = isNumber(timestampB) ? timestampB * (options?.unit === "s" ? 1e3 : 1) : timestampB;
  return new Date(timestampA).getTime() <= realTimestampB;
}
function isDateAfter(timestampA, timestampB, options) {
  const realTimestampB = isNumber(timestampB) ? timestampB * (options?.unit === "s" ? 1e3 : 1) : timestampB;
  return new Date(timestampA).getTime() > realTimestampB;
}
function offsetDateTime(baseDate, offset) {
  const timestamp = getTime(baseDate);
  const offsetedTimestamp = timestamp + (offset.days ? offset.days * 24 * 60 * 60 * 1e3 : 0) + (offset.hours ? offset.hours * 60 * 60 * 1e3 : 0) + (offset.minutes ? offset.minutes * 60 * 1e3 : 0) + (offset.seconds ? offset.seconds * 1e3 : 0) + (offset.milliseconds ? offset.milliseconds : 0);
  return getDate(offsetedTimestamp);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getDate,
  getTime,
  isDateAfter,
  isDateBefore,
  isNumber,
  offsetDateTime
});
//# sourceMappingURL=date.js.map