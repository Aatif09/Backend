const fs = require('fs');
var arr = [];
fs.readFile("../data.json", (err, data) => {
  if (err) {
    console.log("Eroror is" + err);
  }
  else {
    arr = JSON.parse(data);
  }
  console.log(arr[0]);
});

console.log("ended");