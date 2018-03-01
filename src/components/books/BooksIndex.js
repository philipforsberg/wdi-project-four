import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class BooksIndex extends React.Component {
  state = {
    books: []
  }
  componentWillMount() {
    Axios
      .get('/api/books')
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.state.books.map(book => {
            return(
              <div key={book.id} className="col-xs-12 col-sm-6 col-md-4">
                <Link to={`/books/${book.id}`}>
                  <img src={book.image} className="img-responsive" />
                </Link>
                <p><strong>{book.title}</strong>, <em>written by {book.author}</em></p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BooksIndex;
