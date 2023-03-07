const User = require('../models/user');

function createUser(req, res) {

    const mongodb = require('mongodb');
  
    const Mongoose = mongodb.Mongoose;
    const url = 'mongodb://localhost:27017';
    const mongodbName = 'myDatabase';
  

    Mongoose.connect(url, function(err, client) {
      if (err) {
        console.error('Error al conectar con Mongo:', err);
        return;
      }
  
      const mongodb = client.mongodb(mongodbName);
      const usersCollection = mongodb.collection('users');
      
      
      const newUser = {
        name: params.name,
        email: params.email,
        password: params.password,
       
      };
  
      usersCollection.insertOne(newUser, function(err, result) {
        if (err) {
          console.error('Error al meter nuevo user:', err);
          client.close();
          return;
        }
  
        console.log('Nuevo user creado:', result.insertedId);
        client.close();
      });
    });
  }
  

  

  function getAllUsers(req, res) {
    User.find({}, (err, users) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error del servidor');
      } else {
        res.json(users);
      }
    });
  }

module.exports = {
    createUser,
    getAllUsers,
}