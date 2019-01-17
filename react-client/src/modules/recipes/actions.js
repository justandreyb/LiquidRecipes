import * as constants from "./constants";

export const getRecipes = () => ({
  type: constants.GET_RECIPES_REQUEST
});

export const getRecipesSuccess = (recipes) => ({
  type   : constants.GET_RECIPES_SUCCESS,
  payload: recipes
});

export const getRecipesFail = (error) => ({
  type   : constants.GET_RECIPES_FAIL,
  payload: error,
  error  : true
});

export const getTopRecipes = (number) => ({
  type   : constants.GET_RECIPES_REQUEST,
  payload: number
});

export const getTop10Recipes = () => ({
  type: constants.GET_RECIPES_REQUEST
});

export const getTopRecipesSuccess = (recipes) => ({
  type   : constants.GET_RECIPES_SUCCESS,
  payload: recipes
});

export const getTopRecipesFail = (error) => ({
  type   : constants.GET_RECIPES_FAIL,
  payload: error,
  error  : true
});


export const createRecipe = (recipe) => ({
  type   : constants.CREATE_RECIPE_REQUEST,
  payload: recipe
});

export const createRecipeSuccess = (recipe) => ({
  type   : constants.CREATE_RECIPE_SUCCESS,
  payload: recipe
});

export const createRecipeFail = (error) => ({
  type   : constants.CREATE_RECIPE_FAIL,
  payload: error,
  error  : true
});


export const updateRecipe = (recipe) => ({
  type   : constants.UPDATE_RECIPE_REQUEST,
  payload: recipe
});

export const updateRecipeSuccess = (recipe) => ({
  type   : constants.UPDATE_RECIPE_SUCCESS,
  payload: recipe
});

export const updateRecipeFail = (error) => ({
  type   : constants.UPDATE_RECIPE_FAIL,
  payload: error,
  error  : true
});


export const deleteRecipe = (recipeId) => ({
  type   : constants.DELETE_RECIPE_REQUEST,
  payload: recipeId
});

export const deleteRecipeSuccess = (recipeId) => ({
  type   : constants.DELETE_RECIPE_SUCCESS,
  payload: recipeId
});

export const deleteRecipeFail = (error) => ({
  type   : constants.DELETE_RECIPE_FAIL,
  payload: error,
  error  : true
});


export const createRecipeComment = (recipeId, comment) => ({
  type   : constants.CREATE_RECIPE_COMMENT_REQUEST,
  payload: {
    recipeId: recipeId,
    comment : comment
  }
});

export const createRecipeCommentSuccess = (recipeId, comment) => ({
  type   : constants.CREATE_RECIPE_COMMENT_SUCCESS,
  payload: {
    recipeId: recipeId,
    comment : comment
  }
});

export const createRecipeCommentFail = (error) => ({
  type   : constants.CREATE_RECIPE_COMMENT_FAIL,
  payload: error,
  error  : true
});


export const deleteRecipeComment = (recipeId, commentId) => ({
  type   : constants.DELETE_RECIPE_COMMENT_REQUEST,
  payload: {
    recipeId : recipeId,
    commentId: commentId
  }
});

export const deleteRecipeCommentSuccess = (recipeId, commentId) => ({
  type   : constants.DELETE_RECIPE_COMMENT_SUCCESS,
  payload: {
    recipeId : recipeId,
    commentId: commentId
  }
});

export const deleteRecipeCommentFail = (error) => ({
  type   : constants.DELETE_RECIPE_COMMENT_FAIL,
  payload: error,
  error  : true
});

export const createRecipeLike = (recipeId, like) => ({
  type   : constants.CREATE_RECIPE_LIKE_REQUEST,
  payload: {
    recipeId: recipeId,
    like    : like
  }
});

export const createRecipeLikeSuccess = (recipeId, like) => ({
  type   : constants.CREATE_RECIPE_LIKE_SUCCESS,
  payload: {
    recipeId: recipeId,
    like    : like
  }
});

export const createRecipeLikeFail = (error) => ({
  type   : constants.CREATE_RECIPE_LIKE_FAIL,
  payload: error,
  error  : true
});


export const deleteRecipeLike = (recipeId, likeId) => ({
  type   : constants.DELETE_RECIPE_LIKE_REQUEST,
  payload: {
    recipeId: recipeId,
    likeId  : likeId
  }
});

export const deleteRecipeLikeSuccess = (recipeId, likeId) => ({
  type   : constants.DELETE_RECIPE_LIKE_SUCCESS,
  payload: {
    recipeId: recipeId,
    likeId  : likeId
  }
});

export const deleteRecipeLikeFail = (error) => ({
  type   : constants.DELETE_RECIPE_LIKE_FAIL,
  payload: error,
  error  : true
});

export const getUserRecipes = () => ({
  type: constants.GET_USER_RECIPES_REQUEST
});

export const getUserRecipesSuccess = (data) => ({
  type   : constants.GET_USER_RECIPES_SUCCESS,
  payload: data
});

export const getUserRecipesFail = (error) => ({
  type   : constants.GET_USER_RECIPES_FAIL,
  payload: error,
  error  : true
});

export const addRecipeToUser = (recipe) => ({
  type   : constants.ADD_RECIPE_TO_USER_REQUEST,
  payload: recipe
});

export const addRecipeToUserSuccess = (recipe) => ({
  type   : constants.ADD_RECIPE_TO_USER_SUCCESS,
  payload: recipe
});

export const addRecipeToUserFail = (error) => ({
  type   : constants.ADD_RECIPE_TO_USER_FAIL,
  payload: error,
  error  : true
});

export const deleteRecipeFromUser = (recipeId) => ({
  type   : constants.DELETE_RECIPE_FROM_USER_REQUEST,
  payload: recipeId
});

export const deleteRecipeFromUserSuccess = (recipeId) => ({
  type   : constants.DELETE_RECIPE_FROM_USER_SUCCESS,
  payload: recipeId
});

export const deleteRecipeFromUserFail = (error) => ({
  type   : constants.DELETE_RECIPE_FROM_USER_FAIL,
  payload: error,
  error  : true
});

export const addItemToRecipe = (recipeId, item) => ({
  type   : constants.ADD_ITEM_TO_RECIPE_REQUEST,
  payload: {
    recipeId,
    item
  }
});

export const addItemToRecipeSuccess = (recipeId, item) => ({
  type   : constants.ADD_ITEM_TO_RECIPE_SUCCESS,
  payload: {
    recipeId,
    item
  }
});

export const addItemToRecipeFail = (error) => ({
  type   : constants.ADD_ITEM_TO_RECIPE_FAIL,
  payload: error,
  error  : true
});

export const deleteItemFromRecipe = (recipeId, itemId) => ({
  type   : constants.DELETE_ITEM_FROM_RECIPE_REQUEST,
  payload: {
    recipeId,
    itemId
  }
});

export const deleteItemFromRecipeSuccess = (recipeId, itemId) => ({
  type   : constants.DELETE_ITEM_FROM_RECIPE_SUCCESS,
  payload: {
    recipeId,
    itemId
  }
});

export const deleteItemFromRecipeFail = (error) => ({
  type   : constants.DELETE_ITEM_FROM_RECIPE_FAIL,
  payload: error,
  error  : true
});
