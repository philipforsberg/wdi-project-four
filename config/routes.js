const router = require('express').Router();
const auth  = require('../controllers/auth');
const books = require('../controllers/books');
const secureRoute = require('../lib/secureRoute');


router.route('/books')
  .get(books.index)
  .post(secureRoute, books.create);

router.route('/books/:id')
  .get(books.show);

router.route('/books/:id/comments')
  .post(books.createReview);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
