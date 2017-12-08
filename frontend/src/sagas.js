import {fork, all} from "redux-saga/effects";

import {watchAppActions} from "./modules/App/index";
import {watchAccountActions} from "./modules/Account/index";

import {watchUserFlavorsActions} from "./modules/UserFlavors";
import {watchUserRecipesActions} from "./modules/UserRecipes";

import {watchNewsActions} from "./modules/News";
import {watchNewsSingleActions} from "./modules/NewsSingle";
import {watchNewsCommentsActions} from "./modules/NewsComments";
import {watchNewsLikesActions} from "./modules/NewsLikes";

import {watchFlavorsActions} from "./modules/Flavors";
import {watchFlavorActions} from "./modules/Flavor";
import {watchFlavorCommentsActions} from "./modules/FlavorComments";
import {watchFlavorLikesActions} from "./modules/FlavorLikes";

import {watchRecipesActions} from "./modules/Recipes";
import {watchRecipeActions} from "./modules/Recipe";
import {watchRecipeCommentsActions} from "./modules/RecipeComments";
import {watchRecipeLikesActions} from "./modules/RecipeLikes";
import {watchRecipeItemsActions} from "./modules/RecipeItems";

import {watchManufacturersActions} from "./modules/Manufacturers";
import {watchImagesActions} from "./modules/Images";
import {watchCountriesActions} from "./modules/Countries";

const sagas = [
  watchAppActions,
  watchAccountActions,

  watchUserFlavorsActions,
  watchUserRecipesActions,

  watchNewsActions,
  watchNewsSingleActions,
  watchNewsCommentsActions,
  watchNewsLikesActions,

  watchFlavorsActions,
  watchFlavorActions,
  watchFlavorCommentsActions,
  watchFlavorLikesActions,

  watchRecipesActions,
  watchRecipeActions,
  watchRecipeCommentsActions,
  watchRecipeLikesActions,
  watchRecipeItemsActions,

  watchManufacturersActions,
  watchImagesActions,
  watchCountriesActions
];

export default function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}
