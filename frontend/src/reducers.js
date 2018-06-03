import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {snackbarReducer} from "react-redux-snackbar";

import {reducer as appReducer} from "./modules/application";
import {reducer as accountReducer} from "./modules/user/reducer";

import {reducer as newsReducer} from "./modules/news/reducer";

import {reducer as flavorsReducer} from "./modules/flavors/reducer";

import {reducer as recipesReducer} from "./modules/recipes/reducer";

import {reducer as manufacturersReducer} from "./modules/manufacturers";
import {reducer as imagesReducer} from "./modules/images";
import {reducer as countriesReducer} from "./modules/countries";

const containersReducer = {
  containers: combineReducers({
    app: combineReducers({
      workspace: appReducer,
      account  : combineReducers({
        info: accountReducer
      })
    }),
    news         : newsReducer,
    flavors      : flavorsReducer,
    recipes      : recipesReducer,
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
