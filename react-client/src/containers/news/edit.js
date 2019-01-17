import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {NewsFormComponent} from "../../components/index";

import {updateSingleNews} from "../../modules/news/actions";
import {selectSingleNewsData} from "../../modules/news/selectors";

class NewsEditContainer extends Component {

  checkAndSend(data) {
    console.log(data);

    // this.props.actions.createNewsSingle(data);

  }

  render() {
    return (
      <div className="container content">
        <div className="text-center">
          <h3>Create new news</h3>
          <div className="row">
            <NewsFormComponent
              onSubmit={this.checkAndSend.bind(this)}
              news={this.props.singleNews}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const NewsEdit = connect(
  (state, props) => ({
    singleNews: selectSingleNewsData(state, props.match.params.id)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      updateSingleNews
    }, dispatch)
  })
)(NewsEditContainer);
