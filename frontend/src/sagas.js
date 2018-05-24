import {fork, all} from "redux-saga/effects";

import {watchAppActions} from "./modules/application";
import {watchAccountActions} from "./modules/user";

import {watchUserRecipesActions} from "./modules/recipes/user_recipes";

import {watchNewsActions} from "./modules/news/news_list";
import {watchNewsSingleActions} from "./modules/news/news";
import {watchNewsCommentsActions} from "./modules/news/news_comments";
import {watchNewsLikesActions} from "./modules/news/news_likes";
import {watchNewsImageActions} from "./modules/news/news_image";

import {watchFlavorsActions} from "./modules/flavor/sagas";

import {watchRecipesActions} from "./modules/recipes/recipes";
import {watchRecipeActions} from "./modules/recipes/recipe";
import {watchRecipeCommentsActions} from "./modules/recipes/recipe_comments";
import {watchRecipeLikesActions} from "./modules/recipes/recipe_likes";
import {watchRecipeItemsActions} from "./modules/recipes/recipe_items";

import {watchManufacturersActions} from "./modules/manufacturers";
import {watchImagesActions} from "./modules/images";
import {watchCountriesActions} from "./modules/countries";

import {watchNotificationsActions} from "./utils/notificator";

const sagas = [
  watchAppActions,
  watchAccountActions,

  watchUserRecipesActions,

  watchNewsActions,
  watchNewsSingleActions,
  watchNewsCommentsActions,
  watchNewsLikesActions,
  watchNewsImageActions,

  watchFlavorsActions,

  watchRecipesActions,
  watchRecipeActions,
  watchRecipeCommentsActions,
  watchRecipeLikesActions,
  watchRecipeItemsActions,

  watchManufacturersActions,
  watchImagesActions,
  watchCountriesActions,

  watchNotificationsActions
];

export default function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}
