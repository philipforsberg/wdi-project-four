const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Book      = require('../models/book');

const bookData = [{
  title: 'To Kill a Mockingbird',
  image: 'https://media.glamour.com/photos/56e1f3c462b398fa64cbd304/master/w_1280,c_limit/entertainment-2016-02-18-main.jpg',
  author: 'Harper Lee',
  genre: 'Southern Gothic'
}, {
  title: 'Charlie and the Chocolate Factory',
  image: 'https://cdn.waterstones.com/bookjackets/large/9780/1413/9780141365374.jpg',
  author: 'Roald Dahl',
  genre: 'Childrens fantasy novel'
}, {
  title: 'The Hobbit',
  image: 'http://d1vzko4h6qahek.cloudfront.net/images/2/books/large/HOI2.jpg',
  author: 'J. R. R. Tolkien',
  genre: 'Fantasy'
}];

mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Book.create(bookData))
  .then(books => console.log(`${books.length} books created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
