import React, { Component } from 'react';
import axios from 'axios';
import BlogPosts from './BlogPosts.js';

class App extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get('http://localhost:3090/posts')
      .then(results => results.data)
      .then(posts => this.setState({ posts }))
      .catch(err => { throw new Error(err); });
  }
  render() {
    return (
      <div className="app">
        <BlogPosts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
