const http = require('http');

const server = http.createServer((req, res) => {
  const users = [
    {
      id: 1,
      name: 'AJ',
      email: 'aatif@abes.com',
      age: 36,
      hobbies: ['cricket', 'gaming', 'hiking']
    }
  ];
  const replacer = (key, value) => {
    if (key === 'AJ') {
      return undefined; // Skip the  field
    }
    return value; // Otherwise, return the original value
  };
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(users, replacer, 2));
});

server.listen(3001, () => {
  console.log('Server running at http://localhost:3001/');
});
