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
    .updateIn([store.list], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.singleNewsId, store.comments, action.payload.comment, updateInSublist))
    .updateIn([store.userList], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.singleNewsId, store.comments, action.payload.comment, updateInSublist))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.DELETE_SINGLE_NEWS_COMMENT_REQUEST: return handleRequest(state);
  case constants.DELETE_SINGLE_NEWS_COMMENT_FAIL:    return handleFail(state, action);
  case constants.DELETE_SINGLE_NEWS_COMMENT_SUCCESS: return state
    .updateIn([store.list], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.singleNewsId, store.comments, action.payload.commentId, deleteFromSublist))
    .updateIn([store.userList], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.singleNewsId, store.comments, action.payload.commentId, deleteFromSublist))
    .set(store.loading, false)
    .set(store.error, null);

  case constants.CREATE_SINGLE_NEWS_LIKE_REQUEST: return handleRequest(state);
  case constants.CREATE_SINGLE_NEWS_LIKE_FAIL:    return handleFail(state, action);
  case constants.CREATE_SINGLE_NEWS_LIKE_SUCCESS: return state
    .updateIn([store.list], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.singleNewsId, store.likes, action.payload.like, updateInSublist))
    .updateIn([store.userList], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.singleNewsId, store.likes, action.payload.like, updateInSublist))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.DELETE_SINGLE_NEWS_LIKE_REQUEST: return handleRequest(state);
  case constants.DELETE_SINGLE_NEWS_LIKE_FAIL:    return handleFail(state, action);
  case constants.DELETE_SINGLE_NEWS_LIKE_SUCCESS: return state
    .updateIn([store.list], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.singleNewsId, store.likes, action.payload.likeId, deleteFromSublist))
    .updateIn([store.userList], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.singleNewsId, store.likes, action.payload.likeId, deleteFromSublist))
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
};

const updateElementsPropertyInArray = function (array, elementId, sublistName, sublistItem, updateFunction) {
  const index = array.findIndex((item) => item.id === elementId);
  if (index) array[ index ] = updateFunction(array[ index ], sublistName, sublistItem);
  return array;
};

const updateInSublist = function (element, sublistName, sublistItem) {
  if (!element[ sublistName ]) element[ sublistName ] = [];
  const index = element[ sublistName ].findIndex((item) => item.id === sublistItem.id);
  if (index)
    element[ sublistName ][ index ] = sublistItem;
  else
    element[ sublistName ].concat(sublistItem);

  return element;
};

const deleteFromSublist = function (element, sublistName, sublistItemId) {
  if (!element[ sublistName ]) element[ sublistName ] = [];
  const index = element[ sublistName ].findIndex((item) => item.id === sublistItemId);
  if (index) element[ sublistName ].splice(index, 1);
  return element;
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
