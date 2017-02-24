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
            <div className="col-sm-6">
              <p>
                I’m a web developer who wanted to write apps, so now I write about things like
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-offset-2 col-sm-8">
              <h2>React</h2><h2>Node</h2><h2>Nihilism</h2><h2>Data</h2>
              <h2>...and other tech buzzwords</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-offset-5 col-sm-7">
              <p>
                If you have any interest in any of those,
                or if you want to be a better developer,
                drop your email in the box below and follow me
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-offset-5 col-sm-7 email-form">
              <input
                type="email"
                placeholder="email"
                ref="email"
              />
              <button className="btn btn-success"
                onClick={this.handleSignUp.bind(this)}
              >
                Sign up!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
