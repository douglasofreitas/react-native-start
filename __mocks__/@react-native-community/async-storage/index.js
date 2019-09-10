/* eslint-disable arrow-body-style */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-return-assign */
let cache = {};
export default {
  setItem: (key, value) => new Promise((resolve, reject) => {
    return (typeof key !== 'string' || typeof value !== 'string')
      ? reject(new Error('key and value must be string'))
      : resolve(cache[key] = value);
  }),
  getItem: (key) => new Promise((resolve) => {
    return cache.hasOwnProperty(key)
      ? resolve(cache[key])
      : resolve(null);
  }),
  removeItem: (key) => new Promise((resolve, reject) => {
    return cache.hasOwnProperty(key)
      ? resolve(delete cache[key])
      : reject('No such key!');
  }),
  clear: () => new Promise((resolve) => resolve(cache = {})),

  getAllKeys: () => new Promise((resolve) => resolve(Object.keys(cache))),

  getAllValues: () => new Promise((resolve) => resolve(cache)),
};
