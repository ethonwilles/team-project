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
    console.log(this.state);
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
