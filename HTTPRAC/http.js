const fs = require('fs/promises');
const http = require('http');
const server = http.createServer(async (req, res) => {
  console.log('Server is running...');
  console.log(req.url);
  console.log(res.statusCode)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write("<h1>Hello, world!</h1>");
  const doc = await fs.readFile("./Home.html", "utf-8");
  res.end(doc);
});
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});