import React, { Component } from "react";

class FavButton extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.props.favorite;
    this.state = {
      icon: this.props.favorite ? "favorite" : "favorite_border"
    };
  }

  onToggle() {
    this.setState(
      {
        icon: this.toggle ? "favorite_border" : "favorite"
      },
      () => {
        this.toggle = !this.toggle;
        this.props.onClick(this.toggle);
      }
    );
  }

  render() {
    const { icon } = this.state;
    return (
      <button
        type="button"
        className="btn btn-link"
        onClick={this.onToggle.bind(this)}
      >
        <i className="material-icons">{icon}</i>
      </button>
    );
  }
}

export default FavButton;
