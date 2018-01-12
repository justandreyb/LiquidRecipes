import React, {Component} from "react";

import {RecipeItemComponent} from "../Recipes/Item";

class UserRecipes extends Component {
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
        <label>Buttons add, delete</label>
      </li>
    );
  }
}

export const UserRecipesComponent = UserRecipes;
