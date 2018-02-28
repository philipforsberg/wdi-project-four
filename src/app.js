import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import BooksIndex from './components/books/BooksIndex';
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
            <h1><Link to="/">What on earth am I gonna create</Link></h1>
            <Navbar />
          </header>
          <main>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route exact path="/" component={BooksIndex} />
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
