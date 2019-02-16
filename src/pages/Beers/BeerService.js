import Rest, { api, key } from "../../utils";

export default class BeerService {
  constructor() {
    this.rest = new Rest();
  }

  loadBeers() {
    return this.rest.get(`${api}/beers/?key=${key}&hasLabels=Y`);
  }

  loadBeerById(id) {
    return this.rest.get(`${api}/beers/?key=${key}&hasLabels=Y`);
  }

  loadFavoriteBeers() {
    return this.getBeersFromStorage();
  }

  addFavoriteBeer(beer) {
    let beers = this.getBeersFromStorage();
    const found = this.findBeer(beers, beer.id);
    if (found < 0 && beers.length <= 10) beers.push(beer);
    localStorage.setItem("beers", JSON.stringify(beers));
    return beers;
  }

  removeFavoriteBeer(id) {
    let beers = this.getBeersFromStorage();
    const found = this.findBeer(beers, id);
    if (found >= 0) beers.splice(found, 1);
    localStorage.setItem("beers", JSON.stringify(beers));
    return beers;
  }

  getBeersFromStorage() {
    let beers = localStorage.getItem("beers");
    return (beers && JSON.parse(beers)) || [];
  }

  findBeer(beers, id) {
    return beers.findIndex(beer => beer.id === id);
  }
}
