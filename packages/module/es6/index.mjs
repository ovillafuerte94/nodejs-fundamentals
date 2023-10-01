// node --experimental-modules index.mjs

import mod from './module.mjs';

/* Show module information */
console.log(mod);

/* execute a module function */
mod.greet();

/* show value of a module property */
console.log(mod.sample_property);
