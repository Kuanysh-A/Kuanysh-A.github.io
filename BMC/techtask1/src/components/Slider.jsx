import React from "react";

const Slider = ({ value, onChange, props }) => {
  return (
    <input
      onChange={onChange}
      type="range"
      className={`cursor-pointer accent-primary `}
      min={10}
      max={100}
      value={value}
      step={10}
    />
  );
};

export default Slider;
