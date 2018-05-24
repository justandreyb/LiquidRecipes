import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {RecipeFormComponent} from "../../components/index";

import {getFlavors} from "../../modules/flavor/actions";
import {createRecipe} from "../../modules/recipes/recipe";
import {selectFlavorsData} from "../../modules/flavor/selectors";

class RecipeCreateContainer extends Component {

  componentWillMount() {
    this.props.actions.getFlavors()
  }

  checkAndSend(data) {
    this.props.actions.createRecipe(data);
  }

  render() {
    return (
      <div className="container content">
        <div className="text-center">
          <h3>Create new flavor</h3>
          <div className="row">
            <RecipeFormComponent
              onSubmit={this.checkAndSend.bind(this)}
              flavors={this.props.flavors}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const RecipeCreate = connect(
  (store) => ({
    flavors: selectFlavorsData(store)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      createRecipe,
      getFlavors
    }, dispatch)
  })
)(RecipeCreateContainer);
