console.log("started");
const fs = require('fs');
const fdata1 = fs.readFileSync('data.json'); // with encoding scheme like utf8, base64,hex base 16 
const data2 = JSON.parse(fdata1);// parse data into json
console.log(data2[0].name);
console.log("ended");