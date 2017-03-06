import React from 'react';
import { Link } from 'react-router';
import { formatDate, urlify } from '../../utils/helpers';

const ArticleTable = ({ articles }) => {
  if (articles.length) {
    return (
      <div className="article-table">
        {articles.map(article => {
          return (
            <div className="article-stub row">
              <Link to={`/blog/${urlify(article.title)}`}>
                <div className="col-sm-8 p-t-b-15">
                  <h2>{article.title}</h2>
                  <p>{article.subtitle}</p>
                </div>
                <div className="col-sm-4">
                  <p className="author align-right">Written by <strong>{article.author || 'Ian Wilson'}</strong></p>
                  <p className="timestamp align-right">{formatDate(article.created)}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="article-table">
      <p className="lead">Woops! Looks like I dont have any articles in this category yet...</p>
    </div>
  );
};

export default ArticleTable;
