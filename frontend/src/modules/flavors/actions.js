import * as constants from "./constants";

export const getFlavors = () => ({
  type: constants.GET_FLAVORS_REQUEST
});

export const getFlavorsSuccess = (flavors) => ({
  type   : constants.GET_FLAVORS_SUCCESS,
  payload: flavors
});

export const getFlavorsFail = (error) => ({
  type   : constants.GET_FLAVORS_FAIL,
  payload: error,
  error  : true
});

export const getTopFlavors = (number) => ({
  type   : constants.GET_FLAVORS_REQUEST,
  payload: number
});

export const getTop10Flavors = () => ({
  type: constants.GET_FLAVORS_REQUEST
});

export const getTopFlavorsSuccess = (flavors) => ({
  type   : constants.GET_FLAVORS_SUCCESS,
  payload: flavors
});

export const getTopFlavorsFail = (error) => ({
  type   : constants.GET_FLAVORS_FAIL,
  payload: error,
  error  : true
});


export const createFlavor = (flavor) => ({
  type   : constants.CREATE_FLAVOR_REQUEST,
  payload: flavor
});

export const createFlavorSuccess = (flavor) => ({
  type   : constants.CREATE_FLAVOR_SUCCESS,
  payload: flavor
});

export const createFlavorFail = (error) => ({
  type   : constants.CREATE_FLAVOR_FAIL,
  payload: error,
  error  : true
});


export const updateFlavor = (flavor) => ({
  type   : constants.UPDATE_FLAVOR_REQUEST,
  payload: flavor
});

export const updateFlavorSuccess = (flavor) => ({
  type   : constants.UPDATE_FLAVOR_SUCCESS,
  payload: flavor
});

export const updateFlavorFail = (error) => ({
  type   : constants.UPDATE_FLAVOR_FAIL,
  payload: error,
  error  : true
});


export const deleteFlavor = (flavorId) => ({
  type   : constants.DELETE_FLAVOR_REQUEST,
  payload: flavorId
});

export const deleteFlavorSuccess = (flavorId) => ({
  type   : constants.DELETE_FLAVOR_SUCCESS,
  payload: flavorId
});

export const deleteFlavorFail = (error) => ({
  type   : constants.DELETE_FLAVOR_FAIL,
  payload: error,
  error  : true
});


export const createFlavorComment = (flavorId, comment) => ({
  type   : constants.CREATE_FLAVOR_COMMENT_REQUEST,
  payload: {
    flavorId: flavorId,
    comment : comment
  }
});

export const createFlavorCommentSuccess = (flavorId, comment) => ({
  type   : constants.CREATE_FLAVOR_COMMENT_SUCCESS,
  payload: {
    flavorId: flavorId,
    comment : comment
  }
});

export const createFlavorCommentFail = (error) => ({
  type   : constants.CREATE_FLAVOR_COMMENT_FAIL,
  payload: error,
  error  : true
});


export const deleteFlavorComment = (flavorId, commentId) => ({
  type   : constants.DELETE_FLAVOR_COMMENT_REQUEST,
  payload: {
    flavorId : flavorId,
    commentId: commentId
  }
});

export const deleteFlavorCommentSuccess = (flavorId, commentId) => ({
  type   : constants.DELETE_FLAVOR_COMMENT_SUCCESS,
  payload: {
    flavorId : flavorId,
    commentId: commentId
  }
});

export const deleteFlavorCommentFail = (error) => ({
  type   : constants.DELETE_FLAVOR_COMMENT_FAIL,
  payload: error,
  error  : true
});

export const createFlavorLike = (flavorId, like) => ({
  type   : constants.CREATE_FLAVOR_LIKE_REQUEST,
  payload: {
    flavorId: flavorId,
    like    : like
  }
});

export const createFlavorLikeSuccess = (flavorId, like) => ({
  type   : constants.CREATE_FLAVOR_LIKE_SUCCESS,
  payload: {
    flavorId: flavorId,
    like    : like
  }
});

export const createFlavorLikeFail = (error) => ({
  type   : constants.CREATE_FLAVOR_LIKE_FAIL,
  payload: error,
  error  : true
});


export const deleteFlavorLike = (flavorId, likeId) => ({
  type   : constants.DELETE_FLAVOR_LIKE_REQUEST,
  payload: {
    flavorId: flavorId,
    likeId  : likeId
  }
});

export const deleteFlavorLikeSuccess = (flavorId, likeId) => ({
  type   : constants.DELETE_FLAVOR_LIKE_SUCCESS,
  payload: {
    flavorId: flavorId,
    likeId  : likeId
  }
});

export const deleteFlavorLikeFail = (error) => ({
  type   : constants.DELETE_FLAVOR_LIKE_FAIL,
  payload: error,
  error  : true
});

export const getUserFlavors = () => ({
  type: constants.GET_USER_FLAVORS_REQUEST
});

export const getUserFlavorsSuccess = (data) => ({
  type   : constants.GET_USER_FLAVORS_SUCCESS,
  payload: data
});

export const getUserFlavorsFail = (error) => ({
  type   : constants.GET_USER_FLAVORS_FAIL,
  payload: error,
  error  : true
});

export const addFlavorToUser = (flavor) => ({
  type   : constants.ADD_FLAVOR_TO_USER_REQUEST,
  payload: flavor
});

export const addFlavorToUserSuccess = (flavor) => ({
  type   : constants.ADD_FLAVOR_TO_USER_SUCCESS,
  payload: flavor
});

export const addFlavorToUserFail = (error) => ({
  type   : constants.ADD_FLAVOR_TO_USER_FAIL,
  payload: error,
  error  : true
});

export const deleteFlavorFromUser = (flavorId) => ({
  type   : constants.DELETE_FLAVOR_FROM_USER_REQUEST,
  payload: flavorId
});

export const deleteFlavorFromUserSuccess = (flavorId) => ({
  type   : constants.DELETE_FLAVOR_FROM_USER_SUCCESS,
  payload: flavorId
});

export const deleteFlavorFromUserFail = (error) => ({
  type   : constants.DELETE_FLAVOR_FROM_USER_FAIL,
  payload: error,
  error  : true
});
