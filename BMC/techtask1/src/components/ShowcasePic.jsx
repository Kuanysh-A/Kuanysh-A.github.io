import React, { useState } from "react";

export const ShowcasePic = (props) => {
  const [showSmallImage, setShowSmallImage] = useState(true);

  function handleClick() {
    setShowSmallImage(false);
  }

  return (
    <>
      <div className="relative w-[600px] h-[600px]">
        <div className={props.picturesize}>
          <img src={props.img} alt="" />
        </div>
        {showSmallImage ? (
          <div className="absolute z-10 bottom-36 -left-6">
            <div
              className="rounded-xl w-16 h-40  border-gray border-2  backdrop-filter backdrop-blur-sm cursor-pointer"
              onClick={handleClick}
            ></div>
          </div>
        ) : (
          <div className="absolute z-11 bottom-[144px] -left-6">
            <div
              className="select-none rounded-xl w-56 h-80  border-gray border-2  backdrop-filter backdrop-blur-sm"
              onClick={() => setShowSmallImage(true)}
            >
              <span className="absolute text-white font-bold text-3xl ml-7 mt-5">
                {props.photosetname}
              </span>
              <p className="absolute text-white font-normal text-lg ml-7 mt-14">
                photoset
              </p>
              <a href="/">
                <button className="absolute rounded-md bg-transparent text-white font-normal px-6 py-2 flex items-center justify-center bottom-8 border-white border ml-7 hover:shadow-white hover:shadow-sm">
                  смотреть
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
