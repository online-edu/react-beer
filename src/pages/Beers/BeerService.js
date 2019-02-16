import Rest, { api, key } from "../../utils";

export default class BeerService {
  constructor() {
    this.rest = new Rest();
  }

  loadBeers() {
    return this.rest.get(`${api}/beers/?key=${key}&hasLabels=Y`);
  }
}
