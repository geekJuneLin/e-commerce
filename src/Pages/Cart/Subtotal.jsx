import React from "react";

export default function Subtotal({ subtotal }) {
  return (
    <div className="my-cart-subtotal">
      <div className="subtotal-top">
        <div className="left">
          <span>Subtotal:</span>
        </div>
        <div className="right">$ {subtotal}</div>
      </div>
      <div className="subtotal-mid">
        <div className="left">
          <span>Delivery:</span>
        </div>
        <div className="right">$ 5</div>
      </div>
      <div className="subtotal-bot">
        <div className="left">
          <span>Total Due:</span>
        </div>
        <div className="right">
          <span className="unit">NZD</span> $ {Number(subtotal) + Number(5)}
        </div>
        <button>
          <i className="fas fa-shield-alt"></i>Secure Checkout
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
