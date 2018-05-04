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

        <div className="flavor-view__header">
          <label className="flavor-view__title">{flavor.name}</label>
          <span className="flavor-view__label">{flavor.flavorType.name}</span>
        </div>

        <div className="flavor-view__body">
          <div className="flavor-view__image">
            <img alt={"Image for " + flavor.name} src={URL + flavor.image.path}/>
          </div>
          <div className="flavor-view__info">
	          <ManufacturerNestedComponent
		          cssClass="flavor-view__manufacturer"
		          manufacturer={flavor.manufacturer}
              visibleName={true}
	          />
            <div className="flavor-view__description">{flavor.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export const FlavorViewComponent = Flavor;
