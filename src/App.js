import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import { HeaderBar, Spinner, Footer } from "./components";
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
                <Route exact={true} path="/" component={Beers} />
                <Route path="/dashboard" component={Beers} />
                <Route path="/details/:id" component={BeerDetails} />
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
