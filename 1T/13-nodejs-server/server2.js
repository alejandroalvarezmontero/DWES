const http = require('http');
const server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    const pageNames = ['index', 'about', 'contact'];
    const randNum = Math.floor(Math.random() * pageNames.length);
    fs.readFile(`pages/${pageNames[randNum]}.html`, (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
    });
});
server.listen(8000);
console.log('Server is running on port 8000');