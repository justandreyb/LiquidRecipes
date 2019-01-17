
export const selectAccountContainer = (state) => state.containers.app.account.info;
export const selectUserData = (state) => selectAccountContainer(state).get("user");
export const selectIsAuthenticated = (state) => selectAccountContainer(state).get("authenticated");
export const selectIsRole = (state, role) => selectAccountContainer(state).get("roles").indexOf(role) > -1;
export const selectIsAdmin = (state) => selectIsRole(state, "admin");
