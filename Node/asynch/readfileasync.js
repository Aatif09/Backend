console.log("Started listening")
const readfile = async () => {
  const fspro = require("fs/promises");

  const data = await fspro.readFile("./data.txt", "utf8");
  console.log(data);
}
readfile();
console.log("Stopped listening")