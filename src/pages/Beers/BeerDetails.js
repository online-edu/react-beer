import React, { Component } from "react";
import {
  Spinner,
  Breadcrumb,
  BreadcrumbItem,
  FavButton
} from "../../components";
import BeerService from "./BeerService";
import "./Beer.scss";

class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {},
      loading: true,
      favorite: false,
      err: false
    };
    this.beerService = new BeerService();
  }

  onFavoriteClick(fav) {
    this.beerService.onFavorite(this.state.beer, fav);
  }

  loadBeer(id) {
    this.beerService
      .loadBeerById(id)
      .then(({ data, status, errorMessage }) => {
        if (status !== "success") {
          this.handleError(errorMessage);
          return;
        }
        const { found } = this.beerService.findBeerById(data.id);
        this.setState({ beer: data, loading: false, favorite: found > 0 });
      })
      .catch(err => this.handleError(errorMessage));
  }

  handleError(err) {
    this.setState({ err: true });
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    this.loadBeer(params.id);
  }

  render() {
    const { beer, loading, favorite, err } = this.state;
    return (
      <div className="container-fluid px-4 py-4 beer-details">
        <div className="row">
          <div className="col-md-12">
            <Breadcrumb>
              <BreadcrumbItem title="Home" link="/" />
              <BreadcrumbItem title="Details" active={true} />
            </Breadcrumb>
            <div className="card">
              <div className="card-body">
                {(!loading && (
                  <section>
                    <h5 className="card-title mb-3">
                      {beer.nameDisplay}
                      <FavButton
                        favorite={favorite}
                        onClick={this.onFavoriteClick.bind(this)}
                      />
                    </h5>
                    <div className="row">
                      <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img
                          src={
                            beer.isOrganic === "Y"
                              ? beer.labels.medium
                              : beer.labels.large
                          }
                          className="img-thumbnail px-2 py-2"
                          alt={beer.nameDisplay}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-md-12">
                            <p className="h6">Description:</p>
                            <p className="mb-0">
                              <em>{beer.style.description}</em>
                            </p>
                          </div>
                        </div>
                        <div className="dropdown-divider" />
                        <dl className="row beer-details__row ml-0">
                          <dt className="col-sm-3">Name</dt>
                          <dd className="col-sm-9">{beer.style.name}</dd>
                          <dt className="col-sm-3">Short name</dt>
                          <dd className="col-sm-9">{beer.style.shortName}</dd>
                          <dt className="col-sm-3">Category</dt>
                          <dd className="col-sm-9">
                            {beer.style.category.name}
                          </dd>
                          <dt className="col-sm-3">Organic</dt>
                          <dd className="col-sm-9">
                            {beer.isOrganic === "Y" ? "Yes" : "No"}
                          </dd>
                          <dt className="col-sm-3">IBU Min.</dt>
                          <dd className="col-sm-9">{beer.style.ibuMin}</dd>
                          <dt className="col-sm-3">IBU Max.</dt>
                          <dd className="col-sm-9">{beer.style.ibuMax}</dd>
                        </dl>
                      </div>
                    </div>
                  </section>
                )) ||
                  (!err && <Spinner />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerDetails;
