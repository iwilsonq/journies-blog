import React from 'react';

const ArticleHeader = props => {
  return (
    <div className="header">
      <div className="author-image">
        <img
          src="https://journies.herokuapp.com/img/coffee.jpg"
          className="avatar-image"
        />
      </div>
      <div className="author-info">
        <p className="lead">Ian Wilson</p>
        <p className="details">Software developer at Pirashield. Does nothing which is of no use, though it seems.</p>
        <p className="details date-posted read-length">Feb 13 <span className="midDotDivider"></span> 3 min read</p>
      </div>
    </div>
  );
};

export default ArticleHeader;
