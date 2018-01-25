import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  signIn,
  signUp
} from "../../modules/Account"

import {LoginForm, RegistrationForm} from "../../components";

class AuthContainer extends Component {

  handleSignIn(data) {
    this.props.interaction.signIn({
      email   : data.email,
      password: data.password
    });
  }

  handleSignUp(data) {
    this.props.interaction.signUp({
      name    : data.name,
      password: data.password,
      email   : data.email
    })
  }

  render() {
    return (
      <div className="">
        <div className="">
          <label>Registration</label>
          <RegistrationForm
            processSubmit={this.handleSignUp.bind(this)}
          />
        </div>
        <hr />
        <div className="">
          <label>Log in</label>
          <LoginForm
            processSubmit={this.handleSignIn.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export const PageForSign = connect(
  (state) => ({ }),
  (dispatch) => ({
    interaction: bindActionCreators({
      signIn,
      signUp
    }, dispatch)
  })
)(AuthContainer);
