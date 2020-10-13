'use strict';

const index = require('./index-8a31e8c5.js');
const patch = require('./patch-9181bc9a.js');

patch.patchBrowser().then(options => {
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"count":[1]}]]]], options);
});
