import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home/Home';
import AllArticles from './components/AllArticles/AllArticles';
import Article  from './components/Article/Article';
import NewPost from './components/NewPost/NewPost';
import Contact from './components/Contact/Contact';

const Routes = () => (
  <Router onUpdate={() => window.scrollTo(0,0)} history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='articles' component={AllArticles} />
      <Route path='articles/:title' component={Article} />
      <Route path='new' component={NewPost} />
      <Route path='who' component={Contact} />
    </Route>
  </Router>
);

export default Routes
