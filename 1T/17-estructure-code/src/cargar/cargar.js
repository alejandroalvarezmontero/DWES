const express = require('express');
const app = express();
const notasrouter = require('../routes/notas');
app.use(express.json());
app.use('/notas', notasrouter);

module.exports = app;