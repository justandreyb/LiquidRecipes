import React, {Component} from "react";
import {ManufacturerNestedComponent} from "../manufacturers/nested";
import {URL} from "../../settings";

class Flavor extends Component {
  render() {
    const {
      flavor,
      interaction
    } = this.props;

    console.log(flavor.name);

    return (
      <div className="flavor-view">

        <div className="flavor-view__bar">
          <div className="flavor-view__bar__title">
            <label>{flavor.name}</label>
          </div>
          <div className="flavor-view__bar__labels">
            <div className="flavor-view__bar__labels__item">
              <span className="label label-info --clickable">{flavor.flavorType.name}</span>
            </div>
          </div>
        </div>

        <div className="flavor-view__main">
          <div className="flavor-view__main__image">
            <img alt={"Image for " + flavor.name} src={URL + flavor.image.path}/>
          </div>
          <div className="flavor-view__main__description">{flavor.description}</div>
        </div>

        <div className="flavor-view__additional">
          <ManufacturerNestedComponent
            manufacturer={flavor.manufacturer}
          />
        </div>

      </div>
    );
  }
}

export const FlavorViewComponent = Flavor;
