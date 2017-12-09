import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { FlavorComponent } from "../../components";

import {
  getFlavor,
  cleanFlavorWorkspace,
  selectFlavorData
} from "../../modules/Flavor"

import {
  getFlavorComments,
  selectFlavorCommentsData
} from "../../modules/FlavorComments"

import {
  getFlavorLikes,
  selectFlavorLikesData
} from "../../modules/FlavorLikes"

class FlavorContainer extends Component {

  componentWillMount() {
    this.props.actions.getFlavor(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.actions.cleanFlavorWorkspace()
  }

  render() {
    return (
      <div className="container col-sm-10">
        <div className="text-center">
          <h3>Entities</h3>
          <div className="row">
            <FlavorComponent
              flavor={this.props.flavor}
              comments={this.props.comments}
              likes={this.props.likes}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const Flavor = connect(
  (state) => ({
    flavor  : selectFlavorData(state),
    comments: selectFlavorCommentsData(state),
    likes   : selectFlavorLikesData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getFlavor,
      cleanFlavorWorkspace,
      getFlavorComments,
      getFlavorLikes
    }, dispatch)
  })
)(FlavorContainer);
