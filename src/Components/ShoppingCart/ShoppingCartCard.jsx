import React from "react";

export default function ShoppingCartCard() {
  // remove btn click
  const handleRemove = () => {
    console.log("remove btn clicked!");
  };

  return (
    <div className="shopping-cart-card rounded-border">
      <img src="https://static.toiimg.com/photo/61654288.cms" alt="img" />
      <div className="item-info">
        <h4>iPhone X</h4>
        <p>1 * $1299</p>
        <div className="btn" onClick={handleRemove}>
          Remove
        </div>
      </div>
    </div>
  );
}
