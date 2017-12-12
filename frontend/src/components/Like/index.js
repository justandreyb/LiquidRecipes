import React, {Component} from "react";

class Like extends Component {
  render() {
    return (
      <div className="container">
        <label>{this.props.likes.size}</label>
      </div>
    );
  }
}

export const LikeComponent = Like;
