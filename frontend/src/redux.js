import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import {reducer as appReducer} from "./modules/App";
import {reducer as accountReducer} from "./modules/Account";
import {reducer as authModalReducer} from "./modules/Modals/AuthModal";

import {reducer as userFlavorsReducer} from "./modules/UserFlavors";
import {reducer as userRecipesReducer} from "./modules/UserRecipes";

import {reducer as newsReducer} from "./modules/News";
import {reducer as newsSingleReducer} from "./modules/NewsSingle";
import {reducer as newsCommentsReducer} from "./modules/NewsComments";
import {reducer as newsLikesReducer} from "./modules/NewsLikes";
import {reducer as newsImageReducer} from "./modules/NewsImage";

import {reducer as flavorsReducer} from "./modules/Flavors";
import {reducer as flavorReducer} from "./modules/Flavor";
import {reducer as flavorCommentsReducer} from "./modules/FlavorComments";
import {reducer as flavorLikesReducer} from "./modules/FlavorLikes";
import {reducer as flavorImageReducer} from "./modules/FlavorImage";
import {reducer as flavorManufacturerReducer} from "./modules/FlavorManufacturer";

import {reducer as recipesReducer} from "./modules/Recipes";
import {reducer as recipeReducer} from "./modules/Recipe";
import {reducer as recipeCommentsReducer} from "./modules/RecipeComments";
import {reducer as recipeLikesReducer} from "./modules/RecipeLikes";
import {reducer as recipeItemsReducer} from "./modules/RecipeItems";

import {reducer as manufacturersReducer} from "./modules/Manufacturers";
import {reducer as imagesReducer} from "./modules/Images";
import {reducer as countriesReducer} from "./modules/Countries";

const containersReducer = {
  containers: combineReducers({
    app: combineReducers({
      workspace: appReducer,
      account  : combineReducers({
        info   : accountReducer,
        flavors: userFlavorsReducer,
        recipes: userRecipesReducer
      }),
      modals: combineReducers({
        auth: authModalReducer
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
    route: routerReducer
  })
;

export default globalReducer;
