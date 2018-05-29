import React, {Component} from "react";
import {CommentFormComponent} from "./comment";
import {CommentsComponent} from "./comments";

class Comments extends Component {

  render() {
    const {
      comments,
      sendComment
    } = this.props;

    return (
      <div className="comments">
        <div className="comments__title">
          <label>Comments <span className={"badge"}>{comments.length}</span></label>
        </div>
        <CommentFormComponent
          processSubmit={sendComment}
        />
        <div className="comments__list">
          <CommentsComponent
            comments={comments}
          />
        </div>
      </div>
    );
  }
}

export const CommentsBlockComponent = Comments;
