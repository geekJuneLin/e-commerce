import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./style.css";

export default function Filter() {
  const [value, setValue] = React.useState({
    min: 0,
    max: 200,
  });

  return (
    <div className="filter">
      <div className="filter-price">
        <h4>Filter By Price</h4>
        <InputRange
          draggableTrack
          formatLabel={(value) => `$${value}`}
          maxValue={200}
          minValue={0}
          value={value}
          onChange={(value) => setValue(value)}
        />
      </div>
    </div>
  );
}
