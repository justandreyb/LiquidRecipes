import React, {Component} from "react";
import {CommentFormComponent} from "../Comment/form";
import {CommentsComponent} from "../Comments";
import {LikeComponent} from "../Like";

class Flavor extends Component {

  checkAndSend(data) {
    console.log(this.props.flavor);
    this.props.interaction.createFlavorComment(this.props.flavor.id, data);
  }

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
          onSubmit={this.checkAndSend.bind(this)}
        />
        <CommentsComponent
          comments={this.props.comments}
        />
      </div>
    );
  }
}

export const FlavorComponent = Flavor;
