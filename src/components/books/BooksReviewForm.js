import React from 'react';


function BooksReviewForm({ handleSubmit, handleChange, review }) {
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
            value={review.description}
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
            value={review.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="bookrating">Bookrating(1-5) :</label>
          {' '}
          {/* <input
            type="number"
            min="1"
            max="5"
            className="form-control"
            id="bookrating"
            name="bookrating"
            value={review.bookrating}
            onChange={handleChange}
          /> */}
          <select
            className="custom-select"
            id="bookrating"
            name="bookrating"
            value={review.bookrating}
            onChange={handleChange}
          >
            <option defaultValue>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </select>
        </div>
        <div>
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
}

export default BooksReviewForm;
