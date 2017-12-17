import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {FlavorFormComponent} from "../../components";

import {createFlavor, selectEmptyFlavorData} from "../../modules/Flavor"

class FlavorCreateContainer extends Component {

  render() {
    return (
      <div className="container col-sm-10">
        <div className="text-center">
          <h3>Create new flavor</h3>
          <div className="row">
            <FlavorFormComponent
              flavor={this.props.flavor}
              target={this.props.actions.createFlavor}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const FlavorCreate = connect(
  () => ({
    flavor: selectEmptyFlavorData()
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      createFlavor
    }, dispatch)
  })
)(FlavorCreateContainer);
