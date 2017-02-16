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

    const { title, subtitle, content, image, caption } = articles[currentArticle];
    return (
      <div className="article">
        <div className="content">
          <ArticleHeader />
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
                />
              }

              return <p
                key={i}
                dangerouslySetInnerHTML={{__html: markdownParser(paragraph)}}
              />;
            })}
          </div>
          <Divider />
          <ArticleFooter />
        </div>
      </div>
    );
  }
}
