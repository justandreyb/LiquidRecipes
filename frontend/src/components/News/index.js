import React, {Component} from "react";

import {NewsSingleItemComponent} from "./Item"

class News extends Component {
  render() {
    let code;

    if (this.props.news.size === 0)
      code = <label>Nothing to show...</label>;
    else
      code = <ul>{this.props.news.map((newsSingle) => this.createListItem(newsSingle))}</ul>;

    return code;
  }

  createListItem(news) {
    return (
      <li key={news.id} className="well col-sm-4">
        <NewsSingleItemComponent
          news={news}
        />
      </li>
    );
  }
}

export const NewsComponent = News;
