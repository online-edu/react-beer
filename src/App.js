import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import { HeaderBar, Spinner, Footer } from "./components";
import Beers from "./pages/beers/Beers";
import BeerDetails from "./pages/beers/BeerDetails";
import "./App.scss";

// const BeerDetails = withRouter(lazy(() => import("./pages/beers/BeerDetails")));

class App extends Component {
  render() {
    return (
      <div className="cg-container">
        <HeaderBar />
        <Suspense fallback={<Spinner />}>
          <BrowserRouter>
            <Switch>
              <Route exact={true} path="/" component={Beers} />
              <Route path="/dashboard" component={Beers} />
              <Route path="/details/:id" component={BeerDetails} />
            </Switch>
          </BrowserRouter>
        </Suspense>
        <Footer />
      </div>
    );
  }
}

export default App;
