import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { NewsViewComponent } from "../../components/index";

import {
  getNewsSingle,
  cleanNewsSingleWorkspace,
  selectNewsSingleData
} from "../../modules/news/news"

import {
  getNewsComments,
  selectNewsCommentsData,
  createNewsComment,
  deleteNewsComment
} from "../../modules/news/news_comments"

import {
  getNewsLikes,
  selectNewsLikesData,
  createNewsLike,
  deleteNewsLike
} from "../../modules/news/news_likes"

import {
  getNewsImage,
  selectNewsImageData
} from "../../modules/news/news_image"

class NewsSingleContainer extends Component {

  componentWillMount() {
    this.props.actions.getNewsSingle(this.props.match.params.id);
    this.props.actions.getNewsComments(this.props.match.params.id);
    this.props.actions.getNewsLikes(this.props.match.params.id);
    this.props.actions.getNewsImage(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.actions.cleanNewsSingleWorkspace()
  }

  render() {
    return (
      <div className="container">
        <h3>News</h3>
        <hr/>

        <div className="row">
          <NewsViewComponent
            news       ={this.props.news}
            comments   ={this.props.comments}
            likes      ={this.props.likes}
            image      ={this.props.image}
            interaction={this.props.interaction}
          />
        </div>
      </div>
    )
  }
}

export const NewsView = connect(
  (state) => ({
    news    : selectNewsSingleData(state),
    comments: selectNewsCommentsData(state),
    likes   : selectNewsLikesData(state),
    image   : selectNewsImageData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getNewsSingle,
      cleanNewsSingleWorkspace,
      getNewsComments,
      getNewsLikes,
      getNewsImage
    }, dispatch),
    interaction: bindActionCreators({
      createNewsComment,
      deleteNewsComment,
      createNewsLike,
      deleteNewsLike
    }, dispatch)
  })
)(NewsSingleContainer);