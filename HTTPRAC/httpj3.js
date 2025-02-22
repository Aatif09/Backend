const http = require('http');

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const newdata = data.products;
  const new1 = newdata.map((product) => {
    return product.title;
  })
  // res.write(JSON.stringify(data.products));
  res.end(JSON.stringify(new1));
});
server.listen(3000, () => {
  const a = server.address();
  console.log(`Server running on port ${3000}`)
});