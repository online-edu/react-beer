import React from "react";
import Spinner from "../spinner";

const ListHeader = props => (
  <li className="list-group-item d-flex justify-content-between align-items-center cg-list__item">
    <h5 className="mt-0 mb-1">{props.title}</h5>
    {props.loader && <Spinner />}
    {props.btnCaption && (
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleClick}
      >
        {props.btnCaption}
      </button>
    )}
  </li>
);

export default ListHeader;
