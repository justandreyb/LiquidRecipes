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
      <div className="container-fluid">
        <div>
          <div className="col-md-10">
            <h3>{this.props.flavor.name}</h3>
          </div>
          <div className="col-md-2">
            <LikeComponent
              likes={this.props.likes}
            />
          </div>
        </div>
        <hr/>
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
