

import React from 'react';

const Social = () => {
  return (
    <div className="social">
      <div className="container">
        <h3>Seek me out on other media</h3>
        <div className="row text-center">
          <div className="col-xs-6">
            <div className="icon-block">
              <a target="_blank" href="http://github.com/iwilsonq">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <p className="lead">Github</p>
            </div>
            <div className="icon-block">
              <a target="_blank" href="http://codepen.io/iwilsonq">
                <i className="fa fa-codepen" aria-hidden="true"></i>
              </a>
              <p className="lead">Codepen</p>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="icon-block">
              <a target="_blank" href="http://linkedin.com/in/iwilsonq">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <p className="lead">Linkedin</p>
            </div>
            <div className="icon-block">
              <a target="_blank" href="http://twitter.com/iwilsonq">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <p className="lead">Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
