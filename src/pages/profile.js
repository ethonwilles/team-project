import React, { Component } from "react";

import LeftColumn from "./profile-left-column";
import RightColumn from "./profile-right-column";

export default class Profile extends Component {
  render() {
    return (
      <div className="page">
        <div className="left-column-wrap">
          <LeftColumn />
        </div>
        <div className="right-column-wrap">
          <RightColumn />
        </div>
      </div>
    );
  }
}
