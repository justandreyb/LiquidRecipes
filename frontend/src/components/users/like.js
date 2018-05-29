import React, {Component} from "react";

class Like extends Component {

  putLike() {
    if (!this.props.pressed)
      this.props.interaction.createLike(this.props.entityId);
    else
      this.props.interaction.removeLike(this.props.entityId);

  }

  render() {
    return (
      <div onClick={this.putLike.bind(this)} className={"likes --clickable " + (this.props.pressed ? " liked" : "")}>
        <span className="likes__symbol" role="img" aria-label="Like symbol">❤</span>️
        <label className="likes__info --clickable">{this.props.likes.length === 0 ? "No likes" : this.props.likes.length}</label>
      </div>
    );
  }
}

export const LikeComponent = Like;
