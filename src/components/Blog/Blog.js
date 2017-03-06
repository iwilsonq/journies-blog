import React, { Component } from 'react';
import ArticleTable from './ArticleTable';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.tabs = ['tutorials', 'stack', 'entrepreneur'];
    this.state = {
      currentTab: ''
    };
  }

  changeActiveTab(tab) {
    this.setState({ currentTab: tab });
  }

  componentWillUpdate(nextProps, nextState) {
    const { currentTab } = this.state;
    if (nextState.currentTab !== currentTab) {
      if (currentTab)
        document.getElementById(currentTab).classList.remove('active');
      document.getElementById(nextState.currentTab).classList.add('active');
    }
  }

  render() {
    const showArticles = this.props.articles.filter(article => {
      return this.state.currentTab === article.category;
    });

    return (
      <div className="blog container">

        <div className="row">
          <div className="blog-welcome">
            <h1>Greetings from the blog.</h1>
            <p className="lead">Which topic do you fancy?</p>
          </div>
        </div>

        <div className="row tab-menu">
          <div className="col-md-4 text-center">
            <div className="tab"
              id='tutorials'
              onClick={this.changeActiveTab.bind(this, 'tutorials')}
            >
              <h2>Tutorials</h2>
              <p>How-tos and other possibly useful bits.</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="tab"
              id='stack'
              onClick={this.changeActiveTab.bind(this,'stack')}
            >
              <h2>The Stack</h2>
              <p>Nerd out with me over the frameworks and technologies I'm currently working with.</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="tab"
              id='entrepreneur'
              onClick={this.changeActiveTab.bind(this,'entrepreneur')}
            >
              <h2>Entrepreneurial</h2>
              <p>A thought experiment in business and branding.</p>
            </div>
          </div>
        </div>

        <ArticleTable articles={showArticles} />

      </div>
    );
  }
}

export default Blog;
