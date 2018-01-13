import React, {Component} from "react";
import {LikeComponent} from "../Like";
import {CommentsComponent} from "../Comments";
import {CommentFormComponent} from "../Comment/form";

class EntitySingle extends Component {

  checkAndSendComment(data) {
    this.props.interaction.createNewsComment(this.props.news.id, data);
  }

  render() {
    return (
      <div className="container-fluid">

        <div className="entity-view__container">

          <div className="entity-view__container__information">

            <div className="entity-view__container__information__bar">
              <div className="entity-view__container__information__bar__title">
                <label>{this.props.news.title}</label>
              </div>
              <div className="entity-view__container__information__bar__labels">
                <div className="entity-view__container__information__bar__labels__item">
                  <span className="badge">{this.props.news.creationDate}</span>
                </div>
              </div>
            </div>

            <div className="entity-view__container__information__main">
              <div className="entity-view__container__information__main__image">
                <img alt={"Image for " + this.props.news.title} src={this.props.image.path}/>
              </div>
              <div className="entity-view__container__information__main__description">{this.props.news.text}</div>
            </div>

          </div>

          <div className="entity-view__container__like">
            <LikeComponent
              entityId={this.props.news.id}
              likes={this.props.likes}
              interaction={this.props.interaction}
            />
          </div>

        </div>

        <hr/>

        <div className="comments__container">
          <div className="comments__container__title">
            <label>Comments <span className={"badge"}>{this.props.comments.length}</span></label>
          </div>
          <div className="comments__container__form">
            <CommentFormComponent
              onSubmit={this.checkAndSendComment.bind(this)}
            />
          </div>
          <div className="comments__container__list">
            <CommentsComponent
              comments={this.props.comments}
            />
          </div>
        </div>

      </div>
    );
  }
}

export const NewsSingleComponent = EntitySingle;
