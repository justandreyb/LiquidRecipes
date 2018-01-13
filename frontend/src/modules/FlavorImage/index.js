import {fromJS} from "immutable";
import {sendElement, deleteElement, getElement} from "../../api";
import {takeEvery, takeLatest} from "redux-saga/effects";

import {CLEAR_FLAVOR_WORKSPACE} from "../Flavor";
import {FLAVORS_URL} from "../Flavors";

// ---------------------- CONSTANTS ----------------------- //

const ADD_FLAVOR_IMAGE_REQUEST = "ADD_FLAVOR_IMAGE_REQUEST";
const ADD_FLAVOR_IMAGE_SUCCESS = "ADD_FLAVOR_IMAGE_SUCCESS";
const ADD_FLAVOR_IMAGE_FAIL = "ADD_FLAVOR_IMAGE_FAIL";

const GET_FLAVOR_IMAGE_REQUEST = "GET_FLAVOR_IMAGE_REQUEST";
const GET_FLAVOR_IMAGE_SUCCESS = "GET_FLAVOR_IMAGE_SUCCESS";
const GET_FLAVOR_IMAGE_FAIL = "GET_FLAVOR_IMAGE_FAIL";

const DELETE_FLAVOR_IMAGE_REQUEST = "DELETE_FLAVOR_IMAGE_REQUEST";
const DELETE_FLAVOR_IMAGE_SUCCESS = "DELETE_FLAVOR_IMAGE_SUCCESS";
const DELETE_FLAVOR_IMAGE_FAIL = "DELETE_FLAVOR_IMAGE_FAIL";

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

  case ADD_FLAVOR_IMAGE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case ADD_FLAVOR_IMAGE_SUCCESS:
    return state
      .set("image", action.payload)
      .set("loading", false)
      .set("error", null);

  case ADD_FLAVOR_IMAGE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_FLAVOR_IMAGE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_FLAVOR_IMAGE_SUCCESS:
    return state
      .set("image", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_FLAVOR_IMAGE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_FLAVOR_IMAGE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_FLAVOR_IMAGE_SUCCESS:
    return initialState;

  case DELETE_FLAVOR_IMAGE_FAIL:
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

export const createFlavorImage = (flavorId, image) => ({
  type   : ADD_FLAVOR_IMAGE_REQUEST,
  payload: {
    flavorId: flavorId,
    image   : image
  }
});

export const createFlavorImageSuccess = (image) => ({
  type   : ADD_FLAVOR_IMAGE_SUCCESS,
  payload: image
});

export const createFlavorImageFail = (error) => ({
  type   : ADD_FLAVOR_IMAGE_FAIL,
  payload: error,
  error  : true
});


export const getFlavorImage = (flavorId) => ({
  type   : GET_FLAVOR_IMAGE_REQUEST,
  payload: flavorId
});

export const getFlavorImageSuccess = (image) => ({
  type   : GET_FLAVOR_IMAGE_SUCCESS,
  payload: image
});

export const getFlavorImageFail = (error) => ({
  type   : GET_FLAVOR_IMAGE_FAIL,
  payload: error,
  error  : true
});


export const deleteFlavorImage = (flavorId) => ({
  type   : DELETE_FLAVOR_IMAGE_REQUEST,
  payload: {
    flavorId: flavorId
  }
});

export const deleteFlavorImageSuccess = (imageId) => ({
  type   : DELETE_FLAVOR_IMAGE_SUCCESS,
  payload: imageId
});

export const deleteFlavorImageFail = (error) => ({
  type   : DELETE_FLAVOR_IMAGE_FAIL,
  payload: error,
  error  : true
});


// ----------------------- SAGAS ------------------------ //

function* createFlavorImageRequest(action) {
  yield sendElement(
    FLAVORS_URL + "/" + action.payload.flavorId + "/image",
    action.payload.image,
    createFlavorImageSuccess,
    createFlavorImageFail
  );
}

function* getFlavorImageRequest(action) {
  yield* getElement(
    FLAVORS_URL + "/" + action.payload + "/image",
    null,
    getFlavorImageSuccess,
    getFlavorImageFail
  );
}

function* deleteFlavorImageRequest(action) {
  yield deleteElement(
    FLAVORS_URL + "/" + action.payload.flavorId + "/image",
    null,
    deleteFlavorImageSuccess,
    deleteFlavorImageFail
  );
}

export function* watchFlavorImageActions() {
  yield takeEvery(ADD_FLAVOR_IMAGE_REQUEST, createFlavorImageRequest);
  yield takeLatest(GET_FLAVOR_IMAGE_REQUEST, getFlavorImageRequest);
  yield takeEvery(DELETE_FLAVOR_IMAGE_REQUEST, deleteFlavorImageRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectFlavorImageContainer = (state) => state.containers.flavors.target.image;
export const selectFlavorImageData = (state) => selectFlavorImageContainer(state).get("image");
