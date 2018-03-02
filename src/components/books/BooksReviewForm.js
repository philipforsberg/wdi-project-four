import React from 'react';


function BooksReviewForm({ handleSubmit, handleChange, book }) {
  return (
    <div className="row">
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={book.reviews.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <input
            type="text"
            className="form-control"
            id="content"
            name="content"
            value={book.reviews.content}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookrating">Bookrating</label>
          <input
            type="number"
            className="form-control"
            id="bookrating"
            name="bookrating"
            value={book.reviews.bookrating}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
}

export default BooksReviewForm;
