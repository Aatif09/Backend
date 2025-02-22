const http = require('http');
const axios = require('axios'); // Import axios

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  try {
    const response = await axios.get("https://dummyjson.com/products/1");
    const data = response.data;

    // If you want to extract the title or any other properties
    res.write(data.title); // This sends only the title to the client
    res.end(JSON.stringify(data)); // Send the entire JSON response
  } catch (error) {
    console.error("Error fetching data:", error);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Failed to fetch data" }));
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
