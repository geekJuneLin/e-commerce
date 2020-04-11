import React from "react";
import "./style.css";

export default function Popup() {
  return (
    <div className="pop-up">
      <div className="pop-up-window">
        <img
          src="https://static.toiimg.com/photo/61654288.cms"
          alt="product-img"
        />
        <h3>Products added to your cart.</h3>
        <p>
          You've added{" "}
          <span className="product-name"> iPhone X 64 GB Black </span>
          to your cart
        </p>
        <div className="btns">
          <button>Continue shopping</button>
          <button>Proceed to cart</button>
        </div>
        <div className="close-btn">X</div>
      </div>
    </div>
  );
}
