import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "../Order/Order";

const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach((el) => {
    sum += Number.parseFloat(el.price);
  });
  return (
    <div>
      {props.orders.map((el) => {
        return <Order onDelete={props.onDelete} key={el.id} item={el} />;
      })}
      <p className="summa">Кол-во: ${new Intl.NumberFormat().format(sum)}</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товары не добавлены</h2>
    </div>
  );
};

function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          className={`shop-cart ${cartOpen && "active"}`}
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
        />

        {cartOpen && (
          <div className="shop-cart-wrapper">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}

export default Header;
