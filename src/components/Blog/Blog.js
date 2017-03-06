import React, { Component } from 'react';

class Blog extends Component {
  render() {
    return (
      <div className="blog container">
        <div className="row">
          <h1>THE BLOG</h1>
          <p className="lead">What topic interests you?</p>
        </div>
        <div className="row tab-menu">
          <div className="col-md-4 text-center">
            <div className="tab">
              <h2>Tutorials</h2>
              <p>How-tos and other possibly useful bits.</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="tab">
              <h2>The Stack</h2>
              <p>Nerd out with me over the frameworks and technologies I'm currently working with.</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="tab">
              <h2>Entrepreneurial</h2>
              <p>A thought experiment in business and branding.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
