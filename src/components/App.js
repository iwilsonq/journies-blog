import React, { Component } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import Footer from './Footer';

class App extends Component {
  state = {
    articles: [],
    currentArticle: 0
  };

  componentDidMount() {
    axios.get('http://localhost:3090/articles')
      .then(results => results.data)
      .then(articles => this.setState({ articles }))
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
