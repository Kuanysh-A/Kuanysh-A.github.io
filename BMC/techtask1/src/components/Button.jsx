import React from "react";

const BUTTON_STYLES =
  " rounded-xl  text-2xl px-5 py-4 flex items-center justify-center shadow-md";
// font-semibold
const Button = (props) => {
  return (
    <button className={`${BUTTON_STYLES} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;

// props - это параметр функции которая она принимает
// Компонента это функция рисующая JSX
// props это объект
