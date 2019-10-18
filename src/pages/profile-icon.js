import React, { Component } from "react";
import test from "../images/test.png";

export default class ProfileIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile">
        <div className="item">
          <img src={test} alt="img" />
          <div className="top-level">{this.props.title}</div>
          <div className="description">{this.props.description}</div>
        </div>
      </div>
    );
  }
}
