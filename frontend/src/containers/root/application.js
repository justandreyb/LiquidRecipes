import React, {Component} from "react";
import {connect} from "react-redux";

import {Home} from "./home";

class AppContainer extends Component {
  render() {
    return (
      <div className="app container">
        <div className="col-md-3 hidden-sm hidden-xs">
          <div>Widgets</div>
        </div>
        <div className="col-md-9 dynamic-area">
          <Home/>
        </div>
      </div>
    );
  }
}

export const ApplicationRoot = connect(
  (state) => ({})
)(AppContainer);
