import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Avatar = (props) => {
  return (
    <div
      className={`absolute cursor-pointer ${
        props.ratio && props.ratio === "medium"
          ? "w-40 h-40"
          : props.ratio === "large"
          ? "w-48 h-48"
          : "w-36 h-36"
      } ${props.className}`}
    >
      <img src={props.img} alt="" className="rounded-full w-full" />
      <button className="absolute w-8 h-8 bottom-0 right-0 bg-supergray rounded-full flex items-center justify-center">
        <AiOutlineArrowRight
          color="#FFFFFF33"
          className={
            props.ratio && props.ratio === "medium"
              ? "w-12 h-12"
              : props.ratio === "large"
              ? "w-16 h-16"
              : "w-7 h-7"
          }
        />
      </button>
    </div>
  );
};
