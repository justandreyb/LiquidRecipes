import React, {Component} from "react";

import {NewsSingleItemComponent} from "./list_item"

class News extends Component {
  render() {
    let code;

    if (this.props.news.length === 0)
      code = <label>Nothing to show...</label>;
    else
      code = <div>{this.props.news.map((newsSingle) => this.createListItem(newsSingle))}</div>;

    return code;
  }

  createListItem(news) {
    return (
      <div key={news.id} className="well col-sm-4">
        <NewsSingleItemComponent
          news={news}
        />
      </div>
    );
  }
}

export const NewsListComponent = News;
