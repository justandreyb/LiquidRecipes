/**
 * Create your application routes
 * @file {projectDir}/src/routes.js
 * @export routes configuration
 *
 * @author justandreyb
 */

import React from "react";
import {Switch, Route} from "react-router-dom";

import {App, Home, Entities, Entity} from "./containers";

/**
 * Configuration for routes
 */
export const routes =
  <Switch>
    <Route exact path="/" component={App}/>
    <Route path="/home" component={Home}/>
    <Route exact path="/entities" component={Entities}/>
    <Route exact path="/entities/:id" component={Entity}/>
  </Switch>;
