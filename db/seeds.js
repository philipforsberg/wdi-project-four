const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { db, env } = require('../config/environment');
const Book      = require('../models/book');


const bookData = [{
  title: 'To Kill a Mockingbird',
  image: 'https://2982-presscdn-29-70-pagely.netdna-ssl.com/wp-content/uploads/2015/07/To-Kill-a-Mockingbird-1st-ed.gif',
  author: 'Harper Lee',
  publishedyear: 1960,
  genre: 'Southern Gothic'
}, {
  title: 'Charlie and the Chocolate Factory',
  image: 'https://cdn.waterstones.com/bookjackets/large/9780/1413/9780141365374.jpg',
  author: 'Roald Dahl',
  publishedyear: 1964,
  genre: 'Childrens fantasy novel'
}, {
  title: 'The Hobbit',
  image: 'http://d1vzko4h6qahek.cloudfront.net/images/2/books/large/HOI2.jpg',
  author: 'J. R. R. Tolkien',
  publishedyear: 1997,
  genre: 'Fantasy'
}];

mongoose.connect(db[env])
  .then(() => Book.remove())
  .then(() => Book.create(bookData))
  .then(books => console.log(`${books.length} books created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
