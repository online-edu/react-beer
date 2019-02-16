import React from "react";

const ListItem = ({ item }) => (
  <li className="list-group-item">
    <div className="row">
      <div className="col-md-2">
        <img
          src={item.labels.icon}
          className="mr-3"
          style={{ width: "48px", height: "48px" }}
          alt={item.nameDisplay}
        />
      </div>
      <div className="col-md-8 d-flex justify-content-between align-items-center">
        <h5 className="mt-0 mb-1">{item.nameDisplay}</h5>
      </div>
      <div className="col-md-2">
        <a href="#" className="btn btn-link">
          Details
        </a>
      </div>
    </div>
  </li>
);

export default ListItem;
