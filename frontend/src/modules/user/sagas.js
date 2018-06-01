import {getCookies, removeCookies, setCookies} from "../../utils/cookies";
import {ACCESS_TOKEN_NAME, CLIENT_ID, CLIENT_SECRET} from "../../settings";
import axios from "axios/index";
import {showSuccess} from "../../utils/notificator";
import {navigateTo} from "../../utils/navigator";


export function* watchAccountActions() {
  yield takeLatest(SIGN_UP_REQUEST, signUpRequest);
  yield takeLatest(GET_TOKEN_REQUEST, tokenRequest);
  yield takeEvery(LOAD_ACCOUNT_REQUEST, loadAccountRequest);
  yield takeEvery(LOGOUT_REQUEST, logoutRequest);

  yield takeEvery(GET_TOKEN_SUCCESS, handleToken);
  yield takeEvery(LOAD_ACCOUNT_SUCCESS, handleLogin);
  yield takeEvery(SIGN_UP_SUCCESS, handleSuccessSignUp);
  yield takeEvery(LOGOUT_SUCCESS, handleLogout);

  yield takeEvery(GET_TOKEN_FAIL, removeTokenFromCookies);
  yield takeEvery(CLEAN_ACCOUNT_DATA, removeTokenFromCookies);
}

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

function* logoutRequest() {
  try {
    yield put(logoutSuccess());
  }
  catch (e) {
    yield put(logoutFail(e.message));
  }
}

function* handleToken(action) {
  yield* setCookies(ACCESS_TOKEN_NAME, action.payload.access_token, action.payload.expires_in);
  yield* showSuccess("You are signed in");

  yield put(loadAccount());
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
