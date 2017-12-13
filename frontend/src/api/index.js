import {call, put} from "redux-saga/effects";
import axios from "axios";

const serverURL = "http://127.0.0.1:8080/storage";

export function* getElements(url, successHandler, failHandler) {
  try {
    console.log("Get to :");
    console.log(serverURL + url);
    const response = yield call(axios, serverURL + url, {
      method : "GET",
      mode   : "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type"               : "application/json"
      },
      withCredentials: true,
      credentials    : "same-origin"
    });

    yield put(successHandler(response.data));
  }
  catch (e) {
    yield put(failHandler(e.message));
  }
}

export function* getElement(url, id, successHandler, failHandler) {
  try {
    console.log("Get to :");
    console.log(serverURL + url + "/" + id);
    const response = yield call(axios, serverURL + url + "/" + id, {
      method : "GET",
      mode   : "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type"               : "application/json"
      },
      withCredentials: true,
      credentials    : "same-origin"
    });
    yield put(successHandler(response.data));
  }
  catch (e) {
    yield put(failHandler(e.message));
  }
}

export function* sendElement(url, data, successHandler, failHandler) {
  try {
    const response = yield call(axios, serverURL + url, {
      method : "POST",
      mode   : "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type"               : "application/json"
      },
      withCredentials: true,
      credentials    : "same-origin",
      data           : data
    });
    yield put(successHandler(response.data));
  }
  catch (e) {
    yield put(failHandler(e.message));
  }
}

export function* updateElement(url, id, data, successHandler, failHandler) {
  try {
    console.log("Update to :");
    console.log(serverURL + url + "/" + id);
    const response = yield call(axios, serverURL + url + "/" + id, {
      method : "POST",
      mode   : "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type"               : "application/json"
      },
      withCredentials: true,
      credentials    : "same-origin",
      data           : data
    });
    console.log(response);
    yield put(successHandler(response));
  }
  catch (e) {
    yield put(failHandler(e.message));
  }
}

export function* deleteElement(url, id, successHandler, failHandler) {
  try {
    console.log("Delete to :");
    console.log(serverURL + url + "/" + id);
    const response = yield call(axios, serverURL + url + "/" + id, {
      method : "DELETE",
      mode   : "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type"               : "application/json"
      },
      withCredentials: true,
      credentials    : "same-origin"
    });
    console.log(response);
    yield put(successHandler());
  }
  catch (e) {
    yield put(failHandler(e.message));
  }
}
