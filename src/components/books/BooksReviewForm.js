import React from 'react';


function BooksReviewForm({  }) {
  return (
    <div className="row">
      <form className="col-md-6">
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            // value={review.description}
            // onChange={}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <input
            type="text"
            className="form-control"
            id="content"
            name="content"
            // value={review.content}
            // onChange={}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookrating">Bookrating</label>
          <input
            type="number"
            className="form-control"
            id="bookrating"
            name="bookrating"
            // value={review.bookrating}
            // onChange={}
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
