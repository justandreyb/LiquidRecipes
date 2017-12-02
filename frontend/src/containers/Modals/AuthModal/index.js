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
} from "../../../modules/Modals/AuthModal/index";

import Switch from "react-bootstrap-switch";
import "../../../styles/react-bootstrap-switch.min.css"

class AuthModalContainer extends Component {

  switchStateOfModal(el, state) {
    if (state)
      this.props.actions.switchToSignUp();
    else
      this.props.actions.switchToSignIn();
  }

  /* TODO: Create auth forms */

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
                <label>Registration form</label>
              }
              { this.props.switcherState === false &&
                <label>Login form</label>
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
    }, dispatch)
  })
)(AuthModalContainer);
