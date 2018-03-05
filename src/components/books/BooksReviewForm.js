import React from 'react';


function BooksReviewForm({ handleSubmit, handleChange, newReview }) {
  return (
    <div className="row">
      <form onSubmit={handleSubmit} className="col-md-12">
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={newReview.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            rows="6"
            className="form-control"
            id="content"
            name="content"
            value={newReview.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="bookrating">Bookrating(1-5)</label>
          <input
            type="number"
            min="1"
            max="5"
            className="form-control"
            id="bookrating"
            name="bookrating"
            value={newReview.bookrating}
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
