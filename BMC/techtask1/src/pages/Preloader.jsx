import React from "react";
import mainLogo from "./../assets/bmcPreloader.png";
import CircularProgress from "../components/CircularProgress";

const Preloader = (props) => {
  return (
    <div className="fixed z-50 top-0 left-0 w-screen min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="relative">
        <img src={mainLogo} className="w-96" alt="logo" />
        <div className="absolute inset-0 flex items-center justify-center pt-36">
          <CircularProgress />
        </div>
      </div>
      <div className="absolute">
        <h1 className="relative bottom-14 text-2xl font-normal text-white text-opacity-50 non-italic">
          Добро Пожаловать
        </h1>
      </div>
      {props.children}
    </div>
  );
};

export default Preloader;
