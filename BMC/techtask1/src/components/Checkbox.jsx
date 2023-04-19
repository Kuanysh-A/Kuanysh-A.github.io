import React from "react";

const Checkbox = (props) => {
  return (
    <div>
      <input
        type="checkbox"
        name=""
        id={props.label}
        className="rounded-md mr-3"
      />
      {props.label && (
        <label
          className="font-inter font-normal leading-6"
          htmlFor={props.label}
        >
          {props.label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
