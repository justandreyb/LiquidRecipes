import {fork, all} from "redux-saga/effects";

import {watchAppActions} from "./modules/application";
import {watchAccountActions} from "./modules/user";

import {watchNewsActions} from "./modules/news/sagas";

import {watchFlavorsActions} from "./modules/flavors/sagas";

import {watchRecipesActions} from "./modules/recipes/sagas";

import {watchManufacturersActions} from "./modules/manufacturers";
import {watchImagesActions} from "./modules/images";
import {watchCountriesActions} from "./modules/countries";

import {watchNotificationsActions} from "./utils/notificator";

const sagas = [
  watchAppActions,
  watchAccountActions,

  watchNewsActions,

  watchFlavorsActions,

  watchRecipesActions,

  watchManufacturersActions,
  watchImagesActions,
  watchCountriesActions,

  watchNotificationsActions
];

export default function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}
