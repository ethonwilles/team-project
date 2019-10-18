import React, { Component } from "react";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/fontawesome-svg-core";
// import { FortAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import LeftColumn from "./profile-left-column";
import RightColumn from "./profile-right-column";
import ID from "./home";

// library.add(faTrash, faFacebook);
const url = "https://projectteam4october2019.herokuapp.com/profiles";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      byline: "",
      headline: "",
      id: this.props.id,
      logo: "",
      opening: "",
      pic1: "",
      pic2: "",
      text1: "",
      text2: "",
      title: ""
    };
  }

  // componentDidMount() {
  //   id = ID;
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         headline: data[id].headline,
  //         byline: data[id].byline,
  //         logo: data[id].logo,
  //         opening: data[id].opening,
  //         pic1: data[id].pic1,
  //         pic2: data[id].pic2,
  //         text1: data[id].text1,
  //         text2: data[id].text2,
  //         title: data[id].title
  //       });
  //       console.log(data[0].banner);
  //     });
  // }

  render() {
    console.log(this.props.id);
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
