import {fromJS} from "immutable";
import {sendElement, deleteElement, getElements} from "../../api";
import {takeEvery, takeLatest} from "redux-saga/effects";

import {CLEAR_FLAVOR_WORKSPACE} from "../Flavor";
import {FLAVORS_URL} from "../Flavors";

// ---------------------- CONSTANTS ----------------------- //

const CREATE_FLAVOR_LIKE_REQUEST = "CREATE_FLAVOR_LIKE_REQUEST";
const CREATE_FLAVOR_LIKE_SUCCESS = "CREATE_FLAVOR_LIKE_SUCCESS";
const CREATE_FLAVOR_LIKE_FAIL = "CREATE_FLAVOR_LIKE_FAIL";

const GET_FLAVOR_LIKES_REQUEST = "GET_FLAVOR_LIKES_REQUEST";
const GET_FLAVOR_LIKES_SUCCESS = "GET_FLAVOR_LIKES_SUCCESS";
const GET_FLAVOR_LIKES_FAIL = "GET_FLAVOR_LIKES_FAIL";

const DELETE_FLAVOR_LIKE_REQUEST = "DELETE_FLAVOR_LIKE_REQUEST";
const DELETE_FLAVOR_LIKE_SUCCESS = "DELETE_FLAVOR_LIKE_SUCCESS";
const DELETE_FLAVOR_LIKE_FAIL = "DELETE_FLAVOR_LIKE_FAIL";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  likes  : [],
  error  : null,
  loading: false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case CREATE_FLAVOR_LIKE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case CREATE_FLAVOR_LIKE_SUCCESS:
    return state
      .updateIn(["likes"], (arr) => arr.concat(action.payload))
      .set("loading", false)
      .set("error", null);

  case CREATE_FLAVOR_LIKE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_FLAVOR_LIKES_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_FLAVOR_LIKES_SUCCESS:
    return state
      .set("likes", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_FLAVOR_LIKES_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_FLAVOR_LIKE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_FLAVOR_LIKE_SUCCESS:
    return state
      .updateIn(["likes"],
        (arr) => arr.filter((val) => val.id !== action.payload))
      .set("loading", false)
      .set("error", null);

  case DELETE_FLAVOR_LIKE_FAIL:
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

export const createFlavorLike = (flavorId, like) => ({
  type   : CREATE_FLAVOR_LIKE_REQUEST,
  payload: {
    flavorId: flavorId,
    like    : like
  }
});

export const createFlavorLikeSuccess = (like) => ({
  type   : CREATE_FLAVOR_LIKE_SUCCESS,
  payload: like
});

export const createFlavorLikeFail = (error) => ({
  type   : CREATE_FLAVOR_LIKE_FAIL,
  payload: error,
  error  : true
});


export const getFlavorLikes = (flavorId) => ({
  type   : GET_FLAVOR_LIKES_REQUEST,
  payload: flavorId
});

export const getFlavorLikesSuccess = (likes) => ({
  type   : GET_FLAVOR_LIKES_SUCCESS,
  payload: likes
});

export const getFlavorLikesFail = (error) => ({
  type   : GET_FLAVOR_LIKES_FAIL,
  payload: error,
  error  : true
});


export const deleteFlavorLike = (flavorId, likeId) => ({
  type   : DELETE_FLAVOR_LIKE_REQUEST,
  payload: {
    flavorId: flavorId,
    likeId  : likeId
  }
});

export const deleteFlavorLikeSuccess = (likeId) => ({
  type   : DELETE_FLAVOR_LIKE_SUCCESS,
  payload: likeId
});

export const deleteFlavorLikeFail = (error) => ({
  type   : DELETE_FLAVOR_LIKE_FAIL,
  payload: error,
  error  : true
});


// ----------------------- SAGAS ------------------------ //

function* createFlavorLikeRequest(action) {
  yield sendElement(
    FLAVORS_URL + "/" + action.payload.flavorId + "/likes",
    action.payload.like,
    createFlavorLikeSuccess,
    createFlavorLikeFail
  );
}

function* getFlavorLikesRequest(action) {
  yield* getElements(
    FLAVORS_URL + "/" + action.payload + "/likes",
    getFlavorLikesSuccess,
    getFlavorLikesFail
  );
}

function* deleteFlavorLikeRequest(action) {
  yield deleteElement(
    FLAVORS_URL + "/" + action.payload.flavorId + "/likes",
    action.payload.likeId,
    deleteFlavorLikeSuccess,
    deleteFlavorLikeFail
  );
}

export function* watchFlavorLikesActions() {
  yield takeEvery(CREATE_FLAVOR_LIKE_REQUEST, createFlavorLikeRequest);
  yield takeLatest(GET_FLAVOR_LIKES_REQUEST, getFlavorLikesRequest);
  yield takeEvery(DELETE_FLAVOR_LIKE_REQUEST, deleteFlavorLikeRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectFlavorLikeContainer = (state) => state.containers.flavors.target.likes;
export const selectFlavorLikesData = (state) => selectFlavorLikeContainer(state).get("likes");
