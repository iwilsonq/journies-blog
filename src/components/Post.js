import React from 'react';

const Post = props => {
  return (
    <div className="post">
      <div className="post-section post-title">
        <h4>{props.title}</h4>
      </div>
      <div className="post-section post-content">
        {props.content}
      </div>
    </div>
  );
};

export default Post;
