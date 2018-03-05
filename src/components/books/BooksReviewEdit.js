import React from 'react';
import Axios from 'axios';

import BooksReviewForm from './BooksForm';

import Auth from '../lib/Auth';

class BooksReviewEdit extends React.Component {
  state = {
    review: {
      description: '',
      content: '',
      bookrating: 1
    }
  };

  render() {
    return (
      <BooksReviewEdit
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        book={this.state.book}
      />
    );
  }
}

export default BooksReviewEdit;
