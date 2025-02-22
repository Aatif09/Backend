console.log("started");
const fs = require('fs');
const fdata = fs.readFileSync('data.txt');
console.log(fdata);
const fdata1 = fs.readFileSync('data.txt', 'utf8'); // with encoding scheme like utf8, base64,hex base 16 

console.log(fdata1);

console.log("ended");