import React, { useEffect, useState } from "react";
import "./style.css";
import context from "../../Context/Context";
import Header from "../../Components/Header";
import Context from "../../Context/Context";
import Popup from "../../Components/Popup/Popup";

export default function ProductDetail({ match }) {
  // destructuring the match,
  // and parse the productName passed from the shop page
  const {
    params: { productName },
  } = match;

  // get the product using context
  const { products, items, popupState } = React.useContext(Context);
  const productsInStore = products[0];

  // items in cart
  const [itemsInCart, setItemsInCart] = items;

  // pop up state
  const [popup, setPopup] = popupState;

  const [item, setItem] = useState({
    img: "",
    price: "",
    brand: "",
    specs: {},
  });

  // handle add to cart btn click
  const handleOnClick = () => {
    console.log("add to cart btn clicked!");
    setItemsInCart([
      ...itemsInCart,
      {
        name: productName,
        price: item.price,
        img: item.img,
      },
    ]);

    // show the added popup info
    setPopup({
      isShow: true,
      item: {
        name: productName,
        img: item.img,
      },
    });
  };

  useEffect(() => {
    productsInStore.forEach((p) => {
      if (productName === p.name) {
        setItem({
          img: p.img,
          price: p.price,
          brand: p.brand,
          specs: p.specs,
        });
        return;
      }
    });
  }, []);

  return (
    <>
      <Header />
      <div className="detail-container">
        {/* details specs img */}
        <div className="detail-container-body">
          <h1>{productName}</h1>
          <div className="detail-img-specs">
            <div className="detail-img">
              <img src={item.img} alt="product-img" />
            </div>
            <div className="detail-specs">
              <div className="detail-specs-overall-info">
                <b>Brand: </b> {item.brand}
              </div>
              <ul>
                <li>
                  <b>Screen Size: </b>
                  {item.specs.screenSize}
                </li>
                <li>
                  <b>Celluar Connectivity: </b>
                  {item.specs.celluarConnectivity}
                </li>
                <li>
                  <b>Supported Network: </b>
                  {item.specs.supportNet}
                </li>
                <li>
                  <b>Battery Capacity: </b>
                  {item.specs.battery}
                </li>
                <li>
                  <b>Rear Camera: </b>
                  {item.specs.rearCamera}
                </li>
                <li>
                  <b>Front-Facing Camera: </b>
                  {item.specs.frontCamera}
                </li>
                <li>
                  <b>Storage Size: </b>
                  {item.specs.storage}
                </li>
                <li>
                  <b>Colour: </b>
                  {item.specs.color}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* add to cart */}
        <div className="add-to-cart">
          <h2>${item.price}</h2>
          <p className="pick-up">
            <b>Store Pickup:</b> Pick up is unavailable
          </p>
          <p className="delivery">
            <b>Delivery:</b> Ships in 2 days
          </p>
          <button className="add-to-cart-btn" onClick={handleOnClick}>
            <i className="fas fa-shopping-cart"></i>Add to cart
          </button>
        </div>

        {/* popup */}
        <Popup />
      </div>
    </>
  );
}
