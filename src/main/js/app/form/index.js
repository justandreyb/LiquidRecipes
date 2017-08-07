import assign from 'lodash.assign';

// ----------------------- CONSTANTS ----------------------- //

const FORM_INITIALIZED = 'FORM_INITIALIZED';
const FIELD_REGISTRED = 'FIELD_REGISTRED';
const FIELD_GOT_FOCUS = 'FIELD_GOT_FOCUS';
const FIELD_CHANGE = 'FIELD_CHANGE';
const FIELD_LOST_FOCUS = 'FIELD_LOST_FOCUS';
const FORM_CLEARED = 'FORM_CLEARED';

// ----------------------- INITIAL STATE ----------------------- //

const initialState = {
  values: {}
};

// ------------------------- REDUCER ------------------------- //

const formReducer = (state = initialState, action) => {
  switch(action.type) {
    case FORM_INITIALIZED:
      return state;

    case FIELD_REGISTRED:
      return state;

    case FIELD_GOT_FOCUS:
      return state;

    case FIELD_CHANGE:
      return assign({}, state, {
        values: assign({}, state.values, {
          [action.payload.name]: action.payload.value
        })
      });

    case FIELD_LOST_FOCUS:
      return state;

    case FORM_CLEARED:
      return initialState;

    default:
      return state;
  }
};

// ------------------------- ACTIONS ------------------------- //

export const initializeFormAction = () => ({
  type: FORM_INITIALIZED
});

export const registerFieldAction = () => ({
  type: FIELD_REGISTRED
});

export const getFocusOnFieldAction = () => ({
  type: FIELD_GOT_FOCUS
});

export const changeFieldAction = (name, value) => ({
  type: FIELD_CHANGE,
  payload: { name, value }
});

export const blurFocusOnFieldAction = () => ({
  type: FIELD_LOST_FOCUS
});

export const clearFormAction = () => ({
  type: FORM_CLEARED
});

// ------------------------- API ------------------------- //

export const changeField = (name, value) => {
  return dispatch => dispatch(changeFieldAction(name, value));
};

export default formReducer;
