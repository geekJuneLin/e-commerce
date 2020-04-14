import React from "react";
import "./style.css";

export default function TableBody({ img, productName, price, quantity }) {
  return (
    <tbody className="table-body">
      <tr>
        <td>
          <img src={img} alt="product-img" />
        </td>
        <td className="item-name">
          <p>{productName}</p>
        </td>
        <td>$ {price}</td>
        <td>{quantity}</td>
        <td>$ {price * quantity} inc</td>
      </tr>
    </tbody>
  );
}
