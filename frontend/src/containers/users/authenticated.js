import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  signIn,
  signUp
} from "../../modules/user"

import {LoginForm, RegistrationForm} from "../../components/index";

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
      <div className="authentication">
        <div className="authentication__block">
          <label className="authentication__title">Sign up</label>
          <RegistrationForm
            processSubmit={this.handleSignUp.bind(this)}
          />
        </div>
        <div className="divider" />
        <div className="authentication__block">
          <label className="authentication__title">Sign in</label>
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
