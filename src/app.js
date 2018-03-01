import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import BooksIndex from './components/books/BooksIndex';
import BooksShow from './components/books/BooksShow';
import BooksNew from './components/books/BooksNew';
import Login       from './components/auth/Login';
import Register    from './components/auth/Register';
import Navbar from './components/utility/Navbar';

import 'bootstrap-css-only';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <h1><Link to="/">Book World</Link></h1>
            <Navbar />
          </header>
          <main>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route exact path="/" component={BooksIndex} />
            <Route path="/books/new" component={BooksNew} />
            <Route path="/books/:id" component={BooksShow} />
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
