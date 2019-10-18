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

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
