import React from "react";
import bmcNavBlack from "./../assets/bmcNavBlack.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const Footer = (props) => {
  return (
    <footer
      className={`absolute bg-white w-[860px] h-[116px] grid grid-cols-4 grid-flow-row-dense gap-x-4 rounded-tl-2xl ${props.className}`}
    >
      <img
        src={bmcNavBlack}
        className="col-span-1  p-4 ml-[55px] flex items-center justify-center"
      />

      <div className="absolute">
        <div className=" relative col-span-1 flex flex-col justify-center ml-[260px] mt-[19px] ">
          <div className="font-geometria text-black mb-2">Контакты:</div>
          <div className="flex items-center font-inter text-black">
            <AiOutlineInstagram color="gray" className="w-5 h-5 mr-2" />
            <span className="py-0">@bmc_group_kz</span>
          </div>
          <div className="flex items-center font-inter text-black">
            <FiPhoneCall color="gray" className="w-4 h-4 mr-2" />
            <span className="py-0">+7 705 396 05 88</span>
          </div>
        </div>
      </div>
      <div className="absolute">
        <div className="  col-span-1 flex items-center flex-col ml-[440px] mt-[50px]">
          <div className="flex items-center font-inter text-black">
            <BsEnvelope color="gray" className="w-5 h-5 mr-2" />
            <span className="py-0">info@bmc-group.kz</span>
          </div>
        </div>
      </div>

      <div className="absolute">
        <div className="col-span-1 flex justify-center flex-col ml-[630px] mt-[19px]">
          <div className="font-geometria text-black mb-2">Адрес:</div>
          <div
            className="flex items-start font-inter text-black"
            style={{ marginTop: "-5px" }}
          >
            <IoLocationOutline color="gray" className="w-5 h-5 mr-2 mt-1" />
            <span className="py-0">
              Кунаева 4,
              <br />
              Казмедиа Центр
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
