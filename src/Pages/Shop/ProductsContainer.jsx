import React from "react";
import "./style.css";
import ProductsCard from "./ProductsCard";
import Context from "../../Context/Context";

export default function ProductsContainer() {
  const { products, items } = React.useContext(Context);

  // products in stock
  const [productsInStore, setProductsInStore] = products;

  // items added in the cart
  const [itemsInCart, setItemsInCart] = items;

  // add to cart
  const addToCart = (item) => {
    setItemsInCart([...itemsInCart, item]);
  };

  return (
    <div className="products-container">
      <div className="products-header">
        <div>
          Sort By <i className="fas fa-caret-down"></i>
        </div>
        <div>
          Filter By <i className="fas fa-caret-down"></i>
        </div>
      </div>
      <div className="products-body">
        {productsInStore.map((product, index) => {
          return (
            <ProductsCard
              key={index}
              name={product.name}
              img={product.img}
              description={product.description}
              price={product.price}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </div>
  );
}
