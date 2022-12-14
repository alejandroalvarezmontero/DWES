const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 418;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === "/") {
    res.end('This is the home page');
  } else if (req.url === "/about") {
    res.end('This is the about page');
  } else if (req.url === "/contact") {
    res.end('This is the contact page');
  } else {
    res.end('404 Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});