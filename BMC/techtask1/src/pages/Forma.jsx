import React from "react";
import Footer2 from "../components/Footer2";
import Form from "../components/Form";
import Button from "../components/Button";
import { IoLocationOutline } from "react-icons/io5";
import formVector from "../assets/formVector.png";
import quality from "../assets/quality.png";
import map1 from "../assets/map1.png";
import map2 from "../assets/map2.png";
import Union1 from "../assets/Union1.png";
import loc from "../assets/loc.png";
import num from "../assets/num.png";
export const Forma = () => {
  return (
    <div className="absolute w-full h-[1020px] bg-black z-1">
      <span className="absolute mt-[200px] ml-[80px] z-50 text-white font-semibold text-[64px] leading-[76.74px] ">
        Оставьте свою заявку
      </span>

      <img
        src={Union1}
        className="absolute w-[308.99px] h-[154.48px] z-40 ml-[567px] mt-[250px]"
      />
      <img
        src={quality}
        className="absolute w-[362px] h-[178px] mt-[596px] ml-[130px] mb-[242px] z-50"
      />

      <img
        src={map1}
        className="absolute w-[1047px] h-[588px] mt-[250px] ml-[-100px] z-20"
      />
      <img
        src={map2}
        className="absolute  w-[1047px] h-[588px] mt-[250px] ml-[527px] z-1"
      />
      <img
        src={loc}
        className="absolute w-[55px] h-[85px] ml-[670px] mt-[500px] z-50 "
      />

      <div className="relative w-[651px] h-[555px] ml-[855px] mt-[130px] bg-white rounded-[19px] text-zinc-300 z-30">
        <img
          src={formVector}
          className="absolute w-[173px] h-[26px] mt-[41px] ml-[450px]"
        />

        <img src={num} className="absolute w-[245px]  ml-[350px] mt-[310px] " />

        <div className="absolute font-inter text-opacity-[21px] text-[14px] leading-[17px] mt-[41px] ml-[70px]">
          <span className="form-title">Форма заявки</span>
        </div>

        <div className="absolute">
          <label className="block font-medium text-black mt-[112px] ml-[72px]">
            Имя
          </label>
          <Form
            className="block w-[352px] h-[42px] ml-[72px] mt-[8px] font-medium placeholder:text-5 placeholder:leading-6 placeholder-opacity-10 placeholder:text-grayForm non-italic rounded-[9px]"
            placeholder="Введите ваше имя"
          />
          <label className="block font-medium text-black mt-[28px] ml-[72px]">
            Номер телефона
          </label>
          <Form
            className="block w-[352px] h-[42px] ml-[72px] mt-[8px] font-medium placeholder:text-5 placeholder:leading-6 placeholder-opacity-10 placeholder:text-grayForm non-italic rounded-[9px]"
            placeholder="+7 777 777 77 77"
          />
        </div>

        <Button className="absolute w-[227px] h-[63px] ml-[72px] mt-[320px] py-[0px] px-[15px] font-semibold bg-primary text-white rounded-[10px] text-[23px] text-center flex items-center font-inter">
          Позвоните мне
        </Button>

        <div className="absolute mt-[457px] ml-[72px]">
          <span className="non-italic font-inter text-black text-opacity-70 text-[20px] leading-[25px]">
            Мы находимся тут:
            <br />
          </span>
          <span className="flex items-center font-normal text-black text-opacity-70 text-[20px] leading-[25px]">
            <IoLocationOutline className="mr-[5px]" /> Кунаева 4, Казмедиа Центр
          </span>
        </div>
      </div>

      <span className=" absolute font-light text-[10px] leading-[13px] text-opacity-63 text-zinc-400 mt-[200px] ml-[100px] ">
        Business Marketing Consulting
        <br />
        This was desingned by Ulun
        <br />
        2023
      </span>

      <Footer2 className="absolute ml-[700px] mt-[220px] " />
    </div>
  );
};

export default Forma;
