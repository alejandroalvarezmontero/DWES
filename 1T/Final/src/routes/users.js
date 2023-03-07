const { Router } = require('express');

 const { getUsers, getUserId, createUser } = require('../controllers/users.js');

 const router = Router();

 router.get('', getAllUsers);
 router.post('', createUser);
 router.get('/:id', getUserId);

 module.exports = users;