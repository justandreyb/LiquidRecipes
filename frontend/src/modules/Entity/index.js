import {fromJS} from "immutable";
import {sendElement, getElement, updateElement, deleteElement} from "../../api";
import {takeEvery, takeLatest} from "redux-saga/effects";

// ---------------------- CONSTANTS ----------------------- //

const ENTITIES_URL = "/entities";

const CREATE_ENTITY_REQUEST = "CREATE_ENTITY_REQUEST";
const CREATE_ENTITY_SUCCESS = "CREATE_ENTITY_SUCCESS";
const CREATE_ENTITY_FAIL = "CREATE_ENTITY_FAIL";

const GET_ENTITY_REQUEST = "GET_ENTITY_REQUEST";
const GET_ENTITY_SUCCESS = "GET_ENTITY_SUCCESS";
const GET_ENTITY_FAIL = "GET_ENTITY_FAIL";

const UPDATE_ENTITY_REQUEST = "UPDATE_ENTITY_REQUEST";
const UPDATE_ENTITY_SUCCESS = "UPDATE_ENTITY_SUCCESS";
const UPDATE_ENTITY_FAIL = "UPDATE_ENTITY_FAIL";

const DELETE_ENTITY_REQUEST = "DELETE_ENTITY_REQUEST";
const DELETE_ENTITY_SUCCESS = "DELETE_ENTITY_SUCCESS";
const DELETE_ENTITY_FAIL = "DELETE_ENTITY_FAIL";

const CLEAN_ENTITY_WORKSPACE = "CLEAN_ENTITY_WORKSPACE";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  entity : {},
  error  : null,
  loading: false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case CREATE_ENTITY_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case CREATE_ENTITY_SUCCESS:
    return state
      .set("entity", action.payload)
      .set("loading", false)
      .set("error", null);

  case CREATE_ENTITY_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_ENTITY_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_ENTITY_SUCCESS:
    return state
      .set("entity", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_ENTITY_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case UPDATE_ENTITY_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case UPDATE_ENTITY_SUCCESS:
    return state
      .set("entity", action.payload)
      .set("loading", false)
      .set("error", null);

  case UPDATE_ENTITY_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_ENTITY_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_ENTITY_SUCCESS:
    return state
      .set("entity", action.payload)
      .set("loading", false)
      .set("error", null);

  case DELETE_ENTITY_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  case CLEAN_ENTITY_WORKSPACE:
    return initialState;

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const createEntityRequest = (data) => ({
  type   : CREATE_ENTITY_REQUEST,
  payload: data
});

export const createEntitySuccess = () => ({
  type: CREATE_ENTITY_SUCCESS
});

export const createEntityFail = (error) => ({
  type   : CREATE_ENTITY_FAIL,
  payload: error,
  error  : true
});


export const getEntityRequest = (data) => ({
  type   : GET_ENTITY_REQUEST,
  payload: data
});

export const getEntitySuccess = (data) => ({
  type   : GET_ENTITY_SUCCESS,
  payload: data
});

export const getEntityFail = (error) => ({
  type   : GET_ENTITY_FAIL,
  payload: error,
  error  : true
});


export const updateEntityRequest = (data) => ({
  type   : UPDATE_ENTITY_REQUEST,
  payload: data
});

export const updateEntitySuccess = () => ({
  type: UPDATE_ENTITY_SUCCESS
});

export const updateEntityFail = (error) => ({
  type   : UPDATE_ENTITY_FAIL,
  payload: error,
  error  : true
});


export const deleteEntityRequest = (id) => ({
  type   : DELETE_ENTITY_REQUEST,
  payload: id
});

export const deleteEntitySuccess = () => ({
  type: DELETE_ENTITY_SUCCESS
});

export const deleteEntityFail = (error) => ({
  type   : DELETE_ENTITY_FAIL,
  payload: error,
  error  : true
});

export const cleanEntityWorkspace = () => ({
  type: CLEAN_ENTITY_WORKSPACE
});

// ----------------------- SAGAS ------------------------ //

function* createEntity(action) {
  yield sendElement(ENTITIES_URL, action.payload, createEntitySuccess, createEntityFail);
}

function* getEntity(action) {
  yield getElement(ENTITIES_URL, action.payload, getEntitySuccess, getEntityFail);
}

function* updateEntity(action) {
  yield updateElement(ENTITIES_URL, action.payload.id, action.payload, updateEntitySuccess, updateEntityFail);
}

function* deleteEntity(action) {
  yield deleteElement(ENTITIES_URL, action.payload, deleteEntitySuccess, deleteEntityFail);
}

export function* watchEntityActions() {
  yield takeEvery(CREATE_ENTITY_REQUEST, createEntity);
  yield takeLatest(GET_ENTITY_REQUEST, getEntity);
  yield takeEvery(UPDATE_ENTITY_REQUEST, updateEntity);
  yield takeEvery(DELETE_ENTITY_REQUEST, deleteEntity);
}

// ------------------ SELECTORS -------------------- //

export const selectEntityContainer = (state) => state.containers.entities.target;
export const selectEntityData = (state) => selectEntityContainer(state).get("entity");
