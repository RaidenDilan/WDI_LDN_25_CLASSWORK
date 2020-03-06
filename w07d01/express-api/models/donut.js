const mongoose = require('mongoose');

const donutSchema = new mongoose.Schema({
  style: String,
  flavour: String
});

module.exports = mongoose.model('Donut', donutSchema);
