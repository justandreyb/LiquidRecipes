import takeLatest from "redux-saga/es/internal/sagaHelpers/takeLatest";
import takeEvery from "redux-saga/es/internal/sagaHelpers/takeEvery";

import * as api from "../../api";
import * as constants from "./constants";
import * as actions from "./actions";


export function* watchRecipesActions() {
  yield takeLatest(constants.GET_RECIPES_REQUEST, getRecipesRequest);
  yield takeLatest(constants.GET_TOP_RECIPES_REQUEST, getTopRecipesRequest);
  yield takeLatest(constants.GET_TOP_10_RECIPES_REQUEST, getTop10RecipesRequest);
  yield takeEvery(constants.CREATE_RECIPE_REQUEST, createRecipeRequest);
  yield takeEvery(constants.UPDATE_RECIPE_REQUEST, updateRecipeRequest);
  yield takeEvery(constants.DELETE_RECIPE_REQUEST, deleteRecipeRequest);
  yield takeEvery(constants.CREATE_RECIPE_COMMENT_REQUEST, createRecipeCommentRequest);
  yield takeEvery(constants.DELETE_RECIPE_COMMENT_REQUEST, deleteRecipeCommentRequest);
  yield takeEvery(constants.CREATE_RECIPE_LIKE_REQUEST, createRecipeLikeRequest);
  yield takeEvery(constants.DELETE_RECIPE_LIKE_REQUEST, deleteRecipeLikeRequest);
  yield takeLatest(constants.GET_USER_RECIPES_REQUEST, getUserRecipesRequest);
  yield takeEvery(constants.ADD_RECIPE_TO_USER_REQUEST, addRecipeToUserRequest);
  yield takeEvery(constants.DELETE_RECIPE_FROM_USER_REQUEST, deleteRecipeFromUserRequest);
  yield takeEvery(constants.ADD_ITEM_TO_RECIPE_REQUEST, addItemToRecipeRequest);
  yield takeEvery(constants.DELETE_ITEM_FROM_RECIPE_REQUEST, deleteItemFromRecipeRequest);
}

function* getRecipesRequest() {
  yield* api.getElements(constants.URL, actions.getRecipesSuccess, actions.getRecipesFail);
}

function* getTopRecipesRequest(action) {
  yield* api.getElements("/recipes/top/" + action.payload, actions.getTopRecipesSuccess, actions.getTopRecipesFail);
}

function* getTop10RecipesRequest() {
  yield* api.getElements("/recipes/top", actions.getTopRecipesSuccess, actions.getTopRecipesFail);
}

function* createRecipeRequest(action) {
  yield api.sendElement(constants.URL, action.payload, actions.createRecipeSuccess, actions.createRecipeFail);
}

function* updateRecipeRequest(action) {
  yield api.updateElement(constants.URL, action.payload.id, action.payload, actions.updateRecipeSuccess, actions.updateRecipeFail);
}

function* deleteRecipeRequest(action) {
  yield api.deleteElement(constants.URL, action.payload, actions.deleteRecipeSuccess, actions.deleteRecipeFail);
}

function* createRecipeCommentRequest(action) {
  yield api.sendElement(
    constants.URL + "/" + action.payload.recipeId + "/comments",
    action.payload.comment,
    actions.createRecipeCommentSuccess,
    actions.createRecipeCommentFail
  );
}

function* deleteRecipeCommentRequest(action) {
  yield api.deleteElement(
	  constants.URL + "/" + action.payload.recipeId + "/comments",
    action.payload.commentId,
	  actions.deleteRecipeCommentSuccess,
	  actions.deleteRecipeCommentFail
  );
}

function* createRecipeLikeRequest(action) {
  yield api.sendElement(
	  constants.URL + "/" + action.payload.recipeId + "/likes",
    action.payload.like,
	  actions.createRecipeLikeSuccess,
	  actions.createRecipeLikeFail
  );
}

function* deleteRecipeLikeRequest(action) {
  yield api.deleteElement(
	  constants.URL + "/" + action.payload.recipeId + "/likes",
    action.payload.likeId,
	  actions.deleteRecipeLikeSuccess,
	  actions.deleteRecipeLikeFail
  );
}

function* getUserRecipesRequest() {
  yield* api.getElements(constants.USER_URL, actions.getUserRecipesSuccess, actions.getUserRecipesFail);
}

function* addRecipeToUserRequest(action) {
  yield* api.sendElement(constants.USER_URL, action.payload, actions.addRecipeToUserSuccess, actions.addRecipeToUserFail);
}

function* deleteRecipeFromUserRequest(action) {
  yield* api.deleteElement(constants.USER_URL, action.payload, actions.deleteRecipeFromUserSuccess, actions.deleteRecipeFromUserFail);
}

function* addItemToRecipeRequest(action) {
  yield* api.sendElement(constants.URL + "/items", action.payload, actions.addItemToRecipeSuccess, actions.addItemToRecipeFail);
}

function* deleteItemFromRecipeRequest(action) {
  yield* api.deleteElement(constants.URL + "/items", action.payload, actions.deleteItemFromRecipeSuccess, actions.deleteItemFromRecipeFail);
}
