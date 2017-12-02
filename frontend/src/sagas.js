/**
 * Combine all of your components sagas
 * @file {projectDir}/src/sagas.js
 * @export sagas configuration
 *
 * @author justandreyb
 */

import {fork, all} from "redux-saga/effects";

import {watchAppActions} from "./modules/App/index";
import {watchAccountActions} from "./modules/Account/index";
import {watchEntityActions} from "./modules/Entity";
import {watchEntitiesActions} from "./modules/Entities";

/**
 * Array of sagas
 * When you add a new component, you must add his saga here
 */
const sagas = [
  watchAppActions,
  watchAccountActions,

  watchEntityActions,
  watchEntitiesActions
];

export default function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}
