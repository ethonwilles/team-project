import React, { Component } from "react";
import axios from "axios";
import "../styles/main.scss";
import logo from "../images/logo.png";
import ProfileIcon from "../pages/profile-icon";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: []
    };

    this.profileItems = this.profileItems.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://projectteam4october2019.herokuapp.com/profiles")
      .then(response => {
        this.setState({
          profiles: response.data
        });
      });
  }

  profileItems() {
    console.log(this.state.profiles);
    return this.state.profiles.map(item => {
      return (
        <ProfileIcon
          key={item.id}
          title={item.title}
          pic1={item.pic1}
          description={item.title}
        />
      );
    });
  }

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
            <div className="topnav-buttons">
              <button>nav 1</button>
              <button>nav 2</button>
              <button>nav 3</button>
              <button>nav 4</button>
            </div>
            <h4 className="username">Username</h4>
          </div>
        </div>
        <div className="profile-space">
          <div className="items-wrapper">
            {this.profileItems()}
            {/* <ProfileIcon /> */}
          </div>
        </div>
        <div className="bottom-navbar">
          <div className="bottomnav-buttons">
            <button>nav 1</button>
            <button>nav 2</button>
            <button>nav 3</button>
            <button>nav 4</button>
          </div>
          <div className="copyright">
            <p>&copy; 2019 Team 4</p>
          </div>
        </div>
      </div>
    );
  }
}
