export const loadingReducer = (state = {}, action) => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type);

  // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them

  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,

    [ requestName ]: requestState === "REQUEST"
  };
};
