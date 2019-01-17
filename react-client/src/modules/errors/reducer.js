export const errorReducer = (state = {}, action) => {
  const { type, payload, error } = action;
  const matches = /(.*)_(REQUEST|FAIL)/.exec(type);

  // not a *_REQUEST / *_FAILURE actions, so we ignore them

  if (!matches) return state;

  const [, requestName, requestState] = matches;

  return {
    ...state,

    // Store errorMessage

    [ requestName ]: requestState === "FAIL" && error ? payload : ""
  };
};
