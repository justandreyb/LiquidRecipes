import {fromJS} from "immutable";
import {sendElement, deleteElement, getElements} from "../../api";
import {takeEvery, takeLatest} from "redux-saga/effects";

import {CLEAN_RECIPE_WORKSPACE} from "../Recipe";
import {RECIPES_URL} from "../Recipes";

// ---------------------- CONSTANTS ----------------------- //

const CREATE_RECIPE_COMMENT_REQUEST = "CREATE_RECIPE_COMMENT_REQUEST";
const CREATE_RECIPE_COMMENT_SUCCESS = "CREATE_RECIPE_COMMENT_SUCCESS";
const CREATE_RECIPE_COMMENT_FAIL = "CREATE_RECIPE_COMMENT_FAIL";

const GET_RECIPE_COMMENTS_REQUEST = "GET_RECIPE_COMMENTS_REQUEST";
const GET_RECIPE_COMMENTS_SUCCESS = "GET_RECIPE_COMMENTS_SUCCESS";
const GET_RECIPE_COMMENTS_FAIL = "GET_RECIPE_COMMENTS_FAIL";

const DELETE_RECIPE_COMMENT_REQUEST = "DELETE_RECIPE_COMMENT_REQUEST";
const DELETE_RECIPE_COMMENT_SUCCESS = "DELETE_RECIPE_COMMENT_SUCCESS";
const DELETE_RECIPE_COMMENT_FAIL = "DELETE_RECIPE_COMMENT_FAIL";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  comments: [],
  error   : null,
  loading : false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case CREATE_RECIPE_COMMENT_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case CREATE_RECIPE_COMMENT_SUCCESS:
    return state
      .updateIn(["comments"], (arr) => arr.concat(action.payload))
      .set("loading", false)
      .set("error", null);

  case CREATE_RECIPE_COMMENT_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_RECIPE_COMMENTS_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_RECIPE_COMMENTS_SUCCESS:
    return state
      .set("comments", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_RECIPE_COMMENTS_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_RECIPE_COMMENT_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_RECIPE_COMMENT_SUCCESS:
    return state
      .updateIn(["comments"],
        (arr) => arr.filter((val) => val.id !== action.payload))
      .set("loading", false)
      .set("error", null);

  case DELETE_RECIPE_COMMENT_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  case CLEAN_RECIPE_WORKSPACE:
    return initialState;

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const createRecipeComment = (recipeId, comment) => ({
  type   : CREATE_RECIPE_COMMENT_REQUEST,
  payload: {
    recipeId: recipeId,
    comment : comment
  }
});

export const createRecipeCommentSuccess = (comment) => ({
  type   : CREATE_RECIPE_COMMENT_SUCCESS,
  payload: comment
});

export const createRecipeCommentFail = (error) => ({
  type   : CREATE_RECIPE_COMMENT_FAIL,
  payload: error,
  error  : true
});


export const getRecipeComments = (recipeId) => ({
  type   : GET_RECIPE_COMMENTS_REQUEST,
  payload: recipeId
});

export const getRecipeCommentsSuccess = (comments) => ({
  type   : GET_RECIPE_COMMENTS_SUCCESS,
  payload: comments
});

export const getRecipeCommentsFail = (error) => ({
  type   : GET_RECIPE_COMMENTS_FAIL,
  payload: error,
  error  : true
});


export const deleteRecipeComment = (recipeId, commentId) => ({
  type   : DELETE_RECIPE_COMMENT_REQUEST,
  payload: {
    recipeId : recipeId,
    commentId: commentId
  }
});

export const deleteRecipeCommentSuccess = (commentId) => ({
  type   : DELETE_RECIPE_COMMENT_SUCCESS,
  payload: commentId
});

export const deleteRecipeCommentFail = (error) => ({
  type   : DELETE_RECIPE_COMMENT_FAIL,
  payload: error,
  error  : true
});


// ----------------------- SAGAS ------------------------ //

function* createRecipeCommentRequest(action) {
  yield sendElement(
    RECIPES_URL + "/" + action.payload.recipeId + "/comments",
    action.payload.comment,
    createRecipeCommentSuccess,
    createRecipeCommentFail
  );
}

function* getRecipeCommentsRequest(action) {
  yield* getElements(
    RECIPES_URL + "/" + action.payload + "/comments",
    getRecipeCommentsSuccess,
    getRecipeCommentsFail
  );
}

function* deleteRecipeCommentRequest(action) {
  yield deleteElement(
    RECIPES_URL + "/" + action.payload.recipeId + "/comments",
    action.payload.commentId,
    deleteRecipeCommentSuccess,
    deleteRecipeCommentFail
  );
}

export function* watchRecipeCommentsActions() {
  yield takeEvery(CREATE_RECIPE_COMMENT_REQUEST, createRecipeCommentRequest);
  yield takeLatest(GET_RECIPE_COMMENTS_REQUEST, getRecipeCommentsRequest);
  yield takeEvery(DELETE_RECIPE_COMMENT_REQUEST, deleteRecipeCommentRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectRecipeCommentContainer = (state) => state.containers.recipes.target.comments;
export const selectRecipeCommentsData = (state) => selectRecipeCommentContainer(state).get("comments");
