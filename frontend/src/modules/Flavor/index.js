import {fromJS} from "immutable";
import {sendElement, getElement, updateElement, deleteElement} from "../../api";
import {takeEvery, takeLatest} from "redux-saga/effects";

import {FLAVORS_URL} from "../Flavors";

// ---------------------- CONSTANTS ----------------------- //

const CREATE_FLAVOR_REQUEST = "CREATE_FLAVOR_REQUEST";
const CREATE_FLAVOR_SUCCESS = "CREATE_FLAVOR_SUCCESS";
const CREATE_FLAVOR_FAIL = "CREATE_FLAVOR_FAIL";

const GET_FLAVOR_REQUEST = "GET_FLAVOR_REQUEST";
const GET_FLAVOR_SUCCESS = "GET_FLAVOR_SUCCESS";
const GET_FLAVOR_FAIL = "GET_FLAVOR_FAIL";

const UPDATE_FLAVOR_REQUEST = "UPDATE_FLAVOR_REQUEST";
const UPDATE_FLAVOR_SUCCESS = "UPDATE_FLAVOR_SUCCESS";
const UPDATE_FLAVOR_FAIL = "UPDATE_FLAVOR_FAIL";

const DELETE_FLAVOR_REQUEST = "DELETE_FLAVOR_REQUEST";
const DELETE_FLAVOR_SUCCESS = "DELETE_FLAVOR_SUCCESS";
const DELETE_FLAVOR_FAIL = "DELETE_FLAVOR_FAIL";

export const CLEAN_FLAVOR_WORKSPACE = "CLEAN_FLAVOR_WORKSPACE";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  flavor : {},
  error  : null,
  loading: false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case CREATE_FLAVOR_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case CREATE_FLAVOR_SUCCESS:
    return state
      .set("flavor", action.payload)
      .set("loading", false)
      .set("error", null);

  case CREATE_FLAVOR_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_FLAVOR_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_FLAVOR_SUCCESS:
    return state
      .set("flavor", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_FLAVOR_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case UPDATE_FLAVOR_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case UPDATE_FLAVOR_SUCCESS:
    return state
      .set("flavor", action.payload)
      .set("loading", false)
      .set("error", null);

  case UPDATE_FLAVOR_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_FLAVOR_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_FLAVOR_SUCCESS:
    return state
      .set("flavor", action.payload)
      .set("loading", false)
      .set("error", null);

  case DELETE_FLAVOR_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  case CLEAN_FLAVOR_WORKSPACE:
    return initialState;

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const createFlavor = (flavor) => ({
  type   : CREATE_FLAVOR_REQUEST,
  payload: flavor
});

export const createFlavorSuccess = (flavor) => ({
  type   : CREATE_FLAVOR_SUCCESS,
  payload: flavor
});

export const createFlavorFail = (error) => ({
  type   : CREATE_FLAVOR_FAIL,
  payload: error,
  error  : true
});


export const getFlavor = (flavorId) => ({
  type   : GET_FLAVOR_REQUEST,
  payload: flavorId
});

export const getFlavorSuccess = (flavor) => ({
  type   : GET_FLAVOR_SUCCESS,
  payload: flavor
});

export const getFlavorFail = (error) => ({
  type   : GET_FLAVOR_FAIL,
  payload: error,
  error  : true
});


export const updateFlavor = (flavor) => ({
  type   : UPDATE_FLAVOR_REQUEST,
  payload: flavor
});

export const updateFlavorSuccess = (flavor) => ({
  type   : UPDATE_FLAVOR_SUCCESS,
  payload: flavor
});

export const updateFlavorFail = (error) => ({
  type   : UPDATE_FLAVOR_FAIL,
  payload: error,
  error  : true
});


export const deleteFlavor = (flavorId) => ({
  type   : DELETE_FLAVOR_REQUEST,
  payload: flavorId
});

export const deleteFlavorSuccess = (flavorId) => ({
  type   : DELETE_FLAVOR_SUCCESS,
  payload: flavorId
});

export const deleteFlavorFail = (error) => ({
  type   : DELETE_FLAVOR_FAIL,
  payload: error,
  error  : true
});

export const cleanFlavorWorkspace = () => ({
  type: CLEAN_FLAVOR_WORKSPACE
});

// ----------------------- SAGAS ------------------------ //

function* createFlavorRequest(action) {
  yield sendElement(FLAVORS_URL, action.payload, createFlavorSuccess, createFlavorFail);
}

function* getFlavorRequest(action) {
  yield getElement(FLAVORS_URL, action.payload, getFlavorSuccess, getFlavorFail);
}

function* updateFlavorRequest(action) {
  yield updateElement(FLAVORS_URL, action.payload.id, action.payload, updateFlavorSuccess, updateFlavorFail);
}

function* deleteFlavorRequest(action) {
  yield deleteElement(FLAVORS_URL, action.payload, deleteFlavorSuccess, deleteFlavorFail);
}

export function* watchFlavorActions() {
  yield takeEvery(CREATE_FLAVOR_REQUEST, createFlavorRequest);
  yield takeLatest(GET_FLAVOR_REQUEST, getFlavorRequest);
  yield takeEvery(UPDATE_FLAVOR_REQUEST, updateFlavorRequest);
  yield takeEvery(DELETE_FLAVOR_REQUEST, deleteFlavorRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectFlavorContainer = (state) => state.containers.flavors.target;
export const selectFlavorData = (state) => selectFlavorContainer(state).get("flavor");
