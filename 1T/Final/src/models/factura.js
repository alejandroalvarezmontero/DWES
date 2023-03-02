const mongoose = require ('../loaders/mongodb');
const ObjectId = require('mongodb').ObjectId;
user: { type: Types.ObjectId, ref; "User" }
producto: [{ type: Types.ObjectId, ref: "Producto" }],
 Schema = productoSchema;