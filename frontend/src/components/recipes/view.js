import React, {Component} from "react";
import {LikeComponent} from "../users/like";
import {CommentFormComponent} from "../users/comment";
import {CommentsComponent} from "../users/comments";

class Recipe extends Component {

  checkAndSend(data) {
    this.props.interaction.createRecipeComment(this.props.recipe.id, data);
  }

  render() {
    return (
      <div className="container">
        <div>
          <div className="col-md-10">
            <h2>{this.props.recipe.name}</h2>
          </div>
        </div>
        <div className="col-md-2">
          <LikeComponent
            likes={this.props.likes}
          />
        </div>

        <hr/>
        <CommentFormComponent
          onSubmit={this.checkAndSend.bind(this)}
        />
        <hr />
        <CommentsComponent
          comments={this.props.comments}
        />
      </div>
    );
  }
}

export const RecipeViewComponent = Recipe;
