import React, { Component } from "react";

export default class ProfileIcon extends Component {
  // Call API info
  render() {
    return (
      <div className="profile">
        <div className="item">
          <img src="https://source.unsplash.com/random" alt="img" />
          <div className="meta">
            <div className="top-level">NAME</div>
            {/* <div className="description">{description}</div> */}
          </div>
        </div>
      </div>
    );
  }
}
