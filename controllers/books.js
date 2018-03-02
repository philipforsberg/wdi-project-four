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

function createCommentRoute(req, res, next) {
  req.body.createdBy = req.user;

  Book
    .findById(req.params.id)
    .exec()
    .then((list) => {
      if(!list) return res.notFound();

      list.comments.push(req.body);
      return list.save();
    })
    .then((list) => {
      res.redirect(`/lists/${list.id}`);
    })
    .catch(next);
}


module.exports = {
  index: booksIndex,
  create: booksCreate,
  show: booksShow
};
