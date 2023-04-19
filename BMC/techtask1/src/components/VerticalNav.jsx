import React from "react";
import Logo from "./../assets/bmclogo.svg";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const VerticalNav = (props) => {
  const navigate = useNavigate();
  return (
    <nav
      className={`relative h-[680px] w-20 rounded-3xl justify-center items-center flex border-[2px] border-gray backdrop-filter backdrop-blur-lg ${props.className}`}
    >
      <img src={Logo} alt="" className="absolute top-0" />
      <ul className="text-center">
        <li className="mb-5">
          <a href="">
            <AiOutlineUnorderedList
              className="text-4xl text-seriy"
              onClick={() => navigate("/")}
            />
          </a>
        </li>
        <li className="mb-5">
          <span
            className={`text-gray font-medium text-3xl cursor-pointer ${
              props.active === "M" && "text-white"
            }`}
            onMouseEnter={() => props && props.onHover && props.onHover("M")}
            onClick={() => navigate("/marketing")}
          >
            M
          </span>
        </li>
        <li className="mb-5">
          <span
            className={`text-gray font-medium text-3xl cursor-pointer ${
              props.active === "S" && "text-white"
            }`}
            onMouseEnter={() => props && props.onHover && props.onHover("S")}
            onClick={() => navigate("/smm")}
          >
            S
          </span>
        </li>
        <li className="mb-5">
          <span
            className={`text-gray font-medium text-3xl cursor-pointer ${
              props.active === "P" && "text-white"
            }`}
            onMouseEnter={() => props && props.onHover && props.onHover("P")}
            onClick={() => navigate("/ad")}
          >
            P
          </span>
        </li>
        <li className="mb-5">
          <span
            className={`text-gray font-medium text-3xl cursor-pointer ${
              props.active === "Pr" && "text-white"
            }`}
            onMouseEnter={() => props && props.onHover && props.onHover("Pr")}
            onClick={() => navigate("/production")}
          >
            Pr
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default VerticalNav;
