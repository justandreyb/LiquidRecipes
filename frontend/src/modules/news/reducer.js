import * as constants from "./constants";
import * as store from "./initialState";

export const reducer = (state = store.initialState, action) => {
  switch (action.type) {

  case constants.GET_NEWS_REQUEST: return handleRequest(state);
  case constants.GET_NEWS_FAIL:    return handleFail(state, action);
  case constants.GET_NEWS_SUCCESS: return state
    .set(store.list, action.payload)
    .set(store.loading, false)
    .set(store.error, null);


  case constants.GET_TOP_NEWS_REQUEST:    return handleRequest(state);
  case constants.GET_TOP_10_NEWS_REQUEST: return handleRequest(state);
  case constants.GET_TOP_NEWS_FAIL:       return handleFail(state, action);
  case constants.GET_TOP_NEWS_SUCCESS:    return state
    .set(store.list, action.payload)
    .set(store.loading, false)
    .set(store.error, null);


  case constants.CREATE_SINGLE_NEWS_REQUEST: return handleRequest(state);
  case constants.CREATE_SINGLE_NEWS_FAIL:    return handleFail(state, action);
  case constants.CREATE_SINGLE_NEWS_SUCCESS: return state
    .updateIn([store.list], (arr) => arr.concat(action.payload))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.UPDATE_SINGLE_NEWS_REQUEST: return handleRequest(state);
  case constants.UPDATE_SINGLE_NEWS_FAIL:    return handleFail(state, action);
  case constants.UPDATE_SINGLE_NEWS_SUCCESS: return state
    .updateIn([store.list], (arr) => updateElementInArray(arr, action.payload))
    .updateIn([store.userList], (arr) => updateElementInArray(arr, action.payload))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.DELETE_SINGLE_NEWS_REQUEST: return handleRequest(state);
  case constants.DELETE_SINGLE_NEWS_FAIL:    return handleFail(state, action);
  case constants.DELETE_SINGLE_NEWS_SUCCESS: return state
    .updateIn([store.list], (arr) => arr.filter((val) => val.id !== action.payload))
    .updateIn([store.userList], (arr) => arr.filter((val) => val.id !== action.payload))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.CREATE_SINGLE_NEWS_COMMENT_REQUEST: return handleRequest(state);
  case constants.CREATE_SINGLE_NEWS_COMMENT_FAIL:    return handleFail(state, action);
  case constants.CREATE_SINGLE_NEWS_COMMENT_SUCCESS: return state
    .updateIn([store.list], (arr) => updateElementInArray(arr, action.payload))
    .updateIn([store.userList], (arr) => updateElementInArray(arr, action.payload))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.DELETE_SINGLE_NEWS_COMMENT_REQUEST: return handleRequest(state);
  case constants.DELETE_SINGLE_NEWS_COMMENT_FAIL:    return handleFail(state, action);
  case constants.DELETE_SINGLE_NEWS_COMMENT_SUCCESS: return state
    .updateIn([store.list], (arr) => updateElementInArray(arr, action.payload))
    .updateIn([store.userList], (arr) => updateElementInArray(arr, action.payload))
    .set(store.loading, false)
    .set(store.error, null);

  case constants.CREATE_SINGLE_NEWS_LIKE_REQUEST: return handleRequest(state);
  case constants.CREATE_SINGLE_NEWS_LIKE_FAIL:    return handleFail(state, action);
  case constants.CREATE_SINGLE_NEWS_LIKE_SUCCESS: return state
    .updateIn([store.list], (arr) => updateElementInArray(arr, action.payload))
    .updateIn([store.userList], (arr) => updateElementInArray(arr, action.payload))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.DELETE_SINGLE_NEWS_LIKE_REQUEST: return handleRequest(state);
  case constants.DELETE_SINGLE_NEWS_LIKE_FAIL:    return handleFail(state, action);
  case constants.DELETE_SINGLE_NEWS_LIKE_SUCCESS: return state
    .updateIn([store.list], (arr) => updateElementInArray(arr, action.payload))
    .updateIn([store.userList], (arr) => updateElementInArray(arr, action.payload))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.GET_USER_NEWS_REQUEST: return handleRequest(state);
  case constants.GET_USER_NEWS_FAIL:    return handleFail(state, action);
  case constants.GET_USER_NEWS_SUCCESS: return state
    .set(store.userList, action.payload)
    .set(store.loading, false)
    .set(store.error, null);


  case constants.ADD_SINGLE_NEWS_TO_USER_REQUEST: return handleRequest(state);
  case constants.ADD_SINGLE_NEWS_TO_USER_FAIL:    return handleFail(state, action);
  case constants.ADD_SINGLE_NEWS_TO_USER_SUCCESS: return state
    .updateIn([store.userList], (arr) => arr.concat(action.payload))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.DELETE_SINGLE_NEWS_FROM_USER_REQUEST: return handleRequest(state);
  case constants.DELETE_SINGLE_NEWS_FROM_USER_FAIL:    return handleFail(state, action);
  case constants.DELETE_SINGLE_NEWS_FROM_USER_SUCCESS: return state
    .updateIn([store.userList], (arr) => arr.filter((val) => val.id !== action.payload))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.CLEAR_NEWS: return store.initialState;


  default: return state;
  }
};

const updateElementInArray = function(array, element) {
  const index = array.findIndex((item) => item.id === element.id);
  if (index) array[ index ] = element;
  return array;
};

const handleRequest = function (state) {
  return state
    .set(store.loading, true)
    .set(store.error, null);
};

const handleFail = function (state, action) {
  return state
    .set(store.loading, false)
    .set(store.error, action.payload);
};
