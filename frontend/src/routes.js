import React from "react";
import {Switch, Route} from "react-router-dom";

import {
  ApplicationRoot,
  NewsList,
  PageForSign,
  NewsView,
  NewsCreate,
  NewsEdit,
  FlavorsList,
  FlavorView,
  FlavorCreate,
  FlavorEdit,
  RecipesList,
  RecipeView,
  RecipeCreate,
  RecipeEdit,
  UserFlavorsList,
  UserRecipesList,
  PrivateRoute
} from "./containers";

export const routes =
  <Switch>

    <Route exact path="/" component={ApplicationRoot}/>

    <Route exact path="/news" component={NewsList}/>
    <PrivateRoute exact path="/news/new" component={NewsCreate}/>
    <PrivateRoute exact path="/news/:id" component={NewsView}/>
    <PrivateRoute exact path="/news/:id/edit" component={NewsEdit}/>

    <Route exact path="/flavors" component={FlavorsList}/>
    <PrivateRoute exact path="/flavors/new" component={FlavorCreate}/>
    <PrivateRoute exact path="/flavors/:id" component={FlavorView}/>
    <PrivateRoute exact path="/flavors/:id/edit" component={FlavorEdit}/>

    <Route exact path="/recipes" component={RecipesList}/>
    <PrivateRoute exact path="/recipes/new" component={RecipeCreate}/>
    <PrivateRoute exact path="/recipes/:id" component={RecipeView}/>
    <PrivateRoute exact path="/recipes/:id/edit" component={RecipeEdit}/>

    <Route exact path="/account" component={PageForSign}/>

    <PrivateRoute exact path="/im" component={UserFlavorsList}/>
    <PrivateRoute exact path="/im/flavors" component={UserFlavorsList}/>
    <PrivateRoute exact path="/im/recipes" component={UserRecipesList}/>

    <Route component={PageForSign}/>
  </Switch>;
