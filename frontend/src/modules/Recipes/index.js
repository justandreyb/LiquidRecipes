import {fromJS} from "immutable";
import {getElements} from "../../api";
import {takeLatest} from "redux-saga/effects";

// ---------------------- CONSTANTS ----------------------- //

const GET_RECIPES_REQUEST = "GET_RECIPES_REQUEST";
const GET_RECIPES_SUCCESS = "GET_RECIPES_SUCCESS";
const GET_RECIPES_FAIL = "GET_RECIPES_FAIL";

export const RECIPES_URL = "/recipes";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  recipes: [],
  error  : null,
  loading: false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case GET_RECIPES_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_RECIPES_SUCCESS:
    return state
      .set("recipes", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_RECIPES_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const getRecipes = () => ({
  type: GET_RECIPES_REQUEST
});

export const getRecipesSuccess = (recipes) => ({
  type   : GET_RECIPES_SUCCESS,
  payload: recipes
});

export const getRecipesFail = (error) => ({
  type   : GET_RECIPES_FAIL,
  payload: error,
  error  : true
});

// ----------------------- SAGAS ------------------------ //

function* getRecipesRequest() {
  yield* getElements("/recipes", getRecipesSuccess, getRecipesFail);
}

export function* watchRecipesActions() {
  yield takeLatest(GET_RECIPES_REQUEST, getRecipesRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectRecipesContainer = (state) => state.containers.recipes.list;
export const selectRecipesData = (state) => selectRecipesContainer(state).get("recipes");
