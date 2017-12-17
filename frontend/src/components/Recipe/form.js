import React, {Component} from "react";

class RecipeForm extends Component {
  render() {
    return (
      <div className="container">
        <label>{this.props.likes.size}</label>
      </div>
    );
  }
}

export const RecipeFormComponent = RecipeForm;
