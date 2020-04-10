import React from "react";
import "./style.css";
import ProductsCard from "./ProductsCard";

export default function ProductsContainer() {
  return (
    <div className="products-container">
      <div className="products-header">
        <div>
          Sort By <i class="fas fa-caret-down"></i>
        </div>
        <div>
          Filter By <i class="fas fa-caret-down"></i>
        </div>
      </div>
      <div className="products-body">
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </div>
    </div>
  );
}
