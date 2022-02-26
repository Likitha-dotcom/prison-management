const mongoose = require('mongoose');

const Book = mongoose.Schema({
  ISBN: { type: Number, required: true },
  name: { type: String, required: true },
  price:  Number,
  isInStock: String,
  edition: Number,
  printDate: Date,
});

module.exports = mongoose.model('Book', Book);
