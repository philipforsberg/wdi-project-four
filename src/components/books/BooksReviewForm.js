import React from 'react';

const BooksReviewForm = ({ handleChange, handleSubmit, user }) => {
  return(
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          className="form-control"
        />
      </div>
      <button className="btn-primary btn">Login</button>
    </form>
  );
};

export default BooksReviewForm;