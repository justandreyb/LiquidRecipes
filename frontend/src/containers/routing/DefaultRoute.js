import React, {Component} from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import ReactLoading from "react-loading";
import {selectIsLoading} from "../../modules/loading/selector";

class PrivateRouteContainer extends Component {
  render() {
    const {
      isLoading,
      component: Component,
      ...props
    } = this.props;

    console.log("spinner");

    return (
      <Route
        {...props}
        render={(props) =>
          <div>
            <Component {...props} />
            { isLoading && <ReactLoading className="loading-spinner" type="bubbles" color="var(--secondary-color)" height={667} width={375} /> }
          </div>
        }
      />
    )
  }
}

export const DefaultRoute = connect(
  (state) => ({
    isLoading: selectIsLoading(state)
  })
)(PrivateRouteContainer);
