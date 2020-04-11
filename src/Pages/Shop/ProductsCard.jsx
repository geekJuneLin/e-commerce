import React, { useContext } from "react";
import "./style.css";
import Context from "../../Context/Context";

export default function ProductsCard(props) {
  const { name, img, description, price, addToCart } = props;

  const { popupState } = useContext(Context);
  const [popup, setPopup] = popupState;
  const { isShow, item } = popup;

  // handle add to cart
  const handleAddToCart = () => {
    addToCart({
      name: name,
      price: price,
      img: img,
    });

    setPopup({
      isShow: true,
      item: {
        name: name,
        img: img,
      },
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
