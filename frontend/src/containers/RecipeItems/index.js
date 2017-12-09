import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { RecipeItemComponent } from "../../components";

import {
  getRecipeItems,
  cleanRecipeItemWorkspace,
  selectRecipeItemData
} from "../../modules/RecipeItems"

class RecipeItemContainer extends Component {

  componentWillMount() {
    this.props.actions.getRecipeItems(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.actions.cleanRecipeItemWorkspace()
  }

  render() {
    return (
      <div className="container col-sm-10">
        <div className="text-center">
          <h3>Items</h3>
          <div className="row">
            <RecipeItemComponent
              item={this.props.recipeItem}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const RecipeItem = connect(
  (state) => ({
    recipeItem: selectRecipeItemData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getRecipeItems,
      cleanRecipeItemWorkspace
    }, dispatch)
  })
)(RecipeItemContainer);
