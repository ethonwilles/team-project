import React from "react";
import { BrowserRouter as BR, Route, Switch } from "react-router-dom";
import "./main.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    };
  }
  render() {
    return (
      <div className="App">
        <BR>
          {/* this is some changed test */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </BR>
      </div>
    );
  }
}

export default App;
