import React, { Component } from 'react';

export default class Gist extends Component {
  state = {
    isLoading: true,
    src: ''
  };

  statics = {
    gistCallbackId: 0,
    nextGistCallback: () => {
      return 'embed_gist_callback_' + this.statics.gistCallbackId++;
    }
  }

  componentDidMount() {
    const gistCallback = this.statics.nextGistCallback();

    const url = "https://gist.github.com/" + this.props.gist + ".js";
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.head.appendChild(script);
    this.setState({
      isLoading: false,
      src: url
    });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return <div dangerouslySetInnerHTML={{ __html: this.state.src }} />;
  }
}
