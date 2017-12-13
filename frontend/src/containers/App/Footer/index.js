import React, { Component } from "react";

import Navbar from "react-bootstrap/lib/Navbar";

class FooterContainer extends Component {
  render() {
    return (
      <Navbar fixedBottom>
        <p className="container text-center">App created by @justandreyb</p>
        <p className="container text-center">2017</p>
      </Navbar>
    );
  }
}

export const Footer = FooterContainer;
