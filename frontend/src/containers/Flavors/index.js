import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { FlavorsComponent } from "../../components";

import {
  getFlavors,
  selectFlavorsData
} from "../../modules/Flavors"

class FlavorsContainer extends Component {

  componentWillMount() {
    this.props.actions.getFlavors()
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h3>Flavors</h3>
          <div className="row">
            <FlavorsComponent
              elements={this.props.flavors}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const Flavors = connect(
  (state) => ({
    flavors: selectFlavorsData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getFlavors
    }, dispatch)
  })
)(FlavorsContainer);
