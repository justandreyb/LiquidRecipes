import * as constants from "./constants"

export const signUp = (data) => ({
  type   : constants.SIGN_UP_REQUEST,
  payload: data
});

export const createAccountSuccess = () => ({
  type: constants.SIGN_UP_SUCCESS
});

export const createAccountFail = (error) => ({
  type   : constants.SIGN_UP_FAIL,
  payload: error,
  error  : true
});


export const signIn = (data) => ({
  type   : constants.GET_TOKEN_REQUEST,
  payload: data
});

export const getTokenSuccess = (data) => ({
  type   : constants.GET_TOKEN_SUCCESS,
  payload: data
});

export const getTokenFail = (error) => ({
  type   : constants.GET_TOKEN_FAIL,
  payload: error,
  error  : true
});


export const loadAccount = () => ({
  type: constants.LOAD_ACCOUNT_REQUEST
});

export const loadAccountSuccess = (data) => ({
  type   : constants.LOAD_ACCOUNT_SUCCESS,
  payload: data
});

export const loadAccountFail = (error) => ({
  type   : constants.LOAD_ACCOUNT_FAIL,
  payload: error,
  error  : true
});


export const logout = () => ({
  type: constants.LOGOUT_REQUEST
});

export const logoutSuccess = () => ({
  type: constants.LOGOUT_SUCCESS
});

export const logoutFail = (error) => ({
  type   : constants.LOGOUT_FAIL,
  payload: error,
  error  : true
});


export const cleanAccountData = () => ({
  type: constants.CLEAN_ACCOUNT_DATA
});
