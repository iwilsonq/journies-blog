import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact article">
        <div className="content">
          <h1 className="contact-text">Contact</h1>


          <p className="lead">
            Greetings
          </p>

          <p className="lead">
            If you would like to get in touch (business opportunities, starting a band, etc...), pass me an email at
            <a href="mailto:iwilsonq@gmail.com"> iwilsonq@gmail.com </a>
            or give me a call 408 660 7729.
          </p>
        </div>
      </div>
    );
  }
}
