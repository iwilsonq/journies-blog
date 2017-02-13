import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class Hero extends Component {
  render() {
    const { articles, currentArticle } = this.props;

    if (articles.length) {
      return (
        <div className="hero container">
          <div className="row">
            <div className="col-sm-3 whoa-banner">
            </div>
            <div className="col-sm-9 hero-features">
              <div className="welcome row">
                <h2>I'm Ian Wilson, a web developer and stoic.</h2>
                  <p className="lead">
                    If you need a website or have an app idea, send me a line and we'll see what we can work out. But whatever you do, <strong><em>don't let your dreams be dreams.</em></strong>
                  </p>

              </div>
              <div className="row">
                <p className="lead">Why you're here...</p>
                <div className="col-sm-4">New to web development and wanna get started?</div>
                <div className="col-sm-4">To learn some cool new hacks to use in your own projects?</div>
                <div className="col-sm-4">To watch another developer struggle in the purgatory between birth and death?</div>
                <h4>If you answered yes to any of the above, especially the last one, then you've come to the right place.</h4>
              </div>
              <div className="row">
                <div className="col-md-9 col-md-offset-3">
                  <div className="feature-card">
                    <h1>{articles[currentArticle].title}</h1>
                    <p className="lead">Ian Wilson Date</p>
                    <div className="cta text-center">
                      <button
                        className="btn btn-success"
                        onClick={() => browserHistory.push('/articles')}
                        >
                        Read Article
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <div className="hero">
      <h1>...</h1>
    </div>;
  }
};
