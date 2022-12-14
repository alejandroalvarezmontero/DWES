var express = require('express');
var router = express.Router();


const tokens =  ["cbdf1cdb5ce10b2b93d9291ccb937cfe", "c6dbabcb6d459fd09bee37e08ecddf0f", "14b13cc66ee5a5579693d64abdc2b385c6169183"];

const mensaje = {
 "code": 401,
 "error": "Unauthorized",
 "message": "Error: Set a token to login"
 }
router.put('/:token', (req, res) => {
    if (tokens.includes(req.params.token)) {
      res.send(`Hello!`);
  } else {
    res.status(401).send(mensaje);
  }
});

module.exports = router;