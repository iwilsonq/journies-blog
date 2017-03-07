import React from 'react';
import { formatDate } from '../../utils/helpers';

const Comment = props => {
  return (
    <div className="comment">
      <div className="comment-header">
        <img src="" alt="author" className="comment-author"/>
        <div className="author-details">
          <div className="author">{props.user || 'Anon'}</div>
          <div className="date-created">{formatDate(props.createdAt)}</div>
        </div>
      </div>
      <div className="comment-content">
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Comment;
