import React, { useEffect } from "react";
import "./style.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ShopIntro from "./ShopIntro";
import Filter from "./Filter";
import ProductsContainer from "./ProductsContainer";
import Popup from "../../Components/Popup/Popup";

// graphQL
import { Query } from "react-apollo";
import gql from "graphql-tag";

// compose the query for fetching data
const productsQuery = gql`
  query {
    products {
      productName
    }
  }
`;

export default function Shop() {
  // stick the nav bar on the top when users scroll the page down
  const handleScroll = () => {
    const header = document.getElementById("header");
    if (window.pageYOffset > header.clientHeight) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <ShopIntro />
      <div className="shop-container">
        <Filter />
        <Query query={productsQuery}>
          {({ loading, error, data }) => {
            if (loading) {
              console.log("loading...");
            }
            if (error) {
              console.log(error);
            }
            console.log(data);
            return <h1>test fetching data</h1>;
          }}
        </Query>
        <ProductsContainer />
      </div>
      <Popup />
      <Footer />
    </>
  );
}
