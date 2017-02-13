import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { urlify } from '../../utils/helpers';

export default class Hero extends Component {
  render() {
    const { articles } = this.props;

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
              <div className="row why">
                <p className="lead">
                  <strong>Why you're here...</strong>
                </p>
                <div className="col-sm-4">
                  <p>
                    New to web development and wanna get started?
                  </p>
                </div>
                <div className="col-sm-4">
                  <p>
                    To learn some cool new hacks to use in your own projects?
                  </p>
                </div>
                <div className="col-sm-4">
                  <p>
                    To watch another developer struggle in the purgatory between birth and death?
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <h3>In that case you can just check out my latest article below.</h3>
                  <div className="feature-card">
                    <h1>{articles[0].title}</h1>
                    <p className="lead">Ian Wilson Date</p>
                    <div className="cta text-center">
                      <button
                        className="btn btn-success"
                        onClick={() => browserHistory.push(`/articles/${urlify(articles[0].title)}`)}
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
