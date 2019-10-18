import React, { Component } from "react";
import { Link } from "react-router-dom";

// import {
//   faFacebook,
//   faTwitterSquare,
//   faInstagram,
//   faLinkedin
// } from "@fortawesome/free-brands-svg-icons";

export default class LeftColumn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="left-column">
        <img src={this.props.logo} />

        <Link to="/" className="home-link">
          Home
        </Link>

        <button>placeholder</button>
        <button>placeholder</button>
        <button>placeholder</button>
      </div>
    );
  }
}
