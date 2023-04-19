import React from "react";

const CheckButton = (props) => {
  return (
    <div className="bg-black">
      <button className=" rounded-md bg-transparent text-white font-normal px-6 py-2 flex items-center justify-center border-white border">
        {props.children}
      </button>
    </div>
  );
};

export default CheckButton;
