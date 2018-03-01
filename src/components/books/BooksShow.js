import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


class BooksShow extends React.Component {
  state = {
    book: {
      reviews: []
    }
  }

  componentWillMount() {
    Axios
      .get(`/api/books/${this.props.match.params.id}`)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }


  render() {
    console.log(this.state.book.reviews);
    return (
      <div className="row">
        <div className="showpage col-md-6">
          <img src={this.state.book.image} className="img-responsive" />
          <p>Have you read this book? <Link to={`/books/${this.state.book.id}`}>Leave a review to tell others what you think!</Link></p>
        </div>
        <div className="col-md-6">
          <h2><strong>{this.state.book.title}</strong></h2>
          <h3><em>Written by {this.state.book.author}</em></h3>
          <h4>First Published: {this.state.book.publishedyear}</h4>
          <h4>{this.state.book.genre}</h4>
        </div>
        <div className="col-md-12 is-multiline">
          {this.state.book.reviews.map(review => {
            return(
              <div key={review._id} className="col-md-5">
                <h3><strong>{review.description}</strong></h3>
                <p>{review.content}</p>
                <p><em>Written by: {review.createdBy}</em></p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BooksShow;
