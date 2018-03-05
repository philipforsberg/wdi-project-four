const Book = require('../models/book');

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
    .populate('reviews.createdBy')
    .exec()
    .then((book) => {
      if(!book) return res.notFound();
      res.json(book);
    })
    .catch(next);
}

function booksShowReview(req, res, next) {
  Book
    .findById(req.params.id)
    .exec()
    .then((book) => {
      if(!book) return res.notFound();
      const review = book.reviews.id(req.params.reviewId);
      res.json(review);
    })
    .catch(next);
}

function booksUpdateReview(req, res, next) {
  Book
    .findById(req.params.id)
    .exec()
    .then((book) => {
      if(!book) return res.notFound();
      let review = book.reviews.id(req.params.reviewId);
      review = Object.assign(review, req.body);
      return book.save();
    })
    .then(book => res.json(book))
    .catch(next);
}

function booksCreateReview(req, res, next) {
  req.body.createdBy = req.currentUser;

  Book
    .findById(req.params.id)
    .exec()
    .then((book) => {
      if(!book) return res.notFound();

      const review = book.reviews.create(req.body);
      book.reviews.push(review);
      return book.save();
    })
    .then(book => res.json(book))
    .catch(next);
}


function booksDeleteReview(req, res, next) {
  Book
    .findById(req.params.id)
    .exec()
    .then((book) => {
      if(!book) return res.notFound();
      const review = book.reviews.id(req.params.reviewId);
      review.remove();
      return book.save();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: booksIndex,
  create: booksCreate,
  show: booksShow,
  createReview: booksCreateReview,
  showReview: booksShowReview,
  updateReview: booksUpdateReview,
  deleteReview: booksDeleteReview
};
