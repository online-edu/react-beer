import Rest, { api, key } from "../../utils";

export default class BeerService {
  constructor() {
    this.rest = new Rest();
  }

  loadBeers() {
    return this.rest.get(
      `${api}/beers/?key=${key}&hasLabels=Y&order=random&randomCount=10`
    );
  }

  loadBeerById(id) {
    return this.rest.get(`${api}/beer/${id}/?key=${key}`);
  }

  loadFavoriteBeers() {
    return this.getBeersFromStorage();
  }

  onFavorite(beer, mode) {
    return !!mode
      ? this.addFavoriteBeer(beer)
      : this.removeFavoriteBeer(beer.id);
  }

  addFavoriteBeer(beer) {
    let { beers, found } = this.findBeerById(beer.id);
    if (found < 0 && beers.length <= 10) beers.push(beer);
    localStorage.setItem("beers", JSON.stringify(beers));
    return beers;
  }

  removeFavoriteBeer(id) {
    let { beers, found: i } = this.findBeerById(id);
    if (i >= 0) beers.splice(i, 1);
    localStorage.setItem("beers", JSON.stringify(beers));
    return beers;
  }

  getBeersFromStorage() {
    let beers = localStorage.getItem("beers");
    return (beers && JSON.parse(beers)) || [];
  }

  findBeerById(id) {
    let beers = this.getBeersFromStorage();
    const found = beers.findIndex(beer => beer.id === id);
    return { beers, found };
  }
}
