import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const HeaderBar = () => (
  <nav className="navbar sticky-top header cg-header">
    <NavLink to="/" className="navbar-brand cg-header__brand">
      Creative Groups <span>🍻</span>
    </NavLink>
  </nav>
);

export default HeaderBar;
