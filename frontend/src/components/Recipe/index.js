import React, {Component} from "react";

class Recipe extends Component {
  render() {
    return (
      <div className="container">
        <h3>{this.props.recipe.name}</h3>
      </div>
    );
  }
}

export const RecipeComponent = Recipe;
