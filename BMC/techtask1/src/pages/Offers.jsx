import React, { useState } from "react";
import Vector22 from "./../assets/Vector22.svg";
import { VerticalNav } from "../components/VerticalNav";

export const Offers = () => {
  const [active, setActive] = useState("");

  const handleHover = (letter) => {
    setActive(letter);
  };

  return (
    <div className="relative w-full h-screen bg-interestingdark">
      <img
        src={Vector22}
        alt=""
        className="absolute w-[316px] h-[221px] mt-[310px]"
      />
      <div className="absolute mt-[30px]">
        <VerticalNav
          className="absolute ml-[125px] w-[74px] h-[674px] cursor-pointer"
          active={active}
          onHover={handleHover}
        />
      </div>
      <span className="absolute text-xl text-white px-3 py-1 bg-primary mt-[100px] ml-[385px] rounded-lg">
        Услуги
      </span>
      <div className="absolute bg-primary rounded-full w-6 h-6 mt-[200px] ml-[300px]"></div>
      <span className="absolute font-bold text-[111px] text-white mt-[120px] ml-[377px]">
        МАРКЕТИНГ
      </span>
      <div
        className={`absolute rounded-full w-6 h-6 mt-[310px] ml-[581px] ${
          active === "S" ? "bg-primary" : "bg-noisecolor"
        }`}
      ></div>

      <span
        className={`absolute font-bold text-[111px] text-noisecolor mt-[230px] ml-[658px] ${
          active === "S" && "text-white"
        }`}
      >
        SMM/МЕДИА
      </span>
      <div
        className={`absolute rounded-full w-6 h-6 mt-[420px] ml-[402px] ${
          active === "P" ? "bg-primary" : "bg-noisecolor"
        }`}
      ></div>
      <span
        className={`absolute font-bold text-[111px] text-noisecolor mt-[340px] ml-[479px] ${
          active === "P" && "text-white"
        }`}
      >
        РЕКЛАМА
      </span>

      <div
        className={`absolute rounded-full w-6 h-6 mt-[530px] ml-[699px] ${
          active === "Pr" ? "bg-primary" : "bg-noisecolor"
        }`}
      ></div>
      <span
        className={`absolute font-bold text-[111px] text-noisecolor mt-[450px] ml-[776px] ${
          active === "Pr" && "text-white"
        }`}
      >
        Production
      </span>
    </div>
  );
};
