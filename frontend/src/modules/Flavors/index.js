import {fromJS} from "immutable";
import {getElements} from "../../api";
import {takeLatest} from "redux-saga/effects";

// ---------------------- CONSTANTS ----------------------- //

const GET_FLAVORS_REQUEST = "GET_FLAVORS_REQUEST";
const GET_FLAVORS_SUCCESS = "GET_FLAVORS_SUCCESS";
const GET_FLAVORS_FAIL = "GET_FLAVORS_FAIL";

const GET_TOP_10_FLAVORS_REQUEST = "GET_TOP_FLAVORS_REQUEST";
const GET_TOP_FLAVORS_REQUEST = "GET_TOP_FLAVORS_REQUEST";
const GET_TOP_FLAVORS_SUCCESS = "GET_TOP_FLAVORS_SUCCESS";
const GET_TOP_FLAVORS_FAIL = "GET_TOP_FLAVORS_FAIL";

const CLEAR_TOP_FLAVORS_WORKSPACE = "CLEAR_TOP_FLAVORS_WORKSPACE";

export const FLAVORS_URL = "/flavors";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  flavors: [],
  error  : null,
  loading: false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case GET_FLAVORS_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_FLAVORS_SUCCESS:
    return state
      .set("flavors", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_FLAVORS_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_TOP_FLAVORS_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_TOP_10_FLAVORS_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_TOP_FLAVORS_SUCCESS:
    return state
      .set("flavors", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_TOP_FLAVORS_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  case CLEAR_TOP_FLAVORS_WORKSPACE:
    return initialState;

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const getFlavors = () => ({
  type: GET_FLAVORS_REQUEST
});

export const getFlavorsSuccess = (flavors) => ({
  type   : GET_FLAVORS_SUCCESS,
  payload: flavors
});

export const getFlavorsFail = (error) => ({
  type   : GET_FLAVORS_FAIL,
  payload: error,
  error  : true
});

export const getTopFlavors = (number) => ({
  type   : GET_FLAVORS_REQUEST,
  payload: number
});

export const getTop10Flavors = () => ({
  type: GET_FLAVORS_REQUEST
});

export const getTopFlavorsSuccess = (flavors) => ({
  type   : GET_FLAVORS_SUCCESS,
  payload: flavors
});

export const getTopFlavorsFail = (error) => ({
  type   : GET_FLAVORS_FAIL,
  payload: error,
  error  : true
});

export const clearTopFlavorsWorkspace = () => ({
  type: CLEAR_TOP_FLAVORS_WORKSPACE
});

// ----------------------- SAGAS ------------------------ //

function* getFlavorsRequest() {
  yield* getElements(FLAVORS_URL, getFlavorsSuccess, getFlavorsFail);
}

function* getTopFlavorsRequest(action) {
  yield* getElements("/flavors/top/" + action.payload, getTopFlavorsSuccess, getTopFlavorsFail);
}

function* getTop10FlavorsRequest() {
  yield* getElements("/flavors/top", getTopFlavorsSuccess, getTopFlavorsFail);
}


export function* watchFlavorsActions() {
  yield takeLatest(GET_FLAVORS_REQUEST, getFlavorsRequest);
  yield takeLatest(GET_TOP_FLAVORS_REQUEST, getTopFlavorsRequest);
  yield takeLatest(GET_TOP_10_FLAVORS_REQUEST, getTop10FlavorsRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectFlavorsContainer = (state) => state.containers.flavors.list;
export const selectFlavorsData = (state) => selectFlavorsContainer(state).get("flavors");
export const selectTopFlavorsData = (state) => selectFlavorsContainer(state).get("flavors");
