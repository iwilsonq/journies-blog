import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home/Home';
import WholePost  from './components/Post/WholePost';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='posts' component={WholePost} />
    </Route>
  </Router>
);

export default Routes
