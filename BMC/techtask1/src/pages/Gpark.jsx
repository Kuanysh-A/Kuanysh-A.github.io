import React from "react";
import Navbar from "./../components/Navbar";
import Button from "./../components/Button";
import Background from "./../assets/background.png";
import gPark from "./../assets/gPark.png";
import redHouse from "./../assets/redHouse.png";
import redLine from "./../assets/redLine.png";
import inst from "./../assets/inst.png";
import shadowInst from "./../assets/shadowInst.png";
import arrowCurved from "./../assets/arrowCurved.png";
import CheckButton from "../components/CheckButton";
import Helsinki from "./../assets/Helsinki.png";
import Stockholm from "./../assets/Stockholm.png";
import ways from "./../assets/ways.png";
import Parking from "./../assets/Parking.png";
import { useState } from "react";
import Slider from "./../components/Slider";
import graySquare from "./../assets/graySquare.png";
import Footer from "./../components/Footer";
import caseNavbar from "./../assets/caseNavbar.png";
import vector from "./../assets/vector.png";
import Card from "../components/Card";
import { AiOutlineArrowLeft } from "react-icons/ai";
import NavButton from "../components/NavButton";

const Gpark = (props) => {
  const [value, setValue] = useState(0);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleHover2 = () => {
    setIsHovered2(true);
  };

  const handleUnhover2 = () => {
    setIsHovered2(false);
  };
  return (
    <>
      <div className="bg-black w-full h-[2270px]">
        <div
          className={`h-[410px] w-full absolute bg-primary ${props.className}`}
        >
          <div className="absolute text-white ml-[510px] mt-[120px]">
            <div>Постов</div>
            <div className="light">200+</div>
          </div>

          <div className="absolute text-white ml-[510px] mt-[280px]">
            <div>Stories</div>
            <div className="light">500+</div>
          </div>

          <img
            src={gPark}
            className=" absolute w-[185px] h-[185px] ml-[817px] mr-[642px] mt-[322px] mb-[43px] z-10"
          />

          <div className=" absolute font-medium text-white text-[54px]  leading-[58px] tracking-[4.6px] border-solid border-white border-opacity-[22px] rounded-[1px] ml-[1300px]">
            <div
              className=" "
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.22)",
                WebkitTextFillColor: "transparent",
              }}
            >
              SMM
            </div>

            <div
              className="text-transparent pt-[5px] pb-[5px]"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.22)",
                WebkitTextFillColor: "transparent",
              }}
            >
              SMM
            </div>

            <div
              className="text-transparent  pt-[5px] pb-[5px]"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.22)",
                WebkitTextFillColor: "transparent",
              }}
            >
              SMM
            </div>

            <div
              className="text-transparent  pt-[5px] pb-[5px]"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.22)",
                WebkitTextFillColor: "transparent",
              }}
            >
              SMM
            </div>

            <div>SMM</div>
          </div>

          {props.children}
        </div>
        <div className="absolute  ml-[400px] mr-[600px] mb-[1335px] mt-[650px] text-white z-10 w-[719px] h-[76px]">
          <p className="non-italic font-bold text-[30px] leading-[38px]">
            Разработка новой &nbsp;
            <img src={redHouse} className="w-[42px] h-[30px] inline-block" />
            айдентики <br />
            для инстаграма &nbsp;
            <img src={redLine} className=" w-[12px] inline-block" /> и принцип
            наследственности
          </p>
        </div>
        <div className="absolute text-white mr-[600px] ml-[400px] mb-[1178px] mt-[780px] z-10 w-[550px] h-[220px]  font-normal text-[16px] leading-[20px]">
          <p>
            У каждой истории есть начало, и наше сотрудничество с G-Park
            <br />
            стала примером работы двух профессионалов своего дела. G-park
            <br />
            показывает своим клиентам то, как должны и могут выглядеть
            <br />
            современная застройка, качественный менеджмент и рабочая система,
            дающая результат. А мы, люди, команда, которая умеет
            <br />
            это показывать.
            <br />
            <br />
            Опираясь на наш опыт, мы использовать простые методы подачи
            <br />
            информации и показывали людям не просто картинки,
            <br />а действительно крутые фишки в игровых, познавательных и даже
            <br />
            шуточных форматах.
          </p>
        </div>
        <img
          src={inst}
          className=" absolute w-[257px] h-[491px]  ml-[950px] mt-[820px] z-10"
        />
        <img
          src={shadowInst}
          className=" absolute w-[235px] h-[450px] ml-[1165px] mt-[800px] z-1 "
        />
        <img
          src={arrowCurved}
          className=" absolute w-[117px] h-[117px] ml-[1100px] mt-[720px]"
        />
        <div className="absolute bg-white w-[1641px] h-[123px] mt-[1250px] ">
          <div
            className="absolute bg-primary w-[1640px] h-[25px] my-12 overflow-x-hidden font-normal text-[20px] leading-[25px] text-opacity-30"
            style={{
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.22)",
              WebkitTextFillColor: "transparent",
            }}
          >
            <div className="animate-marquee whitespace-nowrap">
              {[...Array(21)].map((_, index) => (
                <span key={index} className="mx-4">
                  BMC
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute z-29">
          <img
            src={Helsinki}
            className=" w-[262px] h-[262px] mt-[1335px] ml-[340px]   z-10"
          />
        </div>
        <div className="absolute">
          <img
            src={Stockholm}
            className=" w-[262px] h-[262px] mt-[1335px] ml-[620px] z-10"
          />
        </div>
        <div className="absolute z-29">
          <img
            src={ways}
            className=" w-[275px] h-[262px] mt-[1605px] ml-[340px] z-10"
          />
        </div>
        <div className="absolute z-29">
          <img
            src={Parking}
            className=" w-[262px] h-[262px] mt-[1605px] ml-[620px] z-10"
          />
        </div>
        <div className="absolute text-white font-normal text-[20px] leading-[25px] non-italiic text-opacity-80 mt-[1550px] ml-[980px]">
          Специально для застройщиков
        </div>
        <div className=" absolute text-white w-[419px] h-[138px] font-medium leading-[69px] text-[64px] mt-[1580px] ml-[980px] ">
          Social Media
          <br />
          Design
        </div>
        <Button className=" absolute font-semibold bg-primary text-white font-inter mt-[1830px] ml-[980px]">
          Рассчитать стоимость
        </Button>
        <Button className=" absolute rounded-md  w-[190px] h-[41px] bg-transparent text-[16px] text-zinc-400 font-normal  flex items-center justify-center border-white border mt-[1770px] ml-[980px]">
          Больше примеров
        </Button>

        <Slider value={20} className=" mt-[1920px] ml-[980px]" />
        <Slider onChange={(e) => setValue(e.target.value)} value={value} />

        <div className=" absolute w-[10px] h-[10px]  mt-[1965px] ml-[1200px]">
          <img src={graySquare} className="" />
        </div>

        <div className=" absolute w-[10px] h-[10px]  mt-[1965px] ml-[1260px]">
          <img src={graySquare} className="" />
        </div>

        <div className=" absolute w-[10px] h-[10px]  mt-[1965px] ml-[1320px]">
          <img src={graySquare} className="" />
        </div>

        <div className=" absolute w-[10px] h-[10px]  mt-[1965px] ml-[1380px]">
          <img src={graySquare} className="" />
        </div>

        <div className="absolute inset-0 ml-[780px] mt-[282px]">
          <div className="bg-primary w-64 h-64 rounded-full "></div>
        </div>

        <Footer className=" absolute top-[2155px] ml-[538px]  " />
      </div>

      <div className="absolute mt-[-2210px]">
        <img src={caseNavbar} />

        <div className=" absolute text-white mt-[-1570px] font-bold text-[65px] ml-[100px]">
          Кейсы
        </div>
        <img src={vector} alt="" className="absolute top-16 left-0 w-[37px] " />
      </div>
      <span className="absolute text-4xl top-[310px] left-24 opacity-50 text-white">
        Jetisu
      </span>

      <span
        className="absolute text-4xl top-[460px] left-24 opacity-50 text-white"
        onMouseEnter={handleHover2}
        onMouseLeave={handleUnhover2}
      >
        G-park
      </span>
      <Card
        className="w-64 h-32 absolute top-[415px] left-20 "
        style={{ visibility: isHovered2 ? "visible" : "hidden" }}
      >
        <div>
          <h2 className="text-4xl font-medium">G-park</h2>
          <p className="text-xl font-light font-inter">SMM</p>
        </div>

        <div className="absolute -right-4">
          <NavButton>
            <AiOutlineArrowLeft className="w-5 h-5" />
          </NavButton>
        </div>
      </Card>
      <span className="absolute text-4xl top-[610px] left-24 opacity-50 text-white">
        Sensata
      </span>
    </>
  );
};
export default Gpark;
