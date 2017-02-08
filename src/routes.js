import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home/Home';
import Article  from './components/Article/Article';
import NewPost from './components/NewPost/NewPost';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='articles' component={Article} />
      <Route path='new' component={NewPost} />
    </Route>
  </Router>
);

export default Routes
