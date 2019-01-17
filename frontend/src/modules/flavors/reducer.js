import * as constants from "./constants";
import * as store from "./initialState";

export const reducer = (state = store.initialState, action) => {
  switch (action.type) {


  case constants.GET_FLAVORS_SUCCESS: return state
    .set(store.list, action.payload);


  case constants.GET_TOP_FLAVORS_SUCCESS:    return state
    .set(store.list, action.payload);


  case constants.CREATE_FLAVOR_SUCCESS: return state
    .updateIn([store.list], (arr) => arr.concat(action.payload));


  case constants.UPDATE_FLAVOR_SUCCESS: return state
    .updateIn([store.list], (arr) => updateElementInArray(arr, action.payload))
    .updateIn([store.userList], (arr) => updateElementInArray(arr, action.payload));


  case constants.DELETE_FLAVOR_SUCCESS: return state
    .updateIn([store.list], (arr) => arr.filter((val) => val.id !== action.payload))
    .updateIn([store.userList], (arr) => arr.filter((val) => val.id !== action.payload));


  case constants.CREATE_FLAVOR_COMMENT_SUCCESS: return state
    .updateIn([store.list], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.flavorId, store.comments, action.payload.comment, updateInSublist))
    .updateIn([store.userList], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.flavorId, store.comments, action.payload.comment, updateInSublist));


  case constants.DELETE_FLAVOR_COMMENT_SUCCESS: return state
    .updateIn([store.list], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.flavorId, store.comments, action.payload.commentId, deleteFromSublist))
    .updateIn([store.userList], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.flavorId, store.comments, action.payload.commentId, deleteFromSublist));

  
  case constants.CREATE_FLAVOR_LIKE_SUCCESS: return state
    .updateIn([store.list], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.flavorId, store.likes, action.payload.like, updateInSublist))
    .updateIn([store.userList], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.flavorId, store.likes, action.payload.like, updateInSublist));


  case constants.DELETE_FLAVOR_LIKE_SUCCESS: return state
    .updateIn([store.list], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.flavorId, store.likes, action.payload.likeId, deleteFromSublist))
    .updateIn([store.userList], (arr) =>
      updateElementsPropertyInArray(arr, action.payload.flavorId, store.likes, action.payload.likeId, deleteFromSublist));


  case constants.GET_USER_FLAVORS_SUCCESS: return state
    .set(store.userList, action.payload);


  case constants.ADD_FLAVOR_TO_USER_SUCCESS: return state
    .updateIn([store.userList], (arr) => arr.concat(action.payload));


  case constants.DELETE_FLAVOR_FROM_USER_SUCCESS: return state
    .updateIn([store.userList], (arr) => arr.filter((val) => val.id !== action.payload));


  case constants.CLEAR_FLAVORS: return store.initialState;


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
