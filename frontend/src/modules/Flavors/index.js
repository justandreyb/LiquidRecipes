import {fromJS} from "immutable";
import {getElements} from "../../api";
import {takeLatest} from "redux-saga/effects";

// ---------------------- CONSTANTS ----------------------- //

const GET_FLAVORS_REQUEST = "GET_FLAVORS_REQUEST";
const GET_FLAVORS_SUCCESS = "GET_FLAVORS_SUCCESS";
const GET_FLAVORS_FAIL = "GET_FLAVORS_FAIL";

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

// ----------------------- SAGAS ------------------------ //

function* getFlavorsRequest() {
  yield* getElements(FLAVORS_URL, getFlavorsSuccess, getFlavorsFail);
}

export function* watchFlavorsActions() {
  yield takeLatest(GET_FLAVORS_REQUEST, getFlavorsRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectFlavorsContainer = (state) => state.containers.flavors.list;
export const selectFlavorsData = (state) => selectFlavorsContainer(state).get("flavors");
