import React, {Component} from "react";

class Like extends Component {
  render() {
    return (
      <div className="container">
        <label>Likes: {this.props.likes.length === 0 ? "No" : this.props.likes.length}</label>
      </div>
    );
  }
}

export const LikeComponent = Like;
