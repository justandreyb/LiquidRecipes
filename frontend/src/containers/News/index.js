import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { NewsComponent } from "../../components";

import {
  getNews,
  selectNewsData
} from "../../modules/News"

class NewsContainer extends Component {

  componentWillMount() {
    this.props.actions.getNews()
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h3>News</h3>
          <div className="row">
            <NewsComponent
              elements={this.props.news}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const News = connect(
  (state) => ({
    news: selectNewsData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getNews
    }, dispatch)
  })
)(NewsContainer);
