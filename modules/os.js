const os = require('os');

/* System architecture */
console.log(os.arch());

/* System platform */
console.log(os.platform());

/* Array of objects containing information about each logical CPU core */
console.log(os.cpus());

console.log(os.constants);

/* amount of free system memory */
const SIZE = 1024;

function kb(bytes) {
    return bytes / SIZE;
}

function mb(bytes) {
    return kb(bytes) / SIZE;
}

function gb(bytes) {
    return mb(bytes) / SIZE;
}

console.log(gb(os.freemem()).toFixed(2) + 'GB');

/* the total amount of system memory */
console.log(gb(os.totalmem()).toFixed(2) + 'GB');

/* path of the current user's home directory */
console.log(os.homedir());

/* operating system's default directory for temporary files */
console.log(os.tmpdir());

/* host name of the operating system */
console.log(os.hostname());

/* object containing network interfaces that have been assigned a network address */
console.log(os.networkInterfaces());