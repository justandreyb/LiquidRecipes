import {fromJS} from "immutable";
import {getElements} from "../../api";
import {takeLatest} from "redux-saga/effects";

// ---------------------- CONSTANTS ----------------------- //

const GET_NEWS_REQUEST = "GET_NEWS_REQUEST";
const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";
const GET_NEWS_FAIL = "GET_NEWS_FAIL";

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

// ----------------------- SAGAS ------------------------ //

function* getNewsRequest() {
  yield* getElements(NEWS_URL, getNewsSuccess, getNewsFail);
}

export function* watchNewsActions() {
  yield takeLatest(GET_NEWS_REQUEST, getNewsRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectNewsContainer = (state) => state.containers.news.list;
export const selectNewsData = (state) => selectNewsContainer(state).get("news");
