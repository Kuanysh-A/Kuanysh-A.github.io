import React from "react";

const Card = (props) => {
  return (
    <div
      className={`bg-supergray text-white rounded-lg flex items-center justify-center ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
