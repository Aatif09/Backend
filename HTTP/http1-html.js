const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write("<h1>Welcome to ABES Engineering College</h1>");
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color:rgb(227, 233, 172);
            text-align: center;
            padding-top: 50px;
          }
          h1 {
            color: red;
            font-size: 20px;
          }
          p {
            font-size: 15px;
            color: green;
          }
        </style>
      </head>
      <body>
        <h1>Hello World!</h1>
        <p>This is a response with HTML and inline styling.</p>
      </body>
    </html>
  `);
});

server.listen(3001, () => {
  console.log('Server running at http://localhost:3001/');
});

// Ports are identified by a 16 - bit number, which means they can range from 0 to 65535. Port //numbers below 1024 are typically reserved for well - known services(like HTTP on port 80 or HTTPS on port 443).Ports from 1024 to 49151 are for registered services, while ports from 49152 to 65535 are called dynamic or private ports.

// server.listen(() => {
//   const a = server.address();
//   console.log(Server running on port ${ a.port })
// }); 