/**
 * Combine all of your components reducers
 * @file {projectDir}/src/redux.js
 * @export reducers configuration
 *
 * @author justandreyb
 */

import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import {reducer as appReducer} from "./modules/App";
import {reducer as accountReducer} from "./modules/Account";
import {reducer as authModalReducer} from "./modules/Modals/AuthModal";
import {reducer as entityReducer} from "./modules/Entity";
import {reducer as entitiesReducer} from "./modules/Entities";

/**
 * Configuration for reducers, how they will be stored
 * When you add a new component which contain reducer, you must add its reducer here
 */
const containersReducer = {
  containers: combineReducers({
    app: combineReducers({
      workspace: appReducer,
      account  : combineReducers({
        info: accountReducer
      }),
      modals: combineReducers({
        auth: authModalReducer
      })
    }),
    entities: combineReducers({
      list  : entitiesReducer,
      target: entityReducer
    })
  })
};

const globalReducer =
  combineReducers({
    ...containersReducer,
    route: routerReducer
  })
;

export default globalReducer;
