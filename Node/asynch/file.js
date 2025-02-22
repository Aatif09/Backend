const fs = require("fs");

fs.readFile("./data.txt", "utf-8", (error, data) => {
  if (error) {
    console.error("Error reading file:", error);
    return;
  }
  else {
    console.log(data)
  }
})

fs.writeFile("./output.txt", "Hello, World!", (error) => {
  if (error) {
    console.log(error)
  }
  else {
    console.log("File created successfully!")
  }

}
)
