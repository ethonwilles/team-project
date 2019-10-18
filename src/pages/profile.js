import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/fontawesome-svg-core";
import { FortAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import LeftColumn from "./profile-left-column";
import RightColumn from "./profile-right-column";

library.add(faTrash, faFacebook);
const url = "https://projectteam4october2019.herokuapp.com/profiles";
export default class Profile extends Component {


  render() {
    return (
      <div className="page">
        <div className="left-column-wrap">
          <LeftColumn logo={this.state.logo} />
        </div>
        <div className="right-column-wrap">
          <RightColumn
            banner={this.state.pic1}
            title={this.state.title}
            logo={this.state.logo}
            imgs={this.state.pic2}
          />
        </div>
      </div>
    );
  }
}
