import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {ConnectedRouter} from "react-router-redux";

import {getFontSetting, getThemeSetting} from "./settings";
import {store, history} from "./store";

import {Navigation, Footer} from "./containers"
import "./styles/main.css";
import {routes} from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className={"application " + getThemeSetting() + "-theme " + getFontSetting() + "-fonts"}>
        <Navigation/>
        <div className="content">
          { routes }
        </div>
        <Footer/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root"),
);
