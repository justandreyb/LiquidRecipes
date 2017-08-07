import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import projectReducer from '../project';

const reducers = combineReducers({
//   projectState: projectReducer,

  routing: routerReducer
});

export default reducers;
