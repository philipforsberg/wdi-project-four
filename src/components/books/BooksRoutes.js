import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from '../utility/ProtectedRoute';

import BooksIndex from './BooksIndex';
import BooksShow from  './BooksShow';
import BooksNew from './BooksNew';

const BooksRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={BooksIndex} />
      <ProtectedRoute path="/books/new" component={BooksNew} />
      <Route path="/books/:id" component={BooksShow} />
    </Switch>
  );
};

export default BooksRoutes;
