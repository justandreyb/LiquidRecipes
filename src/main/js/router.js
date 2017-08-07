import React from 'react';
import { Router, Route } from 'react-router';

import { storedHistory } from './store';

import App from './app';
import Home from './app/home';

const routes = (
  <Router history={ storedHistory }>
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
