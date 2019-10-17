import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Profile from "./pages/profile";
import ProfileIcon from "./pages/profile-icon";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: []
    };
  }

  componentDidMount() {
    fetch("https://projectteam4october2019.herokuapp.com/profiles")
      .then(response => response.json())
      .then(data => this.setState({ profiles: data }));
  }

  renderProfiles = () => {
    return this.state.profiles.map(profile => {
      return (
        <ProfileIcon
          key={profile.id}
          title={profile.title}
          id={profile.id}
          img={profile.pic1}
        />
      );
    });
  };

  handleChange = event => {
    this.setState({ profile: event.target.value });
  };

  render() {
    // console.log(this.state.profiles);
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
