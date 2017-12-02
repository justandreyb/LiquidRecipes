import React, {Component} from "react";
import {Link} from "react-router-dom";

const imageStyle = {
  width: "100%"
};

class EntityItem extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <img src={this.props.entity.img} className="img-responsive" style={imageStyle} alt={this.props.entity.img}/>
        <p><Link to={"/entities/" + this.props.entity.id}>{this.props.entity.name}</Link></p>
      </div>
    );
  }
}

export const EntityItemComponent = EntityItem;
