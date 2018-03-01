import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';


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
        <div className="row">
          {this.state.book.reviews.map(review => {
            return(
              <div key={review.id} className="col-md-6">
                <h3><strong>{review.description}</strong></h3>
                <p>{review.content}</p>
                <p><em>Written by: {review.createdBy.username}</em></p>
              </div>
            );
          })}
        </div>
        <div>
          <p>You can also make the Panel heading toggle the collapse.</p>
          <Panel>
            <Panel.Heading>
              <Panel.Title toggle>
                Title that functions as a collapse toggle
              </Panel.Title>
            </Panel.Heading>

            <Panel.Collapse>
              <Panel.Body>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </div>
      </div>
    );
  }
}

export default BooksShow;
