import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { EntityComponent } from "../../components";

import {
  getEntityRequest,
  cleanEntityWorkspace,
  selectEntityData
} from "../../modules/Entity"

class EntityContainer extends Component {

  componentWillMount() {
    this.props.actions.getEntityRequest(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.actions.cleanEntityWorkspace()
  }

  render() {
    return (
      <div className="container col-sm-10">
        <div className="text-center">
          <h3>Entities</h3>
          <div className="row">
            <EntityComponent
              entity={this.props.entity}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const Entity = connect(
  (state) => ({
    entity: selectEntityData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getEntityRequest,
      cleanEntityWorkspace
    }, dispatch)
  })
)(EntityContainer);
