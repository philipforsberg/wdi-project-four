const Book = require('../models/book');

function booksIndex(req, res, next) {
  Book
    .find()
    .exec()
    .then(books => res.json(books))
    .catch(next);
}

function booksShow(req, res, next) {
  Book
    .findById(req.params.id)
    .exec()
    .then((book) => {
      if(!book) return res.notFound();
      res.json(book);
    })
    .catch(next);
}

module.exports = {
  index: booksIndex,
  show: booksShow
};
