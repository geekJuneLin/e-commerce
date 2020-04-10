import React from "react";
import "./style.css";
import Context from "../../Context/Context";
import ShoppingCard from "./ShoppingCartCard";
import Subtotal from "./Subtotal";
import ShoppingCartCard from "./ShoppingCartCard";
import ShoppingCartFooter from "./ShoppingCartFooter";

export default function ShoppingCart() {
  const { items, showCart } = React.useContext(Context);

  const [cartItems, setCartItems] = items;
  const [isShow, setIsShow] = showCart;

  // subtotal
  const [subtotal, setSubtotal] = React.useState(0);

  return (
    <div
      className="shopping-cart"
      style={{ display: isShow ? "block" : "none" }}
    >
      <div className="shopping-cart-title">
        <Context.Consumer>
          {(context) => {
            return <h3>My Cart: {cartItems.length}</h3>;
          }}
        </Context.Consumer>
      </div>
      <div className="shopping-cart-body">
        {cartItems.map((item, index) => {
          return (
            <ShoppingCard
              key={index}
              name={item.name}
              price={item.price}
              img={item.img}
            />
          );
        })}
        <Subtotal subtotal={subtotal} />
      </div>
      <ShoppingCartFooter />
    </div>
  );
}
