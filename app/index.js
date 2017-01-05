/* eslint-disable import/default */


import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import { syncHistoryWithStore } from 'react-router-redux';

import './configurations';
import * as apiCalls from './api/api';
import Tenant from './util/tenant';

apiCalls.get("me");
const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


if (Tenant.getName() === 'invalid') {

  render(
   <div>Invalid Tenant</div>, document.getElementById('app')
  );
}
else {

  require(Tenant.getTheme());

  render(

    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>, document.getElementById('app')
  );

}
