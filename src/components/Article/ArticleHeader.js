import React from 'react';
import { formatSimpleDate } from '../../utils/helpers';

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
        <p className="details date-posted read-length">{formatSimpleDate(props.dateCreated)}</p>
      </div>
    </div>
  );
};

export default ArticleHeader;
