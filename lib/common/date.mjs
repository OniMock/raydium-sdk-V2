// src/common/date.ts
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
export {
  getDate,
  getTime,
  isDateAfter,
  isDateBefore,
  isNumber,
  offsetDateTime
};
//# sourceMappingURL=date.mjs.map