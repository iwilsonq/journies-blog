import React, { Component } from 'react';
import FeaturedPost from './FeaturedPost';

class FeaturedPosts extends Component {
  render() {
    return (
      <div className="blogposts container">
        <h2>Featured Posts</h2>
        <div className="row">
          {this.props.posts.map(post => <FeaturedPost key={post._id} {...post} />)}
        </div>
      </div>
    );
  }
}

export default FeaturedPosts;
