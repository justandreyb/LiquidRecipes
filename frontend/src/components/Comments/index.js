import React, {Component} from "react";

import {CommentComponent} from "../Comment";

class Comments extends Component {
  static createListItem(comment) {
    return (
      <div key={comment.id} className="well">
        <CommentComponent
          comment={comment}
        />
      </div>
    );
  }

  render() {
    let code;

    if (this.props.comments.length === 0)
      code = <label>No comments</label>;
    else
      code = <div className="container">{this.props.comments.map(Comments.createListItem)}</div>;

    return code;
  }
}

export const CommentsComponent = Comments;
