import React, {Component} from "react";
import {URL} from "../../settings";

class Manufacturer extends Component {

  render() {
    const {
      cssClass,
      manufacturer,
      visibleName
    } = this.props;

    const css = "manufacturer-nested";

    return (
      <div className={cssClass ? cssClass + " " + css : css}>
        {visibleName &&
          <label className={css + "__name"}>Created by </label>
        }
	      <img className={css + "__logo"} alt={manufacturer.name} src={URL + manufacturer.logo.path}/>
      </div>
    );
  }
}

export const ManufacturerNestedComponent = Manufacturer;
