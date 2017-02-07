import React from 'react';

const FeaturedPost = props => {
  return (
    <div className="post-wrapper col-sm-4">
      <div className="post">
        <div className="post-section post-image">
          <img src="http://localhost:3090/img/snarf.jpg" alt="" />
        </div>
        <div className="post-section post-title">
          <h4>{props.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
