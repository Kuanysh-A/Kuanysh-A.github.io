import React from "react";

const NavButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`bg-primary rounded-full w-11 h-11 hover:w-9 hover:h-9 transition-width duration-150 ease-in-out text-white justify-center items-center flex ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default NavButton;
