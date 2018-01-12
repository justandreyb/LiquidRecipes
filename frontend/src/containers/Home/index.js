import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  getTop10News,
  clearTopNewsWorkspace,
  selectTopNewsData
} from "../../modules/News"

import {
  getTop10Flavors,
  clearTopFlavorsWorkspace,
  selectTopFlavorsData
} from "../../modules/Flavors"

import {
  getTop10Recipes,
  clearTopRecipesWorkspace,
  selectTopRecipesData
} from "../../modules/Recipes"

import {
  RecipesCarouselComponent,
  FlavorsCarouselComponent,
  NewsCarouselComponent
} from "../../components";

class HomeContainer extends Component {

  componentWillMount() {
    this.props.actions.getTop10News();
    this.props.actions.getTop10Flavors();
    this.props.actions.getTop10Recipes();
  }

  componentWillUnmount() {
    this.props.actions.clearTopNewsWorkspace();
    this.props.actions.clearTopFlavorsWorkspace();
    this.props.actions.clearTopRecipesWorkspace();
  }

  render() {
    return (
      <div className="container-fluid">
        <NewsCarouselComponent
          news={this.props.news}
        />
        <FlavorsCarouselComponent
          flavors={this.props.flavors}
        />
        <RecipesCarouselComponent
          recipes={this.props.recipes}
        />
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
      clearTopNewsWorkspace,
      clearTopFlavorsWorkspace,
      clearTopRecipesWorkspace
    }, dispatch)
  })
)(HomeContainer);
