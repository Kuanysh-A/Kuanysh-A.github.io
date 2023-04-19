import React from "react";

const CLASS = "bg-primary rounded-r-xl flex items-center justify-end h-full";

const Billet = (props) => {
  return (
    <>
      <div className="h-[71px] flex items-center">
        <div className={`${CLASS} ${props.className}`}>
          <span className={`text-white text-5xl font-medium `}>
            {props.text}
          </span>
        </div>
        <div className="ml-4">
          <a className="underline text-gray opacity-40" href="#">
            подробнее
          </a>
        </div>
      </div>
      <span className="text-xl mt-1 text-black opacity-70 ml-16">
        {props.info}
      </span>
    </>
  );
};

export default Billet;
