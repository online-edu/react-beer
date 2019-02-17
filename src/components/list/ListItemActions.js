import React from "react";
import { NavLink } from "react-router-dom";
import FavButton from "../fav-button";

const ListItemActions = props => (
  <div>
    <FavButton
      favorite={props.favorite}
      onClick={fav => props.onFavoriteClick(fav)}
    />
    <NavLink to={`/details/${props.id}`} className="btn btn-link">
      Details
    </NavLink>
  </div>
);

export default ListItemActions;
