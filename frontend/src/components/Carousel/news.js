import React, {Component} from "react";
// import {Carousel} from "react-bootstrap";
import Link from "react-router-dom/es/Link";

class NewsCarousel extends Component {
  render() {
    let code;

    if (this.props.news.size === 0)
      code = <label>Nothing to show...</label>;
    // else
    //   code = <Carousel>{this.props.news.map((news) => this.createListItem(news))}</Carousel>;

    return code;
  }

 /* createListItem(news) {
    return (
      <Carousel.Item>
        <img width={600} height={600} alt="600x600" src={news.image.path} />
        <Carousel.Caption>
          <h3><Link to={"/news/" + news.id}>{news.title}</Link></h3>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }*/
}

export const NewsCarouselComponent = NewsCarousel;
