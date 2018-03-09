import {fromJS} from "immutable";
import {sendElement, deleteElement, getElements} from "../../api/index";
import {takeEvery, takeLatest} from "redux-saga/effects";

import {CLEAR_FLAVOR_WORKSPACE} from "./flavor";
import {FLAVORS_URL} from "./flavors";

// ---------------------- CONSTANTS ----------------------- //

const CREATE_FLAVOR_COMMENT_REQUEST = "CREATE_FLAVOR_COMMENT_REQUEST";
const CREATE_FLAVOR_COMMENT_SUCCESS = "CREATE_FLAVOR_COMMENT_SUCCESS";
const CREATE_FLAVOR_COMMENT_FAIL = "CREATE_FLAVOR_COMMENT_FAIL";

const GET_FLAVOR_COMMENTS_REQUEST = "GET_FLAVOR_COMMENTS_REQUEST";
const GET_FLAVOR_COMMENTS_SUCCESS = "GET_FLAVOR_COMMENTS_SUCCESS";
const GET_FLAVOR_COMMENTS_FAIL = "GET_FLAVOR_COMMENTS_FAIL";

const DELETE_FLAVOR_COMMENT_REQUEST = "DELETE_FLAVOR_COMMENT_REQUEST";
const DELETE_FLAVOR_COMMENT_SUCCESS = "DELETE_FLAVOR_COMMENT_SUCCESS";
const DELETE_FLAVOR_COMMENT_FAIL = "DELETE_FLAVOR_COMMENT_FAIL";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  comments: [],
  error   : null,
  loading : false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case CREATE_FLAVOR_COMMENT_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case CREATE_FLAVOR_COMMENT_SUCCESS:
    return state
      .updateIn(["comments"], (arr) => arr.concat(action.payload))
      .set("loading", false)
      .set("error", null);

  case CREATE_FLAVOR_COMMENT_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_FLAVOR_COMMENTS_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_FLAVOR_COMMENTS_SUCCESS:
    return state
      .set("comments", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_FLAVOR_COMMENTS_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_FLAVOR_COMMENT_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_FLAVOR_COMMENT_SUCCESS:
    return state
      .updateIn(["comments"],
        (arr) => arr.filter((val) => val.id !== action.payload))
      .set("loading", false)
      .set("error", null);

  case DELETE_FLAVOR_COMMENT_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  case CLEAR_FLAVOR_WORKSPACE:
    return initialState;

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const createFlavorComment = (flavorId, comment) => ({
  type   : CREATE_FLAVOR_COMMENT_REQUEST,
  payload: {
    flavorId: flavorId,
    comment : comment
  }
});

export const createFlavorCommentSuccess = (comment) => ({
  type   : CREATE_FLAVOR_COMMENT_SUCCESS,
  payload: comment
});

export const createFlavorCommentFail = (error) => ({
  type   : CREATE_FLAVOR_COMMENT_FAIL,
  payload: error,
  error  : true
});


export const getFlavorComments = (flavorId) => ({
  type   : GET_FLAVOR_COMMENTS_REQUEST,
  payload: flavorId
});

export const getFlavorCommentsSuccess = (comments) => ({
  type   : GET_FLAVOR_COMMENTS_SUCCESS,
  payload: comments
});

export const getFlavorCommentsFail = (error) => ({
  type   : GET_FLAVOR_COMMENTS_FAIL,
  payload: error,
  error  : true
});


export const deleteFlavorComment = (flavorId, commentId) => ({
  type   : DELETE_FLAVOR_COMMENT_REQUEST,
  payload: {
    flavorId : flavorId,
    commentId: commentId
  }
});

export const deleteFlavorCommentSuccess = (commentId) => ({
  type   : DELETE_FLAVOR_COMMENT_SUCCESS,
  payload: commentId
});

export const deleteFlavorCommentFail = (error) => ({
  type   : DELETE_FLAVOR_COMMENT_FAIL,
  payload: error,
  error  : true
});


// ----------------------- SAGAS ------------------------ //

function* createFlavorCommentRequest(action) {
  yield sendElement(
    FLAVORS_URL + "/" + action.payload.flavorId + "/comments",
    action.payload.comment,
    createFlavorCommentSuccess,
    createFlavorCommentFail
  );
}

function* getFlavorCommentsRequest(action) {
  yield* getElements(
    FLAVORS_URL + "/" + action.payload + "/comments",
    getFlavorCommentsSuccess,
    getFlavorCommentsFail
  );
}

function* deleteFlavorCommentRequest(action) {
  yield deleteElement(
    FLAVORS_URL + "/" + action.payload.flavorId + "/comments",
    action.payload.commentId,
    deleteFlavorCommentSuccess,
    deleteFlavorCommentFail
  );
}

export function* watchFlavorCommentsActions() {
  yield takeEvery(CREATE_FLAVOR_COMMENT_REQUEST, createFlavorCommentRequest);
  yield takeLatest(GET_FLAVOR_COMMENTS_REQUEST, getFlavorCommentsRequest);
  yield takeEvery(DELETE_FLAVOR_COMMENT_REQUEST, deleteFlavorCommentRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectFlavorCommentContainer = (state) => state.containers.flavors.target.comments;
export const selectFlavorCommentsData = (state) => selectFlavorCommentContainer(state).get("comments");
