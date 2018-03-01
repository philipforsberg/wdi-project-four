import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';

const Navbar = ({ history }) => {
  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return(
    <nav>
      { Auth.isAuthenticated() && <Link to="/books/new" className="btn btn-primary">Add Book</Link>}
      {' '}
      { !Auth.isAuthenticated() && <Link to="/login" className="btn btn-success">Login</Link>}
      {' '}
      { !Auth.isAuthenticated() && <Link to="/register" className="btn btn-primary">Register</Link> }
      {' '}
      { Auth.isAuthenticated() && <a href="#" className="btn btn-danger" onClick={logout}>Logout</a> }
    </nav>
  );
};

export default withRouter(Navbar);