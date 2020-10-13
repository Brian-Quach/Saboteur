'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8a31e8c5.js');
const patch = require('./patch-9181bc9a.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patch.patchEsm().then(() => {
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"count":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
