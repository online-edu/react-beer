import React from "react";
import { NavLink } from "react-router-dom";

const BreadcrumbItem = ({ title, link, active }) => (
  <li className="breadcrumb-item">
    {(!active && <NavLink to={link}>{title}</NavLink>) || title}
  </li>
);

export default BreadcrumbItem;
