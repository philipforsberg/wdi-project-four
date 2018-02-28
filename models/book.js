const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  author: { type: String, required: true},
  genre: { type: String, required: true}
});

bookSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('book', bookSchema);
