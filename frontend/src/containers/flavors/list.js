import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { FlavorsListComponent } from "../../components/index";

import {
  getFlavors,
  selectFlavorsData
} from "../../modules/flavors/flavors"

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
            <FlavorsListComponent
              flavors={this.props.flavors}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const FlavorsList = connect(
  (state) => ({
    flavors: selectFlavorsData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getFlavors
    }, dispatch)
  })
)(FlavorsContainer);
