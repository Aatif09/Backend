const http = require('http');

const server = http.createServer((req, res) => {
  const typedArray = new Uint8Array([72, 101, 108, 108, 111]);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(typedArray);
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
