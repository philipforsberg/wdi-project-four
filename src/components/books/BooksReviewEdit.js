import React from 'react';
import Axios from 'axios';

import BooksReviewForm from './BooksReviewForm';

import Auth from '../../lib/Auth';

class BooksReviewEdit extends React.Component {
  state = {
    review: {
      description: '',
      content: '',
      bookrating: ''
    }
  };

  componentDidMount() {
    Axios
      .get(`/api/books/${this.props.match.params.id}/reviews/${this.props.match.params.reviewId}`,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
        })
      .then(res => this.setState({ review: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const review = Object.assign({}, this.state.review, { [name]: value });
    this.setState({ review });
  }

  handleSubmit = e => {
    e.preventDefault();
    Axios
      .put(`/api/books/${this.props.match.params.id}/reviews/${this.props.match.params.reviewId}`, this.state.review,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
        })
      .then(() => {
        this.props.history.push(`/books/${this.props.match.params.id}`);
      })
      .catch(err => console.log(err));
    // .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  deleteReview = () => {
    Axios
      .delete(`/api/books/${this.props.match.params.id}/reviews/${this.props.match.params.reviewId}`, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` }})
      .then(() => this.props.history.push(`/books/${this.props.match.params.id}`))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <BooksReviewForm
          history={this.props.history}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          review={this.state.review}
        />
        { Auth.isAuthenticated() && <button className="btn btn-danger" onClick={this.deleteReview}>
          Delete
        </button> }
      </div>
    );
  }
}

export default BooksReviewEdit;
