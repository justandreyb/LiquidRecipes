import React, {Component} from "react";
import {Carousel} from "react-bootstrap";

class FlavorsCarousel extends Component {
  render() {
    let code;

    if (this.props.flavors.size === 0)
      code = <label>Nothing to show...</label>;
    else
      code = <Carousel>{this.props.flavors.map((flavor) => this.createListItem(flavor))}</Carousel>;

    return code;
  }

  createListItem(flavor) {
    return (
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
        <Carousel.Caption>
          <h3>{flavor.name}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}

export const FlavorsCarouselComponent = FlavorsCarousel;
