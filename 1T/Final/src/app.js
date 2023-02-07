const express = require('express');
//const data = require('./data');
const app = express();
const port = process.env.PORT ||3001

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Controller
function getData(req, res) {
    // Llamar a services (Recoger de la base de datos)
    const data = getDataFromDatabase;
    res.send(data);
}

// service
function getDataFromDatabase(){
    return {};
}

// Router
app.get('/data', getData);

app.listen(port, () =>{
    console.log(`API Rest corriendo en http://localhost:${port}`)
})
