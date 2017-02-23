import React from 'react';
import Hero from './Hero';
import Intro from './Intro';
import FeaturedPosts from './FeaturedPosts';
import Social from './Social';

const Home = props => {
  return (
    <div className="home">
      <Hero {...props} />
      <Intro />
      <FeaturedPosts articles={props.articles} />
      <Social />
    </div>
  );
};

export default Home;
