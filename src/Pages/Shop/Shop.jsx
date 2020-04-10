import React from "react";
import "./style.css";
import Header from "../../Components/Header";
import ShoppingCart from "../../Components/ShoppingCart/ShoppingCart";
import Footer from "../../Components/Footer";
import ShopIntro from "./ShopIntro";
import Filter from "./Filter";
import ProductsContainer from "./ProductsContainer";

export default function Shop() {
  return (
    <>
      <Header />
      <ShoppingCart />
      <ShopIntro />
      <div className="shop-container">
        <Filter />
        <ProductsContainer />
      </div>
      <Footer />
    </>
  );
}
