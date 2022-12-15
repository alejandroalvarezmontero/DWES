var express = require('express');
var router = express.Router();
router.get('/', function(req, res, vamos) {
  res.send('No picha');
});

module.exports = router;