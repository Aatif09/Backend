const fs = require('fs');
const data = fs.appendFileSync('fsdata.txt', " We r working on Node Js development", (err) => {
  console.log("Error appending file:" + err);
});
console.log("data append successfully");