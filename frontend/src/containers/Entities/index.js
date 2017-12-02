import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { EntitiesComponent } from "../../components";

import {
  sendEntitiesRequest,
  selectEntitiesData
} from "../../modules/Entities"

class EntitiesContainer extends Component {

  componentWillMount() {
    this.props.actions.sendEntitiesRequest()
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h3>Entities</h3>
          <div className="row">
            <EntitiesComponent
              elements={this.props.entities}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const Entities = connect(
  (state) => ({
    entities: selectEntitiesData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      sendEntitiesRequest
    }, dispatch)
  })
)(EntitiesContainer);
