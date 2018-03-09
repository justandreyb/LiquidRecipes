import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { NewsListComponent } from "../../components/index";

import {
  getNews,
  selectNewsData
} from "../../modules/news/news_list"

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
            <NewsListComponent
              news={this.props.news}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const NewsList = connect(
  (state) => ({
    news: selectNewsData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getNews
    }, dispatch)
  })
)(NewsContainer);
