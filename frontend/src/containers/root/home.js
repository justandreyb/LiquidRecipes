import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  getTop10News
} from "../../modules/news/actions"

import {
  getTop10Flavors
} from "../../modules/flavor/actions"

import {
  getTop10Recipes,
  clearTopRecipesWorkspace,
  selectTopRecipesData
} from "../../modules/recipes/recipes"
import {selectTopFlavorsData} from "../../modules/flavor/selectors";
import {selectTopNewsData} from "../../modules/news/selectors";

class HomeContainer extends Component {

  componentWillMount() {
    this.props.actions.getTop10News();
    this.props.actions.getTop10Flavors();
    this.props.actions.getTop10Recipes();
  }

  componentWillUnmount() {
    this.props.actions.clearTopNewsWorkspace();
    this.props.actions.clearTopRecipesWorkspace();
  }

  render() {
    return (
      <div className="container-fluid">
        home
      </div>
    );
  }
}

export const Home = connect(
  (state) => ({
    news   : selectTopNewsData(state),
    flavors: selectTopFlavorsData(state),
    recipes: selectTopRecipesData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getTop10News,
      getTop10Flavors,
      getTop10Recipes,
      clearTopRecipesWorkspace
    }, dispatch)
  })
)(HomeContainer);
