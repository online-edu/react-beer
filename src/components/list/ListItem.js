import React from "react";
import ListItemIcon from "./ListItemIcon";
import ListItemActions from "./ListItemActions";

const ListItem = props => (
  <li className="list-group-item">
    <div className="media">
      <ListItemIcon img={props.item.labels.icon} alt={props.item.nameDisplay} />
      <div className="media-body">
        <div className="float-left">
          <h5 className="mt-0">{props.item.style.shortName}</h5>
          <p className="mb-0">
            <em>{props.item.nameDisplay}</em>
          </p>
        </div>
        <ListItemActions
          favorite={props.favorite}
          onFavoriteClick={toggle => props.onFavoriteClick(toggle)}
          itemId={props.item.id}
        />
      </div>
    </div>
  </li>
);

export default ListItem;
