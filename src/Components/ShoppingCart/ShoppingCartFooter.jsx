import React from "react";
import Context from "../../Context/Context";

export default function ShoppingCartFooter() {
  const { showCart } = React.useContext(Context);
  const [isShow, setIsShow] = showCart;

  // handle close btn click
  const handleClose = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="shopping-cart-footer">
      <div className="btn" onClick={handleClose}>
        Close
      </div>
    </div>
  );
}
