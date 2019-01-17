import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {selectIsAuthenticated} from "../../modules/user/selectors";
import {DefaultRoute} from "./DefaultRoute";

class PrivateRouteContainer extends Component {
  render() {
    const {
      isAuthenticated,
      component: Component,
      ...props
    } = this.props;

    return (
      <DefaultRoute
        {...props}
        render={(props) =>
          isAuthenticated
            ? <Component {...props} />
            :
            <Redirect to={{
              pathname: "/account",
              state   : { from: props.location }
            }} />

        }
      />
    )
  }
}

export const PrivateRoute = connect(
  (state) => ({
    isAuthenticated: selectIsAuthenticated(state)
  })
)(PrivateRouteContainer);
