const mongoose = require('mongoose');

// const commentSchema = new mongoose.Schema({
//   content: { type: String, required: true },
//   createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
// }, {
//   timestamps: true
// });
//
// commentSchema.methods.belongsTo = function commentBelongsTo(user) {
//   return this.createdBy.id === user.id;
// };

const reviewSchema = mongoose.Schema({
  description: { type: String, required: true },
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

// reviewSchema.methods.belongsTo = function reviewBelongsTo(user) {
//   return this.createdBy.id === user.id;
// };

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  author: { type: String, required: true},
  genre: { type: String, required: true},
  reviews: [ reviewSchema ]
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
