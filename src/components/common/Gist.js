import React, { Component } from 'react';

export default class Gist extends Component {
  constructor(props) {
    super(props);
    this.gist = props.gist;
    this.file = props.file;
    this.stylesheetAdded = false;
    this.state = {
      isLoading: true,
      src: ''
    };
  }

  componentDidMount() {
    const gistCallback = Gist.nextGistCallback();
    window[gistCallback] = function(gist) {
       this.setState({
         loading: false,
         src: gist.div
       });
       this.addStylesheet(gist.stylesheet);
    }.bind(this);

    var url = "https://gist.github.com/" + this.props.gist + ".json?callback=" + gistCallback;
    if (this.props.file) {
     url += "&file=" + this.props.file;
    }

    // Add the JSONP script tag to the document.
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.head.appendChild(script);
  }

  addStylesheet(href) {
    if (!this.stylesheetAdded) {
      this.stylesheetAdded = true;
      const link = document.createElement('link');
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = href;

      document.head.appendChild(link);
    }
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return <div dangerouslySetInnerHTML={{ __html: this.state.src }} />;
  }
}

Gist.propTypes = {
  gist: React.PropTypes.string.isRequired,
  file: React.PropTypes.string
};

var gistCallbackId = 0;
Gist.nextGistCallback = () => {
  return "embed_gist_callback_" + gistCallbackId++;
};
