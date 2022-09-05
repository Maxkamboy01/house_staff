import React, { Component } from "react";
import { FaRegWindowClose } from "react-icons/fa";

export class showFullItem extends Component {
  render() {
    return (
      <div className="fullitem">
        <div>
          <FaRegWindowClose className="closeitem"
            onClick={() => this.props.onShowItem(this.props.item)}
          />
          <img
            src={"/img/" + this.props.item.img}
            onClick={() => this.props.onShowItem(this.props.item)}
            alt="wait a minute"
          />
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
      </div>
    );
  }
}

export default showFullItem;
