// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from([1, 2, 3]);
let buffer = Buffer.from('Hello world');

console.log(buffer);
console.log(buffer.toString());

/* Generate a buffer containing the letters of the alphabet */
let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < abc.length; i++) {
    abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString());