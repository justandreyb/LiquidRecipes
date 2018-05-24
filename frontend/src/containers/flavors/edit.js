import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {FlavorFormComponent} from "../../components/index";

import {updateFlavor} from "../../modules/flavor/actions"
import {getManufacturers, selectManufacturersData} from "../../modules/manufacturers";
import {selectFlavorData} from "../../modules/flavor/selectors";

class FlavorEditContainer extends Component {

  componentWillMount() {
    this.props.actions.getManufacturers()
  }

  checkAndSend(data) {
    console.log(data);
    this.props.actions.updateFlavor(data);
  }

  render() {
    return (
      <div className="container col-sm-10">
        <div className="text-center">
          <h3>{this.props.flavor.name}</h3>
          <div className="row">
            <FlavorFormComponent
              flavor={this.props.flavor}
              target={this.checkAndSend.bind(this)}
              manufacturers={this.props.manufacturers}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const FlavorEdit = connect(
  (store, props) => ({
    flavor       : selectFlavorData(store, props.match.id),
    manufacturers: selectManufacturersData(store)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      updateFlavor,
      getManufacturers
    }, dispatch)
  })
)(FlavorEditContainer);
