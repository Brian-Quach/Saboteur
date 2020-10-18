import { b as bootstrapLazy } from './index-bd5dc31c.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-009bc056.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"count":[1]}]]],["saboteur-board",[[1,"saboteur-board",{"count":[1]}]]]], options);
});
