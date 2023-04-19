import React, { useRef, useState } from "react";
import VerticalNav from "./../components/VerticalNav";
import NavButton from "../components/NavButton";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "../components/Button";
import imac from "./../assets/imac.png";
import iPhoneXS from "./../assets/iPhoneXS.png";
import xs from "./../assets/xs.mp4";
import { CiPlay1 } from "react-icons/ci";
import { BsFillPlayFill } from "react-icons/bs";
import Footer2 from "../components/Footer2";
import Vector22 from "./../assets/Vector22.svg";

export const Production = (props) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const videoWrapperClasses = `${
    isPlaying ? "" : "flex items-center justify-center"
  }  absolute`;

  const buttonStyles = {
    opacity: isPlaying ? 0 : 1,
    transition: "opacity 0.2s ease-in-out",
  };

  return (
    <div className="relative bg-black w-full h-[950px] overflow-hidden">
      {props.children}
      <div className="relative">
        <div className={videoWrapperClasses}>
          <img
            src={iPhoneXS}
            className={`absolute left-[1028px] top-[279px] w-[399px] h-[779px] transform transition duration-500 ${
              isPlaying ? "-translate-y-3" : "translate-y-0" //y-1 when false,  y-2 when true
            }`}
          />
          <video
            ref={videoRef}
            src={xs}
            className="w-[320px] h-[779px] ml-[1080px] mt-[320px]  object-cover"
            onClick={togglePlay}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
          />
          <button
            className="w-[60px] h-[60px] absolute left-[1250px] top-[600px] transform -translate-x-1/2 -translate-y-1/2 rounded-full  justify-center items-center cursor-pointer flex "
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.22)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(2px)",
              zIndex: 999,
              ...buttonStyles,
            }}
            onClick={togglePlay}
          >
            <BsFillPlayFill
              className="absolute w-8 h-8 flex items-center justify-center left-[15px]"
              style={{ color: "white" }}
            />
          </button>
        </div>
      </div>

      <NavButton className="absolute mt-[130px] ml-[345px] ">
        <AiOutlineArrowLeft className="w-5 h-5" />
      </NavButton>
      <span className=" absolute font-normal text-white text-[14px] leading-[19px] text-opacity-80 mt-[140px] ml-[405px]">
        назад
      </span>

      <VerticalNav className="absolute ml-[98px] mt-[185px] z-10" />
      <img
        src={Vector22}
        alt=""
        className="absolute w-[316px] h-[221px] top-[410px]"
      />

      <span className=" absolute font-bold text-[89px] leading-[120px] text-white ml-[340px] top-[180px]">
        Production
      </span>
      <Button className=" absolute bg-primary  text-[16px] text-white flex font-inter py-[0px] px-[15px] ml-[659px] top-[300px]  w-[129px] h-[26px]">
        Что входит&nbsp;
      </Button>

      <ul className=" absolute text-white font-normal text-[18px] leading-[24px] text-opacity-80 ml-[360px] top-[370px] list-disc ">
        <li className="pb-[14px]">
          Разработка медиа-плана и сценариев для видеороликов
        </li>
        <li className="pb-[14px]">Съёмка с квадрокоптера</li>
        <li className="pb-[14px]">Съёмка, монтаж видеороликов Intsagram</li>
        <li className="pb-[14px]">Фотосъёмка и обработка</li>
        <li>Рекламный отчёт</li>
      </ul>
      <Button className="absolute rounded-md w-[190px] h-[41px] bg-transparent text-[16px] text-zinc-400 font-normal flex items-center justify-center border-white border top-[580px] ml-[345px]">
        Больше примеров
      </Button>
      <Button className=" absolute font-semibold bg-primary text-[23px] text-white font-inter top-[650px] ml-[345px] w-[319px] h-[55px]">
        Рассчитать стоимость
      </Button>

      <Footer2 className=" bottom-0 fixed mt-[835px] ml-[700px]  " />
    </div>
  );
};

export default Production;
