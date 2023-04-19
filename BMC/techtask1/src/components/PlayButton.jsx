import React from "react";

export const PlayButton = (props) => {
  return (
    <button
      className={`rounded-xl bg-gray justify-center items-center cursor-pointer flex ${props.className}`}
    >
      {props.children}
    </button>
  );
};
