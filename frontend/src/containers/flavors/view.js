import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { FlavorViewComponent } from "../../components/index";

import {
  getFlavor,
  cleanFlavorWorkspace,
  selectFlavorData
} from "../../modules/flavors/flavor"

import {
  getFlavorComments,
  selectFlavorCommentsData,
  createFlavorComment,
  deleteFlavorComment
} from "../../modules/flavors/flavor_comments"

import {
  getFlavorLikes,
  selectFlavorLikesData,
  createFlavorLike,
  deleteFlavorLike
} from "../../modules/flavors/flavor_likes"
import {getFlavorImage, selectFlavorImageData} from "../../modules/flavors/flavor_image";
import {getFlavorManufacturer, selectFlavorManufacturerData} from "../../modules/flavors/flavor_manufacturer";

class FlavorContainer extends Component {

  componentWillMount() {
    this.props.actions.getFlavor(this.props.match.params.id);
    this.props.actions.getFlavorComments(this.props.match.params.id);
    this.props.actions.getFlavorLikes(this.props.match.params.id);
    this.props.actions.getFlavorImage(this.props.match.params.id);
    this.props.actions.getFlavorManufacturer(this.props.match.params.id);
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
          <FlavorViewComponent
            flavor       ={this.props.flavor}
            comments     ={this.props.comments}
            likes        ={this.props.likes}
            image        ={this.props.image}
            manufacturer ={this.props.manufacturer}
            interaction  ={this.props.interaction}
          />
        </div>
      </div>
    )
  }
}

export const FlavorView = connect(
  (state) => ({
    flavor      : selectFlavorData(state),
    image       : selectFlavorImageData(state),
    manufacturer: selectFlavorManufacturerData(state),
    comments    : selectFlavorCommentsData(state),
    likes       : selectFlavorLikesData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getFlavor,
      cleanFlavorWorkspace,
      getFlavorComments,
      getFlavorLikes,
      getFlavorImage,
      getFlavorManufacturer
    }, dispatch),
    interaction: bindActionCreators({
      createFlavorComment,
      deleteFlavorComment,
      createFlavorLike,
      deleteFlavorLike
    }, dispatch)
  })
)(FlavorContainer);
