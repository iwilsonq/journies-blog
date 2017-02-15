import React, { Component } from 'react';
import ArticleHeader from './ArticleHeader';
import ArticleFooter from './ArticleFooter';
import { urlify, markdownParser } from '../../utils/helpers';
import { Gist, Divider } from '../common';

export default class Article extends Component {

  render() {
    const { articles, params } = this.props;
    const path = params.title;
    const currentArticle = articles.findIndex(article => {
      return path === urlify(article.title);
    });

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
            {content.map((paragraph, i) => (
              <p key={i} dangerouslySetInnerHTML={{__html: markdownParser(paragraph)}}>
              </p>
            ))}
          </div>
          <Divider />
          <ArticleFooter />
        </div>
      </div>
    );
  }
}
