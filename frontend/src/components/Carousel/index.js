import React, {Component} from "react";
import {Carousel} from "react-bootstrap";

class RootCarousel extends Component {
  render() {
    let code;

    if (this.props.elements.size === 0)
      code = <label>Nothing to show...</label>;
    else
      code = <Carousel>{this.props.elements.map((element) => this.createListItem(element))}</Carousel>;

    return code;
  }

  createListItem(element) {
    return (
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}

export const CarouselComponent = RootCarousel;
