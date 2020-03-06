const mongoose = require('mongoose');

const chocolateSchema = new mongoose.Schema({
  name: { type: String},
  brand: { type: String},
  image: { type: String }
});

module.exports = mongoose.model('Chocolate', chocolateSchema);
