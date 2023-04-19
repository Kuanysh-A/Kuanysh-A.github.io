import React from "react";
import VerticalNav from "../components/VerticalNav";
import vector from "./../assets/vector.png";
import NavButton from "../components/NavButton";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "../components/Button";
import Footer2 from "../components/Footer2";
import imac from "./../assets/imac.png";
import Vector22 from "./../assets/Vector22.svg";
export const Ad = (props) => {
  return (
    <div className="  bg-black w-full h-[930px] overflow-hidden">
      {props.children}
      <div className="absolute">
        <img
          src={imac}
          className="w-[658px] h-[553px] mt-[290px] ml-[870px] z-10"
        />
      </div>
      <NavButton className="absolute mt-[90px] ml-[305px]">
        <AiOutlineArrowLeft className="w-5 h-5" />
      </NavButton>
      <span className=" absolute font-normal text-white text-[14px] leading-[19px] text-opacity-80 mt-[100px] ml-[375px]">
        назад
      </span>
      <VerticalNav className="absolute ml-[98px] mt-[185px] z-10" />
      <img
        src={Vector22}
        alt=""
        className="absolute w-[316px] h-[221px] top-[410px]"
      />
      <span className=" absolute font-bold text-[89px] leading-[120px] text-white ml-[310px] top-[150px]">
        Реклама
      </span>
      <Button className=" absolute bg-primary  text-[16px] text-white flex font-inter py-[0px] px-[15px] ml-[560px] top-[260px]  w-[129px] h-[26px]">
        Что входит&nbsp;
      </Button>

      <ul className=" absolute text-white font-normal text-[18px] leading-[24px] text-opacity-80 ml-[320px] top-[350px] list-disc ">
        <li className="pb-[14px]">
          Углублённая настройка таргетированной и контекстой рекламы.
        </li>
        <li className="pb-[14px]">Визуальное оформление продающих креативов</li>
        <li className="pb-[14px]">Креативы в формате видео</li>
        <li className="pb-[14px]">Анализ рекламы конкурентов</li>
        <li>Рекламный отчёт</li>
      </ul>
      <Button className=" absolute font-semibold bg-primary text-[15px] text-white font-inter top-[600px] ml-[320px] w-[252px] h-[43px]">
        Рассчитать стоимость
      </Button>

      <Footer2 className=" bottom-0 top-[815px] fixed ml-[700px]  " />
    </div>
  );
};

export default Ad;
