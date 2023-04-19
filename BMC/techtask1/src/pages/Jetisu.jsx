import React from "react";
import Navbar from "../components/Navbar";
import jetisuLogo from "./../assets/jetisuLogo.png";
import jetisuPage from "./../assets/jetisuPage.png";
import jetisuPage2 from "./../assets/jetisuPage2.png";
import jetisuPage3 from "./../assets/jetisuPage3.png";
import jetisuPage4 from "./../assets/jetisuPage4.png";
import jetisuPage5 from "./../assets/jetisuPage5.png";
import jetisuPage6 from "./../assets/jetisuPage6.png";
import jetisuPage7 from "./../assets/jetisuPage7.png";
import jetisuPage8 from "./../assets/jetisuPage8.png";
import jetisuPage9 from "./../assets/jetisuPage9.png";
import card from "./../assets/card.png";
import post1 from "./../assets/post1.png";
import post2 from "./../assets/post2.png";
import post3 from "./../assets/post3.png";
import post4 from "./../assets/post4.png";
import Button from "../components/Button";
import graySquare from "./../assets/graySquare.png";
import Footer from "./../components/Footer";
import JetisuInst from "./../assets/JetisuInst.png";
import JetisuInst2 from "./../assets/JetisuInst2.png";
import arrowCurved from "./../assets/arrowCurved.png";
import caseNavbar from "./../assets/caseNavbar.png";
import rec from "./../assets/rec.png";
import { useState } from "react";
import vector from "./../assets/vector.png";
import Card from "../components/Card";
import { AiOutlineArrowLeft } from "react-icons/ai";
import NavButton from "../components/NavButton";

