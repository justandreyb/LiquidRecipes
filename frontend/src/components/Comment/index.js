import React, {Component} from "react";

class Comment extends Component {
  render() {
    return (
      <div className="container">
        <p>{this.props.comment.text}</p>
      </div>
    );
  }
}

export const CommentComponent = Comment;
