const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  reservedQuantity: {
    type: Number,
    default: 0,
  },
});

BookSchema.index({ title: 'text' });

module.exports = Book = mongoose.model('book', BookSchema);
