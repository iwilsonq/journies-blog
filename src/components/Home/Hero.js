import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class Hero extends Component {
  render() {
    const { articles, currentArticle } = this.props;

    if (articles.length) {
      return (
        <div
          className="hero"
          style={{ backgroundImage: `url(${articles[currentArticle].image})` }}
        >
          <h1>{articles[currentArticle].title}</h1>
          <p className="lead">Ian Wilson Date</p>
          <div className="cta text-center">
            <button
              className="btn btn-info btn-lg"
              onClick={() => browserHistory.push('/articles')}
            >
              Read Article
            </button>
          </div>
        </div>
      );
    }

    return <div className="hero">
      <h1>...</h1>
    </div>;
  }
};
