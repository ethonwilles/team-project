import React, { Component } from "react";
import "../styles/main.scss";
import logo from "../images/logo.png";
import Profilei from "../pages/profile-icon";

export default class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="top-navbar">
          <div className="left-side">
            <div className="logo">
              <img src={logo} />
            </div>
          </div>

          <div className="right-side">
            <div className="buttons">
              <button>nav 1</button>
              <button>nav 2</button>
              <button>nav 3</button>
              <button>nav 4</button>
            </div>
            <h4 className="username">Username</h4>
          </div>
        </div>
        <div className="profile-space">
          <div className="top-profiles">
            <Profilei />
            <Profilei />
            <Profilei />
            <Profilei />
          </div>

          <div className="bottom-profiles">
            <Profilei />
            <Profilei />
            <Profilei />
            <Profilei />
          </div>
        </div>
        <div className="bottom-navbar"></div>
      </div>
    );
  }
}
