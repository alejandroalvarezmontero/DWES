import express from 'express';

const server = express();

server.use(express.static('public'));

server.get('/', (req, res) => {
    res.send('Hello World');
})

server.get('/ping', (req,res ) => {
res.send('pong');
})

server.listen(3000, () => {
    console.log('Server listening at http://localhost:3000');
})