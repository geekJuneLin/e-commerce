import React from "react";
import Context from "../Context/Context";
import { Link } from "react-router-dom";

export default function Header() {
  const { showCart } = React.useContext(Context);
  const [isShow, setShow] = showCart;

  function showOrHideCart() {
    setShow(!isShow);
  }

  return (
    <header>
      <nav className="box-shadow">
        <div className="nav-brand">
          <Link className="nav-link" to="/">
            E-Commerce
          </Link>
        </div>
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Shop
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/new-arrival">
              New Arrival
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/on-sale">
              On Sale
            </Link>
          </li>
          <li>
            <div className="cart-btn" onClick={showOrHideCart}>
              Cart <i className="fas fa-cart-plus"></i>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
