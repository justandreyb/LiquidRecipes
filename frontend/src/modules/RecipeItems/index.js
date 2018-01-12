import {fromJS} from "immutable";
import {sendElement, deleteElement, getElements, updateElement} from "../../api";
import {takeEvery, takeLatest} from "redux-saga/effects";

import {CLEAN_RECIPE_WORKSPACE} from "../Recipe";
import {RECIPES_URL} from "../Recipes";

// ---------------------- CONSTANTS ----------------------- //

const CREATE_RECIPE_ITEM_REQUEST = "CREATE_RECIPE_ITEM_REQUEST";
const CREATE_RECIPE_ITEM_SUCCESS = "CREATE_RECIPE_ITEM_SUCCESS";
const CREATE_RECIPE_ITEM_FAIL = "CREATE_RECIPE_ITEM_FAIL";

const GET_RECIPE_ITEMS_REQUEST = "GET_RECIPE_ITEMS_REQUEST";
const GET_RECIPE_ITEMS_SUCCESS = "GET_RECIPE_ITEMS_SUCCESS";
const GET_RECIPE_ITEMS_FAIL = "GET_RECIPE_ITEMS_FAIL";

const UPDATE_RECIPE_ITEM_REQUEST = "UPDATE_RECIPE_ITEM_REQUEST";
const UPDATE_RECIPE_ITEM_SUCCESS = "UPDATE_RECIPE_ITEM_SUCCESS";
const UPDATE_RECIPE_ITEM_FAIL = "UPDATE_RECIPE_ITEM_FAIL";

const DELETE_RECIPE_ITEM_REQUEST = "DELETE_RECIPE_ITEM_REQUEST";
const DELETE_RECIPE_ITEM_SUCCESS = "DELETE_RECIPE_ITEM_SUCCESS";
const DELETE_RECIPE_ITEM_FAIL = "DELETE_RECIPE_ITEM_FAIL";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  items  : [],
  error  : null,
  loading: false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case CREATE_RECIPE_ITEM_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case CREATE_RECIPE_ITEM_SUCCESS:
    return state
      .updateIn(["items"], (arr) => arr.concat(action.payload))
      .set("loading", false)
      .set("error", null);

  case CREATE_RECIPE_ITEM_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_RECIPE_ITEMS_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_RECIPE_ITEMS_SUCCESS:
    return state
      .set("items", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_RECIPE_ITEMS_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case UPDATE_RECIPE_ITEM_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case UPDATE_RECIPE_ITEM_SUCCESS:
    return state
      .updateIn(["items"], (arr) => arr.concat(action.payload))
      .set("loading", false)
      .set("error", null);

  case UPDATE_RECIPE_ITEM_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_RECIPE_ITEM_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_RECIPE_ITEM_SUCCESS:
    return state
      .updateIn(["items"],
        (arr) => arr.filter((val) => val.id !== action.payload))
      .set("loading", false)
      .set("error", null);

  case DELETE_RECIPE_ITEM_FAIL:
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

export const createRecipeItem = (recipeId, item) => ({
  type   : CREATE_RECIPE_ITEM_REQUEST,
  payload: {
    recipeId: recipeId,
    item    : item
  }
});

export const createRecipeItemSuccess = (item) => ({
  type   : CREATE_RECIPE_ITEM_SUCCESS,
  payload: item
});

export const createRecipeItemFail = (error) => ({
  type   : CREATE_RECIPE_ITEM_FAIL,
  payload: error,
  error  : true
});


export const getRecipeItems = (recipeId) => ({
  type   : GET_RECIPE_ITEMS_REQUEST,
  payload: recipeId
});

export const getRecipeItemsSuccess = (items) => ({
  type   : GET_RECIPE_ITEMS_SUCCESS,
  payload: items
});

export const getRecipeItemsFail = (error) => ({
  type   : GET_RECIPE_ITEMS_FAIL,
  payload: error,
  error  : true
});


export const updateRecipeItem = (recipeId, item) => ({
  type   : CREATE_RECIPE_ITEM_REQUEST,
  payload: {
    recipeId: recipeId,
    item    : item
  }
});

export const updateRecipeItemSuccess = (item) => ({
  type   : CREATE_RECIPE_ITEM_SUCCESS,
  payload: item
});

export const updateRecipeItemFail = (error) => ({
  type   : CREATE_RECIPE_ITEM_FAIL,
  payload: error,
  error  : true
});


export const deleteRecipeItem = (recipeId, itemId) => ({
  type   : DELETE_RECIPE_ITEM_REQUEST,
  payload: {
    recipeId: recipeId,
    itemId  : itemId
  }
});

export const deleteRecipeItemSuccess = (itemId) => ({
  type   : DELETE_RECIPE_ITEM_SUCCESS,
  payload: itemId
});

export const deleteRecipeItemFail = (error) => ({
  type   : DELETE_RECIPE_ITEM_FAIL,
  payload: error,
  error  : true
});


// ----------------------- SAGAS ------------------------ //

function* createRecipeItemRequest(action) {
  yield sendElement(
    RECIPES_URL + "/" + action.payload.recipeId + "/items",
    action.payload.item,
    createRecipeItemSuccess,
    createRecipeItemFail
  );
}

function* getRecipeItemsRequest(action) {
  yield* getElements(
    RECIPES_URL + "/" + action.payload + "/items",
    getRecipeItemsSuccess,
    getRecipeItemsFail
  );
}

function* updateRecipeItemRequest(action) {
  yield updateElement(
    RECIPES_URL + "/" + action.payload.recipeId + "/items",
    action.payload.item,
    createRecipeItemSuccess,
    createRecipeItemFail
  );
}

function* deleteRecipeItemRequest(action) {
  yield deleteElement(
    RECIPES_URL + "/" + action.payload.recipeId + "/items",
    action.payload.itemId,
    deleteRecipeItemSuccess,
    deleteRecipeItemFail
  );
}

export function* watchRecipeItemsActions() {
  yield takeEvery(CREATE_RECIPE_ITEM_REQUEST, createRecipeItemRequest);
  yield takeLatest(GET_RECIPE_ITEMS_REQUEST, getRecipeItemsRequest);
  yield takeEvery(UPDATE_RECIPE_ITEM_REQUEST, updateRecipeItemRequest);
  yield takeEvery(DELETE_RECIPE_ITEM_REQUEST, deleteRecipeItemRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectRecipeItemContainer = (state) => state.containers.recipes.target.items;
export const selectRecipeItemsData = (state) => selectRecipeItemContainer(state).get("items");
