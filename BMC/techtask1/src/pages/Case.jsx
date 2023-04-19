import React, { useState } from "react";
import Navbar from "./../components/Navbar";
import Button from "./../components/Button";
import Background from "./../assets/background.png";
import Loop from "./../assets/loop.mp4";
import Glass from "./../assets/glass.png";
import Line29 from "./../assets/line29.png";
import Card from "./../components/Card";
import { AiOutlineArrowRight } from "react-icons/ai";
import NavButton from "../components/NavButton";
import Iphone from "./../assets/iphone.png";
import Samsung from "./../assets/samsung.png";
import Jetisu1 from "./../assets/jetisu1.png";
import Jetisu2 from "./../assets/jetisu2.png";
import Jetisu3 from "./../assets/jetisu3.png";
import Jetisu4 from "./../assets/jetisu4.png";
import line9 from "./../assets/line9.png";

import { useNavigate } from "react-router-dom";

export const Case = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const navigate = useNavigate();

  const handleHover = () => {
    setIsHovered(true);
    // setIsHovered2(false);
    // setIsHovered3(false);
  };

  const handleUnhover = () => {
    setIsHovered(false);
    // setIsHovered2(true);
    // setIsHovered3(true);
  };

  const handleHover2 = () => {
    setIsHovered2(true);
    // setIsHovered(false);
    // setIsHovered3(false);
  };

  const handleUnhover2 = () => {
    setIsHovered2(false);
    // setIsHovered(true);
    // setIsHovered3(true);
  };

  const handleHover3 = () => {
    setIsHovered3(true);
    // setIsHovered2(false);
    // setIsHovered(false);
  };

  const handleUnhover3 = () => {
    setIsHovered3(false);
    // setIsHovered2(true);
    // setIsHovered(true);
  };

  return (
    <>
      <div
        className={`select-none h-screen w-full relative ${props.className}`}
      >
        <video
          src={Loop}
          autoPlay
          muted
          loop
          className="absolute h-screen w-full object-cover"
        ></video>
        {props.children}
        <img src={Glass} alt="" className="absolute w-[600px] h-screen" />
        <h1 className="ml-[90px] mt-[115px] absolute text-white font-bold text-5xl text-left leading-snug">
          Кейсы
        </h1>
        <img src={Line29} alt="" className="absolute ml-[83px] mt-[300px] " />
        <h1 className="ml-[83px] mt-[245px] absolute text-white font-medium text-3xl text-left leading-snug">
          Jetisu
        </h1>
        <span className="ml-[300px] mt-[245px] absolute light text-lightgray">
          Полный <br /> цикл
        </span>
        <div onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
          <div className="ml-[518px] mt-[258px] absolute">
            <svg
              width="29"
              height="16"
              viewBox="0 0 29 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            className="w-full h-full absolute ml-[60px] mt-[210px] z-10"
            style={{ visibility: isHovered ? "visible" : "hidden" }}
          >
            <Card className="w-[765px] h-[133px] relative">
              <div className="left-10 absolute">
                <h2 className="text-4xl font-medium">Jetisu</h2>
                <p className="text-xl font-light font-inter">Полный цикл</p>
              </div>
              <div className="absolute right-28 w-[183px] h-[183px] rounded-full bg-primary">
                <img
                  src={Jetisu4}
                  alt=""
                  className="absolute w-[124px] h-[87px] -top-2 -right-9"
                />
                <img
                  src={Jetisu3}
                  alt=""
                  className="absolute w-[124px] h-[87px] top-[88px] -right-9"
                />
                <img
                  src={Jetisu1}
                  alt=""
                  className="absolute w-[124px] h-[87px] top-4 -left-9"
                />
                <img
                  src={Jetisu2}
                  alt=""
                  className="absolute w-[124px] h-[87px] top-28 -left-9"
                />
              </div>
              <div className="absolute right-4">
                <NavButton onClick={() => navigate("/jetisu")}>
                  <AiOutlineArrowRight className="w-5 h-5" />
                </NavButton>
              </div>
            </Card>
          </div>
        </div>
        <img src={Line29} alt="" className="absolute ml-[83px] mt-[400px] " />
        <h1 className="ml-[83px] mt-[345px] absolute text-white font-medium text-3xl text-left leading-snug">
          G-park
        </h1>
        <div onMouseEnter={handleHover2} onMouseLeave={handleUnhover2}>
          <div className="ml-[518px] mt-[358px] absolute">
            <svg
              width="29"
              height="16"
              viewBox="0 0 29 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            className="w-full h-full absolute ml-[60px] mt-[312px] z-10"
            style={{ visibility: isHovered2 ? "visible" : "hidden" }}
          >
            <Card className="w-[765px] h-[133px] relative">
              <div className="left-10 absolute">
                <h2 className="text-4xl font-medium">G-park</h2>
                <p className="text-xl font-light font-inter">SMM</p>
              </div>
              <div className="absolute -right-24 w-[550px] h-[370px] z-1">
                <img src={Iphone} alt="" />
              </div>
              <div className="absolute right-4">
                <NavButton onClick={() => navigate("/g-park")}>
                  <AiOutlineArrowRight className="w-5 h-5" />
                </NavButton>
              </div>
            </Card>
          </div>
        </div>
        <span className="ml-[300px] mt-[361px] absolute light text-lightgray">
          SMM
        </span>
        <img src={Line29} alt="" className="absolute ml-[83px] mt-[500px] " />
        <h1 className="ml-[83px] mt-[445px] absolute text-white font-medium text-3xl text-left leading-snug">
          Sensata
        </h1>
        <div onMouseEnter={handleHover3} onMouseLeave={handleUnhover3}>
          <div className="ml-[518px] mt-[458px] absolute">
            <svg
              width="29"
              height="16"
              viewBox="0 0 29 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            className="w-full h-full absolute ml-[60px] mt-[420px] z-10"
            style={{ visibility: isHovered3 ? "visible" : "hidden" }}
          >
            <Card className="w-[765px] h-[133px] relative">
              <div className="left-10 absolute">
                <h2 className="text-4xl font-medium">Sensata</h2>
                <p className="text-xl font-light font-inter">Production</p>
              </div>
              <div className="absolute right-16 w-[200px] h-[391px] z-1">
                <img src={Samsung} alt="" />
              </div>
              <div className="absolute right-4">
                <NavButton>
                  <AiOutlineArrowRight className="w-5 h-5" />
                </NavButton>
              </div>
            </Card>
          </div>
        </div>

        <span className="ml-[300px] mt-[461px] absolute light text-lightgray">
          Production
        </span>
        <svg
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          width="51"
          height="78"
          viewBox="0 0 51 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.52"
            x="15.5"
            y="25.5"
            width="21"
            height="52"
            rx="10.5"
            stroke="white"
          />
          <circle opacity="0.52" cx="26" cy="40" r="6" fill="white" />
          <path
            opacity="0.52"
            d="M0.098 10.916C0.294 11 0.574 11.042 0.924 11.042C2.086 11.042 2.884 10.608 3.346 9.74C3.808 8.858 4.06 7.276 4.13 4.994L4.186 3.006H7.154V11H9.156V1.2H2.24L2.198 4.07C2.17 6.058 2.058 7.416 1.876 8.13C1.694 8.844 1.344 9.208 0.812 9.208C0.532 9.208 0.294 9.166 0.098 9.096V10.916ZM13.0679 11L16.2319 6.884V11H18.1779V4.014H16.3299L13.1659 8.13V4.014H11.2199V11H13.0679ZM23.4386 11.182C24.2646 11.182 24.9926 11.014 25.6506 10.664V8.984C25.1046 9.306 24.4746 9.46 23.7606 9.46C23.1586 9.46 22.6406 9.278 22.2206 8.914C21.8006 8.55 21.5906 8.074 21.5906 7.5C21.5906 6.926 21.8006 6.45 22.2066 6.1C22.6266 5.736 23.1446 5.554 23.7606 5.554C24.3346 5.554 24.9366 5.694 25.5386 5.974V4.294C24.9226 3.986 24.2366 3.832 23.4666 3.832C22.4166 3.832 21.5206 4.168 20.7646 4.84C20.0226 5.498 19.6446 6.38 19.6446 7.486C19.6446 8.592 20.0226 9.488 20.7646 10.174C21.5066 10.846 22.4026 11.182 23.4386 11.182ZM30.7274 11V5.666H32.9394V4.014H26.5694V5.666H28.7534V11H30.7274ZM40.7566 9.474C40.4346 9.474 40.2666 9.292 40.2666 8.942V6.576C40.2666 5.722 39.9586 5.05 39.3426 4.56C38.7406 4.07 37.9286 3.832 36.9346 3.832C35.9126 3.832 35.0586 4.014 34.3446 4.392V6.044C35.0026 5.652 35.7166 5.456 36.4586 5.456C37.6906 5.456 38.3066 5.89 38.3066 6.772V6.982C37.7466 6.688 37.0746 6.548 36.2906 6.548C35.5346 6.548 34.8906 6.744 34.3446 7.136C33.7986 7.528 33.5326 8.102 33.5326 8.844C33.5326 10.258 34.5966 11.182 36.1086 11.182C37.1026 11.182 37.9006 10.86 38.5166 10.23C38.7826 10.832 39.3006 11.126 40.0986 11.126C40.5606 11.126 40.9106 11.028 41.1626 10.832V9.39C41.0646 9.446 40.9246 9.474 40.7566 9.474ZM38.3066 8.942C37.9426 9.418 37.4106 9.656 36.7246 9.656C35.9966 9.656 35.4786 9.362 35.4786 8.746C35.4786 8.172 36.0106 7.836 36.8506 7.836C37.4246 7.836 37.9006 7.976 38.3066 8.242V8.942ZM44.3765 11L47.5405 6.884V11H49.4865V4.014H47.6385L44.4745 8.13V4.014H42.5285V11H44.3765ZM46.0005 3.244C46.7145 3.244 47.3165 3.034 47.7925 2.6C48.2685 2.166 48.5065 1.592 48.5205 0.85H47.0225C47.0085 1.466 46.6165 1.872 45.9865 1.872C45.3565 1.872 44.9505 1.466 44.9505 0.85H43.4665C43.4805 2.32 44.5305 3.244 46.0005 3.244Z"
            fill="white"
          />
        </svg>
        <Button className="ml-[90px] mt-[615px] text-lg bg-primary text-white font-inter absolute font-semibold">
          Рассчитать стоимость{" "}
        </Button>
        <div className="absolute font-light text-white right-0 bottom-24">
          <span className="text-6xl light">200+</span>
          <img
            src={line9}
            alt=""
            className="inline-flex w-72 ml-[28px] mb-[31px]"
          />
          <br />
          <span
            className="text-xl light"
            style={{ display: "block", marginTop: "15px" }}
          >
            С 2017 года провели маркетинговое <br /> сопровождение для более чем
            200 <br /> компаний!
          </span>
        </div>
      </div>
    </>
  );
};
