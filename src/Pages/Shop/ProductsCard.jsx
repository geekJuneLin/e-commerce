import React from "react";
import "./style.css";

export default function ProductsCard(props) {
  const { name, img, description, price, addToCart } = props;

  // handle add to cart
  const handleAddToCart = () => {
    addToCart({
      name: name,
      price: price,
      img: img,
    });
  };

  return (
    <div className="products-card">
      <img src={img} alt="img" />
      <h4>{name}</h4>
      <p>{description}</p>
      <p>${price}</p>
      <div className="add-btn" onClick={handleAddToCart}>
        Add to cart
      </div>
    </div>
  );
}
