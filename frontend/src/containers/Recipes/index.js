import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { RecipesComponent } from "../../components";

import {
  getRecipes,
  selectRecipesData
} from "../../modules/Recipes"

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
            <RecipesComponent
              elements={this.props.recipes}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const Recipes = connect(
  (state) => ({
    recipes: selectRecipesData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getRecipes
    }, dispatch)
  })
)(RecipesContainer);
