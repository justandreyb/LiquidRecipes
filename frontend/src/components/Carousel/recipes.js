import React, {Component} from "react";
import {Carousel} from "react-bootstrap";
import Link from "react-router-dom/es/Link";

class RecipesCarousel extends Component {
  render() {
    let code;

    if (this.props.recipes.size === 0)
      code = <label>Nothing to show...</label>;
    else
      code = <Carousel>{this.props.recipes.map((recipe) => this.createListItem(recipe))}</Carousel>;

    return code;
  }

  createListItem(recipe) {
    return (
      <Carousel.Item>
        <img width={600} height={600} alt="900x500" src={recipe.image.path} />
        <Carousel.Caption>
          <h3><Link to={"/recipes/" + recipe.id}>{recipe.name}</Link></h3>
          <p>{recipe.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}

export const RecipesCarouselComponent = RecipesCarousel;
