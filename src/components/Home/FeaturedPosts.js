import React, { Component } from 'react';
import FeaturedPost from './FeaturedPost';

class FeaturedPosts extends Component {
  render() {
    if (this.props.articles) {
      return (
        <div className="blogposts container">
          <h2>Highlighted Posts</h2>
          <div className="row">
            {this.props.articles.map(article => <FeaturedPost key={article._id} {...article} />)}
          </div>
        </div>
      );
    }
    return <div className="blogposts container">
      <h2>Highlighted Posts</h2>
    </div>;
  }
}

export default FeaturedPosts;
