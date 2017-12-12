import React, {Component} from "react";
import {Link} from "react-router-dom";

const imageStyle = {
  width: "100%"
};

class NewsSingleItem extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/*<img src={this.props.news.img} className="img-responsive" style={imageStyle} alt={this.props.news.img}/>*/}
        <p><Link to={"/news/" + this.props.news.id}>{this.props.news.title}</Link></p>
      </div>
    );
  }
}

export const NewsSingleItemComponent = NewsSingleItem;
