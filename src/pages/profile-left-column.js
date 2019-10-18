import React, { Component } from "react";

// import {
//   faFacebook,
//   faTwitterSquare,
//   faInstagram,
//   faLinkedin
// } from "@fortawesome/free-brands-svg-icons";

export default class LeftColumn extends Component {
  render() {
    return (
      <div className="left-column">
        <img src={this.props.logo} />
        <button>Home</button>
        <button>placeholder</button>
        <button>placeholder</button>
        <button>placeholder</button>
      </div>
    );
  }
}
