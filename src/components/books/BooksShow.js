import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


class BooksShow extends React.Component {
  state = {
    book: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/books/${this.props.match.params.id}`)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="row">
        <div className="book-box col-md-6">
          <img src={this.state.book.image} className="img-responsive" />
          <p>Have you read this book? <Link to={`/books/${this.state.book.id}`}>Leave a review to tell others what you think!</Link></p>
        </div>
        <div className="col-md-6">
          <h3>{this.state.book.title}</h3>
          <h4>{this.state.book.author}</h4>
          <h4>{this.state.book.genre}</h4>
        </div>
      </div>
    );
  }
}

export default BooksShow;
