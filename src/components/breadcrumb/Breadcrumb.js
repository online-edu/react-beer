import React from "react";

const Breadcrumb = props => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">{props.children}</ol>
  </nav>
);

export default Breadcrumb;
