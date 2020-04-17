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
      id
      productName
      productDescription
      productPrice
      productImg {
        url
      }
      productBrand {
        brandName
      }
      productSaleType
      productSpecs {
        screenSize
        supportNet
        celluarConnectivity
        battery
        rearCamera
        frontCamera
        storage
        color
      }
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
    <Query query={productsQuery}>
      {({ loading, error, data }) => {
        // check if is loading data
        if (loading) {
          console.log("loading...");
        }

        // check if there is any error
        if (error) {
          console.log(error);
        }

        // if neither of above, render the shop page and pass the data into the products container for rendering
        return (
          <>
            <Header />
            <ShopIntro />
            <div className="shop-container">
              <Filter />
              <ProductsContainer products={data} />
            </div>
            <Popup />
            <Footer />
          </>
        );
      }}
    </Query>
  );
}
