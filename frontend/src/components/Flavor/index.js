import React, {Component} from "react";
import {CommentFormComponent} from "../Comment/form";
import {CommentsComponent} from "../Comments";
import {LikeComponent} from "../Like";

class Flavor extends Component {

  checkAndSendComment(data) {
    this.props.interaction.createFlavorComment(this.props.flavor.id, data);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="entity-view__container">
          <div className="entity-view__container__name-bar">
            <div className="entity-view__container__name-bar__name">
              <div className="entity-view__container__name-bar__name__title">
                <label>{this.props.flavor.name}</label>
              </div>
              <div className="entity-view__container__name-bar__name__additional">
                <span className="label label-info">{this.props.flavor.type}</span>
              </div>
            </div>
            <div className="entity-view__container__name-bar__like">
              <LikeComponent
                entityId={this.props.flavor.id}
                likes={this.props.likes}
                interaction={this.props.interaction}
              />
            </div>
          </div>
          <div className="entity-view__container__image">
            <img width={300} height={300} alt="Image was missed" src={this.props.image.path}/>
          </div>
          <div className="entity-view__container__description">{this.props.flavor.description}</div>
        </div>
        <div className="comments__container">
          <hr/>
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

export const FlavorComponent = Flavor;
