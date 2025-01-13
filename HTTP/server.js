const http = require('http');
const PORT = 3002;
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write("<h2>Hell write</h2>");
  res.end("<h2>Hello Node, How are you?</h2>");
});

server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});