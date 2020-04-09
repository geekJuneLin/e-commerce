import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";

export default function Shop() {
  return (
    <>
      <Header />
      <ShoppingCart />
      <p>Shop Page</p>
      <Footer />
    </>
  );
}
