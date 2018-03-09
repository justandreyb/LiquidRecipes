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

/*
<Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" activestyle={{color: "#33e0ff"}}>
              <div/>
              <span className="application__title"></span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>

        <Navbar.Collapse eventkey={0}>
          <Nav navbar>
            <LinkContainer to="/">
              <NavItem eventkey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/recipes">
              <NavItem eventkey={2}>RecipesList</NavItem>
            </LinkContainer>
            <LinkContainer to="/flavors">
              <NavItem eventkey={3}>FlavorsList</NavItem>
            </LinkContainer>
            <LinkContainer to="/news">
              <NavItem eventkey={4}>NewsList</NavItem>
            </LinkContainer>
          </Nav>
          <Nav navbar pullRight>
            {
              !this.props.authenticated &&
              <LinkContainer to="/users">
                <NavItem eventkey={7}>Account</NavItem>
              </LinkContainer>
            }
            {
              this.props.authenticated &&
              <NavDropdown eventKey={8} title={"" + this.props.users.name} id="account_component">
                <LinkContainer to="/im">
                  <MenuItem eventkey={8.1}>Profile</MenuItem>
                </LinkContainer>
                {
                  this.props.superuser &&
                  <LinkContainer to="/dashboard">
                    <MenuItem eventkey={8.2}>
                      Dashboard
                    </MenuItem>
                  </LinkContainer>
                }
                <LinkContainer to="/im/flavors">
                  <MenuItem eventKey={8.3}>FlavorsList</MenuItem>
                </LinkContainer>
                <LinkContainer to="/im/recipes">
                  <MenuItem eventKey={8.4}>RecipesList</MenuItem>
                </LinkContainer>
                <MenuItem divider />

                <MenuItem eventkey={8.5} onClick={this.props.actions.logout}> Logout</MenuItem>
              </NavDropdown>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
 */

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
