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
import { showAuthModal } from "../../../modules/Modals/AuthModal";
import { AuthModal } from "../../Modals/AuthModal";

class NavigationBarContainer extends Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" activestyle={{color: "#33e0ff"}}>
              <div/>
              <span>{this.props.appName}</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>

        <Navbar.Collapse eventkey={0}>
          <Nav navbar>
            <LinkContainer to="/home">
              <NavItem eventkey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/entities">
              <NavItem eventkey={2}>Entities</NavItem>
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
              <NavItem eventkey={6}>
                <div onClick={this.props.actions.showAuthModal}>Account</div>
                <AuthModal />
              </NavItem>
            }
            {
              !this.props.guest &&
              <LinkContainer to="/account">
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
      showAuthModal
    }, dispatch)
  })
)(NavigationBarContainer);
