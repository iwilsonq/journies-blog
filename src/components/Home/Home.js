import React from 'react';
import Hero from './Hero';
import FeaturedPosts from './FeaturedPosts';
import Social from './Social';
import Gist from '../common/Gist';

const Home = props => {
  return (
    <div className="home">
      <Hero {...props} />
      <FeaturedPosts articles={props.articles} />
      <Gist gist="iwilsonq/4f4af26c17030ccac8339d29118944b7" src="" />
      <Social />
    </div>
  );
};

export default Home;
