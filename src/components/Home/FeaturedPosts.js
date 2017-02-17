import React, { Component } from 'react';
import { Link } from 'react-router';
import FeaturedPost from './FeaturedPost';
import { urlify } from '../../utils/helpers';

class FeaturedPosts extends Component {
  render() {
    const { articles } = this.props;
    if (articles.length) {
      return (
        <div className="highlighted container">
            <h2>Highlighted Posts</h2>
            <div className="row">
              {articles.slice(0,3).map((article, index) => (
                <div className="col-xs-4" key={article._id}>
                  <Link to={`/articles/${urlify(articles[index].title)}`}>
                    <FeaturedPost {...article} />
                  </Link>
                </div>
              ))}
            </div>
        </div>
      );
    }
    return (
      <div className="highlighted container">
        <h2>Highlighted Posts</h2>
      </div>
    );
  }
}

export default FeaturedPosts;
