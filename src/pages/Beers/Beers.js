import React, { Component } from "react";

import BeerService from "./BeerService";
import { List } from "./../../components";

class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      raw: {},
      loading: true
    };
    this.beerService = new BeerService();
  }

  loadMoreBeers() {
    const { beers, raw } = this.state;
    const newBeers = raw.data.slice(10, 20);
    console.log(raw);
    console.log([...newBeers, ...beers]);
    this.setState({ beers: [...newBeers, ...beers] });
  }

  componentDidMount() {
    this.beerService
      .loadBeers()
      .then(resp => {
        console.log(resp);
        let tempBeers = resp.data.slice(0, 10);
        this.setState({ raw: resp, beers: tempBeers, loading: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="card">
              <List
                title="List of beers"
                btnCaption="Add more"
                loader={this.state.loading}
                handleClick={() => this.loadMoreBeers()}
                items={this.state.beers}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Beers;
