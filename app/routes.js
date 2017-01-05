import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './core/components/app';
import About from './core/components/about';
import CorePage from './core/containers/corePage';
import AuthPage from './auth/containers/authPage';

export default (
  <Route path="/" component={App}>
  <IndexRoute component={CorePage}/>
  <Route path="auth" component={AuthPage}/>
  <Route path="about" component={About}/>
  
  </Route>
);

