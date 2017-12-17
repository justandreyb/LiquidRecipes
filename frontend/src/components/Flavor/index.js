import React, {Component} from "react";
import {CommentFormComponent} from "../Comment/form";
import {CommentsComponent} from "../Comments";
import {LikeComponent} from "../Like";

class Flavor extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h3>{this.props.flavor.name}</h3>
          <LikeComponent
            likes={this.props.likes}
          />
        </div>
        <CommentFormComponent
          onCreate={this.props.interaction.createFlavorComment}
        />
        <CommentsComponent
          comments={this.props.comments}
        />
      </div>
    );
  }
}

export const FlavorComponent = Flavor;
