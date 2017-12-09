import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { RecipeComponent } from "../../components";

import {
  getRecipe,
  selectRecipeData
} from "../../modules/Recipe"

class RecipeContainer extends Component {

  componentWillMount() {
    this.props.actions.getRecipe()
  }

  // TODO : Write cycle for items

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h3>Recipe</h3>
          <div className="row">
            <RecipeComponent
              elements={this.props.recipe}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const Recipe = connect(
  (state) => ({
    recipe: selectRecipeData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getRecipe
    }, dispatch)
  })
)(RecipeContainer);
