import {getCookies, removeCookies, setCookies} from "../../utils/cookies";
import {ACCESS_TOKEN_NAME, CLIENT_ID, CLIENT_SECRET} from "../../settings";
import axios from "axios/index";
import {showSuccessMessage} from "../../utils/notificator";
import {navigateTo} from "../../utils/navigator";
import takeLatest from "redux-saga/es/internal/sagaHelpers/takeLatest";
import takeEvery from "redux-saga/es/internal/sagaHelpers/takeEvery";
import * as constants from "./constants"
import * as actions from "./actions"
import {call, put} from "redux-saga/effects";


export function* watchAccountActions() {
  yield takeLatest(constants.SIGN_UP_REQUEST, signUpRequest);
  yield takeLatest(constants.GET_TOKEN_REQUEST, tokenRequest);
  yield takeEvery(constants.LOAD_ACCOUNT_REQUEST, loadAccountRequest);
  yield takeEvery(constants.LOGOUT_REQUEST, logoutRequest);

  yield takeEvery(constants.GET_TOKEN_SUCCESS, handleToken);
  yield takeEvery(constants.LOAD_ACCOUNT_SUCCESS, handleLogin);
  yield takeEvery(constants.SIGN_UP_SUCCESS, handleSuccessSignUp);
  yield takeEvery(constants.LOGOUT_SUCCESS, handleLogout);

  yield takeEvery(constants.GET_TOKEN_FAIL, removeTokenFromCookies);
  yield takeEvery(constants.CLEAN_ACCOUNT_DATA, removeTokenFromCookies);
}

function* tokenRequest(action) {
  const body = `username=${encodeURIComponent(action.payload.email)}&password=${encodeURIComponent(action.payload.password)}&grant_type=password`;

  yield makePostRequest(constants.ENDPOINT_AUTH + "/token", body, getLoginHeaders(), actions.getTokenSuccess, actions.getTokenFail);
}

function* signUpRequest(action) {
  yield makePostRequest(constants.ENDPOINT_ACCOUNT + "/registration", action.payload, null, actions.createAccountSuccess, actions.createAccountFail);
}

function* loadAccountRequest() {
  yield makeGetRequest(constants.ENDPOINT_ACCOUNT + "/im", getAuthenticationHeader(), actions.loadAccountSuccess, actions.loadAccountFail)
}

function* logoutRequest() {
  try {
    yield handleLogout();
    yield put(actions.logoutSuccess());
  }
  catch (e) {
    yield put(actions.logoutFail(e.message));
  }
}

function* handleToken(action) {
  yield* setCookies(ACCESS_TOKEN_NAME, action.payload.access_token, action.payload.expires_in);
  yield showSuccessMessage("Welcome! You are signed in");

  yield put(actions.loadAccount());
}

function* handleLogin(action) {
  yield* navigateTo("/");
}

function* handleLogout() {
  yield* removeCookies(ACCESS_TOKEN_NAME);
  yield showSuccessMessage("Logout complete");
}

function* handleSuccessSignUp(action) {
  yield* showSuccessMessage("Account created successful");
}

function* removeTokenFromCookies(action) {
  yield* removeCookies(ACCESS_TOKEN_NAME);
}

function getLoginHeaders() {
  return {
    "Authorization": "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    "Content-Type" : "application/x-www-form-urlencoded; charset=utf-8"
  };
}

export function getAuthenticationHeader() {
  if (getCookies(ACCESS_TOKEN_NAME) != null)
    return {
      "Authorization": `Bearer ${getCookies(ACCESS_TOKEN_NAME)}`
    };
}

export function* makeGetRequest(url, headers, successHandler, failHandler) {
  const { response, error } = yield call(() => get(url, headers));
  if (response)
    yield put(successHandler(response.data));
  else
  if (error.response)
    yield put(failHandler(error.response.data.error_description));
  else
    yield put(failHandler(error.message));
}

export function* makePostRequest(url, data, headers, successHandler, failHandler) {
  const { response, error } = yield call(() => post(url, data, headers));
  if (response)
    yield put(successHandler(response.data));
  else
  if (error.response)
    yield put(failHandler(error.response.data.error_description));
  else
    yield put(failHandler(error));

}

function get(url, headers) {
  return axios.get(url, {
    headers: headers
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}

function post(url, data, headers) {
  return axios.post(url, data, {
    headers: headers
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
