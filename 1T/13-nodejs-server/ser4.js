const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/fibonacci') {
        const queryString = req.url.split('?')[1];
        const end = parseInt(queryString);
        const sequence = computeFibonacci(end);
        res.end(`${sequence}`);
    }
});

function computeFibonacci(end) {
    if (end === 0) {
        return 0;
    }
    if (end === 1) {
        return 1;
    }
    return computeFibonacci(end - 1) + computeFibonacci(end - 2);
}

server.listen(8080);