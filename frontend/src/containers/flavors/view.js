import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { FlavorViewComponent } from "../../components";

import {
  createFlavorComment,
  deleteFlavorComment,
  createFlavorLike,
  deleteFlavorLike
} from "../../modules/flavors/actions"
import {selectFlavorData} from "../../modules/flavors/selectors";

import {CommentsBlockComponent, LikeComponent} from "../../components";

class FlavorContainer extends Component {

  render() {
    const {
      interaction,
      flavor
    } = this.props;

    return (
      <div className="entity-view">
        <FlavorViewComponent
          flavor = {flavor}
        />
        <LikeComponent
          entityId = {flavor.id}
          likes = {flavor.likes}
          pressLike = {interaction.createFlavorLike}
          removeLike = {interaction.deleteFlavorLike}
        />
        <CommentsBlockComponent
	        entityId = {flavor.id}
          comments = {flavor.comments}
          postComment = {interaction.createFlavorComment}
          deleteComment = {interaction.deleteFlavorComment}
        />
      </div>
    )
  }
}

export const FlavorView = connect(
  (state, props) => ({
    flavor: selectFlavorData(state, props.match.params.id)
  }),
  (dispatch) => ({
    interaction: bindActionCreators({
      createFlavorComment,
      deleteFlavorComment,
      createFlavorLike,
      deleteFlavorLike
    }, dispatch)
  })
)(FlavorContainer);
