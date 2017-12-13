import {fromJS} from "immutable";
import {getElements} from "../../api";
import {takeLatest} from "redux-saga/effects";

// ---------------------- CONSTANTS ----------------------- //

const GET_NEWS_REQUEST = "GET_NEWS_REQUEST";
const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";
const GET_NEWS_FAIL = "GET_NEWS_FAIL";

const GET_TOP_10_NEWS_REQUEST = "GET_TOP_NEWS_REQUEST";
const GET_TOP_NEWS_REQUEST = "GET_TOP_NEWS_REQUEST";
const GET_TOP_NEWS_SUCCESS = "GET_TOP_NEWS_SUCCESS";
const GET_TOP_NEWS_FAIL = "GET_TOP_NEWS_FAIL";

const CLEAR_TOP_NEWS_WORKSPACE = "CLEAR_TOP_NEWS_WORKSPACE";

export const NEWS_URL = "/news";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  news   : [],
  error  : null,
  loading: false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case GET_NEWS_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_NEWS_SUCCESS:
    return state
      .set("news", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_NEWS_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_TOP_NEWS_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_TOP_10_NEWS_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_TOP_NEWS_SUCCESS:
    return state
      .set("news", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_TOP_NEWS_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  case CLEAR_TOP_NEWS_WORKSPACE:
    return initialState;

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const getNews = () => ({
  type: GET_NEWS_REQUEST
});

export const getNewsSuccess = (news) => ({
  type   : GET_NEWS_SUCCESS,
  payload: news
});

export const getNewsFail = (error) => ({
  type   : GET_NEWS_FAIL,
  payload: error,
  error  : true
});

export const getTopNews = (number) => ({
  type   : GET_NEWS_REQUEST,
  payload: number
});

export const getTop10News = () => ({
  type: GET_NEWS_REQUEST
});

export const getTopNewsSuccess = (news) => ({
  type   : GET_NEWS_SUCCESS,
  payload: news
});

export const getTopNewsFail = (error) => ({
  type   : GET_NEWS_FAIL,
  payload: error,
  error  : true
});

export const clearTopNewsWorkspace = () => ({
  type: CLEAR_TOP_NEWS_WORKSPACE
});

// ----------------------- SAGAS ------------------------ //

function* getNewsRequest() {
  yield* getElements(NEWS_URL, getNewsSuccess, getNewsFail);
}

function* getTopNewsRequest(action) {
  yield* getElements("/news/top/" + action.payload, getTopNewsSuccess, getTopNewsFail);
}

function* getTop10NewsRequest() {
  yield* getElements("/news/top", getTopNewsSuccess, getTopNewsFail);
}

export function* watchNewsActions() {
  yield takeLatest(GET_NEWS_REQUEST, getNewsRequest);
  yield takeLatest(GET_TOP_NEWS_REQUEST, getTopNewsRequest);
  yield takeLatest(GET_TOP_10_NEWS_REQUEST, getTop10NewsRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectNewsContainer = (state) => state.containers.news.list;
export const selectNewsData = (state) => selectNewsContainer(state).get("news");
export const selectTopNewsData = (state) => selectNewsContainer(state).get("news");
