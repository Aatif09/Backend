const http = require('http');
const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const response = await fetch("https://dummyjson.com/products/1");
  const data = await response.json();
  // const names = data.map((user1) => {
  //   return user1.title; // Declare username using 'let' or 'const'
  // });
  //You cannot directly send a JavaScript object in the response body.
  res.write(data.title);
  res.end(JSON.stringify(data));
});

server.listen(3000, () => {
  const a = server.address();
  console.log(`Server running on port ${3000}`)
});