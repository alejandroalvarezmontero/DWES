const { mongodbService } = require('../services/mongodb-service');

 async function getAllUsers(req, res, next) {
 const filters = req.query;
 const users = mongodbService.getAllUsers();
 return res.status(200).send(pageMiddleware(users));
 }

 function getUserId(req, res, next) {
 return res.status(200).send(req.params.id);
 }

 function createUser(req, res, next) {
 mongodbService.createUser(req.body);
 return res.status(201).send({ message: 'Created' });
 }

 module.exports = {
 getAllUsers,
 getUserId,
 createUser,
};