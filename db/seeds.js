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
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/79/To_Kill_a_Mockingbird.JPG/220px-To_Kill_a_Mockingbird.JPG',
      author: 'Harper Lee',
      publishedyear: 1960,
      genre: 'Southern Gothic',
      reviews: [{
        description: 'To Kill a Mockingbird will never stop being a good book',
        content: 'The book is about Atticus Finch, who appears as an unconventional hero and role model due to his morality rather than his physical capabilities. The theme of morals is apparent throughout the whole novel, especially in relation to religion and perception of sin. Take Mrs Dubose, a recovering morphine addict: she vows that she will die beholden to nothing and nobody. She is pursuing her own dream of being a free human being because she knows deep down that it is right.',
        bookrating: 5,
        createdBy: users[0]
      }]
    }, {
      title: 'Charlie and the Chocolate Factory',
      image: 'https://cdn.waterstones.com/bookjackets/large/9780/1413/9780141365374.jpg',
      author: 'Roald Dahl',
      publishedyear: 1964,
      genre: 'Childrens fantasy novel',
      reviews: [{
        description: 'Do you like chocolate? Mr. Willy Wonka sure does',
        content: 'Charlie, a small boy living in a run-down house with his whole family, gets a single chocolate bar for his birthday every year by his grandfather. Only this time, he is lucky enough to get one of the golden tickets, granting him access to Willy Wonkas chocolate factory. From there on out, you are just joining Charlies journey, to go further into Wonkas mysterious world of sweets!',
        bookrating: 4,
        createdBy: users[2]
      }]
    }, {
      title: 'The Hobbit',
      image: 'http://d1vzko4h6qahek.cloudfront.net/images/2/books/large/HOI2.jpg',
      author: 'J. R. R. Tolkien',
      publishedyear: 1937,
      genre: 'Fantasy',
      reviews: [{
        description: 'A magical tale about an adventurous hobbit',
        content: 'This is a true masterpiece, written by mr. Tolkien. From start to finish you can never really put the book away, being drawn into the fantastic world created for us to dream away and join in on the fun, struggles and all other experiences of mr. Bilbo and his companions. If you still have not picked up and read this book, I highly recommend doing it now, as it will not disappoint!',
        bookrating: 4,
        createdBy: users[0]
      }, {
        description: 'A magical tale about an adventurous hobbit',
        content: 'This is a true masterpiece, written by mr. Tolkien. From start to finish you can never really put the book away, being drawn into the fantastic world created for us to dream away and join in on the fun, struggles and all other experiences of mr. Bilbo and his companions. If you still have not picked up and read this book, I highly recommend doing it now, as it will not disappoint!',
        bookrating: 5,
        createdBy: users[1]
      }]
    }, {
      title: 'Harry Potter and the Philosophers Stone',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/51szYPO-G7L.jpg',
      author: 'J. K. Rowling',
      publishedyear: 1997,
      genre: 'Childrens Fantasy',
      reviews: [{
        description: 'An intro to a world filled with magic and mysteries',
        content: 'This childrens book is definitely not only for children. As I am reading story Ms. Rowling has created for Harry Potter, I can easily let my mind drift deep into this magical world. Creative, funny and at times scary, do not miss out on this one!',
        bookrating: 5,
        createdBy: users[1]
      }, {
        description: 'The wonderful story of a boy crashing into the world of wizardy',
        content: 'J. K. Rowling has created a fantastic world of imagination, where Harry suddenly finds out he is a wizard, and we get to tag along his journey at Hogwarts School of Wizardry and Witchcraft. There is no end as to what kind of mischievious, dangerous and funny situations Harry and his friends manage to sumble into. Definitely pick up on this first out of seven books about Harry Potter, you will not regret!',
        bookrating: 5,
        createdBy: users[2]
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
