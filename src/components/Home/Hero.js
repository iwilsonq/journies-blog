import React from 'react';
import { browserHistory } from 'react-router';

const Hero = props => {
  return (
    <div className="hero">
      <h1>Featured Article</h1>
      <p className="lead">Author Date</p>
      <div className="cta text-center">
        <button
          className="btn btn-info btn-lg"
          onClick={() => browserHistory.push('/posts')}
        >
          Read Article
        </button>
      </div>
    </div>
  );
};

export default Hero;
