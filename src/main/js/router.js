import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './app';
import Home from './app/home';
import store from './store';

const history = syncHistoryWithStore(browserHistory, store);

const routes = (
  <Router history={ history }>
    <Route component={ App }>

      <Route exact path='/' component={ Home } />

      {/*
        For example
        <Route path='/projects' component={ ProjectListContainer } />
        <Route path='/projects/create' component={ ProjectCreateContainer } />
        <Route path='/projects/:projectId/edit' component={ ProjectEditContainer } />
        <Route path='/projects/create/:creatorId' component={ ProjectCreateContainer } />
      */}

    </Route>
  </Router>
);

export default routes;
