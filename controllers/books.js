const Book = require('../models/book');
// const User = require('../models/user');

function booksIndex(req, res, next) {
  Book
    .find()
    .exec()
    .then(books => res.json(books))
    .catch(next);
}

function booksCreate(req, res, next) {
  if(req.file) req.body.image = req.file.filename;

  Book
    .create(req.body)
    .then(book => res.status(201).json(book))
    .catch(next);
}

function booksShow(req, res, next) {
  Book
    .findById(req.params.id)
    .populate('revieww.createdBy')
    .exec()
    .then((book) => {
      if(!book) return res.notFound();
      res.json(book);
    })
    .catch(next);
}

function booksCreateReview(req, res, next) {
  req.body.createdBy = req.currentUser;
  console.log(req.body);

  Book
    .findById(req.params.id)
    .populate('reviews.createdBy')
    .exec()
    .then((book) => {
      if(!book) return res.notFound();

      const review = book.reviews.create(req.body);
      book.reviews.push(review);
      return book.save();
    })
    .then((book) => {
      res.redirect(`/books/${book.id}`);
    })
    .catch(next);
}


module.exports = {
  index: booksIndex,
  create: booksCreate,
  show: booksShow,
  createReview: booksCreateReview
};
