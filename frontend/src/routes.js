import React from "react";
import {Switch, Route} from "react-router-dom";

import {
  App,
  News,
  NewsSingle,
  Flavors,
  Flavor,
  FlavorCreate,
  FlavorEdit,
  Recipes,
  Recipe,
  UserFlavors,
  UserRecipes
} from "./containers";

export const routes =
  <Switch>

    <Route exact path="/" component={App}/>

    <Route exact path="/news" component={News}/>
    <Route exact path="/news/:id" component={NewsSingle}/>

    <Route exact path="/flavors" component={Flavors}/>
    <Route exact path="/flavors/new" component={FlavorCreate}/>
    <Route exact path="/flavors/:id" component={Flavor}/>
    <Route exact path="/flavors/:id/edit" component={FlavorEdit}/>

    <Route exact path="/recipes" component={Recipes}/>
    <Route exact path="/recipes/:id" component={Recipe}/>

    {/*<Route exact path="/im" component={User}/>*/}
    <Route exact path="/im/flavors" component={UserFlavors}/>
    <Route exact path="/im/recipes" component={UserRecipes}/>

  </Switch>;
