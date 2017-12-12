import {fromJS} from "immutable";
import {sendElement, deleteElement, getElements} from "../../api";
import {takeEvery, takeLatest} from "redux-saga/effects";

// ---------------------- CONSTANTS ----------------------- //

const IMAGES_URL = "/images";

const CREATE_IMAGE_REQUEST = "CREATE_IMAGE_REQUEST";
const CREATE_IMAGE_SUCCESS = "CREATE_IMAGE_SUCCESS";
const CREATE_IMAGE_FAIL = "CREATE_IMAGE_FAIL";

const GET_IMAGES_REQUEST = "GET_IMAGES_REQUEST";
const GET_IMAGES_SUCCESS = "GET_IMAGES_SUCCESS";
const GET_IMAGES_FAIL = "GET_IMAGES_FAIL";

const DELETE_IMAGE_REQUEST = "DELETE_IMAGE_REQUEST";
const DELETE_IMAGE_SUCCESS = "DELETE_IMAGE_SUCCESS";
const DELETE_IMAGE_FAIL = "DELETE_IMAGE_FAIL";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  images : [],
  error  : null,
  loading: false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case CREATE_IMAGE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case CREATE_IMAGE_SUCCESS:
    return state
      .updateIn(["images"], (arr) => arr.concat(action.payload))
      .set("loading", false)
      .set("error", null);

  case CREATE_IMAGE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_IMAGES_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_IMAGES_SUCCESS:
    return state
      .set("images", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_IMAGES_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_IMAGE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_IMAGE_SUCCESS:
    return state
      .updateIn(["images"],
        (arr) => arr.filter((val) => val.id !== action.payload))
      .set("loading", false)
      .set("error", null);

  case DELETE_IMAGE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const createImage = (image) => ({
  type   : CREATE_IMAGE_REQUEST,
  payload: image
});

export const createImageSuccess = (image) => ({
  type   : CREATE_IMAGE_SUCCESS,
  payload: image
});

export const createImageFail = (error) => ({
  type   : CREATE_IMAGE_FAIL,
  payload: error,
  error  : true
});


export const getImages = () => ({
  type: GET_IMAGES_REQUEST
});

export const getImagesSuccess = (images) => ({
  type   : GET_IMAGES_SUCCESS,
  payload: images
});

export const getImagesFail = (error) => ({
  type   : GET_IMAGES_FAIL,
  payload: error,
  error  : true
});


export const deleteImage = (imageId) => ({
  type   : DELETE_IMAGE_REQUEST,
  payload: imageId
});

export const deleteImageSuccess = (imageId) => ({
  type   : DELETE_IMAGE_SUCCESS,
  payload: imageId
});

export const deleteImageFail = (error) => ({
  type   : DELETE_IMAGE_FAIL,
  payload: error,
  error  : true
});


// ----------------------- SAGAS ------------------------ //

function* createImageRequest(action) {
  yield sendElement(
    IMAGES_URL,
    action.payload,
    createImageSuccess,
    createImageFail
  );
}

function* getImagesRequest() {
  yield* getElements(
    IMAGES_URL,
    getImagesSuccess,
    getImagesFail
  );
}

function* deleteImageRequest(action) {
  yield deleteElement(
    IMAGES_URL,
    action.payload,
    deleteImageSuccess,
    deleteImageFail
  );
}

export function* watchImagesActions() {
  yield takeEvery(CREATE_IMAGE_REQUEST, createImageRequest);
  yield takeLatest(GET_IMAGES_REQUEST, getImagesRequest);
  yield takeEvery(DELETE_IMAGE_REQUEST, deleteImageRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectImagesContainer = (state) => state.containers.images;
export const selectImagesData = (state) => selectImagesContainer(state).get("images");
