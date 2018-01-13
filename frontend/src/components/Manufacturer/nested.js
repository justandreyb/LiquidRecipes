import React, {Component} from "react";
import {CommentFormComponent} from "../Comment/form";
import {CommentsComponent} from "../Comments";
import {LikeComponent} from "../Like";

class Manufacturer extends Component {
  //TODO: Get image

  render() {
    return (
      <div className="--flex">
        <img src={this.props.manufacturer}/>
        <label>Created by {this.props.manufacturer.name}</label>
      </div>
    );
  }
}

export const ManufacturerNestedComponent = Manufacturer;
