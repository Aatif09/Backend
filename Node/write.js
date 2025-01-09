const fs = require("fs");

const wf = fs.writeFileSync("fsdata.txt", "Hello", (err) => {
  console.log(err);
});
console.log("Write data successfully!!!");