import {fromJS} from "immutable";
import {getElements} from "../../api";
import {takeLatest} from "redux-saga/effects";

// ---------------------- CONSTANTS ----------------------- //

const GET_ENTITIES_REQUEST = "GET_ENTITIES_REQUEST";
const GET_ENTITIES_SUCCESS = "GET_ENTITIES_SUCCESS";
const GET_ENTITIES_FAIL = "GET_ENTITIES_FAIL";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  entities: [],
  error   : null,
  loading : false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case GET_ENTITIES_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_ENTITIES_SUCCESS:
    return state
      .set("entities", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_ENTITIES_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const sendEntitiesRequest = () => ({
  type: GET_ENTITIES_REQUEST
});

export const getEntitiesSuccess = (data) => ({
  type   : GET_ENTITIES_SUCCESS,
  payload: data
});

export const getEntitiesFail = (error) => ({
  type   : GET_ENTITIES_FAIL,
  payload: error,
  error  : true
});

// ----------------------- SAGAS ------------------------ //

function* getEntities() {
  yield* getElements("/entities", getEntitiesSuccess, getEntitiesFail);
}

export function* watchEntitiesActions() {
  yield takeLatest(GET_ENTITIES_REQUEST, getEntities);
}

// ------------------ SELECTORS -------------------- //

export const selectEntitiesContainer = (state) => state.containers.entities.list;
export const selectEntitiesData = (state) => selectEntitiesContainer(state).get("entities");
