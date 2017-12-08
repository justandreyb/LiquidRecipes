import {fromJS} from "immutable";
import {sendElement, deleteElement, getElements} from "../../api";
import {takeEvery, takeLatest} from "redux-saga/effects";

// ---------------------- CONSTANTS ----------------------- //

const MANUFACTURERS_URL = "/manufacturers";

const CREATE_MANUFACTURER_REQUEST = "CREATE_MANUFACTURER_REQUEST";
const CREATE_MANUFACTURER_SUCCESS = "CREATE_MANUFACTURER_SUCCESS";
const CREATE_MANUFACTURER_FAIL = "CREATE_MANUFACTURER_FAIL";

const GET_MANUFACTURERS_REQUEST = "GET_MANUFACTURERS_REQUEST";
const GET_MANUFACTURERS_SUCCESS = "GET_MANUFACTURERS_SUCCESS";
const GET_MANUFACTURERS_FAIL = "GET_MANUFACTURERS_FAIL";

const DELETE_MANUFACTURER_REQUEST = "DELETE_MANUFACTURER_REQUEST";
const DELETE_MANUFACTURER_SUCCESS = "DELETE_MANUFACTURER_SUCCESS";
const DELETE_MANUFACTURER_FAIL = "DELETE_MANUFACTURER_FAIL";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  manufacturers: [],
  error        : null,
  loading      : false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case CREATE_MANUFACTURER_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case CREATE_MANUFACTURER_SUCCESS:
    return state
      .updateIn(["manufacturers"], (arr) => arr.push(action.payload))
      .set("loading", false)
      .set("error", null);

  case CREATE_MANUFACTURER_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_MANUFACTURERS_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_MANUFACTURERS_SUCCESS:
    return state
      .set("manufacturers", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_MANUFACTURERS_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_MANUFACTURER_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_MANUFACTURER_SUCCESS:
    return state
      .updateIn(["manufacturers"],
        (arr) => arr.filter((val) => val.id !== action.payload))
      .set("loading", false)
      .set("error", null);

  case DELETE_MANUFACTURER_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const createManufacturer = (manufacturer) => ({
  type   : CREATE_MANUFACTURER_REQUEST,
  payload: manufacturer
});

export const createManufacturerSuccess = (manufacturer) => ({
  type   : CREATE_MANUFACTURER_SUCCESS,
  payload: manufacturer
});

export const createManufacturerFail = (error) => ({
  type   : CREATE_MANUFACTURER_FAIL,
  payload: error,
  error  : true
});


export const getManufacturers = () => ({
  type: GET_MANUFACTURERS_REQUEST
});

export const getManufacturersSuccess = (manufacturers) => ({
  type   : GET_MANUFACTURERS_SUCCESS,
  payload: manufacturers
});

export const getManufacturersFail = (error) => ({
  type   : GET_MANUFACTURERS_FAIL,
  payload: error,
  error  : true
});


export const deleteManufacturer = (manufacturerId) => ({
  type   : DELETE_MANUFACTURER_REQUEST,
  payload: manufacturerId
});

export const deleteManufacturerSuccess = (manufacturerId) => ({
  type   : DELETE_MANUFACTURER_SUCCESS,
  payload: manufacturerId
});

export const deleteManufacturerFail = (error) => ({
  type   : DELETE_MANUFACTURER_FAIL,
  payload: error,
  error  : true
});


// ----------------------- SAGAS ------------------------ //

function* createManufacturerRequest(action) {
  yield sendElement(
    MANUFACTURERS_URL,
    action.payload,
    createManufacturerSuccess,
    createManufacturerFail
  );
}

function* getManufacturersRequest() {
  yield* getElements(
    MANUFACTURERS_URL,
    getManufacturersSuccess,
    getManufacturersFail
  );
}

function* deleteManufacturerRequest(action) {
  yield deleteElement(
    MANUFACTURERS_URL,
    action.payload,
    deleteManufacturerSuccess,
    deleteManufacturerFail
  );
}

export function* watchManufacturersActions() {
  yield takeEvery(CREATE_MANUFACTURER_REQUEST, createManufacturerRequest);
  yield takeLatest(GET_MANUFACTURERS_REQUEST, getManufacturersRequest);
  yield takeEvery(DELETE_MANUFACTURER_REQUEST, deleteManufacturerRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectManufacturersContainer = (state) => state.containers.manufacturers;
export const selectManufacturersData = (state) => selectManufacturersContainer(state).get("manufacturers");
