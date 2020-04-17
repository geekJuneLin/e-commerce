import React from "react";
import "./App.css";
import Context from "./Context/Context";

import Products from "./products";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import OnSale from "./Pages/OnSale";
import NewArrival from "./Pages/NewArrival";
import ProductDetail from "./Pages/Detail/ProductDetail";
import MyCart from "./Pages/Cart/MyCart";

function App() {
  // items in cart
  const [itemsInCart, setItemsInCart] = React.useState([]);

  // status of whether showing the cart
  const [showCart, setShowCart] = React.useState(false);

  // products in store
  const [productsInStore, setProductsInStore] = React.useState(Products);

  // filtered products
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  // popup window props
  const [popup, setPopup] = React.useState({
    isShow: false,
    item: {
      name: "",
      img: "",
    },
  });

  return (
    <Context.Provider
      value={{
        items: [itemsInCart, setItemsInCart],
        showCart: [showCart, setShowCart],
        products: [productsInStore, setProductsInStore],
        filtered: [filteredProducts, setFilteredProducts],
        popupState: [popup, setPopup],
      }}
    >
      <Router>
        <Route exact path="/" component={Shop} />
        <Route path="/on-sale" component={OnSale} />
        <Route path="/new-arrival" component={NewArrival} />
        <Route
          path="/product-detail/:productName"
          render={(props) => <ProductDetail {...props} />}
        />
        <Route path="/myCart" component={MyCart} />
      </Router>
    </Context.Provider>
  );
}

export default App;
