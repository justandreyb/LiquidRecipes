/**
 * Provide connection to the remote/local REST server
 * @file ./api/index.js
 * @export function creators for CRUD
 *
 * @author justandreyb
 */
import {call, put} from "redux-saga/effects";
import axios from "axios";

/**
 * Server url.
 * https://reqres.in/api - fake REST server
 */
const serverURL = "https://reqres.in/api";

/**
 * Get all entities by url
 * @param url rest url
 * @param successHandler redux action which process success action
 * @param failHandler redux action which process fail action
 */
export function* getElements(url, successHandler, failHandler) {
  try {
    const response = yield call(axios.get, serverURL + url);

    yield put(successHandler(response.data.data));
  }
  catch (e) {
    yield put(failHandler(e.message));
  }
}

/**
 * Get entity by id
 * @param url rest url
 * @param id entityId
 * @param successHandler redux action which process success action
 * @param failHandler redux action which process fail action
 */
export function* getElement(url, id, successHandler, failHandler) {
  try {
    const response = yield call(axios.get, serverURL + url + "/" + id);
    yield put(successHandler(response.data.data));
  }
  catch (e) {
    yield put(failHandler(e.message));
  }
}

/**
 * Make post request to save entity
 * @param url rest url
 * @param data entity data
 * @param successHandler redux action which process success action
 * @param failHandler redux action which process fail action
 */
export function* sendElement(url, data, successHandler, failHandler) {
  try {
    const response = yield call(axios.post, serverURL + url, {data: data});
    console.log(response);
    yield put(successHandler());
  }
  catch (e) {
    yield put(failHandler(e.message));
  }
}

/**
 * Update entity by id
 * @param url rest url
 * @param id entityId
 * @param data entity data
 * @param successHandler redux action which process success action
 * @param failHandler redux action which process fail action
 */
export function* updateElement(url, id, data, successHandler, failHandler) {
  try {
    const response = yield call(axios.post, serverURL + url + "/" + id, {data: data});
    console.log(response);
    yield put(successHandler(response));
  }
  catch (e) {
    yield put(failHandler(e.message));
  }
}

/**
 * Delete entity by id
 * @param url rest url
 * @param id entity id
 * @param successHandler redux action which process success action
 * @param failHandler redux action which process fail action
 */
export function* deleteElement(url, id, successHandler, failHandler) {
  try {
    const response = yield call(axios.delete, serverURL + url + "/" + id);
    console.log(response);
    yield put(successHandler());
  }
  catch (e) {
    yield put(failHandler(e.message));
  }
}
