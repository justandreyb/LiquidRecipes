import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userReducer from './user';

const reducers = combineReducers({
  userState: userReducer,

  routing: routerReducer
});

export default reducers;
