import React, {Component} from "react";
import {connect} from "react-redux";

class AppContainer extends Component {
  render() {
    return (
      <div className="home">
      </div>
    );
  }
}

export const ApplicationRoot = connect(
  (state) => ({})
)(AppContainer);
