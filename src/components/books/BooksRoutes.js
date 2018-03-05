import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from '../utility/ProtectedRoute';

import BooksIndex from './BooksIndex';
import BooksShow from  './BooksShow';
import BooksNew from './BooksNew';
import BooksReviewEdit from './BooksReviewEdit';

const BooksRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={BooksIndex} />
      <ProtectedRoute path="/books/new" component={BooksNew} />
      <Route exact path="/books/:id" component={BooksShow} />
      <Route path="/books/:id/reviews/:reviewId" component={BooksReviewEdit} />
    </Switch>
  );
};

export default BooksRoutes;
