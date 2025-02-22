// const http = require('http');
import http from 'http';
import axios from 'axios';
const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  // const response = await fetch("https://dummyjson.com/products/1");
  // // console.log(response.json());
  // const data1 = await response.text();
  // const data = JSON.parse(data1);
  // res.end(JSON.stringify(data));
  const response = await axios.get("https://dummyjson.com/products");
  const productsarray = response.data.products;
  let htmlcontent = '<html><head></head><body>'
  productsarray.map((product) => {
    htmlcontent += `<div><img src="${product.thumbnail}"></div>`
  })
  htmlcontent += '</body></html>'
  res.end(htmlcontent);

});
const port = 3000;
server.listen(port, (err, res) => {
  if (err) {
    console.error('Error starting server:', err);
    return;
  }
  console.log(`Server is listening on port ${port}`);
  console.log('Press Ctrl+C to stop server.');
  console.log('Open http://localhost:3000/users to test API');
  console.log('Open http://localhost:3000/users/1 to test single user API');
});