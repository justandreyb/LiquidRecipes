import React, {Component} from "react";
import {LikeComponent} from "../users/like";
import {ManufacturerNestedComponent} from "../manufacturers/nested";

class Flavor extends Component {
  render() {
    const {
      flavor,
      interaction
    } = this.props;

    console.log(flavor.name);

    return (
      <div className="entity-view">

        <div className="entity-view__information">

          <div className="entity-view__information__bar">
            <div className="entity-view__information__bar__title">
              <label>{flavor.name}</label>
            </div>
            <div className="entity-view__information__bar__labels">
              <div className="entity-view__information__bar__labels__item">
                <span className="label label-info --clickable">{flavor.flavorType.name}</span>
              </div>
            </div>
          </div>

          <div className="entity-view__information__main">
            <div className="entity-view__information__main__image">
              <img alt={"Image for " + flavor.name} src={flavor.image}/>
            </div>
            <div className="entity-view__information__main__description">{flavor.description}</div>
          </div>

          <div className="entity-view__information__additional">
            <ManufacturerNestedComponent
              manufacturer={flavor.manufacturer}
            />
          </div>

        </div>

        <div className="entity-view__like">
          <LikeComponent
            entityId={flavor.id}
            likes={flavor.likes}
            interaction={interaction}
          />
        </div>

      </div>
    );
  }
}

export const FlavorViewComponent = Flavor;
