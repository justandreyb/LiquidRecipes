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
  createFlavorComment,
  deleteFlavorComment
} from "../../modules/flavors/flavor_comments"

import {
  createFlavorLike,
  deleteFlavorLike
} from "../../modules/flavors/flavor_likes"
import {CommentsBlockComponent, LikeComponent} from "../../components";

class FlavorContainer extends Component {

  componentWillMount() {
    this.props.actions.getFlavor(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.actions.cleanFlavorWorkspace()
  }

  getMyFlavor() {
    return {
      name        : "Best flavor",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      manufacturer: {
        name: "Capella",
        logo: {
          path: "/storage/images/manufacturers/capella.jpg",
          id  : "4ba1f371-3e8b-4ac0-8cd4-cc375681e2d1"
        },
        id: "186bb6a0-23e0-4894-ae18-7303b483125b"
      },
      flavorType: {
        id  : "f01452fd-4b6e-424c-a2e3-1b7e332e4596",
        name: "Fruit"
      },
      likes   : [],
      comments: [],
      image   : {
        path: "/storage/images/flavors/capella/cappuccino.jpg",
        id  : "7040b1bc-b4fe-48bc-b79f-d5172f8461f3"
      },
      id: "7106ddf0-ad1c-4fda-b8b3-d9da6afe854a"
    }
  }

  render() {
    return (
      <div className="entity-view">
        <FlavorViewComponent
          flavor      ={this.getMyFlavor()}
          interaction ={this.props.interaction}
        />
        <LikeComponent
          entityId={this.getMyFlavor().id}
          likes={this.getMyFlavor().likes}
          interaction={this.props.interaction}
        />
        <CommentsBlockComponent
          comments = {this.getMyFlavor().comments}
        />
      </div>
    )
  }
}

export const FlavorView = connect(
  (state) => ({
    flavor: selectFlavorData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getFlavor,
      cleanFlavorWorkspace
    }, dispatch),
    interaction: bindActionCreators({
      createFlavorComment,
      deleteFlavorComment,
      createFlavorLike,
      deleteFlavorLike
    }, dispatch)
  })
)(FlavorContainer);
