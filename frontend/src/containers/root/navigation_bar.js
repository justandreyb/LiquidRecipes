import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {selectApplicationName} from "../../modules/application";
import {selectIsAdmin, selectUserData} from "../../modules/user";
import {ACCESS_TOKEN_NAME} from "../../settings";
import {getCookies} from "../../utils/cookies";
import {loadAccount, logout, selectIsAuthenticated} from "../../modules/user";
import {LinkContainer} from "react-router-bootstrap";

class NavigationBarContainer extends Component {

  componentWillMount() {
    if (getCookies(ACCESS_TOKEN_NAME)) this.props.actions.loadAccount()
  }

  render() {
    return (
      <nav className="navigation">
        <div className="navigation__panel">

          <div className="navigation__logo">
            <LinkContainer to="/">
              <div className="navigation__logo--link --clickable --transition">{this.props.appName}</div>
            </LinkContainer>
          </div>

          <div className="navigation__content">
            <div className="navigation__links">
              <LinkContainer to="/recipes">
                <div className="navigation__links--link --clickable --fast-transition"><i className="fas fa-glass-martini --small-font"/>  Recipes</div>
              </LinkContainer>
              <LinkContainer to="/flavors">
                <div className="navigation__links--link --clickable --fast-transition"><i className="fas fa-tint --small-font"/>   Flavors</div>
              </LinkContainer>
              <LinkContainer to="/news">
                <div className="navigation__links--link --clickable --fast-transition"><i className="fas fa-newspaper --small-font"/>   News</div>
              </LinkContainer>
            </div>

            <div className="navigation__auth">
              {
                !this.props.authenticated &&
                <LinkContainer to="/account">
                  <div className="navigation__auth--link --clickable --fast-transition"><i className="fas fa-users"/></div>
                </LinkContainer>
              }
              {
                this.props.authenticated &&
                <LinkContainer to="/im">
                  <div className="navigation__auth--link --clickable --fast-transition"><i className="fas fa-user"/></div>
                </LinkContainer>
              }
              {
                this.props.authenticated &&
                <LinkContainer to="/sign_out">
                  <div className="navigation__auth--link --clickable --fast-transition"><i className="fas fa-sign-out-alt"/></div>
                </LinkContainer>
              }
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export const Navigation = connect(
  (state) => ({
    authenticated: selectIsAuthenticated(state),
    appName      : selectApplicationName(state),
    user         : selectUserData(state),
    superuser    : selectIsAdmin(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      loadAccount,
      logout
    }, dispatch)
  })
)(NavigationBarContainer);
