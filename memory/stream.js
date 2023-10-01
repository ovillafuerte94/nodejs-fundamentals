const fs = require('fs');
const stream = require('stream');
const util = require('util');

/* 
 *  Example of read stream
 */
let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('utf8');
readableStream.on('data', function(chunk) {
    data+= chunk;
});

readableStream.on('end', function() {
    console.log('\r');
    console.log(data);
});

/* 
 *  Example of write stream
 */


// process.stdout.write('Hello\n');
// process.stdout.write('world');

const Transform = stream.Transform;

function upperCase() {
    Transform.call(this);
}

util.inherits(upperCase, Transform);

upperCase.prototype._transform = function(chunk, codif, callback) {
    chunkUpper = chunk.toString().toUpperCase();
    this.push(chunkUpper);
    callback();
}

let upper = new upperCase();

readableStream
    .pipe(upper)
    .pipe(process.stdout);