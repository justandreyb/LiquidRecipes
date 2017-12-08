import {fromJS} from "immutable";
import {sendElement, getElement, updateElement, deleteElement} from "../../api";
import {takeEvery, takeLatest} from "redux-saga/effects";

import {RECIPES_URL} from "../Recipes";

// ---------------------- CONSTANTS ----------------------- //

const CREATE_RECIPE_REQUEST = "CREATE_RECIPE_REQUEST";
const CREATE_RECIPE_SUCCESS = "CREATE_RECIPE_SUCCESS";
const CREATE_RECIPE_FAIL = "CREATE_RECIPE_FAIL";

const GET_RECIPE_REQUEST = "GET_RECIPE_REQUEST";
const GET_RECIPE_SUCCESS = "GET_RECIPE_SUCCESS";
const GET_RECIPE_FAIL = "GET_RECIPE_FAIL";

const UPDATE_RECIPE_REQUEST = "UPDATE_RECIPE_REQUEST";
const UPDATE_RECIPE_SUCCESS = "UPDATE_RECIPE_SUCCESS";
const UPDATE_RECIPE_FAIL = "UPDATE_RECIPE_FAIL";

const DELETE_RECIPE_REQUEST = "DELETE_RECIPE_REQUEST";
const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
const DELETE_RECIPE_FAIL = "DELETE_RECIPE_FAIL";

export const CLEAN_RECIPE_WORKSPACE = "CLEAN_RECIPE_WORKSPACE";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  recipe : {},
  error  : null,
  loading: false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case CREATE_RECIPE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case CREATE_RECIPE_SUCCESS:
    return state
      .set("recipe", action.payload)
      .set("loading", false)
      .set("error", null);

  case CREATE_RECIPE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_RECIPE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_RECIPE_SUCCESS:
    return state
      .set("recipe", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_RECIPE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case UPDATE_RECIPE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case UPDATE_RECIPE_SUCCESS:
    return state
      .set("recipe", action.payload)
      .set("loading", false)
      .set("error", null);

  case UPDATE_RECIPE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_RECIPE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_RECIPE_SUCCESS:
    return state
      .set("recipe", action.payload)
      .set("loading", false)
      .set("error", null);

  case DELETE_RECIPE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  case CLEAN_RECIPE_WORKSPACE:
    return initialState;

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const createRecipe = (recipe) => ({
  type   : CREATE_RECIPE_REQUEST,
  payload: recipe
});

export const createRecipeSuccess = (recipe) => ({
  type   : CREATE_RECIPE_SUCCESS,
  payload: recipe
});

export const createRecipeFail = (error) => ({
  type   : CREATE_RECIPE_FAIL,
  payload: error,
  error  : true
});


export const getRecipe = (recipeId) => ({
  type   : GET_RECIPE_REQUEST,
  payload: recipeId
});

export const getRecipeSuccess = (recipe) => ({
  type   : GET_RECIPE_SUCCESS,
  payload: recipe
});

export const getRecipeFail = (error) => ({
  type   : GET_RECIPE_FAIL,
  payload: error,
  error  : true
});


export const updateRecipe = (recipe) => ({
  type   : UPDATE_RECIPE_REQUEST,
  payload: recipe
});

export const updateRecipeSuccess = (recipe) => ({
  type   : UPDATE_RECIPE_SUCCESS,
  payload: recipe
});

export const updateRecipeFail = (error) => ({
  type   : UPDATE_RECIPE_FAIL,
  payload: error,
  error  : true
});


export const deleteRecipe = (recipeId) => ({
  type   : DELETE_RECIPE_REQUEST,
  payload: recipeId
});

export const deleteRecipeSuccess = (recipeId) => ({
  type   : DELETE_RECIPE_SUCCESS,
  payload: recipeId
});

export const deleteRecipeFail = (error) => ({
  type   : DELETE_RECIPE_FAIL,
  payload: error,
  error  : true
});

export const cleanRecipeWorkspace = () => ({
  type: CLEAN_RECIPE_WORKSPACE
});

// ----------------------- SAGAS ------------------------ //

function* createRecipeRequest(action) {
  yield sendElement(RECIPES_URL, action.payload, createRecipeSuccess, createRecipeFail);
}

function* getRecipeRequest(action) {
  yield getElement(RECIPES_URL, action.payload, getRecipeSuccess, getRecipeFail);
}

function* updateRecipeRequest(action) {
  yield updateElement(RECIPES_URL, action.payload.id, action.payload, updateRecipeSuccess, updateRecipeFail);
}

function* deleteRecipeRequest(action) {
  yield deleteElement(RECIPES_URL, action.payload, deleteRecipeSuccess, deleteRecipeFail);
}

export function* watchRecipeActions() {
  yield takeEvery(CREATE_RECIPE_REQUEST, createRecipeRequest);
  yield takeLatest(GET_RECIPE_REQUEST, getRecipeRequest);
  yield takeEvery(UPDATE_RECIPE_REQUEST, updateRecipeRequest);
  yield takeEvery(DELETE_RECIPE_REQUEST, deleteRecipeRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectRecipeContainer = (state) => state.containers.recipes.target;
export const selectRecipeData = (state) => selectRecipeContainer(state).get("recipe");
