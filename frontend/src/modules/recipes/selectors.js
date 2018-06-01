export const selectRecipesContainer = (state) => state.containers.recipes;

export const selectRecipesData = (state) => selectRecipesContainer(state).get("list");
export const selectTopRecipesData = (state) => selectRecipesContainer(state).get("list");
export const selectUserRecipesData = (state) => selectRecipesContainer(state).get("userList");

export const selectRecipeData = (state, id) => selectRecipesData(state).find((recipe) => recipe.id === id);

export const selectRecipeComments = (state, id) => selectRecipeData(state, id).comments;
export const selectRecipeItems = (state, id) => selectRecipeData(state, id).items;
export const selectRecipeLikes = (state, id) => selectRecipeData(state, id).likes;
