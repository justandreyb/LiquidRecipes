import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import reducers from './app/reducers';

const configureStore = (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk, routerMiddleware(browserHistory))
    )
  );

  return store;
};

const store = configureStore();

export const storedHistory = syncHistoryWithStore(browserHistory, store);

export default store;
