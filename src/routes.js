import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home/Home';
import Article  from './components/Article/Article';
import NewPost from './components/NewPost/NewPost';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';

const Routes = () => (
  <Router onUpdate={() => window.scrollTo(0,0)} history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='blog' component={Blog} />
      <Route path='blog/:title' component={Article} />
      <Route path='new' component={NewPost} />
      <Route path='who' component={Contact} />
    </Route>
  </Router>
);

export default Routes;
