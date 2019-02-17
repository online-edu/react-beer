import React from "react";

const ListEmpty = () => (
  <li className="list-group-item d-flex flex-column justify-content-between align-items-center cg-list__item">
    <span className="cg-list__item-empty-emoticon">🍻</span>
    <p className="h4 cg-list__item-empty">
      No beers? Who cares! Let's load...<span>😎</span>
    </p>
  </li>
);

export default ListEmpty;
