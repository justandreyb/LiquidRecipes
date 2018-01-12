import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {NewsFormComponent} from "../../components/index";

import {getNewsSingle, selectNewsSingleData, updateNewsSingle} from "../../modules/NewsSingle/index";

class NewsEditContainer extends Component {

  checkAndSend(data) {
    console.log(data);

    // this.props.actions.createNewsSingle(data);

  }

  render() {
    return (
      <div className="container layout">
        <div className="text-center">
          <h3>Create new news</h3>
          <div className="row">
            <NewsFormComponent
              onSubmit={this.checkAndSend.bind(this)}
              news={this.props.news}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const NewsEdit = connect(
  (store) => ({
    news: selectNewsSingleData(store)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getNewsSingle,
      updateNewsSingle
    }, dispatch)
  })
)(NewsEditContainer);
