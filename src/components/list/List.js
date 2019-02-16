import React, { Component } from "react";

import ListHeader from "./ListHeader";
import ListItem from "./ListItem";

class List extends Component {
  render() {
    const { btnCaption, title, items, loader } = this.props;
    return (
      <ul className="list-group">
        <ListHeader
          title={title}
          loader={loader}
          btnCaption={btnCaption}
          handleClick={this.props.onHeaderAction}
        />
        {items &&
          items.map(beer => (
            <ListItem
              item={beer}
              onFavoriteClick={fav => this.props.onFavoriteClick({ beer, fav })}
              key={beer.id}
            />
          ))}
      </ul>
    );
  }
}

export default List;
