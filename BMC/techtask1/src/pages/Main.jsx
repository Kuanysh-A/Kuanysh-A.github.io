import React, { useRef } from "react";
import Navbar from "./../components/Navbar";
import Button from "./../components/Button";
import Background from "./../assets/background.png";
import bmcscene from "./../assets/bmcscene.mp4";
import underlying from "./../assets/underlying.png";
import line9 from "./../assets/line9.png";

export const Main = (props) => {
  return (
    <>
      <div className={`select-none h-screen w-full ${props.className}`}>
        <video
          src={bmcscene}
          autoPlay
          muted
          loop
          className="absolute h-screen w-full object-cover"
        ></video>
        {props.children}
        <h1 className="ml-[87px] mt-[115px] absolute text-white font-bold text-7xl text-left leading-snug">
          Маркетинг <br /> полного цикла <br /> для застройщиков
        </h1>
        <img
          src={underlying}
          alt=""
          className="absolute w-[541px] h-[123px] mt-[382px] ml-[230px]"
        />
        <Button className="absolute mt-[484px] ml-[87px] bg-primary text-white font-inter">
          Рассчитать стоимость
        </Button>
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

