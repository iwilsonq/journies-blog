import React, { Component } from 'react';
import Post from './Post';

class BlogPosts extends Component {
  render() {
    return (
      <div className="blogposts container">
        <h2>Recent posts</h2>
        <div className="row">
          {this.props.posts.map(post => <Post key={post._id} {...post} />)}
        </div>
      </div>
    );
  }
}

export default BlogPosts;
