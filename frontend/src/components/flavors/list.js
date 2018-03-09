import React, {Component} from "react";

import {FlavorItemComponent} from "./list_item"

class Flavors extends Component {
  render() {
    let code;

    if (this.props.flavors.length === 0)
      code = <label>Nothing to show...</label>;
    else
      code = <div>{this.props.flavors.map((flavor) => this.createListItem(flavor))}</div>;

    return code;
  }

  createListItem(flavor) {
    return (
      <div key={flavor.id} className="well col-sm-4">
        <FlavorItemComponent
          flavor={flavor}
        />
      </div>
    );
  }
}

export const FlavorsListComponent = Flavors;
