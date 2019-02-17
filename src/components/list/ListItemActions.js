import React from "react";
import { NavLink } from "react-router-dom";
import FavButton from "../fav-button";

const ListItemActions = props => (
  <div className="float-right mt-2">
    <FavButton
      favorite={props.favorite}
      onClick={fav => props.onFavoriteClick(fav)}
    />
    <NavLink to={`/beer-details/${props.itemId}`} className="btn btn-link">
      Details
    </NavLink>
  </div>
);

export default ListItemActions;
