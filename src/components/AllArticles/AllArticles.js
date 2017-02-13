import React, { Component } from 'react';
import { Link } from 'react-router';
import Article from './Article';

export default class AllArticles extends Component {
  render() {
    return (
      <div className="all-articles">
        {this.props.articles.map(article => <Article key={article._id} {...article} />)}
      </div>
    )
  }
}
