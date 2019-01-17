import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  getTop10News
} from "../../modules/news/actions"

import {
  getTop10Flavors
} from "../../modules/flavors/actions"

import {
  selectTopRecipesData
} from "../../modules/recipes/selectors"
import {selectTopFlavorsData} from "../../modules/flavors/selectors";
import {selectTopNewsData} from "../../modules/news/selectors";
import {getTop10Recipes} from "../../modules/recipes/actions";

class HomeContainer extends Component {

  componentWillMount() {
    this.props.actions.getTop10News();
    this.props.actions.getTop10Flavors();
    this.props.actions.getTop10Recipes();
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
      getTop10Recipes
    }, dispatch)
  })
)(HomeContainer);
