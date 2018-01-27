import {fromJS} from "immutable";

// ---------------------- CONSTANTS ----------------------- //

const AUTH_MODAL_SHOW = "AUTH_MODAL_SHOW";
const AUTH_MODAL_CLOSE = "AUTH_MODAL_CLOSE";
const AUTH_MODAL_SWITCH_TO_SIGN_IN = "AUTH_MODAL_SWITCH_TO_SIGN_IN";
const AUTH_MODAL_SWITCH_TO_SIGN_UP = "AUTH_MODAL_SWITCH_TO_SIGN_UP";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  showModal  : false,
  switchState: true
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case AUTH_MODAL_SHOW:
    return state
      .set("showModal", true);

  case AUTH_MODAL_CLOSE:
    return initialState;

  case AUTH_MODAL_SWITCH_TO_SIGN_IN:
    return state
      .set("switchState", false);

  case AUTH_MODAL_SWITCH_TO_SIGN_UP:
    return state
      .set("switchState", true);

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const showAuthModal = () => ({
  type: AUTH_MODAL_SHOW
});

export const closeAuthModal = () => ({
  type: AUTH_MODAL_CLOSE
});

export const switchToSignIn = () => ({
  type: AUTH_MODAL_SWITCH_TO_SIGN_IN
});

export const switchToSignUp = () => ({
  type: AUTH_MODAL_SWITCH_TO_SIGN_UP
});

// ------------------ SELECTORS -------------------- //

export const selectAccountContainer = (state) => state.containers.app.modals.auth;
export const selectStateOfModal = (state) => selectAccountContainer(state).get("showModal");
export const selectStateOfSwitcher = (state) => selectAccountContainer(state).get("switchState");
