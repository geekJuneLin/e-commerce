import React from "react";
import "./style.css";
import Header from "../../Components/Header";
import TableBody from "./TableBody";

export default function MyCart() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Shopping Cart</h1>
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

          <TableBody
            img={
              "https://www.pbtech.co.nz/imgprod/M/P/MPHAPP21055800D__1.jpg?h=1759541470"
            }
            productName={"Apple iPhone XS 64GB Black"}
            price={"1298.99"}
            quantity={"1"}
          />

          <TableBody
            img={
              "https://www.pbtech.co.nz/imgprod/M/P/MPHAPP174323__3.jpg?h=188816055"
            }
            productName={"Apple iPhone 7 32GB Black"}
            price={"598.99"}
            quantity={"2"}
          />

          <TableBody
            img={
              "https://www.pbtech.co.nz/imgprod/M/P/MPHSAM21000__1.jpg?h=1212799516"
            }
            productName={"Samsung Galaxy A10 (2019)"}
            price={"247.00"}
            quantity={"4"}
          />
        </table>
      </div>
    </>
  );
}
