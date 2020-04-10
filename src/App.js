import React from "react";
import "./App.css";
import Context from "./Context/Context";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import OnSale from "./Pages/OnSale";
import NewArrival from "./Pages/NewArrival";

function App() {
  // items in cart
  const [itemsInCart, setItemsInCart] = React.useState(10);

  // status of whether showing the cart
  const [showCart, setShowCart] = React.useState(false);

  return (
    <Context.Provider
      value={{
        items: [itemsInCart, setItemsInCart],
        showCart: [showCart, setShowCart],
      }}
    >
      <Router>
        <Route exact path="/" component={Shop} />
        <Route path="/on-sale" component={OnSale} />
        <Route path="/new-arrival" component={NewArrival} />
      </Router>
    </Context.Provider>
  );
}

export default App;
