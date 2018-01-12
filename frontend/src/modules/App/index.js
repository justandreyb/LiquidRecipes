import {fromJS} from "immutable";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  applicationName: "Liquid Recipes"
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};


// ----------------------- SAGAS ------------------------ //

export function* watchAppActions() {
}

// ----------------- ACTIONS ----------------------- //


// ------------------ SELECTORS -------------------- //

export const selectAppContainer = (state) => state.containers.app.workspace;
export const selectApplicationName = (state) => selectAppContainer(state).get("applicationName");
