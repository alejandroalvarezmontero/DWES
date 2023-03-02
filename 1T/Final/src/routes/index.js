 const { Router } = require('express');
 const mongodb = require('mongodb');


 const users = require('./users.js');

 const router = Router();

 router.use('/users', users);




 module.exports = router;
