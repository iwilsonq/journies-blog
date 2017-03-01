import React from 'react';

const FeaturedPost = props => {
  const image = props.image;
  return (
    <div className="card">
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <div className="card-content">
        <h4 className="title">{props.title}</h4>
        {props.subtitle && <p className="subtitle truncate">{props.subtitle}</p>}
      </div>
    </div>
  );
};

export default FeaturedPost;
