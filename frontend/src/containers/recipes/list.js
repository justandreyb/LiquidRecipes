import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { RecipesListComponent } from "../../components/index";

import {
  getRecipes,
  selectRecipesData
} from "../../modules/recipes/recipes"

class RecipesContainer extends Component {

  componentWillMount() {
    this.props.actions.getRecipes()
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h3>Recipes</h3>
          <div className="row">
            <RecipesListComponent
              recipes={this.props.recipes}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const RecipesList = connect(
  (state) => ({
    recipes: selectRecipesData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getRecipes
    }, dispatch)
  })
)(RecipesContainer);
