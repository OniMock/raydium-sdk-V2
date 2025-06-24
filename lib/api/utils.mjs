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
export {
  SESSION_KEY,
  STORAGE_KEY,
  getSessionKey,
  updateReqHistory
};
//# sourceMappingURL=utils.mjs.map