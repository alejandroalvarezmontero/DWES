const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  //usuario: { type: Types.ObjectId, ref: "User" },
  //productos: [{ type: Types.ObjectId, ref: "Producto" }],
});

module.exports = model('User', userSchema);


