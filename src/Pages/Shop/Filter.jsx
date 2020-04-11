import React, { useEffect } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./style.css";
import Context from "../../Context/Context";

export default function Filter() {
  const [value, setValue] = React.useState({
    min: 0,
    max: 0,
  });

  // products in stock
  const { products, filtered } = React.useContext(Context);
  const [productsInStock, setProductsInStock] = products;
  const [filteredProducts, setFilteredProducts] = filtered;

  // max price for filter
  const [maxPrice, setMaxPrice] = React.useState(1);

  useEffect(() => {
    // find the max price in the products in stock
    var maxValue = 0;
    productsInStock.map((p) => {
      maxValue = maxValue < Number(p.price) ? p.price : maxValue;
    });
    setMaxPrice(Number(maxValue));
    setValue({
      min: 0,
      max: Number(maxValue),
    });
  }, []);

  useEffect(() => {
    // filter the displaying products
    const filteredProducts = productsInStock.filter((p) => {
      return p.price <= value.max && p.price >= value.min;
    });
    setFilteredProducts(filteredProducts);
  }, [value]);

  return (
    <div className="filter">
      <div className="filter-price">
        <h4>Filter By Price</h4>
        <InputRange
          draggableTrack
          formatLabel={(value) => `$${value}`}
          maxValue={maxPrice}
          minValue={0}
          value={value}
          onChange={(value) => setValue(value)}
        />
      </div>
    </div>
  );
}
