// src/common/lodash.ts
function chunkArray(arr, chunkSize = 1, cache = []) {
  const tmp = [...arr];
  if (chunkSize <= 0)
    return cache;
  while (tmp.length)
    cache.push(tmp.splice(0, chunkSize));
  return cache;
}
function intersection(arr, ...args) {
  return arr.filter((item) => args.every((arr2) => arr2.includes(item)));
}
function xor(arr, ...args) {
  return arr.filter((item) => args.every((arr2) => !arr2.includes(item)));
}
function uniq(arr) {
  return [...new Set(arr)];
}
export {
  chunkArray,
  intersection,
  uniq,
  xor
};
//# sourceMappingURL=lodash.mjs.map