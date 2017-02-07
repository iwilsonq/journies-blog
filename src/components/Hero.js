import React from 'react';

const Hero = props => {
  return (
    <div className="hero">
      <h1>Featured Article</h1>
      <p className="lead">Author Date</p>
      <div className="cta text-center">
        <button className="btn btn-info btn-lg">Read</button>
      </div>
    </div>
  );
};

export default Hero;
