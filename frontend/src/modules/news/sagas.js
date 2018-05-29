import takeLatest from "redux-saga/es/internal/sagaHelpers/takeLatest";
import takeEvery from "redux-saga/es/internal/sagaHelpers/takeEvery";

import * as api from "../../api";
import * as constants from "./constants";
import * as actions from "./actions";


export function* watchNewsActions() {
  yield takeLatest(constants.GET_NEWS_REQUEST, getNewsRequest);
  yield takeLatest(constants.GET_TOP_NEWS_REQUEST, getTopNewsRequest);
  yield takeLatest(constants.GET_TOP_10_NEWS_REQUEST, getTop10NewsRequest);
  yield takeEvery(constants.CREATE_SINGLE_NEWS_REQUEST, createSingleNewsRequest);
  yield takeEvery(constants.UPDATE_SINGLE_NEWS_REQUEST, updateSingleNewsRequest);
  yield takeEvery(constants.DELETE_SINGLE_NEWS_REQUEST, deleteSingleNewsRequest);
  yield takeEvery(constants.CREATE_SINGLE_NEWS_COMMENT_REQUEST, createSingleNewsCommentRequest);
  yield takeEvery(constants.DELETE_SINGLE_NEWS_COMMENT_REQUEST, deleteSingleNewsCommentRequest);
  yield takeEvery(constants.CREATE_SINGLE_NEWS_LIKE_REQUEST, createSingleNewsLikeRequest);
  yield takeEvery(constants.DELETE_SINGLE_NEWS_LIKE_REQUEST, deleteSingleNewsLikeRequest);
  yield takeLatest(constants.GET_USER_NEWS_REQUEST, getUserNewsRequest);
  yield takeEvery(constants.ADD_SINGLE_NEWS_TO_USER_REQUEST, addSingleNewsToUserRequest);
  yield takeEvery(constants.DELETE_SINGLE_NEWS_FROM_USER_REQUEST, deleteSingleNewsFromUserRequest);
}

function* getNewsRequest() {
  yield* api.getElements(constants.URL, actions.getNewsSuccess, actions.getNewsFail);
}

function* getTopNewsRequest(action) {
  yield* api.getElements("/news/top/" + action.payload, actions.getTopNewsSuccess, actions.getTopNewsFail);
}

function* getTop10NewsRequest() {
  yield* api.getElements("/news/top", actions.getTopNewsSuccess, actions.getTopNewsFail);
}

function* createSingleNewsRequest(action) {
  yield api.sendElement(constants.URL, action.payload, actions.createSingleNewsSuccess, actions.createSingleNewsFail);
}

function* updateSingleNewsRequest(action) {
  yield api.updateElement(constants.URL, action.payload.id, action.payload, actions.updateSingleNewsSuccess, actions.updateSingleNewsFail);
}

function* deleteSingleNewsRequest(action) {
  yield api.deleteElement(constants.URL, action.payload, actions.deleteSingleNewsSuccess, actions.deleteSingleNewsFail);
}

function* createSingleNewsCommentRequest(action) {
  yield api.sendElement(
    constants.URL + "/" + action.payload.singleNewsId + "/comments",
    action.payload.comment,
    actions.createSingleNewsCommentSuccess,
    actions.createSingleNewsCommentFail
  );
}

function* deleteSingleNewsCommentRequest(action) {
  yield api.deleteElement(
	  constants.URL + "/" + action.payload.singleNewsId + "/comments",
    action.payload.commentId,
	  actions.deleteSingleNewsCommentSuccess,
	  actions.deleteSingleNewsCommentFail
  );
}

function* createSingleNewsLikeRequest(action) {
  yield api.sendElement(
	  constants.URL + "/" + action.payload.singleNewsId + "/likes",
    action.payload.like,
	  actions.createSingleNewsLikeSuccess,
	  actions.createSingleNewsLikeFail
  );
}

function* deleteSingleNewsLikeRequest(action) {
  yield api.deleteElement(
	  constants.URL + "/" + action.payload.singleNewsId + "/likes",
    action.payload.likeId,
	  actions.deleteSingleNewsLikeSuccess,
	  actions.deleteSingleNewsLikeFail
  );
}

function* getUserNewsRequest() {
  yield* api.getElements(constants.USER_URL, actions.getUserNewsSuccess, actions.getUserNewsFail);
}

function* addSingleNewsToUserRequest(action) {
  yield* api.sendElement(constants.USER_URL, action.payload, actions.addSingleNewsToUserSuccess, actions.addSingleNewsToUserFail);
}

function* deleteSingleNewsFromUserRequest(action) {
  yield* api.deleteElement(constants.USER_URL, action.payload, actions.deleteSingleNewsFromUserSuccess, actions.deleteSingleNewsFromUserFail);
}
