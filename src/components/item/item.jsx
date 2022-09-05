import React, { Component } from "react";

export class item extends Component {
  render() {
    return (
      <div className="item">
        <img
          src={"/img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}
        alt="wait a minute"/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.description}</p>
        <b>${this.props.item.price}</b>
        <div
          className="add-cart"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          +
        </div>
      </div>
    );
  }
}

export default item;
