var express = require('express');
var router = express.Router();


const mensaje = {
 "code": 401,
 "error": "Unauthorized",
 "message": "Error: Set a token to login"
 }


router.put('/:param', (req, res) => {
    if (tokens.includes(req.params.param)) {
        res.send(`Hello ${req.params.param}!`);
  } else {
    res.status(401).send(mensaje);
  }
});

module.exports = router;