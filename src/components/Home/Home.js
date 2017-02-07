import React from 'react';
import Hero from './Hero';
import FeaturedPosts from './FeaturedPosts';

const Home = props => {
  return (
    <div className="home">
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </div>
  );
};

export default Home;
