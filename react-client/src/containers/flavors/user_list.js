import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { FlavorsListComponent } from "../../components";

import {
  getUserFlavors,
  addFlavorToUser,
  deleteFlavorFromUser
} from "../../modules/flavors/actions"
import {selectUserFlavorsData} from "../../modules/flavors/selectors";

class FlavorsContainer extends Component {

  componentWillMount() {
    this.props.actions.getUserFlavors()
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h3>Flavors</h3>
          <div className="row">
            <FlavorsListComponent
              flavors    ={this.props.flavors}
              interaction={this.props.interaction}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const UserFlavorsList = connect(
  (state) => ({
    flavors: selectUserFlavorsData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getUserFlavors
    }, dispatch),
    interaction: bindActionCreators({
      addFlavorToUser,
      deleteFlavorFromUser
    }, dispatch)
  })
)(FlavorsContainer);
