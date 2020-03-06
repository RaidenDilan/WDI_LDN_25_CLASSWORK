const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  auther: { type: String, required: true },
  rrp: { type: Number, required: true }
});

module.exports = mongoose.model('Book', bookSchema);
