const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  description: String,
  categoria: {
    type: String,
    enum: ['Sudaderas', 'Botines', 'Camisetas', 'Chaquetones', 'Pantalones'],
    required: true
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  imageUrl: String,
},{timestamps:true});

module.exports = mongoose.model('Producto', productoSchema);
