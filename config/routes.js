const router = require('express').Router();
const auth  = require('../controllers/auth');
const books = require('../controllers/books');
const secureRoute = require('../lib/secureRoute');


router.route('/books')
  .get(books.index)
  .post(secureRoute, books.create);

router.route('/books/:id')
  .get(books.show);

router.route('/books/:id/reviews')
  .post(secureRoute, books.createReview);

router.route('/books/:id/reviews/:reviewId')
  .get(secureRoute, books.showReview)
  .put(secureRoute, books.updateReview);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
