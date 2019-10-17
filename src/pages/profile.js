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
  constructor(props) {
    super(props);
    this.state = {
      byline: "",
      headline: "",
      id: 0,
      logo: "",
      opening: "",
      pic1: "",
      pic2: "",
      text1: "",
      text2: "",
      title: ""
    };
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          byline: data[1].byline,
          headline: data[1].headline,
          id: data[1].id,
          logo: data[1].logo,
          opening: data[1].opening,
          pic1: data[1].pic1,
          pic2: data[1].pic2,
          text1: data[1].text1,
          text2: data[1].text2,
          title: data[1].title
        })
      );
  }

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
