import {fromJS} from "immutable";
import {getElements} from "../../api";
import {takeLatest} from "redux-saga/effects";

import {DELETE_RECIPE_SUCCESS} from "../Recipe";

// ---------------------- CONSTANTS ----------------------- //

const GET_USER_RECIPES_REQUEST = "GET_USER_RECIPES_REQUEST";
const GET_USER_RECIPES_SUCCESS = "GET_USER_RECIPES_SUCCESS";
const GET_USER_RECIPES_FAIL = "GET_USER_RECIPES_FAIL";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  recipes: [],
  error  : null,
  loading: false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case GET_USER_RECIPES_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_USER_RECIPES_SUCCESS:
    return state
      .set("recipes", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_USER_RECIPES_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  case DELETE_RECIPE_SUCCESS:
    return state
      .updateIn(["recipes"], (arr) => arr.filter((val) => val.id !== action.payload))
      .set("loading", false)
      .set("error", null);

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const getUserRecipes = () => ({
  type: GET_USER_RECIPES_REQUEST
});

export const getUserRecipesSuccess = (data) => ({
  type   : GET_USER_RECIPES_SUCCESS,
  payload: data
});

export const getUserRecipesFail = (error) => ({
  type   : GET_USER_RECIPES_FAIL,
  payload: error,
  error  : true
});

// ----------------------- SAGAS ------------------------ //

function* getUserRecipesRequest() {
  yield* getElements("/im/recipes", getUserRecipesSuccess, getUserRecipesFail);
}

export function* watchUserRecipesActions() {
  yield takeLatest(GET_USER_RECIPES_REQUEST, getUserRecipesRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectUserRecipesContainer = (state) => state.containers.app.account.recipes;
export const selectUserRecipesData = (state) => selectUserRecipesContainer(state).get("recipes");
