/**
 * This directory contains components of your app.
 * In this dir you can create components which will render as html code
 *
 * For create new component you can use template components:
 *  {projectDir}/src/components/Entities/index.js - for list of components
 *  {projectDir}/src/components/Entities/Entity/single.js - for single component
 *  {projectDir}/src/components/Entities/Entity/listItem - for rendering component in list
 *
 * @file {projectDir}/src/components/index.js
 * @description Main file for components directory which provide
 * export point for all inner components
 *
 * @author justandreyb
 */

export {EntityComponent} from "./Entities/Entity/single";
export {EntityItemComponent} from "./Entities/Entity/listItem";
export {EntitiesComponent} from "./Entities/index";
