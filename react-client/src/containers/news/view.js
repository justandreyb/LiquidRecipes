import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { SingleNewsViewComponent } from "../../components";

import {
  createSingleNewsComment,
  deleteSingleNewsComment,
  createSingleNewsLike,
  deleteSingleNewsLike
} from "../../modules/news/actions"
import {selectSingleNewsData} from "../../modules/news/selectors";

import {CommentsBlockComponent, LikeComponent} from "../../components";

class SingleNewsContainer extends Component {

  render() {
    const {
      interaction,
      singleNews
    } = this.props;

    return (
      <div className="entity-view">
        <SingleNewsViewComponent
          singleNews = {singleNews}
        />
        <LikeComponent
          entityId = {singleNews.id}
          likes = {singleNews.likes}
          pressLike = {interaction.createSingleNewsLike}
          removeLike = {interaction.deleteSingleNewsLike}
        />
        <CommentsBlockComponent
          entityId = {singleNews.id}
          comments = {singleNews.comments}
          postComment = {interaction.createSingleNewsComment}
          deleteComment = {interaction.deleteSingleNewsComment}
        />
      </div>
    )
  }
}

export const SingleNewsView = connect(
  (state, props) => ({
    singleNews: selectSingleNewsData(state, props.match.params.id)
  }),
  (dispatch) => ({
    interaction: bindActionCreators({
      createSingleNewsComment,
      deleteSingleNewsComment,
      createSingleNewsLike,
      deleteSingleNewsLike
    }, dispatch)
  })
)(SingleNewsContainer);
