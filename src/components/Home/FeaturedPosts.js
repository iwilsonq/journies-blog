import React, { Component } from 'react';
import FeaturedPost from './FeaturedPost';

class FeaturedPosts extends Component {
  render() {
    const { articles } = this.props;
    if (articles) {
      return (
        <div className="highlighted container">
            <h2>Highlighted Posts</h2>
            <div className="row">
              {articles.slice(1,3).map(article => (
                <div className="col-xs-6" key={article._id}>
                  <FeaturedPost {...article} />
                </div>)
              )}
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
