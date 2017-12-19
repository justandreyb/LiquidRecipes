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
      <div className="container">
        <div>
          <div className="col-md-10">
            <h2>{this.props.flavor.name} - TPA</h2>
            <h4>{this.props.flavor.type}</h4>
          </div>
        </div>
        <div className="col-md-2">
          <LikeComponent
            likes={this.props.likes}
          />
        </div>
        <hr/>
        <div className="container">
          <CommentFormComponent
            onSubmit={this.checkAndSend.bind(this)}
          />
        </div>
        <hr />
        <CommentsComponent
          comments={this.props.comments}
        />
      </div>
    );
  }
}

export const FlavorComponent = Flavor;
