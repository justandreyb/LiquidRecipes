import {fromJS} from "immutable";
import {sendElement, getElement, updateElement, deleteElement} from "../../api/index";
import {takeEvery, takeLatest} from "redux-saga/effects";


// ---------------------- CONSTANTS ----------------------- //

const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAIL = "SIGN_UP_FAIL";

const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
const SIGN_IN_FAIL = "SIGN_IN_FAIL";

const UPDATE_ACCOUNT_REQUEST = "UPDATE_ACCOUNT_REQUEST";
const UPDATE_ACCOUNT_SUCCESS = "UPDATE_ACCOUNT_SUCCESS";
const UPDATE_ACCOUNT_FAIL = "UPDATE_ACCOUNT_FAIL";

const DELETE_ACCOUNT_REQUEST = "DELETE_ACCOUNT_REQUEST";
const DELETE_ACCOUNT_SUCCESS = "DELETE_ACCOUNT_SUCCESS";
const DELETE_ACCOUNT_FAIL = "DELETE_ACCOUNT_FAIL";

const CLEAN_ACCOUNT_DATA = "CLEAN_ACCOUNT_DATA";


// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  user: {
    nickname: "Guest"
  },
  guest    : true,
  superuser: false,
  error    : null
});


// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case SIGN_UP_REQUEST:
    return state
      .set("error", null);

  case SIGN_UP_SUCCESS:
    return state
      .set("user", action.payload.user)
      .set("guest", false)
      .set("superuser", action.payload.superuser);

  case SIGN_UP_FAIL:
    return state
      .set("error", action.payload);


  case SIGN_IN_REQUEST:
    return state
      .set("error", null);

  case SIGN_IN_SUCCESS:
    return state
      .set("account", action.payload)
      .set("loading", false)
      .set("error", null);

  case SIGN_IN_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case UPDATE_ACCOUNT_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case UPDATE_ACCOUNT_SUCCESS:
    return state
      .set("account", action.payload)
      .set("loading", false)
      .set("error", null);

  case UPDATE_ACCOUNT_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_ACCOUNT_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_ACCOUNT_SUCCESS:
    return state
      .set("account", action.payload)
      .set("loading", false)
      .set("error", null);

  case DELETE_ACCOUNT_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  case CLEAN_ACCOUNT_DATA:
    return initialState;

  default:
    return state;
  }
};


// ----------------- ACTIONS ----------------------- //

export const signUp = (data) => ({
  type   : SIGN_UP_REQUEST,
  payload: data
});

export const createAccountSuccess = () => ({
  type: SIGN_UP_SUCCESS
});

export const createAccountFail = (error) => ({
  type   : SIGN_UP_FAIL,
  payload: error,
  error  : true
});


export const signIn = (data) => {
  console.log("GJ");
  return ({
    type   : SIGN_IN_REQUEST,
    payload: data
  });
};

export const getAccountSuccess = (data) => ({
  type   : SIGN_IN_SUCCESS,
  payload: data
});

export const getAccountFail = (error) => ({
  type   : SIGN_IN_FAIL,
  payload: error,
  error  : true
});


export const updateAccount = (data) => ({
  type   : UPDATE_ACCOUNT_REQUEST,
  payload: data
});

export const updateAccountSuccess = () => ({
  type: UPDATE_ACCOUNT_SUCCESS
});

export const updateAccountFail = (error) => ({
  type   : UPDATE_ACCOUNT_FAIL,
  payload: error,
  error  : true
});


export const deleteAccount = (id) => ({
  type   : DELETE_ACCOUNT_REQUEST,
  payload: id
});

export const deleteAccountSuccess = () => ({
  type: DELETE_ACCOUNT_SUCCESS
});

export const deleteAccountFail = (error) => ({
  type   : DELETE_ACCOUNT_FAIL,
  payload: error,
  error  : true
});

export const cleanAccountData = () => ({
  type: CLEAN_ACCOUNT_DATA
});


// ----------------------- SAGAS ------------------------ //

const url = "/account";

function* createAccountRequest(action) {
  yield sendElement(url, action.payload, createAccountSuccess, createAccountFail);
}

function* getAccountRequest(action) {
  yield getElement(url, action.payload, getAccountSuccess, getAccountFail);
}

function* updateAccountRequest(action) {
  yield updateElement(url, action.payload.id, action.payload, updateAccountSuccess, updateAccountFail);
}

function* deleteAccountRequest(action) {
  yield deleteElement(url, action.payload, deleteAccountSuccess, deleteAccountFail);
}

export function* watchAccountActions() {
  yield takeLatest(SIGN_UP_REQUEST, createAccountRequest);
  yield takeLatest(SIGN_IN_REQUEST, getAccountRequest);
  yield takeEvery(UPDATE_ACCOUNT_REQUEST, updateAccountRequest);
  yield takeLatest(DELETE_ACCOUNT_REQUEST, deleteAccountRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectAccountContainer = (state) => state.containers.app.account.info;
export const selectUserData = (state) => selectAccountContainer(state).get("user");
export const selectIsGuest = (state) => selectAccountContainer(state).get("guest");
export const selectIsSuperuser = (state) => selectAccountContainer(state).get("superuser");
