const http = require('http');
const data = require("./aa.json");
const server = http.createServer((req, res) => {
  const users = [{
    id: 1, name: 'Aatif Jamshed', age: 30
  }, {
    id: 2, name: 'Tabish Jamshed', age: 30
  }];
  const names = users.map((user1) => {
    return user1.name
  });
  // Send response to client
  res.end(JSON.stringify(names));


});

server.listen(3001, () => {
  console.log('Server is running on port 3001');
});
