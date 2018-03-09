import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {RecipeFormComponent} from "../../components/index";

import {getFlavors, selectFlavorsData} from "../../modules/flavors/flavors";
import {getRecipe, selectRecipeData, updateRecipe} from "../../modules/recipes/recipe";
import {createRecipeItem, deleteRecipeItem, getRecipeItems} from "../../modules/recipes/recipe_items";

class RecipeEditContainer extends Component {

  componentWillMount() {
    this.props.actions.getFlavors()
  }

  checkAndSend(data) {
    console.log(data);
    this.props.actions.createRecipe(data);
  }

  render() {
    return (
      <div className="container col-sm-10">
        <div className="text-center">
          <h3>Create new flavor</h3>
          <div className="row">
            <RecipeFormComponent
              onSubmit={this.checkAndSend.bind(this)}
              flavors={this.props.flavors}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const RecipeEdit = connect(
  (store) => ({
    recipe : selectRecipeData(store),
    flavors: selectFlavorsData(store)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getRecipe,
      updateRecipe,
      createRecipeItem,
      deleteRecipeItem,
      getRecipeItems,
      getFlavors
    }, dispatch)
  })
)(RecipeEditContainer);
