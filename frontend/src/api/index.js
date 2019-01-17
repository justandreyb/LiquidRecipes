import {call, put} from "redux-saga/effects";
import axios from "axios";

import {API_URL} from "../settings";
import {getAuthenticationHeader} from "../modules/user/sagas";


export function* getElements(url, successHandler, failHandler) {
  yield makeGetRequest(url, successHandler, failHandler);
}

export function* getElement(url, id, successHandler, failHandler) {
  yield makeGetRequest(url + (id === null ? "" : "/" + id), successHandler, failHandler);
}

export function* sendElement(url, data, successHandler, failHandler) {
  yield makePostRequest(url, data, successHandler, failHandler)
}

export function* updateElement(url, id, data, successHandler, failHandler) {
  yield makePostRequest(url + "/" + id, data, successHandler, failHandler)
}

export function* deleteElement(url, id, successHandler, failHandler) {
  yield makeDeleteRequest(url + id === null ? "" : "/" + id, id, successHandler, failHandler)
}

export function* makeGetRequest(url, successHandler, failHandler) {
  const { response, error } = yield call(() => get(url));
  if (response)
    yield put(successHandler(response.data));
  else
    yield put(failHandler(error));
}

export function* makePostRequest(url, data, successHandler, failHandler) {
  const { response, error } = yield call(() => post(url, data));
  if (response)
    yield put(successHandler(response.data));
  else
    yield put(failHandler(error));
}

export function* makeDeleteRequest(url, data, successHandler, failHandler) {
  const { response, error } = yield call(() => deleteRequest(url, data));
  if (response)
    yield put(successHandler(response.data));
  else
    yield put(failHandler(error));
}

function get(url) {
  return axios.get(API_URL + url, {
    headers: getAuthenticationHeader()
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}

function post(url, data) {
  return axios.post(API_URL + url, {
    headers: getAuthenticationHeader(),
    data   : data
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}

function deleteRequest(url, data) {
  return axios.delete(API_URL + url, {
    headers: getAuthenticationHeader(),
    data   : data
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
