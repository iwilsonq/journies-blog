import React, { Component } from 'react';
import axios from 'axios';
import BlogPosts from './BlogPosts';
import Navigation from './Navigation';
import Hero from './Hero';
import Footer from './Footer';

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
        <Navigation />
        <Hero />
        <BlogPosts posts={this.state.posts} />
        <Footer />
      </div>
    );
  }
}

export default App;
