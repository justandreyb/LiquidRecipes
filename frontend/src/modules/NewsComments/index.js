import {fromJS} from "immutable";
import {sendElement, deleteElement, getElements} from "../../api";
import {takeEvery, takeLatest} from "redux-saga/effects";

import {CLEAN_NEWS_SINGLE_WORKSPACE} from "../NewsSingle";
import {NEWS_URL} from "../News";

// ---------------------- CONSTANTS ----------------------- //

const CREATE_NEWS_COMMENT_REQUEST = "CREATE_NEWS_COMMENT_REQUEST";
const CREATE_NEWS_COMMENT_SUCCESS = "CREATE_NEWS_COMMENT_SUCCESS";
const CREATE_NEWS_COMMENT_FAIL = "CREATE_NEWS_COMMENT_FAIL";

const GET_NEWS_COMMENTS_REQUEST = "GET_NEWS_COMMENTS_REQUEST";
const GET_NEWS_COMMENTS_SUCCESS = "GET_NEWS_COMMENTS_SUCCESS";
const GET_NEWS_COMMENTS_FAIL = "GET_NEWS_COMMENTS_FAIL";

const DELETE_NEWS_COMMENT_REQUEST = "DELETE_NEWS_COMMENT_REQUEST";
const DELETE_NEWS_COMMENT_SUCCESS = "DELETE_NEWS_COMMENT_SUCCESS";
const DELETE_NEWS_COMMENT_FAIL = "DELETE_NEWS_COMMENT_FAIL";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  comments: [],
  error   : null,
  loading : false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case CREATE_NEWS_COMMENT_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case CREATE_NEWS_COMMENT_SUCCESS:
    return state
      .updateIn(["comments"], (arr) => arr.push(action.payload))
      .set("loading", false)
      .set("error", null);

  case CREATE_NEWS_COMMENT_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_NEWS_COMMENTS_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_NEWS_COMMENTS_SUCCESS:
    return state
      .set("comments", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_NEWS_COMMENTS_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_NEWS_COMMENT_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_NEWS_COMMENT_SUCCESS:
    return state
      .updateIn(["comments"],
        (arr) => arr.filter((val) => val.id !== action.payload))
      .set("loading", false)
      .set("error", null);

  case DELETE_NEWS_COMMENT_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  case CLEAN_NEWS_SINGLE_WORKSPACE:
    return initialState;

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const createNewsComment = (newsId, comment) => ({
  type   : CREATE_NEWS_COMMENT_REQUEST,
  payload: {
    newsId : newsId,
    comment: comment
  }
});

export const createNewsCommentSuccess = (comment) => ({
  type   : CREATE_NEWS_COMMENT_SUCCESS,
  payload: comment
});

export const createNewsCommentFail = (error) => ({
  type   : CREATE_NEWS_COMMENT_FAIL,
  payload: error,
  error  : true
});


export const getNewsComments = (newsId) => ({
  type   : GET_NEWS_COMMENTS_REQUEST,
  payload: newsId
});

export const getNewsCommentsSuccess = (comments) => ({
  type   : GET_NEWS_COMMENTS_SUCCESS,
  payload: comments
});

export const getNewsCommentsFail = (error) => ({
  type   : GET_NEWS_COMMENTS_FAIL,
  payload: error,
  error  : true
});


export const deleteNewsComment = (newsId, commentId) => ({
  type   : DELETE_NEWS_COMMENT_REQUEST,
  payload: {
    newsId   : newsId,
    commentId: commentId
  }
});

export const deleteNewsCommentSuccess = (commentId) => ({
  type   : DELETE_NEWS_COMMENT_SUCCESS,
  payload: commentId
});

export const deleteNewsCommentFail = (error) => ({
  type   : DELETE_NEWS_COMMENT_FAIL,
  payload: error,
  error  : true
});


// ----------------------- SAGAS ------------------------ //

function* createNewsCommentRequest(action) {
  yield sendElement(
    NEWS_URL + "/" + action.payload.newsId + "/comments",
    action.payload.comment,
    createNewsCommentSuccess,
    createNewsCommentFail
  );
}

function* getNewsCommentsRequest(action) {
  yield* getElements(
    NEWS_URL + "/" + action.payload + "/comments",
    getNewsCommentsSuccess,
    getNewsCommentsFail
  );
}

function* deleteNewsCommentRequest(action) {
  yield deleteElement(
    NEWS_URL + "/" + action.payload.newsId + "/comments",
    action.payload.commentId,
    deleteNewsCommentSuccess,
    deleteNewsCommentFail
  );
}

export function* watchNewsCommentsActions() {
  yield takeEvery(CREATE_NEWS_COMMENT_REQUEST, createNewsCommentRequest);
  yield takeLatest(GET_NEWS_COMMENTS_REQUEST, getNewsCommentsRequest);
  yield takeEvery(DELETE_NEWS_COMMENT_REQUEST, deleteNewsCommentRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectNewsCommentContainer = (state) => state.containers.news.target.comments;
export const selectNewsCommentsData = (state) => selectNewsCommentContainer(state).get("comments");
