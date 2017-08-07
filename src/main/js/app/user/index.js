import * as api from '../../api';
import store from '../../store';
import toastr from 'toastr';

// ----------------------- CONSTANTS ----------------------- //

const USER_REGISTER_FAILED = 'USER_REGISTER_FAILED';
const USER_REGISTER_SUCCESSED = 'USER_REGISTER_SUCCESSED';
const USER_REGISTER_REQUESTED = 'USER_REGISTER_REQUESTED';

const USER_CHANGE_FAILED = 'USER_CHANGE_FAILED';
const USER_CHANGE_SUCCESSED = 'USER_CHANGE_SUCCESSED';
const USER_CHANGE_REQUESTED = 'USER_CHANGE_REQUESTED';

const USER_DELETE_FAILED = 'USER_DELETE_FAILED';
const USER_DELETE_SUCCESSED = 'USER_DELETE_SUCCESSED';
const USER_DELETE_REQUESTED = 'USER_DELETE_REQUESTED';

const USER_LOG_IN_FAILED = 'USER_LOG_IN_FAILED';
const USER_LOG_IN_SUCCESSED = 'USER_LOG_IN_SUCCESSED';
const USER_LOG_IN_REQUESTED = 'USER_LOG_IN_REQUESTED';

const USER_LOG_OUT_FAILED = 'USER_LOG_OUT_FAILED';
const USER_LOG_OUT_SUCCESSED = 'USER_LOG_OUT_SUCCESSED';
const USER_LOG_OUT_REQUESTED = 'USER_LOG_OUT_REQUESTED';

const USER_FLAVORS_LOAD_FAILED = 'USER_FLAVORS_LOAD_FAILED';
const USER_FLAVORS_LOAD_SUCCESSED = 'USER_FLAVORS_LOAD_SUCCESSED';
const USER_FLAVORS_LOAD_REQUESTED = 'USER_FLAVORS_LOAD_REQUESTED';

const USER_FLAVORS_SAVE_FAILED = 'USER_FLAVORS_SAVE_FAILED';
const USER_FLAVORS_SAVE_SUCCESSED = 'USER_FLAVORS_SAVE_SUCCESSED';
const USER_FLAVORS_SAVE_REQUESTED = 'USER_FLAVORS_SAVE_REQUESTED';

// ----------------------- INITIAL STATE ----------------------- //

const initialState = {
  logged: false,

  information: {
    nickname: '',
    email: '',
    addedFlavors: []
  }
};

// ----------------------- REDUCER ----------------------- //

const userReducer = (state = initialState, action) => {
  switch(action.type) {

    case USER_REGISTER_REQUESTED:
      return state;

    case USER_REGISTER_FAILED:
      return { ...state, logged: false };

    case USER_REGISTER_SUCCESSED:
      return { ...state, logged: true, information: action.payload.information };


    case USER_CHANGE_REQUESTED:
      return state;

    case USER_CHANGE_FAILED:
      return state;

    case USER_CHANGE_SUCCESSED:
      return { ...state, information: action.payload.information };


    case USER_DELETE_REQUESTED:
      return state;

    case USER_DELETE_FAILED:
      return state;

    case USER_DELETE_SUCCESSED:
      return initialState;


    case USER_LOG_IN_REQUESTED:
      return state;

    case USER_LOG_IN_FAILED:
      return state;

    case USER_LOG_IN_SUCCESSED:
      return { ...state, logged: true, information: action.payload.information };


    case USER_LOG_OUT_REQUESTED:
      return state;

    case USER_LOG_OUT_FAILED:
      return state;

    case USER_LOG_OUT_SUCCESSED:
      return initialState;


    case USER_FLAVORS_LOAD_REQUESTED:
      return state;

    case USER_FLAVORS_LOAD_FAILED:
      return state;

    case USER_FLAVORS_LOAD_SUCCESSED:
      return { ...state, information: { addedFlavors: action.payload } };


    case USER_FLAVORS_SAVE_REQUESTED:
      return state;

    case USER_FLAVORS_SAVE_FAILED:
      return state;

    case USER_FLAVORS_SAVE_SUCCESSED:
      return state;

    default:
      return state;
  }
};

// ---------------------- ACTION CREATORS ------------------------- //

export const registerUserRequest = () => ({
  type: USER_REGISTER_REQUESTED
});

export const registerUserFailed = err => ({
  type: USER_REGISTER_FAILED,
  payload: err
});

export const registerUserSuccess = (user) => ({
  type: USER_REGISTER_SUCCESSED,
  payload: {
    information: user
  }
});


export const changeUserRequest = () => ({
  type: USER_CHANGE_REQUESTED
});

export const changeUserFailed = err => ({
  type: USER_CHANGE_FAILED,
  payload: err
});

export const changeUserSuccess = (user) => ({
  type: USER_CHANGE_SUCCESSED,
  payload: {
    information: user
  }
});


export const deleteUserRequest = () => ({
  type: USER_DELETE_REQUESTED
});

export const deleteUserFailed = err => ({
  type: USER_DELETE_FAILED,
  payload: err
});

export const deleteUserSuccess = () => ({
  type: USER_DELETE_SUCCESSED
});


export const logInUserRequest = () => ({
  type: USER_LOG_IN_REQUESTED
});

export const logInUserFailed = err => ({
  type: USER_LOG_IN_FAILED,
  payload: err
});

export const logInUserSuccess = user => ({
  type: USER_LOG_IN_SUCCESSED,
  payload: user
});


export const logOutUserRequest = () => ({
  type: USER_LOG_OUT_REQUESTED
});

export const logOutUserFailed = err => ({
  type: USER_LOG_OUT_FAILED,
  payload: err
});

export const logOutUserSuccess = () => ({
  type: USER_LOG_OUT_SUCCESSED
});


export const loadFlavorsRequest = () => ({
  type: USER_FLAVORS_LOAD_REQUESTED
});

export const loadFlavorsFailed = err => ({
  type: USER_FLAVORS_LOAD_FAILED,
  payload: err
});

export const loadFlavorsSuccess = (flavors) => ({
  type: USER_FLAVORS_LOAD_SUCCESSED,
  payload: {
    information: {
      addedFlavors: flavors
    }
  }
});


export const saveFlavorsRequest = () => ({
  type: USER_FLAVORS_SAVE_REQUESTED
});

export const saveFlavorsFailed = err => ({
  type: USER_FLAVORS_SAVE_FAILED,
  payload: err
});

export const saveFlavorsSuccess = () => ({
  type: USER_FLAVORS_SAVE_SUCCESSED
});


// ----------------------- API CALL ----------------------- //

export const registerUser = (user) => {
  store.dispatch(registerUserRequest());
  api.save(user, '/user')
    .then((response) => {
      store.dispatch(registerUser(response.data));
      toastr.success('Completed successful');
    })
    .catch((error) => {
      store.dispatch(registerUserFailed(error));
      toastr.error('Registration failed');
    });
};

export const loadFlavors = (userUUID) => {
  const usersFlavorsPath = `/user/${ userUUID }/flavors`;

  api.get(usersFlavorsPath)
    .then((response) => {
      store.dispatch(loadFlavorsSuccess(response.data));
    })
    .catch((error) => {
      store.dispatch(loadFlavorsFailed(error));
      toastr.error('Your flavors wasn\'t updated');
    });
};

export default userReducer;
