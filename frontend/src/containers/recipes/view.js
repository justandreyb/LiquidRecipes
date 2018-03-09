import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { RecipeViewComponent } from "../../components/index";

import {
  getRecipe,
  selectRecipeData,
  cleanRecipeWorkspace
} from "../../modules/recipes/recipe"

import {
  getRecipeItems,
  selectRecipeItemsData,
  createRecipeItem,
  updateRecipeItem,
  deleteRecipeItem
} from "../../modules/recipes/recipe_items"

import {
  getRecipeComments,
  selectRecipeCommentsData,
  createRecipeComment,
  deleteRecipeComment
} from "../../modules/recipes/recipe_comments"

import {
  getRecipeLikes,
  selectRecipeLikesData,
  createRecipeLike,
  deleteRecipeLike
} from "../../modules/recipes/recipe_likes"

class RecipeContainer extends Component {

  componentWillMount() {
    this.props.actions.getRecipe(this.props.match.params.id);
    this.props.actions.getRecipeItems(this.props.match.params.id);
    this.props.actions.getRecipeComments(this.props.match.params.id);
    this.props.actions.getRecipeLikes(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.actions.cleanRecipeWorkspace()
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h3>Recipe</h3>
          <div className="row">
            <RecipeViewComponent
              recipe     ={this.props.recipe}
              items      ={this.props.items}
              comments   ={this.props.comments}
              likes      ={this.props.likes}
              interaction={this.props.interaction}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const RecipeView = connect(
  (state) => ({
    recipe  : selectRecipeData(state),
    items   : selectRecipeItemsData(state),
    comments: selectRecipeCommentsData(state),
    likes   : selectRecipeLikesData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getRecipe,
      getRecipeItems,
      getRecipeComments,
      getRecipeLikes,
      cleanRecipeWorkspace
    }, dispatch),
    interaction: bindActionCreators({
      createRecipeItem,
      updateRecipeItem,
      deleteRecipeItem,
      createRecipeComment,
      deleteRecipeComment,
      createRecipeLike,
      deleteRecipeLike
    }, dispatch)
  })
)(RecipeContainer);
