const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple Example</title>
      <style>
      
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          text-align: center;
          padding: 50px;
        }
        h1 {
          color: #333;
        }
        button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 16px;
        }
        button:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
     
      <h1>Hello, World!</h1>
      <p id="text">This is a simple example with HTML, CSS, JavaScript, and text.</p>
      <button onclick="changeText()">Click Me</button>
      
     
      <script>
        function changeText() {
          document.getElementById('text').innerText = 'You clicked the button!';
        }
      </script>
    </body>
    </html>
  `);
});

server.listen(3001, () => {
  console.log('Server is running on port 3001');
});
