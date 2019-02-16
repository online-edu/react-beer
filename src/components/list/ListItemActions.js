import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ListItemActions extends Component {
  constructor(props) {
    super(props);
    this.toggle = false;
    this.state = {
      icon: this.props.favorite ? "favorite" : "favorite_border"
    };
  }

  onToggle() {
    this.setState(
      {
        icon: this.toggle ? "favorite_border" : "favorite"
      },
      () => {
        this.toggle = !this.toggle;
        this.props.onFavoriteClick(this.toggle);
      }
    );
  }

  render() {
    const { itemId: id } = this.props;

    return (
      <div>
        <button
          type="button"
          className="btn btn-link"
          onClick={this.onToggle.bind(this)}
        >
          <i className="material-icons">{this.state.icon}</i>
        </button>
        <NavLink to={`/details/${id}`} className="btn btn-link">
          Details
        </NavLink>
      </div>
    );
  }
}

export default ListItemActions;
