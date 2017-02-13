import React from 'react';

const FeaturedPost = props => {
  const image = props.image;
  return (
    <div className="post">
      <div className="post-section post-title">
        <div className="post-image" style={{backgroundImage: `url(${image})` }} />
        <h4 className="post-title">{props.title}</h4>
      </div>
    </div>
  );
};

export default FeaturedPost;
