import React, { Component } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
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
        {React.cloneElement(this.props.children, this.state)}
        <Footer />
      </div>
    );
  }
}

export default App;
