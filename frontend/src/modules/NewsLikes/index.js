import {fromJS} from "immutable";
import {sendElement, deleteElement, getElements} from "../../api";
import {takeEvery, takeLatest} from "redux-saga/effects";

import {CLEAR_NEWS_SINGLE_WORKSPACE} from "../NewsSingle";
import {NEWS_URL} from "../News";

// ---------------------- CONSTANTS ----------------------- //

const CREATE_NEWS_LIKE_REQUEST = "CREATE_NEWS_LIKE_REQUEST";
const CREATE_NEWS_LIKE_SUCCESS = "CREATE_NEWS_LIKE_SUCCESS";
const CREATE_NEWS_LIKE_FAIL = "CREATE_NEWS_LIKE_FAIL";

const GET_NEWS_LIKES_REQUEST = "GET_NEWS_LIKES_REQUEST";
const GET_NEWS_LIKES_SUCCESS = "GET_NEWS_LIKES_SUCCESS";
const GET_NEWS_LIKES_FAIL = "GET_NEWS_LIKES_FAIL";

const DELETE_NEWS_LIKE_REQUEST = "DELETE_NEWS_LIKE_REQUEST";
const DELETE_NEWS_LIKE_SUCCESS = "DELETE_NEWS_LIKE_SUCCESS";
const DELETE_NEWS_LIKE_FAIL = "DELETE_NEWS_LIKE_FAIL";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  likes  : [],
  error  : null,
  loading: false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case CREATE_NEWS_LIKE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case CREATE_NEWS_LIKE_SUCCESS:
    return state
      .updateIn(["likes"], (arr) => arr.push(action.payload))
      .set("loading", false)
      .set("error", null);

  case CREATE_NEWS_LIKE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_NEWS_LIKES_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_NEWS_LIKES_SUCCESS:
    return state
      .set("likes", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_NEWS_LIKES_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_NEWS_LIKE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_NEWS_LIKE_SUCCESS:
    return state
      .updateIn(["likes"],
        (arr) => arr.filter((val) => val.id !== action.payload))
      .set("loading", false)
      .set("error", null);

  case DELETE_NEWS_LIKE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  case CLEAR_NEWS_SINGLE_WORKSPACE:
    return initialState;

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const createNewsLike = (newsId, like) => ({
  type   : CREATE_NEWS_LIKE_REQUEST,
  payload: {
    newsId: newsId,
    like  : like
  }
});

export const createNewsLikeSuccess = (like) => ({
  type   : CREATE_NEWS_LIKE_SUCCESS,
  payload: like
});

export const createNewsLikeFail = (error) => ({
  type   : CREATE_NEWS_LIKE_FAIL,
  payload: error,
  error  : true
});


export const getNewsLikes = (newsId) => ({
  type   : GET_NEWS_LIKES_REQUEST,
  payload: newsId
});

export const getNewsLikesSuccess = (likes) => ({
  type   : GET_NEWS_LIKES_SUCCESS,
  payload: likes
});

export const getNewsLikesFail = (error) => ({
  type   : GET_NEWS_LIKES_FAIL,
  payload: error,
  error  : true
});


export const deleteNewsLike = (newsId, likeId) => ({
  type   : DELETE_NEWS_LIKE_REQUEST,
  payload: {
    newsId: newsId,
    likeId: likeId
  }
});

export const deleteNewsLikeSuccess = (likeId) => ({
  type   : DELETE_NEWS_LIKE_SUCCESS,
  payload: likeId
});

export const deleteNewsLikeFail = (error) => ({
  type   : DELETE_NEWS_LIKE_FAIL,
  payload: error,
  error  : true
});


// ----------------------- SAGAS ------------------------ //

function* createNewsLikeRequest(action) {
  yield sendElement(
    NEWS_URL + "/" + action.payload.newsId + "/likes",
    action.payload.like,
    createNewsLikeSuccess,
    createNewsLikeFail
  );
}

function* getNewsLikesRequest(action) {
  yield* getElements(
    NEWS_URL + "/" + action.payload + "/likes",
    getNewsLikesSuccess,
    getNewsLikesFail
  );
}

function* deleteNewsLikeRequest(action) {
  yield deleteElement(
    NEWS_URL + "/" + action.payload.newsId + "/likes",
    action.payload.likeId,
    deleteNewsLikeSuccess,
    deleteNewsLikeFail
  );
}

export function* watchNewsLikesActions() {
  yield takeEvery(CREATE_NEWS_LIKE_REQUEST, createNewsLikeRequest);
  yield takeLatest(GET_NEWS_LIKES_REQUEST, getNewsLikesRequest);
  yield takeEvery(DELETE_NEWS_LIKE_REQUEST, deleteNewsLikeRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectNewsLikeContainer = (state) => state.containers.news.target.likes;
export const selectNewsLikesData = (state) => selectNewsLikeContainer(state).get("likes");
