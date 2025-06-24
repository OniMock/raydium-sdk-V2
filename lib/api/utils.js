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

// src/api/utils.ts
var utils_exports = {};
__export(utils_exports, {
  SESSION_KEY: () => SESSION_KEY,
  STORAGE_KEY: () => STORAGE_KEY,
  getSessionKey: () => getSessionKey,
  updateReqHistory: () => updateReqHistory
});
module.exports = __toCommonJS(utils_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SESSION_KEY,
  STORAGE_KEY,
  getSessionKey,
  updateReqHistory
});
//# sourceMappingURL=utils.js.map