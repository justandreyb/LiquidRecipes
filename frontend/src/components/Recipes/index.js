import React, {Component} from "react";

import {RecipeItemComponent} from "./Item"

class Recipes extends Component {
  render() {
    let code;

    if (this.props.recipes.size === 0)
      code = <label>Nothing to show...</label>;
    else
      code = <ul>{this.props.recipes.map((recipe) => this.createListItem(recipe))}</ul>;

    return code;
  }

  createListItem(recipe) {
    return (
      <li key={recipe.id} className="well col-sm-4">
        <RecipeItemComponent
          recipe={recipe}
        />
      </li>
    );
  }
}

export const RecipesComponent = Recipes;
