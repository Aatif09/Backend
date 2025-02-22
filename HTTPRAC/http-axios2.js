const http = require('http');
const axios = require('axios'); // Import axios

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  try {
    const response = await axios.get("https://dummyjson.com/products");
    const data = response.data;

    // Extract product titles
    const productTitles = data.products.map((product) => {
      return product.title;
    });

    // Send the list of product titles as a JSON response
    res.end(JSON.stringify(productTitles));

  } catch (error) {
    console.error("Error fetching data:", error);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Failed to fetch data" }));
  }
});

server.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
