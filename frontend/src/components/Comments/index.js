import React, {Component} from "react";

// TODO: Make comment contains user with image

class Comments extends Component {
  static createListItem(comment) {
    return (
      <div key={comment.id} className="comments__container__list__view__item">
        <div className="comments__container__list__view__item__info">
          <div className="--flex">
            {/*
              <img src={comment.user.image} />
              <label>{comment.user.nickname}</label>
            */}
            <img src="http://via.placeholder.com/900x500"/>
            <label>{comment.id}</label>
          </div>
          <span className="--small-font --lighter-text-color --span-no-wrap">{comment.date}</span>
        </div>
        <p className="comments__container__list__view__item__text">{comment.text}</p>
      </div>
    );
  }

  render() {
    let code;

    if (this.props.comments.length === 0)
      code = <label className="comments__container__list__no-comments --lighter-text-color">There is no comments yet..</label>;
    else
      code = <div className="comments__container__list__view">{this.props.comments.map(Comments.createListItem)}</div>;

    return code;
  }
}

export const CommentsComponent = Comments;
