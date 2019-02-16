import React from "react";
import Spinner from "../spinner";

const ListHeader = props => (
  <li className="list-group-item d-flex justify-content-between align-items-center">
    <h5 className="mt-0 mb-1">{props.title}</h5>
    {props.loader && <Spinner />}
    <button
      type="button"
      className="btn btn-secondary"
      onClick={props.handleClick}
    >
      {props.btnCaption}
    </button>
  </li>
);

export default ListHeader;
