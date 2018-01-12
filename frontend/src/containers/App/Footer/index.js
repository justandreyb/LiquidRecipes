import React, { Component } from "react";

import Navbar from "react-bootstrap/lib/Navbar";

class FooterContainer extends Component {
  render() {
    return (
      <Navbar fixedBottom>
        <p className="container text-center">
          App created by
          @justandreyb
          2017-2018
        </p>
      </Navbar>
    );
  }
}

export const Footer = FooterContainer;
