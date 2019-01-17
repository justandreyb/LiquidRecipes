import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { RecipesListComponent } from "../../components";

import {getRecipes} from "../../modules/recipes/actions"
import {selectRecipesData} from "../../modules/recipes/selectors";

class RecipesContainer extends Component {

  componentWillMount() {
    this.props.actions.getRecipes()
  }

  render() {
    return (
      <div className="entity-list">
        <div className="entity-list__header">
          <h3>Recipes</h3>
        </div>
        <RecipesListComponent
          cssClass={"entity-list__items"}
          cssClassForItem={"entity-list__item"}
          recipes={this.props.recipes}
        />
        <div className="entity-list__footer">
          Paginator
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
