import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';

import Auth from '../../lib/Auth';
import BooksReviewForm from './BooksReviewForm';

class BooksShow extends React.Component {
  state = {
    book: {
      reviews: []
    },
    review: {
      description: '',
      content: '',
      bookrating: ''
    }
  }

  handleChange = ({ target: { name, value } }) => {
    const review = Object.assign({}, this.state.review, { [name]: value });
    this.setState({ review });
  }

  handleSubmit = e => {
    e.preventDefault();
    Axios
      .post(`/api/books/${this.state.book.id}/reviews`, this.state.review,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
        })
      .then((res) => {
        console.log(res.data.reviews);
        console.log();
        const book = Object.assign({}, this.state.book, { reviews: res.data.reviews });
        this.setState({ book, review: { content: '' } });
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
          <div className="info-box col-md-6 col-sm-6">
            <h2><strong>{this.state.book.title}</strong></h2>
            <h3><em>Written by {this.state.book.author}</em></h3>
            <h4>First Published: {this.state.book.publishedyear}</h4>
            <h4>Genre: {this.state.book.genre}</h4>
            <h5>Average rating: </h5>
            {this.state.book.reviews.reduce((sum, review) => {
              return sum + review.bookrating;
            }, 0) / this.state.book.reviews.length}
          </div>
          <div className="image-box col-md-6 col-sm-6 col-xs-8">
            <div className="back-image" style={{backgroundImage: `url('${this.state.book.image}')`}}></div>
            <Panel id="collapsible-panel-example-3">
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
                    review={this.state.review}
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
                <h3><strong>{review.description}</strong></h3>
                { Auth.isAuthenticated() && review.createdBy.id === Auth.getPayload().userId  && <Link to={'/books/'+ this.props.match.params.id + '/reviews/' + review.id} className="btn btn-warning">Edit/Delete</Link>}
                <h4><strong>Rating: {review.bookrating} out of 5</strong></h4>
                <p>{review.content}</p>
                <h5><em>Written by: {review.createdBy.username}</em></h5>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BooksShow;
