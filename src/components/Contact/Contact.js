import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact article">
        <div className="content">
          <h1 className="contact-text">Who am I?</h1>

          <p className="lead">
            Greetings
          </p>

          <p>
            I am a Full-Stack JavaScript developer that gets a kick out of making apps with React. I also like Node. If you like what you see here or you'd like to criticize or tear apart anything present on this website, please send me a tweet!
          </p>

          <p>
            In my free time I like to run and stare blankly out the window into rain. I know, the good life is indeed good.
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
