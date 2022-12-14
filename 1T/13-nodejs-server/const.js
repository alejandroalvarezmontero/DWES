const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/page") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>This is the web page</h1>");
  } else if (req.url === "/error") {
    res.statusCode = 418;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Error 404: Page Not Found</h1>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});