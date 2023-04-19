import React from "react";
import circle from "./../assets/circle.png";
import teamvector from "./../assets/teamvector.png";
import saparbek from "./../assets/saparbek.png";
import line86 from "./../assets/line86.png";
import smalldanila from "./../assets/smalldanila.png";
import smallkail from "./../assets/smallkail.png";
import smallsaparbek from "./../assets/smallsaparbek.png";
import smalladil from "./../assets/smalladil.png";
import smallaidana from "./../assets/picture.png";
import { Avatar } from "../components/Avatar";

export const Team = () => {
  const [currentPerson, setCurrentPerson] = React.useState(saparbek);
  return (
    <>
      <div className="relative h-[1458px] w-full bg-teamdark">
        <img
          src={teamvector}
          alt=""
          className="absolute w-[33px] h-[60px] mt-[115px]"
        />
        <span className="absolute text-[70px] font-bold text-white mt-[90px] ml-[110px]">
          Кто упрощает вам жизнь
        </span>
        <span className="absolute text-xl light text-seriy mt-[190px] ml-[110px]">
          Наша команда профессионалов - самая крутая в индустрии онлайн
          продвижения. Мы решаем все ваши <br /> проблемы, от создания
          качественных сайтов и эффективной рекламы до профессионального видео и{" "}
          <br />
          креативных решений в коммуникации с пользователями.
        </span>
        <span className="absolute text-[473px] text-seriy font-bold left-1/2 transform -translate-x-1/2 mt-[240px]">
          Team
        </span>
        <img
          src={circle}
          alt=""
          className="absolute w-[946px] h-[946px] bottom-0 left-1/2 transform -translate-x-1/2"
        />
        <img
          src={currentPerson}
          alt=""
          className="absolute w-[940px] h-[1540px] -bottom-[215px] left-1/2 transform -translate-x-1/2 ml-[50px] "
        />
        <span className="absolute text-[125px] text-white font-bold bottom-[301px] left-[291px]">
          Сапарбек
        </span>
        <span className="absolute text-[45px] text-seriy light bottom-[275px] left-[300px]">
          founder
        </span>{" "}
        <img
          src={line86}
          alt=""
          className="absolute bottom-[370px] right-0 w-[529px]"
        />
        <Avatar
          img={smallaidana}
          className="absolute mt-[440px] ml-[500px] "
          onClick={() => setCurrentPerson(smallaidana)}
        />
        <Avatar
          img={smalldanila}
          className="absolute mt-[540px] ml-[1050px]"
          onClick={() => setCurrentPerson(smalldanila)}
        />
        <Avatar
          img={smallkail}
          className="absolute mt-[640px] ml-[300px] "
          onClick={() => setCurrentPerson(smallkail)}
        />
        <Avatar
          img={smalladil}
          className="absolute mt-[770px] ml-[1140px] "
          onClick={() => setCurrentPerson(smalladil)}
        />
      </div>
      <div className="relative h-[250px] w-full bg-white"></div>
    </>
  );
};
