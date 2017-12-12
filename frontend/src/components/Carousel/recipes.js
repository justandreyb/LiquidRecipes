import React, {Component} from "react";
import {Carousel} from "react-bootstrap";

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
        <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
        <Carousel.Caption>
          <h3>{recipe.name}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}

export const RecipesCarouselComponent = RecipesCarousel;
