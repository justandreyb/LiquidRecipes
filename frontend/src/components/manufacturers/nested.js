import React, {Component} from "react";
import {URL} from "../../settings";

class Manufacturer extends Component {

  render() {
    const {
      manufacturer,
      visibleName
    } = this.props;

    const css = "manufacturer-nested";

    return (
      <div className={css}>
        <img className={css + "__logo"} alt={manufacturer.name} src={URL + manufacturer.logo.path}/>
        {visibleName &&
          <label className={css + "__name"}>{manufacturer.name}</label>
        }
      </div>
    );
  }
}

export const ManufacturerNestedComponent = Manufacturer;
