import React, {Component} from "react";
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import {selectIsAuthenticated} from "../../modules/Account";

class PrivateRouteContainer extends Component {
  render() {
    const {
      isAuthenticated,
      component: Component,
      ...props
    } = this.props;

    return (
      <Route
        {...props}
        render={(props) =>
          isAuthenticated
            ? <Component {...props} />
            :
            <Redirect to={{
              pathname: "/login",
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
