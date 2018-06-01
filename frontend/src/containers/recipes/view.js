import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { RecipeViewComponent } from "../../components";

import {
  createRecipeComment,
  deleteRecipeComment,
  createRecipeLike,
  deleteRecipeLike
} from "../../modules/recipes/actions"
import {selectRecipeData} from "../../modules/recipes/selectors";

import {CommentsBlockComponent, LikeComponent} from "../../components";

class RecipeContainer extends Component {

  render() {
    const {
      interaction,
      recipe
    } = this.props;

    return (
      <div className="entity-view">
        <RecipeViewComponent
          recipe = {recipe}
        />
        <LikeComponent
          entityId = {recipe.id}
          likes = {recipe.likes}
          pressLike = {interaction.createRecipeLike}
          removeLike = {interaction.deleteRecipeLike}
        />
        <CommentsBlockComponent
          entityId = {recipe.id}
          comments = {recipe.comments}
          postComment = {interaction.createRecipeComment}
          deleteComment = {interaction.deleteRecipeComment}
        />
      </div>
    )
  }
}

export const RecipeView = connect(
  (state, props) => ({
    recipe: selectRecipeData(state, props.match.params.id)
  }),
  (dispatch) => ({
    interaction: bindActionCreators({
      createRecipeComment,
      deleteRecipeComment,
      createRecipeLike,
      deleteRecipeLike
    }, dispatch)
  })
)(RecipeContainer);
