import React from 'react';
import Axios from 'axios';
// import { Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';

import Auth from '../../lib/Auth';
import BooksReviewForm from './BooksReviewForm';

class BooksShow extends React.Component {
  state = {
    book: {
      reviews: []
    },
    newReview: {}
  }

  // handleChange = ({ target: { name, value } }) => {
  //   const book = Object.assign({}, this.state.book, { [name]: value });
  //   // const errors = Object.assign({}, this.state.errors, { [name]: '' });
  //   this.setState({ book });
  // }

  handleSubmit = e => {
    e.preventDefault();
    Axios
      .post(`/api/books/${this.state.book.id}/reviews`, this.state.newReview,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
        })
      .then((res) => {
        const book = Object.assign({}, this.state.book, { reviews: res.data.reviews });
        this.setState({ book, newReview: { content: '' } });
      })
      .catch(err => console.log(err));
    // .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  componentDidMount() {
    Axios
      .get(`/api/books/${this.props.match.params.id}`)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="row">
        <div className="row">
          <div className="info-box col-md-6">
            <h2><strong>{this.state.book.title}</strong></h2>
            <h3><em>Written by {this.state.book.author}</em></h3>
            <h4>First Published: {this.state.book.publishedyear}</h4>
            <h4>Genre: {this.state.book.genre}</h4>
            <h5>Average rating: </h5>
          </div>
          <div className="showpage col-md-6">
            <img src={this.state.book.image} className="img-responsive" />
            <Panel id="collapsible-panel-example-3" defaultExpanded>
              <Panel.Heading>
                <Panel.Title>Have you read this book?</Panel.Title>
                <Panel.Toggle componentClass="a">Leave a review to tell others what you think!</Panel.Toggle>
              </Panel.Heading>
              <Panel.Collapse>
                <Panel.Body>
                  <BooksReviewForm
                    history={this.props.history}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    book={this.state.book}
                  />
                </Panel.Body>
              </Panel.Collapse>
            </Panel>
          </div>
        </div>
        <div className="row">
          {this.state.book.reviews.map(review => {
            return(
              <div key={review.id} className="col-md-6">
                <h3><strong>{review.description}</strong>, <em>Written by: {review.createdBy.username}</em></h3>
                <h4><strong>Rating: {review.bookrating} out of 5</strong></h4>
                <p>{review.content}</p>
                <p><em>Written by: {review.createdBy.username}</em></p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BooksShow;
