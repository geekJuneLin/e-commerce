import React from "react";
import "./style.css";
import Header from "../../Components/Header";

export default function ProductDetail() {
  return (
    <>
      <Header />
      <div className="detail-container">
        <h1>
          Samsung Galaxy A10 (2019) Smartphone 2GB+32GB Black - 2 Year Warranty
        </h1>
        <div className="detail-container-body">
          <div className="detail-img">
            <img
              src="https://www.pbtech.co.nz/imgprod/M/P/MPHSAM21000__2.jpg?h=3510668198"
              alt="product-img"
            />
          </div>
          <div className="detail-specs">
            <div className="detail-specs-overall-info">
              <b>Brand: </b> Samsung
            </div>
            <ul>
              <li>
                <b>Screen Size: </b>
                6.2 inches
              </li>
              <li>
                <b>Celluar Connectivity: </b>
                4G (Single SIM)
              </li>
              <li>
                <b>Supported Network: </b>
                Vodafone, 2 Degrees, Spark, Skinny
              </li>
              <li>
                <b>Battery Capacity: </b>
                3400mAh
              </li>
              <li>
                <b>Rear Camera: </b>
                13 Megapixels
              </li>
              <li>
                <b>Front-Facing Camera: </b>5 Megapixels
              </li>
              <li>
                <b>Storage Size: </b>32GB
              </li>
              <li>
                <b>Colour: </b>Black
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
