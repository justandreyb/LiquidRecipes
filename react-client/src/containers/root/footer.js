import React, { Component } from "react";
import {Snackbar} from "react-redux-snackbar";

class FooterContainer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__panel">
          <label className="footer__information">App created by <a className="footer__author --fast-transition --clickable" href="https://github.com/justandreyb">@justandreyb</a> 2017-2018</label>
        </div>
        <div className="footer_notificator">
          <Snackbar />
        </div>
      </footer>
    );
  }
}

export const Footer = FooterContainer;
