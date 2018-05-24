import * as constants from "./constants";
import {initialState} from "./initialState";

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case constants.GET_FLAVORS_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case constants.GET_FLAVORS_SUCCESS:
    return state
      .set("list", action.payload)
      .set("loading", false)
      .set("error", null);

  case constants.GET_FLAVORS_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case constants.GET_TOP_FLAVORS_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case constants.GET_TOP_10_FLAVORS_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case constants.GET_TOP_FLAVORS_SUCCESS:
    return state
      .set("list", action.payload)
      .set("loading", false)
      .set("error", null);

  case constants.GET_TOP_FLAVORS_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case constants.CREATE_FLAVOR_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case constants.CREATE_FLAVOR_SUCCESS:
    return state

      // TODO: Put element in collection

      .set("flavor", action.payload)
      .set("loading", false)
      .set("error", null);

  case constants.CREATE_FLAVOR_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case constants.UPDATE_FLAVOR_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case constants.UPDATE_FLAVOR_SUCCESS:
    return state

      // TODO: Update element in collection

      .set("flavor", action.payload)
      .set("loading", false)
      .set("error", null);

  case constants.UPDATE_FLAVOR_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case constants.DELETE_FLAVOR_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case constants.DELETE_FLAVOR_SUCCESS:
    return state
      .updateIn(["list"], (arr) => arr.filter((val) => val.id !== action.payload))
      .updateIn(["userList"], (arr) => arr.filter((val) => val.id !== action.payload))
      .set("loading", false)
      .set("error", null);

  case constants.DELETE_FLAVOR_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case constants.CREATE_FLAVOR_COMMENT_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case constants.CREATE_FLAVOR_COMMENT_SUCCESS:
    return state

      // TODO: Update comments in element

      .updateIn(["comments"], (arr) => arr.concat(action.payload))
      .set("loading", false)
      .set("error", null);

  case constants.CREATE_FLAVOR_COMMENT_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  case constants.DELETE_FLAVOR_COMMENT_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case constants.DELETE_FLAVOR_COMMENT_SUCCESS:
    return state

    // TODO:

      .updateIn(["comments"],
        (arr) => arr.filter((val) => val.id !== action.payload))
      .set("loading", false)
      .set("error", null);

  case constants.DELETE_FLAVOR_COMMENT_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case constants.CREATE_FLAVOR_LIKE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case constants.CREATE_FLAVOR_LIKE_SUCCESS:
    return state

    // TODO:

    .updateIn(["likes"], (arr) => arr.concat(action.payload))
      .set("loading", false)
      .set("error", null);

  case constants.CREATE_FLAVOR_LIKE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case constants.DELETE_FLAVOR_LIKE_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case constants.DELETE_FLAVOR_LIKE_SUCCESS:
    return state

    // TODO:

    .updateIn(["likes"],
        (arr) => arr.filter((val) => val.id !== action.payload))
      .set("loading", false)
      .set("error", null);

  case constants.DELETE_FLAVOR_LIKE_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case constants.GET_USER_FLAVORS_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case constants.GET_USER_FLAVORS_SUCCESS:
    return state
      .set("userList", action.payload)
      .set("loading", false)
      .set("error", null);

  case constants.GET_USER_FLAVORS_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case constants.ADD_FLAVOR_TO_USER_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case constants.ADD_FLAVOR_TO_USER_SUCCESS:
    return state
      .updateIn(["userList"], (arr) => arr.concat(action.payload))
      .set("loading", false)
      .set("error", null);

  case constants.ADD_FLAVOR_TO_USER_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case constants.DELETE_FLAVOR_FROM_USER_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case constants.DELETE_FLAVOR_FROM_USER_SUCCESS:
    return state
      .updateIn(["userList"], (arr) => arr.filter((val) => val.id !== action.payload))
      .set("loading", false)
      .set("error", null);

  case constants.DELETE_FLAVOR_FROM_USER_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case constants.CLEAR_FLAVORS:
    return initialState;

  default:
    return state;
  }
};
