import {fromJS} from "immutable";
import {deleteElement, getElement} from "../../api";
import {takeEvery, takeLatest} from "redux-saga/effects";

import {CLEAR_FLAVOR_WORKSPACE} from "../Flavor";
import {FLAVORS_URL} from "../Flavors";

// ---------------------- CONSTANTS ----------------------- //

const GET_FLAVOR_MANUFACTURER_REQUEST = "GET_FLAVOR_MANUFACTURER_REQUEST";
const GET_FLAVOR_MANUFACTURER_SUCCESS = "GET_FLAVOR_MANUFACTURER_SUCCESS";
const GET_FLAVOR_MANUFACTURER_FAIL = "GET_FLAVOR_MANUFACTURER_FAIL";

const DELETE_FLAVOR_MANUFACTURER_REQUEST = "DELETE_FLAVOR_MANUFACTURER_REQUEST";
const DELETE_FLAVOR_MANUFACTURER_SUCCESS = "DELETE_FLAVOR_MANUFACTURER_SUCCESS";
const DELETE_FLAVOR_MANUFACTURER_FAIL = "DELETE_FLAVOR_MANUFACTURER_FAIL";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  manufacturer: {
    name: ""
  },
  error  : null,
  loading: false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case GET_FLAVOR_MANUFACTURER_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_FLAVOR_MANUFACTURER_SUCCESS:
    return state
      .set("manufacturer", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_FLAVOR_MANUFACTURER_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_FLAVOR_MANUFACTURER_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_FLAVOR_MANUFACTURER_SUCCESS:
    return initialState;

  case DELETE_FLAVOR_MANUFACTURER_FAIL:
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

export const getFlavorManufacturer = (flavorId) => ({
  type   : GET_FLAVOR_MANUFACTURER_REQUEST,
  payload: flavorId
});

export const getFlavorManufacturerSuccess = (manufacturer) => ({
  type   : GET_FLAVOR_MANUFACTURER_SUCCESS,
  payload: manufacturer
});

export const getFlavorManufacturerFail = (error) => ({
  type   : GET_FLAVOR_MANUFACTURER_FAIL,
  payload: error,
  error  : true
});


export const deleteFlavorManufacturer = (flavorId) => ({
  type   : DELETE_FLAVOR_MANUFACTURER_REQUEST,
  payload: {
    flavorId: flavorId
  }
});

export const deleteFlavorManufacturerSuccess = (manufacturerId) => ({
  type   : DELETE_FLAVOR_MANUFACTURER_SUCCESS,
  payload: manufacturerId
});

export const deleteFlavorManufacturerFail = (error) => ({
  type   : DELETE_FLAVOR_MANUFACTURER_FAIL,
  payload: error,
  error  : true
});


// ----------------------- SAGAS ------------------------ //

function* getFlavorManufacturerRequest(action) {
  yield* getElement(
    FLAVORS_URL + "/" + action.payload + "/manufacturer",
    null,
    getFlavorManufacturerSuccess,
    getFlavorManufacturerFail
  );
}

function* deleteFlavorManufacturerRequest(action) {
  yield deleteElement(
    FLAVORS_URL + "/" + action.payload.flavorId + "/manufacturer",
    null,
    deleteFlavorManufacturerSuccess,
    deleteFlavorManufacturerFail
  );
}

export function* watchFlavorManufacturerActions() {
  yield takeLatest(GET_FLAVOR_MANUFACTURER_REQUEST, getFlavorManufacturerRequest);
  yield takeEvery(DELETE_FLAVOR_MANUFACTURER_REQUEST, deleteFlavorManufacturerRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectFlavorManufacturerContainer = (state) => state.containers.flavors.target.manufacturer;
export const selectFlavorManufacturerData = (state) => selectFlavorManufacturerContainer(state).get("manufacturer");
