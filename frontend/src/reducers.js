import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {snackbarReducer} from "react-redux-snackbar";

import {reducer as appReducer} from "./modules/application";
import {reducer as accountReducer} from "./modules/user";

import {reducer as userFlavorsReducer} from "./modules/flavors/user_flavors";
import {reducer as userRecipesReducer} from "./modules/recipes/user_recipes";

import {reducer as newsReducer} from "./modules/news/news_list";
import {reducer as newsSingleReducer} from "./modules/news/news";
import {reducer as newsCommentsReducer} from "./modules/news/news_comments";
import {reducer as newsLikesReducer} from "./modules/news/news_likes";
import {reducer as newsImageReducer} from "./modules/news/news_image";

import {reducer as flavorsReducer} from "./modules/flavors/flavors";
import {reducer as flavorReducer} from "./modules/flavors/flavor";
import {reducer as flavorCommentsReducer} from "./modules/flavors/flavor_comments";
import {reducer as flavorLikesReducer} from "./modules/flavors/flavor_likes";
import {reducer as flavorImageReducer} from "./modules/flavors/flavor_image";
import {reducer as flavorManufacturerReducer} from "./modules/flavors/flavor_manufacturer";

import {reducer as recipesReducer} from "./modules/recipes/recipes";
import {reducer as recipeReducer} from "./modules/recipes/recipe";
import {reducer as recipeCommentsReducer} from "./modules/recipes/recipe_comments";
import {reducer as recipeLikesReducer} from "./modules/recipes/recipe_likes";
import {reducer as recipeItemsReducer} from "./modules/recipes/recipe_items";

import {reducer as manufacturersReducer} from "./modules/manufacturers";
import {reducer as imagesReducer} from "./modules/images";
import {reducer as countriesReducer} from "./modules/countries";

const containersReducer = {
  containers: combineReducers({
    app: combineReducers({
      workspace: appReducer,
      account  : combineReducers({
        info   : accountReducer,
        flavors: userFlavorsReducer,
        recipes: userRecipesReducer
      })
    }),
    news: combineReducers({
      list  : newsReducer,
      target: combineReducers({
        news    : newsSingleReducer,
        comments: newsCommentsReducer,
        likes   : newsLikesReducer,
        image   : newsImageReducer
      })
    }),
    flavors: combineReducers({
      list  : flavorsReducer,
      target: combineReducers({
        flavor      : flavorReducer,
        comments    : flavorCommentsReducer,
        likes       : flavorLikesReducer,
        image       : flavorImageReducer,
        manufacturer: flavorManufacturerReducer
      })
    }),
    recipes: combineReducers({
      list  : recipesReducer,
      target: combineReducers({
        recipe  : recipeReducer,
        comments: recipeCommentsReducer,
        likes   : recipeLikesReducer,
        items   : recipeItemsReducer
      })
    }),
    manufacturers: manufacturersReducer,
    images       : imagesReducer,
    countries    : countriesReducer
  })
};

const globalReducer =
  combineReducers({
    ...containersReducer,
    route   : routerReducer,
    snackbar: snackbarReducer
  })
;

export default globalReducer;
