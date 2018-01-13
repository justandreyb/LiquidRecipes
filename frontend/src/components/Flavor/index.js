import React, {Component} from "react";
import {CommentFormComponent} from "../Comment/form";
import {CommentsComponent} from "../Comments";
import {LikeComponent} from "../Like";
import {ManufacturerNestedComponent} from "../Manufacturer/nested";

class Flavor extends Component {

  checkAndSendComment(data) {
    this.props.interaction.createFlavorComment(this.props.flavor.id, data);
  }

  render() {
    return (
      <div className="container-fluid">

        <div className="entity-view__container">

          <div className="entity-view__container__information">

            <div className="entity-view__container__information__bar">
              <div className="entity-view__container__information__bar__title">
                <label>{this.props.flavor.name}</label>
              </div>
              <div className="entity-view__container__information__bar__labels">
                <div className="entity-view__container__information__bar__labels__item">
                  <span className="label label-info --clickable">{this.props.flavor.type}</span>
                </div>
              </div>
            </div>

            <div className="entity-view__container__information__main">
              <div className="entity-view__container__information__main__image">
                <img alt={"Image for " + this.props.flavor.name} src={this.props.image.path}/>
              </div>
              <div className="entity-view__container__information__main__description">{this.props.flavor.description}</div>
            </div>

            <div className="entity-view__container__information__additional">
              <ManufacturerNestedComponent
                manufacturer={this.props.manufacturer}
              />
            </div>

          </div>

          <div className="entity-view__container__like">
            <LikeComponent
              entityId={this.props.flavor.id}
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

export const FlavorComponent = Flavor;
