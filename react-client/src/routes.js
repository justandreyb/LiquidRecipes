import React from "react";
import {Switch} from "react-router-dom";

import {
  ApplicationRoot,
  NewsList,
  PageForSign,
  SingleNewsView,
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
  PrivateRoute, DefaultRoute
} from "./containers";

export const routes =
  <Switch>

    <DefaultRoute exact path="/" component={ApplicationRoot}/>

    <DefaultRoute exact path="/news" component={NewsList}/>
    <PrivateRoute exact path="/news/new" component={NewsCreate}/>
    <PrivateRoute exact path="/news/:id" component={SingleNewsView}/>
    <PrivateRoute exact path="/news/:id/edit" component={NewsEdit}/>

    <DefaultRoute exact path="/flavors" component={FlavorsList}/>
    <PrivateRoute exact path="/flavors/new" component={FlavorCreate}/>
    <PrivateRoute exact path="/flavors/:id" component={FlavorView}/>
    <PrivateRoute exact path="/flavors/:id/edit" component={FlavorEdit}/>

    <DefaultRoute exact path="/recipes" component={RecipesList}/>
    <PrivateRoute exact path="/recipes/new" component={RecipeCreate}/>
    <PrivateRoute exact path="/recipes/:id" component={RecipeView}/>
    <PrivateRoute exact path="/recipes/:id/edit" component={RecipeEdit}/>

    <DefaultRoute exact path="/account" component={PageForSign}/>

    <PrivateRoute exact path="/im" component={UserFlavorsList}/>
    <PrivateRoute exact path="/im/flavors" component={UserFlavorsList}/>
    <PrivateRoute exact path="/im/recipes" component={UserRecipesList}/>

    <DefaultRoute component={PageForSign}/>
  </Switch>;
