import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { NewsSingleComponent } from "../../components";

import {
  getNewsSingle,
  cleanNewsSingleWorkspace,
  selectNewsSingleData
} from "../../modules/NewsSingle"

import {
  getNewsComments,
  selectNewsCommentsData,
  createNewsComment,
  deleteNewsComment
} from "../../modules/NewsComments"

import {
  getNewsLikes,
  selectNewsLikesData,
  createNewsLike,
  deleteNewsLike
} from "../../modules/NewsLikes"

class NewsSingleContainer extends Component {

  componentWillMount() {
    this.props.actions.getNewsSingle(this.props.match.params.id);
    this.props.actions.getNewsComments(this.props.match.params.id);
    this.props.actions.getNewsLikes(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.actions.cleanNewsSingleWorkspace()
  }

  render() {
    return (
      <div className="container col-sm-10">
        <div className="text-center">
          <h3>News</h3>
          <div className="row">
            <NewsSingleComponent
              news       ={this.props.news}
              comments   ={this.props.comments}
              likes      ={this.props.likes}
              interaction={this.props.interaction}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const NewsSingle = connect(
  (state) => ({
    news    : selectNewsSingleData(state),
    comments: selectNewsCommentsData(state),
    likes   : selectNewsLikesData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getNewsSingle,
      cleanNewsSingleWorkspace,
      getNewsComments,
      getNewsLikes
    }, dispatch),
    interaction: bindActionCreators({
      createNewsComment,
      deleteNewsComment,
      createNewsLike,
      deleteNewsLike
    }, dispatch)
  })
)(NewsSingleContainer);
