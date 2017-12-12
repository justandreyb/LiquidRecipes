import React, {Component} from "react";

class Flavor extends Component {
  render() {
    return (
      <div className="container">
        <h3>{this.props.flavor.name}</h3>
      </div>
    );
  }
}

export const FlavorComponent = Flavor;
