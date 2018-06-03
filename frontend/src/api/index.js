import {call, put} from "redux-saga/effects";
import axios from "axios";

import {API_URL} from "../settings";
import {getAuthenticationHeader} from "../modules/user/sagas";

export function* getElements(url, successHandler, failHandler) {
  try {
    const response = yield call(axios.get, API_URL + url, { headers: getAuthenticationHeader()} );
    yield put(successHandler(response.data));
  }
  catch (e) {
    yield call(console.log, "[Get elements]: " + e);
    yield put(failHandler(e.error_description));
  }
}

export function* getElement(url, id, successHandler, failHandler) {
  try {
    const response = yield call(axios.get, API_URL + url + (id === null ? "" : "/" + id), { headers: getAuthenticationHeader()} );
    yield put(successHandler(response.data));
  }
  catch (e) {
    yield call(console.log, "[Get element]: " + e);
    yield put(failHandler(e.error_description));
  }
}

export function* sendElement(url, data, successHandler, failHandler) {
  try {
    const response = yield call(axios.post, API_URL + url, {
      headers: getAuthenticationHeader(),
      data   : data
    });
    yield put(successHandler(response.data));
  }
  catch (e) {
    yield call(console.log, "[Send element]: " + e);
    yield put(failHandler(e.error_description));
  }
}

export function* updateElement(url, id, data, successHandler, failHandler) {
  try {
    const response = yield call(axios.post, API_URL + url + "/" + id, {
      headers: getAuthenticationHeader(),
      data   : data
    });
    yield put(successHandler(response));
  }
  catch (e) {
    yield call(console.log, "[Update element]: " + e);
    yield put(failHandler(e.error_description));
  }
}

export function* deleteElement(url, id, successHandler, failHandler) {
  try {
    yield call(axios.delete, API_URL + url + id === null ? "" : "/" + id, { headers: getAuthenticationHeader() });

    yield put(successHandler());
  }
  catch (e) {
    yield call(console.log, "[Delete element]: " + e);
    yield put(failHandler(e.error_description));
  }
}
