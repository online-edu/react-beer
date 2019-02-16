import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { HeaderBar } from "./components";
import Beers from "./pages/Beers";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <div className="cg-container my-4 mx-4">
          <BrowserRouter>
            <Switch>
              {/* <Redirect from="/" exact to="/dashboard" /> */}
              <Route path="/" component={Beers} />
              <Route path="/dashboard" component={Beers} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
