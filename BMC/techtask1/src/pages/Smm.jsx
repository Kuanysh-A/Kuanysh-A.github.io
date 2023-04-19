import React from "react";
import VerticalNav from "../components/VerticalNav";
import vector from "./../assets/vector.png";
import posts from "./../assets/posts.png";
import NavButton from "../components/NavButton";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "../components/Button";
import Footer2 from "../components/Footer2";
import Navbar from "../components/Navbar";
import Vector22 from "./../assets/Vector22.svg";
const Smm = (props) => {
  return (
    <>
      <Navbar
        className="absolute bg-white"
        button={
          <Button className="rounded-md text-primary border-primary border hover:bg-primary hover:text-white font-inter non-italic font-light text-sm leading-2.9 pl-3.5 pr-3.5 pt-2.5 pb-2.5">
            Получить консультацию
          </Button>
        }
      />
      <div className=" relative bg-black w-full h-[920px] overflow-hidden">
        {props.children}
        <NavButton className="absolute mt-[90px] ml-[310px]">
          <AiOutlineArrowLeft className="w-5 h-5" />
        </NavButton>
        <div className=" absolute font-normal text-white text-[14px] leading-[19px] text-opacity-80 mt-[100px] ml-[365px]">
          назад
        </div>
        <VerticalNav className="absolute ml-[98px] mt-[185px] z-10" />
        <img
          src={Vector22}
          alt=""
          className="absolute w-[316px] h-[221px] top-[410px]"
        />

        <div className="absolute mt-[-960px] ml-[750px] z-1  ">
          <img src={posts} />
        </div>

        <div className=" absolute font-bold text-[89px] leading-[120px text-white ml-[310px] top-[130px]">
          SMM
        </div>
        <Button className=" absolute bg-primary  text-[16px] text-white flex font-inter py-[0px] px-[15px] ml-[385px] top-[250px]  w-[129px] h-[26px]">
          Что входит&nbsp;
        </Button>
        <ul className=" absolute text-white font-normal text-[18px] leading-[24px] text-opacity-80 ml-[330px] top-[340px] list-disc ">
          <li className="pb-[14px]">Разработка контент плана</li>
          <li className="pb-[14px]">
            Разработка и создание визуала, моушнов, видео, 3D{" "}
          </li>
          <li className="pb-[14px]">Копирайтинг</li>
          <li>Комьюнити менеджмент</li>
        </ul>

        <div className="absolute font-normal top-[550px] ml-[310px]">
          <div className=" text-white text-[42px] leading-[53px] text-opacity-80 mb-[15px]">
            Пример визуала для
            <br />
            <span className="font-bold"> Instagram</span>
          </div>
          <div className=" text-white text-[18px] leading-[24px] text-opacity-80">
            После утверждения контент плана <br />
            вы можете месяц не переживать о том, что ваш бренд
            <br />
            находится вне поля зрения пользователей
          </div>
        </div>

        <Button className=" absolute font-semibold bg-primary text-[15px] text-white font-inter top-[770px] ml-[320px] w-[252px] h-[43px]">
          Рассчитать стоимость
        </Button>
        <Footer2 className="bottom-0 fixed  w-full mt-[-152px] ml-[700px]  " />
      </div>
    </>
  );
};

export default Smm;
