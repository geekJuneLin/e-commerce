import React, { useEffect } from "react";
import "./style.css";
import ProductsCard from "./ProductsCard";
import Context from "../../Context/Context";

export default function ProductsContainer({ products }) {
  // get the context
  const { filtered, items } = React.useContext(Context);

  // products in stock
  const [productsInStore, setProductsInStore] = filtered;

  // original products in store
  const product = products ? products.products : null;

  // items added in the cart
  const [itemsInCart, setItemsInCart] = items;

  // add to cart
  const addToCart = (item) => {
    setItemsInCart([...itemsInCart, item]);
  };

  // addEventListener to the selections
  useEffect(() => {
    const sortSelections = document.getElementById("sort-selection");
    const filterSelections = document.getElementById("filter-selection");
    const reset = document.getElementById("reset-btn");

    // add listener
    sortSelections.addEventListener("change", handleSortOnChange);
    filterSelections.addEventListener("change", handleFilterOnChange);
    reset.addEventListener("click", handleResetOnClick);

    // remove listener
    return () => {
      sortSelections.removeEventListener("change", handleSortOnChange);
      filterSelections.removeEventListener("change", handleFilterOnChange);
      reset.removeEventListener("click", handleResetOnClick);
    };
  });

  // handle selection onChange
  const handleSortOnChange = (e) => {
    console.log(productsInStore);
    const sorted = productsInStore.slice();
    switch (e.target.value) {
      case "Price up":
        sorted.sort((a, b) => {
          return a.productPrice - b.productPrice;
        });
        setProductsInStore(sorted);
        break;
      case "Price down":
        sorted.sort((a, b) => {
          return b.productPrice - a.productPrice;
        });
        setProductsInStore(sorted);
        break;
      case "Brand":
        sorted.sort((a, b) => {
          return a.productName > b.productName ? 1 : -1;
        });
        setProductsInStore(sorted);
        break;
      default:
        break;
    }
  };

  // handle filter on change
  const handleFilterOnChange = (e) => {
    console.log("filtering by " + e.target.value);
    const sorted = product.slice();
    switch (e.target.value) {
      case "New":
        setProductsInStore(
          sorted.filter((p) => {
            return p.productSaleType === "New";
          })
        );
        break;
      case "On Sale":
        setProductsInStore(
          sorted.filter((p) => {
            return p.productSaleType === "On Sale";
          })
        );
        break;
      case "Most Popular":
        setProductsInStore(
          sorted.filter((p) => {
            return p.productSaleType === "Most Popular";
          })
        );
        break;
      default:
        break;
    }
  };

  // handle reset btn onClick
  const handleResetOnClick = () => {
    setProductsInStore(product);
  };

  return (
    <div className="products-container">
      <div className="products-header">
        <div className="select">
          Sort By:
          <select id="sort-selection">
            <option value="Brand">Brand</option>
            <option value="Price up">Price up</option>
            <option value="Price down">Price down</option>
          </select>
        </div>

        <div className="select">
          Filter By:
          <select id="filter-selection">
            <option value="New">New</option>
            <option value="On Sale">On Sale</option>
            <option value="Most Popular">Most Popular</option>
          </select>
        </div>

        <button id="reset-btn">Reset filter</button>
      </div>
      <div className="products-body">
        {productsInStore.map((product) => {
          return (
            <ProductsCard
              key={product.id}
              name={product.productName}
              img={product.productImg[0].url}
              description={product.productDescription}
              price={product.productPrice}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </div>
  );
}
