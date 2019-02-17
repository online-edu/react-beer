import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => (
  <div className="container my-4">
    <div className="card">
      <div className="px-3 py-3">
        <h1 className="display-4">Hello, there!</h1>
        <p className="lead">It looks like you are not here wishfully.</p>
        <hr className="my-4" />
        <p>No worries, just click on below button.</p>
        <NavLink
          to="/dashboard"
          className="btn btn-primary btn-lg"
          role="button"
        >
          Go home
        </NavLink>
      </div>
    </div>
  </div>
);

export default NotFound;
