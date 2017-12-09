import React, {Component} from "react";

import {NewsSingleItemComponent} from "./NewsSingle/listItem"

class News extends Component {
  createListItem = (element) => {
    return (
      <li key={element.id} className="well col-sm-4">
        <NewsSingleItemComponent
          entity={element}
        />
      </li>
    );
  };

  render() {
    let code;

    if (this.props.elements.size === 0)
      code = <label>Nothing to show...</label>;
    else
      code = <ul>{this.props.elements.map(createListItem)}</ul>;

    return code;
  }
}

export const NewsComponent = News;
