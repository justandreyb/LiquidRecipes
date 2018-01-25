import {fromJS} from "immutable";
import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import axios from "axios/index";
import {ACCESS_TOKEN_NAME, API_URL, CLIENT_ID, CLIENT_SECRET} from "../../settings";
import {getCookies, removeCookies, setCookies} from "../App/Cookies";
import {showSuccess} from "../Notifications";


// ---------------------- CONSTANTS ----------------------- //

const ENDPOINT_AUTH = API_URL + "/oauth";
const ENDPOINT_ACCOUNT = API_URL + "/accounts";

const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAIL = "SIGN_UP_FAIL";

const GET_TOKEN_REQUEST = "GET_TOKEN_REQUEST";
const GET_TOKEN_SUCCESS = "GET_TOKEN_SUCCESS";
const GET_TOKEN_FAIL = "GET_TOKEN_FAIL";

const LOAD_ACCOUNT_REQUEST = "LOAD_ACCOUNT_REQUEST";
const LOAD_ACCOUNT_SUCCESS = "LOAD_ACCOUNT_SUCCESS";
const LOAD_ACCOUNT_FAIL = "LOAD_ACCOUNT_FAIL";

const CLEAN_ACCOUNT_DATA = "CLEAN_ACCOUNT_DATA";


// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  user: {
    name: "Guest"
  },
  auth         : {},
  authenticated: false,
  guest        : true,
  superuser    : false,
  error        : null
});


// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case SIGN_UP_REQUEST:
    return state
      .set("error", null);

  case SIGN_UP_SUCCESS:
    return state;

  case SIGN_UP_FAIL:
    return state
      .set("error", action.payload);


  case GET_TOKEN_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_TOKEN_SUCCESS:
    return state
      .set("auth", action.payload)
      .set("authenticated", true)
      .set("loading", false)
      .set("error", null);

  case GET_TOKEN_FAIL:
    return state
      .set("auth", {})
      .set("authenticated", false)
      .set("loading", false)
      .set("error", action.payload);


  case LOAD_ACCOUNT_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case LOAD_ACCOUNT_SUCCESS:
    return state
      .set("user", action.payload)
      .set("loading", false)
      .set("error", null);

  case LOAD_ACCOUNT_FAIL:
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


export const signIn = (data) => ({
  type   : GET_TOKEN_REQUEST,
  payload: data
});

export const getTokenSuccess = (data) => ({
  type   : GET_TOKEN_SUCCESS,
  payload: data
});

export const getTokenFail = (error) => ({
  type   : GET_TOKEN_FAIL,
  payload: error,
  error  : true
});


export const loadAccount = () => ({
  type: LOAD_ACCOUNT_REQUEST
});

export const loadAccountSuccess = (data) => ({
  type   : LOAD_ACCOUNT_SUCCESS,
  payload: data
});

export const loadAccountFail = (error) => ({
  type   : LOAD_ACCOUNT_FAIL,
  payload: error,
  error  : true
});

export const cleanAccountData = () => ({
  type: CLEAN_ACCOUNT_DATA
});

// ----------------------- SAGAS ------------------------ //

function* tokenRequest(action) {
  try {
    const body = `username=${encodeURIComponent(action.payload.email)}&password=${encodeURIComponent(action.payload.password)}&grant_type=password`;

    const response = yield call(axios, ENDPOINT_AUTH + "/token", {
      method : "POST",
      data   : body,
      headers: getLoginHeaders()
    });

    yield put(getTokenSuccess(response.data));
  }
  catch (e) {
    yield put(getTokenFail(e.message));
  }
}

function* signUpRequest(action) {
  try {
    const response = yield call(axios.post, ENDPOINT_ACCOUNT + "/registration", action.payload);

    yield put(createAccountSuccess(response.data));
    yield put(showSuccess("Account created"));
  }
  catch (e) {
    yield put(createAccountFail(e.message));
  }
}

function* loadAccountRequest() {
  try {
    const response = yield call(axios.get, ENDPOINT_ACCOUNT + "/im", { headers: getAuthenticationHeader() });

    yield put(loadAccountSuccess(response.data));
  }
  catch (e) {
    yield put(loadAccountFail(e.message));
  }
}

function* handleToken(action) {
  yield* setCookies(ACCESS_TOKEN_NAME, action.payload.access_token, action.payload.expires_in);
  yield* showSuccess("You are signed in");

  yield put(loadAccount());
}

function* handleSuccessSignUp(action) {
  yield* showSuccess("Account created. You can enter now");
}

function* removeTokenFromCookies(action) {
  yield* removeCookies(ACCESS_TOKEN_NAME);
}

export function* watchAccountActions() {
  yield takeLatest(SIGN_UP_REQUEST, signUpRequest);
  yield takeLatest(GET_TOKEN_REQUEST, tokenRequest);
  yield takeEvery(LOAD_ACCOUNT_REQUEST, loadAccountRequest);

  yield takeEvery(GET_TOKEN_SUCCESS, handleToken);
  yield takeEvery(SIGN_UP_SUCCESS, handleSuccessSignUp);
  yield takeEvery(GET_TOKEN_FAIL, removeTokenFromCookies);
  yield takeEvery(CLEAN_ACCOUNT_DATA, removeTokenFromCookies);
}

function getLoginHeaders() {
  return {
    "Authorization": "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    "Content-Type" : "application/x-www-form-urlencoded; charset=utf-8"
  };
}

export function getAuthenticationHeader() {
  return {
    "Authorization": `Bearer ${getCookies(ACCESS_TOKEN_NAME)}`
  };
}

// ------------------ SELECTORS -------------------- //

export const selectAccountContainer = (state) => state.containers.app.account.info;
export const selectUserData = (state) => selectAccountContainer(state).get("user");
export const selectIsGuest = (state) => selectAccountContainer(state).get("guest");
export const selectIsSuperuser = (state) => selectAccountContainer(state).get("superuser");
