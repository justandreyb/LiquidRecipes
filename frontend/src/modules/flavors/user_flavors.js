import {fromJS} from "immutable";
import {getElements, sendElement, deleteElement} from "../../api/index";
import {takeLatest, takeEvery} from "redux-saga/effects";
import {DELETE_FLAVOR_SUCCESS} from "./flavor";

// ---------------------- CONSTANTS ----------------------- //

const GET_USER_FLAVORS_REQUEST = "GET_USER_FLAVORS_REQUEST";
const GET_USER_FLAVORS_SUCCESS = "GET_USER_FLAVORS_SUCCESS";
const GET_USER_FLAVORS_FAIL = "GET_USER_FLAVORS_FAIL";

const ADD_FLAVOR_TO_USER_REQUEST = "ADD_FLAVOR_TO_USER_REQUEST";
const ADD_FLAVOR_TO_USER_SUCCESS = "ADD_FLAVOR_TO_USER_SUCCESS";
const ADD_FLAVOR_TO_USER_FAIL = "ADD_FLAVOR_TO_USER_FAIL";

const DELETE_FLAVOR_FROM_USER_REQUEST = "DELETE_FLAVOR_FROM_USER_REQUEST";
const DELETE_FLAVOR_FROM_USER_SUCCESS = "DELETE_FLAVOR_FROM_USER_SUCCESS";
const DELETE_FLAVOR_FROM_USER_FAIL = "DELETE_FLAVOR_FROM_USER_FAIL";

const USER_FLAVORS_URL = "/im/flavors";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  flavors: [],
  error  : null,
  loading: false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case GET_USER_FLAVORS_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_USER_FLAVORS_SUCCESS:
    return state
      .set("flavors", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_USER_FLAVORS_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case ADD_FLAVOR_TO_USER_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case ADD_FLAVOR_TO_USER_SUCCESS:
    return state
      .updateIn(["flavors"], (arr) => arr.concat(action.payload))
      .set("loading", false)
      .set("error", null);

  case ADD_FLAVOR_TO_USER_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_FLAVOR_FROM_USER_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_FLAVOR_FROM_USER_SUCCESS:
    return state
      .updateIn(["flavors"], (arr) => arr.filter((val) => val.id !== action.payload))
      .set("loading", false)
      .set("error", null);

  case DELETE_FLAVOR_FROM_USER_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_FLAVOR_SUCCESS:
    return state
      .updateIn(["flavors"], (arr) => arr.filter((val) => val.id !== action.payload))
      .set("loading", false)
      .set("error", null);

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const getUserFlavors = () => ({
  type: GET_USER_FLAVORS_REQUEST
});

export const getUserFlavorsSuccess = (data) => ({
  type   : GET_USER_FLAVORS_SUCCESS,
  payload: data
});

export const getUserFlavorsFail = (error) => ({
  type   : GET_USER_FLAVORS_FAIL,
  payload: error,
  error  : true
});

export const addFlavorToUser = (flavor) => ({
  type   : ADD_FLAVOR_TO_USER_REQUEST,
  payload: flavor
});

export const addFlavorToUserSuccess = (flavor) => ({
  type   : ADD_FLAVOR_TO_USER_SUCCESS,
  payload: flavor
});

export const addFlavorToUserFail = (error) => ({
  type   : ADD_FLAVOR_TO_USER_FAIL,
  payload: error,
  error  : true
});

export const deleteFlavorFromUser = (flavorId) => ({
  type   : DELETE_FLAVOR_FROM_USER_REQUEST,
  payload: flavorId
});

export const deleteFlavorFromUserSuccess = (flavorId) => ({
  type   : DELETE_FLAVOR_FROM_USER_SUCCESS,
  payload: flavorId
});

export const deleteFlavorFromUserFail = (error) => ({
  type   : DELETE_FLAVOR_FROM_USER_FAIL,
  payload: error,
  error  : true
});

// ----------------------- SAGAS ------------------------ //

function* getUserFlavorsRequest() {
  yield* getElements(USER_FLAVORS_URL, getUserFlavorsSuccess, getUserFlavorsFail);
}

function* addFlavorToUserRequest(action) {
  yield* sendElement(USER_FLAVORS_URL, action.payload, addFlavorToUserSuccess, addFlavorToUserFail);
}

function* deleteFlavorFromUserRequest(action) {
  yield* deleteElement(USER_FLAVORS_URL, action.payload, deleteFlavorFromUserSuccess, deleteFlavorFromUserFail);
}

export function* watchUserFlavorsActions() {
  yield takeLatest(GET_USER_FLAVORS_REQUEST, getUserFlavorsRequest);
  yield takeEvery(ADD_FLAVOR_TO_USER_REQUEST, addFlavorToUserRequest);
  yield takeEvery(DELETE_FLAVOR_FROM_USER_REQUEST, deleteFlavorFromUserRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectUserFlavorsContainer = (state) => state.containers.app.account.flavors;
export const selectUserFlavorsData = (state) => selectUserFlavorsContainer(state).get("flavors");
