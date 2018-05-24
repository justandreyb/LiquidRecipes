import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { FlavorsListComponent } from "../../components/index";

import {getFlavors} from "../../modules/flavor/actions"
import {selectFlavorsData} from "../../modules/flavor/selectors";

class FlavorsContainer extends Component {

  componentWillMount() {
    this.props.actions.getFlavors()
  }

  render() {
    return (
      <div className="entity-list">
        <div className="entity-list__header">
          <h3>Flavors</h3>
        </div>
        <FlavorsListComponent
          cssClass={"entity-list__items"}
          cssClassForItem={"entity-list__item"}
          flavors={this.props.flavors}
        />
        <div className="entity-list__footer">
          Paginator
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
