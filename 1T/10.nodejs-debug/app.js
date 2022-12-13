const express = require ('express')

const app = express()

app.get('/', (req,res) => {
    req.token = 10+ parseInt('10')
    res.text = 'secret'
    res.send('Hola Mis amores')
})
module.exports = app;