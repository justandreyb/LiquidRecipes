export const selectFlavorsContainer = (state) => state.containers.flavors;

export const selectFlavorsData = (state) => selectFlavorsContainer(state).get("list");
export const selectTopFlavorsData = (state) => selectFlavorsContainer(state).get("list");
export const selectUserFlavorsData = (state) => selectFlavorsContainer(state).get("userList");

export const selectFlavorData = (state, id) => selectFlavorsData(state).find((flavor) => flavor.id === id);

export const selectFlavorComments = (state, id) => selectFlavorData(state, id).comments;
export const selectFlavorLikes = (state, id) => selectFlavorData(state, id).likes;
