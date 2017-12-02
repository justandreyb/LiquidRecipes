/**
 * Set redux devTools, redux, redux-saga, and connect react-router
 * @file {projectDir}/src/store.js
 * @export store configuration
 *
 * @author justandreyb
 */

import {createStore, applyMiddleware, compose} from "redux";
import {routerMiddleware} from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import createSagaMiddleware from "redux-saga";

import globalReducer from "./redux";
import globalSagas from "./sagas";

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    globalReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history)
      )
    )
  );


  sagaMiddleware.run(globalSagas);
  return store;
};

export const store = configureStore();
