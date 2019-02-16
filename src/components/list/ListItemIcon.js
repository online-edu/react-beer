import React from "react";

const ListItemIcon = ({ img, alt }) => (
  <img
    src={img}
    className="mr-3"
    style={{ width: "48px", height: "48px" }}
    alt={alt}
  />
);

export default ListItemIcon;
