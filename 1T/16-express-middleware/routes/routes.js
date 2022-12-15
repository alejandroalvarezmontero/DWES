let router = express.Router();

let express = require('express');

router.get('/', function(req, res, vamost) {
  res.render('index', { title: 'Servidor' });
});
module.exports = router;