const mod = require('./module');
// const { greet, sample_property} = require('./module'); // object destructuration

/* Show module information */
console.log(mod);

/* execute a module function */
mod.greet();

/* show value of a module property */
console.log(mod.sample_property);