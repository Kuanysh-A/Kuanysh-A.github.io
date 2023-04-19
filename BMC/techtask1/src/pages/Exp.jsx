import React from "react";
import Background from "./../assets/background.png";
import showcasePic from "./../assets/photogpark.png";
import jetisushowcasePic from "./../assets/photojetisu.png";
import cityshowcasePic from "./../assets/city.png";
import nature from "./../assets/nature.png";
import line33 from "./../assets/line33.png";
import video1 from "./../assets/video1.mp4";
import video2 from "./../assets/video2.mp4";
import video3 from "./../assets/video3.mp4";
import { ShowcasePic } from "../components/ShowcasePic";
import { ShowcaseVid } from "../components/ShowcaseVid";

export const Exp = (props) => {
  return (
    <div
      class={`select-none relative h-[2609px] w-full ${props.className}`}
      style={{ backgroundImage: `url(${Background})` }}
    >
      {props.children}
      <span className="absolute text-white text-8xl ml-[90px] mt-[150px] font-bold">
        Немного о нашем опыте
      </span>
      <div className="absolute w-[33px] h-[105px] mt-[140px]">
        <svg
          width="28"
          height="106"
          viewBox="0 0 28 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_i_1_1228)">
            <path
              d="M-5.00008 7.76303L-5.00008 0L17.9321 2.0048e-06C20.7287 2.24929e-06 23.5253 2.21801 24.8304 3.51185C26.1355 4.80569 27.9999 7.76304 27.9999 10.5355L28 94.9648C28 96.4435 27.4407 99.0311 25.3898 101.434C23.339 103.837 20.5424 105.5 18.1186 105.5L-5.00001 105.5L-5.00001 97.9221L16.8136 97.9221C17.5593 97.9221 18.8644 96.9979 19.2373 96.6283C19.6102 96.2586 20.3559 95.3344 20.3559 94.5951L20.3559 12.5687C20.3559 10.5355 19.983 9.98105 19.0508 8.87204C18.305 7.98484 17.1242 7.76303 16.627 7.76303L-5.00008 7.76303Z"
              fill="#073478"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_1_1228"
              x="-5"
              y="0"
              width="33"
              height="109.5"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_1228"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="absolute mt-[270px] ml-[790px]">
        <ShowcasePic
          img={showcasePic}
          picturesize={"absolute z-1 w-[323px] h-[430px]"}
          photosetname={"G-park"}
          smallimgProp={"absolute z-10 bottom-36 -left-6"}
        />
      </div>
      <span className="absolute mt-[400px] ml-[90px] text-white text-9xl font-bold">
        700+
      </span>
      <img
        src={line33}
        alt=""
        className="absolute left-0 mt-[570px] w-[48px] h-[1px]"
      />
      <span className="absolute mt-[550px] ml-[90px] text-white text-4xl light">
        Отснятых видеороликов и <br /> фотосессий
      </span>
      <span className="absolute mt-[1000px] ml-[90px] text-white text-9xl font-bold">
        80+
      </span>
      <div className="absolute mt-[900px] ml-[453px]">
        <ShowcaseVid
          video={video1}
          vidsize="w-[323px] h-[485px]"
          borderrad="10px"
        />
      </div>
      <img
        src={line33}
        alt=""
        className="absolute left-0 mt-[1170px] w-[48px] h-[1px]"
      />
      <div className="absolute mt-[970px] ml-[1100px]">
        <ShowcasePic
          img={nature}
          picturesize={"absolute z-1 w-[327px] h-[581px]"}
          photosetname={"G-park"}
        />
      </div>
      <div className="absolute mt-[350px] ml-[1210px]">
        <ShowcaseVid
          video={video2}
          vidsize="w-[327px] h-[581px]"
          borderrad="10px 0px 0px 10px"
        />
      </div>
      <span className="absolute mt-[1150px] ml-[90px] text-white text-4xl light">
        Разработано фирменных <br /> стилей и Web-сайтов
      </span>
      <div className="absolute mt-[1460px] ml-[740px]">
        <ShowcasePic
          img={jetisushowcasePic}
          picturesize={"absolute z-1 w-[323px] h-[485px]"}
          photosetname={"Jetisu"}
        />
      </div>
      <div className="absolute mt-[1980px] ml-[1090px]">
        <ShowcaseVid
          video={video3}
          vidsize="w-[323px] h-[485px]"
          borderrad="10px"
        />
      </div>
      <span className="absolute mt-[1600px] ml-[90px] text-white text-9xl font-bold z-10">
        60+
      </span>
      <img
        src={line33}
        alt=""
        className="absolute left-0 mt-[1770px] w-[48px] h-[1px]"
      />
      <div className="absolute mt-[1780px] ml-[313px] z-9">
        <ShowcasePic
          img={cityshowcasePic}
          picturesize={"absolute z-1 w-[323px] h-[485px]"}
          photosetname={"City"}
        />
      </div>
      <span className="absolute mt-[1750px] ml-[90px] text-white text-4xl light">
        Оформленных и продвинутых <br /> бизнес-аккаунтов
      </span>
      <span className="absolute mt-[2250px] ml-[90px] text-white text-9xl font-bold">
        10+
      </span>
      <img
        src={line33}
        alt=""
        className="absolute left-0 mt-[2420px] w-[48px] h-[1px]"
      />
      <span className="absolute mt-[2400px] ml-[90px] text-white text-4xl light">
        Реализованных маркетинг- <br /> стратегий
      </span>
    </div>
  );
};
