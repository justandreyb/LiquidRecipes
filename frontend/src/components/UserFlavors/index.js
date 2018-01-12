import React, {Component} from "react";

import {FlavorItemComponent} from "../Flavors/Item";

class UserFlavors extends Component {
  render() {
    let code;

    if (this.props.flavors.size === 0)
      code = <label>Nothing to show...</label>;
    else
      code = <ul>{this.props.flavors.map((flavor) => this.createListItem(flavor))}</ul>;

    return code;
  }

  createListItem(flavor) {
    return (
      <li key={flavor.id} className="well col-sm-4">
        <FlavorItemComponent
          flavor={flavor}
        />
        <label>Buttons add, delete</label>
      </li>
    );
  }
}

export const UserFlavorsComponent = UserFlavors;
