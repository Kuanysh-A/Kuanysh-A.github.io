import React, { useState, useEffect } from "react";
import logo1 from "./../assets/bmcNavBlack.png";
import logo2 from "./../assets/bmcNavGray.png";

const Navbar = (props) => {
  // const [isHidden, setIsHidden] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.pageYOffset > 2200) {
  //       setIsHidden(true);
  //     } else {
  //       setIsHidden(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  //also add this inv nav after rounded-br-lg ${
  // isHidden ? "hidden" : ""
  // }
  return (
    <nav
      className={`flex justify-center z-50 items-center h-[75px] w-21 rounded-tr-none rounded-tl-none rounded-bl-none rounded-br-lg  ${props.className}`}
    >
      <ul className="flex  justify-center items-center font-inter font-medium leading-navLh text-navFh">
        <li>
          <img
            src={logo1}
            className="opacity-50 hover:opacity-100 mr-60 ml-20 "
          ></img>
        </li>

        <li className="mr-5 mt-6 mb-6 text-opacity-60 text-zinc-800">
          Главная
        </li>
        <li className="ml-6 mr-5 mt-6 mb-6 hover:border-l-2 text-zinc-800 text-opacity-60 hover:text-opacity-100 hover:text-black hover:border-blue-900 hover:rounded   ">
          Кейсы
        </li>
        <li className="ml-6 mr-5 mt-6 mb-6 text-opacity-60 text-zinc-800">
          Услуги
        </li>
        <li className="ml-6 mr-5 mt-6 mb-6 text-opacity-60 text-zinc-800">
          О нас
        </li>
        <li className="ml-6 mr-5 mt-6 mb-6 text-opacity-60 text-zinc-800">
          Калькулятор стоимости
        </li>
        <li className="font-light ml-5 mr-5 mt-5 mb-6 text-opacity-60 text-zinc-800">
          {props.button}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
