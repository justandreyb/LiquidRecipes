import React, {Component} from "react";
import {Carousel} from "react-bootstrap";
import Link from "react-router-dom/es/Link";

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
        <img width={900} height={500} alt="900x500" src={flavor.image.path} />
        <Carousel.Caption>
          <h3><Link to={"/flavors/" + flavor.id}>{flavor.name}</Link></h3>
          <h2>{flavor.description}</h2>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}

export const FlavorsCarouselComponent = FlavorsCarousel;
