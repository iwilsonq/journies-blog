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
            <div className="banner">
            </div>
              <div className="welcome row">
                <div className="col-sm-5 col-sm-offset-1 p-t-b-15">
                  <h1>I'm Ian Wilson, and I'll be your guide this evening.</h1>
                </div>
                <div className="col-sm-5 p-t-b-15">
                  <p>
                    I imagine you are up late at night googling for fixes on your own projects, be it some program debugging or life itself.
                  </p>
                  <p>
                    Regardless if you need your own website or help with your projects, send me an email and we can figure it out.
                  </p>
                </div>
              </div>

              <div className="row why">
                <h2>Why you're here...</h2>
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
          </div>
        </div>
      );
    }

    return <div className="hero">
      <h1>...</h1>
    </div>;
  }
};
