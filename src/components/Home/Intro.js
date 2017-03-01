import React, { Component } from 'react';
import axios from 'axios';

const ax = axios.create({
  baseURL: 'https://journies.herokuapp.com'
});

class Intro extends Component {
  handleSignUp() {
    const email = this.refs.email.value;
    ax.post('/subscribers', { email })
      .then(res => console.log(res.data))
      .catch(err => { throw new Error(err); });
  }

  render() {
    return (
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <p>
                I’m a web developer who wanted to write apps, so now I write about things like React, Node, and many other wonderful JavaScript frameworks. Drop your email below and learn along with me.
              </p>
              <div className="email-form">
                <input
                  type="email"
                  ref="email"
                  />
                <label>Email</label>
                <button className="btn btn-success"
                  onClick={this.handleSignUp.bind(this)}
                  >
                  Sign up!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
