import {fromJS} from "immutable";
import {sendElement, getElement, updateElement, deleteElement} from "../../api";
import {takeEvery, takeLatest} from "redux-saga/effects";

import {NEWS_URL} from "../News";

// ---------------------- CONSTANTS ----------------------- //

export const CREATE_NEWS_SINGLE_REQUEST = "CREATE_NEWS_SINGLE_REQUEST";
export const CREATE_NEWS_SINGLE_SUCCESS = "CREATE_NEWS_SINGLE_SUCCESS";
export const CREATE_NEWS_SINGLE_FAIL = "CREATE_NEWS_SINGLE_FAIL";

export const GET_NEWS_SINGLE_REQUEST = "GET_NEWS_SINGLE_REQUEST";
export const GET_NEWS_SINGLE_SUCCESS = "GET_NEWS_SINGLE_SUCCESS";
export const GET_NEWS_SINGLE_FAIL = "GET_NEWS_SINGLE_FAIL";

export const UPDATE_NEWS_SINGLE_REQUEST = "UPDATE_NEWS_SINGLE_REQUEST";
export const UPDATE_NEWS_SINGLE_SUCCESS = "UPDATE_NEWS_SINGLE_SUCCESS";
export const UPDATE_NEWS_SINGLE_FAIL = "UPDATE_NEWS_SINGLE_FAIL";

export const DELETE_NEWS_SINGLE_REQUEST = "DELETE_NEWS_SINGLE_REQUEST";
export const DELETE_NEWS_SINGLE_SUCCESS = "DELETE_NEWS_SINGLE_SUCCESS";
export const DELETE_NEWS_SINGLE_FAIL = "DELETE_NEWS_SINGLE_FAIL";

export const CLEAR_NEWS_SINGLE_WORKSPACE = "CLEAR_NEWS_SINGLE_WORKSPACE";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  news   : {},
  error  : null,
  loading: false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case CREATE_NEWS_SINGLE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case CREATE_NEWS_SINGLE_SUCCESS:
    return state
      .set("news", action.payload)
      .set("loading", false)
      .set("error", null);

  case CREATE_NEWS_SINGLE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_NEWS_SINGLE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_NEWS_SINGLE_SUCCESS:
    return state
      .set("news", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_NEWS_SINGLE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case UPDATE_NEWS_SINGLE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case UPDATE_NEWS_SINGLE_SUCCESS:
    return state
      .set("news", action.payload)
      .set("loading", false)
      .set("error", null);

  case UPDATE_NEWS_SINGLE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_NEWS_SINGLE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_NEWS_SINGLE_SUCCESS:
    return state
      .set("news", action.payload)
      .set("loading", false)
      .set("error", null);

  case DELETE_NEWS_SINGLE_FAIL:
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

export const createNewsSingle = (newsSingle) => ({
  type   : CREATE_NEWS_SINGLE_REQUEST,
  payload: newsSingle
});

export const createNewsSingleSuccess = (newsSingle) => ({
  type   : CREATE_NEWS_SINGLE_SUCCESS,
  payload: newsSingle
});

export const createNewsSingleFail = (error) => ({
  type   : CREATE_NEWS_SINGLE_FAIL,
  payload: error,
  error  : true
});


export const getNewsSingle = (newsSingleId) => ({
  type   : GET_NEWS_SINGLE_REQUEST,
  payload: newsSingleId
});

export const getNewsSingleSuccess = (newsSingle) => ({
  type   : GET_NEWS_SINGLE_SUCCESS,
  payload: newsSingle
});

export const getNewsSingleFail = (error) => ({
  type   : GET_NEWS_SINGLE_FAIL,
  payload: error,
  error  : true
});


export const updateNewsSingle = (newsSingle) => ({
  type   : UPDATE_NEWS_SINGLE_REQUEST,
  payload: newsSingle
});

export const updateNewsSingleSuccess = (newsSingle) => ({
  type   : UPDATE_NEWS_SINGLE_SUCCESS,
  payload: newsSingle
});

export const updateNewsSingleFail = (error) => ({
  type   : UPDATE_NEWS_SINGLE_FAIL,
  payload: error,
  error  : true
});


export const deleteNewsSingle = (newsSingleId) => ({
  type   : DELETE_NEWS_SINGLE_REQUEST,
  payload: newsSingleId
});

export const deleteNewsSingleSuccess = (newsSingleId) => ({
  type   : DELETE_NEWS_SINGLE_SUCCESS,
  payload: newsSingleId
});

export const deleteNewsSingleFail = (error) => ({
  type   : DELETE_NEWS_SINGLE_FAIL,
  payload: error,
  error  : true
});

export const cleanNewsSingleWorkspace = () => ({
  type: CLEAR_NEWS_SINGLE_WORKSPACE
});

// ----------------------- SAGAS ------------------------ //

function* createNewsSingleRequest(action) {
  yield sendElement(NEWS_URL, action.payload, createNewsSingleSuccess, createNewsSingleFail);
}

function* getNewsSingleRequest(action) {
  yield getElement(NEWS_URL, action.payload, getNewsSingleSuccess, getNewsSingleFail);
}

function* updateNewsSingleRequest(action) {
  yield updateElement(NEWS_URL, action.payload.id, action.payload, updateNewsSingleSuccess, updateNewsSingleFail);
}

function* deleteNewsSingleRequest(action) {
  yield deleteElement(NEWS_URL, action.payload, deleteNewsSingleSuccess, deleteNewsSingleFail);
}

export function* watchNewsSingleActions() {
  yield takeEvery(CREATE_NEWS_SINGLE_REQUEST, createNewsSingleRequest);
  yield takeLatest(GET_NEWS_SINGLE_REQUEST, getNewsSingleRequest);
  yield takeEvery(UPDATE_NEWS_SINGLE_REQUEST, updateNewsSingleRequest);
  yield takeEvery(DELETE_NEWS_SINGLE_REQUEST, deleteNewsSingleRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectNewsSingleContainer = (state) => state.containers.news.target;
export const selectNewsSingleData = (state) => selectNewsSingleContainer(state).get("news");
