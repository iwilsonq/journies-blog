import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { urlify } from '../../utils/helpers';

export default class Hero extends Component {
  render() {
    const { articles } = this.props;

    if (articles.length) {
      return (
        <div className="hero container">
          <div className="welcome">
            <h2 style={{ borderBottom: '2px solid #fff'}}>Ian Wilson</h2>
            <h2>Developer, Blogger, and Stoic</h2>
          </div>
        </div>
      );
    }

    return <div className="hero">
      <h1>...</h1>
    </div>;
  }
};
