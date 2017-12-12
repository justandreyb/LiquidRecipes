import React, {Component} from "react";
import {Carousel} from "react-bootstrap";

class NewsCarousel extends Component {
  render() {
    let code;

    if (this.props.news.size === 0)
      code = <label>Nothing to show...</label>;
    else
      code = <Carousel>{this.props.news.map((news) => this.createListItem(news))}</Carousel>;

    return code;
  }

  createListItem(news) {
    return (
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
        <Carousel.Caption>
          <h3>{news.title}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}

export const NewsCarouselComponent = NewsCarousel;
