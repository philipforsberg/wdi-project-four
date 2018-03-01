import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import BooksRoutes from './components/books/BooksRoutes';
import Login       from './components/auth/Login';
import Register    from './components/auth/Register';
import Navbar from './components/utility/Navbar';

import 'bootstrap-css-only';
import 'react-bootstrap';
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
            <BooksRoutes />
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
