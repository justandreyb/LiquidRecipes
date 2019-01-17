import React, {Component} from "react";

import {FlavorItemComponent} from "./list_item"

class Flavors extends Component {

  render() {
    const {
      cssClass,
      cssClassForItem,
      flavors
    } = this.props;

    let code;

    if (flavors.length === 0)
      code =
        <div className={cssClass ? cssClass + " --empty-list" : "items --empty-list"}>
          <label>Nothing to show...</label>;
        </div>;
    else
      code =
        <div className={cssClass ? cssClass : "items"}>
          {flavors.slice(0, 20).map((flavor) =>
            <FlavorItemComponent
              key={flavor.id}
              cssClass={cssClassForItem}
              flavor={flavor}
            />)
          }
        </div>;

    return code;
  }
}

export const FlavorsListComponent = Flavors;
