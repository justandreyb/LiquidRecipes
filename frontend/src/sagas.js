import {fork, all} from "redux-saga/effects";

import {watchAppActions} from "./modules/App/index";
import {watchAccountActions} from "./modules/Account/index";
import {watchEntityActions} from "./modules/Entity";
import {watchEntitiesActions} from "./modules/Entities";

const sagas = [
  watchAppActions,
  watchAccountActions,

  watchEntityActions,
  watchEntitiesActions,

  warchUserFlavorsActions,
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

  watchManufacturersActions,
  watchImagesActions
];

export default function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}
