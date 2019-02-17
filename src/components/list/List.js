import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import ListEmpty from "./ListEmpty";
import "./List.scss";

class List extends Component {
  render() {
    const { btnCaption, title, items = [], loader, favorite } = this.props;
    return (
      <ul className="list-group cg-list">
        <TransitionGroup>
          <ListHeader
            title={title}
            loader={loader}
            btnCaption={btnCaption}
            handleClick={this.props.onHeaderAction}
          />
          {items &&
            items.map(beer => (
              <CSSTransition key={beer.id} timeout={500} classNames="fade">
                <ListItem
                  item={beer}
                  favorite={favorite}
                  onFavoriteClick={fav =>
                    this.props.onFavoriteClick({ beer, fav })
                  }
                />
              </CSSTransition>
            ))}
          {items.length === 0 && (
            <CSSTransition timeout={100} classNames="fade">
              <ListEmpty />
            </CSSTransition>
          )}
        </TransitionGroup>
      </ul>
    );
  }
}

export default List;
