import {fromJS} from "immutable";
import {sendElement, deleteElement, getElement} from "../../api/index";
import {takeEvery, takeLatest} from "redux-saga/effects";

import {CLEAR_NEWS_SINGLE_WORKSPACE} from "./news";
import {NEWS_URL} from "./news_list";

// ---------------------- CONSTANTS ----------------------- //

const ADD_NEWS_SINGLE_IMAGE_REQUEST = "ADD_NEWS_SINGLE_IMAGE_REQUEST";
const ADD_NEWS_SINGLE_IMAGE_SUCCESS = "ADD_NEWS_SINGLE_IMAGE_SUCCESS";
const ADD_NEWS_SINGLE_IMAGE_FAIL = "ADD_NEWS_SINGLE_IMAGE_FAIL";

const GET_NEWS_SINGLE_IMAGE_REQUEST = "GET_NEWS_SINGLE_IMAGE_REQUEST";
const GET_NEWS_SINGLE_IMAGE_SUCCESS = "GET_NEWS_SINGLE_IMAGE_SUCCESS";
const GET_NEWS_SINGLE_IMAGE_FAIL = "GET_NEWS_SINGLE_IMAGE_FAIL";

const DELETE_NEWS_SINGLE_IMAGE_REQUEST = "DELETE_NEWS_SINGLE_IMAGE_REQUEST";
const DELETE_NEWS_SINGLE_IMAGE_SUCCESS = "DELETE_NEWS_SINGLE_IMAGE_SUCCESS";
const DELETE_NEWS_SINGLE_IMAGE_FAIL = "DELETE_NEWS_SINGLE_IMAGE_FAIL";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  image: {
    path: ""
  },
  error  : null,
  loading: false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case ADD_NEWS_SINGLE_IMAGE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case ADD_NEWS_SINGLE_IMAGE_SUCCESS:
    return state
      .set("image", action.payload)
      .set("loading", false)
      .set("error", null);

  case ADD_NEWS_SINGLE_IMAGE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_NEWS_SINGLE_IMAGE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_NEWS_SINGLE_IMAGE_SUCCESS:
    return state
      .set("image", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_NEWS_SINGLE_IMAGE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_NEWS_SINGLE_IMAGE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_NEWS_SINGLE_IMAGE_SUCCESS:
    return initialState;

  case DELETE_NEWS_SINGLE_IMAGE_FAIL:
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

export const createNewsImage = (newsSingleId, image) => ({
  type   : ADD_NEWS_SINGLE_IMAGE_REQUEST,
  payload: {
    newsSingleId: newsSingleId,
    image       : image
  }
});

export const createNewsImageSuccess = (image) => ({
  type   : ADD_NEWS_SINGLE_IMAGE_SUCCESS,
  payload: image
});

export const createNewsImageFail = (error) => ({
  type   : ADD_NEWS_SINGLE_IMAGE_FAIL,
  payload: error,
  error  : true
});


export const getNewsImage = (newsSingleId) => ({
  type   : GET_NEWS_SINGLE_IMAGE_REQUEST,
  payload: newsSingleId
});

export const getNewsImageSuccess = (image) => ({
  type   : GET_NEWS_SINGLE_IMAGE_SUCCESS,
  payload: image
});

export const getNewsImageFail = (error) => ({
  type   : GET_NEWS_SINGLE_IMAGE_FAIL,
  payload: error,
  error  : true
});


export const deleteNewsImage = (newsSingleId) => ({
  type   : DELETE_NEWS_SINGLE_IMAGE_REQUEST,
  payload: {
    newsSingleId: newsSingleId
  }
});

export const deleteNewsImageSuccess = (imageId) => ({
  type   : DELETE_NEWS_SINGLE_IMAGE_SUCCESS,
  payload: imageId
});

export const deleteNewsImageFail = (error) => ({
  type   : DELETE_NEWS_SINGLE_IMAGE_FAIL,
  payload: error,
  error  : true
});


// ----------------------- SAGAS ------------------------ //

function* createNewsImageRequest(action) {
  yield sendElement(
    NEWS_URL + "/" + action.payload.newsSingleId + "/image",
    action.payload.image,
    createNewsImageSuccess,
    createNewsImageFail
  );
}

function* getNewsImageRequest(action) {
  yield* getElement(
    NEWS_URL + "/" + action.payload + "/image",
    null,
    getNewsImageSuccess,
    getNewsImageFail
  );
}

function* deleteNewsImageRequest(action) {
  yield deleteElement(
    NEWS_URL + "/" + action.payload.newsSingleId + "/image",
    null,
    deleteNewsImageSuccess,
    deleteNewsImageFail
  );
}

export function* watchNewsImageActions() {
  yield takeEvery(ADD_NEWS_SINGLE_IMAGE_REQUEST, createNewsImageRequest);
  yield takeLatest(GET_NEWS_SINGLE_IMAGE_REQUEST, getNewsImageRequest);
  yield takeEvery(DELETE_NEWS_SINGLE_IMAGE_REQUEST, deleteNewsImageRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectNewsImageContainer = (state) => state.containers.news.target.image;
export const selectNewsImageData = (state) => selectNewsImageContainer(state).get("image");
