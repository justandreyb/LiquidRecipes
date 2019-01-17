import React, {Component} from "react";
import {Link} from "react-router-dom";
import {URL} from "../../settings";
import {ManufacturerNestedComponent} from "../manufacturers/nested";

class FlavorItem extends Component {
  render() {
    const {
      cssClass,
      flavor
    } = this.props;

    return (
      <Link to={"/flavors/" + flavor.id} className={cssClass ? cssClass + " entity-item" : "entity-item"}>
        <img src={URL + flavor.image.path} className="entity-item__image" alt={"Image of " + flavor.name}/>
        <div className="entity-item__info">
          <ManufacturerNestedComponent
            manufacturer={flavor.manufacturer}
          />
          <label className="entity-item__title --clickable">{flavor.name}</label>
          <span className="entity-item__label">{flavor.flavorType.name}</span>
        </div>
      </Link>
    );
  }
}

export const FlavorItemComponent = FlavorItem;
