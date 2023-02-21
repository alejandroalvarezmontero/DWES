const { Mongodb, DataTypes } = require('mongodb');
const mongodb = new Mongodb('mongodb+srv://alex:Drako09122021@cluster0.fhx0jyq.mongodb.net/?retryWrites=true&w=majority');

const User = mongodb.define('user', {
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
    defaultValue: Mongodb.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Mongodb.NOW
  }
});

module.exports = User;
