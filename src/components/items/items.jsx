import React, { Component } from "react";
import Item from "../item/item";

export class items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((el) => {
          return <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} />;
        })}
      </main>
    );
  }
}

export default items;
