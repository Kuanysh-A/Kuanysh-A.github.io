import React from "react";
import bmcNavBlack from "./../assets/bmcNavBlack.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";

const Footer = (props) => {
  return (
    <footer
      className={` bg-white w-[1006px] h-[116px] rounded-tl-2xl ${props.className}`}
    >
      <img
        src={bmcNavBlack}
        className="pl-[52px] pt-[19px] pr-[877px] pb-[20px]"
      />

      <div className="ml-[225px] mb-[66px] mr-[650px] mt-[-90px] w-[101px] h-[21px] font-geometria">
        Контакты:
      </div>

      <div className="ml-[335px] mt-[-87px] mb-[66px] mr-[456px] font-inter">
        @bmc_group_kz
        <br />
        +7 705 396 05 88
        <br />
        info@bmc-group.kz
      </div>

      <div className="ml-[225px] mt-[-115px] mb-[48px] mr-[350px] w-[18px] h-[18px]">
        <AiOutlineInstagram color="gray" className="w-[18px] h-[18px]" />
      </div>
      <div className="ml-[247px] mt-[-62px] mb-[48px] mr-[362px] w-[17.65px] h-[10px]">
        <FiPhoneCall color="gray" className="w-[17.65px] h-[10px]" />
      </div>
      <div className="ml-[273px] mt-[-59px] mb-[66px] mr-[456px] w-[18.5px] h-[14.2px]">
        <BsEnvelope color="gray" className="w-[18.5px] h-[14.2px]" />
      </div>

      <div className="ml-[840px] mt-[-38px] mb-[66px] mr-[432px] w-[143px] h-[15px] non-italic font-inter text-[12px] leading-[15px] font-light text-opacity-80">
        &copy; все права защищены
      </div>
    </footer>
  );
};

export default Footer;
