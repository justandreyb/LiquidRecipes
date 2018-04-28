import React, {Component} from "react";
import {CommentFormComponent} from "../users/comment";
import {CommentsComponent} from "../users/comments";
import {LikeComponent} from "../users/like";
import {ManufacturerNestedComponent} from "../manufacturers/nested";

class Flavor extends Component {

  checkAndSendComment(data) {
    this.props.interaction.createFlavorComment(this.props.flavor.id, data);
  }

  render() {
    const {
      flavor,
      interaction
    } = this.props;

    console.log(flavor.name);

    return (
      <div className="container-fluid">

        <div className="entity-view__container">

          <div className="entity-view__container__information">

            <div className="entity-view__container__information__bar">
              <div className="entity-view__container__information__bar__title">
                <label>{flavor.name}</label>
              </div>
              <div className="entity-view__container__information__bar__labels">
                <div className="entity-view__container__information__bar__labels__item">
                  <span className="label label-info --clickable">{flavor.flavorType.name}</span>
                </div>
              </div>
            </div>

            <div className="entity-view__container__information__main">
              <div className="entity-view__container__information__main__image">
                <img alt={"Image for " + flavor.name} src={flavor.image}/>
              </div>
              <div className="entity-view__container__information__main__description">{flavor.description}</div>
            </div>

            <div className="entity-view__container__information__additional">
              <ManufacturerNestedComponent
                manufacturer={flavor.manufacturer}
              />
            </div>

          </div>

          <div className="entity-view__container__like">
            <LikeComponent
              entityId={flavor.id}
              likes={flavor.likes}
              interaction={interaction}
            />
          </div>

        </div>

        <hr/>

        <div className="comments__container">
          <div className="comments__container__title">
            <label>Comments <span className={"badge"}>{flavor.comments}</span></label>
          </div>
          <div className="comments__container__form">
            <CommentFormComponent
              processSubmit={this.checkAndSendComment.bind(this)}
            />
          </div>
          <div className="comments__container__list">
            <CommentsComponent
              comments={flavor.comments}
            />
          </div>
        </div>

      </div>
    );
  }
}

export const FlavorViewComponent = Flavor;
