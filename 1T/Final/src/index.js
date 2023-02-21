const express = require('express');
const routes = require ('./routes/router.js');
const models = require('./models/users.js');
const authMiddleware = ('./middleware/auth-middleware');
const middleware = ('./middleware/error-middleware');
const services = ('./services/smpt-service.js')



const app = express();
const port = process.env.PORT ||3001;

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

