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
      favorite: false
    };
    this.beerService = new BeerService();
  }

  onFavoriteClick(fav) {
    this.beerService.onFavorite(this.state.beer, fav);
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    this.beerService
      .loadBeerById(params.id)
      .then(({ data }) => {
        const { found } = this.beerService.findBeerById(data.id);
        this.setState({ beer: data, loading: false, favorite: found > 0 });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { beer, loading, favorite } = this.state;
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
                      <div className="col-md-4">
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
                )) || <Spinner />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerDetails;
