import { b as bootstrapLazy } from './index-3a09ee9d.js';
import { p as patchBrowser } from './patch-4d96d098.js';
patchBrowser().then(function (options) {
    return bootstrapLazy([["my-component", [[1, "my-component", { "count": [1] }]]]], options);
});