export const Jetisu = (props) => {
  const [value, setValue] = useState(0);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleHover2 = () => {
    setIsHovered2(true);
  };

  const handleUnhover2 = () => {
    setIsHovered2(false);
  };
  return (
    <div className="   bg-black w-full h-[3350px] z-50 ">
      {props.children}
      <div
        className={`absolute h-[400px] w-full  bg-primary ${props.className}`}
      >
        <div className="absolute text-white ml-[510px] mt-[100px]">
          <div>Брэндинг</div>
          <div>Логобук, Брэндбук</div>
        </div>

        <div className="absolute text-white ml-[510px] mt-[250px]">
          <div>Маркетинг</div>
          <div>Стратегия продвижения</div>
        </div>

        <img
          src={jetisuLogo}
          className=" absolute w-[185px] h-[185px] ml-[830px] mr-[642px] mt-[160px] mb-[43px] z-10"
        />

        <div className="absolute font-medium text-white text-[54px] leading-[58px] tracking-[4.6px] border-solid border-white border-opacity-[22px] rounded-[1px] ml-[1300px]">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className={index === 0 ? "mt-[-100px]" : "pt-[5px] pb-[5px]"}
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.22)",
                WebkitTextFillColor: "transparent",
              }}
            >
              CYCLE
            </div>
          ))}
          <div>CYCLE</div>
        </div>
      </div>

      <img src={rec} className="absolute w-full h-[2400px] mt-[400px]" />
      <div className="absolute text-white ml-[380px] mt-[650px]">
        <div className="font-bold text-[45px] leading-[56px]">
          Маркетинг, СММ, Брендинг, что-нибудь ещё?
        </div>
        <div className="text-[16px] leading-[20px] font-normal font-inter">
          Кейс о том, как мы сопровождали Jetisu
        </div>
      </div>

      <div className="absolute font-inter text-white text-[87px] leading-[109px] text-opacity-10 mr-[600px] ml-[290px] mt-[740px] mb-[1178px] non-italic">
        Часть 1
      </div>

      <div className="absolute text-white w-[1089px] h-[273px] mr-[600px] ml-[380px] mb-[1178px] mt-[810px] font-medium text-[16px] leading-[20px]">
        <div className="font-inter">
          Вы когда-нибудь замечали? Часто только те конкретные вещи, на которые
          мы обращаем особое внимание, мы и запоминаем.
          <div className="text-[25px] py-2 "> Но, это не совсем так. </div>
          <br />
          Рекламу мы видим день изо дня, скроллим инстаграм и видим рекламу,
          листаем дальше и снова реклама. Мы думаем,
          <br />
          что мы ее не запоминаем, но наш мозг сохраняет визуальную картинку, и
          когда нам снова это попадается мы уже подсознательно
          <br />
          знаем кто это, и что они делают. Так работает брендинг. Мы
          коммуницируем с вами через картинку, что привлечет ваше внимание,
          <br />
          "зацепит глаз" и потенциально сделает из вас клиента. И с каждым годом
          это становится труднее и труднее. Сейчас, чтобы получить
          <br />
          клиента, бренду необходимо соприкоснуться с ним целых 15 раз. И каждое
          из этих касаний должно быть уникальным! <br /> <br />
          Такую интересную работу в начале 2021 года мы и провели для заказчика
          Jetisu. Он обратился с проблемой:
          <br />
          "Мне не нравится дизайн моей компании, хочу чтобы вы поколдовали над
          ним и сделали крутым", скоро начало строительства ЖК,
          <br />
          но нужно чтобы уже сейчас про бренд узнавали.
        </div>
      </div>

      <div
        className=" absolute w-[430px] mt-[1080px] ml-[1090px]"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "31px",
          gridColumnGap: "12px",
        }}
      >
        <img
          src={jetisuPage}
          style={{
            width: "148px",
            height: "104px",
            gridColumn: "1",
            gridRow: "1 / 2",
          }}
        />
        <img
          src={jetisuPage2}
          style={{
            width: "148px",
            height: "104px",
            gridColumn: "2 / 3",
            gridRow: "1 / 2",
          }}
        />
        <img
          src={jetisuPage3}
          style={{
            width: "148px",
            height: "104px",
            gridColumn: "3 / 4",
            gridRow: "1 / 2",
          }}
        />
        <img
          src={jetisuPage4}
          style={{
            width: "148px",
            height: "104px",
            gridColumn: "1 / 2",
            gridRow: "2 / 3",
          }}
        />
        <img
          src={jetisuPage5}
          style={{
            width: "148px",
            height: "104px",
            gridColumn: "2 / 3",
            gridRow: "2 / 3",
          }}
        />
        <img
          src={jetisuPage6}
          style={{
            width: "148px",
            height: "104px",
            gridColumn: "3 / 4",
            gridRow: "2 / 3",
          }}
        />
        <img
          src={jetisuPage7}
          style={{
            width: "148px",
            height: "104px",
            gridColumn: "1 / 2",
            gridRow: "3 / 4",
          }}
        />
        <img
          src={jetisuPage8}
          style={{
            width: "148px",
            height: "104px",
            gridColumn: "2 / 3",
            gridRow: "3 / 4",
          }}
        />
        <img
          src={jetisuPage9}
          style={{
            width: "148px",
            height: "104px",
            gridColumn: "3 / 4",
            gridRow: "3 / 4",
          }}
        />
      </div>

      <div className="absolute">
        <img
          src={card}
          className="  w-[558px] h-[372px] ml-[330px] mt-[1110px]"
        />
      </div>
      <div className="absolute font-inter text-white text-[87px] leading-[109px] text-opacity-10 mr-[600px] ml-[290px] mt-[1500px] mb-[1178px] non-italic">
        Часть 2
      </div>

      <p className="absolute w-[1089px] h-[180px] font-normal text-[16px] leading-[20px] text-white ml-[380px] mt-[1580px]">
        Маркетинговая стратегия <br /> <br /> На первый взгляд продумать
        стратегию легко, это же просто в заметках написал по пунктам "Что нужно
        выполнить?", но, как сделать эту стратегию эффективной?
        <br /> <br />
        Аналитика, Big Data и еще раз аналитика. Вот так по кругу несколько раз,
        добавим еще туда планирование наперёд, и получится эффективная
        маркетинговая стратегия для Jetisu. Первое время было тяжело, но дни
        шли, конверсия повышалась, квартиры продавались. Добавить к этому еще
        наше продвижение социальных сетей, это ОГО. Компания радовалась, а мы
        продолжали работать и совершенствоваться
      </p>

      <div className="absolute bg-white w-[1641px] h-[123px] mt-[1860px] ">
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
      <div className=" absolute mt-[1830px] ml-[100px] w-[262px] h-[262px]">
        <img src={post1} />
      </div>

      <div className="absolute mt-[2115px] ml-[100px] w-[279px] h-[270px]">
        <img src={post2} />
      </div>

      <div className="absolute mt-[1830px] ml-[380px] w-[281px] h-[281px]">
        <img src={post3} />
      </div>

      <div className="absolute mt-[2115px] ml-[380px] w-[260px] h-[260px]">
        <img src={post4} />
      </div>

      <div className="absolute text-white font-normal text-[20px] leading-[25px] non-italiic text-opacity-80 mt-[2030px] ml-[800px] w-[350px] h-[25px]">
        Специально для застройщиков
      </div>
      <div className="absolute text-white w-[419px] h-[138px] font-medium leading-[69px] text-[64px] mt-[2060px] ml-[800px] ">
        Social Media
        <br />
        Design
      </div>
      <Button className=" absolute font-semibold bg-primary text-white font-inter mt-[2330px] ml-[800px]">
        Рассчитать стоимость
      </Button>
      <Button className="absolute rounded-md w-[190px] h-[41px] bg-transparent text-[16px] text-zinc-400 font-normal flex items-center justify-center border-white border mt-[2275px] ml-[800px]">
        Больше примеров
      </Button>

      <div>
        {[1020, 1080, 1140, 1200].map((position) => (
          <div
            className={`absolute w-[10px] h-[10px] mt-[2550px] ml-[${position}px]`}
          >
            <img src={graySquare} className="" />
          </div>
        ))}
      </div>
      <div className="absolute font-inter text-white text-[87px] leading-[109px] text-opacity-10 mr-[600px] ml-[290px] mt-[2500px] mb-[1178px] non-italic">
        Часть 3
      </div>

      <p className="absolute w-[1089px] h-[180px] font-normal text-[16px] leading-[20px] text-white ml-[380px] mt-[2580px]">
        Когда мы столкнулись c задачей создания контента по продаже
        недвижимости, мы начали думать НЕ "А как нам сделать так, чтобы люди
        покупали это?" а "А я бы купил здесь недвижимость и почему?". Отвечая на
        этот вопрос наша команда брейнштормила идеи, что-то оставалось, что-то
        мы корректировали и после, исполняли все работы от продакшна до постинга
        и рекламы. Аккаунт раскрутился, вирусные видеоролики приносили лиды. А
        мы к концу дня выдыхали спокойно.
      </p>

      <div className="">
        <img
          src={JetisuInst2}
          className=" absolute w-[258px] h-[461px]  mt-[2800px] ml-[1200px]"
        />
        <img
          src={JetisuInst}
          className=" absolute w-[304px] h-[514px]  mt-[2800px] ml-[950px] z-0"
        />
        <img
          src={arrowCurved}
          className=" absolute w-[117px] h-[117px] ml-[1140px] mt-[2720px]"
        />

        <Footer className=" absolute top-[3234px]  ml-[538px]    " />
      </div>

      <div className="absolute top-[50px] ">
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
        className="w-64 h-32 absolute top-[285px] left-20 "
        style={{ visibility: isHovered2 ? "visible" : "hidden" }}
      >
        <div>
          <h2 className="text-4xl font-medium">Jetisu</h2>
          <p className="text-xl font-light font-inter">Полный цикл</p>
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
    </div>
  );
};

export default Jetisu;
