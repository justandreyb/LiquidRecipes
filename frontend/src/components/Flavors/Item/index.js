import React, {Component} from "react";
import {Link} from "react-router-dom";

const imageStyle = {
  width: "100%"
};

class FlavorItem extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/*<img src={this.props.news.img} className="img-responsive" style={imageStyle} alt={this.props.news.img}/>*/}
        <p><Link to={"/flavors/" + this.props.flavor.id}>{this.props.flavor.name}</Link></p>
      </div>
    );
  }
}

export const FlavorItemComponent = FlavorItem;
