import React, { Component } from 'react';
import axios from 'axios';

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
    console.log(this.state);
    return (
      <div className="app">
        This is my app
      </div>
    );
  }
}

export default App;
