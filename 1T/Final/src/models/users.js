const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = model('User', userSchema);


// const { MongoClient, DataTypes } = require('mongodb');
// const mongoclient = new MongoClient('mongodb+srv://alex:Drako09122021@cluster0.fhx0jyq.mongodb.net/?retryWrites=true&w=majority');

// const User = mongoclient.define('user', {
//   id: {
//     type: DataTypes,
//     allowNull: false,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   name: {
//     type: DataTypes,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes,
//     allowNull: false,
//     unique: true
//   },
//   password: {
//     type: DataTypes,
//     allowNull: false
//   },
//   createdAt: {
//     type: DataTypes,
//     allowNull: false,
//     defaultValue: MongoClient.NOW
//   },
//   updatedAt: {
//     type: DataTypes,
//     allowNull: false,
//     defaultValue: MongoClient.NOW
//   }
// });

// module.exports = User;
