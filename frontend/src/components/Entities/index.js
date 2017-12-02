import React, {Component} from "react";

import {EntityItemComponent} from "./Entity/listItem"

class Entities extends Component {
  static createListItem(element) {
    return (
      <li key={element.id} className="well col-sm-4">
        <EntityItemComponent
          entity={element}
        />
      </li>
    );
  }

  showEntities() {
    let code;

    if (this.props.elements.size === 0)
      code = <label>Nothing to show...</label>;
    else
      code = <ul>{this.props.elements.map(Entities.createListItem)}</ul>;

    return code;
  }

  render() {
    return (
      this.showEntities()
    );
  }
}

export const EntitiesComponent = Entities;
