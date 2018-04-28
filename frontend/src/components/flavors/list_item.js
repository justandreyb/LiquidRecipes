import React, {Component} from "react";
import {Link} from "react-router-dom";
import {URL} from "../../settings";

class FlavorItem extends Component {
  render() {
    const {
      key,
      cssClass,
      flavor
    } = this.props;

    return (
      <div key={key} className={cssClass ? cssClass : "item"}>
        <img src={URL + flavor.image.path} className="img-responsive" alt={"Image of " + flavor.name}/>
        <p><Link to={"/flavors/" + flavor.id}>{flavor.name}</Link></p>
      </div>
    );
  }
}

export const FlavorItemComponent = FlavorItem;
