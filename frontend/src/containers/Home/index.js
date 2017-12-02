import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  selectEntitiesData,
  sendEntitiesRequest
} from "../../modules/Entities"

class HomeContainer extends Component {

  componentWillMount() {
    this.props.actions.sendEntitiesRequest();
  }

  render() {
    return (
      <div className="container-fluid">

      </div>
    );
  }
}


export const Home = connect(
  (state) => ({
    entities: selectEntitiesData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      sendEntitiesRequest
    }, dispatch)
  })
)(HomeContainer);
