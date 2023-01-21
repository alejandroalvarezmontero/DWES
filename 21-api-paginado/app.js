const express = require('express');
const data = require('./data');
const app = express();
const port = process.env.PORT ||3001

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/datos', (req,res) =>{
    res.send(data)
})

app.listen(port, () =>{
    console.log(`API Rest corriendo en http://localhost:${port}`)
})

var todo_items;
todo_items = [];