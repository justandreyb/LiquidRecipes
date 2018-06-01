import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { NewsListComponent } from "../../components";

import {getNews} from "../../modules/news/actions"
import {selectNewsData} from "../../modules/news/selectors";

class NewsContainer extends Component {

  componentWillMount() {
    this.props.actions.getNews()
  }

  render() {
    return (
      <div className="entity-list">
        <div className="entity-list__header">
          <h3>News</h3>
        </div>
        <NewsListComponent
          cssClass={"entity-list__items"}
          cssClassForItem={"entity-list__item"}
          news={this.props.news}
        />
        <div className="entity-list__footer">
          Paginator
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
