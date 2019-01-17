import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {RecipeFormComponent} from "../../components";

import {getFlavors} from "../../modules/flavors/actions";
import {addItemToRecipe, deleteItemFromRecipe, updateRecipe} from "../../modules/recipes/actions";
import {selectFlavorsData} from "../../modules/flavors/selectors";
import {selectRecipeData} from "../../modules/recipes/selectors";

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
  (store, props) => ({
    recipe : selectRecipeData(store, props.match.id),
    flavors: selectFlavorsData(store)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      updateRecipe,
      addItemToRecipe,
      deleteItemFromRecipe,
      getFlavors
    }, dispatch)
  })
)(RecipeEditContainer);
