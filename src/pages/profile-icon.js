import React, { Component } from "react";
import test from "../images/test.png";
import { Link } from "react-router-dom";

export default class ProfileIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile">
        <Link to={`/profile/${this.props.key}`} className="item">
          <img src={test} alt="img" />
          <div className="top-level">{this.props.title}</div>
          <div className="description">{this.props.description}</div>
        </Link>
      </div>
    );
  }
}
