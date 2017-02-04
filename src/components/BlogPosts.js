import React, { Component } from 'react';
import Post from './Post';

class BlogPosts extends Component {
  render() {
    return (
      <div className="blogposts">
        {this.props.posts.map(post => <Post key={post._id} {...post} />)}
      </div>
    );
  }
}

export default BlogPosts;
