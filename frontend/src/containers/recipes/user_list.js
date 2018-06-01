import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { RecipesListComponent } from "../../components";

import {
  getUserRecipes,
  addRecipeToUser,
  deleteRecipeFromUser
} from "../../modules/recipes/actions"
import {selectUserRecipesData} from "../../modules/recipes/selectors";

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
            <RecipesListComponent
              recipes    ={this.props.recipes}
              interaction={this.props.interaction}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const UserRecipesList = connect(
  (state) => ({
    recipes: selectUserRecipesData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getUserRecipes
    }, dispatch),
    interaction: bindActionCreators({
      addRecipeToUser,
      deleteRecipeFromUser
    }, dispatch)
  })
)(RecipesContainer);
