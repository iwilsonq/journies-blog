import React, { Component } from 'react';
import ArticleHeader from './ArticleHeader';
import ArticleFooter from './ArticleFooter';
import { urlify, markdownParser } from '../../utils/helpers';
import { Gist, Divider } from '../common';

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
          <div className="cover-photo">
            <img src={image} />
            <p className="caption">{caption}</p>
          </div>
          <div className="content">
            <div className="article-body">
              {content.map((paragraph, i) => {
                if (paragraph.slice(0,2) === 'G:') {
                  const attrs = paragraph.split(' ')
                  const gist = attrs[0].slice(2);
                  const file = attrs[1].slice(2);
                  return <Gist
                    key={i}
                    gist={gist}
                    file={file}
                    />;
                } else if (paragraph.slice(0,3) === '###') {
                  return <h3 key={i}>{paragraph.slice(3)}</h3>;
                } else if (paragraph.slice(0,2) === '##') {
                  return <h2 key={i}>{paragraph.slice(2)}</h2>;
                } else if (paragraph.slice(0,1) === '#') {
                  return <h1 key={i}>{paragraph.slice(1)}</h1>;
                } else {
                  return <p
                    key={i}
                    dangerouslySetInnerHTML={{__html: markdownParser(paragraph)}}
                  />;
                }
              })}
            </div>
            <Divider />
            <ArticleFooter />
          </div>
        </div>
      );
    }
    return <h1>Loading article...</h1>;
  }
}
