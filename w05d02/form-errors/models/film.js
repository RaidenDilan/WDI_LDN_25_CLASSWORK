const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  releaseDate: { type: String, required: true, match: /[1-9][0-9]{4}-[0-1][0-9]{2}-[1-3][0-9]{2}/ },
  synopsis: { type: String, maxlength: 255 },
  genre: { type: String, required: true },
  wikipedia: { type: String },
  images: [{ type: String }]
});

module.exports = mongoose.model('Film', filmSchema);
