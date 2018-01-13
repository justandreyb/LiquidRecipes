import React, {Component} from "react";

class Manufacturer extends Component {
  //TODO: Get image

  render() {
    return (
      <div className="--flex">
        <img alt={this.props.manufacturer.name} src={this.props.manufacturer}/>
        <label>Created by {this.props.manufacturer.name}</label>
      </div>
    );
  }
}

export const ManufacturerNestedComponent = Manufacturer;
