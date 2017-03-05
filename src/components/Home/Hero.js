import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { urlify } from '../../utils/helpers';

export default class Hero extends Component {
  render() {
    const { articles } = this.props;
    return (
      <div className="hero container">
        <div className="welcome row">
          <div className="col-md-6">
            <h2 style={{ borderBottom: '2px solid #fff'}}>Ian Wilson</h2>
            <h2>Developer, Blogger, and Stoic</h2>
          </div>
          <div className="col-md-6">
            <div className="hero-card">
              <div className="center-align">
                <img className="rounded" src="img/rico.jpg" alt="" />
              </div>
              <div className="icon-set">
                <i className="fa fa-code"></i>
                <i className="fa fa-coffee"></i>
                <i className="fa fa-cubes"></i>
              </div>
              <div className="icon-set space-around">
                <i className="fa fa-crosshairs"></i>
                <i className="fa fa-gamepad"></i>
                <i className="fa fa-edit"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
