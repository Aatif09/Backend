const fs = require('fs').promises;
let arr = new Array();
async function jsonreadFile() {
  const data1 = await fs.readFile("../data.json");
  return JSON.parse(data1);
}
jsonreadFile().then((data) => {
  console.log("Recieved Data:" + JSON.stringify(data[0]))
  arr.push(JSON.stringify(data[0]))
}).catch((err) => {
  console.log("Error while promose handling:" + err);
});

setTimeout(() => {
  console.log("heuuuuu:" + arr);
}, 2000);