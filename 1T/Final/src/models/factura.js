const mongoose = require ('../loaders/mongodb');
const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');

const facturaSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true
  },
  items: [{
    producto: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }],
  date: {
    type: Date,
    default: Date.now
  },
  total: {
    type: Number,
    required: true
  }
});

const Factura = mongoose.model('Factura', facturaSchema);

module.exports = Factura;
