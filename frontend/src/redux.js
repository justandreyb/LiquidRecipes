import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import {reducer as appReducer} from "./modules/App";
import {reducer as accountReducer} from "./modules/Account";
import {reducer as authModalReducer} from "./modules/Modals/AuthModal";
import {reducer as entityReducer} from "./modules/Entity";
import {reducer as entitiesReducer} from "./modules/Entities";

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
        likes   : newsLikesReducer
      })
    }),
    flavors: combineReducers({
      list  : flavorsReducer,
      target: combineReducers({
        flavor  : flavorSingleReducer,
        comments: flavorCommentsReducer,
        likes   : flavorLikesReducer
      })
    }),
    recipes: combineReducers({
      list  : recipesReducer,
      target: combineReducers({
        recipe  : recipeSingleReducer,
        comments: recipeCommentsReducer,
        likes   : recipeLikesReducer,
        items   : recipeItemsReducer
      })
    }),
    manufacturers: manufacturersReducer,
    images       : imagesReducer
  })
};

const globalReducer =
  combineReducers({
    ...containersReducer,
    route: routerReducer
  })
;

export default globalReducer;
