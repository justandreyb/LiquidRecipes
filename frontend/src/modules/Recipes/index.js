import {fromJS} from "immutable";
import {getElements} from "../../api";
import {takeLatest} from "redux-saga/effects";

// ---------------------- CONSTANTS ----------------------- //

const GET_RECIPES_REQUEST = "GET_RECIPES_REQUEST";
const GET_RECIPES_SUCCESS = "GET_RECIPES_SUCCESS";
const GET_RECIPES_FAIL = "GET_RECIPES_FAIL";

const GET_TOP_10_RECIPES_REQUEST = "GET_TOP_RECIPES_REQUEST";
const GET_TOP_RECIPES_REQUEST = "GET_TOP_RECIPES_REQUEST";
const GET_TOP_RECIPES_SUCCESS = "GET_TOP_RECIPES_SUCCESS";
const GET_TOP_RECIPES_FAIL = "GET_TOP_RECIPES_FAIL";

const CLEAR_TOP_RECIPES_WORKSPACE = "CLEAR_TOP_RECIPES_WORKSPACE";

export const RECIPES_URL = "/recipes";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  recipes: [],
  top    : [],
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


  case GET_TOP_RECIPES_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_TOP_10_RECIPES_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_TOP_RECIPES_SUCCESS:
    return state
      .set("top", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_TOP_RECIPES_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  case CLEAR_TOP_RECIPES_WORKSPACE:
    return state
      .set("top", initialState.top)
      .set("loading", false)
      .set("error", null);

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

export const getTopRecipes = (number) => ({
  type   : GET_RECIPES_REQUEST,
  payload: number
});

export const getTop10Recipes = () => ({
  type: GET_RECIPES_REQUEST
});

export const getTopRecipesSuccess = (recipes) => ({
  type   : GET_RECIPES_SUCCESS,
  payload: recipes
});

export const getTopRecipesFail = (error) => ({
  type   : GET_RECIPES_FAIL,
  payload: error,
  error  : true
});

export const clearTopRecipesWorkspace = () => ({
  type: CLEAR_TOP_RECIPES_WORKSPACE
});

// ----------------------- SAGAS ------------------------ //

function* getRecipesRequest() {
  yield* getElements("/recipes", getRecipesSuccess, getRecipesFail);
}

function* getTopRecipesRequest(action) {
  yield* getElements("/recipes/top/" + action.payload, getTopRecipesSuccess, getTopRecipesFail);
}

function* getTop10RecipesRequest() {
  yield* getElements("/recipes/top", getTopRecipesSuccess, getTopRecipesFail);
}

export function* watchRecipesActions() {
  yield takeLatest(GET_RECIPES_REQUEST, getRecipesRequest);
  yield takeLatest(GET_TOP_RECIPES_REQUEST, getTopRecipesRequest);
  yield takeLatest(GET_TOP_10_RECIPES_REQUEST, getTop10RecipesRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectRecipesContainer = (state) => state.containers.recipes.list;
export const selectRecipesData = (state) => selectRecipesContainer(state).get("recipes");
export const selectTopRecipesData = (state) => selectRecipesContainer(state).get("top");
