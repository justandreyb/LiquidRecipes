import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";

import {selectApplicationName} from "../../../modules/App";
import {selectIsAdmin, selectUserData} from "../../../modules/Account/index";
import {MenuItem, NavDropdown} from "react-bootstrap";
import {ACCESS_TOKEN_NAME} from "../../../settings";
import {getCookies} from "../../../modules/App/Cookies";
import {loadAccount, logout, selectIsAuthenticated} from "../../../modules/Account";

class NavigationBarContainer extends Component {

  componentWillMount() {
    if (getCookies(ACCESS_TOKEN_NAME)) this.props.actions.loadAccount()
  }

  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" activestyle={{color: "#33e0ff"}}>
              <div/>
              <span className="application__title">{this.props.appName}</span>
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
              <NavItem eventkey={2}>Recipes</NavItem>
            </LinkContainer>
            <LinkContainer to="/flavors">
              <NavItem eventkey={3}>Flavors</NavItem>
            </LinkContainer>
            <LinkContainer to="/news">
              <NavItem eventkey={4}>News</NavItem>
            </LinkContainer>
          </Nav>
          <Nav navbar pullRight>
            {
              !this.props.authenticated &&
              <LinkContainer to="/account">
                <NavItem eventkey={7}>Account</NavItem>
              </LinkContainer>
            }
            {
              this.props.authenticated &&
              <NavDropdown eventKey={8} title={"" + this.props.user.name} id="account_component">
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
                  <MenuItem eventKey={8.3}>Flavors</MenuItem>
                </LinkContainer>
                <LinkContainer to="/im/recipes">
                  <MenuItem eventKey={8.4}>Recipes</MenuItem>
                </LinkContainer>
                <MenuItem divider />

                <MenuItem eventkey={8.5} onClick={this.props.actions.logout}> Logout</MenuItem>
              </NavDropdown>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
