import React from "react";

export default function ShoppingCartCard({ name, price, img }) {
  // remove btn click
  const handleRemove = () => {
    console.log("remove btn clicked!");
  };

  return (
    <div className="shopping-cart-card rounded-border">
      <img src={img} alt="img" />
      <div className="item-info">
        <h4>{name}</h4>
        <p>1 * ${price}</p>
        <div className="btn" onClick={handleRemove}>
          Remove
        </div>
      </div>
    </div>
  );
}
