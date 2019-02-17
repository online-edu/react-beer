import React, { Component, Suspense, lazy } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";
import { HeaderBar, Spinner, Footer, NotFound } from "./components";
import Beers from "./pages/beers/Beers";
import "./App.scss";

const BeerDetails = withRouter(
  lazy(() =>
    import(/* webpackChunkName: "beerDetails" */ "./pages/beers/BeerDetails")
  )
);

class App extends Component {
  render() {
    return (
      <div className="cg-container">
        <HeaderBar />
        <section>
          <Suspense fallback={<Spinner />}>
            <BrowserRouter>
              <Switch>
                <Redirect from="/" exact to="/dashboard" />
                <Route path="/dashboard" component={Beers} />
                <Route path="/beer-details/:id" component={BeerDetails} />
                <Route exact path="**" component={NotFound} />
              </Switch>
            </BrowserRouter>
          </Suspense>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
