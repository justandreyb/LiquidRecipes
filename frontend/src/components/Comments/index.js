import React, {Component} from "react";

import {CommentComponent} from "../Comment";

class Comments extends Component {
  static createListItem(element) {
    return (
      <li key={element.id} className="well col-sm-4">
        <CommentComponent
          comment={element}
        />
      </li>
    );
  }

  showComments() {
    let code;

    if (this.props.elements.size === 0)
      code = <label>No comments</label>;
    else
      code = <ul>{this.props.elements.map(Comments.createListItem)}</ul>;

    return code;
  }

  render() {
    return (
      this.showComments()
    );
  }
}

export const CommentsComponent = Comments;
