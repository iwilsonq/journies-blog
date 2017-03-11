import React, { Component } from 'react';
import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';
import ArticleFooter from './ArticleFooter';
import CommentSection from './CommentSection';
import { urlify } from '../../utils/helpers';
import { Divider } from '../common';

export default class Article extends Component {

  render() {
    const { articles, params } = this.props;
    const path = params.title;

    if (articles.length) {
      const currentArticle = articles.findIndex(article => {
        return path === urlify(article.title);
      });
      const { title, subtitle, content, image, caption, created } = articles[currentArticle];
      return (
        <div className="article">
          <div className="content">
            <ArticleHeader dateCreated={created} />
            <h1 className="title">{title}</h1>
            <p className="lead">{subtitle}</p>
          </div>
          <div className="content">
            <div className="cover-photo">
              <img src={image} />
              <p className="caption">{caption}</p>
            </div>
            <ArticleBody content={content} />
            <Divider />
            <ArticleFooter />
            <CommentSection currentArticle={articles[currentArticle]} />
          </div>
        </div>
      );
    }
    return <h1>Loading article...</h1>;
  }
}
