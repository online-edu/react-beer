import React from "react";
import ListItemIcon from "./ListItemIcon";
import ListItemActions from "./ListItemActions";

const ListItem = props => (
  <li className="list-group-item">
    <div className="row">
      <div className="col-md-1">
        <ListItemIcon
          img={props.item.labels.icon}
          alt={props.item.nameDisplay}
        />
      </div>
      <div className="col-md-8 d-flex justify-content-between align-items-center">
        <h5 className="mt-0 mb-1 ml-1">{props.item.nameDisplay}</h5>
      </div>
      <div className="col-md-3 d-flex justify-content-between align-items-center">
        <ListItemActions
          onFavoriteClick={toggle => props.onFavoriteClick(toggle)}
          itemId={props.item.id}
        />
      </div>
    </div>
  </li>
);

export default ListItem;
