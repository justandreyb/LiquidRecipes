import React, {Component} from "react";

import {CommentComponent} from "../Comment";

class Comments extends Component {
  static createListItem(comment) {
    return (
      <li key={comment.id} className="well col-sm-4">
        <CommentComponent
          comment={comment}
        />
      </li>
    );
  }

  render() {
    let code;

    if (this.props.comments.size === 0)
      code = <label>No comments</label>;
    else
      code = <ul>{this.props.comments.map(Comments.createListItem)}</ul>;

    return code;
  }
}

export const CommentsComponent = Comments;
