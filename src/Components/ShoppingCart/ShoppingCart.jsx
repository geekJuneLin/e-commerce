import React from "react";
import "./style.css";
import Context from "../../Context/Context";
import ShoppingCard from "./ShoppingCartCard";
import Subtotal from "./Subtotal";
import ShoppingCartCard from "./ShoppingCartCard";
import ShoppingCartFooter from "./ShoppingCartFooter";

export default function ShoppingCart() {
  const { items, showCart } = React.useContext(Context);

  const [numberOfItems, setItems] = items;
  const [isShow, setIsShow] = showCart;

  return (
    <div
      className="shopping-cart"
      style={{ display: isShow ? "block" : "none" }}
    >
      <div className="shopping-cart-title">
        <Context.Consumer>
          {(context) => {
            return <h3>My Cart: {numberOfItems}</h3>;
          }}
        </Context.Consumer>
      </div>
      <div className="shopping-cart-body">
        <ShoppingCard />
        <ShoppingCard />
        <ShoppingCard />
        <ShoppingCard />
        <Subtotal />
      </div>
      <ShoppingCartFooter />
    </div>
  );
}