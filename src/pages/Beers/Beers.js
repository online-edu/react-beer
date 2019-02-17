import React, { Component } from "react";
import BeerService from "./BeerService";
import { List } from "./../../components";

class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      favoriteBeers: [],
      loading: true
    };
    this.beerService = new BeerService();
  }

  loadBeers() {
    this.setState({ loading: true });
    this.beerService
      .loadBeers()
      .then(resp => {
        const { beers } = this.state;
        const newBeers = resp.data;
        this.setState({
          beers: [...newBeers, ...beers],
          loading: false
        });
      })
      .catch(err => console.log(err));
  }

  onFavoriteClick({ beer, fav }) {
    const beers = !!fav
      ? this.beerService.addFavoriteBeer(beer)
      : this.beerService.removeFavoriteBeer(beer.id);
    this.setState({ favoriteBeers: beers });
  }

  componentDidMount() {
    this.loadBeers();
    this.setState({ favoriteBeers: this.beerService.loadFavoriteBeers() });
  }

  render() {
    return (
      <div className="container-fluid px-4 py-4">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="card">
              <List
                title={`List of beers (${this.state.beers.length})`}
                btnCaption="View more"
                loader={this.state.loading}
                onHeaderAction={() => this.loadBeers()}
                onFavoriteClick={this.onFavoriteClick.bind(this)}
                items={this.state.beers}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="card">
              <List
                title="My favorite beers 🍺"
                favorite={true}
                onFavoriteClick={this.onFavoriteClick.bind(this)}
                items={this.state.favoriteBeers}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Beers;
