/**
 * This file describe Account component for redux and saga
 * @file {projectRoot}/src/modules/Account/index.js
 *
 * @author justandreyb
 */

import {fromJS} from "immutable";
import {sendElement, getElement, updateElement, deleteElement} from "../../api/index";
import {takeEvery, takeLatest} from "redux-saga/effects";


// ---------------------- CONSTANTS ----------------------- //
/**
 * Constants for naming actions
 */
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
/**
 * Describing initial state.
 * You will find this data after starting app in
 * <p><code>store.containers.app.account.info</code></p>
 */
const initialState = fromJS({
  user: {
    nickname: "Guest"
  },
  guest    : true,
  superuser: false,
  error    : null
});


// ----------------------- REDUCER ------------------------ //
/**
 * Creating reducer.
 * Here you can describe, on which action type and how will be store changed
 *
 * "payload" is a good practice for naming data in action object, so
 * every data you will put in action must be wrapped in payload
 *
 * You can use action.type constants from another components if you want change state
 * of account based on some action not described in this component
 */
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
/**
 * Writing actions.
 * Here you can create actions which will used in your app
 *
 * "payload" is a good practice for naming data in action object, so
 * every data you will put in action must be wrapped in payload
 */
export const createAccountRequest = (data) => ({
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


export const getAccountRequest = (data) => ({
  type   : SIGN_IN_REQUEST,
  payload: data
});

export const getAccountSuccess = (data) => ({
  type   : SIGN_IN_SUCCESS,
  payload: data
});

export const getAccountFail = (error) => ({
  type   : SIGN_IN_FAIL,
  payload: error,
  error  : true
});


export const updateAccountRequest = (data) => ({
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


export const deleteAccountRequest = (id) => ({
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
/**
 * Writing sagas.
 * Here you can create sagas which will used in your app for CRUD entities
 *
 * Saga is a function creator, which will make some async process
 * in your app and after finish, write result by calling described actions
 *
 * Good practice for sagas is wrapping all sagas from one component in one
 * function creator with name "watch*ComponentName*Actions" which will imported
 * in {projectRoot}/sagas.js
 */
const url = "/account";

function* createAccount(action) {
  yield sendElement(url, action.payload, createAccountSuccess, createAccountFail);
}

function* getAccount(action) {
  yield getElement(url, action.payload, getAccountSuccess, getAccountFail);
}

function* updateAccount(action) {
  yield updateElement(url, action.payload.id, action.payload, updateAccountSuccess, updateAccountFail);
}

function* deleteAccount(action) {
  yield deleteElement(url, action.payload, deleteAccountSuccess, deleteAccountFail);
}

export function* watchAccountActions() {
  yield takeLatest(SIGN_UP_REQUEST, createAccount);
  yield takeLatest(SIGN_IN_REQUEST, getAccount);
  yield takeEvery(UPDATE_ACCOUNT_REQUEST, updateAccount);
  yield takeLatest(DELETE_ACCOUNT_REQUEST, deleteAccount);
}

// ------------------ SELECTORS -------------------- //
/**
 * Describing selectors.
 *
 * Selectors will used in your containers, when you want get data from app store
 */
export const selectAccountContainer = (state) => state.containers.app.account.info;
export const selectUserData = (state) => selectAccountContainer(state).get("user");
export const selectIsGuest = (state) => selectAccountContainer(state).get("guest");
export const selectIsSuperuser = (state) => selectAccountContainer(state).get("superuser");
