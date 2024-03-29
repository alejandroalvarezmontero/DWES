const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

});

module.exports = model('User', userSchema);


