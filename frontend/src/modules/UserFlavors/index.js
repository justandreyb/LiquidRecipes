import {fromJS} from "immutable";
import {getElements} from "../../api";
import {takeLatest} from "redux-saga/effects";

// ---------------------- CONSTANTS ----------------------- //

const GET_USER_FLAVORS_REQUEST = "GET_USER_FLAVORS_REQUEST";
const GET_USER_FLAVORS_SUCCESS = "GET_USER_FLAVORS_SUCCESS";
const GET_USER_FLAVORS_FAIL = "GET_USER_FLAVORS_FAIL";

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

// ----------------------- SAGAS ------------------------ //

function* getUserFlavorsRequest() {
  yield* getElements("/im/flavors", getUserFlavorsSuccess, getUserFlavorsFail);
}

export function* watchUserFlavorsActions() {
  yield takeLatest(GET_USER_FLAVORS_REQUEST, getUserFlavorsRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectUserFlavorsContainer = (state) => state.containers.app.account.flavors;
export const selectUserFlavorsData = (state) => selectUserFlavorsContainer(state).get("flavors");
