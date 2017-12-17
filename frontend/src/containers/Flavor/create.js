import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {FlavorFormComponent} from "../../components";

import {createFlavor} from "../../modules/Flavor"

class FlavorCreateContainer extends Component {

  checkAndSend(data) {
    console.log(data);
    this.props.actions.createFlavor(data);
  }

  render() {
    return (
      <div className="container col-sm-10">
        <div className="text-center">
          <h3>Create new flavor</h3>
          <div className="row">
            <FlavorFormComponent
              onSubmit={this.checkAndSend.bind(this)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const FlavorCreate = connect(
  (store) => ({}),
  (dispatch) => ({
    actions: bindActionCreators({
      createFlavor
    }, dispatch)
  })
)(FlavorCreateContainer);
