console.log("started");
const fs = require('fs');
const fdata1 = fs.readFileSync('data.json');
const data2 = JSON.parse(fdata1);
console.log(data2[0].name);
console.log("ended");