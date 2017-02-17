import React from 'react';

const FeaturedPost = props => {
  const image = props.image;
  return (
    <div className="card">
      <div
        className="image"
        style={{
          backgroundImage: `linear-gradient(rgba(244,82,43,0.3), rgba(244,82,43,0.3)),url(${image})` 
        }}
      />
      <h4 className="title">{props.title}</h4>
    </div>
  );
};

export default FeaturedPost;
