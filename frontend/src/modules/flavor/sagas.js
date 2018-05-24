import takeLatest from "redux-saga/es/internal/sagaHelpers/takeLatest";
import takeEvery from "redux-saga/es/internal/sagaHelpers/takeEvery";

import * as api from "../../api";
import * as constants from "./constants";
import * as actions from "./actions";


export function* watchFlavorsActions() {
  yield takeLatest(constants.GET_FLAVORS_REQUEST, getFlavorsRequest);
  yield takeLatest(constants.GET_TOP_FLAVORS_REQUEST, getTopFlavorsRequest);
  yield takeLatest(constants.GET_TOP_10_FLAVORS_REQUEST, getTop10FlavorsRequest);
  yield takeEvery(constants.CREATE_FLAVOR_REQUEST, createFlavorRequest);
  yield takeEvery(constants.UPDATE_FLAVOR_REQUEST, updateFlavorRequest);
  yield takeEvery(constants.DELETE_FLAVOR_REQUEST, deleteFlavorRequest);
  yield takeEvery(constants.CREATE_FLAVOR_COMMENT_REQUEST, createFlavorCommentRequest);
  yield takeEvery(constants.DELETE_FLAVOR_COMMENT_REQUEST, deleteFlavorCommentRequest);
  yield takeEvery(constants.CREATE_FLAVOR_LIKE_REQUEST, createFlavorLikeRequest);
  yield takeEvery(constants.DELETE_FLAVOR_LIKE_REQUEST, deleteFlavorLikeRequest);
  yield takeLatest(constants.GET_USER_FLAVORS_REQUEST, getUserFlavorsRequest);
  yield takeEvery(constants.ADD_FLAVOR_TO_USER_REQUEST, addFlavorToUserRequest);
  yield takeEvery(constants.DELETE_FLAVOR_FROM_USER_REQUEST, deleteFlavorFromUserRequest);
}

function* getFlavorsRequest() {
  yield* api.getElements(constants.URL, actions.getFlavorsSuccess, actions.getFlavorsFail);
}

function* getTopFlavorsRequest(action) {
  yield* api.getElements("/flavors/top/" + action.payload, actions.getTopFlavorsSuccess, actions.getTopFlavorsFail);
}

function* getTop10FlavorsRequest() {
  yield* api.getElements("/flavors/top", actions.getTopFlavorsSuccess, actions.getTopFlavorsFail);
}

function* createFlavorRequest(action) {
  yield api.sendElement(constants.URL, action.payload, actions.createFlavorSuccess, actions.createFlavorFail);
}

function* updateFlavorRequest(action) {
  yield api.updateElement(constants.URL, action.payload.id, action.payload, actions.updateFlavorSuccess, actions.updateFlavorFail);
}

function* deleteFlavorRequest(action) {
  yield api.deleteElement(constants.URL, action.payload, actions.deleteFlavorSuccess, actions.deleteFlavorFail);
}

function* createFlavorCommentRequest(action) {
  yield api.sendElement(
    constants.URL + "/" + action.payload.flavorId + "/comments",
    action.payload.comment,
    actions.createFlavorCommentSuccess,
    actions.createFlavorCommentFail
  );
}

function* deleteFlavorCommentRequest(action) {
  yield api.deleteElement(
	  constants.URL + "/" + action.payload.flavorId + "/comments",
    action.payload.commentId,
	  actions.deleteFlavorCommentSuccess,
	  actions.deleteFlavorCommentFail
  );
}

function* createFlavorLikeRequest(action) {
  yield api.sendElement(
	  constants.URL + "/" + action.payload.flavorId + "/likes",
    action.payload.like,
	  actions.createFlavorLikeSuccess,
	  actions.createFlavorLikeFail
  );
}

function* deleteFlavorLikeRequest(action) {
  yield api.deleteElement(
	  constants.URL + "/" + action.payload.flavorId + "/likes",
    action.payload.likeId,
	  actions.deleteFlavorLikeSuccess,
	  actions.deleteFlavorLikeFail
  );
}

function* getUserFlavorsRequest() {
  yield* api.getElements(constants.USER_URL, actions.getUserFlavorsSuccess, actions.getUserFlavorsFail);
}

function* addFlavorToUserRequest(action) {
  yield* api.sendElement(constants.USER_URL, action.payload, actions.addFlavorToUserSuccess, actions.addFlavorToUserFail);
}

function* deleteFlavorFromUserRequest(action) {
  yield* api.deleteElement(constants.USER_URL, action.payload, actions.deleteFlavorFromUserSuccess, actions.deleteFlavorFromUserFail);
}
