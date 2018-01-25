import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";

import { selectApplicationName } from "../../../modules/App";
import {
  selectIsGuest,
  selectIsSuperuser,
  selectUserData
} from "../../../modules/Account/index";

class NavigationBarContainer extends Component {
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
            {
              this.props.superuser &&
              <LinkContainer to="/dashboard">
                <NavItem eventkey={5}>
                  Dashboard
                </NavItem>
              </LinkContainer>
            }
          </Nav>
          <Nav navbar pullRight>
            {
              this.props.guest &&
              <LinkContainer to="/account">
                <NavItem eventkey={7}>Account</NavItem>
              </LinkContainer>
            }
            {
              !this.props.guest &&
              <LinkContainer to="/im">
                <NavItem eventkey={7}>Account</NavItem>
              </LinkContainer>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export const Navigation = connect(
  (state) => ({
    appName  : selectApplicationName(state),
    user     : selectUserData(state),
    guest    : selectIsGuest(state),
    superuser: selectIsSuperuser(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
    }, dispatch)
  })
)(NavigationBarContainer);
