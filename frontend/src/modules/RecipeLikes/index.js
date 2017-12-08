import {fromJS} from "immutable";
import {sendElement, deleteElement, getElements} from "../../api";
import {takeEvery, takeLatest} from "redux-saga/effects";

import {CLEAN_RECIPE_WORKSPACE} from "../Recipe";
import {RECIPES_URL} from "../Recipes";

// ---------------------- CONSTANTS ----------------------- //

const CREATE_RECIPE_LIKE_REQUEST = "CREATE_RECIPE_LIKE_REQUEST";
const CREATE_RECIPE_LIKE_SUCCESS = "CREATE_RECIPE_LIKE_SUCCESS";
const CREATE_RECIPE_LIKE_FAIL = "CREATE_RECIPE_LIKE_FAIL";

const GET_RECIPE_LIKES_REQUEST = "GET_RECIPE_LIKES_REQUEST";
const GET_RECIPE_LIKES_SUCCESS = "GET_RECIPE_LIKES_SUCCESS";
const GET_RECIPE_LIKES_FAIL = "GET_RECIPE_LIKES_FAIL";

const DELETE_RECIPE_LIKE_REQUEST = "DELETE_RECIPE_LIKE_REQUEST";
const DELETE_RECIPE_LIKE_SUCCESS = "DELETE_RECIPE_LIKE_SUCCESS";
const DELETE_RECIPE_LIKE_FAIL = "DELETE_RECIPE_LIKE_FAIL";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  likes  : [],
  error  : null,
  loading: false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case CREATE_RECIPE_LIKE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case CREATE_RECIPE_LIKE_SUCCESS:
    return state
      .updateIn(["likes"], (arr) => arr.push(action.payload))
      .set("loading", false)
      .set("error", null);

  case CREATE_RECIPE_LIKE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_RECIPE_LIKES_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_RECIPE_LIKES_SUCCESS:
    return state
      .set("likes", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_RECIPE_LIKES_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_RECIPE_LIKE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_RECIPE_LIKE_SUCCESS:
    return state
      .updateIn(["likes"],
        (arr) => arr.filter((val) => val.id !== action.payload))
      .set("loading", false)
      .set("error", null);

  case DELETE_RECIPE_LIKE_FAIL:
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

export const createRecipeLike = (recipeId, like) => ({
  type   : CREATE_RECIPE_LIKE_REQUEST,
  payload: {
    recipeId: recipeId,
    like    : like
  }
});

export const createRecipeLikeSuccess = (like) => ({
  type   : CREATE_RECIPE_LIKE_SUCCESS,
  payload: like
});

export const createRecipeLikeFail = (error) => ({
  type   : CREATE_RECIPE_LIKE_FAIL,
  payload: error,
  error  : true
});


export const getRecipeLikes = (recipeId) => ({
  type   : GET_RECIPE_LIKES_REQUEST,
  payload: recipeId
});

export const getRecipeLikesSuccess = (likes) => ({
  type   : GET_RECIPE_LIKES_SUCCESS,
  payload: likes
});

export const getRecipeLikesFail = (error) => ({
  type   : GET_RECIPE_LIKES_FAIL,
  payload: error,
  error  : true
});


export const deleteRecipeLike = (recipeId, likeId) => ({
  type   : DELETE_RECIPE_LIKE_REQUEST,
  payload: {
    recipeId: recipeId,
    likeId  : likeId
  }
});

export const deleteRecipeLikeSuccess = (likeId) => ({
  type   : DELETE_RECIPE_LIKE_SUCCESS,
  payload: likeId
});

export const deleteRecipeLikeFail = (error) => ({
  type   : DELETE_RECIPE_LIKE_FAIL,
  payload: error,
  error  : true
});


// ----------------------- SAGAS ------------------------ //

function* createRecipeLikeRequest(action) {
  yield sendElement(
    RECIPES_URL + "/" + action.payload.recipeId + "/likes",
    action.payload.like,
    createRecipeLikeSuccess,
    createRecipeLikeFail
  );
}

function* getRecipeLikesRequest(action) {
  yield* getElements(
    RECIPES_URL + "/" + action.payload + "/likes",
    getRecipeLikesSuccess,
    getRecipeLikesFail
  );
}

function* deleteRecipeLikeRequest(action) {
  yield deleteElement(
    RECIPES_URL + "/" + action.payload.recipeId + "/likes",
    action.payload.likeId,
    deleteRecipeLikeSuccess,
    deleteRecipeLikeFail
  );
}

export function* watchRecipeLikesActions() {
  yield takeEvery(CREATE_RECIPE_LIKE_REQUEST, createRecipeLikeRequest);
  yield takeLatest(GET_RECIPE_LIKES_REQUEST, getRecipeLikesRequest);
  yield takeEvery(DELETE_RECIPE_LIKE_REQUEST, deleteRecipeLikeRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectRecipeLikeContainer = (state) => state.containers.recipes.target.likes;
export const selectRecipeLikesData = (state) => selectRecipeLikeContainer(state).get("likes");
