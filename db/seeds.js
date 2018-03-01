const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { db, env } = require('../config/environment');
const Book      = require('../models/book');
const User = require('../models/user');


mongoose.connect(db[env]);

User.collection.drop();
Book.collection.drop();

User
  .create([{
    username: 'Sabrina',
    email: 'sabrina@sabrina.sabrina',
    password: 'sabrina',
    passwordConfirmation: 'sabrina'
  }, {
    username: 'Robert',
    email: 'robert@robert.robert',
    password: 'robert',
    passwordConfirmation: 'robert'
  }, {
    username: 'James',
    email: 'james@james.james',
    password: 'james',
    passwordConfirmation: 'james'
  }])
  .then((users) => {
    console.log(`${users.length} users created!`);

    return Book.create([{
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
      publishedyear: 1937,
      genre: 'Fantasy',
      reviews: [{
        description: 'A magical tale about an adventurous hobbit',
        bookrating: 4,
        content: 'This is a true masterpiece, written by mr. Tolkien. From start to finish you can never really put the book away, being drawn into the fantastic world created for us to dream away and join in on the fun, struggles and all other experiences of mr. Bilbo and his companions. If you still have not picked up and read this book, I highly recommend doing it now, as it will not disappoint!',
        createdBy: users[0]
      }, {
        description: 'A magical tale about an adventurous hobbit',
        bookrating: 5,
        content: 'This is a true masterpiece, written by mr. Tolkien. From start to finish you can never really put the book away, being drawn into the fantastic world created for us to dream away and join in on the fun, struggles and all other experiences of mr. Bilbo and his companions. If you still have not picked up and read this book, I highly recommend doing it now, as it will not disappoint!',
        createdBy: users[1]
      }]
    }]);
  })
  .then((books) => {
    console.log(`${books.length} books created!`);
  })
  .finally(() => {
    return mongoose.connection.close();
  })
  .catch(err => console.log(err));
