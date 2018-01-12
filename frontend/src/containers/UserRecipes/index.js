import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { RecipesComponent } from "../../components";

import {
  createRecipe,
  deleteRecipe
} from "../../modules/Recipe"

import {
  getUserRecipes,
  selectUserRecipesData
} from "../../modules/UserRecipes"

class RecipesContainer extends Component {

  componentWillMount() {
    this.props.actions.getUserRecipes()
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h3>Recipes</h3>
          <div className="row">
            <RecipesComponent
              recipes    ={this.props.recipes}
              interaction={this.props.interaction}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const UserRecipes = connect(
  (state) => ({
    recipes: selectUserRecipesData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getUserRecipes
    }, dispatch),
    interaction: bindActionCreators({
      createRecipe,
      deleteRecipe
    }, dispatch)
  })
)(RecipesContainer);
