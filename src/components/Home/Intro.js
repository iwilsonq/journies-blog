import React, { Component } from 'react';
import axios from 'axios';

class Intro extends Component {

  render() {
    return (
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <p>
                I’m a web developer who wanted to write apps, so now I write about things like React, Node, and many other wonderful JavaScript frameworks. Drop your email below and learn along with me.
              </p>
              <form action="//twitter.us15.list-manage.com/subscribe/post?u=91c82ed583dfff6692820bfc9&amp;id=5d574369d9"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate email-form"
                target="_blank"
                noValidate>
                <input
                  type="email"
                  ref="email"
                  name="EMAIL"
                  />
                <label>Email</label>
                <div style={{position: 'absolute', left: -5000}}
                  aria-hidden="true"
                >
                  <input type="text"
                    name="b_91c82ed583dfff6692820bfc9_5d574369d9"
                    tabIndex="-1"
                    value=""
                  />
                </div>
                <button className="btn btn-success"
                  type="submit"
                  >
                  Sign up!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
