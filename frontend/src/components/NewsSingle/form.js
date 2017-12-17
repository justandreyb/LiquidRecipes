import React, {Component} from "react";

class NewsForm extends Component {
  render() {
    return (
      <div className="container">
        <label>{this.props.likes.size}</label>
      </div>
    );
  }
}

export const NewsFormComponent = NewsForm;
