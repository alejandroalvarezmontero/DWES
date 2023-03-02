function createUser(params) {

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
  

function getAllUsers(params) {
    
}

module.exports = {
    createUser,
    getAllUsers,
}