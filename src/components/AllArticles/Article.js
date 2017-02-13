import React from 'react';
import { Link } from 'react-router';
import { formatDate, urlify } from '../../utils/helpers';

const Article = props => {
  return (
    <div className="article">
      <div className="container">
        <Link to={`/articles/${urlify(props.title)}`}>
          <div className="row content">
            <div className="col-sm-6">
              <h2>{props.title}</h2>
              <p>{props.content[0]}</p>
            </div>
            <div className="col-sm-6">
              <p className="author">Written by <strong>{props.author || 'Ian Wilson'}</strong></p>
              <p className="timestamp">{formatDate(props.created)}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Article;
