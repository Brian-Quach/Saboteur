import { b as bootstrapLazy } from './index-3a09ee9d.js';
import { a as patchEsm } from './patch-4d96d098.js';

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["my-component",[[1,"my-component",{"count":[1]}]]]], options);
  });
};

export { defineCustomElements };
