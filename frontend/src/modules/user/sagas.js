import {getCookies, removeCookies, setCookies} from "../../utils/cookies";
import {ACCESS_TOKEN_NAME, CLIENT_ID, CLIENT_SECRET} from "../../settings";
import axios from "axios/index";
import {showSuccess} from "../../utils/notificator";
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
  try {
    const body = `username=${encodeURIComponent(action.payload.email)}&password=${encodeURIComponent(action.payload.password)}&grant_type=password`;

    const response = yield call(axios, constants.ENDPOINT_AUTH + "/token", {
      method : "POST",
      data   : body,
      headers: getLoginHeaders()
    });

    yield put(actions.getTokenSuccess(response.data));
  }
  catch (e) {
    yield put(actions.getTokenFail(e.message));
  }
}

function* signUpRequest(action) {
  try {
    const response = yield call(axios.post, constants.ENDPOINT_ACCOUNT + "/registration", action.payload);

    yield put(actions.createAccountSuccess(response.data));
  }
  catch (e) {
    yield put(actions.createAccountFail(e.message));
  }
}

function* loadAccountRequest() {
  try {
    const response = yield call(axios.get, constants.ENDPOINT_ACCOUNT + "/im", { headers: getAuthenticationHeader() });

    yield put(actions.loadAccountSuccess(response.data));
  }
  catch (e) {
    yield put(actions.loadAccountFail(e.message));
  }
}

function* logoutRequest() {
  try {
    yield put(actions.logoutSuccess());
  }
  catch (e) {
    yield put(actions.logoutFail(e.message));
  }
}

function* handleToken(action) {
  yield* setCookies(ACCESS_TOKEN_NAME, action.payload.access_token, action.payload.expires_in);
  yield* showSuccess("You are signed in");

  yield put(actions.loadAccount());
}

function* handleLogin(action) {
  // yield* navigateTo("/");
}

function* handleLogout() {
  yield* removeCookies(ACCESS_TOKEN_NAME);
  yield* showSuccess("Logout complete");
  yield* navigateTo("/");
}

function* handleSuccessSignUp(action) {
  yield* showSuccess("Account created. You can enter now");
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
