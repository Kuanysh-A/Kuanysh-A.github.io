import React from "react";
import Vector22 from "./../assets/Vector22.svg";
import Rectangle910 from "./../assets/rectangle910.png";
import Rectangle914 from "./../assets/rectangle914.png";
import Union from "./../assets/union.png";
import Layer20 from "./../assets/layer20.png";
import Layer21 from "./../assets/layer21.png";
import Layer22 from "./../assets/layer22.png";
import zerotwo from "./../assets/02.png";
import rightblock from "./../assets/rightblock.png";
import Rightside from "./../assets/rightside.png";
import bigcity from "./../assets/bigcity.png";
import arrowdown from "./../assets/vector491.png";
import flats from "./../assets/flats.png";
import zhks from "./../assets/zhks.png";
import graphs from "./../assets/graphs.png";
import telephone from "./../assets/telephone.png";
import { VerticalNav } from "../components/VerticalNav";
import Footer2 from "../components/Footer2";
import Button from "../components/Button";
import Slider from "../components/Slider";

export const Marketing = (props) => {
  return (
    <div className="select-none relative">
      <div className="relative h-[900px] w-[full] bg-interestingdark ">
        {props.children}
        <img
          src={Vector22}
          alt=""
          className="absolute w-[316px] h-[221px] mt-[310px]"
        />
        <div className="absolute mt-[80px]">
          <VerticalNav className="absolute ml-[125px] w-[74px] h-[629px] cursor-pointer fixed-navbar z-30" />
        </div>
        <span className="absolute text-white text-[89px] font-bold mt-[115px] ml-[330px]">
          Маркетинг
        </span>
        <div className="absolute mt-[293px] ml-[330px] ">
          <span className="text-[33px] medium text-white">
            Не знаете как выйти <br /> на рынок удачнее?
          </span>
          <br />
          <span
            className="text-xl light text-seriy"
            style={{ display: "block", marginTop: "15px" }}
          >
            Предоставим вам детальную аналитику <br /> по каждому застройщику,
            по каждому объекту <br /> в каждом городе, которая регулярно <br />{" "}
            обновляется.
          </span>
          <br />
          <span class="text-xl font-bold text-seriy">BIG DATA </span>
          <span class="text-xl light text-seriy">
            это то, с чем мы работаем за вас.
          </span>
        </div>
        <img
          src={Rectangle914}
          alt=""
          className="absolute w-[257px] h-[316px] -bottom-6 ml-[330px] shadow-gray-900"
        />
        <div className="w-2 h-2 bg-primary opacity-20 absolute ml-[360px] bottom-[247px] rounded-full"></div>
        <span className="text-primary medium text-4 opacity-30 absolute ml-[375px] bottom-60">
          город
        </span>
        <div className="bottom-16 absolute ml-[360px]">
          <span className="text-primary font-medium text-[28px]">Астана</span>{" "}
          <br />
          <span className="text-primary light text-[28px] opacity-60">
            Алматы
          </span>{" "}
          <br />
          <span className="text-primary light text-[28px] opacity-60">
            Костанай
          </span>{" "}
          <br />
          <span className="text-primary light text-[28px] opacity-60">
            Актобе
          </span>{" "}
          <br />
        </div>
        <span className="text-primary light text-[28px] opacity-60 -bottom-4 absolute ml-[360px]">
          Шымкент
        </span>

        <img
          src={Rectangle910}
          alt=""
          className="absolute w-[298px] h-[328px] text-navColor -bottom-6 ml-[530px] filter drop-shadow-md"
        />
        <div className="-bottom-2 absolute ml-[652px] z-20">
          <span className="text-primary light text-[26px] opacity-60">
            BI Group
          </span>{" "}
          <br />
          <span className="text-primary medium text-[26px]">G-park</span> <br />
          <span className="text-primary light text-[26px] opacity-60">
            BAZIS-A
          </span>{" "}
          <br />
          <span className="text-primary light text-[26px] opacity-60">
            NAK
          </span>{" "}
          <br />
          <span className="text-primary light text-[26px] opacity-60">
            ORDA
          </span>{" "}
          <br />
          <span className="text-primary light text-[26px] opacity-60">
            INVEST
          </span>{" "}
        </div>
        <div className="absolute w-6 h-6 bg-primary bottom-[155px] ml-[621px] z-20 rounded-full">
          <img
            src={Layer20}
            alt=""
            className="absolute w-4 h-4 bg-primary z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          />
        </div>
        <img
          src={Layer21}
          alt=""
          className="w-14 h-7 absolute bottom-[193px] ml-[605px] z-20"
        />
        <img
          src={Layer22}
          alt=""
          className="w-8 h-6 absolute bottom-[116px] ml-[617px] z-20"
        />
        <div className="w-2 h-2 bg-primary opacity-20 absolute ml-[620px] bottom-[247px] rounded-full"></div>
        <span className="text-primary medium text-4 opacity-30 absolute ml-[635px] bottom-[240px]">
          Застройщик
        </span>
        <img
          src={Union}
          alt=""
          className="absolute w-[761px] h-[414px] bottom-0 right-[165px]"
        />
        <img
          src={Rightside}
          alt=""
          className="absolute w-[721px] h-[400px] bottom-0 right-44"
        />
        <Button className="absolute bg-primary text-white font-inter bottom-4 left-64 py-0">
          Рассчитать стоимость
        </Button>
      </div>
      <div className="relative h-[330px] w-full bg-white z-40">
        <span className="absolute ml-[330px] medium text-black text-[33px] mt-[70px]">
          Структуризация <br /> и стратегия
        </span>
        <span className="absolute ml-[330px] light text-black text-5 mt-[170px]">
          на основе массива данных <br /> мы разрабатываем стратегию для <br />{" "}
          отдела продаж и в режиме <br /> реального времени корректируем <br />{" "}
          её в зависимости от условий рынка
        </span>
        <img
          src={zerotwo}
          alt=""
          className="absolute w-[203px] h-[120px] ml-[225px] mt-[50px]"
        />
        <img
          src={rightblock}
          alt=""
          className="absolute right-0 w-[700px] h-[252px] top-12"
        />
      </div>
      <div className="relative h-[900px] w-full bg-interestingdark z-28">
        <img
          src={Vector22}
          alt=""
          className="absolute w-[316px] h-[221px] mt-[310px]"
        />
        <span className="absolute text-white text-[89px] medium ml-[300px] mt-[50px]">
          Мир это данные
        </span>
        <img
          src={bigcity}
          alt=""
          className="absolute w-[876px] h-[592px] ml-[300px] mt-[220px] z-10"
        />
        <img
          src={arrowdown}
          alt=""
          className="absolute w-[240px] h-[150px] mt-[120px] ml-[1010px] "
        />
        <span class="absolute text-xl text-white right-6 bg-primary p-4 top-80 rounded-lg z-20">
          А мы систематизируем <br /> и управляем данными!
        </span>
        <div className="absolute top-32 right-8  justify-center items-center z-19">
          <div className="flex flex-col items-center animate-marquee">
            <div
              className="text-interestingdark text-4xl py-1 px-2 mx-1"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.22)",
                WebkitTextFillColor: "transparent",
              }}
            >
              <div className="animate-marquee whitespace-nowrap">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="mx-4">
                    <br />
                    BIG DATA
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img
          src={flats}
          alt=""
          className="absolute w-[601px] h-[192px] -right-12 top-[440px] z-9"
        />
        <img
          src={zhks}
          alt=""
          className="absolute w-[342px] h-[28px] right-2 top-[640px] z-9"
        />
        <img
          src={graphs}
          alt=""
          className="absolute w-[385px] h-[95px] right-2 top-[690px] z-9"
        />
      </div>
      <div className="relative h-[961px] w-[full] bg-interestingdark ">
        <span className="absolute mt-[215px] ml-[340px] text-white font-bold text-[50px] ">
          Но главное это удобство!{" "}
        </span>
        <span className="absolute mt-[285px] ml-[340px] light text-seriy text-[18px] ">
          Вы и ваши менеджеры получают понятные и визуально простые системы{" "}
          <br />
          для использования. А мы разбираемся со всей скучной и объёмной
          работой.
        </span>
        <span className="absolute mt-[415px] ml-[340px] text-[33px] text-white medium">
          В дополнение <br /> настраиваем
        </span>
        <div className="absolute mt-[520px] ml-[340px] bg-primary rounded-lg w-[150px] h-[100px] flex items-center justify-center">
          <div className="flex items-center justify-center flex-col -ml-5">
            <span className="flex items-center justify-between w-full mt-2">
              <span className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-white mr-2"></span>
                <span className="text-white">Bitrix</span>
              </span>
            </span>
            <span className="flex items-center justify-between w-full mt-2">
              <span className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-white mr-2"></span>
                <span className="text-white">Flatris</span>
              </span>
            </span>
            <span className="flex items-center justify-between w-full mt-2">
              <span className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-white mr-2"></span>
                <span className="text-white">Protrend</span>
              </span>
            </span>
          </div>
        </div>
        <span className="absolute mt-[645px] ml-[340px] text-[33px] text-white medium leading-9">
          Создаём готовый план <br /> для открытия ОП
        </span>
        <span className="absolute mt-[745px] ml-[340px] text-[33px] text-white medium leading-9">
          Консультируем <br /> по найму агентств продаж
        </span>

        <img
          src={telephone}
          alt=""
          className="absolute top-36 h-[800px] w-[1300px] right-0 z-10"
        />
        <img
          src={Vector22}
          alt=""
          className="absolute w-[316px] h-[221px] mt-[510px]"
        />
        <Footer2 className="bottom-0 right-0"></Footer2>
      </div>
    </div>
  );
};

export default Marketing;
