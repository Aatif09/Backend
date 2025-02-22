const http = require('http');
// const data = require("./aa.json");
const server = http.createServer((req, res) => {
  const users = [{
    id: 1, name: 'Aatif Jamshed', age: 30
  }, {
    id: 2, name: 'Tabish Jamshed', age: 30
  }]
  res.setHeader('Content-Type', 'application/json');
  const names = users.map((user1) => {
    return user1.name; // Declare username using 'let' or 'const'
  });
  //You cannot directly send a JavaScript object in the response body.
  res.end(JSON.stringify(users));
  // res.end(JSON.stringify(users[0].name));
});
server.listen(3000, () => {
  const a = server.address();
  console.log(`Server running on port ${3000}`)
});