import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';
import BlogPosts from './BlogPosts.js';
import Navigation from './Navigation';

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
      <Grid className="app">
        <Row>
          <Col sm={4} >
            <Navigation />
          </Col>
          <Col sm={8}>
            <BlogPosts posts={this.state.posts} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
