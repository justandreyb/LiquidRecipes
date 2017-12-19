import React, {Component} from "react";

import {RecipeItemComponent} from "./Item"

class Recipes extends Component {
  render() {
    let code;

    if (this.props.recipes.length === 0)
      code = <label>Nothing to show...</label>;
    else
      code = <div>{this.props.recipes.map((recipe) => this.createListItem(recipe))}</div>;

    return code;
  }

  createListItem(recipe) {
    return (
      <div key={recipe.id} className="well col-sm-4">
        <RecipeItemComponent
          recipe={recipe}
        />
      </div>
    );
  }
}

export const RecipesComponent = Recipes;
