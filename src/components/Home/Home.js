import React from 'react';
import Hero from './Hero';
import FeaturedPosts from './FeaturedPosts';

const Home = props => {
  return (
    <div className="home">
      <Hero {...props} />
      <FeaturedPosts articles={props.articles} />
    </div>
  );
};

export default Home;
