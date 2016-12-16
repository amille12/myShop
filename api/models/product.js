var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: { type: String, require: true, unique: true },
  description: { type: String, require: true },
  price: { type: Number, require: true, min: 0 },
  created_at: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Product', schema);
