import React from 'react';

const ArticleFooter = props => {
  return (
    <div className="article-footer">
      <div className="author-image">
        <img
          src="https://journies.herokuapp.com/img/coffee.jpg"
          className="avatar-image"
        />
      </div>
      <div className="author-info">
        <p className="lead">Ian Wilson</p>
        <p className="details">Software developer at Pirashield. Does nothing which is of no use, though it seems.</p>
      </div>
    </div>
  );
};

export default ArticleFooter;
