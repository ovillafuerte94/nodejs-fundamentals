require('dotenv').config();

// It is good practice to use environment variables in capital letters.
let name = process.env.NAME || 'unnamed';

console.log('Hello ' + name);
