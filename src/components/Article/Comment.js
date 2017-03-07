import React from 'react';
import { formatSimpleDate } from '../../utils/helpers';

const Comment = props => {
  const colors = ['#3F51B5', '#E91E63', '#4CAF50', '#FFEB3B'];
  const randomColor = Math.floor(Math.random() * colors.length);

  return (
    <div className="comment">
      <div className="comment-header">
        <div className="comment-author"
          style={{ backgroundColor: colors[randomColor] }}
        />
        <div className="author-details">
          <div className="author"><strong>{props.name}</strong></div>
          <div className="date-created">{formatSimpleDate(props.createdAt)}</div>
        </div>
      </div>
      <div className="comment-content">
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Comment;
