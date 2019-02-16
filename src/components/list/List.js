import React, { Component } from "react";

import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import ListEmpty from "./ListEmpty";
import "./List.scss";

class List extends Component {
  render() {
    const { btnCaption, title, items, loader, favorite } = this.props;
    return (
      <ul className="list-group cg-list">
        <ListHeader
          title={title}
          loader={loader}
          btnCaption={btnCaption}
          handleClick={this.props.onHeaderAction}
        />
        {(items &&
          items.length > 0 &&
          items.map(beer => (
            <ListItem
              item={beer}
              favorite={favorite}
              onFavoriteClick={fav => this.props.onFavoriteClick({ beer, fav })}
              key={beer.id}
            />
          ))) || <ListEmpty />}
      </ul>
    );
  }
}

export default List;
