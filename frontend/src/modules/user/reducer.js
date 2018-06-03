import * as constants from "./constants"
import * as store from "./initialState";

export const reducer = (state = store.initialState, action) => {
  switch (action.type) {

  case constants.SIGN_UP_REQUEST: return handleRequest(state);
  case constants.SIGN_UP_FAIL:    return handleFail(state, action);
  case constants.SIGN_UP_SUCCESS:
    return state;


  case constants.GET_TOKEN_REQUEST: return handleRequest(state);
  case constants.GET_TOKEN_FAIL:
    return state
      .set("auth", {})
      .set("loading", false)
      .set("error", action.payload);
  case constants.GET_TOKEN_SUCCESS:
    return state
      .set("auth", action.payload)
      .set("loading", false)
      .set("error", null);


  case constants.LOAD_ACCOUNT_REQUEST: return handleRequest(state);
  case constants.LOAD_ACCOUNT_FAIL:
    return state
      .set("loading", false)
      .set("roles", ["guest"])
      .set("authenticated", false)
      .set("error", action.payload);
  case constants.LOAD_ACCOUNT_SUCCESS:
    return state
      .set("user", {
        id              : action.payload.id,
        name            : action.payload.name,
        email           : action.payload.email,
        registrationDate: action.payload.registrationDate
      })
      .set("roles", action.payload.roles.map((role) => role.name))
      .set("authenticated", true)
      .set("loading", false)
      .set("error", null);



  case constants.LOGOUT_REQUEST: return handleRequest(state);
  case constants.LOGOUT_FAIL:    return handleFail(state, action);
  case constants.LOGOUT_SUCCESS:
    return store.initialState;


  case constants.CLEAN_ACCOUNT_DATA:
    return store.initialState;

  default:
    return state;
  }
};

const handleRequest = function (state) {
  return state
    .set(store.loading, true)
    .set(store.error, null);
};

const handleFail = function (state, action) {
  return state
    .set(store.loading, false)
    .set(store.error, action.payload);
};
