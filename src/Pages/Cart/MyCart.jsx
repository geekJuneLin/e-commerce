import React, { useState } from "react";
import "./style.css";
import Header from "../../Components/Header";
import TableBody from "./TableBody";
import Context from "../../Context/Context";
import Alert from "../../Components/Alert/Alert";
import Subtotal from "./Subtotal";

export default function MyCart() {
  // get the itemsInCart from the context
  const { items } = React.useContext(Context);
  const [itemsInCart, setItemsInCart] = items;

  // is alert show
  const [isAlertShow, setIsShowAlert] = useState(false);

  // handle clear btn click
  const handleClearOnClick = () => {
    console.log("clear btn clicked!");
    setIsShowAlert(true);
  };

  // Alert btn click functions
  const onYesClick = () => {
    setItemsInCart([]);
  };

  const onNoClick = () => {
    setIsShowAlert(false);
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1>Shopping Cart</h1>
        {itemsInCart.length > 0 ? (
          <>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Product Name</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>

              {itemsInCart.map((item, index) => {
                return (
                  <TableBody
                    key={index}
                    img={item.img}
                    productName={item.name}
                    price={item.price}
                    quantity={"1"}
                  />
                );
              })}

              <tbody>
                <tr>
                  <td>
                    <button
                      className="clear-section"
                      onClick={handleClearOnClick}
                    >
                      Clear Cart
                    </button>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            {/* subtotal section */}
            <Subtotal />

            {/* Delete Alert */}
            {isAlertShow && (
              <Alert
                alert={"Are your sure?"}
                alertInfo={
                  "You are about to clear entire cart. Are you sure you want to do this?"
                }
                onYesClick={onYesClick}
                onNoClick={onNoClick}
              />
            )}
          </>
        ) : (
          <div className="empty-cart">
            <i className="fas fa-shopping-cart"></i>
            <h1>Your Cart is empty!</h1>
          </div>
        )}
      </div>
    </>
  );
}