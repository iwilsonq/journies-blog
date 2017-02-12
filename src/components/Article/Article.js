import React, { Component } from 'react';
import ArticleHeader from './ArticleHeader';
import ArticleFooter from './ArticleFooter';

export default class Article extends Component {
  render() {
    const { articles, currentArticle } = this.props;
    const { title, content, image, caption } = articles[currentArticle];

    return (
      <div className="article">
        <div className="content">
          <ArticleHeader />
          <h1 className="title">{title}</h1>
        </div>
        <div className="cover-photo">
          <img src={image} />
          <p className="caption">{caption}</p>
        </div>
        <div className="content">
          <div className="article-body">
            <p>{content}</p>
          </div>
          <ArticleFooter />
        </div>
      </div>
    );
  }
}
