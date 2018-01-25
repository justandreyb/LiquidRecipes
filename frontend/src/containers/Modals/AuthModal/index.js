import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

import {
  selectStateOfModal,
  closeAuthModal,
  showAuthModal,
  selectStateOfSwitcher,
  switchToSignIn,
  switchToSignUp
} from "../../../modules/Modals/AuthModal";

import {
  signIn,
  signUp
} from "../../../modules/Account"

import "../../../styles/react-bootstrap-switch.min.css"

import Switch from "react-bootstrap-switch";
import {LoginForm, RegistrationForm} from "../../../components";

class AuthModalContainer extends Component {

  switchStateOfModal(el, state) {
    if (state)
      this.props.actions.switchToSignUp();
    else
      this.props.actions.switchToSignIn();
  }

  handleSignIn(data) {
    console.log(data);
  }

  handleSignUp(data) {
    console.log(data);
  }

  render() {
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.props.actions.closeAuthModal}>
          <Modal.Header closeButton>
            <div className="text-center">
              <Switch
                bsSize="large"
                offText="Log in"
                onText="Registration"
                offColor="success"
                onChange={(el, state) => this.switchStateOfModal(el, state)}
              />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div>
              { this.props.switcherState === true &&
                <RegistrationForm
                  onSubmit={this.handleSignUp.bind(this)}
                />
              }
              { this.props.switcherState === false &&
                <LoginForm
                  onSubmit={this.handleSignIn.bind(this)}
                />
              }
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.actions.closeAuthModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export const AuthModal = connect(
  (state) => ({
    showModal    : selectStateOfModal(state),
    switcherState: selectStateOfSwitcher(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      showAuthModal,
      closeAuthModal,
      switchToSignIn,
      switchToSignUp
    }, dispatch),
    interaction: bindActionCreators({
      signIn,
      signUp
    }, dispatch)
  })
)(AuthModalContainer);
