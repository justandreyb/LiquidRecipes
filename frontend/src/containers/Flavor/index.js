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
  selectFlavorCommentsData,
  createFlavorComment,
  deleteFlavorComment
} from "../../modules/FlavorComments"

import {
  getFlavorLikes,
  selectFlavorLikesData,
  createFlavorLike,
  deleteFlavorLike
} from "../../modules/FlavorLikes"

class FlavorContainer extends Component {

  componentWillMount() {
    this.props.actions.getFlavor(this.props.match.params.id);
    this.props.actions.getFlavorComments(this.props.match.params.id);
    this.props.actions.getFlavorLikes(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.actions.cleanFlavorWorkspace()
  }

  render() {
    return (
      <div className="container">
        <h3>Flavors</h3>
        <hr/>

        <div className="row">
          <FlavorComponent
            flavor     ={this.props.flavor}
            comments   ={this.props.comments}
            likes      ={this.props.likes}
            interaction={this.props.interaction}
          />
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
    }, dispatch),
    interaction: bindActionCreators({
      createFlavorComment,
      deleteFlavorComment,
      createFlavorLike,
      deleteFlavorLike
    }, dispatch)
  })
)(FlavorContainer);
