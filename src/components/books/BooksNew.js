import React from 'react';
import Axios from 'axios';

import BooksForm from './BooksForm';

import Auth from '../../lib/Auth';

class BooksNew extends React.Component {
  state = {
    book: {
      title: '',
      image: '',
      author: '',
      genre: ''
    },
    errors: {}
  };

  handleChange = ({ target: { name, value } }) => {
    const book = Object.assign({}, this.state.book, { [name]: value });
    // const errors = Object.assign({}, this.state.errors, { [name]: '' });
    this.setState({ book });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/books', this.state.book, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`} })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <BooksForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        book={this.state.book}
        // errors={this.state.errors}
      />
    );
  }
}

export default BooksNew;
