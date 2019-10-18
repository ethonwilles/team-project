import React, { Component } from "react";

export default class ProfileIcon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="profile">
        <div className="item">
          <img src={this.props.pic1} alt="img" />
          <div className="top-level">{this.props.title}</div>
          <div className="description">{this.props.description}</div>
        </div>
      </div>
    );
  }
}
