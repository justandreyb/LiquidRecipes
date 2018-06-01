import * as constants from "./constants";
import * as store from "./initialState";

export const reducer = (state = store.initialState, action) => {
  switch (action.type) {

  case constants.GET_RECIPES_REQUEST: return handleRequest(state);
  case constants.GET_RECIPES_FAIL:    return handleFail(state, action);
  case constants.GET_RECIPES_SUCCESS: return state
    .set(store.list, action.payload)
    .set(store.loading, false)
    .set(store.error, null);


  case constants.GET_TOP_RECIPES_REQUEST:    return handleRequest(state);
  case constants.GET_TOP_10_RECIPES_REQUEST: return handleRequest(state);
  case constants.GET_TOP_RECIPES_FAIL:       return handleFail(state, action);
  case constants.GET_TOP_RECIPES_SUCCESS:    return state
    .set(store.list, action.payload)
    .set(store.loading, false)
    .set(store.error, null);


  case constants.CREATE_RECIPE_REQUEST: return handleRequest(state);
  case constants.CREATE_RECIPE_FAIL:    return handleFail(state, action);
  case constants.CREATE_RECIPE_SUCCESS: return state
    .updateIn([store.list], (arr) => arr.concat(action.payload))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.UPDATE_RECIPE_REQUEST: return handleRequest(state);
  case constants.UPDATE_RECIPE_FAIL:    return handleFail(state, action);
  case constants.UPDATE_RECIPE_SUCCESS: return state
    .updateIn([store.list], (arr) => updateElementInArray(arr, action.payload))
    .updateIn([store.userList], (arr) => updateElementInArray(arr, action.payload))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.DELETE_RECIPE_REQUEST: return handleRequest(state);
  case constants.DELETE_RECIPE_FAIL:    return handleFail(state, action);
  case constants.DELETE_RECIPE_SUCCESS: return state
    .updateIn([store.list], (arr) => arr.filter((val) => val.id !== action.payload))
    .updateIn([store.userList], (arr) => arr.filter((val) => val.id !== action.payload))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.CREATE_RECIPE_COMMENT_REQUEST: return handleRequest(state);
  case constants.CREATE_RECIPE_COMMENT_FAIL:    return handleFail(state, action);
  case constants.CREATE_RECIPE_COMMENT_SUCCESS: return state
    .updateIn([store.list], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.recipeId, store.comments, action.payload.comment, updateInSublist))
    .updateIn([store.userList], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.recipeId, store.comments, action.payload.comment, updateInSublist))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.DELETE_RECIPE_COMMENT_REQUEST: return handleRequest(state);
  case constants.DELETE_RECIPE_COMMENT_FAIL:    return handleFail(state, action);
  case constants.DELETE_RECIPE_COMMENT_SUCCESS: return state
    .updateIn([store.list], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.recipeId, store.comments, action.payload.commentId, deleteFromSublist))
    .updateIn([store.userList], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.recipeId, store.comments, action.payload.commentId, deleteFromSublist))
    .set(store.loading, false)
    .set(store.error, null);

  case constants.CREATE_RECIPE_LIKE_REQUEST: return handleRequest(state);
  case constants.CREATE_RECIPE_LIKE_FAIL:    return handleFail(state, action);
  case constants.CREATE_RECIPE_LIKE_SUCCESS: return state
    .updateIn([store.list], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.recipeId, store.likes, action.payload.like, updateInSublist))
    .updateIn([store.userList], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.recipeId, store.likes, action.payload.like, updateInSublist))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.DELETE_RECIPE_LIKE_REQUEST: return handleRequest(state);
  case constants.DELETE_RECIPE_LIKE_FAIL:    return handleFail(state, action);
  case constants.DELETE_RECIPE_LIKE_SUCCESS: return state
    .updateIn([store.list], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.recipeId, store.likes, action.payload.likeId, deleteFromSublist))
    .updateIn([store.userList], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.recipeId, store.likes, action.payload.likeId, deleteFromSublist))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.GET_USER_RECIPES_REQUEST: return handleRequest(state);
  case constants.GET_USER_RECIPES_FAIL:    return handleFail(state, action);
  case constants.GET_USER_RECIPES_SUCCESS: return state
    .set(store.userList, action.payload)
    .set(store.loading, false)
    .set(store.error, null);


  case constants.ADD_RECIPE_TO_USER_REQUEST: return handleRequest(state);
  case constants.ADD_RECIPE_TO_USER_FAIL:    return handleFail(state, action);
  case constants.ADD_RECIPE_TO_USER_SUCCESS: return state
    .updateIn([store.userList], (arr) => arr.concat(action.payload))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.DELETE_RECIPE_FROM_USER_REQUEST: return handleRequest(state);
  case constants.DELETE_RECIPE_FROM_USER_FAIL:    return handleFail(state, action);
  case constants.DELETE_RECIPE_FROM_USER_SUCCESS: return state
    .updateIn([store.userList], (arr) => arr.filter((val) => val.id !== action.payload))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.ADD_ITEM_TO_RECIPE_REQUEST: return handleRequest(state);
  case constants.ADD_ITEM_TO_RECIPE_FAIL:    return handleFail(state, action);
  case constants.ADD_ITEM_TO_RECIPE_SUCCESS: return state
    .updateIn([store.list], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.recipeId, store.items, action.payload.item, updateInSublist))
    .updateIn([store.userList], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.recipeId, store.items, action.payload.item, updateInSublist))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.DELETE_ITEM_FROM_RECIPE_REQUEST: return handleRequest(state);
  case constants.DELETE_ITEM_FROM_RECIPE_FAIL:    return handleFail(state, action);
  case constants.DELETE_ITEM_FROM_RECIPE_SUCCESS: return state
    .updateIn([store.list], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.recipeId, store.items, action.payload.itemId, deleteFromSublist))
    .updateIn([store.userList], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.recipeId, store.items, action.payload.itemId, deleteFromSublist))
    .set(store.loading, false)
    .set(store.error, null);


  case constants.CLEAR_RECIPES: return store.initialState;


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
