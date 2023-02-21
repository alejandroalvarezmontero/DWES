const { MongoClient, DataTypes } = require('mongodb');
const mongoclient = new MongoClient('mongodb+srv://alex:Drako09122021@cluster0.fhx0jyq.mongodb.net/?retryWrites=true&w=majority');

const User = mongoclient.define('user', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: MongoClient.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: MongoClient.NOW
  }
});

module.exports = User;
