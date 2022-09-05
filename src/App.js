import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Items from "./components/items/items";
import Categories from "./components/categories/categories";
import ShowFullItem from "./components/showFullItem/showFullItem";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул Серый",
          img: "chair-grey.jpg",
          description: "Lorem ipsum dolor sit amet, contestecur adipsitation",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стол",
          img: "table-1.jpg",
          description: "Lorem ipsum dolor sit amet, contestecur adipsitation",
          category: "tables",
          price: "109.99",
        },
        {
          id: 3,
          title: "Диван",
          img: "sofa-1.jpg",
          description: "Lorem ipsum dolor sit amet, contestecur adipsitation",
          category: "sofa",
          price: "149.99",
        },
        {
          id: 4,
          title: "Лампа",
          img: "light-1.jpg",
          description: "Lorem ipsum dolor sit amet, contestecur adipsitation",
          category: "light",
          price: "20.99",
        },
        {
          id: 5,
          title: "Стул Синий",
          img: "chairs-2.jpg",
          description: "Lorem ipsum dolor sit amet, contestecur adipsitation",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 6,
          title: "Диван",
          img: "sofa-2.jpg",
          description: "Lorem ipsum dolor sit amet, contestecur adipsitation",
          category: "sofa",
          price: "129.99",
        },
        {
          id: 7,
          title: "Лампа стена",
          img: "light-2.jpg",
          description: "Lorem ipsum dolor sit amet, contestecur adipsitation",
          category: "light",
          price: "30.19",
        },
        {
          id: 8,
          title: "Стол",
          img: "table-2.jpg",
          description: "Lorem ipsum dolor sit amet, contestecur adipsitation",
          category: "table",
          price: "64.99",
        },
        {
          id: 9,
          title: "Лампа",
          img: "light-3.jpg",
          description: "Lorem ipsum dolor sit amet, contestecur adipsitation",
          category: "light",
          price: "25.11",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };

    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header onDelete={this.deleteOrder} orders={this.state.orders} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}

        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    console.log(category);
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
