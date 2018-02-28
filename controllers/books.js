const Book = require('../models/book');

function booksIndex(req, res, next) {
  Book
    .find()
    .exex()
    .then(books => res.json(books))
    .catch(next);
}

module.exports = {
  index: booksIndex
};
