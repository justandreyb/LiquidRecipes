import _ from "lodash";
export const createLoadingSelector = (actions) => (state) => {
  // returns true only when all actions is not loading

  return _(actions)
    .some((action) => _.get(state, `api.loading.${action}`));
};

export const selectIsLoading = (state) => {
  let loadingKeys = Object.keys(state.containers.app.workflow.loading);
  return loadingKeys.filter((key) => state.containers.app.workflow.loading[ key ]).length > 0;
};
