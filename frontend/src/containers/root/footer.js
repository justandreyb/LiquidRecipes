import React, { Component } from "react";

class FooterContainer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__panel">
          <label className="footer__information">App created by <a className="footer__author --fast-transition --clickable" href="https://github.com/justandreyb">@justandreyb</a> 2017-2018</label>
        </div>
      </footer>
    );
  }
}

export const Footer = FooterContainer;
